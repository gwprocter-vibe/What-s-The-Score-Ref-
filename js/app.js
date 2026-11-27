// What's The Score Ref - Master Application Coordinator
import * as hardware from './hardware.js';
import * as timer from './timer.js';
import * as score from './score.js';
import * as prematch from './prematch.js';
import * as rules from './rules.js';
import * as report from './report.js';
import * as lockMode from './lockMode.js';
import * as storage from './storage.js';
import * as tactics from './tactics.js';

let deferredPrompt = null;

function createDefaultMatchState(id = 1) {
  return {
    id,
    timer: {
      timerSeconds: 0,
      stoppageSeconds: 0,
      isTimerRunning: false,
      currentPeriod: '1st Half',
      subReminderTriggered: false,
      subBannerDismissed: false,
      oneMinuteAlertTriggered: false,
      oneMinuteBannerDismissed: false,
      targetAlertTriggered: false,
      forgotResumeDismissed: false,
      hasHalfStarted: false,
      firstHalfEnded: false,
      targetHalfSeconds: 15 * 60
    },
    score: {
      homeScore: 0,
      awayScore: 0,
      halfTimeScores: { home: null, away: null },
      kickoffTeam: 'home',
      kickoffChosen: false,
      coachTeam: score.getCoachTeam(),
      isPowerPlayDismissed: false,
      wasPowerPlayActive: false,
      isPowerPlayEndedAlertActive: false,
      isPausedGoalAlertActive: false,
      goals: [],
      coachNotes: { potm: null, notes: '', moments: [], rotation: score.createDefaultRotation() },
      teams: {
        home: { name: 'Home Team', color: '#f43f5e', border: 'border-rose-500/70', roster: score.createDefaultRoster() },
        away: { name: 'Away Team', color: '#2563eb', border: 'border-blue-500/70', roster: score.createDefaultRoster() }
      }
    }
  };
}

let sessionState = {
  activeMatchId: 1,
  matches: {
    1: createDefaultMatchState(1),
    2: createDefaultMatchState(2)
  },
  isSunlightMode: false
};

window.getActiveMatchId = () => sessionState.activeMatchId;
window.getSessionState = () => sessionState;

let isRestoringState = false;

function saveActiveMatchSnapshot() {
  if (isRestoringState) return;
  sessionState.matches[sessionState.activeMatchId] = {
    id: sessionState.activeMatchId,
    timer: timer.getTimerState(),
    score: score.getScoreState()
  };
}

export function persistState() {
  if (isRestoringState) return;
  saveActiveMatchSnapshot();
  storage.saveSessionState(sessionState);
}
window.persistSessionState = persistState;

export function hasActiveMatchInProgress() {
  const m1 = sessionState.matches[1];
  const m2 = sessionState.matches[2];
  return [m1, m2].some(m => {
    if (!m) return false;
    const t = m.timer || {};
    const s = m.score || {};
    if (t.currentPeriod === 'Full Time') return false;
    return (t.timerSeconds > 0) || Boolean(t.hasHalfStarted) || (t.currentPeriod === '2nd Half') || (s.homeScore > 0) || (s.awayScore > 0);
  });
}

// ---------------- Season Match History Archive ----------------
export function archiveMatchById(matchId) {
  saveActiveMatchSnapshot();
  const m = sessionState.matches[matchId];
  if (!m || !m.score) return;

  const s = m.score;
  const t = m.timer || {};
  const hasAnyActivity = (s.homeScore > 0) || (s.awayScore > 0) || (t.timerSeconds > 0) || (t.currentPeriod === 'Full Time') || ((s.coachNotes?.moments || []).length > 0);
  if (!hasAnyActivity) return;

  const prefs = storage.loadPrefs();
  let h1H = 0, h1A = 0, h2H = 0, h2A = 0;
  (s.goals || []).forEach(g => {
    if (g.period === '1st Half') {
      if (g.team === 'home') h1H++; else h1A++;
    } else {
      if (g.team === 'home') h2H++; else h2A++;
    }
  });

  storage.saveMatchToHistory({
    matchNum: matchId,
    home: s.teams?.home?.name || 'Home Team',
    away: s.teams?.away?.name || 'Away Team',
    homeColor: s.teams?.home?.color || '#f43f5e',
    awayColor: s.teams?.away?.color || '#2563eb',
    homeScore: s.homeScore || 0,
    awayScore: s.awayScore || 0,
    half1: `${h1H}-${h1A}`,
    half2: `${h2H}-${h2A}`,
    goals: (s.goals || []).map(g => ({ ...g })),
    potm: s.coachNotes?.potm ? { ...s.coachNotes.potm } : null,
    momentsCount: (s.coachNotes?.moments || []).length,
    notes: s.coachNotes?.notes || '',
    pitch: prefs.pitchVenue || '',
    ref: prefs.refName || '',
    durationMin: Math.round((t.targetHalfSeconds || 900) / 60)
  });
  updateHistoryCountBadge();
}

export function archiveActiveMatchToHistory() {
  archiveMatchById(sessionState.activeMatchId);
}
window.archiveActiveMatchToHistory = archiveActiveMatchToHistory;

function updateHistoryCountBadge() {
  const badge = document.getElementById('quickToolsHistoryBadge');
  if (!badge) return;
  const count = storage.loadMatchHistory().length;
  badge.innerText = count > 0 ? `${count} SAVED` : 'ARCHIVE';
}

export function openMatchHistoryModal() {
  renderMatchHistoryModal();
  window.openModal('matchHistoryModal');
}
window.openMatchHistoryModal = openMatchHistoryModal;

