// What's The Score Ref - Score & Team Management Module
import { playWhistleTone, hapticFeedback } from './hardware.js';
import { formatTime, getTimerState, getTargetHalfSeconds } from './timer.js';

let pendingConcludedGoalTeam = null;
let pendingConcludedGoalPeriod = '2nd Half';
let pendingConcludedGoalSeconds = 900;
let pendingRemovalAction = null;

export const LEAGUE_TEAMS = [
  { name: 'Beckwithshaw Blues', defaultColor: '#2563eb', border: 'border-blue-500/70' },
  { name: 'Beckwithshaw Whites', defaultColor: '#f8fafc', border: 'border-slate-300' },
  { name: 'Clifford Tigers', defaultColor: '#ea580c', border: 'border-orange-500/70' },
  { name: 'Harrogate Railway', defaultColor: '#16a34a', border: 'border-emerald-500/70' },
  { name: 'Killinghall Falcons', defaultColor: '#0284c7', border: 'border-sky-500/70' },
  { name: 'Killinghall Hawks', defaultColor: '#2563eb', border: 'border-blue-500/70' },
  { name: 'Kirk Deighton Blues', defaultColor: '#2563eb', border: 'border-blue-500/70' },
  { name: 'Kirk Deighton Whites', defaultColor: '#f8fafc', border: 'border-slate-300' },
  { name: 'Knaresborough Celtic', defaultColor: '#0284c7', border: 'border-sky-500/70' },
  { name: 'Pannal Ash Wolves', defaultColor: '#f43f5e', border: 'border-rose-500/70' },
  { name: 'Pannal Sports Lions', defaultColor: '#eab308', border: 'border-yellow-500/70' },
  { name: 'Pannal Sports Tigers', defaultColor: '#ea580c', border: 'border-orange-500/70' },
  { name: 'Ripon City Panthers', defaultColor: '#9333ea', border: 'border-purple-500/70' },
  { name: 'Wigton Moor Athletic', defaultColor: '#eab308', border: 'border-yellow-500/70' }
];

export const KIT_PALETTE = {
  '#f43f5e': { name: 'Red', hex: '#f43f5e', border: '#f43f5e', btnBg: '#e11d48', btnBorder: '#fb7185', btnText: '#ffffff' },
  '#0284c7': { name: 'Sky Blue', hex: '#0284c7', border: '#0284c7', btnBg: '#0284c7', btnBorder: '#38bdf8', btnText: '#ffffff' },
  '#2563eb': { name: 'Royal Blue', hex: '#2563eb', border: '#2563eb', btnBg: '#2563eb', btnBorder: '#60a5fa', btnText: '#ffffff' },
  '#eab308': { name: 'Yellow', hex: '#eab308', border: '#eab308', btnBg: '#eab308', btnBorder: '#fef08a', btnText: '#0f172a' },
  '#16a34a': { name: 'Green', hex: '#16a34a', border: '#16a34a', btnBg: '#16a34a', btnBorder: '#4ade80', btnText: '#ffffff' },
  '#ea580c': { name: 'Orange', hex: '#ea580c', border: '#ea580c', btnBg: '#ea580c', btnBorder: '#fb923c', btnText: '#ffffff' },
  '#9333ea': { name: 'Purple', hex: '#9333ea', border: '#9333ea', btnBg: '#9333ea', btnBorder: '#c084fc', btnText: '#ffffff' },
  '#f8fafc': { name: 'White', hex: '#f8fafc', border: '#cbd5e1', btnBg: '#f8fafc', btnBorder: '#e2e8f0', btnText: '#0f172a' }
};

const DEBOUNCE_MS = 200;
let lastDebounceTime = { home: 0, away: 0 };

let homeScore = 0;
let awayScore = 0;
let halfTimeScores = { home: null, away: null };
let goals = [];

export let teams = {
  home: {
    name: 'Home Team',
    color: '#f43f5e',
    border: 'border-rose-500/70'
  },
  away: {
    name: 'Away Team',
    color: '#2563eb',
    border: 'border-blue-500/70'
  }
};

