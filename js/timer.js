// What's The Score Ref - Match Timer, Half-Time Break & Cool-Down Module
import { playWhistleTone, hapticFeedback, requestWakeLock, enableAudioKeepAlive, disableAudioKeepAlive } from './hardware.js';

export const DEFAULT_HALF_MINUTES = 15;
export let targetHalfSeconds = 15 * 60;
export let subReminderSeconds = 7 * 60 + 30;
export let oneMinuteWarningSeconds = 14 * 60;

export const TARGET_HALF_SECONDS = 15 * 60;
export const SUB_REMINDER_SECONDS = 7 * 60 + 30;
export const ONE_MINUTE_WARNING_SECONDS = 14 * 60;

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
let startTimestamp = 0;
let stoppageStartTimestamp = 0;
let forgotResumeDismissed = false;
let lastStoppageNudgeSecond = 0;
let lastRenderedPencilState = null;

// Half-Time 5:00 Interval Countdown State
let htBreakInterval = null;
let htBreakEndTimestamp = 0;
let htBreakRemainingSec = 0;
let htBreak30sWarned = false;

// 2:00 Player Cool-Down ("Calm Sub") Timer State
let coolDownInterval = null;
let coolDownEndTimestamp = 0;
let coolDownRemainingSec = 0;
let coolDownPlayerTag = '';

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
  const safe = Math.max(0, Math.floor(sec));
  const m = Math.floor(safe / 60).toString().padStart(2, '0');
  const s = (safe % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function setTargetHalfMinutes(minutes) {
  const min = parseInt(minutes, 10);
  if (isNaN(min) || min < 1 || min > 60) return;
  targetHalfSeconds = min * 60;
  subReminderSeconds = Math.floor(targetHalfSeconds / 2);
  oneMinuteWarningSeconds = Math.max(0, targetHalfSeconds - 60);

  // Re-arm milestones if new thresholds are still ahead of current elapsed time
  if (timerSeconds < subReminderSeconds) {
    subReminderTriggered = false;
    subBannerDismissed = false;
  }
  if (timerSeconds < oneMinuteWarningSeconds) {
    oneMinuteAlertTriggered = false;
    oneMinuteBannerDismissed = false;
  }
  if (timerSeconds < targetHalfSeconds) {
    targetAlertTriggered = false;
  }

  syncDynamicDurationLabels(min);
  updateHalfDurationButtonsUI(min);
  updateTimerUI();

  if (typeof window !== 'undefined') {
    if (typeof window.renderRefereeHelperBar === 'function') {
      window.renderRefereeHelperBar();
    }
    if (typeof window.onHalfDurationChanged === 'function') {
      window.onHalfDurationChanged(min);
    }
  }
}

function syncDynamicDurationLabels(min) {
  const targetSpan = document.getElementById('targetTimeSpan');
  if (targetSpan) targetSpan.innerText = formatTime(targetHalfSeconds);

  const badge = document.getElementById('quickToolsHalfDurationBadge');
  if (badge) badge.innerText = `${min}m`;

  const subAlertText = document.getElementById('refHelperSubAlertText');
  if (subAlertText) {
    subAlertText.innerText = `Halfway sub window (${formatTime(subReminderSeconds)})`;
  }

  const reportSub = document.getElementById('reportDurationSubtitle');
  if (reportSub) {
    reportSub.innerText = `Harrogate & Wharfedale JFL (U9) • ${min}m Halves`;
  }

  const soundCueDesc = document.getElementById('soundCuesDynamicDesc');
  if (soundCueDesc) {
    soundCueDesc.innerText = `${formatTime(subReminderSeconds)} sub, ${formatTime(oneMinuteWarningSeconds)} warn, ${formatTime(targetHalfSeconds)} FT`;
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
        btn.className = 'half-dur-btn py-1.5 px-1 rounded-lg text-xs font-black transition border border-indigo-400 text-white bg-indigo-600 shadow-sm cursor-pointer text-center';
      } else {
        btn.className = 'half-dur-btn py-1.5 px-1 rounded-lg text-xs font-bold transition border border-slate-800 text-slate-400 hover:text-white bg-slate-900 cursor-pointer text-center';
      }
    }
  });
}

