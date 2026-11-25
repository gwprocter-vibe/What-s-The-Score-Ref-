// What's The Score Ref - Score, Teams, Attribution, Power Play & Coach Touchline Module
import { playWhistleTone, hapticFeedback } from './hardware.js';
import { formatTime, getTimerState, getTargetHalfSeconds, getCoolDownState } from './timer.js';

export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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
  '#f43f5e': { name: 'Red', hex: '#f43f5e', border: '#f43f5e' },
  '#0284c7': { name: 'Sky Blue', hex: '#0284c7', border: '#0284c7' },
  '#2563eb': { name: 'Royal Blue', hex: '#2563eb', border: '#2563eb' },
  '#eab308': { name: 'Yellow', hex: '#eab308', border: '#eab308' },
  '#16a34a': { name: 'Green', hex: '#16a34a', border: '#16a34a' },
  '#ea580c': { name: 'Orange', hex: '#ea580c', border: '#ea580c' },
  '#9333ea': { name: 'Purple', hex: '#9333ea', border: '#9333ea' },
  '#f8fafc': { name: 'White', hex: '#f8fafc', border: '#cbd5e1' }
};

const DEBOUNCE_MS = 200;
let lastDebounceTime = { home: 0, away: 0 };

export const MIN_SQUAD_SIZE = 3;
export const MAX_SQUAD_SIZE = 15;
export const DEFAULT_SQUAD_SIZE = 8;

export function createDefaultRoster(size = DEFAULT_SQUAD_SIZE) {
  const list = [];
  const count = Math.min(Math.max(size, MIN_SQUAD_SIZE), MAX_SQUAD_SIZE);
  for (let i = 1; i <= count; i++) {
    list.push({ number: i, initials: '' });
  }
  return list;
}

export function createDefaultRotation(roster = []) {
  const nums = (roster.length > 0 ? roster : createDefaultRoster()).map(p => p.number);
  const starters = nums.slice(0, Math.min(5, nums.length));
  const stints = {};
  nums.forEach(n => { stints[n] = starters.includes(n) ? 1 : 0; });
  return {
    onPitch: starters,
    gk: starters[0] || 1,
    gkHistory: starters[0] ? [starters[0]] : [],
    stints
  };
}

let appMode = 'referee'; // 'referee' | 'coach' | 'spectator'
let isPausedGoalAlertActive = false;
try {
  const savedMode = localStorage.getItem('whatsthescoreref_app_mode');
  if (savedMode === 'coach' || savedMode === 'referee' || savedMode === 'spectator') {
    appMode = savedMode;
  }
} catch (_) {}

export function getReadableKitTextHex(hex) {
  const map = {
    '#f43f5e': '#fb7185',
    '#0284c7': '#38bdf8',
    '#2563eb': '#60a5fa',
    '#eab308': '#facc15',
    '#16a34a': '#4ade80',
    '#ea580c': '#fb923c',
    '#9333ea': '#c084fc',
    '#f8fafc': '#f1f5f9'
  };
  return map[(hex || '').toLowerCase()] || hex || '#f8fafc';
}

let coachTeam = 'home'; // 'home' | 'away'
try {
  const savedCoachTeam = localStorage.getItem('whatsthescoreref_coach_team');
  if (savedCoachTeam === 'home' || savedCoachTeam === 'away') {
    coachTeam = savedCoachTeam;
  }
} catch (_) {}

let showFullTimeMomentTags = false;

export function toggleFullTimeMomentTags() {
  showFullTimeMomentTags = !showFullTimeMomentTags;
  hapticFeedback('tap');
  renderTouchlineBarUI();
}

export function getCoachTeam() {
  return coachTeam;
}

export function setCoachTeam(team, showToast = true) {
  const prev = coachTeam;
  const next = team === 'away' ? 'away' : 'home';

  if (prev !== next) {
    const prevRoster = teams[prev]?.roster || [];
    const prevHasInitials = prevRoster.some(p => p.initials && p.initials.trim().length > 0);
    const nextRoster = teams[next]?.roster || [];
    const nextHasInitials = nextRoster.some(p => p.initials && p.initials.trim().length > 0);

    if (prevHasInitials && !nextHasInitials) {
      teams[next].roster = prevRoster.map(p => ({ ...p }));
      teams[prev].roster = createDefaultRoster();
    } else if (prevHasInitials && nextHasInitials) {
      const tempRoster = prevRoster.map(p => ({ ...p }));
      teams[prev].roster = nextRoster.map(p => ({ ...p }));
      teams[next].roster = tempRoster;
    }
  }

  coachTeam = next;
  try {
    localStorage.setItem('whatsthescoreref_coach_team', coachTeam);
  } catch (_) {}
  ensureRotationSync();
  updateCoachTeamUI();
  renderTouchlineBarUI();
  notifyScoreChange();
  if (showToast && prev !== coachTeam) {
    showMatchToast(`⭐ Coaching: ${teams[coachTeam]?.name || (coachTeam === 'home' ? 'Home' : 'Away')}`, '⭐', 2200);
  }
}

export function toggleCoachTeam() {
  const next = coachTeam === 'home' ? 'away' : 'home';
  setCoachTeam(next, true);
  hapticFeedback('tap');
  return coachTeam;
}

export function updateCoachTeamUI() {
  const isCoach = appMode === 'coach';
  const homeStar = document.getElementById('homeCoachStar');
  const awayStar = document.getElementById('awayCoachStar');

  if (homeStar) homeStar.classList.toggle('hidden', !(isCoach && coachTeam === 'home'));
  if (awayStar) awayStar.classList.toggle('hidden', !(isCoach && coachTeam === 'away'));

  const drawerHomeName = document.getElementById('quickToolsCoachHomeName');
  const drawerAwayName = document.getElementById('quickToolsCoachAwayName');
  if (drawerHomeName) drawerHomeName.innerText = teams.home?.name || 'Home Team';
  if (drawerAwayName) drawerAwayName.innerText = teams.away?.name || 'Away Team';

  const coachSection = document.getElementById('quickToolsCoachTeamSection');
  if (coachSection) coachSection.classList.toggle('hidden', !isCoach);

  const drawerHomeBtn = document.getElementById('quickToolsCoachHomeBtn');
  const drawerAwayBtn = document.getElementById('quickToolsCoachAwayBtn');
  if (drawerHomeBtn && drawerAwayBtn) {
    if (coachTeam === 'home') {
      drawerHomeBtn.className = 'py-1.5 px-2 rounded-lg font-black text-xs transition cursor-pointer bg-amber-500 text-slate-950 flex items-center justify-center gap-1 shadow';
      drawerAwayBtn.className = 'py-1.5 px-2 rounded-lg font-bold text-xs transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center gap-1';
    } else {
      drawerHomeBtn.className = 'py-1.5 px-2 rounded-lg font-bold text-xs transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center gap-1';
      drawerAwayBtn.className = 'py-1.5 px-2 rounded-lg font-black text-xs transition cursor-pointer bg-amber-500 text-slate-950 flex items-center justify-center gap-1 shadow';
    }
  }
}

export function checkCoachSquadPrompt() {
  if (appMode !== 'coach') return;
  const roleModal = document.getElementById('roleSelectModal');
  if (roleModal && !roleModal.classList.contains('hidden')) return;

  const roster = teams[coachTeam]?.roster || [];
  const hasAnyInitials = roster.some(p => p.initials && p.initials.trim().length > 0);
  if (!hasAnyInitials) {
    openSquadInitialsModal();
  }
}

export function saveSquadInitialsFromModalInputs() {
  const container = document.getElementById('squadInitialsInputsContainer');
  if (!container) return;
  const inputs = container.querySelectorAll('.squad-init-input');
  if (inputs.length === 0) return;
  const t = teams[coachTeam];
  if (!t.roster) t.roster = createDefaultRoster();

  inputs.forEach(inp => {
    const num = parseInt(inp.getAttribute('data-number'), 10);
    const val = (inp.value || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);
    const existing = t.roster.find(p => p.number === num);
    if (existing) {
      existing.initials = val;
    } else {
      t.roster.push({ number: num, initials: val });
    }
  });

  t.roster.sort((a, b) => a.number - b.number);
  ensureRotationSync();
}

export function renderSquadInitialsInputsOnly() {
  const container = document.getElementById('squadInitialsInputsContainer');
  if (!container) return;
  const t = teams[coachTeam] || teams.home;
  const roster = (t.roster && t.roster.length > 0) ? t.roster : createDefaultRoster();

  container.innerHTML = roster.map((p, idx) => `
    <div class="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
      <span class="w-7 h-7 rounded-lg bg-slate-800 text-amber-300 font-mono-sport font-black text-xs flex items-center justify-center border border-slate-700 shrink-0">#${p.number}</span>
      <input type="text" id="squadInitInput_${p.number}" data-number="${p.number}" maxlength="3" placeholder="e.g. JD" value="${escapeHtml(p.initials || '')}"
        oninput="this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '')"
        class="squad-init-input w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-lg px-2.5 py-1.5 text-white font-mono-sport font-bold text-base sm:text-xs uppercase focus:outline-none"
        onkeydown="if(event.key==='Enter'){ const inputs = document.querySelectorAll('.squad-init-input'); if(inputs[${idx + 1}]) inputs[${idx + 1}].focus(); else saveSquadInitials(); }">
    </div>
  `).join('');
}

export function updateSquadSizeUI(size) {
  const countEl = document.getElementById('squadSizeDisplayCount');
  const formatEl = document.getElementById('squadSizeDisplayFormat');
  const decBtn = document.getElementById('squadSizeDecBtn');
  const incBtn = document.getElementById('squadSizeIncBtn');

  if (countEl) countEl.innerText = `${size} Players`;

  if (formatEl) {
    let formatLabel = `${size} Players`;
    if (size === 5) formatLabel = '5v5 (No Subs)';
    else if (size === 8) formatLabel = '5v5 + 3 Subs (U9 Standard)';
    else if (size === 7) formatLabel = '7v7 / 5v5 + 2 Subs';
    else if (size === 9) formatLabel = '9v9 Format';
    else if (size === 11) formatLabel = '11v11 Matchday';
    else if (size === 15) formatLabel = 'Full Squad (15 Max)';
    else if (size < 7) formatLabel = 'Small-Sided Squad';
    else formatLabel = 'Youth Matchday Squad';
    formatEl.innerText = formatLabel;
  }

  if (decBtn) decBtn.disabled = size <= MIN_SQUAD_SIZE;
  if (incBtn) incBtn.disabled = size >= MAX_SQUAD_SIZE;
}

export function getSquadSize() {
  const t = teams[coachTeam] || teams.home;
  return (t.roster && t.roster.length > 0) ? t.roster.length : DEFAULT_SQUAD_SIZE;
}

export function adjustSquadModalSize(delta) {
  saveSquadInitialsFromModalInputs();
  const t = teams[coachTeam] || teams.home;
  if (!t.roster) t.roster = createDefaultRoster();

  const currentSize = t.roster.length;
  const targetSize = Math.max(MIN_SQUAD_SIZE, Math.min(MAX_SQUAD_SIZE, currentSize + delta));
  if (targetSize === currentSize) return;

  setSquadModalSize(targetSize);
}

export function setSquadModalSize(targetSize) {
  saveSquadInitialsFromModalInputs();
  const t = teams[coachTeam] || teams.home;
  if (!t.roster) t.roster = createDefaultRoster();

  const clampedSize = Math.max(MIN_SQUAD_SIZE, Math.min(MAX_SQUAD_SIZE, targetSize));
  const currentSize = t.roster.length;

  if (clampedSize > currentSize) {
    for (let i = currentSize; i < clampedSize; i++) {
      let nextNum = 1;
      while (t.roster.some(p => p.number === nextNum)) nextNum++;
      t.roster.push({ number: nextNum, initials: '' });
    }
    t.roster.sort((a, b) => a.number - b.number);
  } else if (clampedSize < currentSize) {
    t.roster = t.roster.slice(0, clampedSize);
  }

  ensureRotationSync();
  updateSquadSizeUI(t.roster.length);
  renderSquadInitialsInputsOnly();
  hapticFeedback('selection');
}

export function selectSquadModalTeam(team) {
  saveSquadInitialsFromModalInputs();
  setCoachTeam(team, false);
  openSquadInitialsModal(team);
}

export function openSquadInitialsModal(team = coachTeam) {
  if (appMode !== 'coach') return;
  const roleModal = document.getElementById('roleSelectModal');
  if (roleModal && !roleModal.classList.contains('hidden')) return;

  const container = document.getElementById('squadInitialsInputsContainer');
  const subtitle = document.getElementById('squadInitialsSubtitle');
  const homeBtn = document.getElementById('squadInitialsHomeBtn');
  const awayBtn = document.getElementById('squadInitialsAwayBtn');

  const t = teams[team] || teams.home;
  if (subtitle) subtitle.innerText = `${t.name} • Matchday Logging`;

  const safeHome = escapeHtml(teams.home?.name || 'Home Team');
  const safeAway = escapeHtml(teams.away?.name || 'Away Team');

  if (homeBtn && awayBtn) {
    if (coachTeam === 'home') {
      homeBtn.className = 'py-2 px-2.5 rounded-lg font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-amber-500 text-slate-950 shadow';
      homeBtn.innerHTML = `<span>⭐</span><span class="truncate">${safeHome}</span>`;
      awayBtn.className = 'py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700';
      awayBtn.innerHTML = `<span class="truncate">${safeAway}</span>`;
    } else {
      homeBtn.className = 'py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700';
      homeBtn.innerHTML = `<span class="truncate">${safeHome}</span>`;
      awayBtn.className = 'py-2 px-2.5 rounded-lg font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-amber-500 text-slate-950 shadow';
      awayBtn.innerHTML = `<span>⭐</span><span class="truncate">${safeAway}</span>`;
    }
  }

  if (!t.roster || t.roster.length === 0) {
    t.roster = createDefaultRoster();
  }

  updateSquadSizeUI(t.roster.length);
  renderSquadInitialsInputsOnly();

  if (window.openModal) window.openModal('squadInitialsModal');
  setTimeout(() => {
    const firstInput = container?.querySelector('input');
    if (firstInput) {
      firstInput.focus();
      firstInput.select();
    }
  }, 150);
}

