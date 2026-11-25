// What's The Score Ref - Hardware Integration Module
// Battery-Smart Screen Wake Lock (Native Wake Lock API + iOS Fallback), Web Audio Synthesizer, Haptic Vibration
import { loadPrefs, savePrefs } from './storage.js';

const NO_SLEEP_MP4 = 'data:video/mp4;base64,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';

const initialPrefs = loadPrefs();

let wakeLockSentinel = null;
let noSleepVideo = null;
let wakeCanvas = null;
let wakeCanvasTimerId = null;
let isCanvasActive = false;
let isWakeLockRequested = initialPrefs.wakeLockEnabled !== false;
let isVideoPlaying = false;
let hasBoundInteractions = false;
let lastGestureCheckTime = 0;
let audioCtx = null;
let isAudioMuted = Boolean(initialPrefs.audioMuted);

// iOS Device Detection (iPhone, iPad, iPod, iPadOS)
export function isIOSDevice() {
  if (typeof navigator === 'undefined') return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent || '') ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

// Initialize or resume Web Audio Context on user interaction
function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// Low-Power Fallback Canvas Keep-Alive (2Hz instead of 60fps, only used when native Wake Lock & Video fail)
function initWakeCanvas() {
  if (wakeCanvas || typeof document === 'undefined') return wakeCanvas;
  wakeCanvas = document.createElement('canvas');
  wakeCanvas.id = 'wakeKeepAliveCanvas';
  wakeCanvas.width = 4;
  wakeCanvas.height = 4;
  wakeCanvas.setAttribute('aria-hidden', 'true');
  wakeCanvas.style.cssText = 'position:fixed;bottom:0;right:0;width:2px;height:2px;opacity:0.01;pointer-events:none;z-index:1;';

  if (document.body) {
    document.body.appendChild(wakeCanvas);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      if (wakeCanvas && !wakeCanvas.parentElement && document.body) {
        document.body.appendChild(wakeCanvas);
      }
    });
  }
  return wakeCanvas;
}

let canvasFrameCount = 0;
function renderCanvasTick() {
  if (!isCanvasActive) return;
  const canvas = initWakeCanvas();
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      canvasFrameCount++;
      ctx.fillStyle = (canvasFrameCount % 2 === 0) ? 'rgba(16, 185, 129, 0.04)' : 'rgba(245, 158, 11, 0.04)';
      ctx.fillRect(0, 0, 4, 4);
    }
  }
  wakeCanvasTimerId = setTimeout(renderCanvasTick, 500);
}

export function startCanvasKeepAlive() {
  if (isCanvasActive) return;
  isCanvasActive = true;
  initWakeCanvas();
  renderCanvasTick();
}

export function stopCanvasKeepAlive() {
  isCanvasActive = false;
  if (wakeCanvasTimerId) {
    clearTimeout(wakeCanvasTimerId);
    wakeCanvasTimerId = null;
  }
}

// Lazy-create hidden looping video element for iOS Safari / WebKit wake lock fallback
function getNoSleepVideo() {
  if (!noSleepVideo && typeof document !== 'undefined') {
    noSleepVideo = document.createElement('video');
    noSleepVideo.setAttribute('id', 'noSleepVideo');
    noSleepVideo.setAttribute('title', 'No Sleep Display Assertion');
    noSleepVideo.setAttribute('playsinline', '');
    noSleepVideo.setAttribute('webkit-playsinline', '');
    noSleepVideo.setAttribute('muted', '');
    noSleepVideo.setAttribute('loop', '');
    noSleepVideo.muted = true;
    noSleepVideo.defaultMuted = true;
    noSleepVideo.loop = true;
    noSleepVideo.playsInline = true;
    noSleepVideo.preload = 'auto';
    noSleepVideo.style.cssText = 'position:fixed;bottom:0;right:0;width:2px;height:2px;opacity:0.01;pointer-events:none;z-index:1;';
    noSleepVideo.src = NO_SLEEP_MP4;

    noSleepVideo.addEventListener('playing', () => {
      isVideoPlaying = true;
      updateWakeStatusUI(true);
    });

    noSleepVideo.addEventListener('timeupdate', () => {
      if (noSleepVideo.duration && noSleepVideo.currentTime >= noSleepVideo.duration - 0.2) {
        noSleepVideo.currentTime = 0;
      }
    });

    noSleepVideo.addEventListener('pause', () => {
      isVideoPlaying = false;
      if (isWakeLockRequested && !wakeLockSentinel && typeof document !== 'undefined' && document.visibilityState === 'visible') {
        noSleepVideo.play().catch(() => {});
      }
    });

    if (document.body) {
      document.body.appendChild(noSleepVideo);
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        if (noSleepVideo && !noSleepVideo.parentElement && document.body) {
          document.body.appendChild(noSleepVideo);
        }
      });
    }
  }
  return noSleepVideo;
}