export function renderMatchHistoryModal() {
  const listEl = document.getElementById('matchHistoryList');
  const countEl = document.getElementById('matchHistoryCountBadge');
  const clearBtn = document.getElementById('clearHistoryBtn');
  const items = storage.loadMatchHistory();

  if (countEl) countEl.innerText = `${items.length} Match${items.length === 1 ? '' : 'es'}`;
  if (clearBtn) clearBtn.classList.toggle('hidden', items.length === 0);
  if (!listEl) return;

  if (items.length === 0) {
    listEl.innerHTML = `
      <div class="text-center py-8 px-4 text-slate-500 text-xs space-y-1.5">
        <div class="text-2xl">🏆</div>
        <div class="font-bold text-slate-300">No archived matches yet</div>
        <p class="text-[11px] text-slate-500">Completed matches are automatically saved here at Full Time so you never lose past results or POTM winners.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = items.map(item => {
    const safeHome = score.escapeHtml(item.home);
    const safeAway = score.escapeHtml(item.away);
    const safeDate = score.escapeHtml(item.dateStr || '');
    const potmLabel = item.potm ? `#${item.potm.number}${item.potm.initials ? ' ' + score.escapeHtml(item.potm.initials) : ''}` : '';
    return `
      <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-[10px] text-slate-400">
          <span class="font-bold uppercase tracking-wider text-emerald-400">Match ${item.matchNum || 1} • ${safeDate}</span>
          <div class="flex items-center gap-1.5">
            <button type="button" onclick="copyHistoryEntrySummary('${score.escapeHtml(item.archiveId)}')" class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold cursor-pointer transition" title="Copy summary">Copy</button>
            <button type="button" onclick="deleteHistoryEntry('${score.escapeHtml(item.archiveId)}')" class="px-1.5 py-0.5 rounded bg-slate-900 hover:bg-rose-950 text-slate-500 hover:text-rose-400 font-bold cursor-pointer transition" title="Delete">✕</button>
          </div>
        </div>
        <div class="flex items-center justify-between gap-2">
          <span class="font-bold text-xs text-white truncate flex-1">${safeHome}</span>
          <span class="font-mono-sport font-black text-base text-amber-300 px-2.5 py-0.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">${item.homeScore} - ${item.awayScore}</span>
          <span class="font-bold text-xs text-white truncate flex-1 text-right">${safeAway}</span>
        </div>
        <div class="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-900 flex-wrap gap-1">
          <span>1H: <strong class="text-slate-300">${score.escapeHtml(item.half1 || '0-0')}</strong> • 2H: <strong class="text-slate-300">${score.escapeHtml(item.half2 || '0-0')}</strong></span>
          <div class="flex items-center gap-1.5">
            ${potmLabel ? `<span class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">⭐ ${potmLabel}</span>` : ''}
            ${item.momentsCount > 0 ? `<span class="text-slate-400">📋 ${item.momentsCount}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

export function copyHistoryEntrySummary(archiveId) {
  const item = storage.loadMatchHistory().find(x => x.archiveId === archiveId);
  if (!item) return;
  let txt = `⚽ ${item.dateStr} — Match ${item.matchNum}: ${item.home} ${item.homeScore} - ${item.awayScore} ${item.away} (1H: ${item.half1}, 2H: ${item.half2})`;
  if (item.potm) {
    txt += `\n⭐ POTM: #${item.potm.number}${item.potm.initials ? ' ' + item.potm.initials : ''}`;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).catch(() => {});
  }
  hardware.hapticFeedback('success');
  score.showMatchToast('Archived match summary copied!', '📋', 2200);
}
window.copyHistoryEntrySummary = copyHistoryEntrySummary;

export function deleteHistoryEntry(archiveId) {
  storage.deleteMatchFromHistory(archiveId);
  hardware.hapticFeedback('tap');
  updateHistoryCountBadge();
  renderMatchHistoryModal();
}
window.deleteHistoryEntry = deleteHistoryEntry;

export function clearAllHistory() {
  storage.clearMatchHistory();
  hardware.hapticFeedback('success');
  updateHistoryCountBadge();
  renderMatchHistoryModal();
}
window.clearAllHistory = clearAllHistory;

// ---------------- Ref <-> Coach Match Sync (Share & Import) ----------------
export function openMatchSyncModal() {
  saveActiveMatchSnapshot();
  const activeId = sessionState.activeMatchId;
  const data = report.getMatchDataForScope(activeId);
  const code = storage.encodeMatchSyncCode(data);
  const codeEl = document.getElementById('matchSyncExportCode');
  const labelEl = document.getElementById('matchSyncActiveLabel');
  const importInput = document.getElementById('matchSyncImportInput');

  if (codeEl) codeEl.value = code;
  if (labelEl) labelEl.innerText = `Match ${activeId}: ${data.home} ${data.homeScore} - ${data.awayScore} ${data.away}`;
  if (importInput) importInput.value = '';

  window.openModal('matchSyncModal');
}
window.openMatchSyncModal = openMatchSyncModal;

export function copyMatchSyncCode() {
  const codeEl = document.getElementById('matchSyncExportCode');
  if (!codeEl || !codeEl.value) return;
  const shareUrl = `${window.location.origin}${window.location.pathname}?sync=${encodeURIComponent(codeEl.value)}`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareUrl).catch(() => {});
  }
  hardware.hapticFeedback('success');
  score.showMatchToast('Sync link copied! Send to Coach or Ref', '🔗', 2600);
}
window.copyMatchSyncCode = copyMatchSyncCode;

export function shareMatchSyncNative() {
  const codeEl = document.getElementById('matchSyncExportCode');
  if (!codeEl || !codeEl.value) return;
  const data = report.getMatchDataForScope(sessionState.activeMatchId);
  const shareUrl = `${window.location.origin}${window.location.pathname}?sync=${encodeURIComponent(codeEl.value)}`;
  const title = `Sync Match ${data.id}: ${data.home} ${data.homeScore}-${data.awayScore} ${data.away}`;

  if (navigator.share) {
    navigator.share({
      title,
      text: `${title} — Tap link to load official match timeline in What's The Score Ref:`,
      url: shareUrl
    }).catch(() => {});
  } else {
    copyMatchSyncCode();
  }
}
window.shareMatchSyncNative = shareMatchSyncNative;

export function applyImportedMatchSync(decoded) {
  if (!decoded) {
    score.showMatchToast('Invalid sync code or link', '⚠️', 2600);
    return false;
  }

  saveActiveMatchSnapshot();
  if (timer.getTimerState().isTimerRunning) {
    timer.pauseTimer();
  }

  const targetMatchId = decoded.matchId === 2 ? 2 : 1;
  const existingMatch = sessionState.matches[targetMatchId];
  const existingScore = existingMatch?.score;
  const existingTeams = existingScore?.teams;
  const existingGoals = Array.isArray(existingScore?.goals) ? existingScore.goals : [];

  const fresh = createDefaultMatchState(targetMatchId);
  fresh.timer.targetHalfSeconds = decoded.targetMinutes * 60;
  fresh.timer.currentPeriod = decoded.period === '1st Half' || decoded.period === '2nd Half' ? decoded.period : 'Full Time';
  fresh.timer.firstHalfEnded = fresh.timer.currentPeriod !== '1st Half';

  fresh.score.homeScore = decoded.homeScore;
  fresh.score.awayScore = decoded.awayScore;
  // Merge local coach scorer/assist attributions onto matching synced goals!
  fresh.score.goals = (decoded.goals || []).map((incGoal, idx) => {
    const matchLocal = existingGoals.find(lg =>
      lg.team === incGoal.team &&
      lg.period === incGoal.period &&
      lg.scoreHome === incGoal.scoreHome &&
      lg.scoreAway === incGoal.scoreAway
    ) || existingGoals[idx];
    if (matchLocal && (matchLocal.scorer || matchLocal.assist || matchLocal.isOwnGoal) && matchLocal.team === incGoal.team) {
      return {
        ...incGoal,
        scorer: incGoal.scorer || matchLocal.scorer || null,
        assist: incGoal.assist || matchLocal.assist || null,
        isOwnGoal: Boolean(incGoal.isOwnGoal || matchLocal.isOwnGoal)
      };
    }
    return incGoal;
  });

  // Preserve Coach Team, Moments, POTM, Notes & Fair-Play Rotation!
  if (existingScore?.coachTeam) {
    fresh.score.coachTeam = existingScore.coachTeam;
  }
  if (existingScore?.coachNotes) {
    fresh.score.coachNotes = JSON.parse(JSON.stringify(existingScore.coachNotes));
  }

  fresh.score.teams.home = {
    name: decoded.homeName,
    color: decoded.homeColor,
    border: 'border-rose-500/70',
    roster: existingTeams?.home?.roster || score.createDefaultRoster()
  };
  fresh.score.teams.away = {
    name: decoded.awayName,
    color: decoded.awayColor,
    border: 'border-blue-500/70',
    roster: existingTeams?.away?.roster || score.createDefaultRoster()
  };

  sessionState.matches[targetMatchId] = fresh;
  sessionState.activeMatchId = targetMatchId;

  isRestoringState = true;
  try {
    timer.restoreTimerState(fresh.timer);
    score.restoreScoreState(fresh.score);
  } finally {
    isRestoringState = false;
  }

  updateTabBadges();
  persistState();
  hardware.hapticFeedback('success');
  window.closeModal('matchSyncModal');
  score.showMatchToast(`✓ Synced Match ${targetMatchId}: ${decoded.homeName} ${decoded.homeScore}-${decoded.awayScore} ${decoded.awayName}`, '✅', 3500);
  return true;
}

export function importMatchSyncFromInput() {
  const input = document.getElementById('matchSyncImportInput');
  if (!input || !input.value.trim()) {
    score.showMatchToast('Paste a sync link or WTSR1 code first', 'ℹ️', 2200);
    return;
  }
  const decoded = storage.decodeMatchSyncCode(input.value.trim());
  applyImportedMatchSync(decoded);
}
window.importMatchSyncFromInput = importMatchSyncFromInput;