export function saveSquadInitials() {
  saveSquadInitialsFromModalInputs();
  const t = teams[coachTeam];
  renderTouchlineBarUI();
  notifyScoreChange();
  hapticFeedback('success');
  if (window.closeModal) window.closeModal('squadInitialsModal');
  showTouchlineToast(`⭐ ${t.name} squad initials saved`);
}

export function getAppMode() {
  return appMode;
}

export function setAppMode(mode, options = {}) {
  if (mode === 'coach' || mode === 'spectator' || mode === 'referee') {
    appMode = mode;
  } else {
    appMode = 'referee';
  }
  try {
    localStorage.setItem('whatsthescoreref_app_mode', appMode);
  } catch (_) {}
  if (appMode !== 'coach' && typeof window !== 'undefined' && typeof window.closeModal === 'function') {
    window.closeModal('squadInitialsModal');
  }
  updateAppModeUI();
  notifyScoreChange();
  if (appMode === 'coach' && options.promptSquad !== false && !getTimerState().isTimerRunning) {
    checkCoachSquadPrompt();
  }
}

export let coachNotes = {
  potm: null,
  notes: '',
  moments: [],
  rotation: createDefaultRotation()
};

function ensureRotationSync() {
  const roster = teams[coachTeam]?.roster || createDefaultRoster();
  const validNums = roster.map(p => p.number);
  if (!coachNotes.rotation || !Array.isArray(coachNotes.rotation.onPitch)) {
    coachNotes.rotation = createDefaultRotation(roster);
    return;
  }

  const rot = coachNotes.rotation;
  rot.onPitch = rot.onPitch.filter(n => validNums.includes(n));
  if (rot.onPitch.length === 0 && validNums.length > 0) {
    rot.onPitch = validNums.slice(0, Math.min(5, validNums.length));
  }
  if (!rot.stints || typeof rot.stints !== 'object') rot.stints = {};
  validNums.forEach(n => {
    if (typeof rot.stints[n] !== 'number') {
      rot.stints[n] = rot.onPitch.includes(n) ? 1 : 0;
    }
  });
  if (!validNums.includes(rot.gk)) {
    rot.gk = rot.onPitch[0] || validNums[0] || 1;
  }
  if (!Array.isArray(rot.gkHistory)) {
    rot.gkHistory = rot.gk ? [rot.gk] : [];
  }
}

// ---------------- Coach Fair-Play Sub & GK Rotation Tracker ----------------
export function openSquadRotationModal() {
  ensureRotationSync();
  renderSquadRotationModal();
  if (window.openModal) window.openModal('squadRotationModal');
}

export function togglePlayerOnPitch(playerNumber) {
  ensureRotationSync();
  const rot = coachNotes.rotation;
  const idx = rot.onPitch.indexOf(playerNumber);
  hapticFeedback('tap');

  if (idx >= 0) {
    rot.onPitch.splice(idx, 1);
    if (rot.gk === playerNumber) {
      rot.gk = rot.onPitch[0] || null;
    }
  } else {
    rot.onPitch.push(playerNumber);
    rot.stints[playerNumber] = (rot.stints[playerNumber] || 0) + 1;
    if (!rot.gk) {
      rot.gk = playerNumber;
      if (!rot.gkHistory.includes(playerNumber)) rot.gkHistory.push(playerNumber);
    }
  }

  renderSquadRotationModal();
  renderTouchlineBarUI();
  notifyScoreChange();
}

export function setActiveGoalkeeper(playerNumber) {
  ensureRotationSync();
  const rot = coachNotes.rotation;
  if (!rot.onPitch.includes(playerNumber)) {
    rot.onPitch.push(playerNumber);
    rot.stints[playerNumber] = (rot.stints[playerNumber] || 0) + 1;
  }
  rot.gk = playerNumber;
  if (!rot.gkHistory.includes(playerNumber)) {
    rot.gkHistory.push(playerNumber);
  }
  hapticFeedback('success');
  renderSquadRotationModal();
  renderTouchlineBarUI();
  notifyScoreChange();
}

export function rotateBenchPlayersIn() {
  ensureRotationSync();
  const roster = teams[coachTeam]?.roster || [];
  const rot = coachNotes.rotation;
  const bench = roster.map(p => p.number).filter(n => !rot.onPitch.includes(n));

  if (bench.length === 0) {
    showTouchlineToast('All squad players are already on pitch!');
    return;
  }

  // Sort bench by fewest stints first (fair play!)
  bench.sort((a, b) => (rot.stints[a] || 0) - (rot.stints[b] || 0));

  // Outfield players currently on pitch (protect GK unless everyone else rotated)
  const outfieldOnPitch = rot.onPitch.filter(n => n !== rot.gk);
  // Sub off outfield players with the MOST stints first
  outfieldOnPitch.sort((a, b) => (rot.stints[b] || 0) - (rot.stints[a] || 0));

  const swapCount = Math.min(bench.length, outfieldOnPitch.length);
  if (swapCount === 0) return;

  const comingOff = outfieldOnPitch.slice(0, swapCount);
  const comingOn = bench.slice(0, swapCount);

  rot.onPitch = rot.onPitch.filter(n => !comingOff.includes(n)).concat(comingOn);
  comingOn.forEach(n => {
    rot.stints[n] = (rot.stints[n] || 0) + 1;
  });

  hapticFeedback('success');
  renderSquadRotationModal();
  renderTouchlineBarUI();
  notifyScoreChange();

  const onLabels = comingOn.map(n => {
    const p = roster.find(x => x.number === n);
    return p?.initials ? `#${n} ${p.initials}` : `#${n}`;
  }).join(', ');
  showTouchlineToast(`🔄 Subbed ON: ${onLabels}`);
}

export function resetSquadRotation() {
  const roster = teams[coachTeam]?.roster || createDefaultRoster();
  coachNotes.rotation = createDefaultRotation(roster);
  hapticFeedback('tap');
  renderSquadRotationModal();
  renderTouchlineBarUI();
  notifyScoreChange();
}

export function renderSquadRotationModal() {
  ensureRotationSync();
  const roster = teams[coachTeam]?.roster || createDefaultRoster();
  const rot = coachNotes.rotation;
  const pitchContainer = document.getElementById('rotationOnPitchList');
  const benchContainer = document.getElementById('rotationBenchList');
  const pitchCountBadge = document.getElementById('rotationOnPitchBadge');
  const subtitleEl = document.getElementById('rotationModalSubtitle');

  if (subtitleEl) {
    subtitleEl.innerText = `${teams[coachTeam]?.name || 'Coach Team'} • Equal Playing Time & GK Tracker`;
  }

  if (pitchCountBadge) {
    const count = rot.onPitch.length;
    pitchCountBadge.innerText = count > 5 ? `${count} On Pitch (6v5/6v6)` : `${count}/5 On Pitch`;
    pitchCountBadge.className = count === 5
      ? 'text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono-sport font-black'
      : (count === 6 || count === 7
          ? 'text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono-sport font-black'
          : 'text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 font-mono-sport font-black');
  }

  const onPitchPlayers = roster.filter(p => rot.onPitch.includes(p.number));
  const benchPlayers = roster.filter(p => !rot.onPitch.includes(p.number));
  const minStints = roster.length > 0 ? Math.min(...roster.map(p => rot.stints[p.number] || 0)) : 0;

  const gkSvg = `<svg class="w-3 h-3 shrink-0 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v4"></path><path d="M14 10V4a2 2 0 0 0-4 0v6"></path><path d="M10 10.5V6a2 2 0 0 0-4 0v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>`;

  if (pitchContainer) {
    if (onPitchPlayers.length === 0) {
      pitchContainer.innerHTML = `<div class="col-span-2 text-center py-3 text-slate-500 text-xs italic">Tap players from Bench below to put them on pitch</div>`;
    } else {
      pitchContainer.innerHTML = onPitchPlayers.map(p => {
        const isGk = rot.gk === p.number;
        const label = p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
        const stintCount = rot.stints[p.number] || 1;
        return `
          <div class="p-2 rounded-xl ${isGk ? 'bg-cyan-950/50 border-2 border-cyan-400/70' : 'bg-emerald-950/30 border border-emerald-500/40'} flex items-center justify-between gap-1.5">
            <button type="button" onclick="togglePlayerOnPitch(${p.number})" class="flex-1 text-left min-w-0 cursor-pointer" title="Tap to sub off to bench">
              <div class="font-mono-sport font-black text-xs text-white truncate flex items-center gap-1">
                ${isGk ? `<span class="text-cyan-300">${gkSvg}</span>` : '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>'}
                <span>${label}</span>
              </div>
              <div class="text-[10px] text-slate-400">${stintCount} stint${stintCount === 1 ? '' : 's'} • Tap off</div>
            </button>
            <button type="button" onclick="setActiveGoalkeeper(${p.number})" class="px-2 py-1 rounded-lg text-[10px] font-black cursor-pointer transition shrink-0 flex items-center gap-1 ${isGk ? 'bg-cyan-400 text-slate-950 shadow' : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-700'}" title="Set as Goalkeeper">
              ${gkSvg}<span>GK</span>
            </button>
          </div>
        `;
      }).join('');
    }
  }

  if (benchContainer) {
    if (benchPlayers.length === 0) {
      benchContainer.innerHTML = `<div class="col-span-2 text-center py-3 text-slate-500 text-xs italic">No players on bench (all on pitch)</div>`;
    } else {
      benchContainer.innerHTML = benchPlayers.map(p => {
        const label = p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
        const stintCount = rot.stints[p.number] || 0;
        const needsPitchTime = stintCount <= minStints;
        const wasGk = rot.gkHistory.includes(p.number);
        return `
          <button type="button" onclick="togglePlayerOnPitch(${p.number})" class="p-2 rounded-xl bg-slate-950 hover:bg-slate-900 border ${needsPitchTime ? 'border-amber-400/70' : 'border-slate-800'} flex items-center justify-between gap-1.5 text-left transition active:scale-95 cursor-pointer">
            <div class="min-w-0">
              <div class="font-mono-sport font-black text-xs text-slate-200 truncate flex items-center gap-1">
                <span>${label}</span>
                ${wasGk ? `<span class="text-cyan-400" title="Played GK earlier">${gkSvg}</span>` : ''}
              </div>
              <div class="text-[10px] ${needsPitchTime ? 'text-amber-400 font-bold' : 'text-slate-500'}">${stintCount === 0 ? 'Needs pitch time' : `${stintCount} stint${stintCount === 1 ? '' : 's'}`}</div>
            </div>
            <span class="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] font-black shrink-0">+ ON</span>
          </button>
        `;
      }).join('');
    }
  }
}

export function getCoachNotes() {
  return coachNotes;
}

export function setCoachNotesText(text) {
  coachNotes.notes = text;
  notifyScoreChange();
}

export function setCoachPotm(player) {
  if (coachNotes.potm && player && coachNotes.potm.number === player.number) {
    coachNotes.potm = null;
  } else {
    coachNotes.potm = player;
  }
  hapticFeedback('success');
  renderTouchlineBarUI();
  renderCoachNotesPotmPicker();
  notifyScoreChange();
}

export function addCoachMoment(tag, icon, players = null) {
  const timerState = getTimerState();
  let playerList = [];
  if (Array.isArray(players)) {
    playerList = [...players];
  } else if (players) {
    playerList = [players];
  }
  const moment = {
    id: Date.now() + Math.floor(Math.random() * 1000),
    time: formatTime(timerState.timerSeconds),
    period: timerState.currentPeriod || '1st Half',
    tag,
    icon,
    player: playerList.length > 0 ? playerList[0] : null,
    players: playerList
  };
  coachNotes.moments.push(moment);
  hapticFeedback('success');
  renderTouchlineBarUI();
  renderCoachMomentsModal();
  notifyScoreChange();
  return moment;
}

export function removeCoachMoment(id) {
  coachNotes.moments = coachNotes.moments.filter(m => m.id !== id);
  hapticFeedback('tap');
  renderTouchlineBarUI();
  renderCoachMomentsModal();
  notifyScoreChange();
}

