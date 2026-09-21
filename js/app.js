// What's The Score Ref - Master Application Coordinator
import * as hardware from './hardware.js';
import * as timer from './timer.js';
import * as score from './score.js';
import * as prematch from './prematch.js';
import * as rules from './rules.js';
import * as report from './report.js';
import * as lockMode from './lockMode.js';
import * as storage from './storage.js';

// PWA Install Prompt
let deferredPrompt = null;

// Dual-Match Session State Architecture
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
      isPowerPlayDismissed: false,
      isPausedGoalAlertActive: false,
      goals: [],
      coachNotes: { potm: null, notes: '', moments: [] },
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

function persistState() {
  if (isRestoringState) return;
  saveActiveMatchSnapshot();
  storage.saveSessionState(sessionState);
}

export function getMatchBadgeScore(match) {
  if (!match) return 'TBC';

  const timerState = match.timer || {};
  const scoreState = match.score || { homeScore: 0, awayScore: 0, goals: [] };

  // 1. At the end of a match, score should have "FT" after it
  if (timerState.currentPeriod === 'Full Time') {
    return `${scoreState.homeScore} - ${scoreState.awayScore} FT`;
  }

  // 2. When a match has not started, it shouldn't give a score and just say "TBC"
  const hasStarted = (timerState.timerSeconds > 0) ||
                    Boolean(timerState.isTimerRunning) ||
                    Boolean(timerState.hasHalfStarted) ||
                    (timerState.currentPeriod === '2nd Half') ||
                    (scoreState.goals && scoreState.goals.length > 0) ||
                    (scoreState.homeScore > 0 || scoreState.awayScore > 0);

  if (!hasStarted) {
    return 'TBC';
  }

  // 3. Match in progress
  return `${scoreState.homeScore} - ${scoreState.awayScore}`;
}
window.getMatchBadgeScore = getMatchBadgeScore;

export function updateTabBadges() {
  saveActiveMatchSnapshot();

  const m1 = sessionState.matches[1];
  const m2 = sessionState.matches[2];

  const m1Score = getMatchBadgeScore(m1);
  const m2Score = getMatchBadgeScore(m2);

  const b1 = document.getElementById('tabMatch1Badge');
  const b2 = document.getElementById('tabMatch2Badge');
  if (b1) b1.innerText = m1Score;
  if (b2) b2.innerText = m2Score;

  if (score && typeof score.renderGoalTimeline === 'function') {
    score.renderGoalTimeline();
  }

  const btn1 = document.getElementById('tabMatch1Btn');
  const btn2 = document.getElementById('tabMatch2Btn');

  if (sessionState.activeMatchId === 1) {
    if (btn1) {
      btn1.className = 'py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md bg-emerald-500 text-slate-950 border-2 border-emerald-300';
    }
    if (btn2) {
      btn2.className = 'py-2.5 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition cursor-pointer bg-slate-900 text-slate-400 border border-slate-700 hover:text-white';
    }
  } else {
    if (btn2) {
      btn2.className = 'py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-md bg-emerald-500 text-slate-950 border-2 border-emerald-300';
    }
    if (btn1) {
      btn1.className = 'py-2.5 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition cursor-pointer bg-slate-900 text-slate-400 border border-slate-700 hover:text-white';
    }
  }

  // Update modal reset context
  const resetTitle = document.getElementById('confirmResetTitle');
  const resetDesc = document.getElementById('confirmResetDesc');
  const resetConfirmBtnText = document.getElementById('confirmResetConfirmBtnText');
  if (resetTitle) resetTitle.innerText = `Reset Match ${sessionState.activeMatchId}?`;
  if (resetDesc) resetDesc.innerText = `Are you sure you want to reset all scores, goal history, and match clocks for Match ${sessionState.activeMatchId} back to 00:00?`;
  if (resetConfirmBtnText) resetConfirmBtnText.innerText = `YES, RESET MATCH ${sessionState.activeMatchId}`;

  updateHandoverBannerUI();
}
window.updateTabBadges = updateTabBadges;

export function updateHandoverBannerUI() {
  const banner = document.getElementById('match1HandoverBanner');
  if (!banner) return;
  banner.classList.add('hidden');
}
window.updateHandoverBannerUI = updateHandoverBannerUI;