let currentEditingTeam = 'home';
let selectedColor = '#f43f5e';
let selectedBorder = 'border-rose-500/70';

let onScoreChangeCallbacks = [];

export function registerScoreChangeCallback(cb) {
  onScoreChangeCallbacks.push(cb);
}

let isPowerPlayDismissed = false;

export function dismissPowerPlayBanner() {
  isPowerPlayDismissed = true;
  const banner = document.getElementById('powerPlayBanner');
  if (banner) banner.classList.add('hidden');
  hapticFeedback('tap');
}

export function checkPowerPlay() {
  const banner = document.getElementById('powerPlayBanner');
  const msg = document.getElementById('powerPlayMessage');
  if (!banner) return;

  const diff = homeScore - awayScore;
  const absDiff = Math.abs(diff);

  if (absDiff >= 4) {
    if (!isPowerPlayDismissed) {
      banner.classList.remove('hidden');
    }
    const homeName = teams.home.name || 'Home';
    const awayName = teams.away.name || 'Away';
    if (diff >= 4) {
      if (msg) msg.innerText = `${awayName} may field +1 player`;
    } else {
      if (msg) msg.innerText = `${homeName} may field +1 player`;
    }
  } else {
    isPowerPlayDismissed = false;
    banner.classList.add('hidden');
  }
}

export function notifyScoreChange() {
  checkPowerPlay();
  const currentState = getScoreState();
  onScoreChangeCallbacks.forEach(cb => {
    try { cb(currentState); } catch (e) { console.error('Score change callback error:', e); }
  });
}

export function getScoreState() {
  return {
    homeScore,
    awayScore,
    halfTimeScores,
    goals,
    teams: {
      home: { ...teams.home },
      away: { ...teams.away }
    }
  };
}

export function restoreScoreState(state) {
  if (!state) return;
  homeScore = state.homeScore || 0;
  awayScore = state.awayScore || 0;
  halfTimeScores = state.halfTimeScores || { home: null, away: null };
  goals = state.goals ? [...state.goals] : [];
  if (state.teams) {
    teams.home = { ...state.teams.home };
    teams.away = { ...state.teams.away };
  }

  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = homeScore;
  if (awayScoreEl) awayScoreEl.innerText = awayScore;

  applyTeamVisuals('home');
  applyTeamVisuals('away');
  renderGoalTimeline();
  updatePrematchDropdownValues();
  notifyScoreChange();
}

export function resetScoreState() {
  homeScore = 0;
  awayScore = 0;
  halfTimeScores = { home: null, away: null };
  goals = [];
  isPowerPlayDismissed = false;
  teams.home.name = 'Home Team';
  teams.away.name = 'Away Team';

  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = 0;
  if (awayScoreEl) awayScoreEl.innerText = 0;

  applyTeamVisuals('home');
  applyTeamVisuals('away');
  renderGoalTimeline();
  updatePrematchDropdownValues();
  notifyScoreChange();
}

export function finaliseHalfScore() {
  halfTimeScores = { home: homeScore, away: awayScore };
  notifyScoreChange();
  return { ...halfTimeScores };
}

export function setHalfTimeScores(h, a) {
  halfTimeScores = { home: h, away: a };
  notifyScoreChange();
}

export function getHalfTimeScores() {
  return { ...halfTimeScores };
}