export function updateAppModeUI() {
  const refBtn = document.getElementById('appModeRefBtn');
  const coachBtn = document.getElementById('appModeCoachBtn');
  const specBtn = document.getElementById('appModeSpecBtn');
  const indicator = document.getElementById('appModeIndicatorBadge');
  const drawerBadge = document.getElementById('quickToolsRoleBadge');
  const touchlineBar = document.getElementById('coachTouchlineBar');

  const inactiveCls = 'p-2 rounded-xl font-bold text-xs flex flex-col items-center justify-center gap-1 text-center transition cursor-pointer text-slate-400 hover:text-white bg-slate-900 border border-slate-800';

  document.body?.classList.remove('mode-referee', 'mode-coach', 'mode-spectator');

  if (appMode === 'coach') {
    document.body?.classList.add('mode-coach');

    if (coachBtn) coachBtn.className = 'p-2 rounded-xl font-black text-xs flex flex-col items-center justify-center gap-1 text-center transition cursor-pointer shadow bg-amber-500 text-slate-950 border border-amber-300';
    if (refBtn) refBtn.className = inactiveCls;
    if (specBtn) specBtn.className = inactiveCls;

    if (indicator) {
      indicator.className = 'h-8 px-2 rounded-xl text-[10px] font-black uppercase font-mono-sport flex items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:border-amber-400';
      indicator.title = 'Current Role: Coach (Tap to cycle Ref / Coach / Spectator)';
      indicator.innerHTML = `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"></rect><circle cx="12" cy="12" r="3"></circle><line x1="4" y1="12" x2="20" y2="12"></line></svg><span id="appModeIndicatorText">COACH</span>`;
    }
    if (drawerBadge) {
      drawerBadge.textContent = 'COACH';
      drawerBadge.className = 'px-2 py-0.5 rounded-lg font-black text-[10px] font-mono-sport uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40';
    }
    if (touchlineBar) touchlineBar.classList.remove('hidden');
  } else if (appMode === 'spectator') {
    document.body?.classList.add('mode-spectator');

    if (specBtn) specBtn.className = 'p-2 rounded-xl font-black text-xs flex flex-col items-center justify-center gap-1 text-center transition cursor-pointer shadow bg-sky-400 text-slate-950 border border-sky-200';
    if (refBtn) refBtn.className = inactiveCls;
    if (coachBtn) coachBtn.className = inactiveCls;

    if (indicator) {
      indicator.className = 'h-8 px-2 rounded-xl text-[10px] font-black uppercase font-mono-sport flex items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:border-sky-400';
      indicator.title = 'Current Role: Sideline Spectator (Tap to cycle Ref / Coach / Spectator)';
      indicator.innerHTML = `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg><span id="appModeIndicatorText">SPEC</span>`;
    }
    if (drawerBadge) {
      drawerBadge.textContent = 'SPECTATOR';
      drawerBadge.className = 'px-2 py-0.5 rounded-lg font-black text-[10px] font-mono-sport uppercase bg-sky-500/20 text-sky-300 border border-sky-500/40';
    }
    if (touchlineBar) touchlineBar.classList.add('hidden');
  } else {
    document.body?.classList.add('mode-referee');

    if (refBtn) refBtn.className = 'p-2 rounded-xl font-black text-xs flex flex-col items-center justify-center gap-1 text-center transition cursor-pointer shadow bg-emerald-500 text-slate-950 border border-emerald-300';
    if (coachBtn) coachBtn.className = inactiveCls;
    if (specBtn) specBtn.className = inactiveCls;

    if (indicator) {
      indicator.className = 'h-8 px-2 rounded-xl text-[10px] font-black uppercase font-mono-sport flex items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400';
      indicator.title = 'Current Role: Referee (Tap to cycle Ref / Coach / Spectator)';
      indicator.innerHTML = `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="14" r="6"></circle><path d="M9 8h11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-5"></path></svg><span id="appModeIndicatorText">REF</span>`;
    }
    if (drawerBadge) {
      drawerBadge.textContent = 'REFEREE';
      drawerBadge.className = 'px-2 py-0.5 rounded-lg font-black text-[10px] font-mono-sport uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
    }
    if (touchlineBar) touchlineBar.classList.add('hidden');
  }

  updateCoachTeamUI();
  renderTouchlineBarUI();
  renderRefereeHelperBar();
  if (typeof window !== 'undefined' && typeof window.updateRoleSelectModalUI === 'function') {
    window.updateRoleSelectModalUI();
  }
}

let homeScore = 0;
let awayScore = 0;
let halfTimeScores = { home: null, away: null };
let goals = [];

export let teams = {
  home: {
    name: 'Home Team',
    color: '#f43f5e',
    border: 'border-rose-500/70',
    roster: createDefaultRoster()
  },
  away: {
    name: 'Away Team',
    color: '#2563eb',
    border: 'border-blue-500/70',
    roster: createDefaultRoster()
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
let wasPowerPlayActive = false;
let isPowerPlayEndedAlertActive = false;

let kickoffTeam = 'home';
let kickoffChosen = false;
let kickoffConfirmActive = false;
let kickoffConfirmMessage = '';
let kickoffConfirmTimeout = null;

export function getKickoffTeam() {
  return kickoffTeam;
}

export function isKickoffChosen() {
  return kickoffChosen;
}

let matchToastTimeout = null;

export function showMatchToast(message, icon = '⚽', duration = 3000) {
  const toast = document.getElementById('matchNotificationToast');
  const toastText = document.getElementById('matchNotificationToastText');
  const toastIcon = document.getElementById('matchNotificationToastIcon');
  if (!toast || !toastText) return;

  toastText.innerText = message;
  if (toastIcon) toastIcon.innerText = icon;

  toast.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  if (matchToastTimeout) clearTimeout(matchToastTimeout);
  matchToastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
  }, duration);
}

export function dismissKickoffConfirmAlert() {
  kickoffConfirmActive = false;
  kickoffConfirmMessage = '';
  if (kickoffConfirmTimeout) {
    clearTimeout(kickoffConfirmTimeout);
    kickoffConfirmTimeout = null;
  }
  document.getElementById('refHelperKickoffConfirmAlert')?.classList.add('hidden');
  renderRefereeHelperBar();
}

function showKickoffConfirmInBar(message) {
  if (kickoffConfirmTimeout) clearTimeout(kickoffConfirmTimeout);
  kickoffConfirmActive = true;
  kickoffConfirmMessage = message;
  const el = document.getElementById('refHelperKickoffConfirmAlert');
  const msg = document.getElementById('refHelperKickoffConfirmMsg');
  if (el) el.classList.remove('hidden');
  if (msg) msg.innerText = message;
  kickoffConfirmTimeout = setTimeout(() => dismissKickoffConfirmAlert(), 5000);
  renderRefereeHelperBar();
}

export function setKickoffTeam(team) {
  kickoffTeam = team === 'away' ? 'away' : 'home';
  kickoffChosen = true;
  hapticFeedback('tap');
  const teamName = teams[kickoffTeam]?.name || (kickoffTeam === 'home' ? 'Home Team' : 'Away Team');
  showKickoffConfirmInBar(`${teamName} has kick-off`);
  updateKickoffBadges();
  renderRefereeHelperBar();
  notifyScoreChange();
}

export function toggleKickoffTeam() {
  kickoffTeam = kickoffTeam === 'home' ? 'away' : 'home';
  hapticFeedback('success');
  const timerState = getTimerState();
  const is2ndHalf = timerState.currentPeriod === '2nd Half';
  const activeKickoffTeam = is2ndHalf ? (kickoffTeam === 'home' ? 'away' : 'home') : kickoffTeam;
  const activeTeamName = teams[activeKickoffTeam]?.name || (activeKickoffTeam === 'home' ? 'Home Team' : 'Away Team');
  showKickoffConfirmInBar(`Kick-off switched to ${activeTeamName}`);
  updateKickoffBadges();
  renderRefereeHelperBar();
  notifyScoreChange();
  return kickoffTeam;
}

export function updateKickoffBadges() {
  const homeBadge = document.getElementById('homeKickoffBadge');
  const awayBadge = document.getElementById('awayKickoffBadge');
  if (!homeBadge || !awayBadge) return;

  const timerState = getTimerState();
  const currentPeriod = timerState.currentPeriod || '1st Half';
  const isFT = currentPeriod === 'Full Time';

  if (appMode !== 'referee' || !kickoffChosen || isFT) {
    homeBadge.classList.add('hidden');
    awayBadge.classList.add('hidden');
    return;
  }

  const is2ndHalf = currentPeriod === '2nd Half';
  const activeKickoffTeam = is2ndHalf ? (kickoffTeam === 'home' ? 'away' : 'home') : kickoffTeam;

  homeBadge.classList.toggle('hidden', activeKickoffTeam !== 'home');
  homeBadge.classList.toggle('inline-flex', activeKickoffTeam === 'home');
  awayBadge.classList.toggle('hidden', activeKickoffTeam !== 'away');
  awayBadge.classList.toggle('inline-flex', activeKickoffTeam === 'away');
}

export function setupKickoffLongPress() {
  ['home', 'away'].forEach(team => {
    const badge = document.getElementById(`${team}KickoffBadge`);
    if (!badge) return;

    let pressTimer = null;
    let isLongPress = false;
    let startX = 0;
    let startY = 0;

    const startPress = (e) => {
      e.stopPropagation();
      isLongPress = false;
      startX = e.clientX || 0;
      startY = e.clientY || 0;
      badge.classList.add('scale-95', 'brightness-125');
      if (pressTimer) clearTimeout(pressTimer);
      pressTimer = setTimeout(() => {
        isLongPress = true;
        badge.classList.remove('scale-95', 'brightness-125');
        toggleKickoffTeam();
      }, 500);
    };

    const cancelPress = () => {
      if (pressTimer) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
      badge.classList.remove('scale-95', 'brightness-125');
    };

    const endPress = (e) => {
      e.stopPropagation();
      if (pressTimer) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
      badge.classList.remove('scale-95', 'brightness-125');
      if (!isLongPress) {
        showMatchToast('Hold KO icon to switch kick-off', 'ℹ️', 2000);
        hapticFeedback('tap');
      }
      isLongPress = false;
    };

    const checkMove = (e) => {
      if (!pressTimer) return;
      if (Math.hypot((e.clientX || 0) - startX, (e.clientY || 0) - startY) > 10) {
        cancelPress();
      }
    };

    badge.addEventListener('pointerdown', startPress);
    badge.addEventListener('pointerup', endPress);
    badge.addEventListener('pointercancel', cancelPress);
    badge.addEventListener('pointerleave', cancelPress);
    badge.addEventListener('pointermove', checkMove);
    badge.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
  });
}