let wakeWatchdogInterval = null;

function startWakeWatchdog() {
  if (wakeWatchdogInterval || typeof window === 'undefined') return;
  wakeWatchdogInterval = setInterval(async () => {
    if (!isWakeLockRequested) return;
    if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return;

    if (typeof navigator !== 'undefined' && 'wakeLock' in navigator && !wakeLockSentinel) {
      try {
        wakeLockSentinel = await navigator.wakeLock.request('screen');
        if (wakeLockSentinel && !isIOSDevice()) {
          stopCanvasKeepAlive();
          if (noSleepVideo && !noSleepVideo.paused) noSleepVideo.pause();
        }
      } catch (_) {}
    }

    if (!wakeLockSentinel && noSleepVideo && (noSleepVideo.paused || noSleepVideo.ended)) {
      noSleepVideo.play().catch(() => {});
    }

    updateWakeStatusUI(isAwake());
  }, 5000);
}

function stopWakeWatchdog() {
  if (wakeWatchdogInterval) {
    clearInterval(wakeWatchdogInterval);
    wakeWatchdogInterval = null;
  }
}

// Audio Keep-Alive for iOS WebKit media thread persistence (only engaged on iOS during live play)
let audioKeepAliveNode = null;

export function enableAudioKeepAlive() {
  if (typeof window === 'undefined' || !isIOSDevice()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  if (!audioKeepAliveNode) {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      gain.gain.value = 0.00001;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      audioKeepAliveNode = osc;
    } catch (_) {}
  }
}

export function disableAudioKeepAlive() {
  if (audioKeepAliveNode) {
    try {
      audioKeepAliveNode.stop();
      audioKeepAliveNode.disconnect();
    } catch (_) {}
    audioKeepAliveNode = null;
  }
}

// Battery-Smart Screen Wake Lock API (Native first; fallback layers only when needed)
export async function requestWakeLock() {
  if (!isWakeLockRequested) {
    updateWakeStatusUI(false);
    return false;
  }

  let nativeSuccess = false;
  let videoSuccess = false;

  // Layer 1: Native Screen Wake Lock API (0% CPU/GPU battery overhead)
  if (typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
    if (wakeLockSentinel) {
      nativeSuccess = true;
    } else {
      try {
        wakeLockSentinel = await navigator.wakeLock.request('screen');
        nativeSuccess = true;
        wakeLockSentinel.addEventListener('release', () => {
          wakeLockSentinel = null;
          if (isWakeLockRequested && typeof document !== 'undefined' && document.visibilityState === 'visible') {
            playFallbackVideo();
          } else if (!isWakeLockRequested) {
            updateWakeStatusUI(false);
          }
        });
      } catch (err) {
        console.warn('Native Wake Lock unavailable/rejected:', err?.name || err);
      }
    }
  }

  // Layer 2: iOS / Non-native fallback only when native Wake Lock did not succeed (or on older iOS)
  if (!nativeSuccess) {
    videoSuccess = await playFallbackVideo();
    if (!videoSuccess) {
      startCanvasKeepAlive();
    }
    startWakeWatchdog();
  } else {
    stopCanvasKeepAlive();
  }

  const active = nativeSuccess || videoSuccess || isCanvasActive;
  updateWakeStatusUI(active || isWakeLockRequested);
  return active;
}

async function playFallbackVideo() {
  try {
    const video = getNoSleepVideo();
    if (!video) return false;
    video.muted = true;
    video.defaultMuted = true;
    if (video.ended) video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) await playPromise;
    isVideoPlaying = !video.paused;
    return isVideoPlaying;
  } catch (_) {
    isVideoPlaying = false;
    return false;
  }
}

export async function releaseWakeLock() {
  isWakeLockRequested = false;
  savePrefs({ wakeLockEnabled: false });
  stopWakeWatchdog();
  stopCanvasKeepAlive();
  disableAudioKeepAlive();

  if (wakeLockSentinel) {
    try {
      await wakeLockSentinel.release();
    } catch (_) {}
    wakeLockSentinel = null;
  }

  if (noSleepVideo) {
    try {
      noSleepVideo.pause();
      noSleepVideo.currentTime = 0;
    } catch (_) {}
  }
  isVideoPlaying = false;
  updateWakeStatusUI(false);
}

export function isAwake() {
  return !!wakeLockSentinel || isVideoPlaying || isCanvasActive;
}

export function isWakeLockEnabled() {
  return isWakeLockRequested;
}

