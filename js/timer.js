// What's The Score Ref - Match Timer Module
import { playWhistleTone, hapticFeedback, requestWakeLock, enableAudioKeepAlive } from './hardware.js';

export const DEFAULT_HALF_MINUTES = 15;
export let targetHalfSeconds = 15 * 60; // 15 minutes (900 seconds) default
export let subReminderSeconds = 7 * 60 + 30; // 07:30 (450 seconds)
export let oneMinuteWarningSeconds = 14 * 60; // 14:00 (840 seconds)

// Retain uppercase constants for backwards compatibility
export const TARGET_HALF_SECONDS = 15 * 60;
export const SUB_REMINDER_SECONDS = 7 * 60 + 30;
export const ONE_MINUTE_WARNING_SECONDS = 14 * 60;

export function setTargetHalfMinutes(minutes) {
  const min = parseInt(minutes, 10);
  if (isNaN(min) || min < 1 || min > 60) return;
  targetHalfSeconds = min * 60;
  subReminderSeconds = Math.floor(targetHalfSeconds / 2);
  oneMinuteWarningSeconds = Math.max(0, targetHalfSeconds - 60);

  const targetSpan = document.getElementById('targetTimeSpan');
  if (targetSpan) {
    targetSpan.innerText = formatTime(targetHalfSeconds);
  }
  const badge = document.getElementById('quickToolsHalfDurationBadge');
  if (badge) {
    badge.innerText = `${min}m`;
  }
  updateHalfDurationButtonsUI(min);

  if (typeof window !== 'undefined' && typeof window.onHalfDurationChanged === 'function') {
    window.onHalfDurationChanged(min);
  }
}

export function getTargetHalfMinutes() {
  return Math.round(targetHalfSeconds / 60);
}

export function getTargetHalfSeconds() {
  return targetHalfSeconds;
}

export function updateHalfDurationButtonsUI(activeMin) {
  const mins = [10, 12, 15, 20, 25];
  mins.forEach(m => {
    const btn = document.getElementById(`durBtn${m}`);
    if (btn) {
      if (m === activeMin) {
        btn.className = 'half-dur-btn py-1.5 px-1 rounded-lg text-xs font-black transition border border-indigo-400 text-white bg-indigo-600 shadow-sm cursor-pointer';
      } else {
        btn.className = 'half-dur-btn py-1.5 px-1 rounded-lg text-xs font-bold transition border border-slate-800 text-slate-400 hover:text-white bg-slate-900 cursor-pointer';
      }
    }
  });
}

let timerSeconds = 0;
let stoppageSeconds = 0;
let isTimerRunning = false;
let timerInterval = null;
let currentPeriod = '1st Half'; // '1st Half', '2nd Half', 'Full Time'
let subReminderTriggered = false;
let subBannerDismissed = false;
let oneMinuteAlertTriggered = false;
let oneMinuteBannerDismissed = false;
let targetAlertTriggered = false;
let hasHalfStarted = false;
let firstHalfEnded = false;
let pausedTimeTracker = 0;
let startTimestamp = 0;
let stoppageStartTimestamp = 0;
let forgotResumeDismissed = false;
let lastStoppageNudgeSecond = 0;

let halvesData = {
  '1st Half': {
    timerSeconds: 0,
    stoppageSeconds: 0,
    hasHalfStarted: false,
    subReminderTriggered: false,
    oneMinuteAlertTriggered: false,
    targetAlertTriggered: false
  },
  '2nd Half': {
    timerSeconds: 0,
    stoppageSeconds: 0,
    hasHalfStarted: false,
    subReminderTriggered: false,
    oneMinuteAlertTriggered: false,
    targetAlertTriggered: false
  }
};

let onTimerTickCallbacks = [];
let onPeriodChangeCallbacks = [];

export function registerTimerTickCallback(cb) {
  onTimerTickCallbacks.push(cb);
}

export function registerPeriodChangeCallback(cb) {
  onPeriodChangeCallbacks.push(cb);
}

export function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function isFirstHalfEnded() {
  return firstHalfEnded;
}

export function setFirstHalfEnded(val) {
  firstHalfEnded = Boolean(val);
  updateTimerUI();
}