export function renderRefereeHelperBar() {
  const bar = document.getElementById('refHelperBar');
  if (!bar) return;

  if (appMode === 'coach') {
    bar.classList.add('hidden');
    return;
  }
  bar.classList.remove('hidden');

  const headerTitleEl = document.getElementById('refHelperTitleText');
  const specBarContent = document.getElementById('spectatorHelperContent');
  const defaultContent = document.getElementById('refHelperDefaultContent');
  const countBadge = document.getElementById('refHelperAlertCountBadge');

  // Spectator Mode: clean 1-tap sideline bar (no referee whistles, no squad/scorer nags!)
  if (appMode === 'spectator') {
    if (headerTitleEl) headerTitleEl.innerText = 'Sideline Spectator View';
    countBadge?.classList.add('hidden');
    defaultContent?.classList.add('hidden');
    [
      'refHelperKickoffConfirmAlert',
      'refHelperPausedGoalAlert',
      'refHelperOneMinuteAlert',
      'refHelperSubAlert',
      'refHelperPowerPlayAlert',
      'refHelperPowerPlayEndedAlert',
      'refHelperCoolDownAlert',
      'refHelperForgotResumeAlert'
    ].forEach(id => document.getElementById(id)?.classList.add('hidden'));
    specBarContent?.classList.remove('hidden');
    updateKickoffBadges();
    return;
  }

  if (headerTitleEl) headerTitleEl.innerText = 'Match Alerts & Reminders';
  specBarContent?.classList.add('hidden');
  const kickoffPrompt = document.getElementById('refHelperKickoffPrompt');
  const idleContent = document.getElementById('refHelperIdleContent');
  const kickoffHomeBtn = document.getElementById('refKickoffHomeBtn');
  const kickoffAwayBtn = document.getElementById('refKickoffAwayBtn');
  const idleStatusText = document.getElementById('refHelperIdleStatusText');
  const idleDot = document.getElementById('refHelperIdleDot');
  const periodTargetText = document.getElementById('refHelperPeriodTargetText');

  const oneMinuteAlert = document.getElementById('refHelperOneMinuteAlert');
  const subAlert = document.getElementById('refHelperSubAlert');
  const ppAlert = document.getElementById('refHelperPowerPlayAlert');
  const ppEndedAlert = document.getElementById('refHelperPowerPlayEndedAlert');
  const coolDownAlert = document.getElementById('refHelperCoolDownAlert');
  const pausedGoalAlert = document.getElementById('refHelperPausedGoalAlert');
  const forgotResumeAlert = document.getElementById('refHelperForgotResumeAlert');
  const kickoffConfirmAlert = document.getElementById('refHelperKickoffConfirmAlert');
  const kickoffConfirmMsgEl = document.getElementById('refHelperKickoffConfirmMsg');
  const lostTimeBadge = document.getElementById('refHelperLostTimeBadge');

  const oneMinuteMsg = document.getElementById('refHelperOneMinuteMsg');
  const ppMsg = document.getElementById('refHelperPowerPlayMsg');

  const timerState = getTimerState();
  const coolDownState = getCoolDownState();
  const currentPeriod = timerState.currentPeriod || '1st Half';
  const isFT = currentPeriod === 'Full Time';

  if (kickoffHomeBtn) {
    const hHex = getReadableKitTextHex(teams.home?.color);
    kickoffHomeBtn.innerText = teams.home?.name || 'Home Team';
    kickoffHomeBtn.style.color = hHex;
    kickoffHomeBtn.style.borderColor = hHex;
    kickoffHomeBtn.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
  }
  if (kickoffAwayBtn) {
    const aHex = getReadableKitTextHex(teams.away?.color);
    kickoffAwayBtn.innerText = teams.away?.name || 'Away Team';
    kickoffAwayBtn.style.color = aHex;
    kickoffAwayBtn.style.borderColor = aHex;
    kickoffAwayBtn.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
  }

  const targetMin = Math.round((timerState.targetHalfSeconds || 900) / 60);
  if (periodTargetText) periodTargetText.innerText = `${targetMin}m Target`;

  const prematchBtn = document.getElementById('refHelperPrematchBtn');
  const idleStatus = document.getElementById('refHelperIdleStatus');

  if (isFT) {
    prematchBtn?.classList.add('hidden');
    idleStatus?.classList.remove('hidden');
    if (idleStatusText) idleStatusText.innerText = 'Match Complete';
    if (idleDot) idleDot.className = 'w-2 h-2 rounded-full bg-purple-400 shrink-0';
  } else if (timerState.isTimerRunning) {
    prematchBtn?.classList.add('hidden');
    idleStatus?.classList.remove('hidden');
    if (idleStatusText) idleStatusText.innerText = 'Match in progress';
    if (idleDot) idleDot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0';
  } else if (timerState.hasHalfStarted) {
    prematchBtn?.classList.add('hidden');
    idleStatus?.classList.remove('hidden');
    if (idleStatusText) idleStatusText.innerText = 'Clock paused';
    if (idleDot) idleDot.className = 'w-2 h-2 rounded-full bg-amber-400 shrink-0';
  } else {
    prematchBtn?.classList.remove('hidden');
    idleStatus?.classList.add('hidden');
  }

  updateKickoffBadges();

  const isPausedGoal = Boolean(isPausedGoalAlertActive && !timerState.isTimerRunning && !isFT);
  const isForgotResume = Boolean(
    timerState.hasHalfStarted &&
    !timerState.isTimerRunning &&
    timerState.stoppageSeconds >= 45 &&
    !timerState.forgotResumeDismissed &&
    !isFT
  );
  const halfTarget = timerState.targetHalfSeconds || 900;
  const oneMinWarning = timerState.oneMinuteWarningSeconds !== undefined ? timerState.oneMinuteWarningSeconds : Math.max(0, halfTarget - 60);
  const isOneMinute = !timerState.oneMinuteBannerDismissed &&
                      timerState.timerSeconds >= oneMinWarning &&
                      timerState.timerSeconds < halfTarget &&
                      !isFT;
  const subTarget = timerState.subReminderSeconds !== undefined ? timerState.subReminderSeconds : Math.floor(halfTarget / 2);
  const isSubAlert = timerState.subReminderTriggered &&
                     !timerState.subBannerDismissed &&
                     timerState.timerSeconds >= subTarget &&
                     timerState.timerSeconds < (subTarget + 60) &&
                     !isFT;

  const diff = homeScore - awayScore;
  const absDiff = Math.abs(diff);
  const isPowerPlay = absDiff >= 4 && !isPowerPlayDismissed && !isFT;
  const isPowerPlayEnded = isPowerPlayEndedAlertActive && absDiff < 4 && !isFT;
  const isCoolDown = Boolean(coolDownState && coolDownState.active);

  let activeAlertCount = 0;

  if (kickoffConfirmActive && kickoffConfirmAlert) {
    if (kickoffConfirmMsgEl) kickoffConfirmMsgEl.innerText = kickoffConfirmMessage;
    kickoffConfirmAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    kickoffConfirmAlert?.classList.add('hidden');
  }

  if (isPausedGoal && pausedGoalAlert) {
    pausedGoalAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    pausedGoalAlert?.classList.add('hidden');
  }

  if (isForgotResume && forgotResumeAlert) {
    if (lostTimeBadge) lostTimeBadge.innerText = `+${formatTime(timerState.stoppageSeconds)} lost`;
    forgotResumeAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    forgotResumeAlert?.classList.add('hidden');
  }

  if (isOneMinute && oneMinuteAlert) {
    if (oneMinuteMsg) oneMinuteMsg.innerText = `Final minute of ${currentPeriod}`;
    oneMinuteAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    oneMinuteAlert?.classList.add('hidden');
  }

  if (isSubAlert && subAlert) {
    subAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    subAlert?.classList.add('hidden');
  }

  if (isPowerPlay && ppAlert) {
    if (ppMsg) {
      const trailingTeamName = diff >= 4 ? (teams.away.name || 'Away Team') : (teams.home.name || 'Home Team');
      if (absDiff >= 6) {
        ppMsg.innerText = `${trailingTeamName} (${absDiff} behind): +2 players (7v5)`;
      } else {
        ppMsg.innerText = `${trailingTeamName} (${absDiff} behind): +1 player (6v5)`;
      }
    }
    ppAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    ppAlert?.classList.add('hidden');
  }

  if (isPowerPlayEnded && ppEndedAlert) {
    ppEndedAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    ppEndedAlert?.classList.add('hidden');
  }

  if (isCoolDown && coolDownAlert) {
    coolDownAlert.classList.remove('hidden');
    activeAlertCount++;
  } else {
    coolDownAlert?.classList.add('hidden');
  }

  if (activeAlertCount > 0) {
    defaultContent?.classList.add('hidden');
  } else {
    defaultContent?.classList.remove('hidden');
    const shouldPromptKickoff = !kickoffChosen && timerState.hasHalfStarted && currentPeriod === '1st Half';
    kickoffPrompt?.classList.toggle('hidden', !shouldPromptKickoff);
    idleContent?.classList.toggle('hidden', shouldPromptKickoff);
  }

  if (countBadge) {
    if (activeAlertCount > 1) {
      countBadge.innerText = `${activeAlertCount} ACTIVE`;
      countBadge.classList.remove('hidden');
    } else {
      countBadge.classList.add('hidden');
    }
  }
}

export function dismissPowerPlayBanner() {
  isPowerPlayDismissed = true;
  document.getElementById('refHelperPowerPlayAlert')?.classList.add('hidden');
  renderRefereeHelperBar();
  hapticFeedback('tap');
}

export function dismissPowerPlayEndedBanner() {
  isPowerPlayEndedAlertActive = false;
  document.getElementById('refHelperPowerPlayEndedAlert')?.classList.add('hidden');
  renderRefereeHelperBar();
  hapticFeedback('tap');
}

export function dismissPausedGoalToast() {
  isPausedGoalAlertActive = false;
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
  renderRefereeHelperBar();
}

export function resumeFromToast() {
  dismissPausedGoalToast();
  if (typeof window !== 'undefined' && typeof window.startTimer === 'function') {
    window.startTimer();
  }
}

export function checkPowerPlay() {
  const absDiff = Math.abs(homeScore - awayScore);
  if (absDiff >= 4) {
    wasPowerPlayActive = true;
    isPowerPlayEndedAlertActive = false;
  } else {
    isPowerPlayDismissed = false;
    if (wasPowerPlayActive) {
      // Deficit just dropped from 4+ back down to 3 or fewer! Remind ref to return to 5v5!
      wasPowerPlayActive = false;
      isPowerPlayEndedAlertActive = true;
      playWhistleTone('chime_ready');
      hapticFeedback('alert');
    }
  }
  renderRefereeHelperBar();
}

export function notifyScoreChange() {
  checkPowerPlay();
  renderRefereeHelperBar();
  const currentState = getScoreState();
  onScoreChangeCallbacks.forEach(cb => {
    try { cb(currentState); } catch (e) { console.error('Score change callback error:', e); }
  });
}

export function getScoreState() {
  ensureRotationSync();
  return {
    homeScore,
    awayScore,
    halfTimeScores: { ...halfTimeScores },
    kickoffTeam,
    kickoffChosen,
    isPowerPlayDismissed,
    wasPowerPlayActive,
    isPowerPlayEndedAlertActive,
    isPausedGoalAlertActive,
    coachTeam,
    goals: goals.map(g => ({ ...g })),
    appMode,
    coachNotes: {
      potm: coachNotes.potm ? { ...coachNotes.potm } : null,
      notes: coachNotes.notes || '',
      moments: (coachNotes.moments || []).map(m => ({ ...m })),
      rotation: {
        onPitch: [...(coachNotes.rotation?.onPitch || [])],
        gk: coachNotes.rotation?.gk || 1,
        gkHistory: [...(coachNotes.rotation?.gkHistory || [])],
        stints: { ...(coachNotes.rotation?.stints || {}) }
      }
    },
    teams: {
      home: { ...teams.home, roster: (teams.home.roster || []).map(p => ({ ...p })) },
      away: { ...teams.away, roster: (teams.away.roster || []).map(p => ({ ...p })) }
    }
  };
}

export function toggleAppMode() {
  const order = ['referee', 'coach', 'spectator'];
  const nextMode = order[(order.indexOf(appMode) + 1) % order.length];
  // Never ambush user with Squad Initials modal when quick-cycling role pill from the top header
  setAppMode(nextMode, { promptSquad: false });
  return nextMode;
}

export function restoreScoreState(state) {
  if (!state) return;
  lastDebounceTime = { home: 0, away: 0 };
  homeScore = state.homeScore || 0;
  awayScore = state.awayScore || 0;
  halfTimeScores = state.halfTimeScores ? { ...state.halfTimeScores } : { home: null, away: null };
  kickoffTeam = state.kickoffTeam || 'home';
  kickoffChosen = Boolean(state.kickoffChosen);
  if (state.coachTeam === 'home' || state.coachTeam === 'away') {
    coachTeam = state.coachTeam;
  }
  goals = state.goals ? state.goals.map(g => ({ ...g })) : [];
  isPowerPlayDismissed = Boolean(state.isPowerPlayDismissed);
  wasPowerPlayActive = typeof state.wasPowerPlayActive === 'boolean'
    ? state.wasPowerPlayActive
    : Math.abs(homeScore - awayScore) >= 4;
  isPowerPlayEndedAlertActive = Boolean(state.isPowerPlayEndedAlertActive);
  isPausedGoalAlertActive = Boolean(state.isPausedGoalAlertActive);
  activeInlineTag = null;

  if (inlineTagTimeout) {
    clearTimeout(inlineTagTimeout);
    inlineTagTimeout = null;
  }
  if (matchToastTimeout) {
    clearTimeout(matchToastTimeout);
    matchToastTimeout = null;
  }

  const matchToast = document.getElementById('matchNotificationToast');
  if (matchToast) {
    matchToast.classList.remove('opacity-100', 'translate-y-0');
    matchToast.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
  }
  document.getElementById('coachTouchlineToast')?.classList.add('hidden');

  if (state.teams) {
    teams.home = {
      ...state.teams.home,
      roster: state.teams.home.roster && state.teams.home.roster.length > 0
        ? state.teams.home.roster.slice(0, MAX_SQUAD_SIZE).map(p => ({ ...p }))
        : createDefaultRoster()
    };
    teams.away = {
      ...state.teams.away,
      roster: state.teams.away.roster && state.teams.away.roster.length > 0
        ? state.teams.away.roster.slice(0, MAX_SQUAD_SIZE).map(p => ({ ...p }))
        : createDefaultRoster()
    };
  }

  if (state.coachNotes) {
    coachNotes = {
      potm: state.coachNotes.potm ? { ...state.coachNotes.potm } : null,
      notes: state.coachNotes.notes || '',
      moments: state.coachNotes.moments ? state.coachNotes.moments.map(m => ({ ...m })) : [],
      rotation: state.coachNotes.rotation
        ? {
            onPitch: [...(state.coachNotes.rotation.onPitch || [])],
            gk: state.coachNotes.rotation.gk || 1,
            gkHistory: [...(state.coachNotes.rotation.gkHistory || [])],
            stints: { ...(state.coachNotes.rotation.stints || {}) }
          }
        : createDefaultRotation(teams[coachTeam]?.roster || [])
    };
  } else {
    coachNotes = {
      potm: null,
      notes: '',
      moments: [],
      rotation: createDefaultRotation(teams[coachTeam]?.roster || [])
    };
  }
  ensureRotationSync();

  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = homeScore;
  if (awayScoreEl) awayScoreEl.innerText = awayScore;

  applyTeamVisuals('home');
  applyTeamVisuals('away');
  renderGoalTimeline();
  updateAppModeUI();
  renderTouchlineBarUI();
  renderRefereeHelperBar();
  notifyScoreChange();
}