// ---------------- Tab Badges & Session Coordination ----------------
export function getMatchBadgeScore(match) {
  if (!match) return 'TBC';
  const timerState = match.timer || {};
  const scoreState = match.score || { homeScore: 0, awayScore: 0, goals: [] };

  if (timerState.currentPeriod === 'Full Time') {
    return `${scoreState.homeScore} - ${scoreState.awayScore} FT`;
  }

  const hasStarted = (timerState.timerSeconds > 0) ||
                    Boolean(timerState.isTimerRunning) ||
                    Boolean(timerState.hasHalfStarted) ||
                    (timerState.currentPeriod === '2nd Half') ||
                    (scoreState.goals && scoreState.goals.length > 0) ||
                    (scoreState.homeScore > 0 || scoreState.awayScore > 0);

  if (!hasStarted) return 'TBC';
  return `${scoreState.homeScore} - ${scoreState.awayScore}`;
}
window.getMatchBadgeScore = getMatchBadgeScore;

export function updateTabBadges() {
  saveActiveMatchSnapshot();

  const b1 = document.getElementById('tabMatch1Badge');
  const b2 = document.getElementById('tabMatch2Badge');
  if (b1) b1.innerText = getMatchBadgeScore(sessionState.matches[1]);
  if (b2) b2.innerText = getMatchBadgeScore(sessionState.matches[2]);

  const btn1 = document.getElementById('tabMatch1Btn');
  const btn2 = document.getElementById('tabMatch2Btn');

  const activeTabCls = 'py-1.5 px-2.5 sm:py-2 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md bg-emerald-500 text-slate-950 border-2 border-emerald-300 active:scale-[0.98]';
  const inactiveTabCls = 'py-1.5 px-2.5 sm:py-2 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition cursor-pointer bg-slate-900 text-slate-400 border border-slate-700 hover:text-white active:scale-[0.98]';

  if (sessionState.activeMatchId === 1) {
    if (btn1) btn1.className = activeTabCls;
    if (btn2) btn2.className = inactiveTabCls;
  } else {
    if (btn2) btn2.className = activeTabCls;
    if (btn1) btn1.className = inactiveTabCls;
  }
}
window.updateTabBadges = updateTabBadges;

let handoverToastTimeout = null;
export function showHandoverToast(msg) {
  // Use floating top match toast so we never expand #clockUnitCard or clip #coachTouchlineBar on 360x640 screens!
  score.showMatchToast(msg || 'Match 1 Saved & Archived! Match 2 Ready.', '✓', 3500);
  const toast = document.getElementById('matchHandoverSuccessToast');
  if (toast) toast.classList.add('hidden');
  if (handoverToastTimeout) {
    clearTimeout(handoverToastTimeout);
    handoverToastTimeout = null;
  }
}
window.showHandoverToast = showHandoverToast;

let reportToastTimeout = null;
export function showReportToast(msg = 'Copied to clipboard!') {
  const toast = document.getElementById('reportCopyToast');
  const toastText = document.getElementById('reportCopyToastText');
  if (toast) {
    if (toastText && msg) toastText.innerText = msg;
    toast.classList.remove('hidden');
    if (reportToastTimeout) clearTimeout(reportToastTimeout);
    reportToastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 2800);
  }
}
window.showReportToast = showReportToast;

export function saveMatch1AndPrepareMatch2() {
  if (timer.getTimerState().isTimerRunning) {
    timer.pauseTimer();
  }

  // Warn if Match 2 already has goals recorded
  const existingM2 = sessionState.matches[2];
  if (existingM2?.score && (existingM2.score.homeScore > 0 || existingM2.score.awayScore > 0)) {
    if (!window.confirm('Match 2 already has goals recorded. Overwrite Match 2 with a fresh 0-0 scorecard?')) {
      return;
    }
  }

  if (sessionState.activeMatchId === 1) {
    const tState = timer.getTimerState();
    if (tState.currentPeriod !== 'Full Time') {
      if (tState.currentPeriod === '1st Half') {
        score.finaliseHalfScore();
        timer.setFirstHalfEnded(true);
      }
      // Cleanly finalise without flashing reportModal or overlapping whistles!
      timer.setPeriod('Full Time', { openReport: false, silent: true });
    }
  }

  saveActiveMatchSnapshot();
  archiveMatchById(1);

  const m1ScoreState = sessionState.matches[1]?.score || score.getScoreState();
  const retainedTeams = JSON.parse(JSON.stringify(m1ScoreState.teams || {
    home: { name: 'Home Team', color: '#f43f5e', border: 'border-rose-500/70', roster: score.createDefaultRoster() },
    away: { name: 'Away Team', color: '#2563eb', border: 'border-blue-500/70', roster: score.createDefaultRoster() }
  }));
  const retainedCoachTeam = m1ScoreState.coachTeam || score.getCoachTeam();
  const m1TargetSec = sessionState.matches[1]?.timer?.targetHalfSeconds || timer.getTargetHalfSeconds() || 15 * 60;

  const freshMatch2 = createDefaultMatchState(2);
  freshMatch2.timer.targetHalfSeconds = m1TargetSec;
  freshMatch2.score.teams = retainedTeams;
  freshMatch2.score.coachTeam = retainedCoachTeam;
  freshMatch2.score.coachNotes.rotation = score.createDefaultRotation(retainedTeams[retainedCoachTeam]?.roster || []);
  sessionState.matches[2] = freshMatch2;
  sessionState.activeMatchId = 2;

  isRestoringState = true;
  try {
    timer.restoreTimerState(sessionState.matches[2].timer);
    score.restoreScoreState(sessionState.matches[2].score);
  } finally {
    isRestoringState = false;
  }

  saveActiveMatchSnapshot();
  persistState();
  updateTabBadges();

  window.closeModal('reportModal');
  window.closeModal('confirmEndHalfModal');
  window.closeModal('confirmResetModal');

  hardware.playWhistleTone('short');
  hardware.hapticFeedback('success');
  showHandoverToast('Match 1 Saved & Archived! Match 2 Ready.');
}
window.saveMatch1AndPrepareMatch2 = saveMatch1AndPrepareMatch2;

export function switchMatchTab(matchId) {
  if (matchId === sessionState.activeMatchId) return;

  saveActiveMatchSnapshot();
  if (timer.getTimerState().isTimerRunning) {
    timer.pauseTimer();
  }

  sessionState.activeMatchId = matchId;
  let target = sessionState.matches[matchId];
  if (!target) {
    target = createDefaultMatchState(matchId);
    if (matchId === 2 && sessionState.matches[1]?.score?.teams) {
      target.score.teams = JSON.parse(JSON.stringify(sessionState.matches[1].score.teams));
      target.score.coachTeam = sessionState.matches[1].score.coachTeam || score.getCoachTeam();
    }
    sessionState.matches[matchId] = target;
  }

  isRestoringState = true;
  try {
    timer.restoreTimerState(target.timer);
    score.restoreScoreState(target.score);
  } finally {
    isRestoringState = false;
  }

  updateTabBadges();
  persistState();
  hardware.hapticFeedback('tap');
}
window.switchMatchTab = switchMatchTab;

// ---------------- Global Modal Coordinator ----------------
const ALL_MODAL_IDS = [
  'timelineModal',
  'coachMomentsModal',
  'coachNotesModal',
  'squadRotationModal',
  'reportModal',
  'sharePickerModal',
  'coinModal',
  'prematchModal',
  'rulesModal',
  'teamEditModal',
  'goalAttributionModal',
  'squadInitialsModal',
  'confirmResetModal',
  'confirmResetHalfModal',
  'confirmEndHalfModal',
  'confirmConcludedGoalModal',
  'confirmConcludedScoreRemovalModal',
  'matchCardModal',
  'matchCardFullscreenModal',
  'instructionsModal',
  'roleSelectModal',
  'matchHistoryModal',
  'matchSyncModal',
  'installAppModal',
  'tacticsPlaybookModal',
  'tacticsBoardModal',
  'quickToolsDrawer'
];

