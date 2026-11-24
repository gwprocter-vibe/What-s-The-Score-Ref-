// What's The Score Ref - Field / Rain Lock Module
import { hapticFeedback } from './hardware.js';

let unlockTimer = null;
let unlockStartTime = 0;
let isUnlocking = false;

export function activateLock() {
  const overlay = document.getElementById('pocketLockOverlay');
  const bar = document.getElementById('unlockProgressFill');
  if (overlay) {
    overlay.classList.remove('hidden');
    document.body?.classList.add('screen-locked');
    if (bar) {
      bar.style.width = '0%';
      bar.style.backgroundColor = '';
    }
    isUnlocking = false;
    hapticFeedback('long');
  }
}

function completeUnlock() {
  clearInterval(unlockTimer);
  unlockTimer = null;
  isUnlocking = false;
  const bar = document.getElementById('unlockProgressFill');
  if (bar) {
    bar.style.width = '100%';
    bar.style.backgroundColor = '#10b981';
  }
  hapticFeedback('success');

  // Slight delay absorbs synthetic ghost taps after hold completes
  setTimeout(() => {
    const overlay = document.getElementById('pocketLockOverlay');
    if (overlay) overlay.classList.add('hidden');
    document.body?.classList.remove('screen-locked');
    if (bar) {
      bar.style.width = '0%';
      bar.style.backgroundColor = '';
    }
  }, 160);
}

export function startUnlockProgress(e) {
  if (e && e.type === 'mousedown' && e.button !== 0) return;
  if (isUnlocking) return;

  isUnlocking = true;
  unlockStartTime = Date.now();
  const bar = document.getElementById('unlockProgressFill');
  if (bar) {
    bar.style.width = '0%';
    bar.style.backgroundColor = '';
  }

  hapticFeedback('selection');
  clearInterval(unlockTimer);
  unlockTimer = setInterval(() => {
    const elapsed = Date.now() - unlockStartTime;
    const pct = Math.min(100, (elapsed / 1500) * 100);
    if (bar) bar.style.width = `${pct}%`;

    if (pct >= 100) {
      completeUnlock();
    }
  }, 40);
}

export function cancelUnlockProgress() {
  if (!isUnlocking && !unlockTimer) return;
  isUnlocking = false;
  clearInterval(unlockTimer);
  unlockTimer = null;

  const bar = document.getElementById('unlockProgressFill');
  if (bar) {
    bar.style.width = '0%';
    bar.style.backgroundColor = '';
  }
}