export function resetScoreState(preserveTeams = false) {
  lastDebounceTime = { home: 0, away: 0 };
  homeScore = 0;
  awayScore = 0;
  halfTimeScores = { home: null, away: null };
  kickoffTeam = 'home';
  kickoffChosen = false;
  goals = [];
  isPowerPlayDismissed = false;
  wasPowerPlayActive = false;
  isPowerPlayEndedAlertActive = false;
  isPausedGoalAlertActive = false;
  activeInlineTag = null;

  if (inlineTagTimeout) { clearTimeout(inlineTagTimeout); inlineTagTimeout = null; }
  if (matchToastTimeout) { clearTimeout(matchToastTimeout); matchToastTimeout = null; }
  if (kickoffConfirmTimeout) { clearTimeout(kickoffConfirmTimeout); kickoffConfirmTimeout = null; }
  kickoffConfirmActive = false;
  kickoffConfirmMessage = '';

  const matchToast = document.getElementById('matchNotificationToast');
  if (matchToast) {
    matchToast.classList.remove('opacity-100', 'translate-y-0');
    matchToast.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
  }
  document.getElementById('coachTouchlineToast')?.classList.add('hidden');
  document.getElementById('refHelperPowerPlayAlert')?.classList.add('hidden');
  document.getElementById('refHelperPowerPlayEndedAlert')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
  document.getElementById('refHelperKickoffConfirmAlert')?.classList.add('hidden');

  if (!preserveTeams) {
    teams.home.name = 'Home Team';
    teams.away.name = 'Away Team';
  }
  coachNotes = {
    potm: null,
    notes: '',
    moments: [],
    rotation: createDefaultRotation(teams[coachTeam]?.roster || [])
  };

  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = 0;
  if (awayScoreEl) awayScoreEl.innerText = 0;

  applyTeamVisuals('home');
  applyTeamVisuals('away');
  renderGoalTimeline();
  renderTouchlineBarUI();
  renderRefereeHelperBar();
  notifyScoreChange();
}

// Reset ONLY goals scored in a specific period (e.g. resetting 2nd Half preserves 1st Half goals!)
export function resetCurrentHalfGoals(periodToClear) {
  if (periodToClear === '1st Half') {
    resetScoreState(true);
    return;
  }

  goals = goals.filter(g => g.period !== periodToClear);
  recalculateScoresFromGoals();
  isPausedGoalAlertActive = false;
  renderGoalTimeline();
  notifyScoreChange();
}

