// What's The Score Ref - Pre-Match Module
// Heads/Tails Coin Toss, Smart 5v5 Player Counter, Persistent Sideline Safety Checklist
import { hapticFeedback } from './hardware.js';

const PREMATCH_STORAGE_KEY = 'whatsthescoreref_prematch_v1';
const CHECK_IDS = ['checkSidelineSplit', 'checkBehindGoals', 'checkEquipment', 'checkRefereeNeutrality'];

let homePlayers = 0;
let awayPlayers = 0;
let checksState = {
  checkSidelineSplit: false,
  checkBehindGoals: false,
  checkEquipment: false,
  checkRefereeNeutrality: false
};

function persistPrematch() {
  try {
    localStorage.setItem(PREMATCH_STORAGE_KEY, JSON.stringify({
      homePlayers,
      awayPlayers,
      checks: checksState
    }));
  } catch (_) {}
}

export function initPrematchState() {
  try {
    const raw = localStorage.getItem(PREMATCH_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      homePlayers = Math.max(0, Number(parsed.homePlayers) || 0);
      awayPlayers = Math.max(0, Number(parsed.awayPlayers) || 0);
      if (parsed.checks && typeof parsed.checks === 'object') {
        checksState = { ...checksState, ...parsed.checks };
      }
    }
  } catch (_) {}

  CHECK_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.checked = Boolean(checksState[id]);
      el.onchange = () => {
        checksState[id] = el.checked;
        hapticFeedback('selection');
        persistPrematch();
        updatePrematchUI();
      };
    }
  });

  updatePrematchUI();
}

function getPlayerCountStatus(count) {
  if (count === 0) {
    return { text: 'Not counted', cls: 'text-[10px] text-slate-500 font-semibold' };
  }
  if (count < 4) {
    return { text: `Min 4 req. (${count}/5)`, cls: 'text-[10px] text-rose-400 font-bold' };
  }
  if (count === 4) {
    return { text: '4 Players (Min OK)', cls: 'text-[10px] text-amber-400 font-bold' };
  }
  if (count === 5) {
    return { text: '5v5 Ready ✓', cls: 'text-[10px] text-emerald-400 font-black' };
  }
  if (count === 6) {
    return { text: '6 (+1 Power Play)', cls: 'text-[10px] text-amber-300 font-black' };
  }
  return { text: `${count} (+2 Power Play)`, cls: 'text-[10px] text-sky-400 font-black' };
}

export function updatePrematchUI(homeName, awayName) {
  const homeCountEl = document.getElementById('homePlayerCount');
  const awayCountEl = document.getElementById('awayPlayerCount');
  if (homeCountEl) homeCountEl.innerText = String(homePlayers);
  if (awayCountEl) awayCountEl.innerText = String(awayPlayers);

  const homeLabelEl = document.getElementById('prematchHomePlayersLabel');
  const awayLabelEl = document.getElementById('prematchAwayPlayersLabel');
  const resolvedHome = homeName || (window.teams?.home?.name) || 'Home';
  const resolvedAway = awayName || (window.teams?.away?.name) || 'Away';
  if (homeLabelEl) {
    homeLabelEl.innerText = resolvedHome;
    if (window.teams?.home?.color) {
      homeLabelEl.style.color = window.teams.home.color === '#f8fafc' ? '#f1f5f9' : window.teams.home.color;
    }
  }
  if (awayLabelEl) {
    awayLabelEl.innerText = resolvedAway;
    if (window.teams?.away?.color) {
      awayLabelEl.style.color = window.teams.away.color === '#f8fafc' ? '#f1f5f9' : window.teams.away.color;
    }
  }

  const homeStatusEl = document.getElementById('homePlayerStatusBadge');
  const awayStatusEl = document.getElementById('awayPlayerStatusBadge');
  if (homeStatusEl) {
    const s = getPlayerCountStatus(homePlayers);
    homeStatusEl.className = s.cls;
    homeStatusEl.innerText = s.text;
  }
  if (awayStatusEl) {
    const s = getPlayerCountStatus(awayPlayers);
    awayStatusEl.className = s.cls;
    awayStatusEl.innerText = s.text;
  }

  const checkedCount = CHECK_IDS.filter(id => {
    const el = document.getElementById(id);
    return el ? el.checked : Boolean(checksState[id]);
  }).length;

  const progressBadge = document.getElementById('prematchChecklistBadge');
  if (progressBadge) {
    if (checkedCount === CHECK_IDS.length) {
      progressBadge.innerText = 'All Checked ✓';
      progressBadge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-black';
    } else {
      progressBadge.innerText = `${checkedCount}/${CHECK_IDS.length} Checked`;
      progressBadge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 font-bold';
    }
  }

  // Reflect completion badge on main screen Pre-Match Checks button if present
  const helperPrematchBtn = document.getElementById('refHelperPrematchBtnText');
  if (helperPrematchBtn) {
    helperPrematchBtn.innerText = (checkedCount === CHECK_IDS.length && homePlayers >= 4 && awayPlayers >= 4)
      ? 'Pre-Match Ready ✓'
      : 'Pre-Match Checks';
  }
}

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

// 2. 5v5 PLAYER COUNTER
export function adjustPlayer(team, delta) {
  hapticFeedback('tap');
  if (team === 'home') {
    homePlayers = Math.max(0, Math.min(11, homePlayers + delta));
  } else {
    awayPlayers = Math.max(0, Math.min(11, awayPlayers + delta));
  }
  persistPrematch();
  updatePrematchUI();
}

export function setBothTeams5v5() {
  homePlayers = 5;
  awayPlayers = 5;
  hapticFeedback('success');
  persistPrematch();
  updatePrematchUI();
}

export function resetPlayerCounts() {
  homePlayers = 0;
  awayPlayers = 0;
  persistPrematch();
  updatePrematchUI();
}

export function resetChecklist() {
  CHECK_IDS.forEach(id => {
    checksState[id] = false;
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });
  persistPrematch();
  updatePrematchUI();
}

export function getPlayerCounts() {
  return { home: homePlayers, away: awayPlayers };
}