export function isFirstHalfEnded() {
  return firstHalfEnded;
}

export function setFirstHalfEnded(val) {
  firstHalfEnded = Boolean(val);
  updateTimerUI();
}

// ---------------- Half-Time 5:00 Interval Countdown ----------------
export function startHalfTimeBreak(durationSeconds = 5 * 60) {
  dismissHalfTimeBreak(false);
  htBreakRemainingSec = durationSeconds;
  htBreakEndTimestamp = Date.now() + durationSeconds * 1000;
  htBreak30sWarned = false;
  renderHalfTimeBreakUI();

  htBreakInterval = setInterval(() => {
    const rem = Math.max(0, Math.ceil((htBreakEndTimestamp - Date.now()) / 1000));
    if (rem === htBreakRemainingSec) return;
    htBreakRemainingSec = rem;
    renderHalfTimeBreakUI();

    if (rem <= 30 && rem > 0 && !htBreak30sWarned) {
      htBreak30sWarned = true;
      playWhistleTone('warning');
      hapticFeedback('one_minute');
    } else if (rem <= 0) {
      clearInterval(htBreakInterval);
      htBreakInterval = null;
      playWhistleTone('chime_ready');
      hapticFeedback('success');
      renderHalfTimeBreakUI();
    }
  }, 250);
}

export function dismissHalfTimeBreak(withHaptic = true) {
  if (htBreakInterval) {
    clearInterval(htBreakInterval);
    htBreakInterval = null;
  }
  htBreakEndTimestamp = 0;
  htBreakRemainingSec = 0;
  htBreak30sWarned = false;
  const banner = document.getElementById('halfTimeBreakBanner');
  if (banner) banner.classList.add('hidden');
  if (withHaptic) hapticFeedback('tap');
}

function renderHalfTimeBreakUI() {
  const banner = document.getElementById('halfTimeBreakBanner');
  const timeEl = document.getElementById('halfTimeBreakTimer');
  const labelEl = document.getElementById('halfTimeBreakLabel');
  if (!banner) return;

  if (!htBreakEndTimestamp && htBreakRemainingSec <= 0 && !htBreakInterval) {
    banner.classList.add('hidden');
    return;
  }

  banner.classList.remove('hidden');
  if (htBreakRemainingSec <= 0) {
    if (labelEl) labelEl.innerText = 'Half-Time Complete — Ready!';
    if (timeEl) timeEl.innerText = '00:00';
  } else {
    if (labelEl) labelEl.innerText = htBreakRemainingSec <= 30 ? 'Half-Time Ending Soon' : 'Half-Time Break';
    if (timeEl) timeEl.innerText = formatTime(htBreakRemainingSec);
  }
}

export function getHalfTimeBreakState() {
  return {
    active: Boolean(htBreakInterval || htBreakRemainingSec > 0),
    remainingSeconds: htBreakRemainingSec
  };
}

// ---------------- 2:00 Player Cool-Down ("Calm Sub") Timer ----------------
export function startCoolDownTimer(durationSeconds = 120, playerLabel = '') {
  if (coolDownInterval) {
    clearInterval(coolDownInterval);
    coolDownInterval = null;
  }
  coolDownRemainingSec = durationSeconds;
  coolDownEndTimestamp = Date.now() + durationSeconds * 1000;
  coolDownPlayerTag = (playerLabel || '').trim();
  hapticFeedback('success');

  coolDownInterval = setInterval(() => {
    const rem = Math.max(0, Math.ceil((coolDownEndTimestamp - Date.now()) / 1000));
    if (rem === coolDownRemainingSec) return;
    coolDownRemainingSec = rem;
    updateCoolDownUI();

    if (rem <= 0) {
      clearInterval(coolDownInterval);
      coolDownInterval = null;
      coolDownEndTimestamp = 0;
      playWhistleTone('chime_ready');
      hapticFeedback('success');
      if (typeof window !== 'undefined' && typeof window.showMatchToast === 'function') {
        window.showMatchToast(`🧊 Cool-Down complete${coolDownPlayerTag ? ' (' + coolDownPlayerTag + ')' : ''} — may return at stoppage`, '✅', 4500);
      }
      coolDownPlayerTag = '';
      updateCoolDownUI();
    }
  }, 250);

  updateCoolDownUI();
  if (typeof window !== 'undefined' && typeof window.showMatchToast === 'function') {
    window.showMatchToast(`🧊 2:00 Cool-Down started${coolDownPlayerTag ? ' (' + coolDownPlayerTag + ')' : ''}`, '🧊', 2500);
  }
}