export function getTimerState() {
  // Sync current active period into halvesData
  if (currentPeriod === '1st Half' || currentPeriod === '2nd Half') {
    halvesData[currentPeriod] = {
      timerSeconds,
      stoppageSeconds,
      hasHalfStarted,
      subReminderTriggered,
      oneMinuteAlertTriggered,
      targetAlertTriggered
    };
  }

  return {
    timerSeconds,
    stoppageSeconds,
    isTimerRunning,
    currentPeriod,
    subReminderTriggered,
    subBannerDismissed,
    oneMinuteAlertTriggered,
    oneMinuteBannerDismissed,
    targetAlertTriggered,
    forgotResumeDismissed,
    hasHalfStarted,
    firstHalfEnded,
    targetHalfSeconds,
    oneMinuteWarningSeconds,
    subReminderSeconds,
    halvesData: JSON.parse(JSON.stringify(halvesData))
  };
}

export function restoreTimerState(state) {
  if (!state) return;
  if (state.targetHalfSeconds) {
    setTargetHalfMinutes(Math.round(state.targetHalfSeconds / 60));
  } else {
    setTargetHalfMinutes(15);
  }
  timerSeconds = state.timerSeconds || 0;
  stoppageSeconds = state.stoppageSeconds || 0;
  currentPeriod = state.currentPeriod || '1st Half';
  subReminderTriggered = state.subReminderTriggered || false;
  oneMinuteAlertTriggered = state.oneMinuteAlertTriggered || (timerSeconds >= oneMinuteWarningSeconds);
  targetAlertTriggered = state.targetAlertTriggered || (timerSeconds >= targetHalfSeconds);
  forgotResumeDismissed = state.forgotResumeDismissed || false;
  hasHalfStarted = typeof state.hasHalfStarted === 'boolean' ? state.hasHalfStarted : (timerSeconds > 0);
  firstHalfEnded = typeof state.firstHalfEnded === 'boolean' ? state.firstHalfEnded : (currentPeriod === '2nd Half' || currentPeriod === 'Full Time');
  isTimerRunning = false; // Always reload in safe paused state

  if (state.halvesData) {
    halvesData = JSON.parse(JSON.stringify(state.halvesData));
  } else {
    halvesData = {
      '1st Half': {
        timerSeconds: (currentPeriod === '1st Half') ? timerSeconds : 0,
        stoppageSeconds: (currentPeriod === '1st Half') ? stoppageSeconds : 0,
        hasHalfStarted: (currentPeriod === '1st Half') ? hasHalfStarted : false,
        subReminderTriggered: (currentPeriod === '1st Half') ? subReminderTriggered : false,
        oneMinuteAlertTriggered: (currentPeriod === '1st Half') ? oneMinuteAlertTriggered : false,
        targetAlertTriggered: (currentPeriod === '1st Half') ? targetAlertTriggered : false
      },
      '2nd Half': {
        timerSeconds: (currentPeriod === '2nd Half') ? timerSeconds : 0,
        stoppageSeconds: (currentPeriod === '2nd Half') ? stoppageSeconds : 0,
        hasHalfStarted: (currentPeriod === '2nd Half') ? hasHalfStarted : false,
        subReminderTriggered: (currentPeriod === '2nd Half') ? subReminderTriggered : false,
        oneMinuteAlertTriggered: (currentPeriod === '2nd Half') ? oneMinuteAlertTriggered : false,
        targetAlertTriggered: (currentPeriod === '2nd Half') ? targetAlertTriggered : false
      }
    };
  }

  // Clean up any historical zombie stoppage timers from previous sessions
  if (timerSeconds === 0 || currentPeriod === 'Full Time') {
    stoppageSeconds = 0;
  }

  stoppageStartTimestamp = (stoppageSeconds > 0) ? Date.now() - (stoppageSeconds * 1000) : 0;

  updateTimerUI();
  updateTimerButtonUI();

  const refLostTimeBadge = document.getElementById('refHelperLostTimeBadge');
  if (refLostTimeBadge) refLostTimeBadge.innerText = `+${formatTime(stoppageSeconds)} lost`;
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function initTimer() {
  const targetSpan = document.getElementById('targetTimeSpan');
  if (targetSpan) {
    targetSpan.innerText = formatTime(targetHalfSeconds);
  }
  updateHalfDurationButtonsUI(getTargetHalfMinutes());
  updateTimerUI();
  updateTimerButtonUI();
  const subBanner = document.getElementById('subReminderBanner');
  if (subBanner && !subReminderTriggered) {
    subBanner.classList.add('hidden');
  }
}

export function startTimer() {
  if (currentPeriod === 'Full Time') return;

  // Rule: 1st half must be ended before 2nd half can start
  if (currentPeriod === '2nd Half' && !firstHalfEnded) {
    if (typeof window !== 'undefined' && typeof window.showFirstHalfMustEndPrompt === 'function') {
      window.showFirstHalfMustEndPrompt();
    }
    return;
  }

  if (isTimerRunning) return;
  isTimerRunning = true;
  hasHalfStarted = true;
  hapticFeedback('tap');
  playWhistleTone('short');

  // Request wake lock and audio keep-alive on direct user interaction
  requestWakeLock();
  enableAudioKeepAlive();

  // Blur any active text fields so iOS detaches virtual keyboard and shake-to-undo buffer during play
  if (typeof document !== 'undefined' && document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }

  // Activate Pitch-Side Zen Focus Mode (dims secondary chrome during play)
  document.body?.classList.add('zen-mode');
  updateEditPencilsUI();

  updateTimerButtonUI();
  forgotResumeDismissed = false;
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  document.getElementById('pausedGoalToast')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
  document.getElementById('firstHalfMustEndToast')?.classList.add('hidden');

  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }

  if (typeof window !== 'undefined' && typeof window.dismissPausedGoalToast === 'function') {
    window.dismissPausedGoalToast();
  }

  if (typeof window !== 'undefined' && typeof window.updateTabBadges === 'function') {
    window.updateTabBadges();
  }

  // Anchor to exact wall-clock epoch timestamp so sleep or backgrounding never stops or drifts timer
  startTimestamp = Date.now() - (timerSeconds * 1000);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const now = Date.now();
    timerSeconds = Math.max(0, Math.floor((now - startTimestamp) / 1000));
    updateTimerUI();

    // 1. Dynamic Sub Reminder Alert (Halfway)
    if (timerSeconds >= subReminderSeconds && !subReminderTriggered && currentPeriod !== 'Full Time') {
      triggerSubReminder();
    }
    if (subReminderTriggered && timerSeconds >= subReminderSeconds + 60) {
      dismissSubBanner();
    }

    // 2. Dynamic 1-Minute Remaining Warning Alert
    if (timerSeconds >= oneMinuteWarningSeconds && !oneMinuteAlertTriggered && currentPeriod !== 'Full Time') {
      triggerOneMinuteAlert();
    }

    // 3. Dynamic Target Time Reached Milestone Alert
    if (timerSeconds >= targetHalfSeconds && !targetAlertTriggered && currentPeriod !== 'Full Time') {
      triggerTargetTimeAlert();
    }

    onTimerTickCallbacks.forEach(cb => cb(timerSeconds, isTimerRunning));
  }, 250);
}

