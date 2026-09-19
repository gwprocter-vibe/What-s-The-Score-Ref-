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

export const MAX_SQUAD_SIZE = 8;

export function createDefaultRoster() {
  const list = [];
  for (let i = 1; i <= MAX_SQUAD_SIZE; i++) {
    list.push({ number: i, initials: '' });
  }
  return list;
}

let appMode = 'referee'; // 'referee' | 'coach'
let isPausedGoalAlertActive = false;
try {
  const savedMode = localStorage.getItem('whatsthescoreref_app_mode');
  if (savedMode === 'coach' || savedMode === 'referee') {
    appMode = savedMode;
  }
} catch (e) {}

let coachTeam = 'home'; // 'home' | 'away'
try {
  const savedCoachTeam = localStorage.getItem('whatsthescoreref_coach_team');
  if (savedCoachTeam === 'home' || savedCoachTeam === 'away') {
    coachTeam = savedCoachTeam;
  }
} catch (e) {}

export function getCoachTeam() {
  return coachTeam;
}

export function setCoachTeam(team, showToast = true) {
  const prev = coachTeam;
  const next = team === 'away' ? 'away' : 'home';

  if (prev !== next) {
    // If player initials are already added on the current coach team, transfer them to the other team
    const prevRoster = teams[prev]?.roster || [];
    const prevHasInitials = prevRoster.some(p => p.initials && p.initials.trim().length > 0);
    const nextRoster = teams[next]?.roster || [];
    const nextHasInitials = nextRoster.some(p => p.initials && p.initials.trim().length > 0);

    if (prevHasInitials && !nextHasInitials) {
      teams[next].roster = JSON.parse(JSON.stringify(prevRoster));
      teams[prev].roster = createDefaultRoster();
    } else if (prevHasInitials && nextHasInitials) {
      // If both had custom initials, swap them so initials move with the coach
      const tempRoster = JSON.parse(JSON.stringify(teams[prev].roster));
      teams[prev].roster = JSON.parse(JSON.stringify(teams[next].roster));
      teams[next].roster = tempRoster;
    }
  }

  coachTeam = next;
  try {
    localStorage.setItem('whatsthescoreref_coach_team', coachTeam);
  } catch (e) {}
  updateCoachTeamUI();
  renderTouchlineBarUI();
  notifyScoreChange();
  if (showToast && prev !== coachTeam) {
    showAppModeToast(`⭐ Coach's Team: ${teams[coachTeam]?.name || (coachTeam === 'home' ? 'Home' : 'Away')}`, 'coach');
  }
  checkCoachSquadPrompt();
}

export function toggleCoachTeam() {
  const next = coachTeam === 'home' ? 'away' : 'home';
  setCoachTeam(next, true);
  hapticFeedback('tap');
  return coachTeam;
}

export function updateCoachTeamUI() {
  const isCoach = appMode === 'coach';

  // 1. Score Card Star next to Team Name
  const homeStar = document.getElementById('homeCoachStar');
  const awayStar = document.getElementById('awayCoachStar');

  if (homeStar) {
    homeStar.classList.toggle('hidden', !(isCoach && coachTeam === 'home'));
  }
  if (awayStar) {
    awayStar.classList.toggle('hidden', !(isCoach && coachTeam === 'away'));
  }

  // 2. Touchline Bar Team Switcher Button
  const touchlineTeamBtn = document.getElementById('coachTouchlineTeamBtn');
  if (touchlineTeamBtn) {
    const coachTeamName = teams[coachTeam]?.name || (coachTeam === 'home' ? 'Home' : 'Away');
    touchlineTeamBtn.innerHTML = `<span>⭐</span><span class="truncate max-w-[85px] sm:max-w-[130px] font-black">${coachTeamName}</span><span class="text-[9px] text-amber-400/70">⇄</span>`;
    touchlineTeamBtn.title = `Currently coaching: ${coachTeamName}. Tap to switch to ${coachTeam === 'home' ? 'Away' : 'Home'}.`;
  }

  // 3. Quick Tools Drawer Coach Team Buttons
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
}

export function selectSquadModalTeam(team) {
  saveSquadInitialsFromModalInputs();
  setCoachTeam(team, false);
  openSquadInitialsModal(team);
}

export function openSquadInitialsModal(team = coachTeam) {
  const container = document.getElementById('squadInitialsInputsContainer');
  const subtitle = document.getElementById('squadInitialsSubtitle');
  const homeBtn = document.getElementById('squadInitialsHomeBtn');
  const awayBtn = document.getElementById('squadInitialsAwayBtn');
  const homeLabel = document.getElementById('squadInitialsHomeLabel');
  const awayLabel = document.getElementById('squadInitialsAwayLabel');

  const t = teams[team] || teams.home;
  if (subtitle) {
    subtitle.innerText = `${t.name} • Matchday Logging`;
  }

  if (homeLabel) homeLabel.innerText = teams.home?.name || 'Home Team';
  if (awayLabel) awayLabel.innerText = teams.away?.name || 'Away Team';

  if (homeBtn && awayBtn) {
    if (coachTeam === 'home') {
      homeBtn.className = 'py-2 px-2.5 rounded-lg font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-amber-500 text-slate-950 shadow';
      homeBtn.innerHTML = `<span>⭐</span><span class="truncate">${teams.home?.name || 'Home Team'}</span>`;
      awayBtn.className = 'py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700';
      awayBtn.innerHTML = `<span class="truncate">${teams.away?.name || 'Away Team'}</span>`;
    } else {
      homeBtn.className = 'py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700';
      homeBtn.innerHTML = `<span class="truncate">${teams.home?.name || 'Home Team'}</span>`;
      awayBtn.className = 'py-2 px-2.5 rounded-lg font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer bg-amber-500 text-slate-950 shadow';
      awayBtn.innerHTML = `<span>⭐</span><span class="truncate">${teams.away?.name || 'Away Team'}</span>`;
    }
  }

  if (!container) return;

  const roster = (t.roster && t.roster.length > 0) ? t.roster : createDefaultRoster();
  container.innerHTML = roster.map((p, idx) => {
    return `
      <div class="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2">
        <span class="w-7 h-7 rounded-lg bg-slate-800 text-amber-300 font-mono-sport font-black text-xs flex items-center justify-center border border-slate-700 shrink-0">#${p.number}</span>
        <input type="text" id="squadInitInput_${p.number}" data-number="${p.number}" maxlength="3" placeholder="e.g. JD" value="${p.initials || ''}"
          oninput="this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '')"
          class="squad-init-input w-full bg-slate-900 border border-slate-700 focus:border-amber-400 rounded-lg px-2.5 py-1.5 text-white font-mono-sport font-bold text-xs uppercase focus:outline-none"
          onkeydown="if(event.key==='Enter'){ const inputs = document.querySelectorAll('.squad-init-input'); if(inputs[${idx + 1}]) inputs[${idx + 1}].focus(); else saveSquadInitials(); }">
      </div>
    `;
  }).join('');

  if (window.openModal) {
    window.openModal('squadInitialsModal');
  }
  setTimeout(() => {
    const firstInput = container.querySelector('input');
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
  if (window.closeModal) {
    window.closeModal('squadInitialsModal');
  }
  showTouchlineToast(`⭐ ${t.name} squad initials saved`);
}

export function getAppMode() {
  return appMode;
}

export function showAppModeToast(message, mode = 'coach') {
  // Mode switch toasts removed per user preference (mode is clearly indicated in header)
}

export function setAppMode(mode, showToast = false) {
  const prevMode = appMode;
  appMode = mode === 'coach' ? 'coach' : 'referee';
  try {
    localStorage.setItem('whatsthescoreref_app_mode', appMode);
  } catch (e) {}
  updateAppModeUI();
  notifyScoreChange();
  if (appMode === 'coach') {
    checkCoachSquadPrompt();
  }
}

export let coachNotes = {
  potm: null,   // e.g. { number: 9, initials: 'JD' }
  notes: '',
  moments: []   // [ { id, time, period, tag, icon, player } ]
};

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
  renderMatchNotesUI();
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
    tag: tag,
    icon: icon,
    player: playerList.length === 1 ? playerList[0] : (playerList.length === 0 ? null : playerList[0]),
    players: playerList // [{ number, initials }] or [] for entire team
  };
  coachNotes.moments.push(moment);
  hapticFeedback('success');
  renderMatchNotesUI();
  renderCoachMomentsModal();
  notifyScoreChange();
  return moment;
}