window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.remove('hidden');
  hardware.hapticFeedback('tap');

  if (id === 'rulesModal') {
    rules.resetRulesModalView();
  } else if (id === 'prematchModal') {
    prematch.updatePrematchUI(score.teams.home?.name, score.teams.away?.name);
  } else if (id === 'instructionsModal') {
    const mode = score.getAppMode();
    switchInstructionsTab(mode === 'referee' ? 'ref' : 'coach');
  } else if (id === 'roleSelectModal') {
    updateRoleSelectModalUI();
  } else if (id === 'quickToolsDrawer') {
    updateHistoryCountBadge();
    hardware.syncHardwarePrefsUI();
  }
};

window.closeModal = function(id) {
  if (typeof document !== 'undefined') {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    window.getSelection?.()?.removeAllRanges();
  }
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('hidden');
};

// Expose Core Functions to Window
window.toggleTimer = timer.toggleTimer;
window.startTimer = timer.startTimer;
window.pauseTimer = timer.pauseTimer;
window.catchUpAllStoppage = timer.catchUpAllStoppage;
window.resetHalf = timer.resetHalf;
window.startHalfTimeBreak = timer.startHalfTimeBreak;
window.dismissHalfTimeBreak = timer.dismissHalfTimeBreak;
window.startCoolDownTimer = timer.startCoolDownTimer;
window.cancelCoolDownTimer = timer.cancelCoolDownTimer;
window.toggleCoolDownTimer = timer.toggleCoolDownTimer;

window.setHalfDuration = function(minutes) {
  timer.setTargetHalfMinutes(minutes);
  saveActiveMatchSnapshot();
  persistState();
  hardware.hapticFeedback('tap');
};
window.onHalfDurationChanged = function() {
  saveActiveMatchSnapshot();
  persistState();
};

window.openMatchCardModal = report.openMatchCardModal;
window.openFullMatchCardImage = report.openFullMatchCardImage;
window.downloadMatchCard = report.downloadMatchCard;
window.shareMatchCard = report.shareMatchCard;

window.promptResetMatch = function() {
  updateTabBadges();
  const title = document.getElementById('confirmResetTitle');
  const desc = document.getElementById('confirmResetDesc');
  const confirmBtnText = document.getElementById('confirmResetConfirmBtnText');
  if (title) title.innerText = 'Reset Both Matches?';
  if (desc) desc.innerText = 'Reset clocks, scores, and timelines for Match 1 & Match 2 back to 00:00? (Team names, colours & squad rosters are kept.)';
  if (confirmBtnText) confirmBtnText.innerText = 'YES, RESET BOTH MATCHES';

  window.openModal('confirmResetModal');
  hardware.hapticFeedback('warning');
};

// Fixed: Preserves customized team names, kit colours, rosters & half duration across BOTH matches and returns cleanly to Match 1!
window.executeResetMatch = function(scope = 'both') {
  saveActiveMatchSnapshot();

  if (scope === 'both') {
    archiveMatchById(1);
    archiveMatchById(2);

    const activeSource = sessionState.matches[1]?.score?.teams || score.getScoreState().teams;
    const retainedTeams = JSON.parse(JSON.stringify(activeSource));
    const retainedCoachTeam = score.getCoachTeam();
    const retainedTargetSec = timer.getTargetHalfSeconds() || 15 * 60;

    sessionState.matches[1] = createDefaultMatchState(1);
    sessionState.matches[2] = createDefaultMatchState(2);

    [1, 2].forEach(id => {
      sessionState.matches[id].timer.targetHalfSeconds = retainedTargetSec;
      sessionState.matches[id].score.teams = JSON.parse(JSON.stringify(retainedTeams));
      sessionState.matches[id].score.coachTeam = retainedCoachTeam;
      sessionState.matches[id].score.coachNotes.rotation = score.createDefaultRotation(retainedTeams[retainedCoachTeam]?.roster || []);
    });

    sessionState.activeMatchId = 1;

    isRestoringState = true;
    try {
      timer.resetMatchTimer();
      timer.setTargetHalfMinutes(Math.round(retainedTargetSec / 60));
      score.restoreScoreState(sessionState.matches[1].score);
    } finally {
      isRestoringState = false;
    }

    prematch.resetPlayerCounts();
    prematch.resetChecklist();
    dismissFirstHalfMustEndToast();
    storage.clearSessionState();
    persistState();
  } else {
    archiveActiveMatchToHistory();
    const activeId = sessionState.activeMatchId;
    const currentTeams = sessionState.matches[activeId]?.score?.teams || score.getScoreState().teams;
    const retainedCoachTeam = score.getCoachTeam();
    const retainedTargetSec = timer.getTargetHalfSeconds() || 15 * 60;

    const fresh = createDefaultMatchState(activeId);
    fresh.timer.targetHalfSeconds = retainedTargetSec;
    fresh.score.teams = JSON.parse(JSON.stringify(currentTeams));
    fresh.score.coachTeam = retainedCoachTeam;
    fresh.score.coachNotes.rotation = score.createDefaultRotation(currentTeams[retainedCoachTeam]?.roster || []);
    sessionState.matches[activeId] = fresh;

    isRestoringState = true;
    try {
      timer.resetMatchTimer();
      timer.setTargetHalfMinutes(Math.round(retainedTargetSec / 60));
      score.restoreScoreState(fresh.score);
    } finally {
      isRestoringState = false;
    }

    dismissFirstHalfMustEndToast();
    persistState();
  }

  updateTabBadges();
  window.closeModal('confirmResetModal');
  hardware.hapticFeedback('success');
};

window.resetMatch = function(force = false) {
  if (force) window.executeResetMatch('both');
  else window.promptResetMatch();
};

export function promptResetHalf() {
  const tState = timer.getTimerState();
  const period = tState.currentPeriod === 'Full Time' ? '2nd Half' : (tState.currentPeriod || 'Current Half');
  const title = document.getElementById('confirmResetHalfTitle');
  const desc = document.getElementById('confirmResetHalfDesc');

  if (period === '2nd Half') {
    if (title) title.innerText = 'Reset 2nd Half Only?';
    if (desc) desc.innerText = 'Reset the 2nd Half clock to 00:00 and clear 2nd Half goals? (1st Half goals & half-time score will be kept!)';
  } else {
    if (title) title.innerText = 'Reset 1st Half Clock & Scores?';
    if (desc) desc.innerText = 'Reset the 1st Half clock back to 00:00 and clear 1st Half goals?';
  }

  window.openModal('confirmResetHalfModal');
  hardware.hapticFeedback('warning');
}
window.promptResetHalf = promptResetHalf;

// Fixed: Resetting 2nd Half now preserves 1st Half goals & half-time score!
export function executeResetHalf() {
  window.closeModal('confirmResetHalfModal');
  const beforePeriod = timer.getTimerState().currentPeriod;
  const periodToClear = (beforePeriod === '2nd Half' || beforePeriod === 'Full Time') ? '2nd Half' : '1st Half';

  timer.resetHalf();
  score.resetCurrentHalfGoals(periodToClear);
  dismissFirstHalfMustEndToast();
  updateTabBadges();
  persistState();
  hardware.hapticFeedback('success');
}
window.executeResetHalf = executeResetHalf;

export function promptEndHalf() {
  const tState = timer.getTimerState();
  if (tState && tState.isTimerRunning) {
    score.showMatchToast('Pause the clock first to end half', '⏱️', 2200);
    hardware.hapticFeedback('warning');
    return;
  }

  const current = tState.currentPeriod;
  if (current === 'Full Time') {
    report.openReportModal();
    return;
  }

  const title = document.getElementById('confirmEndHalfTitle');
  const desc = document.getElementById('confirmEndHalfDesc');
  const btnText = document.getElementById('confirmEndHalfConfirmBtnText');

  if (current === '1st Half') {
    if (title) title.innerText = 'End 1st Half?';
    if (desc) desc.innerText = 'Finalise 1st half score, start the 5:00 half-time break timer, and advance to 2nd half?';
    if (btnText) btnText.innerText = 'YES, END 1ST HALF';
  } else if (current === '2nd Half') {
    if (title) title.innerText = 'End Match (Full Time)?';
    if (desc) desc.innerText = 'Finalise the 2nd half, archive match result, and finish at Full Time?';
    if (btnText) btnText.innerText = 'YES, FINISH MATCH (FULL TIME)';
  }

  window.openModal('confirmEndHalfModal');
}
window.promptEndHalf = promptEndHalf;