export function incrementScore(team) {
  const timerState = getTimerState();
  
  // If match has ended (Full Time), require confirmation and time confirmation
  if (timerState.currentPeriod === 'Full Time') {
    openConcludedGoalModal(team);
    return;
  }

  const now = Date.now();
  if (now - (lastDebounceTime[team] || 0) < DEBOUNCE_MS) return;
  lastDebounceTime[team] = now;
  hapticFeedback('tap');

  if (team === 'home') {
    homeScore++;
    document.getElementById('homeScoreDisplay').innerText = homeScore;
  } else {
    awayScore++;
    document.getElementById('awayScoreDisplay').innerText = awayScore;
  }

  goals.push({
    id: Date.now(),
    team: team,
    teamName: teams[team].name || (team === 'home' ? 'Home Team' : 'Away Team'),
    time: formatTime(timerState.timerSeconds),
    timeSeconds: timerState.timerSeconds,
    period: timerState.currentPeriod,
    scoreHome: homeScore,
    scoreAway: awayScore
  });

  renderGoalTimeline();
  notifyScoreChange();

  // Safeguard: If referee logs a goal while clock is paused, prompt auto-resume!
  if (!timerState.isTimerRunning && timerState.currentPeriod !== 'Full Time') {
    document.getElementById('pausedGoalToast')?.classList.remove('hidden');
  }
}

export function decrementScore(team) {
  const timerState = getTimerState();
  if (timerState.currentPeriod === 'Full Time') {
    if ((team === 'home' && homeScore > 0) || (team === 'away' && awayScore > 0)) {
      promptConcludedGoalRemoval({ type: 'decrement', team });
    }
    return;
  }

  const now = Date.now();
  if (now - (lastDebounceTime[team] || 0) < DEBOUNCE_MS) return;
  lastDebounceTime[team] = now;
  hapticFeedback('tap');

  if (team === 'home' && homeScore > 0) {
    homeScore--;
    document.getElementById('homeScoreDisplay').innerText = homeScore;
    for (let i = goals.length - 1; i >= 0; i--) {
      if (goals[i].team === 'home') { goals.splice(i, 1); break; }
    }
    renderGoalTimeline();
    notifyScoreChange();
  } else if (team === 'away' && awayScore > 0) {
    awayScore--;
    document.getElementById('awayScoreDisplay').innerText = awayScore;
    for (let i = goals.length - 1; i >= 0; i--) {
      if (goals[i].team === 'away') { goals.splice(i, 1); break; }
    }
    renderGoalTimeline();
    notifyScoreChange();
  }
}

export function undoLastGoal() {
  if (goals.length === 0) return;
  const timerState = getTimerState();
  if (timerState.currentPeriod === 'Full Time') {
    promptConcludedGoalRemoval({ type: 'undo' });
    return;
  }

  hapticFeedback('tap');
  const removed = goals.pop();
  if (removed.team === 'home' && homeScore > 0) {
    homeScore--;
    document.getElementById('homeScoreDisplay').innerText = homeScore;
  } else if (removed.team === 'away' && awayScore > 0) {
    awayScore--;
    document.getElementById('awayScoreDisplay').innerText = awayScore;
  }
  renderGoalTimeline();
  notifyScoreChange();
}

export function removeGoal(index) {
  if (index < 0 || index >= goals.length) return;
  const timerState = getTimerState();
  if (timerState.currentPeriod === 'Full Time') {
    promptConcludedGoalRemoval({ type: 'removeIndex', index });
    return;
  }
  executeGoalRemovalByIndex(index);
}

export function executeGoalRemovalByIndex(index) {
  if (index < 0 || index >= goals.length) return;
  hapticFeedback('tap');
  goals.splice(index, 1);

  // Recalculate running scores and half-time scores
  let h = 0;
  let a = 0;
  let htH = 0;
  let htA = 0;
  goals.forEach(g => {
    if (g.team === 'home') h++;
    else a++;
    g.scoreHome = h;
    g.scoreAway = a;
    if (g.period === '1st Half') {
      if (g.team === 'home') htH++;
      else htA++;
    }
  });

  homeScore = h;
  awayScore = a;
  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = homeScore;
  if (awayScoreEl) awayScoreEl.innerText = awayScore;

  if (halfTimeScores.home !== null || halfTimeScores.away !== null) {
    halfTimeScores = { home: htH, away: htA };
  }

  renderGoalTimeline();
  notifyScoreChange();
}