export function toggleWakeLock() {
  if (isWakeLockRequested) {
    releaseWakeLock();
  } else {
    isWakeLockRequested = true;
    savePrefs({ wakeLockEnabled: true });
    requestWakeLock();
  }
  hapticFeedback('tap');
}

export function updateWakeStatusUI(isActive) {
  if (typeof document === 'undefined') return;
  const btn = document.getElementById('wakeToggleBtn');
  if (!btn) return;

  btn.setAttribute('role', 'switch');
  btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
  btn.setAttribute('title', isActive ? 'Keep Screen Awake is ON. Tap to turn OFF.' : 'Keep Screen Awake is OFF. Tap to turn ON.');

  if (isActive) {
    btn.className = 'flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-slate-900 border border-emerald-500/50 cursor-pointer shadow-sm active:scale-95 transition shrink-0';
    btn.innerHTML = `
      <span class="text-xs font-black text-emerald-400 font-mono-sport tracking-wider">ON</span>
      <span class="w-8 h-5 bg-emerald-500 rounded-full p-0.5 flex items-center justify-end transition-colors shadow-inner">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-950 shadow-md"></span>
      </span>
    `;
  } else {
    btn.className = 'flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-slate-900 border border-slate-700/60 cursor-pointer shadow-sm active:scale-95 transition shrink-0';
    btn.innerHTML = `
      <span class="text-xs font-bold text-slate-400 font-mono-sport tracking-wider">OFF</span>
      <span class="w-8 h-5 bg-slate-800 border border-slate-700 rounded-full p-0.5 flex items-center justify-start transition-colors">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-400 shadow-sm"></span>
      </span>
    `;
  }
}

export function rearmWakeLock() {
  if (!isWakeLockRequested) return;
  if (!wakeLockSentinel && typeof navigator !== 'undefined' && 'wakeLock' in navigator) {
    navigator.wakeLock.request('screen').then(s => {
      wakeLockSentinel = s;
      stopCanvasKeepAlive();
      updateWakeStatusUI(true);
      s.addEventListener('release', () => {
        wakeLockSentinel = null;
      });
    }).catch(() => {});
  } else if (!wakeLockSentinel && !isVideoPlaying && noSleepVideo) {
    noSleepVideo.play().catch(() => {});
  }
}

export function bindUserInteractions() {
  if (hasBoundInteractions || typeof window === 'undefined') return;
  hasBoundInteractions = true;

  const onUserGesture = () => {
    const now = Date.now();
    if (now - lastGestureCheckTime < 2000) return;
    lastGestureCheckTime = now;

    if (isWakeLockRequested && !wakeLockSentinel) {
      rearmWakeLock();
    }
    if (!isAudioMuted) {
      getAudioContext();
    }
  };

  window.addEventListener('pointerdown', onUserGesture, { capture: true, passive: true });

  document.addEventListener('visibilitychange', () => {
    if (isWakeLockRequested && document.visibilityState === 'visible') {
      requestWakeLock();
    }
  });
}

if (typeof window !== 'undefined') {
  bindUserInteractions();
}

// 2. AUDIO & HAPTIC CONTROLS
export function isAudioEnabled() {
  return !isAudioMuted;
}

export function syncHardwarePrefsUI() {
  updateSoundStatusUI(!isAudioMuted);
  updateWakeStatusUI(isWakeLockRequested);
}

export function toggleAudioMute() {
  isAudioMuted = !isAudioMuted;
  savePrefs({ audioMuted: isAudioMuted });
  updateSoundStatusUI(!isAudioMuted);
  if (!isAudioMuted) {
    getAudioContext();
    hapticFeedback('tap');
    playWhistleTone('short');
  } else {
    hapticFeedback('tap');
  }
  return !isAudioMuted;
}

export function updateSoundStatusUI(isEnabled) {
  if (typeof document === 'undefined') return;
  const btn = document.getElementById('soundToggleBtn');
  const icon = document.getElementById('soundStatusIcon');
  if (!btn) return;

  btn.setAttribute('role', 'switch');
  btn.setAttribute('aria-checked', isEnabled ? 'true' : 'false');
  btn.setAttribute('title', isEnabled ? 'Sound & Whistle cues are ON. Tap to MUTE.' : 'Sound & Whistle cues are MUTED. Tap to turn ON.');

  if (icon) {
    if (isEnabled) {
      icon.setAttribute('class', 'w-4 h-4 text-emerald-400');
      icon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`;
    } else {
      icon.setAttribute('class', 'w-4 h-4 text-slate-500');
      icon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`;
    }
  }

  if (isEnabled) {
    btn.className = 'flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-slate-900 border border-emerald-500/50 cursor-pointer shadow-sm active:scale-95 transition shrink-0';
    btn.innerHTML = `
      <span class="text-xs font-black text-emerald-400 font-mono-sport tracking-wider">ON</span>
      <span class="w-8 h-5 bg-emerald-500 rounded-full p-0.5 flex items-center justify-end transition-colors shadow-inner">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-950 shadow-md"></span>
      </span>
    `;
  } else {
    btn.className = 'flex items-center gap-2 py-1.5 px-2.5 rounded-xl bg-slate-900 border border-slate-700/60 cursor-pointer shadow-sm active:scale-95 transition shrink-0';
    btn.innerHTML = `
      <span class="text-xs font-bold text-slate-400 font-mono-sport tracking-wider">OFF</span>
      <span class="w-8 h-5 bg-slate-800 border border-slate-700 rounded-full p-0.5 flex items-center justify-start transition-colors">
        <span class="w-3.5 h-3.5 rounded-full bg-slate-400 shadow-sm"></span>
      </span>
    `;
  }
}