let handoverToastTimeout = null;
export function showHandoverToast(msg) {
  const toast = document.getElementById('matchHandoverSuccessToast');
  const toastText = document.getElementById('matchHandoverSuccessText');
  if (toast) {
    if (toastText && msg) toastText.innerText = msg;
    toast.classList.remove('hidden');
    if (handoverToastTimeout) clearTimeout(handoverToastTimeout);
    handoverToastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 4500);
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
  // 1. If outgoing timer is running, safely pause it
  if (timer.getTimerState().isTimerRunning) {
    timer.pauseTimer();
  }

  // 2. Ensure Match 1 is cleanly finalised at Full Time if not already
  if (sessionState.activeMatchId === 1) {
    const tState = timer.getTimerState();
    if (tState.currentPeriod !== 'Full Time') {
      if (tState.currentPeriod === '1st Half') {
        score.finaliseHalfScore();
        timer.setFirstHalfEnded(true);
      }
      timer.setPeriod('Full Time');
    }
  }

  // 3. Snapshot Match 1 into local storage state
  saveActiveMatchSnapshot();

  // 4. Extract team names & colors from Match 1 to retain for Match 2
  const m1ScoreState = sessionState.matches[1]?.score || score.getScoreState();
  const retainedTeams = JSON.parse(JSON.stringify(m1ScoreState.teams || {
    home: { name: 'Home Team', color: '#f43f5e', border: 'border-rose-500/70' },
    away: { name: 'Away Team', color: '#2563eb', border: 'border-blue-500/70' }
  }));

  const m1TargetSec = sessionState.matches[1]?.timer?.targetHalfSeconds || timer.getTargetHalfSeconds() || 15 * 60;

  // 5. Cleanly configure Match 2 with fresh timer & scoreboard, but retained teams
  const freshMatch2 = createDefaultMatchState(2);
  freshMatch2.timer.targetHalfSeconds = m1TargetSec;
  freshMatch2.score.teams = retainedTeams;
  sessionState.matches[2] = freshMatch2;

  // 6. Switch active session to Match 2
  sessionState.activeMatchId = 2;

  // 7. Restore fresh Match 2 state safely inside guard
  isRestoringState = true;
  try {
    timer.restoreTimerState(sessionState.matches[2].timer);
    score.restoreScoreState(sessionState.matches[2].score);
  } finally {
    isRestoringState = false;
  }

  // 8. Snapshot Match 2 and persist session to local storage
  saveActiveMatchSnapshot();
  persistState();

  // 9. Update tab badges & UI
  updateTabBadges();

  // 10. Close report and confirmation modals if open
  if (typeof window.closeModal === 'function') {
    window.closeModal('reportModal');
    window.closeModal('confirmEndHalfModal');
    window.closeModal('confirmResetModal');
  }

  // 11. Referee audio & haptic feedback
  hardware.playWhistleTone('short');
  hardware.hapticFeedback('success');

  // 12. Show friendly confirmation toast
  showHandoverToast('Match 1 Saved! Match 2 Ready (Team names preserved).');
}
window.saveMatch1AndPrepareMatch2 = saveMatch1AndPrepareMatch2;

export function switchMatchTab(matchId) {
  if (matchId === sessionState.activeMatchId) return;

  // 1. Snapshot outgoing match
  saveActiveMatchSnapshot();

  // If timer of outgoing match is running, safely pause it
  if (timer.getTimerState().isTimerRunning) {
    timer.pauseTimer();
  }

  // 2. Switch active ID
  sessionState.activeMatchId = matchId;

  // 3. Restore target match
  let target = sessionState.matches[matchId];
  if (!target) {
    target = createDefaultMatchState(matchId);
    // If switching to Match 2 and it is uninitialized, inherit team names/colors from Match 1
    if (matchId === 2 && sessionState.matches[1]?.score?.teams) {
      target.score.teams = JSON.parse(JSON.stringify(sessionState.matches[1].score.teams));
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

  // 4. Update tab styles and badges
  updateTabBadges();

  // 5. Persist session
  persistState();

  hardware.hapticFeedback('tap');
}
window.switchMatchTab = switchMatchTab;

// Global Modal Helpers (Available on window for onclick attributes)
window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    hardware.hapticFeedback('tap');
  }
};

window.closeModal = function(id) {
  if (typeof document !== 'undefined') {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
  }
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('hidden');
};