// ---------------- Concluded Match Goal Modal Handlers ----------------
export function openConcludedGoalModal(team) {
  pendingConcludedGoalTeam = team;
  pendingConcludedGoalPeriod = '2nd Half';
  const targetSec = typeof getTargetHalfSeconds === 'function' ? getTargetHalfSeconds() : 15 * 60;
  pendingConcludedGoalSeconds = targetSec;

  const t = teams[team] || { name: team === 'home' ? 'Home Team' : 'Away Team', color: team === 'home' ? '#f43f5e' : '#2563eb' };
  const palette = KIT_PALETTE[t.color] || { hex: t.color };

  const dot = document.getElementById('concludedGoalTeamDot');
  if (dot) dot.style.backgroundColor = palette.hex;

  const nameEl = document.getElementById('concludedGoalTeamName');
  if (nameEl) nameEl.innerText = t.name || (team === 'home' ? 'Home Team' : 'Away Team');

  const labelEl = document.getElementById('concludedGoalTeamLabel');
  if (labelEl) labelEl.innerText = `${team === 'home' ? 'Home' : 'Away'} Team`;

  const previewEl = document.getElementById('concludedGoalNewScorePreview');
  if (previewEl) {
    const nextH = team === 'home' ? homeScore + 1 : homeScore;
    const nextA = team === 'away' ? awayScore + 1 : awayScore;
    previewEl.innerText = `${nextH} - ${nextA}`;
  }

  const hintEl = document.getElementById('concludedGoalPeriodDurationHint');
  if (hintEl) hintEl.innerText = `Half Length: ${Math.round(targetSec / 60)}m`;

  setConcludedGoalPeriod('2nd Half');
  updateConcludedGoalTimeDisplay();

  if (window.openModal) {
    window.openModal('confirmConcludedGoalModal');
  }
}

export function setConcludedGoalPeriod(period) {
  pendingConcludedGoalPeriod = period;
  const h1Btn = document.getElementById('concludedGoalHalf1Btn');
  const h2Btn = document.getElementById('concludedGoalHalf2Btn');

  if (period === '1st Half') {
    if (h1Btn) h1Btn.className = 'py-2 px-2 rounded-lg font-black text-xs transition text-center bg-emerald-600 text-white shadow cursor-pointer';
    if (h2Btn) h2Btn.className = 'py-2 px-2 rounded-lg font-black text-xs transition text-center text-slate-400 hover:text-white cursor-pointer';
  } else {
    if (h1Btn) h1Btn.className = 'py-2 px-2 rounded-lg font-black text-xs transition text-center text-slate-400 hover:text-white cursor-pointer';
    if (h2Btn) h2Btn.className = 'py-2 px-2 rounded-lg font-black text-xs transition text-center bg-emerald-600 text-white shadow cursor-pointer';
  }
}

export function setConcludedGoalSeconds(secs) {
  pendingConcludedGoalSeconds = Math.max(0, secs);
  updateConcludedGoalTimeDisplay();
}

export function setConcludedGoalPreset(preset) {
  const targetSec = typeof getTargetHalfSeconds === 'function' ? getTargetHalfSeconds() : 15 * 60;
  if (preset === 'early') {
    setConcludedGoalSeconds(60);
  } else if (preset === 'mid') {
    setConcludedGoalSeconds(Math.floor(targetSec / 2));
  } else if (preset === 'full') {
    setConcludedGoalSeconds(targetSec);
  } else if (typeof preset === 'number') {
    setConcludedGoalSeconds(preset);
  }
}

export function adjustConcludedGoalSeconds(delta) {
  pendingConcludedGoalSeconds = Math.max(0, pendingConcludedGoalSeconds + delta);
  updateConcludedGoalTimeDisplay();
}

export function updateConcludedGoalTimeDisplay() {
  const display = document.getElementById('concludedGoalTimeDisplay');
  if (display) {
    display.innerText = formatTime(pendingConcludedGoalSeconds);
  }
}