export function removeCoachMoment(id) {
  coachNotes.moments = coachNotes.moments.filter(m => m.id !== id);
  hapticFeedback('tap');
  renderMatchNotesUI();
  renderCoachMomentsModal();
  notifyScoreChange();
}

export function updateAppModeUI() {
  const refBtn = document.getElementById('appModeRefBtn');
  const coachBtn = document.getElementById('appModeCoachBtn');
  const indicator = document.getElementById('appModeIndicatorBadge');
  const drawerBadge = document.getElementById('quickToolsRoleBadge');
  const touchlineBar = document.getElementById('coachTouchlineBar');

  if (appMode === 'coach') {
    if (document.body) {
      document.body.classList.add('mode-coach');
      document.body.classList.remove('mode-referee');
    }
    if (coachBtn) {
      coachBtn.className = 'p-2.5 rounded-xl font-black text-xs flex items-center gap-2 transition cursor-pointer shadow bg-amber-500 text-slate-950 border border-amber-300';
    }
    if (refBtn) {
      refBtn.className = 'p-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer text-slate-400 hover:text-white bg-slate-900 border border-slate-800';
    }
    if (indicator) {
      indicator.className = 'h-8 px-2 rounded-xl text-[10px] font-black uppercase font-mono-sport flex items-center gap-1 transition cursor-pointer active:scale-95 shadow-sm bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:border-amber-400';
      indicator.title = 'Current Role: Coach (Tap to toggle)';
      indicator.innerHTML = '<span>📋</span><span id="appModeIndicatorText">COACH</span>';
    }
    if (drawerBadge) {
      drawerBadge.textContent = 'COACH';
      drawerBadge.className = 'px-2 py-0.5 rounded-lg font-black text-[10px] font-mono-sport uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40';
    }
    if (touchlineBar) {
      touchlineBar.classList.remove('hidden');
    }
  } else {
    if (document.body) {
      document.body.classList.add('mode-referee');
      document.body.classList.remove('mode-coach');
    }
    if (refBtn) {
      refBtn.className = 'p-2.5 rounded-xl font-black text-xs flex items-center gap-2 transition cursor-pointer shadow bg-emerald-500 text-slate-950 border border-emerald-300';
    }
    if (coachBtn) {
      coachBtn.className = 'p-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition cursor-pointer text-slate-400 hover:text-white bg-slate-900 border border-slate-800';
    }
    if (indicator) {
      indicator.className = 'h-8 px-2 rounded-xl text-[10px] font-black uppercase font-mono-sport flex items-center gap-1 transition cursor-pointer active:scale-95 shadow-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400';
      indicator.title = 'Current Role: Referee (Tap to toggle)';
      indicator.innerHTML = '<span>⏱️</span><span id="appModeIndicatorText">REF</span>';
    }
    if (drawerBadge) {
      drawerBadge.textContent = 'REFEREE';
      drawerBadge.className = 'px-2 py-0.5 rounded-lg font-black text-[10px] font-mono-sport uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
    }
    if (touchlineBar) {
      touchlineBar.classList.add('hidden');
    }
  }
  updateCoachTeamUI();
  renderTouchlineBarUI();
  renderRefereeHelperBar();
  if (appMode === 'coach') {
    checkCoachSquadPrompt();
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
let kickoffTeam = 'home'; // 'home' | 'away'
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
  if (kickoffConfirmTimeout) { clearTimeout(kickoffConfirmTimeout); kickoffConfirmTimeout = null; }
  const el = document.getElementById('refHelperKickoffConfirmAlert');
  if (el) el.classList.add('hidden');
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

  // Badges only show in Referee Mode when kickoff has been chosen and match is not Full Time
  if (appMode !== 'referee' || !kickoffChosen || isFT) {
    homeBadge.classList.add('hidden');
    awayBadge.classList.add('hidden');
    return;
  }

  const is2ndHalf = currentPeriod === '2nd Half';
  const activeKickoffTeam = is2ndHalf ? (kickoffTeam === 'home' ? 'away' : 'home') : kickoffTeam;

  if (activeKickoffTeam === 'home') {
    homeBadge.classList.remove('hidden');
    awayBadge.classList.add('hidden');
  } else {
    homeBadge.classList.add('hidden');
    awayBadge.classList.remove('hidden');
  }
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
      if (e.touches && e.touches.length > 0) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      } else {
        startX = e.clientX;
        startY = e.clientY;
      }
      badge.classList.add('scale-95', 'brightness-125');
      if (pressTimer) clearTimeout(pressTimer);
      pressTimer = setTimeout(() => {
        isLongPress = true;
        badge.classList.remove('scale-95', 'brightness-125');
        toggleKickoffTeam();
      }, 500);
    };

    const cancelPress = (e) => {
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
      const currentX = e.touches ? e.touches[0].clientX : e.clientX;
      const currentY = e.touches ? e.touches[0].clientY : e.clientY;
      if (Math.hypot(currentX - startX, currentY - startY) > 10) {
        cancelPress(e);
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

  if (appMode !== 'referee') {
    bar.classList.add('hidden');
    return;
  }
  bar.classList.remove('hidden');

  const defaultContent = document.getElementById('refHelperDefaultContent');
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
  const pausedGoalAlert = document.getElementById('refHelperPausedGoalAlert');
  const forgotResumeAlert = document.getElementById('refHelperForgotResumeAlert');
  const kickoffConfirmAlert = document.getElementById('refHelperKickoffConfirmAlert');
  const kickoffConfirmMsgEl = document.getElementById('refHelperKickoffConfirmMsg');
  const lostTimeBadge = document.getElementById('refHelperLostTimeBadge');

  const oneMinuteMsg = document.getElementById('refHelperOneMinuteMsg');
  const ppMsg = document.getElementById('refHelperPowerPlayMsg');

  const timerState = getTimerState();
  const currentPeriod = timerState.currentPeriod || '1st Half';
  const is2ndHalf = currentPeriod === '2nd Half';
  const isFT = currentPeriod === 'Full Time';

  // Update team names on Kick-off prompt buttons
  if (kickoffHomeBtn) {
    kickoffHomeBtn.innerText = teams.home?.name || 'Home Team';
  }
  if (kickoffAwayBtn) {
    kickoffAwayBtn.innerText = teams.away?.name || 'Away Team';
  }

  // Update idle status info
  const targetMin = Math.round((timerState.targetHalfSeconds || 900) / 60);
  if (periodTargetText) {
    periodTargetText.innerText = `${targetMin}m Target`;
  }
  const prematchBtn = document.getElementById('refHelperPrematchBtn');
  const idleStatus = document.getElementById('refHelperIdleStatus');

  if (isFT) {
    if (prematchBtn) prematchBtn.classList.add('hidden');
    if (idleStatus) idleStatus.classList.remove('hidden');
    if (idleStatusText) idleStatusText.innerText = 'Match Complete';
    if (idleDot) idleDot.className = 'w-2 h-2 rounded-full bg-purple-400 shrink-0';
  } else if (timerState.isTimerRunning) {
    if (prematchBtn) prematchBtn.classList.add('hidden');
    if (idleStatus) idleStatus.classList.remove('hidden');
    if (idleStatusText) idleStatusText.innerText = 'Match in progress';
    if (idleDot) idleDot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0';
  } else if (timerState.hasHalfStarted) {
    if (prematchBtn) prematchBtn.classList.add('hidden');
    if (idleStatus) idleStatus.classList.remove('hidden');
    if (idleStatusText) idleStatusText.innerText = 'Clock paused';
    if (idleDot) idleDot.className = 'w-2 h-2 rounded-full bg-amber-400 shrink-0';
  } else {
    // Pre-match state before kickoff
    if (prematchBtn) prematchBtn.classList.remove('hidden');
    if (idleStatus) idleStatus.classList.add('hidden');
  }

  // Update KO badges in score boxes
  updateKickoffBadges();

  // Alert conditions
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
  const isPowerPlay = absDiff >= 4 && !isPowerPlayDismissed;

  let activeAlertCount = 0;

  // Kickoff confirmation (brief auto-dismissing confirmation row)
  if (kickoffConfirmActive && kickoffConfirmAlert) {
    if (kickoffConfirmMsgEl) kickoffConfirmMsgEl.innerText = kickoffConfirmMessage;
    kickoffConfirmAlert.classList.remove('hidden');
    activeAlertCount++;
  } else if (kickoffConfirmAlert) {
    kickoffConfirmAlert.classList.add('hidden');
  }

  if (isPausedGoal && pausedGoalAlert) {
    pausedGoalAlert.classList.remove('hidden');
    activeAlertCount++;
  } else if (pausedGoalAlert) {
    pausedGoalAlert.classList.add('hidden');
  }

  if (isForgotResume && forgotResumeAlert) {
    if (lostTimeBadge) {
      lostTimeBadge.innerText = `+${formatTime(timerState.stoppageSeconds)} lost`;
    }
    forgotResumeAlert.classList.remove('hidden');
    activeAlertCount++;
  } else if (forgotResumeAlert) {
    forgotResumeAlert.classList.add('hidden');
  }

  if (isOneMinute && oneMinuteAlert) {
    if (oneMinuteMsg) {
      oneMinuteMsg.innerText = `Final minute of ${currentPeriod}`;
    }
    oneMinuteAlert.classList.remove('hidden');
    activeAlertCount++;
  } else if (oneMinuteAlert) {
    oneMinuteAlert.classList.add('hidden');
  }

  if (isSubAlert && subAlert) {
    subAlert.classList.remove('hidden');
    activeAlertCount++;
  } else if (subAlert) {
    subAlert.classList.add('hidden');
  }

  if (isPowerPlay && ppAlert) {
    if (ppMsg) {
      const trailingTeamName = diff >= 4 ? (teams.away.name || 'Away Team') : (teams.home.name || 'Home Team');
      ppMsg.innerText = `${trailingTeamName} may field +1 player`;
    }
    ppAlert.classList.remove('hidden');
    activeAlertCount++;
  } else if (ppAlert) {
    ppAlert.classList.add('hidden');
  }

  // If ANY alert is active, hide default container; otherwise show it
  if (activeAlertCount > 0) {
    if (defaultContent) defaultContent.classList.add('hidden');
  } else {
    if (defaultContent) defaultContent.classList.remove('hidden');
    // Inside default container: show kick-off prompt if in 1st half, half started, and kick-off not chosen
    const shouldPromptKickoff = !kickoffChosen && timerState.hasHalfStarted && currentPeriod === '1st Half';
    if (shouldPromptKickoff) {
      if (kickoffPrompt) kickoffPrompt.classList.remove('hidden');
      if (idleContent) idleContent.classList.add('hidden');
    } else {
      if (kickoffPrompt) kickoffPrompt.classList.add('hidden');
      if (idleContent) idleContent.classList.remove('hidden');
    }
  }

  // Update header count badge
  const countBadge = document.getElementById('refHelperAlertCountBadge');
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
  const ppAlert = document.getElementById('refHelperPowerPlayAlert');
  if (ppAlert) ppAlert.classList.add('hidden');
  renderRefereeHelperBar();
  hapticFeedback('tap');
}

export function dismissPausedGoalToast() {
  isPausedGoalAlertActive = false;
  const pausedAlert = document.getElementById('refHelperPausedGoalAlert');
  if (pausedAlert) pausedAlert.classList.add('hidden');
  renderRefereeHelperBar();
}

export function resumeFromToast() {
  dismissPausedGoalToast();
  if (typeof window !== 'undefined' && typeof window.startTimer === 'function') {
    window.startTimer();
  }
}

export function checkPowerPlay() {
  const diff = homeScore - awayScore;
  if (Math.abs(diff) < 4) {
    isPowerPlayDismissed = false;
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
  return {
    homeScore,
    awayScore,
    halfTimeScores,
    kickoffTeam,
    kickoffChosen,
    coachTeam,
    goals,
    appMode,
    coachNotes: {
      potm: coachNotes.potm ? { ...coachNotes.potm } : null,
      notes: coachNotes.notes || '',
      moments: [...(coachNotes.moments || [])]
    },
    teams: {
      home: { ...teams.home, roster: [...(teams.home.roster || [])] },
      away: { ...teams.away, roster: [...(teams.away.roster || [])] }
    }
  };
}

export function toggleAppMode() {
  const nextMode = appMode === 'coach' ? 'referee' : 'coach';
  setAppMode(nextMode, true);
  return nextMode;
}

export function restoreScoreState(state) {
  if (!state) return;
  homeScore = state.homeScore || 0;
  awayScore = state.awayScore || 0;
  halfTimeScores = state.halfTimeScores || { home: null, away: null };
  kickoffTeam = state.kickoffTeam || 'home';
  kickoffChosen = Boolean(state.kickoffChosen);
  if (state.coachTeam === 'home' || state.coachTeam === 'away') {
    coachTeam = state.coachTeam;
  }
  goals = state.goals ? [...state.goals] : [];
  isPowerPlayDismissed = Boolean(state.isPowerPlayDismissed);
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
  const coachToast = document.getElementById('coachTouchlineToast');
  if (coachToast) coachToast.classList.add('hidden');

  if (!isPowerPlayDismissed && (Math.abs(homeScore - awayScore) < 4)) {
    document.getElementById('refHelperPowerPlayAlert')?.classList.add('hidden');
  }
  if (!isPausedGoalAlertActive) {
    document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
    document.getElementById('pausedGoalToast')?.classList.add('hidden');
  }

  // Note: appMode is a persistent user role and is NEVER overridden by match score state
  if (state.coachNotes) {
    coachNotes = {
      potm: state.coachNotes.potm ? { ...state.coachNotes.potm } : null,
      notes: state.coachNotes.notes || '',
      moments: state.coachNotes.moments ? [...state.coachNotes.moments] : []
    };
  } else {
    coachNotes = { potm: null, notes: '', moments: [] };
  }
  if (state.teams) {
    teams.home = {
      ...state.teams.home,
      roster: state.teams.home.roster && state.teams.home.roster.length > 0 ? [...state.teams.home.roster].slice(0, MAX_SQUAD_SIZE) : createDefaultRoster()
    };
    teams.away = {
      ...state.teams.away,
      roster: state.teams.away.roster && state.teams.away.roster.length > 0 ? [...state.teams.away.roster].slice(0, MAX_SQUAD_SIZE) : createDefaultRoster()
    };
  }

  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = homeScore;
  if (awayScoreEl) awayScoreEl.innerText = awayScore;

  applyTeamVisuals('home');
  applyTeamVisuals('away');
  renderGoalTimeline();
  updatePrematchDropdownValues();
  updateAppModeUI();
  renderMatchNotesUI();
  renderRefereeHelperBar();
  notifyScoreChange();
}

export function resetScoreState() {
  homeScore = 0;
  awayScore = 0;
  halfTimeScores = { home: null, away: null };
  kickoffTeam = 'home';
  kickoffChosen = false;
  goals = [];
  isPowerPlayDismissed = false;
  isPausedGoalAlertActive = false;
  activeInlineTag = null;
  if (inlineTagTimeout) {
    clearTimeout(inlineTagTimeout);
    inlineTagTimeout = null;
  }
  if (matchToastTimeout) {
    clearTimeout(matchToastTimeout);
    matchToastTimeout = null;
  }
  if (kickoffConfirmTimeout) {
    clearTimeout(kickoffConfirmTimeout);
    kickoffConfirmTimeout = null;
  }
  kickoffConfirmActive = false;
  kickoffConfirmMessage = '';
  const matchToast = document.getElementById('matchNotificationToast');
  if (matchToast) {
    matchToast.classList.remove('opacity-100', 'translate-y-0');
    matchToast.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
  }
  const coachToast = document.getElementById('coachTouchlineToast');
  if (coachToast) coachToast.classList.add('hidden');

  document.getElementById('refHelperPowerPlayAlert')?.classList.add('hidden');
  document.getElementById('refHelperPausedGoalAlert')?.classList.add('hidden');
  document.getElementById('refHelperKickoffConfirmAlert')?.classList.add('hidden');
  document.getElementById('pausedGoalToast')?.classList.add('hidden');

  coachNotes = { potm: null, notes: '', moments: [] };
  teams.home.name = 'Home Team';
  teams.away.name = 'Away Team';

  const homeScoreEl = document.getElementById('homeScoreDisplay');
  const awayScoreEl = document.getElementById('awayScoreDisplay');
  if (homeScoreEl) homeScoreEl.innerText = 0;
  if (awayScoreEl) awayScoreEl.innerText = 0;
  renderRefereeHelperBar();

  applyTeamVisuals('home');
  applyTeamVisuals('away');
  renderGoalTimeline();
  updatePrematchDropdownValues();
  renderMatchNotesUI();
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

let pendingAttributionTeam = 'home';
let pendingAttributionExistingIndex = null;
let pendingAttributionScorer = null;
let pendingAttributionAssist = null;
let pendingAttributionStage = 1; // 1: Scorer, 2: Assist

export function executeDirectGoal(team, attribution = null) {
  const timerState = getTimerState();
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
    scoreAway: awayScore,
    scorer: attribution ? attribution.scorer : null,
    assist: attribution ? attribution.assist : null,
    isOwnGoal: attribution ? Boolean(attribution.isOwnGoal) : false
  });

  renderGoalTimeline();
  notifyScoreChange();

  // Safeguard: If referee logs a goal while clock is paused, prompt auto-resume!
  if (!timerState.isTimerRunning && timerState.currentPeriod !== 'Full Time') {
    isPausedGoalAlertActive = true;
    renderRefereeHelperBar();
    document.getElementById('pausedGoalToast')?.classList.remove('hidden');
  }
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

  if (appMode === 'coach') {
    if (team === coachTeam) {
      openGoalAttributionModal(team);
    } else {
      executeDirectGoal(team);
    }
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
  if (window.openModal) {
    window.openModal('goalAttributionModal');
  }
}

export function openGoalAttributionForExistingGoal(index) {
  if (index < 0 || index >= goals.length) return;
  const g = goals[index];
  openGoalAttributionModal(g.team, index);
}

export function renderAttributionModal() {
  const team = pendingAttributionTeam;
  const t = teams[team] || { name: team === 'home' ? 'Home Team' : 'Away Team', color: '#f43f5e', roster: [] };
  const teamName = t.name || (team === 'home' ? 'Home Team' : 'Away Team');
  const roster = (t.roster && t.roster.length > 0) ? t.roster : createDefaultRoster();
  
  const titleEl = document.getElementById('attributionModalTitle');
  const teamDot = document.getElementById('attributionTeamDot');
  const teamNameEl = document.getElementById('attributionTeamName');
  const stageDescEl = document.getElementById('attributionStageDesc');
  const chipContainer = document.getElementById('attributionChipContainer');
  const stepIndicator = document.getElementById('attributionStepIndicator');
  const backBtn = document.getElementById('attributionBackBtn');
  const quickSkipBtn = document.getElementById('attributionQuickSkipBtn');

  if (teamDot) teamDot.style.backgroundColor = t.color;
  if (teamNameEl) teamNameEl.innerText = teamName;

  if (titleEl) {
    if (pendingAttributionExistingIndex !== null) {
      titleEl.innerText = `Edit Goal (${goals[pendingAttributionExistingIndex]?.time || ''})`;
    } else {
      titleEl.innerText = `Goal for ${teamName}!`;
    }
  }

  if (pendingAttributionStage === 1) {
    if (stepIndicator) stepIndicator.innerText = 'STEP 1 OF 2';
    if (stageDescEl) stageDescEl.innerText = 'Who scored the goal? (Tap initials/number)';
    if (backBtn) backBtn.classList.add('hidden');
    if (quickSkipBtn) {
      quickSkipBtn.innerText = pendingAttributionExistingIndex !== null ? 'Clear Player Credit' : 'Skip (Uncredited Goal)';
    }

    if (chipContainer) {
      chipContainer.innerHTML = roster.map(player => {
        const displayLabel = player.initials ? `#${player.number} ${player.initials}` : `#${player.number}`;
        const isSelected = pendingAttributionScorer && pendingAttributionScorer.number === player.number;
        const selClass = isSelected ? 'bg-emerald-500 text-slate-950 border-emerald-300 font-black scale-105 shadow-md' : 'bg-slate-900 hover:bg-slate-850 text-slate-200 border-slate-700 font-bold';

        return `
          <button type="button" onclick="window.selectAttributionScorer(${player.number})" class="p-2.5 rounded-xl border flex items-center justify-center text-xs transition active:scale-95 cursor-pointer ${selClass}">
            <span>${displayLabel}</span>
          </button>
        `;
      }).join('');
    }
  } else {
    // Stage 2: Assist
    if (stepIndicator) stepIndicator.innerText = 'STEP 2 OF 2';
    const scorerLabel = pendingAttributionScorer.initials ? `#${pendingAttributionScorer.number} ${pendingAttributionScorer.initials}` : `#${pendingAttributionScorer.number}`;
    if (stageDescEl) stageDescEl.innerHTML = `Goal by <strong class="text-emerald-400">${scorerLabel}</strong>. Who assisted?`;
    if (backBtn) backBtn.classList.remove('hidden');
    if (quickSkipBtn) quickSkipBtn.innerText = 'Solo Goal / No Assist';

    if (chipContainer) {
      const candidates = roster.filter(p => !pendingAttributionScorer || p.number !== pendingAttributionScorer.number);
      chipContainer.innerHTML = candidates.map(player => {
        const displayLabel = player.initials ? `#${player.number} ${player.initials}` : `#${player.number}`;
        const isSelected = pendingAttributionAssist && pendingAttributionAssist.number === player.number;
        const selClass = isSelected ? 'bg-sky-500 text-slate-950 border-sky-300 font-black scale-105 shadow-md' : 'bg-slate-900 hover:bg-slate-850 text-slate-200 border-slate-700 font-bold';

        return `
          <button type="button" onclick="window.selectAttributionAssist(${player.number})" class="p-2.5 rounded-xl border flex items-center justify-center text-xs transition active:scale-95 cursor-pointer ${selClass}">
            <span>${displayLabel}</span>
          </button>
        `;
      }).join('');
    }
  }
}

export function selectAttributionScorer(playerNumber) {
  const t = teams[pendingAttributionTeam];
  const roster = t.roster || [];
  const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
  pendingAttributionScorer = player;
  pendingAttributionStage = 2;
  hapticFeedback('tap');
  renderAttributionModal();
}

export function selectAttributionAssist(playerNumber) {
  const t = teams[pendingAttributionTeam];
  const roster = t.roster || [];
  const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
  pendingAttributionAssist = player;
  hapticFeedback('success');
  completeAttribution();
}

export function skipGoalAssist() {
  pendingAttributionAssist = null;
  hapticFeedback('tap');
  completeAttribution();
}

export function attributionBackToScorer() {
  pendingAttributionStage = 1;
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
    isOwnGoal: isOwnGoal
  });
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

// Dynamic Undo Visibility & Tap Hint Toggle: Dim/hide until an event (like a goal) is actually logged
export function updateUndoButtons() {
  const homeUndo = document.getElementById('homeUndoBtn');
  const awayUndo = document.getElementById('awayUndoBtn');
  const homeTapHint = document.getElementById('homeTapHint');
  const awayTapHint = document.getElementById('awayTapHint');

  // When goals are logged, hide "TAP TO ADD GOAL" hint to keep card spacious
  if (homeTapHint) {
    if (homeScore > 0) homeTapHint.classList.add('hidden');
    else homeTapHint.classList.remove('hidden');
  }
  if (awayTapHint) {
    if (awayScore > 0) awayTapHint.classList.add('hidden');
    else awayTapHint.classList.remove('hidden');
  }

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
  const homeChipsEl = document.getElementById('homeGoalChips');
  const awayChipsEl = document.getElementById('awayGoalChips');
  const homeBadgeEl = document.getElementById('homeGoalCountBadge');
  const awayBadgeEl = document.getElementById('awayGoalCountBadge');

  if (modalBadgeEl) modalBadgeEl.innerText = `${goals.length} Goal${goals.length === 1 ? '' : 's'}`;

  // Update undo buttons visibility based on score
  updateUndoButtons();

  const homeGoals = goals.filter(g => g.team === 'home');
  const awayGoals = goals.filter(g => g.team === 'away');

  if (homeBadgeEl) homeBadgeEl.innerText = homeGoals.length;
  if (awayBadgeEl) awayBadgeEl.innerText = awayGoals.length;

  function renderGoalChip(g) {
    const isOG = Boolean(g.isOwnGoal);
    let scorerText = '';
    if (!isOG && g.scorer) {
      scorerText = g.scorer.initials ? ` #${g.scorer.number}` : ` #${g.scorer.number}`;
    }
    if (isOG) {
      return `
        <button type="button" onclick="openModal('timelineModal')" class="px-2 py-0.5 rounded-lg bg-amber-950/80 border border-amber-500/60 hover:border-amber-400 text-[11px] font-mono-sport font-black text-amber-300 flex items-center gap-1 shrink-0 active:scale-95 transition cursor-pointer shadow-sm" title="Own Goal at ${g.time} (Tap to view log)">
          <span class="text-xs">⚠️</span><span class="tracking-wide">${g.time} OG</span>
        </button>
      `;
    }
    return `
      <button type="button" onclick="openModal('timelineModal')" class="px-2 py-0.5 rounded-lg bg-slate-900/90 border border-slate-700/80 hover:border-emerald-400 text-[11px] font-mono-sport font-black text-emerald-300 flex items-center gap-1 shrink-0 active:scale-95 transition cursor-pointer shadow-sm" title="Goal at ${g.time}${scorerText ? ' by ' + scorerText : ''} (Tap to view log)">
        <span class="text-xs">⚽</span><span class="tracking-wide">${g.time}${scorerText}</span>
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

  if (homeChipsEl) {
    homeChipsEl.innerHTML = renderChipsForTeam(homeGoals);
  }
  if (awayChipsEl) {
    awayChipsEl.innerHTML = renderChipsForTeam(awayGoals);
  }

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
        const sLabel = g.scorer.initials ? `#${g.scorer.number} ${g.scorer.initials}` : `#${g.scorer.number}`;
        const aLabel = g.assist ? (g.assist.initials ? `#${g.assist.number} ${g.assist.initials}` : `#${g.assist.number}`) : '';
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
  
  // Ensure we display 8 slots (#1 to #8) in 2 columns
  const slots = [];
  for (let i = 1; i <= 8; i++) {
    const existing = roster.find(p => p.number === i);
    slots.push(existing ? { ...existing } : { number: i, initials: '' });
  }

  listEl.innerHTML = slots.map((p, idx) => {
    return `
      <div class="p-1 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-1.5 focus-within:border-amber-400 transition">
        <span class="w-6 h-6 rounded bg-slate-800 text-amber-300 font-mono-sport font-black text-[11px] flex items-center justify-center border border-slate-700 shrink-0">#${p.number}</span>
        <input type="text" id="teamEditRosterInput_${p.number}" data-number="${p.number}" maxlength="3" placeholder="Initials" value="${p.initials || ''}"
          oninput="this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '')"
          class="team-edit-roster-input w-full bg-slate-900 border border-slate-700/80 focus:border-amber-400 rounded px-2 py-1 text-white font-mono-sport font-bold text-xs uppercase focus:outline-none"
          onkeydown="if(event.key==='Enter'){ const inputs = document.querySelectorAll('.team-edit-roster-input'); if(inputs[${idx + 1}]) inputs[${idx + 1}].focus(); else saveTeamChanges(); }">
      </div>
    `;
  }).join('');
}

export function editRosterPlayerModal(playerNumber) {
  const t = teams[currentEditingTeam];
  const player = (t.roster || []).find(p => p.number === playerNumber);
  if (!player) return;

  const numInput = document.getElementById('rosterPlayerNumInput');
  const initInput = document.getElementById('rosterPlayerInitialsInput');
  if (numInput) numInput.value = player.number;
  if (initInput) initInput.value = player.initials || '';

  window.openModal('rosterPlayerEditModal');
  setTimeout(() => {
    initInput?.focus();
    initInput?.select();
  }, 100);
}

export function openAddRosterPlayerModal() {
  const t = teams[currentEditingTeam];
  const roster = t.roster || [];
  if (roster.length >= MAX_SQUAD_SIZE) {
    alert(`Maximum squad size is ${MAX_SQUAD_SIZE} players.`);
    return;
  }

  let nextNum = 1;
  while (roster.some(p => p.number === nextNum)) {
    nextNum++;
  }

  const numInput = document.getElementById('rosterPlayerNumInput');
  const initInput = document.getElementById('rosterPlayerInitialsInput');
  if (numInput) numInput.value = nextNum;
  if (initInput) initInput.value = '';

  window.openModal('rosterPlayerEditModal');
  setTimeout(() => {
    initInput?.focus();
  }, 100);
}

export function saveRosterPlayer() {
  const numInput = document.getElementById('rosterPlayerNumInput');
  const initInput = document.getElementById('rosterPlayerInitialsInput');
  const num = parseInt(numInput ? numInput.value : '0', 10);
  const initials = (initInput ? initInput.value : '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);

  if (!num || num < 1 || num > 99) return;

  const t = teams[currentEditingTeam];
  if (!t.roster) t.roster = [];

  const existingIdx = t.roster.findIndex(p => p.number === num);
  if (existingIdx >= 0) {
    t.roster[existingIdx].initials = initials;
  } else {
    if (t.roster.length >= MAX_SQUAD_SIZE) {
      alert(`Maximum squad size is ${MAX_SQUAD_SIZE} players.`);
      return;
    }
    t.roster.push({ number: num, initials });
    t.roster.sort((a, b) => a.number - b.number);
  }

  renderTeamRosterEditor();
  window.closeModal('rosterPlayerEditModal');
  notifyScoreChange();
}

export function removeRosterPlayer(playerNumber) {
  const t = teams[currentEditingTeam];
  if (!t.roster) return;
  t.roster = t.roster.filter(p => p.number !== playerNumber);
  renderTeamRosterEditor();
  notifyScoreChange();
}

export function resetRosterToDefault() {
  const t = teams[currentEditingTeam];
  t.roster = createDefaultRoster();
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
  if (colorLabel && activeColor) {
    colorLabel.innerText = COLOR_NAMES[activeColor.toLowerCase()] || '';
  }

  document.querySelectorAll('.kit-swatch-btn').forEach(btn => {
    const color = btn.getAttribute('data-color');
    const check = btn.querySelector('.swatch-check');
    if (color && color.toLowerCase() === (activeColor || '').toLowerCase()) {
      btn.classList.add('ring-2', 'ring-white');
      if (check) check.classList.remove('hidden');
    } else {
      btn.classList.remove('ring-2', 'ring-white');
      if (check) check.classList.add('hidden');
    }
  });
}

export function saveTeamChanges() {
  const input = document.getElementById('teamNameInput');
  const inputVal = input ? input.value.trim() : '';
  teams[currentEditingTeam].name = inputVal || (currentEditingTeam === 'home' ? 'Home Team' : 'Away Team');
  teams[currentEditingTeam].color = selectedColor;
  teams[currentEditingTeam].border = selectedBorder;

  // Read direct 2-column roster inputs
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

  applyTeamVisuals(currentEditingTeam);

  goals.forEach(g => {
    if (g.team === currentEditingTeam) {
      g.teamName = teams[currentEditingTeam].name;
    }
  });
  renderGoalTimeline();
  updatePrematchDropdownValues();
  updateCoachTeamUI();
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
  updateCoachTeamUI();
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

  coachTeam = coachTeam === 'home' ? 'away' : 'home';
  try {
    localStorage.setItem('whatsthescoreref_coach_team', coachTeam);
  } catch (e) {}
  updateCoachTeamUI();

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
  if (homeSel && teams.home?.name) homeSel.value = teams.home.name;
  if (awaySel && teams.away?.name) awaySel.value = teams.away.name;
}

// ---------------- Coach Mode Heads-Up Inline Touchline Bar Handlers ----------------
let activeInlineTag = null; // { tag: 'Great Pressing', icon: '⚡', taggedMoments: {} } or 'POTM'
let inlineTagTimeout = null;
let touchlineToastTimeout = null;
let isMomentsDrawerOpen = false;
let isNotesDrawerOpen = false;

export function selectInlineTag(tag, icon) {
  activeInlineTag = { tag, icon, momentId: null, taggedPlayers: {} };
  clearTimeout(inlineTagTimeout);
  inlineTagTimeout = setTimeout(() => {
    cancelInlineTag();
  }, 6000);
  hapticFeedback('tap');
  renderTouchlineBarUI();
}

export function selectInlinePotmMode() {
  activeInlineTag = 'POTM';
  clearTimeout(inlineTagTimeout);
  inlineTagTimeout = setTimeout(() => {
    cancelInlineTag();
  }, 8000);
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
  if (!activeInlineTag.taggedPlayers) {
    activeInlineTag.taggedPlayers = {};
  }

  const t = teams[coachTeam];
  const player = playerNumber === 'team'
    ? null
    : ((t.roster || []).find(p => p.number === playerNumber) || { number: playerNumber, initials: '' });
  const pLabel = player ? (player.initials ? `#${player.number} ${player.initials}` : `#${player.number}`) : 'Entire Team';

  // Toggle multi-player selection: group ALL selected players into a single moment card
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

        // If no players remain in this active tag session, remove the moment card entirely
        if (moment.players.length === 0 && Object.keys(activeInlineTag.taggedPlayers).length === 0) {
          coachNotes.moments = coachNotes.moments.filter(m => m.id !== activeInlineTag.momentId);
          activeInlineTag.momentId = null;
        }
      }
    }
    showTouchlineToast(`✕ Removed ${pLabel} from ${tag}`);
    renderMatchNotesUI();
    renderCoachMomentsModal();
    notifyScoreChange();
  } else {
    activeInlineTag.taggedPlayers[playerNumber] = player || 'team';

    if (activeInlineTag.momentId) {
      const moment = (coachNotes.moments || []).find(m => m.id === activeInlineTag.momentId);
      if (moment) {
        if (playerNumber === 'team') {
          if (!moment.players.some(p => !p || p === 'team')) {
            moment.players.push(null);
          }
        } else {
          if (!moment.players.some(p => p && p.number === player.number)) {
            moment.players.push(player);
          }
        }
        moment.player = moment.players[0] || null;
        renderMatchNotesUI();
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

  // Extend how long the pop-up shows after each press (resets to full 5.5s)
  clearTimeout(inlineTagTimeout);
  inlineTagTimeout = setTimeout(() => {
    cancelInlineTag();
  }, 5500);

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
  if (typeof window.openModal === 'function') {
    window.openModal('coachMomentsModal');
  } else {
    const m = document.getElementById('coachMomentsModal');
    if (m) m.classList.remove('hidden');
  }
}

export function renderCoachMomentsModal() {
  const listEl = document.getElementById('coachMomentsModalList');
  const badgeEl = document.getElementById('coachMomentsModalBadge');
  const moments = coachNotes.moments || [];

  if (badgeEl) {
    badgeEl.innerText = `${moments.length} Moment${moments.length === 1 ? '' : 's'}`;
  }

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
        return p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
      }).join(', ');
    } else if (m.player) {
      pLabel = m.player.initials ? `#${m.player.number} ${m.player.initials}` : `#${m.player.number}`;
    }
    return `
      <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2 shadow-sm">
        <div class="flex items-center gap-2.5 min-w-0 overflow-hidden">
          <div class="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-base shrink-0">
            ${m.icon || '📋'}
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-amber-400 font-mono-sport font-black text-xs">${m.time}</span>
              <span class="text-slate-400 text-[10px] font-bold">(${m.period})</span>
              <span class="font-bold text-white text-xs">${m.tag}</span>
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

export function openCoachNotesModal() {
  const modal = document.getElementById('coachNotesModal');
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (textarea) {
    textarea.value = coachNotes.notes || '';
  }
  hapticFeedback('tap');
  if (window.openModal) {
    window.openModal('coachNotesModal');
  } else if (modal) {
    modal.classList.remove('hidden');
  }
  setTimeout(() => {
    if (textarea) {
      textarea.focus();
    }
  }, 100);
}

export function saveCoachNotesModal() {
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (textarea) {
    coachNotes.notes = textarea.value;
  }
  hapticFeedback('success');
  notifyScoreChange();
  renderTouchlineBarUI();
  if (window.closeModal) {
    window.closeModal('coachNotesModal');
  } else {
    const modal = document.getElementById('coachNotesModal');
    if (modal) modal.classList.add('hidden');
  }
}

export function insertCoachNotesPrompt(promptText) {
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (!textarea) return;
  const current = textarea.value || '';
  if (current.trim().length > 0) {
    textarea.value = current.trimEnd() + '\n\n' + promptText;
  } else {
    textarea.value = promptText;
  }
  coachNotes.notes = textarea.value;
  notifyScoreChange();
  textarea.focus();
  textarea.setSelectionRange(textarea.value.length, textarea.value.length);
}

export function clearCoachNotesModalText() {
  const textarea = document.getElementById('coachNotesModalTextarea');
  if (textarea) {
    textarea.value = '';
  }
  coachNotes.notes = '';
  notifyScoreChange();
  renderTouchlineBarUI();
  if (textarea) textarea.focus();
}

export function toggleInlineNotesDrawer() {
  openCoachNotesModal();
}

export function renderTouchlineBarUI() {
  const touchlineBar = document.getElementById('coachTouchlineBar');
  if (touchlineBar) {
    if (appMode === 'coach') {
      touchlineBar.classList.remove('hidden');
    } else {
      touchlineBar.classList.add('hidden');
    }
  }

  // Badge count on Touchline Moments button
  const countBadge = document.getElementById('coachMomentsCountBadge');
  if (countBadge) {
    const count = (coachNotes.moments ? coachNotes.moments.length : 0);
    countBadge.innerText = count;
  }

  // Update POTM Touchline Badge in header
  const potmBadge = document.getElementById('coachTouchlinePotmBadge');
  const potmText = document.getElementById('coachTouchlinePotmText');
  if (potmBadge && potmText) {
    if (appMode === 'coach' && coachNotes && coachNotes.potm) {
      potmBadge.classList.remove('hidden');
      potmBadge.classList.add('inline-flex');
      const p = coachNotes.potm;
      potmText.innerText = `#${p.number}${p.initials ? ' ' + p.initials : ''}`;
    } else {
      potmBadge.classList.add('hidden');
      potmBadge.classList.remove('inline-flex');
    }
  }

  // Also update modal if visible
  renderCoachMomentsModal();

  // Full Time POTM Prompt Card on Main Screen
  const ftPotmCard = document.getElementById('coachTouchlinePotmPrompt');
  const ftPotmChips = document.getElementById('coachTouchlinePotmChips');
  const timerState = getTimerState();
  const isFT = timerState.currentPeriod === 'Full Time';

  if (ftPotmCard && ftPotmChips) {
    if (appMode === 'coach' && isFT) {
      ftPotmCard.classList.remove('hidden');
      const roster = teams[coachTeam]?.roster || [];
      ftPotmChips.innerHTML = roster.map(p => {
        const isSelected = coachNotes.potm && coachNotes.potm.number === p.number;
        const label = p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
        const btnClass = isSelected
          ? 'py-1 px-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs border-2 border-yellow-200 shadow scale-105 transition cursor-pointer flex items-center gap-1'
          : 'py-1 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700 transition cursor-pointer';
        return `
          <button type="button" onclick="setCoachPotm({ number: ${p.number}, initials: '${p.initials || ''}' })" class="${btnClass}">
            ${isSelected ? '⭐ ' : ''}<span>${label}</span>
          </button>
        `;
      }).join('');
    } else {
      ftPotmCard.classList.add('hidden');
    }
  }

  // Default Row vs Active Tag Row
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
          activePrompt.innerHTML = `<span>⭐ <strong>Select POTM</strong> (Player of the Match):</span>`;
        }
        if (chipsEl) {
          const roster = teams[coachTeam]?.roster || [];
          chipsEl.innerHTML = roster.map(p => {
            const isSelected = coachNotes.potm && coachNotes.potm.number === p.number;
            const label = p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
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
        const tagged = activeInlineTag.taggedPlayers || activeInlineTag.taggedMoments || {};
        const countTagged = Object.keys(tagged).length;
        if (activePrompt) {
          activePrompt.innerHTML = `<span>Who showed <strong>${activeInlineTag.icon} ${activeInlineTag.tag}</strong>?${countTagged > 0 ? ` <span class="text-amber-400 font-bold">(${countTagged} tagged)</span>` : ''}</span>`;
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
            const label = p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
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
      defaultRow.classList.remove('hidden');
      activeRow.classList.add('hidden');
    }
  }

  // Notes Button Active Indicator
  const notesToggleBtn = document.getElementById('coachNotesToggleBtn');
  if (notesToggleBtn) {
    const hasNotes = Boolean(coachNotes.notes && coachNotes.notes.trim().length > 0);
    if (hasNotes) {
      notesToggleBtn.className = 'px-1.5 sm:px-2 py-1 bg-amber-500/20 border border-amber-400/80 text-amber-300 rounded-lg font-bold text-[10px] flex items-center gap-1 transition cursor-pointer shadow-sm';
      notesToggleBtn.innerHTML = `<span>📝</span><span>Notes</span><span class="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse"></span>`;
    } else {
      notesToggleBtn.className = 'px-1.5 sm:px-2 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700/70 text-slate-300 hover:text-white rounded-lg font-bold text-[10px] flex items-center gap-1 transition cursor-pointer';
      notesToggleBtn.innerHTML = `<span>📝</span><span>Notes</span>`;
    }
  }
}

// Backwards compatibility aliases
export const renderMatchNotesUI = renderTouchlineBarUI;
export const selectMomentTag = selectInlineTag;
export const cancelMomentTagSelection = cancelInlineTag;
export const recordMomentForPlayer = recordInlineMomentForPlayer;
export const toggleInlineMomentsDrawer = openCoachMomentsModal;
export function openMatchNotesModal() { openCoachNotesModal(); }