export function cancelCoolDownTimer() {
  if (coolDownInterval) {
    clearInterval(coolDownInterval);
    coolDownInterval = null;
  }
  coolDownEndTimestamp = 0;
  coolDownRemainingSec = 0;
  coolDownPlayerTag = '';
  hapticFeedback('tap');
  updateCoolDownUI();
}

export function getCoolDownState() {
  return {
    active: Boolean(coolDownInterval && coolDownRemainingSec > 0),
    remainingSeconds: coolDownRemainingSec,
    playerTag: coolDownPlayerTag
  };
}

function updateCoolDownUI() {
  const active = Boolean(coolDownInterval && coolDownRemainingSec > 0);
  const quickBadge = document.getElementById('quickToolsCoolDownBadge');
  const quickBtnLabel = document.getElementById('quickToolsCoolDownSubtext');
  if (quickBadge) {
    if (active) {
      quickBadge.innerText = formatTime(coolDownRemainingSec);
      quickBadge.className = 'px-2.5 py-1 bg-cyan-400 text-slate-950 rounded-lg font-black text-[10px] shrink-0 font-mono-sport animate-pulse';
    } else {
      quickBadge.innerText = 'START 2:00';
      quickBadge.className = 'px-2.5 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-lg font-black text-[10px] shrink-0 font-mono-sport';
    }
  }
  if (quickBtnLabel) {
    quickBtnLabel.innerText = active
      ? `Active calm-down (${formatTime(coolDownRemainingSec)}) • Tap to cancel`
      : 'Cardless U9 2-minute player calm-down timer';
  }

  const refCdTime = document.getElementById('refHelperCoolDownTime');
  const refCdLabel = document.getElementById('refHelperCoolDownLabel');
  if (refCdTime) refCdTime.innerText = formatTime(coolDownRemainingSec);
  if (refCdLabel) {
    refCdLabel.innerText = coolDownPlayerTag ? `Cool-down (${coolDownPlayerTag})` : 'Cool-down sub';
  }

  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function toggleCoolDownTimer() {
  if (coolDownInterval && coolDownRemainingSec > 0) {
    cancelCoolDownTimer();
  } else {
    startCoolDownTimer(120);
  }
}

export function getTimerState() {
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
    coolDownActive: Boolean(coolDownInterval && coolDownRemainingSec > 0),
    coolDownRemainingSec,
    coolDownPlayerTag,
    halvesData: {
      '1st Half': { ...halvesData['1st Half'] },
      '2nd Half': { ...halvesData['2nd Half'] }
    }
  };
}

