// What's The Score Ref - Pre-Match Module
// Heads/Tails Coin Toss, 5v5 Player Counter, Sideline Safety Checklist
import { hapticFeedback } from './hardware.js';

let homePlayers = 0;
let awayPlayers = 0;

// 1. HEADS OR TAILS COIN TOSS
export function flipCoin() {
  const coin = document.getElementById('coinGraphic');
  const result = document.getElementById('coinResult');
  if (!coin || !result) return;

  coin.classList.add('flipping');
  result.innerText = 'Flipping...';
  result.className = 'font-bold text-amber-400 text-sm mb-4 h-6 animate-pulse';

  setTimeout(() => {
    coin.classList.remove('flipping');
    const isHeads = Math.random() >= 0.5;
    const outcome = isHeads ? 'HEADS' : 'TAILS';
    coin.innerText = outcome;
    result.innerText = 'Result: ' + outcome;
    result.className = 'font-black text-emerald-400 text-base mb-4 h-6 tracking-wider';
    hapticFeedback('success');
  }, 800);
}

// 2. 5v5 PLAYER COUNTER (Default 0, count up on pitch)
export function adjustPlayer(team, delta) {
  hapticFeedback('tap');
  if (team === 'home') {
    homePlayers = Math.max(0, homePlayers + delta);
    const countEl = document.getElementById('homePlayerCount');
    if (countEl) countEl.innerText = homePlayers;
  } else {
    awayPlayers = Math.max(0, awayPlayers + delta);
    const countEl = document.getElementById('awayPlayerCount');
    if (countEl) countEl.innerText = awayPlayers;
  }
}

export function resetPlayerCounts() {
  homePlayers = 0;
  awayPlayers = 0;
  const homeEl = document.getElementById('homePlayerCount');
  if (homeEl) homeEl.innerText = '0';
  const awayEl = document.getElementById('awayPlayerCount');
  if (awayEl) awayEl.innerText = '0';
}

export function resetChecklist() {
  const checkIds = ['checkSidelineSplit', 'checkBehindGoals', 'checkEquipment', 'checkRefereeNeutrality'];
  checkIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });
}

export function getPlayerCounts() {
  return { home: homePlayers, away: awayPlayers };
}
