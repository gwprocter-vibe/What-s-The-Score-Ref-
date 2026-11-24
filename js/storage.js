// What's The Score Ref - LocalStorage Session, Preferences, History & Sync Module

const SESSION_STORAGE_KEY = 'whatsthescoreref_session_v3';
const LEGACY_STORAGE_KEY = 'whatsthescoreref_state_v2';
const PREFS_STORAGE_KEY = 'whatsthescoreref_prefs_v1';
const HISTORY_STORAGE_KEY = 'whatsthescoreref_history_v1';
const MAX_HISTORY_ITEMS = 50;

export function saveSessionState(session) {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch (e) {
    console.warn('LocalStorage save failed:', e);
  }
}

export function loadSessionState() {
  try {
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

// Persistent User Preferences (Audio, Wake Lock, Onboarding, Venue/Referee)
export function loadPrefs() {
  const defaults = {
    audioMuted: false,
    wakeLockEnabled: true,
    hasCompletedRoleOnboarding: false,
    pitchVenue: '',
    refName: ''
  };
  try {
    const raw = localStorage.getItem(PREFS_STORAGE_KEY);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch (e) {
    return defaults;
  }
}

export function savePrefs(partial) {
  try {
    const current = loadPrefs();
    const updated = { ...current, ...partial };
    localStorage.setItem(PREFS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.warn('Preferences save failed:', e);
    return loadPrefs();
  }
}

// Season Match History Archive
export function loadMatchHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

export function saveMatchToHistory(entry) {
  if (!entry) return [];
  try {
    const list = loadMatchHistory();
    // Avoid duplicate consecutive saves of the exact same match signature within 5 minutes
    const sig = `${entry.matchNum}|${entry.home}|${entry.away}|${entry.homeScore}-${entry.awayScore}|${(entry.goals || []).length}`;
    if (list.length > 0) {
      const latest = list[0];
      const latestSig = `${latest.matchNum}|${latest.home}|${latest.away}|${latest.homeScore}-${latest.awayScore}|${(latest.goals || []).length}`;
      if (sig === latestSig && Math.abs((entry.savedAt || Date.now()) - (latest.savedAt || 0)) < 5 * 60 * 1000) {
        list[0] = { ...latest, ...entry, archiveId: latest.archiveId };
        localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(list));
        return list;
      }
    }

    const record = {
      archiveId: entry.archiveId || `${Date.now()}_${Math.floor(Math.random() * 10000)}`,
      savedAt: entry.savedAt || Date.now(),
      dateStr: entry.dateStr || new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }),
      ...entry
    };

    const next = [record, ...list].slice(0, MAX_HISTORY_ITEMS);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(next));
    return next;
  } catch (e) {
    console.warn('Match history save failed:', e);
    return loadMatchHistory();
  }
}

export function deleteMatchFromHistory(archiveId) {
  try {
    const next = loadMatchHistory().filter(item => item.archiveId !== archiveId);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(next));
    return next;
  } catch (e) {
    return loadMatchHistory();
  }
}

export function clearMatchHistory() {
  try {
    localStorage.removeItem(HISTORY_STORAGE_KEY);
  } catch (e) {}
  return [];
}

// Compact Offline Match Sync Payload (Ref <-> Coach Touchline Sync)
function toBase64Url(str) {
  const utf8Bytes = new TextEncoder().encode(str);
  let binary = '';
  utf8Bytes.forEach(b => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(b64url) {
  let b64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4 !== 0) b64 += '=';
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

export function encodeMatchSyncCode(matchData) {
  const compact = {
    v: 1,
    m: matchData.id || 1,
    h: matchData.home || 'Home Team',
    a: matchData.away || 'Away Team',
    hc: matchData.homeColor || '#f43f5e',
    ac: matchData.awayColor || '#2563eb',
    hs: matchData.homeScore || 0,
    as: matchData.awayScore || 0,
    p: matchData.period || 'Full Time',
    tm: matchData.targetMinutes || 15,
    g: (matchData.goals || []).map(g => ({
      t: g.team === 'away' ? 'a' : 'h',
      s: typeof g.timeSeconds === 'number' ? g.timeSeconds : 0,
      tm: g.time || '00:00',
      p: g.period === '2nd Half' ? 2 : 1,
      og: g.isOwnGoal ? 1 : 0,
      sc: g.scorer ? [g.scorer.number, g.scorer.initials || ''] : null,
      as: g.assist ? [g.assist.number, g.assist.initials || ''] : null
    }))
  };
  return `WTSR1:${toBase64Url(JSON.stringify(compact))}`;
}

export function decodeMatchSyncCode(input) {
  if (!input || typeof input !== 'string') return null;
  let token = input.trim();

  // Extract from full URL if pasted as ?sync=...
  if (token.includes('sync=')) {
    try {
      const url = new URL(token, 'https://example.local');
      token = url.searchParams.get('sync') || token;
    } catch (_) {
      const match = token.match(/[?&]sync=([^&#\s]+)/);
      if (match) token = decodeURIComponent(match[1]);
    }
  }

  if (token.startsWith('WTSR1:')) {
    token = token.slice(6);
  }

  try {
    const parsed = JSON.parse(fromBase64Url(token));
    if (!parsed || parsed.v !== 1) return null;

    let runH = 0;
    let runA = 0;
    const homeName = String(parsed.h || 'Home Team').slice(0, 32);
    const awayName = String(parsed.a || 'Away Team').slice(0, 32);

    const goals = Array.isArray(parsed.g) ? parsed.g.map((cg, idx) => {
      const team = cg.t === 'a' ? 'away' : 'home';
      if (team === 'home') runH++; else runA++;
      return {
        id: Date.now() + idx,
        team,
        teamName: team === 'home' ? homeName : awayName,
        time: cg.tm || '00:00',
        timeSeconds: Number(cg.s) || 0,
        period: cg.p === 2 ? '2nd Half' : '1st Half',
        scoreHome: runH,
        scoreAway: runA,
        isOwnGoal: Boolean(cg.og),
        scorer: Array.isArray(cg.sc) ? { number: Number(cg.sc[0]) || 1, initials: String(cg.sc[1] || '').slice(0, 3) } : null,
        assist: Array.isArray(cg.as) ? { number: Number(cg.as[0]) || 1, initials: String(cg.as[1] || '').slice(0, 3) } : null
      };
    }) : [];

    return {
      matchId: parsed.m === 2 ? 2 : 1,
      homeName,
      awayName,
      homeColor: parsed.hc || '#f43f5e',
      awayColor: parsed.ac || '#2563eb',
      homeScore: goals.length > 0 ? runH : (Number(parsed.hs) || 0),
      awayScore: goals.length > 0 ? runA : (Number(parsed.as) || 0),
      period: parsed.p || 'Full Time',
      targetMinutes: Math.min(60, Math.max(5, Number(parsed.tm) || 15)),
      goals
    };
  } catch (e) {
    console.warn('Invalid sync code:', e);
    return null;
  }
}

// Backward compatibility aliases
export const saveAppState = saveSessionState;
export const loadAppState = loadSessionState;
export const clearAppState = clearSessionState;