export function restoreTimerState(state) {
  if (!state) return;
  dismissHalfTimeBreak(false);
  if (state.targetHalfSeconds) {
    setTargetHalfMinutes(Math.round(state.targetHalfSeconds / 60));
  } else {
    setTargetHalfMinutes(15);
  }
  timerSeconds = state.timerSeconds || 0;
  stoppageSeconds = state.stoppageSeconds || 0;
  currentPeriod = state.currentPeriod || '1st Half';
  subReminderTriggered = state.subReminderTriggered || false;
  subBannerDismissed = Boolean(state.subBannerDismissed);
  oneMinuteAlertTriggered = state.oneMinuteAlertTriggered || (timerSeconds >= oneMinuteWarningSeconds);
  oneMinuteBannerDismissed = Boolean(state.oneMinuteBannerDismissed);
  targetAlertTriggered = state.targetAlertTriggered || (timerSeconds >= targetHalfSeconds);
  forgotResumeDismissed = state.forgotResumeDismissed || false;
  hasHalfStarted = typeof state.hasHalfStarted === 'boolean' ? state.hasHalfStarted : (timerSeconds > 0);
  firstHalfEnded = typeof state.firstHalfEnded === 'boolean' ? state.firstHalfEnded : (currentPeriod === '2nd Half' || currentPeriod === 'Full Time');
  isTimerRunning = false; // Reload in safe paused state

  if (state.halvesData) {
    halvesData = {
      '1st Half': { ...halvesData['1st Half'], ...(state.halvesData['1st Half'] || {}) },
      '2nd Half': { ...halvesData['2nd Half'], ...(state.halvesData['2nd Half'] || {}) }
    };
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

  if (timerSeconds === 0 || currentPeriod === 'Full Time') {
    stoppageSeconds = 0;
  }

  clearInterval(timerInterval);
  timerInterval = null;
  stoppageStartTimestamp = (stoppageSeconds > 0) ? Date.now() - (stoppageSeconds * 1000) : 0;

  updateTimerUI();
  updateTimerButtonUI();

  const stoppageDisplay = document.getElementById('stoppageDisplay');
  if (stoppageDisplay) {
    stoppageDisplay.innerText = `Stoppage: +${formatTime(stoppageSeconds)}`;
  }
  const refLostTimeBadge = document.getElementById('refHelperLostTimeBadge');
  if (refLostTimeBadge) refLostTimeBadge.innerText = `+${formatTime(stoppageSeconds)} lost`;
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function initTimer() {
  syncDynamicDurationLabels(getTargetHalfMinutes());
  updateHalfDurationButtonsUI(getTargetHalfMinutes());
  updateTimerUI();
  updateTimerButtonUI();
}

export function startTimer() {
  if (currentPeriod === 'Full Time') return;

  if (currentPeriod === '2nd Half' && !firstHalfEnded) {
    if (typeof window !== 'undefined' && typeof window.showFirstHalfMustEndPrompt === 'function') {
      window.showFirstHalfMustEndPrompt();
    }
    return;
  }

  if (isTimerRunning) return;
  dismissHalfTimeBreak(false);

  isTimerRunning = true;
  hasHalfStarted = true;
  hapticFeedback('tap');
  playWhistleTone('short');

  requestWakeLock();
  enableAudioKeepAlive();

  if (typeof document !== 'undefined' && document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }

  document.body?.classList.add('zen-mode');
  updateEditPencilsUI();
  updateTimerButtonUI();
  updateTimerUI();

  forgotResumeDismissed = false;
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
  document.getElementById('firstHalfMustEndToast')?.classList.add('hidden');

  if (typeof window !== 'undefined' && typeof window.dismissPausedGoalToast === 'function') {
    window.dismissPausedGoalToast();
  }
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
  if (typeof window !== 'undefined' && typeof window.updateTabBadges === 'function') {
    window.updateTabBadges();
  }

  startTimestamp = Date.now() - (timerSeconds * 1000);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const now = Date.now();
    const nextSec = Math.max(0, Math.floor((now - startTimestamp) / 1000));
    if (nextSec === timerSeconds) return; // Throttle DOM & storage updates to exact 1Hz rollovers!

    timerSeconds = nextSec;
    updateTimerUI();

    // 1. Halfway Sub Reminder
    if (timerSeconds >= subReminderSeconds && !subReminderTriggered && currentPeriod !== 'Full Time') {
      triggerSubReminder();
    }
    if (subReminderTriggered && timerSeconds >= subReminderSeconds + 60 && !subBannerDismissed) {
      dismissSubBanner(false);
    }

    // 2. 1-Minute Remaining Warning (only if we haven't already jumped past Full Duration)
    if (timerSeconds >= oneMinuteWarningSeconds && timerSeconds < targetHalfSeconds && !oneMinuteAlertTriggered && currentPeriod !== 'Full Time') {
      triggerOneMinuteAlert();
    }

    // 3. Target Time Reached
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
  disableAudioKeepAlive();

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
    if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
      window.renderRefereeHelperBar();
    }

    timerInterval = setInterval(() => {
      const nextStoppage = Math.max(0, Math.floor((Date.now() - stoppageStartTimestamp) / 1000));
      if (nextStoppage === stoppageSeconds) return; // Throttle stoppage updates to 1Hz!

      stoppageSeconds = nextStoppage;
      const stoppageDisplay = document.getElementById('stoppageDisplay');
      if (stoppageDisplay) stoppageDisplay.innerText = `Stoppage: +${formatTime(stoppageSeconds)}`;

      const refBadge = document.getElementById('refHelperLostTimeBadge');
      if (refBadge) refBadge.innerText = `+${formatTime(stoppageSeconds)} lost`;

      if (stoppageSeconds >= 45 && !forgotResumeDismissed) {
        if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
          window.renderRefereeHelperBar();
        }
      }

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
    if (typeof window.openReportModal === 'function') window.openReportModal();
    return;
  }
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
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
  disableAudioKeepAlive();
  document.body?.classList.remove('zen-mode');
  updateEditPencilsUI();
  clearInterval(timerInterval);
  timerInterval = null;
  startTimestamp = 0;
  stoppageStartTimestamp = 0;
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
}

export function resetMatchTimer() {
  stopTimerComplete();
  dismissHalfTimeBreak(false);
  cancelCoolDownTimer();
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

  updateTimerUI();
  updateTimerButtonUI();
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  document.getElementById('refHelperPowerPlayAlert')?.classList.add('hidden');
  document.getElementById('refHelperPowerPlayEndedAlert')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
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

  if (currentPeriod === 'Full Time') {
    currentPeriod = '2nd Half';
    halvesData['2nd Half'] = {
      timerSeconds: 0,
      stoppageSeconds: 0,
      hasHalfStarted: false,
      subReminderTriggered: false,
      oneMinuteAlertTriggered: false,
      targetAlertTriggered: false
    };
  } else if (currentPeriod === '1st Half') {
    firstHalfEnded = false;
    dismissHalfTimeBreak(false);
  }

  const stoppageDisplay = document.getElementById('stoppageDisplay');
  if (stoppageDisplay) stoppageDisplay.innerText = 'Stoppage: +00:00';

  updateTimerUI();
  updateTimerButtonUI();
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  document.getElementById('refHelperForgotResumeAlert')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
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

export function setPeriod(period, options = {}) {
  if (period === 'Full Time') {
    finishMatch(options);
    return;
  }
  if (period !== '1st Half' && period !== '2nd Half') return;

  if (period === '2nd Half' && !firstHalfEnded) {
    if (typeof window !== 'undefined' && typeof window.showFirstHalfMustEndPrompt === 'function') {
      window.showFirstHalfMustEndPrompt();
    }
    return;
  }

  if (period === currentPeriod) return;

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
  if (stoppageDisplay) {
    stoppageDisplay.innerText = stoppageSeconds > 0 ? `Stoppage: +${formatTime(stoppageSeconds)}` : 'Stoppage: +00:00';
  }

  updateTimerUI();
  updateTimerButtonUI();
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  hapticFeedback('tap');
  onPeriodChangeCallbacks.forEach(cb => cb(currentPeriod));
}

export function finishMatch(options = {}) {
  const { openReport = true, silent = false } = options;
  stopTimerComplete();
  dismissHalfTimeBreak(false);
  currentPeriod = 'Full Time';
  subReminderTriggered = false;
  subBannerDismissed = false;
  oneMinuteAlertTriggered = false;
  oneMinuteBannerDismissed = false;
  targetAlertTriggered = false;

  if (!silent) {
    playWhistleTone('double');
    hapticFeedback('long');
  }
  updateTimerUI();
  updateTimerButtonUI();
  onPeriodChangeCallbacks.forEach(cb => cb(currentPeriod));

  if (typeof window !== 'undefined' && typeof window.archiveActiveMatchToHistory === 'function') {
    window.archiveActiveMatchToHistory();
  }

  if (openReport && typeof window.openReportModal === 'function') {
    window.openReportModal();
  }
}

export function updateEditPencilsUI(force = false) {
  const isRunning = Boolean(isTimerRunning);
  if (!force && lastRenderedPencilState === isRunning) return;
  lastRenderedPencilState = isRunning;

  document.querySelectorAll('.team-pencil').forEach(p => {
    p.classList.toggle('hidden', isRunning);
  });

  document.querySelectorAll('.team-edit-btn').forEach(btn => {
    if (isRunning) {
      btn.setAttribute('disabled', 'true');
      btn.style.pointerEvents = 'none';
      btn.style.cursor = 'default';
    } else {
      btn.removeAttribute('disabled');
      btn.style.pointerEvents = '';
      btn.style.cursor = '';
    }
  });
}

function updateTimerUI() {
  const timerEl = document.getElementById('mainTimer');
  const periodBadge = document.getElementById('periodBadge');
  const stoppageDisplay = document.getElementById('stoppageDisplay');
  const overtimeBadge = document.getElementById('overtimeBadge');

  if (timerEl) {
    timerEl.innerText = formatTime(timerSeconds);
    timerEl.classList.remove('timer-state-idle', 'timer-state-running', 'timer-state-paused', 'timer-state-overtime', 'timer-state-ft');

    if (currentPeriod === 'Full Time') {
      timerEl.classList.add('timer-state-ft');
    } else if (timerSeconds >= targetHalfSeconds && hasHalfStarted) {
      timerEl.classList.add('timer-state-overtime');
    } else if (!isTimerRunning && hasHalfStarted) {
      timerEl.classList.add('timer-state-paused');
    } else if (isTimerRunning) {
      timerEl.classList.add('timer-state-running');
    } else {
      timerEl.classList.add('timer-state-idle');
    }
  }

  if (overtimeBadge) {
    if (currentPeriod !== 'Full Time' && hasHalfStarted && timerSeconds > targetHalfSeconds) {
      const overSec = timerSeconds - targetHalfSeconds;
      overtimeBadge.innerText = `+${formatTime(overSec)} OVER`;
      overtimeBadge.classList.remove('hidden');
    } else {
      overtimeBadge.classList.add('hidden');
    }
  }

  if (periodBadge) {
    const textEl = document.getElementById('periodBadgeText') || periodBadge;
    if (currentPeriod === 'Full Time') {
      textEl.innerText = 'FULL TIME';
      periodBadge.className = 'shrink-0 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase font-mono-sport bg-amber-950/90 text-amber-300 border border-amber-400/50 shadow-sm flex items-center justify-center gap-1';
    } else if (!isTimerRunning && hasHalfStarted) {
      textEl.innerText = `${currentPeriod.toUpperCase()} • PAUSED`;
      periodBadge.className = 'shrink-0 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase font-mono-sport bg-amber-950/80 text-amber-300 border border-amber-500/50 shadow-sm flex items-center justify-center gap-1';
    } else {
      textEl.innerText = currentPeriod.toUpperCase();
      periodBadge.className = 'shrink-0 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wider uppercase font-mono-sport bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 shadow-sm flex items-center justify-center gap-1';
    }
  }

  if (stoppageDisplay && !isTimerRunning && stoppageSeconds === 0) {
    stoppageDisplay.innerText = 'Stoppage: +00:00';
  }

  const endHalfText = document.getElementById('endHalfBtnText');
  if (endHalfText) {
    if (currentPeriod === 'Full Time') {
      endHalfText.innerText = 'Report';
    } else if (currentPeriod === '2nd Half') {
      endHalfText.innerText = 'End Match';
    } else {
      endHalfText.innerText = 'End Half';
    }
  }

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
    btn.className = 'w-full py-3 sm:py-3.5 px-4 rounded-xl font-extrabold text-base sm:text-lg tracking-wide uppercase shadow transition bg-slate-800 hover:bg-slate-700 text-amber-300 border-2 border-amber-500/50 flex items-center justify-center gap-2.5 cursor-pointer';
    text.innerText = 'VIEW MATCH REPORT';
    icon.innerHTML = '<svg class="w-5 h-5 fill-none stroke-current" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
  } else if (isTimerRunning) {
    btn.className = 'w-full py-3 sm:py-3.5 px-4 rounded-xl font-black text-base sm:text-lg tracking-wide uppercase shadow-lg transition active:scale-[0.98] bg-amber-500 hover:bg-amber-400 text-slate-950 border-2 border-amber-200 shadow-amber-950/40 flex items-center justify-center gap-2.5 cursor-pointer';
    text.innerText = 'PAUSE CLOCK';
    icon.innerHTML = '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  } else if (!hasHalfStarted) {
    btn.className = 'w-full py-3 sm:py-3.5 px-4 rounded-xl font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-lg transition active:scale-[0.98] bg-emerald-600 hover:bg-emerald-500 text-white border-2 border-emerald-300 shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer';
    text.innerText = currentPeriod === '2nd Half' ? 'START 2ND HALF' : 'START PLAY';
    icon.innerHTML = '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  } else {
    btn.className = 'w-full py-3 sm:py-3.5 px-4 rounded-xl font-black text-base sm:text-lg tracking-wide uppercase shadow-xl transition active:scale-[0.98] bg-emerald-600 hover:bg-emerald-500 text-white border-2 border-emerald-300 shadow-emerald-950/50 flex items-center justify-center gap-2 animate-pulse cursor-pointer';
    text.innerText = 'RESUME PLAY';
    icon.innerHTML = '<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  }
}

let subReminderTimeout = null;

export function triggerSubReminder() {
  subReminderTriggered = true;
  subBannerDismissed = false;

  const subAlertText = document.getElementById('refHelperSubAlertText');
  if (subAlertText) {
    subAlertText.innerText = `Halfway sub window (${formatTime(subReminderSeconds)})`;
  }

  playWhistleTone('triple_chime');
  hapticFeedback('alert');

  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
  if (typeof window !== 'undefined' && typeof window.getAppMode === 'function' && window.getAppMode() === 'coach') {
    if (typeof window.showMatchToast === 'function') {
      window.showMatchToast(`🔄 Halfway Sub Window (${formatTime(subReminderSeconds)}) — Tap Subs to rotate!`, '🔄', 4000);
    }
  }

  if (subReminderTimeout) clearTimeout(subReminderTimeout);
  subReminderTimeout = setTimeout(() => {
    dismissSubBanner(false);
  }, 60000);
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

export function dismissSubBanner(withHaptic = true) {
  if (subReminderTimeout) {
    clearTimeout(subReminderTimeout);
    subReminderTimeout = null;
  }
  subBannerDismissed = true;
  if (withHaptic) hapticFeedback('tap');
  document.getElementById('refHelperSubAlert')?.classList.add('hidden');
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

export function dismissOneMinuteBanner() {
  oneMinuteBannerDismissed = true;
  hapticFeedback('tap');
  document.getElementById('refHelperOneMinuteAlert')?.classList.add('hidden');
  if (typeof window !== 'undefined' && typeof window.renderRefereeHelperBar === 'function') {
    window.renderRefereeHelperBar();
  }
}

// Immediate wake-up clock resynchronization
export function syncWallClock() {
  if (isTimerRunning && startTimestamp) {
    const now = Date.now();
    timerSeconds = Math.max(0, Math.floor((now - startTimestamp) / 1000));
    updateTimerUI();

    if (timerSeconds >= subReminderSeconds && !subReminderTriggered && currentPeriod !== 'Full Time') {
      triggerSubReminder();
    }
    if (subReminderTriggered && timerSeconds >= subReminderSeconds + 60 && !subBannerDismissed) {
      dismissSubBanner(false);
    }
    if (timerSeconds >= oneMinuteWarningSeconds && timerSeconds < targetHalfSeconds && !oneMinuteAlertTriggered && currentPeriod !== 'Full Time') {
      triggerOneMinuteAlert();
    }
    if (timerSeconds >= targetHalfSeconds && !targetAlertTriggered && currentPeriod !== 'Full Time') {
      triggerTargetTimeAlert();
    }

    onTimerTickCallbacks.forEach(cb => cb(timerSeconds, isTimerRunning));
  } else if (!isTimerRunning && hasHalfStarted && stoppageStartTimestamp) {
    stoppageSeconds = Math.max(0, Math.floor((Date.now() - stoppageStartTimestamp) / 1000));
    const stoppageDisplay = document.getElementById('stoppageDisplay');
    if (stoppageDisplay) stoppageDisplay.innerText = `Stoppage: +${formatTime(stoppageSeconds)}`;
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