function recalculateScoresFromGoals() {
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

let pendingAttributionTeam = 'home';
let pendingAttributionExistingIndex = null;
let pendingAttributionScorer = null;
let pendingAttributionAssist = null;
let pendingAttributionStage = 1;

let skipAssistStep = false;
try {
  skipAssistStep = localStorage.getItem('whatsthescoreref_skip_assist') === 'true';
} catch (_) {}

export function setSkipAssistStep(val) {
  skipAssistStep = Boolean(val);
  try {
    localStorage.setItem('whatsthescoreref_skip_assist', skipAssistStep ? 'true' : 'false');
  } catch (_) {}
  hapticFeedback('tap');
  renderAttributionModal();
}

export function getSkipAssistStep() {
  return skipAssistStep;
}

function triggerScorePop(team) {
  const el = document.getElementById(team === 'home' ? 'homeScoreDisplay' : 'awayScoreDisplay');
  if (!el) return;
  el.classList.remove('score-pop-anim');
  void el.offsetWidth;
  el.classList.add('score-pop-anim');
}

export function executeDirectGoal(team, attribution = null) {
  const timerState = getTimerState();
  if (team === 'home') {
    homeScore++;
    const el = document.getElementById('homeScoreDisplay');
    if (el) el.innerText = homeScore;
  } else {
    awayScore++;
    const el = document.getElementById('awayScoreDisplay');
    if (el) el.innerText = awayScore;
  }
  triggerScorePop(team);

  goals.push({
    id: Date.now(),
    team,
    teamName: teams[team].name || (team === 'home' ? 'Home Team' : 'Away Team'),
    time: formatTime(timerState.timerSeconds),
    timeSeconds: timerState.timerSeconds,
    period: timerState.currentPeriod,
    scoreHome: homeScore,
    scoreAway: awayScore,
    scorer: attribution ? attribution.scorer : null,
    assist: attribution ? attribution.assist : null,
    isOwnGoal: attribution ? Boolean(attribution.isOwnGoal) : false
  });

  renderGoalTimeline();
  notifyScoreChange();

  if (!timerState.isTimerRunning && timerState.currentPeriod !== 'Full Time') {
    isPausedGoalAlertActive = true;
    renderRefereeHelperBar();
  }
}

export function incrementScore(team) {
  const timerState = getTimerState();
  if (timerState.currentPeriod === 'Full Time') {
    openConcludedGoalModal(team);
    return;
  }

  const now = Date.now();
  if (now - (lastDebounceTime[team] || 0) < DEBOUNCE_MS) return;
  lastDebounceTime[team] = now;
  hapticFeedback('tap');

  if (appMode === 'coach' && team === coachTeam) {
    openGoalAttributionModal(team);
    return;
  }

  executeDirectGoal(team);
}

export function openGoalAttributionModal(team, existingGoalIndex = null) {
  pendingAttributionTeam = team;
  pendingAttributionExistingIndex = existingGoalIndex;
  pendingAttributionScorer = null;
  pendingAttributionAssist = null;
  pendingAttributionStage = 1;

  if (existingGoalIndex !== null && goals[existingGoalIndex]) {
    const existing = goals[existingGoalIndex];
    pendingAttributionScorer = existing.scorer || null;
    pendingAttributionAssist = existing.assist || null;
  }

  renderAttributionModal();
  if (window.openModal) window.openModal('goalAttributionModal');
}

export function openGoalAttributionForExistingGoal(index) {
  if (index < 0 || index >= goals.length) return;
  openGoalAttributionModal(goals[index].team, index);
}

export function renderAttributionModal() {
  const team = pendingAttributionTeam;
  const t = teams[team] || { name: team === 'home' ? 'Home Team' : 'Away Team', color: '#f43f5e', roster: [] };
  const roster = (t.roster && t.roster.length > 0) ? t.roster : createDefaultRoster();

  const cardEl = document.getElementById('goalAttributionCard');
  const titleEl = document.getElementById('attributionModalTitle');
  const teamDot = document.getElementById('attributionTeamDot');
  const fastModeLabel = document.getElementById('attributionFastModeLabel');
  const fastModeCheckbox = document.getElementById('attributionFastModeCheckbox');
  const chipContainer = document.getElementById('attributionChipContainer');
  const backBtn = document.getElementById('attributionBackBtn');
  const ownGoalBtn = document.getElementById('attributionOwnGoalBtn');
  const quickSkipBtn = document.getElementById('attributionQuickSkipBtn');

  if (teamDot) teamDot.style.backgroundColor = t.color;

  if (pendingAttributionStage === 1) {
    if (cardEl) {
      cardEl.className = 'bg-slate-900 border-2 border-emerald-500/80 rounded-2xl max-w-md w-full p-4 sm:p-5 max-h-[92vh] flex flex-col shadow-2xl animate-fade-in ring-1 ring-emerald-500/30';
    }
    if (titleEl) titleEl.innerText = 'Who scored?';
    if (fastModeLabel) fastModeLabel.classList.remove('hidden');
    if (fastModeCheckbox) fastModeCheckbox.checked = skipAssistStep;
    backBtn?.classList.add('hidden');
    ownGoalBtn?.classList.remove('hidden');
    if (quickSkipBtn) {
      quickSkipBtn.className = 'py-2.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-black rounded-xl text-xs sm:text-sm transition active:scale-95 cursor-pointer flex items-center justify-center gap-1';
      quickSkipBtn.innerHTML = `<span>⚡</span><span>${pendingAttributionExistingIndex !== null ? 'Clear Credit' : 'Uncredited Goal'}</span>`;
    }

    if (chipContainer) {
      chipContainer.innerHTML = roster.map(player => {
        const hasInitials = Boolean(player.initials && player.initials.trim().length > 0);
        const isSelected = pendingAttributionScorer && pendingAttributionScorer.number === player.number;
        const badgeText = hasInitials ? `#${player.number}` : 'PLAYER';
        const initialsText = hasInitials ? escapeHtml(player.initials) : `#${player.number}`;

        const btnClass = isSelected
          ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-200 text-slate-950 shadow-xl shadow-emerald-500/30 scale-[1.03] ring-2 ring-emerald-300'
          : 'bg-slate-800/90 hover:bg-slate-700 border-slate-700/80 hover:border-emerald-400/80 text-white shadow-md hover:scale-[1.02]';

        return `
          <button type="button" onclick="window.selectAttributionScorer(${player.number})"
            class="relative p-2.5 sm:p-3 rounded-2xl border-2 flex flex-col items-center justify-between min-h-[72px] sm:min-h-[82px] active:scale-95 transition cursor-pointer group ${btnClass}">
            <div class="flex items-center justify-between w-full">
              <span class="font-mono-sport font-black text-xs sm:text-sm px-2 py-0.5 rounded-lg ${isSelected ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-950/90 text-amber-300 border border-amber-400/40'}">
                ${badgeText}
              </span>
              ${isSelected ? '<span class="text-sm font-black text-slate-950">✓</span>' : '<span class="text-[10px] text-emerald-400/60 font-black opacity-0 group-hover:opacity-100 transition">GOAL</span>'}
            </div>
            <span class="font-mono-sport font-black text-lg sm:text-2xl tracking-wider uppercase leading-none py-1 ${isSelected ? 'text-slate-950' : 'text-white'}">
              ${initialsText}
            </span>
          </button>
        `;
      }).join('');
    }
  } else {
    if (cardEl) {
      cardEl.className = 'bg-slate-900 border-2 border-sky-500/80 rounded-2xl max-w-md w-full p-4 sm:p-5 max-h-[92vh] flex flex-col shadow-2xl animate-fade-in ring-1 ring-sky-500/30';
    }
    if (titleEl) titleEl.innerText = 'Who assisted?';
    fastModeLabel?.classList.add('hidden');
    if (backBtn) {
      backBtn.classList.remove('hidden');
      backBtn.innerHTML = '<span>←</span><span>Back</span>';
    }
    ownGoalBtn?.classList.add('hidden');
    if (quickSkipBtn) {
      quickSkipBtn.className = 'py-3 px-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs sm:text-sm transition active:scale-95 cursor-pointer flex items-center justify-center gap-1 shadow-md';
      quickSkipBtn.innerHTML = '<span>No Assist</span>';
    }

    if (chipContainer) {
      const candidates = roster.filter(p => !pendingAttributionScorer || p.number !== pendingAttributionScorer.number);
      chipContainer.innerHTML = candidates.map(player => {
        const hasInitials = Boolean(player.initials && player.initials.trim().length > 0);
        const isSelected = pendingAttributionAssist && pendingAttributionAssist.number === player.number;
        const badgeText = hasInitials ? `#${player.number}` : 'PLAYER';
        const initialsText = hasInitials ? escapeHtml(player.initials) : `#${player.number}`;

        const btnClass = isSelected
          ? 'bg-gradient-to-br from-sky-500 to-sky-600 border-sky-200 text-slate-950 shadow-xl shadow-sky-500/30 scale-[1.03] ring-2 ring-sky-300'
          : 'bg-slate-800/90 hover:bg-slate-700 border-slate-700/80 hover:border-sky-400/80 text-white shadow-md hover:scale-[1.02]';

        return `
          <button type="button" onclick="window.selectAttributionAssist(${player.number})"
            class="relative p-2.5 sm:p-3 rounded-2xl border-2 flex flex-col items-center justify-between min-h-[72px] sm:min-h-[82px] active:scale-95 transition cursor-pointer group ${btnClass}">
            <div class="flex items-center justify-between w-full">
              <span class="font-mono-sport font-black text-xs sm:text-sm px-2 py-0.5 rounded-lg ${isSelected ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-950/90 text-amber-300 border border-amber-400/40'}">
                ${badgeText}
              </span>
              ${isSelected ? '<span class="text-sm font-black text-slate-950">✓</span>' : '<span class="text-[10px] text-sky-400/60 font-black opacity-0 group-hover:opacity-100 transition">ASSIST</span>'}
            </div>
            <span class="font-mono-sport font-black text-lg sm:text-2xl tracking-wider uppercase leading-none py-1 ${isSelected ? 'text-slate-950' : 'text-white'}">
              ${initialsText}
            </span>
          </button>
        `;
      }).join('');
    }
  }
}

export function selectAttributionScorer(playerNumber) {
  const roster = teams[pendingAttributionTeam]?.roster || [];
  const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
  pendingAttributionScorer = player;

  if (skipAssistStep) {
    pendingAttributionAssist = null;
    hapticFeedback('success');
    completeAttribution();
    return;
  }

  pendingAttributionStage = 2;
  hapticFeedback('tap');
  renderAttributionModal();
}

export function selectAttributionAssist(playerNumber) {
  const roster = teams[pendingAttributionTeam]?.roster || [];
  const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
  pendingAttributionAssist = player;
  hapticFeedback('success');
  completeAttribution();
}

export function skipGoalAssist() {
  pendingAttributionAssist = null;
  hapticFeedback('success');
  completeAttribution();
}

export function attributionBackToScorer() {
  pendingAttributionStage = 1;
  hapticFeedback('tap');
  renderAttributionModal();
}

export function skipGoalAttribution() {
  if (pendingAttributionStage === 1) {
    pendingAttributionScorer = null;
    pendingAttributionAssist = null;
    completeAttribution();
  } else {
    skipGoalAssist();
  }
}

export function setGoalOwnGoal() {
  pendingAttributionScorer = null;
  pendingAttributionAssist = null;
  completeAttribution(true);
}

export function cancelGoalAttribution() {
  window.closeModal('goalAttributionModal');
}

export function completeAttribution(isOwnGoal = false) {
  window.closeModal('goalAttributionModal');

  if (pendingAttributionExistingIndex !== null) {
    const g = goals[pendingAttributionExistingIndex];
    if (g) {
      g.scorer = isOwnGoal ? null : pendingAttributionScorer;
      g.assist = isOwnGoal ? null : pendingAttributionAssist;
      g.isOwnGoal = isOwnGoal;
      renderGoalTimeline();
      notifyScoreChange();
    }
    return;
  }

  executeDirectGoal(pendingAttributionTeam, {
    scorer: isOwnGoal ? null : pendingAttributionScorer,
    assist: isOwnGoal ? null : pendingAttributionAssist,
    isOwnGoal
  });
}

// Fixed: decrementScore & undoLastGoal now delegate to executeGoalRemovalByIndex so all running scores & half-time scores recalculate!
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

  for (let i = goals.length - 1; i >= 0; i--) {
    if (goals[i].team === team) {
      executeGoalRemovalByIndex(i);
      return;
    }
  }

  // Fallback if score was manually imported without individual goal entries
  if (team === 'home' && homeScore > 0) {
    homeScore--;
    document.getElementById('homeScoreDisplay').innerText = homeScore;
    renderGoalTimeline();
    notifyScoreChange();
  } else if (team === 'away' && awayScore > 0) {
    awayScore--;
    document.getElementById('awayScoreDisplay').innerText = awayScore;
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
  executeGoalRemovalByIndex(goals.length - 1);
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
  recalculateScoresFromGoals();
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

  if (window.openModal) window.openModal('confirmConcludedGoalModal');
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
  if (preset === 'early') setConcludedGoalSeconds(60);
  else if (preset === 'mid') setConcludedGoalSeconds(Math.floor(targetSec / 2));
  else if (preset === 'full') setConcludedGoalSeconds(targetSec);
  else if (typeof preset === 'number') setConcludedGoalSeconds(preset);
}

export function adjustConcludedGoalSeconds(delta) {
  pendingConcludedGoalSeconds = Math.max(0, pendingConcludedGoalSeconds + delta);
  updateConcludedGoalTimeDisplay();
}

export function updateConcludedGoalTimeDisplay() {
  const display = document.getElementById('concludedGoalTimeDisplay');
  if (display) display.innerText = formatTime(pendingConcludedGoalSeconds);
}

export function confirmConcludedGoal() {
  if (!pendingConcludedGoalTeam) return;
  const team = pendingConcludedGoalTeam;
  const period = pendingConcludedGoalPeriod || '2nd Half';
  const timeStr = formatTime(pendingConcludedGoalSeconds);
  const goalId = Date.now();

  hapticFeedback('success');

  const newGoal = {
    id: goalId,
    team,
    teamName: teams[team].name || (team === 'home' ? 'Home Team' : 'Away Team'),
    time: timeStr,
    timeSeconds: pendingConcludedGoalSeconds,
    period,
    scoreHome: 0,
    scoreAway: 0,
    scorer: null,
    assist: null,
    isOwnGoal: false
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
  recalculateScoresFromGoals();
  triggerScorePop(team);
  renderGoalTimeline();
  notifyScoreChange();

  if (window.closeModal) window.closeModal('confirmConcludedGoalModal');

  // In Coach Mode, let coach immediately attribute scorer on concluded goal too!
  if (appMode === 'coach' && team === coachTeam) {
    const insertedIdx = goals.findIndex(g => g.id === goalId);
    if (insertedIdx >= 0) {
      openGoalAttributionForExistingGoal(insertedIdx);
    }
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
    if (last) desc = `Remove the last goal (${last.time} - ${last.teamName}) from this concluded match?`;
  } else if (action.type === 'decrement') {
    const tName = teams[action.team]?.name || (action.team === 'home' ? 'Home Team' : 'Away Team');
    desc = `Remove the most recent goal for ${tName} and adjust the final score?`;
  } else if (action.type === 'removeIndex') {
    const target = goals[action.index];
    if (target) desc = `Delete goal at ${target.time} (${target.period} - ${target.teamName}) from this concluded match?`;
  }

  if (descEl) descEl.innerText = desc;
  if (titleEl) titleEl.innerText = 'Adjust Concluded Score?';
  if (btnTextEl) btnTextEl.innerText = 'YES, REMOVE GOAL';

  if (window.openModal) window.openModal('confirmConcludedScoreRemovalModal');
}

export function executeConcludedGoalRemoval() {
  if (!pendingRemovalAction) return;
  const action = pendingRemovalAction;
  pendingRemovalAction = null;

  if (window.closeModal) window.closeModal('confirmConcludedScoreRemovalModal');

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

export function updateUndoButtons() {
  const homeUndo = document.getElementById('homeUndoBtn');
  const awayUndo = document.getElementById('awayUndoBtn');
  const homeTapHint = document.getElementById('homeTapHint');
  const awayTapHint = document.getElementById('awayTapHint');

  if (homeTapHint) homeTapHint.classList.toggle('hidden', homeScore > 0);
  if (awayTapHint) awayTapHint.classList.toggle('hidden', awayScore > 0);

  if (homeUndo) {
    homeUndo.classList.toggle('undo-pill-visible', homeScore > 0);
    homeUndo.classList.toggle('undo-pill-hidden', homeScore <= 0);
  }
  if (awayUndo) {
    awayUndo.classList.toggle('undo-pill-visible', awayScore > 0);
    awayUndo.classList.toggle('undo-pill-hidden', awayScore <= 0);
  }
}

export function renderGoalTimeline() {
  const modalListEl = document.getElementById('modalGoalTimelineList');
  const modalBadgeEl = document.getElementById('modalGoalCountBadge');
  const homeChipsEl = document.getElementById('homeGoalChips');
  const awayChipsEl = document.getElementById('awayGoalChips');
  const homeBadgeEl = document.getElementById('homeGoalCountBadge');
  const awayBadgeEl = document.getElementById('awayGoalCountBadge');

  if (modalBadgeEl) modalBadgeEl.innerText = `${goals.length} Goal${goals.length === 1 ? '' : 's'}`;

  updateUndoButtons();

  const homeGoals = goals.filter(g => g.team === 'home');
  const awayGoals = goals.filter(g => g.team === 'away');

  if (homeBadgeEl) homeBadgeEl.innerText = homeGoals.length;
  if (awayBadgeEl) awayBadgeEl.innerText = awayGoals.length;

  const ballSvg = `<svg class="w-3 h-3 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polygon points="12 8 15.5 10.5 14.2 14.5 9.8 14.5 8.5 10.5 12 8" fill="currentColor" stroke="none"></polygon></svg>`;

  function renderGoalChip(g) {
    const isOG = Boolean(g.isOwnGoal);
    let scorerText = '';
    if (!isOG && g.scorer) {
      scorerText = g.scorer.initials
        ? ` #${g.scorer.number} ${escapeHtml(g.scorer.initials)}`
        : ` #${g.scorer.number}`;
    }
    if (isOG) {
      return `
        <button type="button" onclick="openModal('timelineModal')" class="px-2 py-0.5 rounded-lg bg-amber-950/80 border border-amber-500/60 hover:border-amber-400 text-[11px] font-mono-sport font-black text-amber-300 flex items-center gap-1 shrink-0 active:scale-95 transition cursor-pointer shadow-sm" title="Own Goal at ${escapeHtml(g.time)} (Tap to view log)">
          <span class="tracking-wide">${escapeHtml(g.time)} OG</span>
        </button>
      `;
    }
    return `
      <button type="button" onclick="openModal('timelineModal')" class="px-2 py-0.5 rounded-lg bg-slate-900/90 border border-slate-700/80 hover:border-emerald-400 text-[11px] font-mono-sport font-black text-emerald-300 flex items-center gap-1 shrink-0 active:scale-95 transition cursor-pointer shadow-sm" title="Goal at ${escapeHtml(g.time)}${scorerText} (Tap to view log)">
        ${ballSvg}<span class="tracking-wide">${escapeHtml(g.time)}${scorerText}</span>
      </button>
    `;
  }

  function renderChipsForTeam(teamGoals) {
    if (!teamGoals || teamGoals.length === 0) return '';
    const chipsHtml = teamGoals.map(renderGoalChip).join('');

    if (teamGoals.length <= 2) {
      return `<div class="flex items-center justify-center gap-1.5 shrink-0">${chipsHtml}</div>`;
    }

    const duration = Math.max(9, teamGoals.length * 3.5);
    return `
      <div class="goal-chips-carousel" style="animation: goalChipsCarousel ${duration}s linear infinite;" title="Tap goal for details">
        <div class="flex items-center gap-1.5 shrink-0 pr-1.5">${chipsHtml}</div>
        <div class="flex items-center gap-1.5 shrink-0 pr-1.5" aria-hidden="true">${chipsHtml}</div>
      </div>
    `;
  }

  if (homeChipsEl) homeChipsEl.innerHTML = renderChipsForTeam(homeGoals);
  if (awayChipsEl) awayChipsEl.innerHTML = renderChipsForTeam(awayGoals);

  if (goals.length === 0) {
    if (modalListEl) modalListEl.innerHTML = '<div class="text-center py-6 text-slate-500 text-xs italic">No goals scored yet</div>';
    return;
  }

  if (modalListEl) {
    modalListEl.innerHTML = goals.slice().reverse().map((g, revIdx) => {
      const actualIdx = goals.length - 1 - revIdx;

      let attributionHtml = '';
      if (g.isOwnGoal) {
        attributionHtml = `<span class="text-amber-400 font-bold text-[11px] flex items-center gap-1"><span>⚠️</span><span>Own Goal</span></span>`;
      } else if (g.scorer) {
        const sLabel = g.scorer.initials ? `#${g.scorer.number} ${escapeHtml(g.scorer.initials)}` : `#${g.scorer.number}`;
        const aLabel = g.assist ? (g.assist.initials ? `#${g.assist.number} ${escapeHtml(g.assist.initials)}` : `#${g.assist.number}`) : '';
        attributionHtml = `
          <div class="flex items-center gap-2 text-[11px]">
            <span class="text-emerald-400 font-bold">⚽ ${sLabel}</span>
            ${aLabel ? `<span class="text-sky-300 font-bold">🅰️ ${aLabel}</span>` : ''}
          </div>
        `;
      } else {
        attributionHtml = `<span class="text-slate-500 italic text-[10px]">Uncredited goal</span>`;
      }

      return `
        <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 truncate">
              <span class="text-emerald-400 font-black font-mono-sport text-xs shrink-0">${escapeHtml(g.time)}</span>
              <span class="text-[10px] text-slate-500 font-bold shrink-0">(${escapeHtml(g.period)})</span>
              <span class="text-slate-200 font-semibold text-xs truncate">${escapeHtml(g.teamName)}</span>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="font-mono-sport font-bold text-slate-300 text-xs">[ ${g.scoreHome} - ${g.scoreAway} ]</span>
              <button onclick="window.removeGoal(${actualIdx})" class="text-slate-500 hover:text-rose-400 p-1 cursor-pointer" title="Delete goal">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 border-t border-slate-900">
            <div>${attributionHtml}</div>
            <button onclick="window.openGoalAttributionForExistingGoal(${actualIdx})" class="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-800 hover:border-amber-500/40 transition cursor-pointer">
              Tag / Edit
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

export function updateKitClashUI() {
  const isClash = (teams.home?.color || '').toLowerCase() === (teams.away?.color || '').toLowerCase();
  const bibsBadge = document.getElementById('awayBibsBadge');
  if (bibsBadge) {
    bibsBadge.classList.toggle('hidden', !isClash);
    bibsBadge.classList.toggle('inline-flex', isClash);
  }
}

export function applyTeamVisuals(side) {
  const t = teams[side];
  const palette = KIT_PALETTE[t.color] || { hex: t.color, border: t.color };
  const readableHex = getReadableKitTextHex(palette.hex);

  const nameEl = document.getElementById(side + 'TeamNameDisplay');
  if (nameEl) nameEl.innerText = t.name || (side === 'home' ? 'Home Team' : 'Away Team');

  const dotEl = document.getElementById(side + 'BadgeDot');
  if (dotEl) {
    const shirtBody = dotEl.querySelector ? dotEl.querySelector('.kit-shirt-body') : null;
    const shirtTrim = dotEl.querySelector ? dotEl.querySelector('.kit-shirt-trim') : null;
    if (shirtBody) {
      const isLightKit = palette.hex === '#f8fafc' || palette.hex === '#eab308';
      const trimStroke = isLightKit ? '#0f172a' : 'rgba(255,255,255,0.88)';
      shirtBody.setAttribute('fill', palette.hex);
      shirtBody.setAttribute('stroke', palette.hex === '#f8fafc' ? '#64748b' : trimStroke);
      if (shirtTrim) shirtTrim.setAttribute('stroke', trimStroke);
    } else {
      dotEl.style.backgroundColor = palette.hex;
      dotEl.style.borderColor = palette.hex === '#f8fafc' ? '#94a3b8' : 'rgba(255,255,255,0.6)';
    }
  }

  const labelEl = document.getElementById(side + 'Label');
  if (labelEl) labelEl.style.color = readableHex;

  // Dynamic kit colour on KO badge (replaces hardcoded rose/blue!)
  const koBadge = document.getElementById(side + 'KickoffBadge');
  if (koBadge) {
    koBadge.style.color = readableHex;
    koBadge.style.borderColor = readableHex;
    koBadge.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
  }

  const cardEl = document.getElementById(side + 'CardContainer');
  if (cardEl) {
    cardEl.style.borderColor = palette.border;
    cardEl.style.setProperty('--kit-accent', palette.hex);
  }

  updateKitClashUI();
}

// Team Customization Modal Handlers
export function openEditTeamModal(side) {
  const timerState = getTimerState();
  if (timerState && timerState.isTimerRunning) return;

  currentEditingTeam = side;
  const t = teams[side];
  const titleEl = document.getElementById('teamEditTitle');
  if (titleEl) {
    titleEl.innerHTML = `
      <span class="w-3.5 h-3.5 rounded-full inline-block border border-white/40 shrink-0" style="background-color: ${escapeHtml(t.color)}"></span>
      <span>Edit ${side === 'home' ? 'Home' : 'Away'} Team</span>
    `;
  }

  const nameInput = document.getElementById('teamNameInput');
  if (nameInput) nameInput.value = t.name;

  const leagueSelect = document.getElementById('leagueTeamSelect');
  if (leagueSelect) {
    let matched = false;
    for (const opt of leagueSelect.options) {
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
  renderTeamRosterEditor();

  const coachRoleSection = document.getElementById('teamEditCoachRoleSection');
  const coachToggleBtn = document.getElementById('teamEditCoachToggleBtn');
  if (coachRoleSection && coachToggleBtn) {
    if (appMode === 'coach') {
      coachRoleSection.classList.remove('hidden');
      if (side === coachTeam) {
        coachToggleBtn.className = 'py-1 px-2.5 rounded-lg font-black text-xs transition cursor-pointer bg-amber-500 text-slate-950 shadow flex items-center gap-1';
        coachToggleBtn.innerHTML = `<span>⭐</span><span>Selected (My Team)</span>`;
      } else {
        coachToggleBtn.className = 'py-1 px-2.5 rounded-lg font-bold text-xs transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1';
        coachToggleBtn.innerHTML = `<span>⇄</span><span>Set as My Team</span>`;
      }
    } else {
      coachRoleSection.classList.add('hidden');
    }
  }

  window.openModal('teamEditModal');
  setTimeout(() => {
    nameInput?.focus();
    nameInput?.select();
  }, 100);
}

export function toggleEditTeamCoachRole() {
  setCoachTeam(currentEditingTeam, true);
  openEditTeamModal(currentEditingTeam);
}

export function renderTeamRosterEditor() {
  const t = teams[currentEditingTeam];
  const listEl = document.getElementById('teamRosterList');
  if (!listEl) return;

  const roster = (t.roster && t.roster.length > 0) ? t.roster : createDefaultRoster();

  listEl.innerHTML = roster.map((p, idx) => `
    <div class="p-1 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-1.5 focus-within:border-amber-400 transition">
      <span class="w-6 h-6 rounded bg-slate-800 text-amber-300 font-mono-sport font-black text-[11px] flex items-center justify-center border border-slate-700 shrink-0">#${p.number}</span>
      <input type="text" id="teamEditRosterInput_${p.number}" data-number="${p.number}" maxlength="3" placeholder="Initials" value="${escapeHtml(p.initials || '')}"
        oninput="this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '')"
        class="team-edit-roster-input w-full bg-slate-900 border border-slate-700/80 focus:border-amber-400 rounded px-2 py-1 text-white font-mono-sport font-bold text-base sm:text-xs uppercase focus:outline-none"
        onkeydown="if(event.key==='Enter'){ const inputs = document.querySelectorAll('.team-edit-roster-input'); if(inputs[${idx + 1}]) inputs[${idx + 1}].focus(); else saveTeamChanges(); }">
    </div>
  `).join('');
}

export function resetRosterToDefault() {
  const t = teams[currentEditingTeam];
  const currentCount = (t.roster && t.roster.length > 0) ? t.roster.length : DEFAULT_SQUAD_SIZE;
  t.roster = createDefaultRoster(currentCount);
  renderTeamRosterEditor();
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

export function selectKitColor(colorHex, borderClass) {
  selectedColor = colorHex;
  selectedBorder = borderClass;
  updateSwatchSelection(colorHex);
}

const COLOR_NAMES = {
  '#f43f5e': 'Red',
  '#0284c7': 'Sky Blue',
  '#2563eb': 'Royal Blue',
  '#eab308': 'Yellow',
  '#16a34a': 'Green',
  '#ea580c': 'Orange',
  '#9333ea': 'Purple',
  '#f8fafc': 'White'
};

export function updateSwatchSelection(activeColor) {
  const colorLabel = document.getElementById('selectedColorNameLabel');
  const otherSide = currentEditingTeam === 'home' ? 'away' : 'home';
  const otherColor = (teams[otherSide]?.color || '').toLowerCase();
  const isClash = activeColor && activeColor.toLowerCase() === otherColor;

  if (colorLabel && activeColor) {
    const baseName = COLOR_NAMES[activeColor.toLowerCase()] || '';
    colorLabel.innerText = isClash ? `${baseName} • Kit Clash (Bibs)` : baseName;
  }

  document.querySelectorAll('.kit-swatch-btn').forEach(btn => {
    const color = btn.getAttribute('data-color');
    const check = btn.querySelector('.swatch-check');
    if (color && color.toLowerCase() === (activeColor || '').toLowerCase()) {
      btn.classList.add('ring-2', 'ring-white');
      check?.classList.remove('hidden');
    } else {
      btn.classList.remove('ring-2', 'ring-white');
      check?.classList.add('hidden');
    }
  });
}

export function saveTeamChanges() {
  const input = document.getElementById('teamNameInput');
  const inputVal = input ? input.value.trim() : '';
  teams[currentEditingTeam].name = inputVal || (currentEditingTeam === 'home' ? 'Home Team' : 'Away Team');
  teams[currentEditingTeam].color = selectedColor;
  teams[currentEditingTeam].border = selectedBorder;

  const rosterInputs = document.querySelectorAll('.team-edit-roster-input');
  if (rosterInputs.length > 0) {
    const updatedRoster = [];
    rosterInputs.forEach(inp => {
      const num = parseInt(inp.getAttribute('data-number'), 10);
      const val = (inp.value || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);
      updatedRoster.push({ number: num, initials: val });
    });
    teams[currentEditingTeam].roster = updatedRoster;
  }

  ensureRotationSync();
  applyTeamVisuals(currentEditingTeam);

  goals.forEach(g => {
    if (g.team === currentEditingTeam) {
      g.teamName = teams[currentEditingTeam].name;
    }
  });
  renderGoalTimeline();
  updateCoachTeamUI();
  if (typeof window.updatePrematchUI === 'function') {
    window.updatePrematchUI(teams.home.name, teams.away.name);
  }
  notifyScoreChange();
  window.closeModal('teamEditModal');
}

export function initPrematchDropdowns() {
  const editSel = document.getElementById('leagueTeamSelect');
  if (editSel) {
    const teamOptions = LEAGUE_TEAMS.map(t => `<option value="${escapeHtml(t.name)}">${escapeHtml(t.name)}</option>`).join('');
    editSel.innerHTML = `<option value="">-- Choose Team from League Fixtures --</option>` + teamOptions;
  }
}

// ---------------- Coach Mode Heads-Up Inline Touchline Bar Handlers ----------------
let activeInlineTag = null;
let inlineTagTimeout = null;
let touchlineToastTimeout = null;

export function selectInlineTag(tag, icon) {
  activeInlineTag = { tag, icon, momentId: null, taggedPlayers: {} };
  clearTimeout(inlineTagTimeout);
  inlineTagTimeout = setTimeout(() => cancelInlineTag(), 6000);
  hapticFeedback('tap');
  renderTouchlineBarUI();
}

export function selectInlinePotmMode() {
  activeInlineTag = 'POTM';
  clearTimeout(inlineTagTimeout);
  inlineTagTimeout = setTimeout(() => cancelInlineTag(), 8000);
  hapticFeedback('tap');
  renderTouchlineBarUI();
}

export function cancelInlineTag() {
  clearTimeout(inlineTagTimeout);
  inlineTagTimeout = null;
  activeInlineTag = null;
  hapticFeedback('tap');
  renderTouchlineBarUI();
}

export function recordInlineMomentForPlayer(playerNumber) {
  if (!activeInlineTag) return;

  if (activeInlineTag === 'POTM') {
    clearTimeout(inlineTagTimeout);
    inlineTagTimeout = null;
    const t = teams[coachTeam];
    const player = playerNumber === 'team'
      ? null
      : ((t.roster || []).find(p => p.number === playerNumber) || { number: playerNumber, initials: '' });
    setCoachPotm(player);
    activeInlineTag = null;
    showTouchlineToast(coachNotes.potm ? `⭐ POTM set: #${coachNotes.potm.number}${coachNotes.potm.initials ? ' ' + coachNotes.potm.initials : ''}` : '⭐ POTM cleared');
    renderTouchlineBarUI();
    return;
  }

  const tag = activeInlineTag.tag;
  const icon = activeInlineTag.icon;
  if (!activeInlineTag.taggedPlayers) activeInlineTag.taggedPlayers = {};

  const t = teams[coachTeam];
  const player = playerNumber === 'team'
    ? null
    : ((t.roster || []).find(p => p.number === playerNumber) || { number: playerNumber, initials: '' });
  const pLabel = player ? (player.initials ? `#${player.number} ${player.initials}` : `#${player.number}`) : 'Entire Team';

  if (activeInlineTag.taggedPlayers[playerNumber]) {
    delete activeInlineTag.taggedPlayers[playerNumber];

    if (activeInlineTag.momentId) {
      const moment = (coachNotes.moments || []).find(m => m.id === activeInlineTag.momentId);
      if (moment) {
        if (playerNumber === 'team') {
          moment.players = (moment.players || []).filter(p => p && p !== 'team');
        } else {
          moment.players = (moment.players || []).filter(p => p && p.number !== playerNumber);
        }
        moment.player = moment.players.length > 0 ? moment.players[0] : null;

        if (moment.players.length === 0 && Object.keys(activeInlineTag.taggedPlayers).length === 0) {
          coachNotes.moments = coachNotes.moments.filter(m => m.id !== activeInlineTag.momentId);
          activeInlineTag.momentId = null;
        }
      }
    }
    showTouchlineToast(`✕ Removed ${pLabel} from ${tag}`);
    renderTouchlineBarUI();
    renderCoachMomentsModal();
    notifyScoreChange();
  } else {
    activeInlineTag.taggedPlayers[playerNumber] = player || 'team';

    if (activeInlineTag.momentId) {
      const moment = (coachNotes.moments || []).find(m => m.id === activeInlineTag.momentId);
      if (moment) {
        if (playerNumber === 'team') {
          if (!moment.players.some(p => !p || p === 'team')) moment.players.push(null);
        } else {
          if (!moment.players.some(p => p && p.number === player.number)) moment.players.push(player);
        }
        moment.player = moment.players[0] || null;
        renderTouchlineBarUI();
        renderCoachMomentsModal();
        notifyScoreChange();
      }
    } else {
      const newMoment = addCoachMoment(tag, icon, player ? [player] : []);
      activeInlineTag.momentId = newMoment.id;
    }

    const currentNames = Object.values(activeInlineTag.taggedPlayers).map(p => {
      if (!p || p === 'team') return 'Entire Team';
      return p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
    }).join(', ');
    showTouchlineToast(`✓ Logged ${icon} ${tag} (${currentNames})`);
  }

  clearTimeout(inlineTagTimeout);
  inlineTagTimeout = setTimeout(() => cancelInlineTag(), 5500);
  renderTouchlineBarUI();
}

export function showTouchlineToast(message) {
  const toast = document.getElementById('coachTouchlineToast');
  const toastText = document.getElementById('coachTouchlineToastText');
  if (toast && toastText) {
    toastText.innerText = message;
    toast.classList.remove('hidden');
    if (touchlineToastTimeout) clearTimeout(touchlineToastTimeout);
    touchlineToastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
}

export function openCoachMomentsModal() {
  renderCoachMomentsModal();
  if (typeof window.openModal === 'function') window.openModal('coachMomentsModal');
}

export function renderCoachMomentsModal() {
  const listEl = document.getElementById('coachMomentsModalList');
  const badgeEl = document.getElementById('coachMomentsModalBadge');
  const moments = coachNotes.moments || [];

  if (badgeEl) badgeEl.innerText = `${moments.length} Moment${moments.length === 1 ? '' : 's'}`;
  if (!listEl) return;

  if (moments.length === 0) {
    listEl.innerHTML = '<div class="text-center py-8 text-slate-500 text-xs italic">No moments tagged yet. Tap quick tags during play to log key coaching moments!</div>';
    return;
  }

  listEl.innerHTML = moments.slice().reverse().map(m => {
    let pLabel = 'Entire Team';
    if (m.players && Array.isArray(m.players) && m.players.length > 0) {
      pLabel = m.players.map(p => {
        if (!p || p === 'team') return 'Entire Team';
        return p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
      }).join(', ');
    } else if (m.player) {
      pLabel = m.player.initials ? `#${m.player.number} ${escapeHtml(m.player.initials)}` : `#${m.player.number}`;
    }
    return `
      <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2 shadow-sm">
        <div class="flex items-center gap-2.5 min-w-0 overflow-hidden">
          <div class="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-base shrink-0">
            ${escapeHtml(m.icon || '📋')}
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-amber-400 font-mono-sport font-black text-xs">${escapeHtml(m.time)}</span>
              <span class="text-slate-400 text-[10px] font-bold">(${escapeHtml(m.period)})</span>
              <span class="font-bold text-white text-xs">${escapeHtml(m.tag)}</span>
            </div>
            <div class="text-[11px] text-amber-300/90 font-mono-sport font-semibold truncate" title="${pLabel}">
              ${pLabel}
            </div>
          </div>
        </div>
        <button type="button" onclick="removeCoachMoment(${m.id})" class="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-500/10 transition shrink-0 cursor-pointer" title="Delete moment">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;
  }).join('');
}

export function copyCoachMoments() {
  const moments = coachNotes.moments || [];
  if (moments.length === 0) {
    showTouchlineToast('No moments to copy yet');
    return;
  }
  const matchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
  let text = `⭐ MATCH ${matchId} MOMENTS (${moments.length}):\n`;
  moments.forEach(m => {
    let pLabel = 'Entire Team';
    if (m.players && Array.isArray(m.players) && m.players.length > 0) {
      pLabel = m.players.map(p => {
        if (!p || p === 'team') return 'Entire Team';
        return p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
      }).join(', ');
    } else if (m.player) {
      pLabel = m.player.initials ? `#${m.player.number} ${m.player.initials}` : `#${m.player.number}`;
    }
    text += `• [${m.time}] (${m.period}) ${m.icon || '⭐'} ${m.tag}: ${pLabel}\n`;
  });
  if (coachNotes.potm) {
    const potm = coachNotes.potm;
    text += `\n⭐ Player of the Match: #${potm.number}${potm.initials ? ' ' + potm.initials : ''}\n`;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showTouchlineToast('📋 Moments copied to clipboard!');
      hapticFeedback('success');
    }).catch(() => fallbackCopyText(text));
  } else {
    fallbackCopyText(text);
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showTouchlineToast('📋 Moments copied to clipboard!');
    hapticFeedback('success');
  } catch (_) {
    showTouchlineToast('Failed to copy moments');
  }
  document.body.removeChild(ta);
}

export function renderCoachNotesPotmPicker() {
  const container = document.getElementById('coachNotesPotmChips');
  if (!container) return;
  const roster = teams[coachTeam]?.roster || createDefaultRoster();
  container.innerHTML = roster.map(p => {
    const isSelected = coachNotes.potm && coachNotes.potm.number === p.number;
    const label = p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
    const btnClass = isSelected
      ? 'py-1 px-2.5 rounded-lg bg-amber-400 text-slate-950 font-black text-xs border border-yellow-200 shadow transition cursor-pointer flex items-center gap-1'
      : 'py-1 px-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700 transition cursor-pointer';
    return `
      <button type="button" onclick="setCoachPotm({ number: ${p.number}, initials: '${escapeHtml(p.initials || '')}' })" class="${btnClass}">
        ${isSelected ? '⭐ ' : ''}<span>${label}</span>
      </button>
    `;
  }).join('');
}

export function openCoachNotesModal() {
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (textarea) textarea.value = coachNotes.notes || '';
  renderCoachNotesPotmPicker();
  hapticFeedback('tap');
  if (window.openModal) window.openModal('coachNotesModal');
  setTimeout(() => textarea?.focus(), 100);
}

export function saveCoachNotesModal() {
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (textarea) coachNotes.notes = textarea.value;
  hapticFeedback('success');
  notifyScoreChange();
  renderTouchlineBarUI();
  if (window.closeModal) window.closeModal('coachNotesModal');
}

export function insertCoachNotesPrompt(promptText) {
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (!textarea) return;
  const current = textarea.value || '';
  textarea.value = current.trim().length > 0 ? `${current.trimEnd()}\n\n${promptText}` : promptText;
  coachNotes.notes = textarea.value;
  notifyScoreChange();
  textarea.focus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
}

export function clearCoachNotesModalText() {
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (textarea) textarea.value = '';
  coachNotes.notes = '';
  notifyScoreChange();
  renderTouchlineBarUI();
  textarea?.focus();
}

export function toggleInlineNotesDrawer() {
  openCoachNotesModal();
}

export function renderTouchlineBarUI() {
  const touchlineBar = document.getElementById('coachTouchlineBar');
  if (touchlineBar) {
    touchlineBar.classList.toggle('hidden', appMode !== 'coach');
  }

  const countBadge = document.getElementById('coachMomentsCountBadge');
  if (countBadge) {
    countBadge.innerText = coachNotes.moments ? coachNotes.moments.length : 0;
  }

  const potmBadge = document.getElementById('coachTouchlinePotmBadge');
  const potmText = document.getElementById('coachTouchlinePotmText');
  if (potmBadge && potmText) {
    if (appMode === 'coach') {
      potmBadge.classList.remove('hidden');
      potmBadge.classList.add('flex');
      if (coachNotes && coachNotes.potm) {
        const p = coachNotes.potm;
        potmText.innerText = `#${p.number}${p.initials ? ' ' + p.initials : ''}`;
        potmBadge.className = 'py-1.5 px-2 rounded-xl bg-amber-400/25 hover:bg-amber-400/35 border-2 border-amber-300 text-amber-200 font-black text-[11px] flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm whitespace-nowrap';
      } else {
        potmText.innerText = 'POTM';
        potmBadge.className = 'py-1.5 px-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/70 text-amber-300 font-extrabold text-[11px] flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm whitespace-nowrap';
      }
    } else {
      potmBadge.classList.add('hidden');
      potmBadge.classList.remove('flex');
    }
  }

  renderCoachMomentsModal();

  const ftPotmCard = document.getElementById('coachTouchlinePotmPrompt');
  const ftPotmChips = document.getElementById('coachTouchlinePotmChips');
  const timerState = getTimerState();
  const isFT = timerState.currentPeriod === 'Full Time';

  if (ftPotmCard && ftPotmChips) {
    if (appMode === 'coach' && isFT) {
      ftPotmCard.classList.remove('hidden');
      const roster = teams[coachTeam]?.roster || [];
      const hasPotm = Boolean(coachNotes.potm);

      ftPotmChips.innerHTML = roster.map(p => {
        const isSelected = coachNotes.potm && coachNotes.potm.number === p.number;
        const label = p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
        const btnClass = isSelected
          ? 'py-1 px-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs border-2 border-yellow-200 shadow scale-105 transition cursor-pointer flex items-center gap-1'
          : 'py-1 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700 transition cursor-pointer';
        return `
          <button type="button" onclick="setCoachPotm({ number: ${p.number}, initials: '${escapeHtml(p.initials || '')}' })" class="${btnClass}">
            ${isSelected ? '⭐ ' : ''}<span>${label}</span>
          </button>
        `;
      }).join('');

      const actionsContainer = document.getElementById('coachTouchlinePotmActions');
      if (actionsContainer) {
        if (hasPotm) {
          actionsContainer.innerHTML = `
            <div class="mt-2 pt-2 border-t border-amber-500/30 flex flex-col gap-1.5 animate-fadeIn">
              <button type="button" onclick="openReportModal()" class="w-full py-2 px-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs rounded-xl shadow flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer">
                <span>📋</span><span>Open Match Report &amp; Share Card ›</span>
              </button>
              <div class="flex items-center justify-between text-[10px] text-amber-300/80 px-0.5">
                <span>⭐ POTM: #${coachNotes.potm.number}${coachNotes.potm.initials ? ' ' + escapeHtml(coachNotes.potm.initials) : ''}</span>
                <button type="button" onclick="toggleFullTimeMomentTags()" class="text-amber-400 hover:text-white font-bold underline cursor-pointer">
                  ${showFullTimeMomentTags ? 'Hide Quick Tags ▴' : 'Show Quick Tags ▾'}
                </button>
              </div>
            </div>
          `;
        } else {
          actionsContainer.innerHTML = `
            <div class="mt-1.5 flex items-center justify-between text-[10px] text-slate-400 px-0.5">
              <span>Tap player to award POTM</span>
              <button type="button" onclick="toggleFullTimeMomentTags()" class="text-amber-400 hover:text-white font-bold underline cursor-pointer">
                ${showFullTimeMomentTags ? 'Hide Quick Tags ▴' : 'Show Quick Tags ▾'}
              </button>
            </div>
          `;
        }
      }
    } else {
      ftPotmCard.classList.add('hidden');
    }
  }

  const defaultRow = document.getElementById('coachTouchlineDefaultRow');
  const activeRow = document.getElementById('coachTouchlineActiveRow');
  const activePrompt = document.getElementById('coachTouchlineActivePrompt');
  const chipsEl = document.getElementById('coachTouchlinePlayerChips');

  if (defaultRow && activeRow) {
    if (activeInlineTag) {
      defaultRow.classList.add('hidden');
      activeRow.classList.remove('hidden');

      if (activeInlineTag === 'POTM') {
        if (activePrompt) {
          activePrompt.innerHTML = `<span>⭐ <strong>Select POTM</strong> (Tap again to clear):</span>`;
        }
        if (chipsEl) {
          const roster = teams[coachTeam]?.roster || [];
          chipsEl.innerHTML = roster.map(p => {
            const isSelected = coachNotes.potm && coachNotes.potm.number === p.number;
            const label = p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
            const btnClass = isSelected
              ? 'py-1.5 px-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs border-2 border-yellow-200 shadow-md scale-105 transition cursor-pointer flex items-center gap-1'
              : 'py-1.5 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700 transition cursor-pointer';
            return `
              <button type="button" onclick="recordInlineMomentForPlayer(${p.number})" class="${btnClass}">
                ${isSelected ? '⭐ ' : ''}<span>${label}</span>
              </button>
            `;
          }).join('');
        }
      } else {
        const tagged = activeInlineTag.taggedPlayers || {};
        const countTagged = Object.keys(tagged).length;
        if (activePrompt) {
          activePrompt.innerHTML = `<span>Who showed <strong>${escapeHtml(activeInlineTag.icon)} ${escapeHtml(activeInlineTag.tag)}</strong>?${countTagged > 0 ? ` <span class="text-amber-400 font-bold">(${countTagged} tagged)</span>` : ''}</span>`;
        }
        if (chipsEl) {
          const roster = teams[coachTeam]?.roster || [];
          const isTeamTagged = Boolean(tagged['team']);
          const tagLower = (activeInlineTag.tag || '').toLowerCase();
          const allowsEntireTeam = !tagLower.includes('save') && !tagLower.includes('shot');

          let html = '';
          if (allowsEntireTeam) {
            html += `
              <button type="button" onclick="recordInlineMomentForPlayer('team')" class="${isTeamTagged ? 'py-1.5 px-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs border-2 border-yellow-200 shadow-md scale-105 transition cursor-pointer flex items-center gap-1' : 'py-1.5 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-black text-xs border border-slate-600 transition cursor-pointer'}">
                ${isTeamTagged ? '✓ ' : ''}👥 Entire Team
              </button>
            `;
          }
          roster.forEach(p => {
            const isTagged = Boolean(tagged[p.number]);
            const label = p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
            const btnClass = isTagged
              ? 'py-1.5 px-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs border-2 border-yellow-200 shadow-md scale-105 transition cursor-pointer flex items-center gap-1'
              : 'py-1.5 px-2 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs border border-slate-700 transition cursor-pointer';
            html += `
              <button type="button" onclick="recordInlineMomentForPlayer(${p.number})" class="${btnClass}">
                ${isTagged ? '✓ ' : ''}${label}
              </button>
            `;
          });
          chipsEl.innerHTML = html;
        }
      }
    } else {
      activeRow.classList.add('hidden');
      defaultRow.classList.toggle('hidden', Boolean(appMode === 'coach' && isFT && !showFullTimeMomentTags));
    }
  }

  const notesToggleBtn = document.getElementById('coachNotesToggleBtn');
  if (notesToggleBtn) {
    const hasNotes = Boolean(coachNotes.notes && coachNotes.notes.trim().length > 0);
    if (hasNotes) {
      notesToggleBtn.className = 'py-1.5 px-2 rounded-xl bg-amber-500/20 border border-amber-400/80 text-amber-300 font-bold text-[11px] flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm whitespace-nowrap';
      notesToggleBtn.innerHTML = `<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg><span>Notes</span><span class="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse shrink-0"></span>`;
    } else {
      notesToggleBtn.className = 'py-1.5 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-bold text-[11px] flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95 whitespace-nowrap';
      notesToggleBtn.innerHTML = `<svg class="w-3.5 h-3.5 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg><span>Notes</span>`;
    }
  }
}

export const renderMatchNotesUI = renderTouchlineBarUI;
export const selectMomentTag = selectInlineTag;
export const cancelMomentTagSelection = cancelInlineTag;
export const recordMomentForPlayer = recordInlineMomentForPlayer;
export function openMatchNotesModal() { openCoachNotesModal(); }