export function executeEndHalf() {
  window.closeModal('confirmEndHalfModal');
  endHalf();
}
window.executeEndHalf = executeEndHalf;

export function endHalf() {
  const tState = timer.getTimerState();
  const current = tState.currentPeriod;

  if (current === 'Full Time') {
    report.openReportModal();
    return;
  }

  if (current === '1st Half') {
    score.dismissPausedGoalToast();
    timer.dismissForgotResumeAlert();
    score.finaliseHalfScore();
    hardware.playWhistleTone('double');
    hardware.hapticFeedback('long');

    timer.setFirstHalfEnded(true);
    timer.prepareSecondHalf();
    timer.setPeriod('2nd Half');
    timer.startHalfTimeBreak(5 * 60);

    updateTabBadges();
    persistState();
  } else if (current === '2nd Half') {
    score.dismissPausedGoalToast();
    timer.dismissForgotResumeAlert();
    timer.finishMatch();
  }
}
window.endHalf = endHalf;
window.endHalfCoordinator = endHalf;

export function showFirstHalfMustEndPrompt() {
  const toast = document.getElementById('firstHalfMustEndToast');
  if (toast) {
    toast.classList.remove('hidden');
    try { toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (_) {}
  }
  hardware.hapticFeedback('alert');
}
window.showFirstHalfMustEndPrompt = showFirstHalfMustEndPrompt;

export function dismissFirstHalfMustEndToast() {
  document.getElementById('firstHalfMustEndToast')?.classList.add('hidden');
}
window.dismissFirstHalfMustEndToast = dismissFirstHalfMustEndToast;

// Window Bindings for HTML attributes
window.resetMatchTimer = timer.resetMatchTimer;
window.setPeriod = timer.setPeriod;
window.setFirstHalfEnded = timer.setFirstHalfEnded;
window.isFirstHalfEnded = timer.isFirstHalfEnded;
window.finishMatch = timer.finishMatch;
window.dismissSubBanner = timer.dismissSubBanner;
window.dismissOneMinuteBanner = timer.dismissOneMinuteBanner;
window.triggerSubReminder = timer.triggerSubReminder;
window.triggerOneMinuteAlert = timer.triggerOneMinuteAlert;
window.dismissForgotResumeAlert = timer.dismissForgotResumeAlert;
window.dismissPausedGoalToast = score.dismissPausedGoalToast;
window.resumeFromToast = score.resumeFromToast;
window.syncWallClock = timer.syncWallClock;
window.getTimerState = timer.getTimerState;
window.restoreTimerState = timer.restoreTimerState;
window.getScoreState = score.getScoreState;
window.updateEditPencilsUI = timer.updateEditPencilsUI;

window.incrementScore = score.incrementScore;
window.decrementScore = score.decrementScore;
window.finaliseHalfScore = score.finaliseHalfScore;
window.undoLastGoal = score.undoLastGoal;
window.removeGoal = score.removeGoal;
window.resetScoreState = score.resetScoreState;
window.dismissPowerPlayBanner = score.dismissPowerPlayBanner;
window.dismissPowerPlayEndedBanner = score.dismissPowerPlayEndedBanner;
window.openConcludedGoalModal = score.openConcludedGoalModal;
window.setConcludedGoalPeriod = score.setConcludedGoalPeriod;
window.getTargetHalfSeconds = timer.getTargetHalfSeconds;
window.setConcludedGoalPreset = score.setConcludedGoalPreset;
window.setConcludedGoalSeconds = score.setConcludedGoalSeconds;
window.adjustConcludedGoalSeconds = score.adjustConcludedGoalSeconds;
window.confirmConcludedGoal = score.confirmConcludedGoal;
window.promptConcludedGoalRemoval = score.promptConcludedGoalRemoval;
window.executeConcludedGoalRemoval = score.executeConcludedGoalRemoval;

window.setAppMode = function(mode) {
  score.setAppMode(mode);
  storage.savePrefs({ hasCompletedRoleOnboarding: true });
  persistState();
};
window.getAppMode = score.getAppMode;
window.toggleAppMode = score.toggleAppMode;
window.restoreScoreState = score.restoreScoreState;
window.setKickoffTeam = score.setKickoffTeam;
window.toggleKickoffTeam = score.toggleKickoffTeam;
window.dismissKickoffConfirmAlert = score.dismissKickoffConfirmAlert;
window.updateKickoffBadges = score.updateKickoffBadges;
window.showMatchToast = score.showMatchToast;
window.renderRefereeHelperBar = score.renderRefereeHelperBar;
window.openGoalAttributionModal = score.openGoalAttributionModal;
window.openGoalAttributionForExistingGoal = score.openGoalAttributionForExistingGoal;
window.selectAttributionScorer = score.selectAttributionScorer;
window.selectAttributionAssist = score.selectAttributionAssist;
window.skipGoalAssist = score.skipGoalAssist;
window.attributionBackToScorer = score.attributionBackToScorer;
window.skipGoalAttribution = score.skipGoalAttribution;
window.setGoalOwnGoal = score.setGoalOwnGoal;
window.cancelGoalAttribution = score.cancelGoalAttribution;
window.setSkipAssistStep = score.setSkipAssistStep;
window.getSkipAssistStep = score.getSkipAssistStep;

window.openMatchNotesModal = score.openMatchNotesModal;
window.setCoachPotm = score.setCoachPotm;
window.setCoachNotesText = score.setCoachNotesText;
window.addCoachMoment = score.addCoachMoment;
window.removeCoachMoment = score.removeCoachMoment;
window.renderMatchNotesUI = score.renderMatchNotesUI;

window.selectInlineTag = score.selectInlineTag;
window.selectInlinePotmMode = score.selectInlinePotmMode;
window.cancelInlineTag = score.cancelInlineTag;
window.recordInlineMomentForPlayer = score.recordInlineMomentForPlayer;
window.openCoachMomentsModal = score.openCoachMomentsModal;
window.renderCoachMomentsModal = score.renderCoachMomentsModal;
window.copyCoachMoments = score.copyCoachMoments;
window.openCoachNotesModal = score.openCoachNotesModal;
window.saveCoachNotesModal = score.saveCoachNotesModal;
window.insertCoachNotesPrompt = score.insertCoachNotesPrompt;
window.clearCoachNotesModalText = score.clearCoachNotesModalText;
window.toggleInlineNotesDrawer = score.toggleInlineNotesDrawer;
window.renderTouchlineBarUI = score.renderTouchlineBarUI;
window.toggleFullTimeMomentTags = score.toggleFullTimeMomentTags;

// Squad Rotation Bindings
window.openSquadRotationModal = score.openSquadRotationModal;
window.togglePlayerOnPitch = score.togglePlayerOnPitch;
window.setActiveGoalkeeper = score.setActiveGoalkeeper;
window.rotateBenchPlayersIn = score.rotateBenchPlayersIn;
window.resetSquadRotation = score.resetSquadRotation;

window.getCoachTeam = score.getCoachTeam;
window.setCoachTeam = score.setCoachTeam;
window.toggleCoachTeam = score.toggleCoachTeam;
window.updateCoachTeamUI = score.updateCoachTeamUI;
window.checkCoachSquadPrompt = score.checkCoachSquadPrompt;
window.openSquadInitialsModal = score.openSquadInitialsModal;
window.selectSquadModalTeam = score.selectSquadModalTeam;
window.saveSquadInitials = score.saveSquadInitials;
window.adjustSquadModalSize = score.adjustSquadModalSize;
window.setSquadModalSize = score.setSquadModalSize;
window.updateSquadSizeUI = score.updateSquadSizeUI;
window.getSquadSize = score.getSquadSize;
window.createDefaultRoster = score.createDefaultRoster;
window.teams = score.teams;
window.toggleEditTeamCoachRole = score.toggleEditTeamCoachRole;

window.renderTeamRosterEditor = score.renderTeamRosterEditor;
window.resetRosterToDefault = score.resetRosterToDefault;

window.openEditTeamModal = score.openEditTeamModal;
window.editTeamModal = score.openEditTeamModal;
window.onLeagueTeamSelected = score.onLeagueTeamSelected;
window.selectKitColor = score.selectKitColor;
window.saveTeamChanges = score.saveTeamChanges;

window.flipCoin = prematch.flipCoin;
window.adjustPlayer = prematch.adjustPlayer;
window.setBothTeams5v5 = prematch.setBothTeams5v5;
window.resetPlayerCounts = prematch.resetPlayerCounts;
window.resetChecklist = prematch.resetChecklist;
window.getPlayerCounts = prematch.getPlayerCounts;
window.updatePrematchUI = prematch.updatePrematchUI;

window.switchRuleTab = rules.switchRulesTab;
window.switchRulesTab = rules.switchRulesTab;
window.filterRulesTopic = rules.filterRulesTopic;
window.searchRules = rules.searchRules;
window.clearRulesSearch = rules.clearRulesSearch;
window.scrollToRuleSection = rules.scrollToRuleSection;

// Touchline Tactics Board Bindings
window.openTacticsBoard = tactics.openTacticsBoard;
window.closeTacticsBoard = tactics.closeTacticsBoard;
window.setTacticsPitchMode = tactics.setTacticsPitchMode;
window.onTacticsPitchSelectChange = tactics.onTacticsPitchSelectChange;
window.onTacticsFormationSelectChange = tactics.onTacticsFormationSelectChange;
window.cycleTacticsLanes = tactics.cycleTacticsLanes;
window.cycleTacticsOpposition = tactics.cycleTacticsOpposition;
window.setTacticsTool = tactics.setTacticsTool;
window.undoTacticsAction = tactics.undoTacticsAction;
window.clearTacticsLines = tactics.clearTacticsLines;
window.resetTacticsPitch = tactics.resetTacticsPitch;
window.syncTacticsSquad = () => tactics.syncSquadFromMatch({ resetPositions: false, silent: false });
window.selectBenchChipForSwap = tactics.selectBenchChipForSwap;
window.swapBenchWithPitchToken = tactics.swapBenchWithPitchToken;
window.toggleTacticsAnimator = tactics.toggleTacticsAnimator;
window.selectTacticsStep = tactics.selectTacticsStep;
window.addTacticsStep = tactics.addTacticsStep;
window.deleteLastTacticsStep = tactics.deleteLastTacticsStep;
window.toggleTacticsAnimSpeed = tactics.toggleTacticsAnimSpeed;
window.togglePlayTacticsMove = tactics.togglePlayTacticsMove;
window.stopTacticsAnimation = tactics.stopTacticsAnimation;
window.openTacticsPlaybook = tactics.openTacticsPlaybook;
window.setTacticsBoardMode = tactics.setTacticsBoardMode;
window.toggleTacticsSunlight = tactics.toggleTacticsSunlight;
window.toggleTacticsHuddleMode = tactics.toggleTacticsHuddleMode;
window.nudgeTacticsStep = tactics.nudgeTacticsStep;
window.toggleStarPlaybookItem = tactics.toggleStarPlaybookItem;
window.setTacticsPlaybookTab = tactics.setTacticsPlaybookTab;
window.setTacticsDifficultyFilter = tactics.setTacticsDifficultyFilter;
window.setTacticsFormatFilter = tactics.setTacticsFormatFilter;
window.dismissTacticsCoachingCue = tactics.dismissTacticsCoachingCue;
window.closeTacticsPlaybook = tactics.closeTacticsPlaybook;
window.addTacticsGear = tactics.addTacticsGear;
window.clearTacticsGear = tactics.clearTacticsGear;
window.loadBuiltinTacticsTemplate = tactics.loadBuiltinTacticsTemplate;
window.saveCurrentTacticsToPlaybook = tactics.saveCurrentTacticsToPlaybook;
window.loadSavedPlaybookEntry = tactics.loadSavedPlaybookEntry;
window.deleteSavedPlaybookEntry = tactics.deleteSavedPlaybookEntry;
window.shareTacticsPng = tactics.shareTacticsPng;
window.shareTacticsVideo = tactics.shareTacticsVideo;
window.getTacticsState = tactics.getTacticsState;

export function switchInstructionsTab(tab) {
  const refBtn = document.getElementById('tabRefInstructions');
  const coachBtn = document.getElementById('tabCoachInstructions');
  const refContent = document.getElementById('instructionsRefContent');
  const coachContent = document.getElementById('instructionsCoachContent');

  if (tab === 'ref') {
    if (refBtn) refBtn.className = 'flex-1 py-2 rounded-lg bg-emerald-500 text-slate-950 font-black transition shadow flex items-center justify-center gap-1.5 cursor-pointer';
    if (coachBtn) coachBtn.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition flex items-center justify-center gap-1.5 font-bold cursor-pointer';
    refContent?.classList.remove('hidden');
    coachContent?.classList.add('hidden');
  } else {
    if (coachBtn) coachBtn.className = 'flex-1 py-2 rounded-lg bg-amber-500 text-slate-950 font-black transition shadow flex items-center justify-center gap-1.5 cursor-pointer';
    if (refBtn) refBtn.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition flex items-center justify-center gap-1.5 font-bold cursor-pointer';
    coachContent?.classList.remove('hidden');
    refContent?.classList.add('hidden');
  }
}
window.switchInstructionsTab = switchInstructionsTab;

export function updateRoleSelectModalUI() {
  const currentMode = score.getAppMode();
  const refBtn = document.getElementById('roleSelectModalRefBtn');
  const coachBtn = document.getElementById('roleSelectModalCoachBtn');
  const specBtn = document.getElementById('roleSelectModalSpecBtn');
  const refBadge = document.getElementById('roleModalRefBadge');
  const coachBadge = document.getElementById('roleModalCoachBadge');
  const specBadge = document.getElementById('roleModalSpecBadge');

  // Reset all 3
  refBtn?.classList.remove('ring-2', 'ring-emerald-400', 'bg-emerald-950/40', 'border-emerald-400');
  refBtn?.classList.add('border-emerald-500/50');
  if (refBadge) {
    refBadge.textContent = 'OFFICIAL';
    refBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
  }

  coachBtn?.classList.remove('ring-2', 'ring-amber-400', 'bg-amber-950/40', 'border-amber-400');
  coachBtn?.classList.add('border-amber-500/50');
  if (coachBadge) {
    coachBadge.textContent = 'TOUCHLINE';
    coachBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40';
  }

  specBtn?.classList.remove('ring-2', 'ring-sky-400', 'bg-sky-950/40', 'border-sky-400');
  specBtn?.classList.add('border-sky-500/50');
  if (specBadge) {
    specBadge.textContent = 'SIDELINE';
    specBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40';
  }

  if (currentMode === 'coach') {
    coachBtn?.classList.add('ring-2', 'ring-amber-400', 'bg-amber-950/40', 'border-amber-400');
    coachBtn?.classList.remove('border-amber-500/50');
    if (coachBadge) {
      coachBadge.textContent = 'CURRENT';
      coachBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 shadow-sm';
    }
  } else if (currentMode === 'spectator') {
    specBtn?.classList.add('ring-2', 'ring-sky-400', 'bg-sky-950/40', 'border-sky-400');
    specBtn?.classList.remove('border-sky-500/50');
    if (specBadge) {
      specBadge.textContent = 'CURRENT';
      specBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-sky-400 text-slate-950 shadow-sm';
    }
  } else {
    refBtn?.classList.add('ring-2', 'ring-emerald-400', 'bg-emerald-950/40', 'border-emerald-400');
    refBtn?.classList.remove('border-emerald-500/50');
    if (refBadge) {
      refBadge.textContent = 'CURRENT';
      refBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-emerald-400 text-slate-950 shadow-sm';
    }
  }
}
window.updateRoleSelectModalUI = updateRoleSelectModalUI;

export function selectAppRole(mode) {
  storage.savePrefs({ hasCompletedRoleOnboarding: true });
  score.setAppMode(mode, { promptSquad: false });
  hardware.hapticFeedback('success');
  window.closeModal('roleSelectModal');

  if (mode !== 'coach') {
    window.closeModal('squadInitialsModal');
  } else {
    score.checkCoachSquadPrompt();
  }
}
window.selectAppRole = selectAppRole;

export function checkOpenRoleModalOnLaunch() {
  if (hasActiveMatchInProgress()) return;
  const prefs = storage.loadPrefs();
  if (prefs.hasCompletedRoleOnboarding) return;

  window.closeModal('squadInitialsModal');
  updateRoleSelectModalUI();
  window.openModal('roleSelectModal');
}
window.checkOpenRoleModalOnLaunch = checkOpenRoleModalOnLaunch;

window.openReportModal = report.openReportModal;
window.updateReportUI = report.updateReportUI;
window.updateReportText = report.updateReportText;
window.onReportMetaInputChanged = report.onReportMetaInputChanged;
window.getActiveReportText = report.getActiveReportText;
window.generateReportText = report.generateReportText;
window.copyReportToClipboard = report.copyReportToClipboard;
window.copyFaFullTimeToClipboard = report.copyFaFullTimeToClipboard;
window.shareReportNative = report.shareReportNative;
window.openSharePickerModal = report.openSharePickerModal;
window.shareToWhatsApp = report.shareToWhatsApp;
window.shareToMessages = report.shareToMessages;
window.shareToEmail = report.shareToEmail;
window.shareViaSystem = report.shareViaSystem;

window.activateLock = lockMode.activateLock;
window.startUnlockProgress = lockMode.startUnlockProgress;
window.cancelUnlockProgress = lockMode.cancelUnlockProgress;

window.toggleWakeLock = hardware.toggleWakeLock;
window.rearmWakeLock = hardware.rearmWakeLock;
window.toggleAudioMute = hardware.toggleAudioMute;

// High Contrast Sunlight Mode Toggle
export function updateSunlightUI(isSun) {
  if (typeof document === 'undefined') return;
  const toggleContrastBtn = document.getElementById('toggleContrastBtn');
  const sunIcon = document.getElementById('sunIconSvg');
  if (!toggleContrastBtn) return;

  toggleContrastBtn.setAttribute('role', 'switch');
  toggleContrastBtn.setAttribute('aria-checked', isSun ? 'true' : 'false');
  toggleContrastBtn.setAttribute('title', isSun ? 'Sunlight High Contrast is ON. Tap to turn OFF.' : 'Sunlight High Contrast is OFF. Tap to turn ON.');

  if (sunIcon) {
    sunIcon.setAttribute('class', isSun ? 'w-4 h-4 text-amber-400' : 'w-4 h-4 text-slate-400');
  }

  if (isSun) {
    toggleContrastBtn.className = 'flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-slate-900 border border-amber-400/70 cursor-pointer shadow-sm active:scale-95 transition shrink-0';
    toggleContrastBtn.innerHTML = `
      <span class="text-xs font-black text-amber-300 font-mono-sport tracking-wider">ON</span>
      <span class="w-8 h-5 bg-amber-400 rounded-full p-0.5 flex items-center justify-end transition-colors shadow-inner">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-950 shadow-md"></span>
      </span>
    `;
  } else {
    toggleContrastBtn.className = 'flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-slate-900 border border-slate-700/60 cursor-pointer shadow-sm active:scale-95 transition shrink-0';
    toggleContrastBtn.innerHTML = `
      <span class="text-xs font-bold text-slate-400 font-mono-sport tracking-wider">OFF</span>
      <span class="w-8 h-5 bg-slate-800 border border-slate-700 rounded-full p-0.5 flex items-center justify-start transition-colors">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-400 shadow-sm"></span>
      </span>
    `;
  }
}
window.updateSunlightUI = updateSunlightUI;

export function toggleSunlightMode(forceState = null) {
  sessionState.isSunlightMode = forceState !== null ? Boolean(forceState) : !sessionState.isSunlightMode;
  const isSun = sessionState.isSunlightMode;

  document.documentElement.classList.toggle('sunlight-mode', isSun);
  document.body.classList.toggle('sunlight-mode', isSun);

  updateSunlightUI(isSun);
  try {
    score.applyTeamVisuals('home');
    score.applyTeamVisuals('away');
    tactics.drawTacticsCanvas();
  } catch (_) {}

  hardware.hapticFeedback('tap');
  persistState();
}
window.toggleSunlightMode = toggleSunlightMode;

// Throttled Persistence on 1Hz Timer Ticks & Events
let lastStorageSaveSec = -1;
timer.registerTimerTickCallback((sec) => {
  if (Math.abs(sec - lastStorageSaveSec) >= 2 || sec <= 1) {
    lastStorageSaveSec = sec;
    persistState();
  }
  if (sec === 1) updateTabBadges();
  score.renderRefereeHelperBar();
});
timer.registerPeriodChangeCallback(() => {
  persistState();
  updateTabBadges();
  score.renderRefereeHelperBar();
});
score.registerScoreChangeCallback(() => {
  persistState();
  updateTabBadges();
  hardware.rearmWakeLock();
});

// Flush immediately on pagehide / backgrounding
if (typeof window !== 'undefined') {
  window.addEventListener('pagehide', () => persistState());
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') persistState();
  });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Visual Hold-Progress Bar + Short-Tap Hint for Reset Buttons
  function setupLongPress(elementId, callback, duration = 1500) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.classList.add('relative', 'overflow-hidden');
    let fillBar = el.querySelector('.hold-progress-fill');
    if (!fillBar) {
      fillBar = document.createElement('span');
      fillBar.className = 'hold-progress-fill';
      el.insertBefore(fillBar, el.firstChild);
    }

    let pressTimer = null;
    let isPressed = false;
    let didComplete = false;
    let pressStartedAt = 0;
    let startX = 0;
    let startY = 0;

    function start(e) {
      if (e.button !== undefined && e.button !== 0) return;
      isPressed = true;
      didComplete = false;
      pressStartedAt = Date.now();
      startX = e.clientX || 0;
      startY = e.clientY || 0;

      el.style.transform = 'scale(0.96)';
      fillBar.style.transition = `width ${duration}ms linear`;
      fillBar.style.width = '100%';
      hardware.hapticFeedback('selection');

      pressTimer = setTimeout(() => {
        if (!isPressed) return;
        isPressed = false;
        didComplete = true;
        resetVisuals();
        hardware.hapticFeedback('warning');
        callback(e);
      }, duration);
    }

    function move(e) {
      if (!isPressed) return;
      if (Math.hypot((e.clientX || 0) - startX, (e.clientY || 0) - startY) > 15) {
        cancel();
      }
    }

    function resetVisuals() {
      el.style.transform = '';
      fillBar.style.transition = 'width 0.12s ease-out';
      fillBar.style.width = '0%';
    }

    function end() {
      if (!isPressed) return;
      const heldMs = Date.now() - pressStartedAt;
      cancel();
      if (!didComplete && heldMs < duration - 80) {
        score.showMatchToast('Hold button for 1.5s to reset', '🔒', 1800);
      }
    }

    function cancel() {
      if (!isPressed && !pressTimer) return;
      isPressed = false;
      if (pressTimer) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
      resetVisuals();
    }

    el.addEventListener('pointerdown', start);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', end);
    el.addEventListener('pointerleave', cancel);
    el.addEventListener('pointercancel', cancel);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  }

  setupLongPress('resetHalfBtn', () => window.promptResetHalf(), 1500);
  setupLongPress('resetMatchBtn', () => window.promptResetMatch(), 1500);

  // Initialize modules
  timer.initTimer();
  score.initPrematchDropdowns();
  prematch.initPrematchState();
  hardware.syncHardwarePrefsUI();
  score.applyTeamVisuals('home');
  score.applyTeamVisuals('away');
  score.renderGoalTimeline();
  score.setupKickoffLongPress();

  // Load saved session
  const saved = storage.loadSessionState();
  if (saved && saved.matches) {
    if (saved.activeMatchId) sessionState.activeMatchId = saved.activeMatchId;
    if (saved.matches[1]) {
      sessionState.matches[1] = {
        id: 1,
        timer: saved.matches[1].timer || createDefaultMatchState(1).timer,
        score: saved.matches[1].score || createDefaultMatchState(1).score
      };
    }
    if (saved.matches[2]) {
      sessionState.matches[2] = {
        id: 2,
        timer: saved.matches[2].timer || createDefaultMatchState(2).timer,
        score: saved.matches[2].score || createDefaultMatchState(2).score
      };
    }

    const activeState = sessionState.matches[sessionState.activeMatchId] || sessionState.matches[1];
    isRestoringState = true;
    try {
      if (activeState.timer) timer.restoreTimerState(activeState.timer);
      if (activeState.score) score.restoreScoreState(activeState.score);
    } finally {
      isRestoringState = false;
    }

    if (saved.isSunlightMode) {
      toggleSunlightMode(true);
    } else {
      updateSunlightUI(false);
    }
  } else {
    updateSunlightUI(false);
  }

  // Check for incoming ?sync=... URL parameter from Ref/Coach Touchline Sync
  let importedViaUrl = false;
  try {
    const params = new URLSearchParams(window.location.search);
    const syncParam = params.get('sync');
    if (syncParam) {
      const decoded = storage.decodeMatchSyncCode(syncParam);
      if (decoded && applyImportedMatchSync(decoded)) {
        importedViaUrl = true;
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    }
  } catch (_) {}

  updateTabBadges();
  score.updateAppModeUI();
  prematch.updatePrematchUI(score.teams.home?.name, score.teams.away?.name);
  report.syncReportMetaInputsFromPrefs();
  updateHistoryCountBadge();

  // Request wake lock if enabled
  if (hardware.isWakeLockEnabled()) {
    hardware.requestWakeLock();
  }

  // Register Service Worker safely (no forced mid-match reload!)
  if ('serviceWorker' in navigator) {
    const hadController = Boolean(navigator.serviceWorker.controller);
    let refreshing = false;

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!hadController || refreshing) return;
      // Never force-reload in the middle of an active match!
      if (hasActiveMatchInProgress()) return;
      refreshing = true;
      window.location.reload();
    });

    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
      .then((reg) => {
        if (!hasActiveMatchInProgress()) {
          reg.update().catch(() => {});
        }
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller && !hasActiveMatchInProgress()) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
              }
            });
          }
        });
      })
      .catch((err) => console.warn('Service Worker registration failed:', err));
  }

  // PWA Home Screen Install Prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    updateInstallButton();
  });
  updateInstallButton();

  // Close non-destructive modals when clicking dark backdrop
  const BACKDROP_DISMISSIBLE_MODALS = [
    'timelineModal',
    'coachMomentsModal',
    'coachNotesModal',
    'squadRotationModal',
    'reportModal',
    'sharePickerModal',
    'coinModal',
    'prematchModal',
    'rulesModal',
    'teamEditModal',
    'squadInitialsModal',
    'matchCardModal',
    'matchCardFullscreenModal',
    'instructionsModal',
    'matchHistoryModal',
    'matchSyncModal',
    'installAppModal',
    'tacticsPlaybookModal',
    'quickToolsDrawer'
  ];
  BACKDROP_DISMISSIBLE_MODALS.forEach(id => {
    const m = document.getElementById(id);
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) window.closeModal(id);
      });
    }
  });

  // Desktop Keyboard Shortcuts (Guarded against Field Lock & open inputs)
  document.addEventListener('keydown', (e) => {
    if (document.body?.classList.contains('screen-locked')) return;
    if (['input', 'textarea', 'select'].includes(document.activeElement?.tagName?.toLowerCase())) {
      if (e.key === 'Escape') {
        document.activeElement.blur();
      }
      return;
    }

    if (e.key === 'Escape') {
      for (const id of ALL_MODAL_IDS) {
        const m = document.getElementById(id);
        if (m && !m.classList.contains('hidden')) {
          window.closeModal(id);
          return;
        }
      }
      return;
    }

    // Suppress main HUD shortcuts while any modal is open
    const anyModalOpen = ALL_MODAL_IDS.some(id => {
      const m = document.getElementById(id);
      return m && !m.classList.contains('hidden');
    });
    if (anyModalOpen) return;

    if (e.code === 'Space') {
      e.preventDefault();
      timer.toggleTimer();
    } else if (e.key === 'h' || e.key === 'H') {
      score.incrementScore('home');
    } else if (e.key === 'a' || e.key === 'A') {
      score.incrementScore('away');
    } else if (e.key === 'u' || e.key === 'U') {
      score.undoLastGoal();
    } else if (e.key === '1') {
      switchMatchTab(1);
    } else if (e.key === '2') {
      switchMatchTab(2);
    }
  });

  // Auto-fit Header Title
  if (typeof window.fitHeaderTitle === 'function') {
    window.fitHeaderTitle();
    const container = document.getElementById('headerTitleContainer');
    if (window.ResizeObserver && container) {
      new ResizeObserver(() => window.fitHeaderTitle()).observe(container);
    }
    document.fonts?.ready?.then(() => window.fitHeaderTitle());
  }

  // Launch Splash Screen Coordinator (skip splash if resuming active match or importing sync link!)
  initSplashScreen(importedViaUrl || hasActiveMatchInProgress());
});