export function pauseTimer() {
  if (!isTimerRunning && timerInterval) return;
  isTimerRunning = false;
  hapticFeedback('tap');

  // Deactivate Pitch-Side Zen Focus Mode (restores full chrome visibility)
  document.body?.classList.remove('zen-mode');

  if (startTimestamp) {
    timerSeconds = Math.max(timerSeconds, Math.floor((Date.now() - startTimestamp) / 1000));
  }
  startTimestamp = 0;

  updateTimerButtonUI();
  updateTimerUI();
  clearInterval(timerInterval);

  if (hasHalfStarted && currentPeriod !== 'Full Time') {
    stoppageStartTimestamp = Date.now() - (stoppageSeconds * 1000);

    const refLostTimeBadge = document.getElementById('refHelperLostTimeBadge');
    if (refLostTimeBadge) refLostTimeBadge.innerText = `+${formatTime(stoppageSeconds)} lost`;
    if (stoppageSeconds >= 45 && !forgotResumeDismissed) {
      if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
        window.renderRefereeHelperBar();
      }
    }

    timerInterval = setInterval(() => {
      stoppageSeconds = Math.max(0, Math.floor((Date.now() - stoppageStartTimestamp) / 1000));
      const stoppageDisplay = document.getElementById('stoppageDisplay');
      const ghostClockElapsed = document.getElementById('ghostClockElapsed');
      if (stoppageDisplay) stoppageDisplay.innerText = `Stoppage: +${formatTime(stoppageSeconds)}`;
      if (ghostClockElapsed) ghostClockElapsed.innerText = `+${formatTime(stoppageSeconds)} lost`;

      const refBadge = document.getElementById('refHelperLostTimeBadge');
      if (refBadge) refBadge.innerText = `+${formatTime(stoppageSeconds)} lost`;

      // Reveal Forgot to Resume Catch-Up Alert only after 45s of pause
      if (stoppageSeconds >= 45 && !forgotResumeDismissed) {
        if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
          window.renderRefereeHelperBar();
        }
      }

      // Periodic gentle nudge if paused for > 45s while clock was running (debounced to once per 45s boundary)
      if (stoppageSeconds > 0 && stoppageSeconds % 45 === 0 && lastStoppageNudgeSecond !== stoppageSeconds) {
        lastStoppageNudgeSecond = stoppageSeconds;
        hapticFeedback('alert');
      }

      onTimerTickCallbacks.forEach(cb => cb(timerSeconds, isTimerRunning));
    }, 250);
  } else {
    document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  }
}