export function confirmConcludedGoal() {
  if (!pendingConcludedGoalTeam) return;
  const team = pendingConcludedGoalTeam;
  const period = pendingConcludedGoalPeriod || '2nd Half';
  const timeStr = formatTime(pendingConcludedGoalSeconds);

  hapticFeedback('success');

  const newGoal = {
    id: Date.now(),
    team: team,
    teamName: teams[team].name || (team === 'home' ? 'Home Team' : 'Away Team'),
    time: timeStr,
    timeSeconds: pendingConcludedGoalSeconds,
    period: period,
    scoreHome: 0,
    scoreAway: 0
  };

  goals.push(newGoal);

  function getGoalSortKey(g) {
    const periodRank = g.period === '1st Half' ? 1 : 2;
    let secs = g.timeSeconds;
    if (typeof secs !== 'number') {
      const parts = (g.time || '00:00').split(':').map(Number);
      secs = (parts[0] || 0) * 60 + (parts[1] || 0);
    }
    return periodRank * 100000 + secs;
  }

  goals.sort((a, b) => getGoalSortKey(a) - getGoalSortKey(b));

  let h = 0;
  let a = 0;
  let htH = 0;
  let htA = 0;

  goals.forEach(g => {
    if (g.team === 'home') h++;
    else a++;
    g.scoreHome = h;
    g.scoreAway = a;

    if (g.period === '1st Half') {
      if (g.team === 'home') htH++;
      else htA++;
    }
  });

  homeScore = h;
  awayScore = a;
  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = homeScore;
  if (awayScoreEl) awayScoreEl.innerText = awayScore;

  if (halfTimeScores.home !== null || halfTimeScores.away !== null) {
    halfTimeScores = { home: htH, away: htA };
  }

  renderGoalTimeline();
  notifyScoreChange();

  if (window.closeModal) {
    window.closeModal('confirmConcludedGoalModal');
  }
}

// ---------------- Concluded Match Removal Handlers ----------------
export function promptConcludedGoalRemoval(action) {
  pendingRemovalAction = action;
  const titleEl = document.getElementById('confirmRemovalTitle');
  const descEl = document.getElementById('confirmRemovalDesc');
  const btnTextEl = document.getElementById('confirmRemovalBtnText');

  let desc = 'This match is finished at Full Time. Are you sure you want to remove this goal and adjust the final score?';
  if (action.type === 'undo') {
    const last = goals[goals.length - 1];
    if (last) {
      desc = `Remove the last goal (${last.time} - ${last.teamName}) from this concluded match?`;
    }
  } else if (action.type === 'decrement') {
    const tName = teams[action.team]?.name || (action.team === 'home' ? 'Home Team' : 'Away Team');
    desc = `Remove the most recent goal for ${tName} and adjust the final score?`;
  } else if (action.type === 'removeIndex') {
    const target = goals[action.index];
    if (target) {
      desc = `Delete goal at ${target.time} (${target.period} - ${target.teamName}) from this concluded match?`;
    }
  }

  if (descEl) descEl.innerText = desc;
  if (titleEl) titleEl.innerText = 'Adjust Concluded Score?';
  if (btnTextEl) btnTextEl.innerText = 'YES, REMOVE GOAL';

  if (window.openModal) {
    window.openModal('confirmConcludedScoreRemovalModal');
  }
}

export function executeConcludedGoalRemoval() {
  if (!pendingRemovalAction) return;
  const action = pendingRemovalAction;
  pendingRemovalAction = null;

  if (window.closeModal) {
    window.closeModal('confirmConcludedScoreRemovalModal');
  }

  if (action.type === 'undo') {
    if (goals.length === 0) return;
    executeGoalRemovalByIndex(goals.length - 1);
  } else if (action.type === 'removeIndex') {
    executeGoalRemovalByIndex(action.index);
  } else if (action.type === 'decrement') {
    for (let i = goals.length - 1; i >= 0; i--) {
      if (goals[i].team === action.team) {
        executeGoalRemovalByIndex(i);
        break;
      }
    }
  }
}

