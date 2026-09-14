// What's The Score Ref - LocalStorage Session Persistence Module

const SESSION_STORAGE_KEY = 'whatsthescoreref_session_v3';
const LEGACY_STORAGE_KEY = 'whatsthescoreref_state_v2';

export function saveSessionState(session) {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }
}

export function loadSessionState() {
  try {
    // Purge deprecated v1
    try { localStorage.removeItem('whatsthescoreref_state_v1'); } catch (_) {}

    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }

    // Auto-migrate from v2 if available
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw) {
      const legacyState = JSON.parse(legacyRaw);
      return {
        activeMatchId: 1,
        matches: {
          1: {
            timer: legacyState.timer || null,
            score: legacyState.score || null
          },
          2: null
        },
        isSunlightMode: legacyState.isSunlightMode || false
      };
    }

    return null;
  } catch (e) {
    console.warn('LocalStorage load failed:', e);
    return null;
  }
}

export function clearSessionState() {
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch (e) {
    console.warn('LocalStorage clear failed:', e);
  }
}

// Backward compatibility aliases
export const saveAppState = saveSessionState;
export const loadAppState = loadSessionState;
export const clearAppState = clearSessionState;