export function hapticFeedback(type = 'tap') {
  if (typeof navigator === 'undefined' || !navigator.vibrate) return;
  if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;

  try {
    switch (type) {
      case 'selection':
        navigator.vibrate(15);
        break;
      case 'tap':
        navigator.vibrate(25);
        break;
      case 'success':
        navigator.vibrate([40, 30, 40]);
        break;
      case 'warning':
        navigator.vibrate([60, 40, 60]);
        break;
      case 'alert':
        navigator.vibrate([80, 50, 80, 50, 120]);
        break;
      case 'one_minute':
        navigator.vibrate([100, 100, 100]);
        break;
      case 'time_up':
        navigator.vibrate([250, 100, 250, 100, 400]);
        break;
      case 'long':
        navigator.vibrate(250);
        break;
    }
  } catch (_) {}
}

// 3. WEB AUDIO API SYNTHESIZER (Coach-Safe Sideline Chimes + Official Pea Whistle)
export function playWhistleTone(type = 'short', options = {}) {
  if (isAudioMuted) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const activeRole = typeof window !== 'undefined' && typeof window.getAppMode === 'function' ? window.getAppMode() : 'referee';
    const isCoachMode = !options.forceWhistle && (activeRole === 'coach' || activeRole === 'spectator');

    function playChimeNotes(freqs, spacing = 0.14, noteDur = 0.28, peakGain = 0.22) {
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * spacing);
        gain.gain.setValueAtTime(0.001, now + idx * spacing);
        gain.gain.linearRampToValueAtTime(peakGain, now + idx * spacing + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * spacing + noteDur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * spacing);
        osc.stop(now + idx * spacing + noteDur + 0.03);
      });
    }

    // In Coach / Spectator Mode, never blast a referee pea whistle on the touchline (prevents confusing players!)
    if (isCoachMode && ['short', 'double', 'target_reached', 'full_time_whistle'].includes(type)) {
      if (type === 'short') {
        playChimeNotes([587.33, 880], 0.11, 0.22, 0.18);
      } else if (type === 'double') {
        playChimeNotes([783.99, 659.25, 523.25], 0.15, 0.3, 0.2);
      } else {
        playChimeNotes([523.25, 659.25, 783.99, 1046.5], 0.14, 0.32, 0.22);
      }
      return;
    }

    function createPeaWhistleBurst(startTime, duration) {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(2450, startTime);
      osc1.frequency.linearRampToValueAtTime(2600, startTime + duration);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(2850, startTime);
      osc2.frequency.linearRampToValueAtTime(2700, startTime + duration);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.25, startTime + 0.03);
      gain.gain.linearRampToValueAtTime(0.2, startTime + duration - 0.04);
      gain.gain.linearRampToValueAtTime(0.001, startTime + duration);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(startTime);
      osc2.start(startTime);
      osc1.stop(startTime + duration);
      osc2.stop(startTime + duration);
    }

    if (type === 'short') {
      createPeaWhistleBurst(now, 0.28);
    } else if (type === 'double') {
      createPeaWhistleBurst(now, 0.22);
      createPeaWhistleBurst(now + 0.32, 0.35);
    } else if (type === 'target_reached' || type === 'full_time_whistle') {
      createPeaWhistleBurst(now, 0.35);
      createPeaWhistleBurst(now + 0.45, 0.18);
      createPeaWhistleBurst(now + 0.72, 0.55);
    } else if (type === 'warning') {
      playChimeNotes([880, 1174.66], 0.18, 0.32, 0.25);
    } else if (type === 'triple_chime') {
      playChimeNotes([523.25, 659.25, 783.99], 0.15, 0.3, 0.2);
    } else if (type === 'chime_ready') {
      playChimeNotes([659.25, 880, 1046.5], 0.13, 0.28, 0.22);
    }
  } catch (err) {
    console.warn('Audio synthesis error:', err);
  }
}