export function toggleTimer() {
  if (currentPeriod === 'Full Time') {
    const openReport = window.openReportModal;
    if (typeof openReport === 'function') openReport();
    return;
  }
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

export function catchUpTime(sec) {
  timerSeconds += sec;
  if (startTimestamp) {
    startTimestamp -= sec * 1000;
  } else {
    startTimestamp = Date.now() - (timerSeconds * 1000);
  }
  updateTimerUI();
  startTimer();
}

export function catchUpAllStoppage() {
  timerSeconds += stoppageSeconds;
  if (startTimestamp) {
    startTimestamp -= stoppageSeconds * 1000;
  } else {
    startTimestamp = Date.now() - (timerSeconds * 1000);
  }
  stoppageSeconds = 0;
  stoppageStartTimestamp = 0;
  const stoppageDisplay = document.getElementById('stoppageDisplay');
  if (stoppageDisplay) stoppageDisplay.innerText = 'Stoppage: +00:00';
  const ghostClock = document.getElementById('ghostClockElapsed');
  if (ghostClock) ghostClock.innerText = '+00:00 lost';
  const refBadge = document.getElementById('refHelperLostTimeBadge');
  if (refBadge) refBadge.innerText = '+00:00 lost';
  forgotResumeDismissed = false;
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  updateTimerUI();
  startTimer();
}

export function dismissForgotResumeAlert() {
  forgotResumeDismissed = true;
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

function stopTimerComplete() {
  isTimerRunning = false;
  document.body?.classList.remove('zen-mode');
  updateEditPencilsUI();
  clearInterval(timerInterval);
  timerInterval = null;
  startTimestamp = 0;
  stoppageStartTimestamp = 0;
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  document.getElementById('pausedGoalToast')?.classList.add('hidden');
}

export function resetMatchTimer() {
  stopTimerComplete();
  currentPeriod = '1st Half';
  firstHalfEnded = false;
  hasHalfStarted = false;
  timerSeconds = 0;
  stoppageSeconds = 0;
  startTimestamp = 0;
  stoppageStartTimestamp = 0;
  forgotResumeDismissed = false;
  lastStoppageNudgeSecond = 0;
  subReminderTriggered = false;
  subBannerDismissed = false;
  oneMinuteAlertTriggered = false;
  oneMinuteBannerDismissed = false;
  targetAlertTriggered = false;

  halvesData = {
    '1st Half': {
      timerSeconds: 0,
      stoppageSeconds: 0,
      hasHalfStarted: false,
      subReminderTriggered: false,
      oneMinuteAlertTriggered: false,
      targetAlertTriggered: false
    },
    '2nd Half': {
      timerSeconds: 0,
      stoppageSeconds: 0,
      hasHalfStarted: false,
      subReminderTriggered: false,
      oneMinuteAlertTriggered: false,
      targetAlertTriggered: false
    }
  };

  const stoppageDisplay = document.getElementById('stoppageDisplay');
  if (stoppageDisplay) stoppageDisplay.innerText = 'Stoppage: +00:00';
  const ghostClock = document.getElementById('ghostClockElapsed');
  if (ghostClock) ghostClock.innerText = '+00:00 lost';

  updateTimerUI();
  updateTimerButtonUI();
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  document.getElementById('subReminderBanner')?.classList.add('hidden');
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  document.getElementById('refHelperPowerPlayAlert')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
  document.getElementById('pausedGoalToast')?.classList.add('hidden');
  document.getElementById('firstHalfMustEndToast')?.classList.add('hidden');
  hapticFeedback('tap');
  onPeriodChangeCallbacks.forEach(cb => cb(currentPeriod));
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function resetHalf() {
  stopTimerComplete();
  timerSeconds = 0;
  stoppageSeconds = 0;
  startTimestamp = 0;
  stoppageStartTimestamp = 0;
  hasHalfStarted = false;
  forgotResumeDismissed = false;
  lastStoppageNudgeSecond = 0;
  subReminderTriggered = false;
  subBannerDismissed = false;
  oneMinuteAlertTriggered = false;
  oneMinuteBannerDismissed = false;
  targetAlertTriggered = false;

  // Reset the data for the active half
  if (currentPeriod === '1st Half' || currentPeriod === '2nd Half') {
    halvesData[currentPeriod] = {
      timerSeconds: 0,
      stoppageSeconds: 0,
      hasHalfStarted: false,
      subReminderTriggered: false,
      oneMinuteAlertTriggered: false,
      targetAlertTriggered: false
    };
  }

  // If Full Time, return to 1st Half, otherwise stay in current half
  if (currentPeriod === 'Full Time') {
    currentPeriod = '1st Half';
    firstHalfEnded = false;
  } else if (currentPeriod === '1st Half') {
    firstHalfEnded = false;
  }

  const stoppageDisplay = document.getElementById('stoppageDisplay');
  if (stoppageDisplay) stoppageDisplay.innerText = 'Stoppage: +00:00';
  const ghostClock = document.getElementById('ghostClockElapsed');
  if (ghostClock) ghostClock.innerText = '+00:00 lost';

  updateTimerUI();
  updateTimerButtonUI();
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  document.getElementById('subReminderBanner')?.classList.add('hidden');
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
  document.getElementById('pausedGoalToast')?.classList.add('hidden');
  document.getElementById('firstHalfMustEndToast')?.classList.add('hidden');
  hapticFeedback('tap');
  onPeriodChangeCallbacks.forEach(cb => cb(currentPeriod));
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function prepareSecondHalf() {
  halvesData['2nd Half'] = {
    timerSeconds: 0,
    stoppageSeconds: 0,
    hasHalfStarted: false,
    subReminderTriggered: false,
    oneMinuteAlertTriggered: false,
    targetAlertTriggered: false
  };
}

export function setPeriod(period) {
  if (period === 'Full Time') {
    finishMatch();
    return;
  }
  if (period !== '1st Half' && period !== '2nd Half') return;

  // Rule: 1st half must be ended before 2nd half can start
  if (period === '2nd Half' && !firstHalfEnded) {
    if (typeof window !== 'undefined' && typeof window.showFirstHalfMustEndPrompt === 'function') {
      window.showFirstHalfMustEndPrompt();
    }
    return;
  }

  // If already in this period, do nothing
  if (period === currentPeriod) {
    return;
  }

  // 1. Save current period's data before switching
  if (currentPeriod === '1st Half' || currentPeriod === '2nd Half') {
    halvesData[currentPeriod] = {
      timerSeconds,
      stoppageSeconds,
      hasHalfStarted,
      subReminderTriggered,
      oneMinuteAlertTriggered,
      targetAlertTriggered
    };
  }

  stopTimerComplete();
  currentPeriod = period;

  // 2. Restore new period's saved data if present
  const targetHalfData = halvesData[period] || {
    timerSeconds: 0,
    stoppageSeconds: 0,
    hasHalfStarted: false,
    subReminderTriggered: false,
    oneMinuteAlertTriggered: false,
    targetAlertTriggered: false
  };

  timerSeconds = targetHalfData.timerSeconds || 0;
  stoppageSeconds = targetHalfData.stoppageSeconds || 0;
  startTimestamp = 0;
  stoppageStartTimestamp = 0;
  hasHalfStarted = Boolean(targetHalfData.hasHalfStarted && timerSeconds > 0);
  subReminderTriggered = targetHalfData.subReminderTriggered || false;
  subBannerDismissed = false;
  oneMinuteAlertTriggered = targetHalfData.oneMinuteAlertTriggered || (timerSeconds >= oneMinuteWarningSeconds);
  oneMinuteBannerDismissed = false;
  targetAlertTriggered = targetHalfData.targetAlertTriggered || (timerSeconds >= targetHalfSeconds);

  const stoppageDisplay = document.getElementById('stoppageDisplay');
  if (stoppageDisplay) stoppageDisplay.innerText = stoppageSeconds > 0 ? `Stoppage: +${formatTime(stoppageSeconds)}` : 'Stoppage: +00:00';
  const ghostClock = document.getElementById('ghostClockElapsed');
  if (ghostClock) ghostClock.innerText = stoppageSeconds > 0 ? `+${formatTime(stoppageSeconds)} lost` : '+00:00 lost';

  updateTimerUI();
  updateTimerButtonUI();
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  document.getElementById('subReminderBanner')?.classList.add('hidden');
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  hapticFeedback('tap');
  onPeriodChangeCallbacks.forEach(cb => cb(currentPeriod));
}

export function nextPeriod() {
  stopTimerComplete();
  if (currentPeriod === '1st Half') {
    currentPeriod = '2nd Half';
  } else if (currentPeriod === '2nd Half') {
    finishMatch();
    return;
  }
  timerSeconds = 0;
  stoppageSeconds = 0;
  hasHalfStarted = false;
  subReminderTriggered = false;
  subBannerDismissed = false;
  oneMinuteAlertTriggered = false;
  oneMinuteBannerDismissed = false;
  targetAlertTriggered = false;

  const stoppageDisplay = document.getElementById('stoppageDisplay');
  if (stoppageDisplay) stoppageDisplay.innerText = 'Stoppage: +00:00';
  const ghostClock = document.getElementById('ghostClockElapsed');
  if (ghostClock) ghostClock.innerText = '+00:00 lost';

  updateTimerUI();
  updateTimerButtonUI();
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  document.getElementById('subReminderBanner')?.classList.add('hidden');
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  onPeriodChangeCallbacks.forEach(cb => cb(currentPeriod));
}

export function finishMatch() {
  stopTimerComplete();
  currentPeriod = 'Full Time';
  subReminderTriggered = false;
  subBannerDismissed = false;
  oneMinuteAlertTriggered = false;
  oneMinuteBannerDismissed = false;
  targetAlertTriggered = false;
  playWhistleTone('double');
  hapticFeedback('long');
  updateTimerUI();
  updateTimerButtonUI();
  onPeriodChangeCallbacks.forEach(cb => cb(currentPeriod));

  // Trigger report modal automatically
  const openReport = window.openReportModal;
  if (typeof openReport === 'function') {
    openReport();
  }
}

export function updateEditPencilsUI() {
  const isRunning = Boolean(isTimerRunning);
  const pencils = document.querySelectorAll('.team-pencil');
  pencils.forEach(p => {
    if (isRunning) {
      p.classList.add('hidden');
      p.style.setProperty('display', 'none', 'important');
    } else {
      p.classList.remove('hidden');
      p.style.removeProperty('display');
    }
  });

  const editBtns = document.querySelectorAll('.team-edit-btn');
  editBtns.forEach(btn => {
    if (isRunning) {
      btn.setAttribute('disabled', 'true');
      btn.style.setProperty('pointer-events', 'none', 'important');
      btn.style.setProperty('cursor', 'default', 'important');
    } else {
      btn.removeAttribute('disabled');
      btn.style.removeProperty('pointer-events');
      btn.style.removeProperty('cursor');
    }
  });
}

function updateTimerUI() {
  const timerEl = document.getElementById('mainTimer');
  const periodBadge = document.getElementById('periodBadge');
  const stoppageDisplay = document.getElementById('stoppageDisplay');

  if (timerEl) timerEl.innerText = formatTime(timerSeconds);

  if (periodBadge) {
    const textEl = document.getElementById('periodBadgeText') || periodBadge;
    if (currentPeriod === 'Full Time') {
      textEl.innerText = 'FULL TIME';
      periodBadge.className = 'shrink-0 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase font-mono-sport bg-amber-950/90 text-amber-300 border border-amber-400/50 shadow-sm flex items-center justify-center gap-1';
    } else {
      textEl.innerText = currentPeriod.toUpperCase();
      periodBadge.className = 'shrink-0 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase font-mono-sport bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-sm flex items-center justify-center gap-1';
    }
  }

  if (stoppageDisplay && !isTimerRunning && stoppageSeconds === 0) {
    stoppageDisplay.innerText = 'Stoppage: +00:00';
  }

  // Update End Half button label
  const endHalfText = document.getElementById('endHalfBtnText');
  if (endHalfText) {
    if (currentPeriod === 'Full Time') {
      endHalfText.innerText = 'Full Time';
    } else {
      endHalfText.innerText = 'End Half';
    }
  }

  // Update Visual Progress Bar and Mid-Half Marker
  const progressBar = document.getElementById('halfProgressBar');
  const subMarkerTick = document.getElementById('subMarkerTick');
  if (progressBar && targetHalfSeconds > 0) {
    const pct = Math.min(100, Math.max(0, (timerSeconds / targetHalfSeconds) * 100));
    progressBar.style.width = `${pct}%`;
  }
  if (subMarkerTick && targetHalfSeconds > 0) {
    const subPct = Math.min(100, Math.max(0, (subReminderSeconds / targetHalfSeconds) * 100));
    subMarkerTick.style.left = `${subPct}%`;
  }

  updateEditPencilsUI();
}

export function endHalf() {
  if (typeof window !== 'undefined' && typeof window.endHalfCoordinator === 'function') {
    window.endHalfCoordinator();
    return;
  }

  if (currentPeriod === '1st Half') {
    setPeriod('2nd Half');
  } else {
    finishMatch();
  }
}

export function updateTimerButtonUI() {
  const btn = document.getElementById('timerToggleBtn');
  const text = document.getElementById('timerBtnText');
  const icon = document.getElementById('timerIconContainer');
  if (!btn || !text || !icon) return;

  if (currentPeriod === 'Full Time') {
    btn.className = 'w-full py-4 px-6 rounded-xl font-extrabold text-lg tracking-wide uppercase shadow transition bg-slate-800 text-slate-300 border-2 border-slate-700 flex items-center justify-center gap-2.5 cursor-pointer';
    text.innerText = 'MATCH FINISHED';
    icon.innerHTML = '<svg class="w-5 h-5 fill-none stroke-current" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
  } else if (isTimerRunning) {
    btn.className = 'w-full py-4 px-6 rounded-xl font-extrabold text-lg tracking-wide uppercase shadow-lg transition active:scale-[0.98] bg-amber-500 hover:bg-amber-400 text-slate-950 font-black border-2 border-amber-200 shadow-amber-950/40 flex items-center justify-center gap-2.5 cursor-pointer';
    text.innerText = 'PAUSE';
    icon.innerHTML = '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  } else if (!hasHalfStarted) {
    btn.className = 'w-full py-3 sm:py-3.5 px-4 rounded-xl font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-lg transition active:scale-[0.98] bg-emerald-600 hover:bg-emerald-500 text-white border-2 border-emerald-300 shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer';
    text.innerText = currentPeriod === '2nd Half' ? 'START 2ND HALF' : 'START PLAY';
    icon.innerHTML = '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  } else {
    btn.className = 'w-full py-3 sm:py-3.5 px-4 rounded-xl font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-xl transition active:scale-[0.98] bg-emerald-600 hover:bg-emerald-500 text-white font-black border-2 border-emerald-300 shadow-emerald-950/50 flex items-center justify-center gap-2 animate-pulse cursor-pointer';
    text.innerText = 'RESUME PLAY';
    icon.innerHTML = '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  }
}

let subReminderTimeout = null;

export function triggerSubReminder() {
  subReminderTriggered = true;
  subBannerDismissed = false;
  const banner = document.getElementById('subReminderBanner');
  if (banner) banner.classList.remove('hidden');

  playWhistleTone('triple_chime');
  hapticFeedback('alert');

  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }

  if (subReminderTimeout) clearTimeout(subReminderTimeout);
  subReminderTimeout = setTimeout(() => {
    dismissSubBanner();
  }, 60000); // Auto-dismiss after 1 minute
}

export function triggerOneMinuteAlert() {
  oneMinuteAlertTriggered = true;
  oneMinuteBannerDismissed = false;
  playWhistleTone('warning');
  hapticFeedback('one_minute');

  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

function triggerTargetTimeAlert() {
  targetAlertTriggered = true;
  playWhistleTone('target_reached');
  hapticFeedback('time_up');
}

export function dismissSubBanner() {
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  subBannerDismissed = true;
  hapticFeedback('tap');
  const banner = document.getElementById('subReminderBanner');
  if (banner) banner.classList.add('hidden');
  const helperSub = document.getElementById('refHelperSubAlert');
  if (helperSub) helperSub.classList.add('hidden');
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function dismissOneMinuteBanner() {
  oneMinuteBannerDismissed = true;
  hapticFeedback('tap');
  const alertEl = document.getElementById('refHelperOneMinuteAlert');
  if (alertEl) alertEl.classList.add('hidden');
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function dismissPausedGoalToast() {
  const toast = document.getElementById('pausedGoalToast');
  if (toast) toast.classList.add('hidden');
  const refToast = document.getElementById('refHelperPausedGoalAlert');
  if (refToast) refToast.classList.add('hidden');
}

// Immediate wake-up clock resynchronization (ensures clock never stops or drifts when phone sleeps)
export function syncWallClock() {
  if (isTimerRunning && startTimestamp) {
    const now = Date.now();
    timerSeconds = Math.max(0, Math.floor((now - startTimestamp) / 1000));
    updateTimerUI();

    if (timerSeconds >= subReminderSeconds && !subReminderTriggered && currentPeriod !== 'Full Time') {
      triggerSubReminder();
    }
    if (subReminderTriggered && timerSeconds >= subReminderSeconds + 60) {
      dismissSubBanner();
    }
    if (timerSeconds >= oneMinuteWarningSeconds && !oneMinuteAlertTriggered && currentPeriod !== 'Full Time') {
      triggerOneMinuteAlert();
    }
    if (timerSeconds >= targetHalfSeconds && !targetAlertTriggered && currentPeriod !== 'Full Time') {
      triggerTargetTimeAlert();
    }

    onTimerTickCallbacks.forEach(cb => cb(timerSeconds, isTimerRunning));
  } else if (!isTimerRunning && hasHalfStarted && stoppageStartTimestamp) {
    stoppageSeconds = Math.max(0, Math.floor((Date.now() - stoppageStartTimestamp) / 1000));
    const stoppageDisplay = document.getElementById('stoppageDisplay');
    const ghostClockElapsed = document.getElementById('ghostClockElapsed');
    if (stoppageDisplay) stoppageDisplay.innerText = `Stoppage: +${formatTime(stoppageSeconds)}`;
    if (ghostClockElapsed) ghostClockElapsed.innerText = `+${formatTime(stoppageSeconds)} lost`;
    const refBadge = document.getElementById('refHelperLostTimeBadge');
    if (refBadge) refBadge.innerText = `+${formatTime(stoppageSeconds)} lost`;
    if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
      window.renderRefereeHelperBar();
    }
  }
}

if (typeof window !== 'undefined') {
  const onWakeReactivation = () => {
    syncWallClock();
    if (isTimerRunning) {
      requestWakeLock();
      enableAudioKeepAlive();
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      onWakeReactivation();
    }
  });

  window.addEventListener('pageshow', onWakeReactivation);
  window.addEventListener('focus', onWakeReactivation);
}
