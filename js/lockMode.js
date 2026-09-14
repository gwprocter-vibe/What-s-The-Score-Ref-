// What's The Score Ref - Field / Rain Lock Module
import { hapticFeedback } from './hardware.js';

let unlockTimer = null;
let unlockStartTime = 0;
let isUnlocked = false;

export function activateLock() {
  const overlay = document.getElementById('pocketLockOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    document.body?.classList.add('screen-locked');
    hapticFeedback('long');
    isUnlocked = false;
  }
}

export function startUnlockProgress() {
  unlockStartTime = Date.now();
  const bar = document.getElementById('unlockProgressFill');
  const btn = document.getElementById('holdUnlockBtn');
  if (bar) {
    bar.style.width = '0%';
    bar.style.backgroundColor = ''; // Reset color
  }
  isUnlocked = false;

  clearInterval(unlockTimer);
  unlockTimer = setInterval(() => {
    const elapsed = Date.now() - unlockStartTime;
    const pct = Math.min(100, (elapsed / 1500) * 100);
    if (bar) bar.style.width = `${pct}%`;

    if (pct >= 100) {
      clearInterval(unlockTimer);
      isUnlocked = true;
      if (bar) bar.style.backgroundColor = '#10b981'; // Green for unlocked
      hapticFeedback('success');
    }
  }, 50);
}

export function cancelUnlockProgress() {
  clearInterval(unlockTimer);
  const bar = document.getElementById('unlockProgressFill');
  
  if (isUnlocked) {
    isUnlocked = false;
    setTimeout(() => {
      const overlay = document.getElementById('pocketLockOverlay');
      if (overlay) overlay.classList.add('hidden');
      document.body?.classList.remove('screen-locked');
      if (bar) bar.style.backgroundColor = '';
    }, 150); // delay to absorb synthetic ghost clicks
  }
  
  if (bar) bar.style.width = '0%';
}