// Dynamic Undo Visibility: Dim/hide until an event (like a goal) is actually logged
export function updateUndoButtons() {
  const homeUndo = document.getElementById('homeUndoBtn');
  const awayUndo = document.getElementById('awayUndoBtn');
  if (homeUndo) {
    if (homeScore > 0) {
      homeUndo.classList.remove('undo-pill-hidden');
      homeUndo.classList.add('undo-pill-visible');
      homeUndo.style.display = 'inline-flex';
      homeUndo.style.opacity = '1';
      homeUndo.style.pointerEvents = 'auto';
      homeUndo.style.visibility = 'visible';
    } else {
      homeUndo.classList.add('undo-pill-hidden');
      homeUndo.classList.remove('undo-pill-visible');
      homeUndo.style.display = 'none';
      homeUndo.style.opacity = '0';
      homeUndo.style.pointerEvents = 'none';
      homeUndo.style.visibility = 'hidden';
    }
  }
  if (awayUndo) {
    if (awayScore > 0) {
      awayUndo.classList.remove('undo-pill-hidden');
      awayUndo.classList.add('undo-pill-visible');
      awayUndo.style.display = 'inline-flex';
      awayUndo.style.opacity = '1';
      awayUndo.style.pointerEvents = 'auto';
      awayUndo.style.visibility = 'visible';
    } else {
      awayUndo.classList.add('undo-pill-hidden');
      awayUndo.classList.remove('undo-pill-visible');
      awayUndo.style.display = 'none';
      awayUndo.style.opacity = '0';
      awayUndo.style.pointerEvents = 'none';
      awayUndo.style.visibility = 'hidden';
    }
  }
}