// Expose Core Functions to Window for HTML event binding
window.toggleTimer = timer.toggleTimer;
window.startTimer = timer.startTimer;
window.pauseTimer = timer.pauseTimer;
window.catchUpTime = timer.catchUpTime;
window.catchUpAllStoppage = timer.catchUpAllStoppage;
window.resetHalf = timer.resetHalf;
window.setHalfDuration = function(minutes) {
  timer.setTargetHalfMinutes(minutes);
  saveActiveMatchSnapshot();
  persistState();
  hardware.hapticFeedback('tap');
};
window.onHalfDurationChanged = function(min) {
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
  if (desc) desc.innerText = 'Are you sure you want to reset all scores, timers, and goal history for both Match 1 and Match 2 back to 00:00?';
  if (confirmBtnText) confirmBtnText.innerText = 'YES, RESET BOTH MATCHES';

  if (window.openModal) {
    window.openModal('confirmResetModal');
  } else {
    const modal = document.getElementById('confirmResetModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }
  hardware.hapticFeedback('warning');
};
window.executeResetMatch = function(scope = 'both') {
  if (scope === 'both') {
    // Retain customized team names, colors, and squad rosters
    const homeName = sessionState.matches[1]?.score?.teams?.home?.name;
    const awayName = sessionState.matches[1]?.score?.teams?.away?.name;
    const homeColor = sessionState.matches[1]?.score?.teams?.home?.color;
    const awayColor = sessionState.matches[1]?.score?.teams?.away?.color;
    const homeBorder = sessionState.matches[1]?.score?.teams?.home?.border;
    const awayBorder = sessionState.matches[1]?.score?.teams?.away?.border;
    const homeRoster = sessionState.matches[1]?.score?.teams?.home?.roster;
    const awayRoster = sessionState.matches[1]?.score?.teams?.away?.roster;

    sessionState.matches[1] = createDefaultMatchState(1);
    sessionState.matches[2] = createDefaultMatchState(2);

    if (homeName) {
      sessionState.matches[1].score.teams.home.name = homeName;
      sessionState.matches[2].score.teams.home.name = homeName;
    }
    if (awayName) {
      sessionState.matches[1].score.teams.away.name = awayName;
      sessionState.matches[2].score.teams.away.name = awayName;
    }
    if (homeColor) {
      sessionState.matches[1].score.teams.home.color = homeColor;
      sessionState.matches[1].score.teams.home.border = homeBorder;
      sessionState.matches[2].score.teams.home.color = homeColor;
      sessionState.matches[2].score.teams.home.border = homeBorder;
    }
    if (awayColor) {
      sessionState.matches[1].score.teams.away.color = awayColor;
      sessionState.matches[1].score.teams.away.border = awayBorder;
      sessionState.matches[2].score.teams.away.color = awayColor;
      sessionState.matches[2].score.teams.away.border = awayBorder;
    }
    if (homeRoster && homeRoster.length > 0) {
      sessionState.matches[1].score.teams.home.roster = JSON.parse(JSON.stringify(homeRoster));
      sessionState.matches[2].score.teams.home.roster = JSON.parse(JSON.stringify(homeRoster));
    }
    if (awayRoster && awayRoster.length > 0) {
      sessionState.matches[1].score.teams.away.roster = JSON.parse(JSON.stringify(awayRoster));
      sessionState.matches[2].score.teams.away.roster = JSON.parse(JSON.stringify(awayRoster));
    }

    timer.resetMatchTimer();
    score.resetScoreState();
    if (typeof prematch.resetPlayerCounts === 'function') prematch.resetPlayerCounts();
    if (typeof prematch.resetChecklist === 'function') prematch.resetChecklist();
    dismissFirstHalfMustEndToast();
    storage.clearSessionState();
    persistState();
  } else {
    // Retain team names if already customised
    const currentTeams = sessionState.matches[sessionState.activeMatchId]?.score?.teams;
    const fresh = createDefaultMatchState(sessionState.activeMatchId);
    if (currentTeams) {
      fresh.score.teams = JSON.parse(JSON.stringify(currentTeams));
    }
    sessionState.matches[sessionState.activeMatchId] = fresh;
    timer.resetMatchTimer();
    score.restoreScoreState(fresh.score);
    if (typeof prematch.resetPlayerCounts === 'function') prematch.resetPlayerCounts();
    if (typeof prematch.resetChecklist === 'function') prematch.resetChecklist();
    dismissFirstHalfMustEndToast();
    persistState();
  }
  updateTabBadges();
  if (window.closeModal) {
    window.closeModal('confirmResetModal');
  } else {
    const modal = document.getElementById('confirmResetModal');
    if (modal) modal.classList.add('hidden');
  }
  hardware.hapticFeedback('success');
};
window.resetMatch = function(force = false) {
  if (force) {
    window.executeResetMatch('both');
  } else {
    window.promptResetMatch();
  }
};

export function promptResetHalf() {
  const tState = timer.getTimerState();
  const period = tState.currentPeriod || 'Current Half';
  const title = document.getElementById('confirmResetHalfTitle');
  const desc = document.getElementById('confirmResetHalfDesc');
  if (title) title.innerText = `Reset ${period} & Scores?`;
  if (desc) desc.innerText = `Are you sure you want to reset the clock and scores for this match back to 00:00 and 0-0?`;
  
  if (window.openModal) {
    window.openModal('confirmResetHalfModal');
  } else {
    const modal = document.getElementById('confirmResetHalfModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }
  hardware.hapticFeedback('warning');
}
window.promptResetHalf = promptResetHalf;

export function executeResetHalf() {
  const modal = document.getElementById('confirmResetHalfModal');
  if (modal) modal.classList.add('hidden');

  // Retain custom team names
  const currentTeams = sessionState.matches[sessionState.activeMatchId]?.score?.teams;
  const fresh = createDefaultMatchState(sessionState.activeMatchId);
  if (currentTeams) {
    fresh.score.teams = JSON.parse(JSON.stringify(currentTeams));
  }
  sessionState.matches[sessionState.activeMatchId] = fresh;

  timer.resetHalf();
  score.restoreScoreState(fresh.score);
  dismissFirstHalfMustEndToast();
  updateTabBadges();
  persistState();
  hardware.hapticFeedback('success');
}
window.executeResetHalf = executeResetHalf;

export function promptEndHalf() {
  const tState = timer.getTimerState();
  if (tState && tState.isTimerRunning) {
    return; // Block ending half while clock is running
  }

  const current = tState.currentPeriod;
  if (current === 'Full Time') {
    if (typeof window.openReportModal === 'function') {
      window.openReportModal();
    }
    return;
  }

  const title = document.getElementById('confirmEndHalfTitle');
  const desc = document.getElementById('confirmEndHalfDesc');
  const btnText = document.getElementById('confirmEndHalfConfirmBtnText');

  if (current === '1st Half') {
    if (title) title.innerText = 'End 1st Half?';
    if (desc) desc.innerText = 'Finalise score for the 1st half and advance to 2nd half?';
    if (btnText) btnText.innerText = 'YES, END 1ST HALF';
  } else if (current === '2nd Half') {
    if (title) title.innerText = 'End Match (Full Time)?';
    if (desc) desc.innerText = 'Finalise the 2nd half and finish match at Full Time?';
    if (btnText) btnText.innerText = 'YES, FINISH MATCH (FULL TIME)';
  }

  const modal = document.getElementById('confirmEndHalfModal');
  if (modal) {
    modal.classList.remove('hidden');
    hardware.hapticFeedback('tap');
  } else if (window.confirm(current === '1st Half' ? 'End 1st Half and finalise half-time score?' : 'Finish match at Full Time?')) {
    executeEndHalf();
  }
}
window.promptEndHalf = promptEndHalf;

export function executeEndHalf() {
  const modal = document.getElementById('confirmEndHalfModal');
  if (modal) modal.classList.add('hidden');
  endHalf();
}
window.executeEndHalf = executeEndHalf;

export function endHalf() {
  const tState = timer.getTimerState();
  const current = tState.currentPeriod;
  const sState = score.getScoreState();

  if (current === 'Full Time') {
    if (typeof window.openReportModal === 'function') {
      window.openReportModal();
    }
    return;
  }

  if (current === '1st Half') {
    // 1. Finalise score for 1st half
    score.finaliseHalfScore();

    // 2. Referee double whistle & haptic feedback
    hardware.playWhistleTone('double');
    hardware.hapticFeedback('long');

    // 3. Mark 1st half as ended & switch period to 2nd Half
    timer.setFirstHalfEnded(true);
    timer.prepareSecondHalf();
    timer.setPeriod('2nd Half');

    // 4. Update tab badges and persist session
    updateTabBadges();
    persistState();
  } else if (current === '2nd Half') {
    // Ending 2nd half finishes the match (Full Time)
    timer.finishMatch();
  }
}
window.endHalf = endHalf;
window.endHalfCoordinator = endHalf;

export function showFirstHalfMustEndPrompt() {
  const toast = document.getElementById('firstHalfMustEndToast');
  if (toast) {
    toast.classList.remove('hidden');
    // Scroll toast into view if needed
    try {
      toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (e) {}
  }
  hardware.hapticFeedback('alert');
}
window.showFirstHalfMustEndPrompt = showFirstHalfMustEndPrompt;

export function dismissFirstHalfMustEndToast() {
  const toast = document.getElementById('firstHalfMustEndToast');
  if (toast) {
    toast.classList.add('hidden');
  }
}
window.dismissFirstHalfMustEndToast = dismissFirstHalfMustEndToast;

export function dismissPausedGoalToast() {
  const toast = document.getElementById('pausedGoalToast');
  if (toast) {
    toast.classList.add('hidden');
    hardware.hapticFeedback('tap');
  }
}
window.dismissPausedGoalToast = dismissPausedGoalToast;

window.resetMatchTimer = timer.resetMatchTimer;
window.nextPeriod = timer.nextPeriod;
window.nextHalf = timer.nextPeriod;
window.setPeriod = timer.setPeriod;
window.setFirstHalfEnded = timer.setFirstHalfEnded;
window.isFirstHalfEnded = timer.isFirstHalfEnded;
window.finishMatch = timer.finishMatch;
window.dismissSubBanner = timer.dismissSubBanner;
window.dismissOneMinuteBanner = timer.dismissOneMinuteBanner;
window.triggerSubReminder = timer.triggerSubReminder;
window.triggerOneMinuteAlert = timer.triggerOneMinuteAlert;
window.catchUpAllStoppage = timer.catchUpAllStoppage;
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
  persistState();
};
window.getAppMode = score.getAppMode;
window.toggleAppMode = score.toggleAppMode;
window.showAppModeToast = score.showAppModeToast;
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

window.openMatchNotesModal = score.openMatchNotesModal;
window.selectMomentTag = score.selectMomentTag;
window.cancelMomentTagSelection = score.cancelMomentTagSelection;
window.recordMomentForPlayer = score.recordMomentForPlayer;
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

window.getCoachTeam = score.getCoachTeam;
window.setCoachTeam = score.setCoachTeam;
window.toggleCoachTeam = score.toggleCoachTeam;
window.updateCoachTeamUI = score.updateCoachTeamUI;
window.checkCoachSquadPrompt = score.checkCoachSquadPrompt;
window.openSquadInitialsModal = score.openSquadInitialsModal;
window.selectSquadModalTeam = score.selectSquadModalTeam;
window.saveSquadInitials = score.saveSquadInitials;
window.createDefaultRoster = score.createDefaultRoster;
window.toggleEditTeamCoachRole = score.toggleEditTeamCoachRole;

window.renderTeamRosterEditor = score.renderTeamRosterEditor;
window.editRosterPlayerModal = score.editRosterPlayerModal;
window.openAddRosterPlayerModal = score.openAddRosterPlayerModal;
window.saveRosterPlayer = score.saveRosterPlayer;
window.removeRosterPlayer = score.removeRosterPlayer;
window.resetRosterToDefault = score.resetRosterToDefault;

window.openEditTeamModal = score.openEditTeamModal;
window.editTeamModal = score.openEditTeamModal;
window.onLeagueTeamSelected = score.onLeagueTeamSelected;
window.setPresetTeamName = score.setPresetTeamName;
window.selectKitColor = score.selectKitColor;
window.saveTeamChanges = score.saveTeamChanges;
window.onPrematchSelect = score.onPrematchSelect;
window.swapTeams = score.swapTeams;

window.flipCoin = prematch.flipCoin;
window.adjustPlayer = prematch.adjustPlayer;
window.resetPlayerCounts = prematch.resetPlayerCounts;
window.resetChecklist = prematch.resetChecklist;
window.getPlayerCounts = prematch.getPlayerCounts;

window.switchRuleTab = rules.switchRulesTab;
window.switchRulesTab = rules.switchRulesTab;
window.filterRulesTopic = rules.filterRulesTopic;
window.scrollToRuleSection = rules.scrollToRuleSection;

export function switchInstructionsTab(tab) {
  const refBtn = document.getElementById('tabRefInstructions');
  const coachBtn = document.getElementById('tabCoachInstructions');
  const refContent = document.getElementById('instructionsRefContent');
  const coachContent = document.getElementById('instructionsCoachContent');

  if (tab === 'ref') {
    if (refBtn) {
      refBtn.className = 'flex-1 py-2 rounded-lg bg-emerald-500 text-slate-950 font-black transition shadow flex items-center justify-center gap-1.5 cursor-pointer';
    }
    if (coachBtn) {
      coachBtn.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition flex items-center justify-center gap-1.5 font-bold cursor-pointer';
    }
    if (refContent) refContent.classList.remove('hidden');
    if (coachContent) coachContent.classList.add('hidden');
  } else {
    if (coachBtn) {
      coachBtn.className = 'flex-1 py-2 rounded-lg bg-amber-500 text-slate-950 font-black transition shadow flex items-center justify-center gap-1.5 cursor-pointer';
    }
    if (refBtn) {
      refBtn.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition flex items-center justify-center gap-1.5 font-bold cursor-pointer';
    }
    if (coachContent) coachContent.classList.remove('hidden');
    if (refContent) refContent.classList.add('hidden');
  }
}
window.switchInstructionsTab = switchInstructionsTab;

// Touchline Role Selection Modal Handlers (Prompted on App Open)
export function updateRoleSelectModalUI() {
  const currentMode = (typeof score !== 'undefined' && score.getAppMode) ? score.getAppMode() : (window.getAppMode ? window.getAppMode() : 'referee');
  const refBtn = document.getElementById('roleSelectModalRefBtn');
  const coachBtn = document.getElementById('roleSelectModalCoachBtn');
  const refBadge = document.getElementById('roleModalRefBadge');
  const coachBadge = document.getElementById('roleModalCoachBadge');

  if (currentMode === 'coach') {
    if (coachBtn) {
      coachBtn.classList.add('ring-2', 'ring-amber-400', 'bg-amber-950/40');
      coachBtn.classList.remove('border-amber-500/50');
      coachBtn.classList.add('border-amber-400');
    }
    if (coachBadge) {
      coachBadge.textContent = 'CURRENT';
      coachBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 shadow-sm';
    }
    if (refBtn) {
      refBtn.classList.remove('ring-2', 'ring-emerald-400', 'bg-emerald-950/40', 'border-emerald-400');
      refBtn.classList.add('border-emerald-500/50');
    }
    if (refBadge) {
      refBadge.textContent = 'OFFICIAL';
      refBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
    }
  } else {
    if (refBtn) {
      refBtn.classList.add('ring-2', 'ring-emerald-400', 'bg-emerald-950/40');
      refBtn.classList.remove('border-emerald-500/50');
      refBtn.classList.add('border-emerald-400');
    }
    if (refBadge) {
      refBadge.textContent = 'CURRENT';
      refBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-emerald-400 text-slate-950 shadow-sm';
    }
    if (coachBtn) {
      coachBtn.classList.remove('ring-2', 'ring-amber-400', 'bg-amber-950/40', 'border-amber-400');
      coachBtn.classList.add('border-amber-500/50');
    }
    if (coachBadge) {
      coachBadge.textContent = 'TOUCHLINE';
      coachBadge.className = 'text-[9px] font-black font-mono-sport uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40';
    }
  }
}
window.updateRoleSelectModalUI = updateRoleSelectModalUI;

export function selectAppRole(mode) {
  if (typeof score !== 'undefined' && score.setAppMode) {
    score.setAppMode(mode);
  } else if (typeof window.setAppMode === 'function') {
    window.setAppMode(mode);
  }
  
  if (typeof hardware !== 'undefined' && hardware.hapticFeedback) {
    hardware.hapticFeedback('success');
  } else if (typeof window.hapticFeedback === 'function') {
    window.hapticFeedback('success');
  }

  if (typeof window.closeModal === 'function') {
    window.closeModal('roleSelectModal');
  }
}
window.selectAppRole = selectAppRole;

export function checkOpenRoleModalOnLaunch() {
  // If timer is running or interval is active, do not block the active match
  if (typeof timer !== 'undefined' && timer.getTimerState) {
    const timerState = timer.getTimerState();
    if (timerState && timerState.isTimerRunning) return;
  }
  
  updateRoleSelectModalUI();
  if (typeof window.openModal === 'function') {
    window.openModal('roleSelectModal');
  }
}
window.checkOpenRoleModalOnLaunch = checkOpenRoleModalOnLaunch;

window.openReportModal = report.openReportModal;
window.updateReportUI = report.updateReportUI;
window.updateReportText = report.updateReportText;
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
      <span class="w-8 h-4.5 bg-amber-400 rounded-full p-0.5 flex items-center justify-end transition-colors shadow-inner">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-950 shadow-md"></span>
      </span>
    `;
  } else {
    toggleContrastBtn.className = 'flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-slate-900 border border-slate-700/60 cursor-pointer shadow-sm active:scale-95 transition shrink-0';
    toggleContrastBtn.innerHTML = `
      <span class="text-xs font-bold text-slate-400 font-mono-sport tracking-wider">OFF</span>
      <span class="w-8 h-4.5 bg-slate-800 border border-slate-700 rounded-full p-0.5 flex items-center justify-start transition-colors">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-400 shadow-sm"></span>
      </span>
    `;
  }
}
window.updateSunlightUI = updateSunlightUI;

export function toggleSunlightMode(forceState = null) {
  if (forceState !== null) {
    sessionState.isSunlightMode = Boolean(forceState);
  } else {
    sessionState.isSunlightMode = !sessionState.isSunlightMode;
  }
  const isSun = sessionState.isSunlightMode;

  if (isSun) {
    document.documentElement.classList.add('sunlight-mode');
    document.body.classList.add('sunlight-mode');
  } else {
    document.documentElement.classList.remove('sunlight-mode');
    document.body.classList.remove('sunlight-mode');
  }

  updateSunlightUI(isSun);

  // Force re-apply kit visuals to ensure proper synchronization
  try {
    score.applyTeamVisuals('home');
    score.applyTeamVisuals('away');
  } catch (e) {}

  hardware.hapticFeedback('tap');
  persistState();
}
window.toggleSunlightMode = toggleSunlightMode;

// Auto-save on timer ticks, period changes, and score updates
timer.registerTimerTickCallback((sec) => {
  persistState();
  if (sec === 1) {
    updateTabBadges();
  }
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

// Initialization
document.addEventListener('DOMContentLoaded', () => {

  // Setup long press logic for reset buttons (short press ignored, long press 1.5s opens confirmation modal)
  function setupLongPress(elementId, callback, duration = 1500) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    let pressTimer = null;
    let isPressed = false;
    let startX = 0;
    let startY = 0;

    function start(e) {
      if (e.type === 'mousedown' && e.button !== 0) return;
      isPressed = true;
      
      if (e.touches && e.touches[0]) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      } else {
        startX = e.clientX;
        startY = e.clientY;
      }
      
      // Visual feedback for holding
      el.style.transition = `transform ${duration}ms linear, background-color ${duration}ms linear`;
      el.style.transform = 'scale(0.92)';
      
      if (el.classList.contains('bg-red-600')) {
        el.dataset.origBg = el.style.backgroundColor;
        el.style.backgroundColor = '#991b1b'; // darker red
      } else {
        el.dataset.origBg = el.style.backgroundColor;
        el.style.backgroundColor = '#1e293b'; // slate-800
      }

      pressTimer = setTimeout(() => {
        if (!isPressed) return;
        isPressed = false;
        
        // Reset visual feedback
        el.style.transition = '';
        el.style.transform = '';
        if (el.dataset.origBg !== undefined) {
          el.style.backgroundColor = el.dataset.origBg;
        }

        if (hardware && hardware.hapticFeedback) hardware.hapticFeedback('warning');
        
        callback(e);
      }, duration);
    }

    function move(e) {
      if (!isPressed) return;
      let curX = 0, curY = 0;
      if (e.touches && e.touches[0]) {
        curX = e.touches[0].clientX;
        curY = e.touches[0].clientY;
      } else {
        curX = e.clientX;
        curY = e.clientY;
      }
      const dist = Math.hypot(curX - startX, curY - startY);
      if (dist > 15) {
        cancel(e);
      }
    }

    function cancel(e) {
      if (!isPressed && !pressTimer) return;
      isPressed = false;
      if (pressTimer) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
      
      // Reset visual feedback
      el.style.transition = 'transform 0.15s ease, background-color 0.15s ease';
      el.style.transform = '';
      if (el.dataset.origBg !== undefined) {
        el.style.backgroundColor = el.dataset.origBg;
      }
    }

    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start, {passive: true});
    el.addEventListener('mousemove', move);
    el.addEventListener('touchmove', move, {passive: true});
    el.addEventListener('mouseup', cancel);
    el.addEventListener('mouseleave', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
    el.addEventListener('contextmenu', (e) => { e.preventDefault(); });
    el.addEventListener('click', (e) => {
      // Short press does not put up the window
      e.preventDefault();
      e.stopPropagation();
    });
  }

  setupLongPress('resetHalfBtn', () => { window.promptResetHalf(); }, 1500);
  setupLongPress('resetMatchBtn', () => { window.promptResetMatch(); }, 1500);

  // 1. Initialize fixture dropdowns and timer UI
  timer.initTimer();
  score.initPrematchDropdowns();
  score.applyTeamVisuals('home');
  score.applyTeamVisuals('away');
  score.renderGoalTimeline();
  score.setupKickoffLongPress();

  // 2. Load saved session if present
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

    // Restore active match
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

  // 3. Update Tab Badges & Highlights & App Mode
  updateTabBadges();
  score.updateAppModeUI();

  // 4. Acquire Screen Wake Lock
  hardware.requestWakeLock();

  // 5. Register PWA Service Worker (100% Offline caching)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' })
      .then((reg) => {
        console.log('Service Worker registered successfully:', reg.scope);
        // Force update check
        reg.update().catch(() => {});
      })
      .catch((err) => console.warn('Service Worker registration failed:', err));
  }

  // 5b. PWA Home Screen Install Button
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    updateInstallButton();
  });

  updateInstallButton();

  // 6. Desktop Keyboard Shortcuts (Helpful when refereeing or testing)
  document.addEventListener('keydown', (e) => {
    if (['input', 'textarea', 'select'].includes(document.activeElement?.tagName?.toLowerCase())) return;

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
    } else if (e.key === 'Escape') {
      window.closeModal('confirmResetModal');
      window.closeModal('timelineModal');
      window.closeModal('reportModal');
      window.closeModal('sharePickerModal');
      window.closeModal('rulesModal');
      window.closeModal('prematchModal');
      window.closeModal('teamEditModal');
      window.closeModal('installAppModal');
      window.closeModal('goalAttributionModal');
      window.closeModal('rosterPlayerEditModal');
      window.closeModal('matchNotesModal');
      window.closeModal('coachMomentsModal');
      window.closeModal('coachNotesModal');
    }
  });

  // 7. Auto-fit Header Title for maximum responsive single-line display
  if (typeof window.fitHeaderTitle === 'function') {
    window.fitHeaderTitle();
    const container = document.getElementById('headerTitleContainer');
    if (window.ResizeObserver && container) {
      new ResizeObserver(() => window.fitHeaderTitle()).observe(container);
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => window.fitHeaderTitle());
    }
  }

  // 8. Pitch-Side Launch Splash Screen
  initSplashScreen();
});

// PWA Install Button Helpers
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
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted PWA install');
      }
      deferredPrompt = null;
      updateInstallButton();
    });
  } else {
    // iOS / unsupported browser – show manual instructions
    window.openModal('installAppModal');
  }
}
window.installPwaApp = installPwaApp;

// Pitch-Side Splash Screen Coordinator
function initSplashScreen() {
  const splash = document.getElementById('splashScreen');
  if (!splash) {
    setTimeout(() => {
      if (typeof window.checkOpenRoleModalOnLaunch === 'function') {
        window.checkOpenRoleModalOnLaunch();
      }
    }, 200);
    return;
  }

  const bar = document.getElementById('splashProgressBar');
  if (bar) {
    setTimeout(() => {
      bar.style.width = '100%';
    }, 50);
  }

  window.dismissSplash = function() {
    if (splash.dataset.dismissed) return;
    splash.dataset.dismissed = 'true';
    splash.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      splash.style.display = 'none';
      if (typeof window.checkOpenRoleModalOnLaunch === 'function') {
        window.checkOpenRoleModalOnLaunch();
      }
    }, 400);
  };

  // Smooth auto-dismiss after 1.8 seconds
  setTimeout(() => {
    window.dismissSplash();
  }, 1800);
}
window.dismissSplash = function() {
  const splash = document.getElementById('splashScreen');
  if (splash) {
    if (splash.dataset.dismissed) return;
    splash.dataset.dismissed = 'true';
    splash.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => { 
      splash.style.display = 'none';
      if (typeof window.checkOpenRoleModalOnLaunch === 'function') {
        window.checkOpenRoleModalOnLaunch();
      }
    }, 400);
  }
};