function updateInstallButton() {
  const btn = document.getElementById('installPwaBtn');
  const badge = document.getElementById('installBtnBadge');
  if (!btn || !badge) return;

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if (isStandalone) {
    btn.disabled = true;
    btn.classList.add('opacity-50', 'pointer-events-none');
    badge.textContent = 'INSTALLED';
    badge.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
    badge.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
  }
}

function installPwaApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      updateInstallButton();
    });
  } else {
    window.openModal('installAppModal');
  }
}
window.installPwaApp = installPwaApp;

function initSplashScreen(skipImmediately = false) {
  const splash = document.getElementById('splashScreen');
  if (!splash) {
    if (!skipImmediately) {
      setTimeout(() => checkOpenRoleModalOnLaunch(), 150);
    }
    return;
  }

  if (skipImmediately) {
    splash.dataset.dismissed = 'true';
    splash.remove();
    return;
  }

  const bar = document.getElementById('splashProgressBar');
  if (bar) {
    requestAnimationFrame(() => {
      bar.style.width = '100%';
    });
  }

  window.dismissSplash = function() {
    if (!splash || splash.dataset.dismissed) return;
    splash.dataset.dismissed = 'true';
    splash.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      splash.remove();
      checkOpenRoleModalOnLaunch();
    }, 350);
  };

  setTimeout(() => window.dismissSplash(), 1200);
}

window.dismissSplash = function() {
  const splash = document.getElementById('splashScreen');
  if (!splash || splash.dataset.dismissed) return;
  splash.dataset.dismissed = 'true';
  splash.classList.add('opacity-0', 'pointer-events-none');
  setTimeout(() => {
    splash.remove();
    checkOpenRoleModalOnLaunch();
  }, 350);
};