export function renderGoalTimeline() {
  const modalListEl = document.getElementById('modalGoalTimelineList');
  const modalBadgeEl = document.getElementById('modalGoalCountBadge');
  const tickerCountBadge = document.getElementById('tickerCountBadge');
  const tickerTime = document.getElementById('tickerTime');
  const tickerDesc = document.getElementById('tickerDesc');
  const tickerScore = document.getElementById('tickerScore');

  const timerState = getTimerState();
  const isFT = timerState.currentPeriod === 'Full Time';
  const hasStarted = (timerState.timerSeconds > 0) || Boolean(timerState.isTimerRunning) || Boolean(timerState.hasHalfStarted) || (timerState.currentPeriod === '2nd Half') || (goals.length > 0) || (homeScore > 0 || awayScore > 0);

  if (tickerCountBadge) tickerCountBadge.innerText = goals.length;
  if (modalBadgeEl) modalBadgeEl.innerText = `${goals.length} Goal${goals.length === 1 ? '' : 's'}`;

  // Update undo buttons visibility based on score
  updateUndoButtons();

  if (goals.length === 0) {
    if (tickerTime) tickerTime.innerText = isFT ? 'FT' : (hasStarted ? formatTime(timerState.timerSeconds) : '--:--');
    if (tickerDesc) tickerDesc.innerText = isFT ? 'Match finished (Full Time)' : (hasStarted ? 'No goals scored yet' : 'Match not started');
    if (tickerScore) tickerScore.innerText = isFT ? '[ 0 - 0 FT ]' : (hasStarted ? '[ 0 - 0 ]' : '[ TBC ]');
    if (modalListEl) modalListEl.innerHTML = '<div class="text-center py-6 text-slate-500 text-xs italic">No goals scored yet</div>';
    return;
  }

  const latest = goals[goals.length - 1];
  if (tickerTime) tickerTime.innerText = isFT ? 'FT' : latest.time;
  if (tickerDesc) tickerDesc.innerText = latest.teamName;
  if (tickerScore) tickerScore.innerText = isFT ? `[ ${latest.scoreHome} - ${latest.scoreAway} FT ]` : `[ ${latest.scoreHome} - ${latest.scoreAway} ]`;

  if (modalListEl) {
    modalListEl.innerHTML = goals.slice().reverse().map((g, revIdx) => {
      const actualIdx = goals.length - 1 - revIdx;

      return `
        <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800">
          <div class="flex items-center gap-2 truncate">
            <span class="text-emerald-400 font-black font-mono-sport text-xs shrink-0">${g.time}</span>
            <span class="text-[10px] text-slate-500 font-bold shrink-0">(${g.period})</span>
            <span class="text-slate-200 font-semibold text-xs truncate">${g.teamName}</span>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <span class="font-mono-sport font-bold text-slate-300 text-xs">[ ${g.scoreHome} - ${g.scoreAway} ]</span>
            <button onclick="window.removeGoal(${actualIdx})" class="text-slate-500 hover:text-rose-400 p-1" title="Delete goal">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

export function applyTeamVisuals(side) {
  const t = teams[side];
  const palette = KIT_PALETTE[t.color] || { hex: t.color, border: t.color, btnBg: t.color, btnBorder: t.color, btnText: '#ffffff' };

  // 1. Team Name
  const nameEl = document.getElementById(side + 'TeamNameDisplay');
  if (nameEl) nameEl.innerText = t.name || (side === 'home' ? 'Home Team' : 'Away Team');

  // 2. Badge Dot
  const dotEl = document.getElementById(side + 'BadgeDot');
  if (dotEl) {
    dotEl.style.backgroundColor = palette.hex;
    dotEl.style.borderColor = palette.hex === '#f8fafc' ? '#94a3b8' : 'rgba(255,255,255,0.6)';
  }

  // 3. Label text color
  const labelEl = document.getElementById(side + 'Label');
  if (labelEl) labelEl.style.color = palette.hex === '#f8fafc' ? '#e2e8f0' : palette.hex;

  // 4. Card Border & Top Kit Accent Stripe
  const cardEl = document.getElementById(side + 'CardContainer');
  if (cardEl) cardEl.style.borderColor = palette.border;
  const stripeEl = document.getElementById(side + 'KitStripe');
  if (stripeEl) stripeEl.style.backgroundColor = palette.hex;

  // 5. Massive '+' Scoring Button
  const plusBtn = document.getElementById(side + 'PlusBtn');
  if (plusBtn) {
    plusBtn.style.backgroundColor = palette.btnBg;
    plusBtn.style.borderColor = palette.btnBorder;
    plusBtn.style.color = palette.btnText;
  }
}

// Team Customization Modal Handlers
export function openEditTeamModal(side) {
  const timerState = getTimerState();
  if (timerState && timerState.isTimerRunning) {
    return; // Suppress team edit modal during live play to prevent keyboard popping up
  }

  currentEditingTeam = side;
  const t = teams[side];
  const titleEl = document.getElementById('teamEditTitle');
  if (titleEl) {
    titleEl.innerHTML = `
      <span class="w-3.5 h-3.5 rounded-full inline-block border border-white/40 shrink-0" style="background-color: ${t.color}"></span>
      <span>Edit ${side === 'home' ? 'Home' : 'Away'} Team</span>
    `;
  }

  const nameInput = document.getElementById('teamNameInput');
  if (nameInput) nameInput.value = t.name;

  const leagueSelect = document.getElementById('leagueTeamSelect');
  if (leagueSelect) {
    let matched = false;
    for (let opt of leagueSelect.options) {
      if (opt.value === t.name) {
        leagueSelect.value = t.name;
        matched = true;
        break;
      }
    }
    if (!matched) leagueSelect.value = '';
  }

  selectedColor = t.color;
  selectedBorder = t.border;
  updateSwatchSelection(t.color);

  window.openModal('teamEditModal');
  setTimeout(() => {
    nameInput?.focus();
    nameInput?.select();
  }, 100);
}

export function onLeagueTeamSelected(teamName) {
  if (!teamName) return;
  const input = document.getElementById('teamNameInput');
  if (input) input.value = teamName;
  const found = LEAGUE_TEAMS.find(t => t.name === teamName);
  if (found) {
    selectKitColor(found.defaultColor, found.border);
  }
}

export function setPresetTeamName(name) {
  const input = document.getElementById('teamNameInput');
  if (input) input.value = name;
  const found = LEAGUE_TEAMS.find(t => t.name === name);
  if (found) {
    selectKitColor(found.defaultColor, found.border);
  }
}

export function selectKitColor(colorHex, borderClass) {
  selectedColor = colorHex;
  selectedBorder = borderClass;
  updateSwatchSelection(colorHex);
}

export function updateSwatchSelection(activeColor) {
  document.querySelectorAll('.kit-swatch-btn').forEach(btn => {
    const color = btn.getAttribute('data-color');
    if (color && color.toLowerCase() === activeColor.toLowerCase()) {
      btn.classList.add('ring-4', 'ring-white', 'scale-105');
    } else {
      btn.classList.remove('ring-4', 'ring-white', 'scale-105');
    }
  });
}

export function saveTeamChanges() {
  const input = document.getElementById('teamNameInput');
  const inputVal = input ? input.value.trim() : '';
  teams[currentEditingTeam].name = inputVal || (currentEditingTeam === 'home' ? 'Home Team' : 'Away Team');
  teams[currentEditingTeam].color = selectedColor;
  teams[currentEditingTeam].border = selectedBorder;

  applyTeamVisuals(currentEditingTeam);

  goals.forEach(g => {
    if (g.team === currentEditingTeam) {
      g.teamName = teams[currentEditingTeam].name;
    }
  });
  renderGoalTimeline();
  updatePrematchDropdownValues();
  notifyScoreChange();
  window.closeModal('teamEditModal');
}

export function onPrematchSelect(side, teamName) {
  if (!teamName) return;
  const teamObj = LEAGUE_TEAMS.find(t => t.name === teamName);
  if (!teamObj) return;

  teams[side].name = teamObj.name;
  teams[side].color = teamObj.defaultColor;
  teams[side].border = teamObj.border;

  applyTeamVisuals(side);

  goals.forEach(g => {
    if (g.team === side) g.teamName = teamObj.name;
  });
  renderGoalTimeline();
  notifyScoreChange();
}

export function swapTeams() {
  const temp = { ...teams.home };
  teams.home = { ...teams.away };
  teams.away = temp;

  const tempScore = homeScore;
  homeScore = awayScore;
  awayScore = tempScore;
  document.getElementById('homeScoreDisplay').innerText = homeScore;
  document.getElementById('awayScoreDisplay').innerText = awayScore;

  applyTeamVisuals('home');
  applyTeamVisuals('away');

  goals.forEach(g => {
    if (g.team === 'home') {
      g.team = 'away';
      g.teamName = teams.away.name;
    } else {
      g.team = 'home';
      g.teamName = teams.home.name;
    }
    const sH = g.scoreHome;
    g.scoreHome = g.scoreAway;
    g.scoreAway = sH;
  });
  renderGoalTimeline();
  updatePrematchDropdownValues();
  notifyScoreChange();
}

export function initPrematchDropdowns() {
  const homeSel = document.getElementById('prematchHomeSelect');
  const awaySel = document.getElementById('prematchAwaySelect');
  const editSel = document.getElementById('leagueTeamSelect');

  const teamOptions = LEAGUE_TEAMS.map(t => `<option value="${t.name}">${t.name}</option>`).join('');
  const selectTeamPrompt = `<option value="">-- Select Team --</option>`;

  if (homeSel) homeSel.innerHTML = selectTeamPrompt + teamOptions;
  if (awaySel) awaySel.innerHTML = selectTeamPrompt + teamOptions;
  if (editSel) editSel.innerHTML = `<option value="">-- Choose Team from League Fixtures --</option>` + teamOptions;

  updatePrematchDropdownValues();
}

export function updatePrematchDropdownValues() {
  const homeSel = document.getElementById('prematchHomeSelect');
  const awaySel = document.getElementById('prematchAwaySelect');
  if (homeSel) homeSel.value = teams.home.name;
  if (awaySel) awaySel.value = teams.away.name;
}
