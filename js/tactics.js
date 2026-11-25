// What's The Score Ref - 100% Offline Touchline Tactics Board Engine (v132)
// Supports 5v5 (with U9 Retreat Line), 6v6, 7v7, Half-Pitch Set-Piece Zoom & Blank Training Grass,
// Read-only live Squad/Kit import, Magnetic Ball Snap, Vector Arrows, Collapsible Step Animator,
// Tucked-away Playbook & Gear sheet, and 1600x2000 HD PNG + Animated Video Clip export.

import * as score from './score.js';
import * as timer from './timer.js';
import { hapticFeedback } from './hardware.js';

const WORKING_STORAGE_KEY = 'whatsthescoreref_tactics_working_v1';
const PLAYBOOK_STORAGE_KEY = 'whatsthescoreref_tactics_playbook_v1';
const MAX_SAVED_BOARDS = 24;
const MAX_STEPS = 8;
const MAX_UNDO = 30;

export const PITCH_MODES = {
  '5v5': { label: '5v5', fullLabel: '5v5 Mini-Soccer', teamSize: 5, hasRetreatOption: true },
  '6v6': { label: '6v6', fullLabel: '6v6 Tournament', teamSize: 6, hasRetreatOption: false },
  '7v7': { label: '7v7', fullLabel: '7v7 Youth', teamSize: 7, hasRetreatOption: false },
  'half': { label: 'Half Pitch', fullLabel: 'Half-Pitch Set Piece', teamSize: 5, hasRetreatOption: false },
  'blank': { label: 'Blank Grass', fullLabel: 'Training Grass', teamSize: 5, hasRetreatOption: false }
};

export const FORMATIONS = {
  '5v5': [
    {
      id: '1-2-1',
      label: '1-2-1 Diamond',
      short: 'Shape: 1-2-1',
      coords: [
        { x: 50, y: 89, role: 'gk' },
        { x: 50, y: 73 },
        { x: 22, y: 58 },
        { x: 78, y: 58 },
        { x: 50, y: 38 }
      ]
    },
    {
      id: '2-2',
      label: '2-2 Box',
      short: 'Shape: 2-2',
      coords: [
        { x: 50, y: 89, role: 'gk' },
        { x: 30, y: 71 },
        { x: 70, y: 71 },
        { x: 30, y: 43 },
        { x: 70, y: 43 }
      ]
    },
    {
      id: '1-1-2',
      label: '1-1-2 High Press',
      short: 'Shape: 1-1-2',
      coords: [
        { x: 50, y: 89, role: 'gk' },
        { x: 50, y: 73 },
        { x: 50, y: 55 },
        { x: 27, y: 36 },
        { x: 73, y: 36 }
      ]
    }
  ],
  '6v6': [
    {
      id: '2-2-1',
      label: '2-2-1 Solid',
      short: 'Shape: 2-2-1',
      coords: [
        { x: 50, y: 90, role: 'gk' },
        { x: 30, y: 74 },
        { x: 70, y: 74 },
        { x: 21, y: 54 },
        { x: 79, y: 54 },
        { x: 50, y: 35 }
      ]
    },
    {
      id: '1-3-1',
      label: '1-3-1 Wide Diamond',
      short: 'Shape: 1-3-1',
      coords: [
        { x: 50, y: 90, role: 'gk' },
        { x: 50, y: 75 },
        { x: 18, y: 56 },
        { x: 50, y: 58 },
        { x: 82, y: 56 },
        { x: 50, y: 35 }
      ]
    },
    {
      id: '2-1-2',
      label: '2-1-2 Attack',
      short: 'Shape: 2-1-2',
      coords: [
        { x: 50, y: 90, role: 'gk' },
        { x: 30, y: 74 },
        { x: 70, y: 74 },
        { x: 50, y: 56 },
        { x: 29, y: 36 },
        { x: 71, y: 36 }
      ]
    }
  ],
  '7v7': [
    {
      id: '2-3-1',
      label: '2-3-1 Classic',
      short: 'Shape: 2-3-1',
      coords: [
        { x: 50, y: 91, role: 'gk' },
        { x: 30, y: 76 },
        { x: 70, y: 76 },
        { x: 18, y: 56 },
        { x: 50, y: 58 },
        { x: 82, y: 56 },
        { x: 50, y: 34 }
      ]
    },
    {
      id: '3-2-1',
      label: '3-2-1 Christmas Tree',
      short: 'Shape: 3-2-1',
      coords: [
        { x: 50, y: 91, role: 'gk' },
        { x: 22, y: 75 },
        { x: 50, y: 77 },
        { x: 78, y: 75 },
        { x: 35, y: 55 },
        { x: 65, y: 55 },
        { x: 50, y: 34 }
      ]
    },
    {
      id: '2-1-2-1',
      label: '2-1-2-1 Diamond',
      short: 'Shape: 2-1-2-1',
      coords: [
        { x: 50, y: 91, role: 'gk' },
        { x: 30, y: 76 },
        { x: 70, y: 76 },
        { x: 50, y: 62 },
        { x: 24, y: 46 },
        { x: 76, y: 46 },
        { x: 50, y: 30 }
      ]
    }
  ],
  'half': [
    {
      id: 'half-attack',
      label: 'Half-Pitch Default',
      short: 'Half Pitch',
      coords: [
        { x: 50, y: 86, role: 'gk' },
        { x: 50, y: 66 },
        { x: 20, y: 44 },
        { x: 80, y: 44 },
        { x: 50, y: 24 }
      ]
    }
  ],
  'blank': [
    {
      id: 'drill-diamond',
      label: 'Training Grass Default',
      short: 'Training',
      coords: [
        { x: 50, y: 50, role: 'gk' },
        { x: 50, y: 80 },
        { x: 20, y: 50 },
        { x: 80, y: 50 },
        { x: 50, y: 20 }
      ]
    }
  ]
};

function getDefaultOppCoords(count, oppBehindRetreat = false, pitchMode = '5v5') {
  if (pitchMode === 'half') {
    const halfBase = [
      { x: 50, y: 11, label: 'GK', isGk: true },
      { x: 35, y: 24, label: '2' },
      { x: 65, y: 24, label: '3' },
      { x: 32, y: 40, label: '4' },
      { x: 68, y: 40, label: '5' },
      { x: 50, y: 34, label: '6' }
    ];
    return halfBase.slice(0, count);
  }

  if (oppBehindRetreat) {
    const retreatSet = [
      { x: 50, y: 10, label: 'GK', isGk: true },
      { x: 30, y: 25, label: '2' },
      { x: 70, y: 25, label: '3' },
      { x: 35, y: 44, label: '4' },
      { x: 65, y: 44, label: '5' },
      { x: 50, y: 36, label: '6' },
      { x: 20, y: 44, label: '7' }
    ];
    return retreatSet.slice(0, count);
  }

  if (count >= 7) {
    const seven = [
      { x: 50, y: 9, label: 'GK', isGk: true },
      { x: 28, y: 23, label: '2' },
      { x: 72, y: 23, label: '3' },
      { x: 20, y: 40, label: '4' },
      { x: 50, y: 38, label: '5' },
      { x: 80, y: 40, label: '6' },
      { x: 50, y: 55, label: '7' },
      { x: 35, y: 55, label: '8' }
    ];
    return seven.slice(0, count);
  }

  if (count === 6) {
    return [
      { x: 50, y: 10, label: 'GK', isGk: true },
      { x: 30, y: 25, label: '2' },
      { x: 70, y: 25, label: '3' },
      { x: 24, y: 43, label: '4' },
      { x: 76, y: 43, label: '5' },
      { x: 50, y: 56, label: '6' }
    ];
  }

  return [
    { x: 50, y: 10, label: 'GK', isGk: true },
    { x: 30, y: 26, label: '2' },
    { x: 70, y: 26, label: '3' },
    { x: 34, y: 46, label: '4' },
    { x: 66, y: 46, label: '5' }
  ].slice(0, count);
}

import { BUILTIN_TEMPLATES } from './tacticsTemplates.js';
export { BUILTIN_TEMPLATES };

// ---------------- Internal Tactics Engine State ----------------
let board = {
  pitchMode: '5v5',
  formationId: '1-2-1',
  retreatLine: true,
  lanesMode: 'off', // 'off' | 'lanes' | 'thirds'
  oppMode: 'even',  // 'off' | 'even' | 'powerplay'
  customOppCount: 0,
  customOppRoster: null,
  activeCue: null, // { title, difficulty, category, standard, cue }
  activeTool: 'move', // 'move' | 'pass' | 'run' | 'dribble' | 'zone'
  isAnimatorOpen: false,
  animSpeed: 1, // 1 | 0.5
  activeStepIdx: 0,
  teamMeta: {
    side: 'home',
    name: 'Home Team',
    color: '#f43f5e',
    oppColor: '#2563eb'
  },
  // Board-local roster snapshot (Read-only import; never writes back to match rotation!)
  teamRoster: [],  // [{ id: 't0', number: 1, initials: 'TW', isGk: true }, ...]
  benchRoster: [], // [{ number: 6, initials: 'JS' }, ...]
  oppRoster: [],   // [{ id: 'o0', label: 'GK', isGk: true }, ...]
  steps: []        // [{ teamPos, oppPos, ball: { x, y, attachedTo }, gear: [], drawings: [] }]
};

let undoStack = [];
let selectedBenchNumber = null; // Allows 2-tap bench-to-pitch swap in addition to drag-and-drop!
let activePointer = null;       // Pointer drag / stroke state
let benchDragGhost = null;
let benchDragState = null;

let animRafId = null;
let isAnimating = false;
let animRenderOverride = null; // Interpolated positions during playback
let clockPollInterval = null;
let canvasResizeObserver = null;
let initialized = false;
let playbookTab = 'match'; // 'match' | 'training'
let playbookTabManuallyChosen = false;
let playbookDifficulty = 'all'; // 'all' | 'easy' | 'medium' | 'advanced'
let playbookFormatFilter = 'all'; // 'all' | '5v5' | '6v6' | '7v7'

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function sanitizeInitials(str) {
  return String(str || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3);
}

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function pushUndoSnapshot() {
  const snap = {
    pitchMode: board.pitchMode,
    formationId: board.formationId,
    retreatLine: board.retreatLine,
    lanesMode: board.lanesMode,
    oppMode: board.oppMode,
    customOppCount: board.customOppCount,
    customOppRoster: board.customOppRoster ? cloneDeep(board.customOppRoster) : null,
    activeCue: board.activeCue ? cloneDeep(board.activeCue) : null,
    activeStepIdx: board.activeStepIdx,
    teamRoster: cloneDeep(board.teamRoster),
    benchRoster: cloneDeep(board.benchRoster),
    oppRoster: cloneDeep(board.oppRoster),
    steps: cloneDeep(board.steps)
  };
  undoStack.push(snap);
  if (undoStack.length > MAX_UNDO) undoStack.shift();
  updateUndoButtonUI();
}

function saveWorkingBoard() {
  try {
    const payload = {
      pitchMode: board.pitchMode,
      formationId: board.formationId,
      retreatLine: board.retreatLine,
      lanesMode: board.lanesMode,
      oppMode: board.oppMode,
      customOppCount: board.customOppCount,
      customOppRoster: board.customOppRoster,
      activeCue: board.activeCue,
      isAnimatorOpen: board.isAnimatorOpen,
      animSpeed: board.animSpeed,
      activeStepIdx: board.activeStepIdx,
      teamRoster: board.teamRoster,
      benchRoster: board.benchRoster,
      oppRoster: board.oppRoster,
      steps: board.steps
    };
    localStorage.setItem(WORKING_STORAGE_KEY, JSON.stringify(payload));
  } catch (_) {}
}

function loadWorkingBoard() {
  try {
    const raw = localStorage.getItem(WORKING_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.steps) || parsed.steps.length === 0) return null;
    return parsed;
  } catch (_) {
    return null;
  }
}

function resolveTeamColors() {
  const side = score.getAppMode() === 'coach' ? score.getCoachTeam() : 'home';
  const oppSide = side === 'home' ? 'away' : 'home';
  const ownTeam = score.teams[side] || score.teams.home;
  const otherTeam = score.teams[oppSide] || score.teams.away;

  const ownColor = ownTeam?.color || '#f43f5e';
  let oppColor = otherTeam?.color || '#2563eb';
  if (oppColor.toLowerCase() === ownColor.toLowerCase()) {
    oppColor = ownColor.toLowerCase() === '#2563eb' ? '#f43f5e' : '#2563eb';
  }

  board.teamMeta = {
    side,
    name: ownTeam?.name || (side === 'home' ? 'Home Team' : 'Away Team'),
    color: ownColor,
    oppColor
  };
}

function getTeamSizeForMode(mode = board.pitchMode) {
  return PITCH_MODES[mode]?.teamSize || 5;
}

function getOppCountForState() {
  if (board.customOppCount > 0 && board.oppMode === 'off') {
    return board.customOppCount;
  }
  if (board.oppMode === 'off') return 0;
  const base = getTeamSizeForMode(board.pitchMode);
  return board.oppMode === 'powerplay' ? base + 1 : base;
}

// Read-only import from live match squad & rotation (never writes back to score.coachNotes.rotation!)
export function syncSquadFromMatch(options = { resetPositions: false, silent: false }) {
  resolveTeamColors();
  const side = board.teamMeta.side;
  const matchTeam = score.teams[side] || score.teams.home;
  const sourceRoster = Array.isArray(matchTeam?.roster) && matchTeam.roster.length > 0
    ? matchTeam.roster
    : score.createDefaultRoster(8);

  const rot = score.getCoachNotes()?.rotation || { onPitch: [], gk: 1 };
  const targetOnPitchCount = getTeamSizeForMode(board.pitchMode);

  // Build ordered starters: GK first (slot t0), then active onPitch players, then fill up to targetOnPitchCount
  const allPlayers = sourceRoster.map(p => ({
    number: p.number,
    initials: sanitizeInitials(p.initials)
  }));

  const gkNum = rot.gk && allPlayers.some(p => p.number === rot.gk)
    ? rot.gk
    : (rot.onPitch?.[0] || allPlayers[0]?.number || 1);

  const onPitchSet = [];
  const gkPlayer = allPlayers.find(p => p.number === gkNum) || { number: 1, initials: '' };
  onPitchSet.push({ ...gkPlayer, isGk: true });

  (rot.onPitch || []).forEach(num => {
    if (onPitchSet.length < targetOnPitchCount && num !== gkNum) {
      const found = allPlayers.find(p => p.number === num);
      if (found) onPitchSet.push({ ...found, isGk: false });
    }
  });

  allPlayers.forEach(p => {
    if (onPitchSet.length < targetOnPitchCount && !onPitchSet.some(x => x.number === p.number)) {
      onPitchSet.push({ ...p, isGk: false });
    }
  });

  // Pad with numbered tokens if squad size is smaller than pitch format (e.g. 5 squad on 7v7 pitch)
  let nextSynthetic = 1;
  while (onPitchSet.length < targetOnPitchCount) {
    while (onPitchSet.some(x => x.number === nextSynthetic) || allPlayers.some(x => x.number === nextSynthetic)) {
      nextSynthetic++;
    }
    onPitchSet.push({ number: nextSynthetic, initials: '', isGk: false });
  }

  board.teamRoster = onPitchSet.map((p, idx) => ({
    id: `t${idx}`,
    number: p.number,
    initials: p.initials,
    isGk: idx === 0
  }));

  board.benchRoster = allPlayers
    .filter(p => !onPitchSet.some(x => x.number === p.number))
    .map(p => ({ number: p.number, initials: p.initials }));

  selectedBenchNumber = null;

  if (options.resetPositions || board.steps.length === 0) {
    applyFormationToBoard(board.formationId, { recordUndo: false });
  } else {
    // Ensure every active token id exists in every step
    ensureStepTokensIntegrity();
    saveWorkingBoard();
    renderAllUI();
  }

  if (!options.silent) {
    hapticFeedback('success');
    score.showMatchToast(`Synced ${board.teamMeta.name} squad & kit onto board`, '📋', 2000);
  }
}

// Refresh only labels/colours when opening modal so persistent positions stay intact!
function refreshKitAndInitialsNonDestructive() {
  resolveTeamColors();
  const side = board.teamMeta.side;
  const matchTeam = score.teams[side] || score.teams.home;
  const sourceRoster = Array.isArray(matchTeam?.roster) ? matchTeam.roster : [];

  const initMap = new Map();
  sourceRoster.forEach(p => initMap.set(p.number, sanitizeInitials(p.initials)));

  board.teamRoster.forEach(tok => {
    if (initMap.has(tok.number)) {
      tok.initials = initMap.get(tok.number);
    }
  });
  board.benchRoster.forEach(b => {
    if (initMap.has(b.number)) {
      b.initials = initMap.get(b.number);
    }
  });

  // Also append any newly added squad members to bench if not already on board
  sourceRoster.forEach(p => {
    const onTeam = board.teamRoster.some(t => t.number === p.number);
    const onBench = board.benchRoster.some(b => b.number === p.number);
    if (!onTeam && !onBench) {
      board.benchRoster.push({ number: p.number, initials: sanitizeInitials(p.initials) });
    }
  });
}

function ensureStepTokensIntegrity() {
  const formations = FORMATIONS[board.pitchMode] || FORMATIONS['5v5'];
  const activeForm = formations.find(f => f.id === board.formationId) || formations[0];
  const oppCount = getOppCountForState();
  const oppDefaults = getDefaultOppCoords(oppCount, Boolean(activeForm?.oppBehindRetreat && board.retreatLine), board.pitchMode);

  if (Array.isArray(board.customOppRoster) && board.customOppRoster.length === oppCount && board.oppMode === 'off') {
    board.oppRoster = cloneDeep(board.customOppRoster);
  } else {
    board.oppRoster = oppDefaults.map((o, idx) => ({
      id: `o${idx}`,
      label: o.label || (idx === 0 ? 'GK' : String(idx + 1)),
      isGk: Boolean(o.isGk)
    }));
  }

  board.steps.forEach(step => {
    if (!step.teamPos) step.teamPos = {};
    if (!step.oppPos) step.oppPos = {};
    if (!Array.isArray(step.gear)) step.gear = [];
    if (!Array.isArray(step.drawings)) step.drawings = [];
    if (!step.ball) step.ball = { x: 50, y: 89, attachedTo: 't0' };

    board.teamRoster.forEach((t, idx) => {
      if (!step.teamPos[t.id]) {
        const fallback = activeForm.coords[idx] || { x: 50, y: 60 };
        step.teamPos[t.id] = { x: fallback.x, y: fallback.y };
      }
    });

    board.oppRoster.forEach((o, idx) => {
      if (!step.oppPos[o.id]) {
        const fallback = oppDefaults[idx] || { x: 50, y: 30 };
        step.oppPos[o.id] = { x: fallback.x, y: fallback.y };
      }
    });

    syncAttachedBallPosition(step);
  });

  board.steps.forEach((step, idx) => {
    const nextStep = board.steps[idx + 1] || null;
    (step.drawings || []).forEach(d => {
      if (d.type === 'pass') bindPassArrowEndpoints(d, step, nextStep);
    });
  });
}

function syncAttachedBallPosition(step) {
  if (!step || !step.ball || !step.ball.attachedTo) return;
  const id = step.ball.attachedTo;
  const host = step.teamPos?.[id] || step.oppPos?.[id];
  if (host) {
    step.ball.x = host.x;
    step.ball.y = host.y;
  } else {
    step.ball.attachedTo = null;
  }
}

export function applyFormationToBoard(formationId, options = { recordUndo: true }) {
  stopTacticsAnimation();
  if (options.recordUndo && board.steps.length > 0) {
    pushUndoSnapshot();
  }

  const list = FORMATIONS[board.pitchMode] || FORMATIONS['5v5'];
  const chosen = list.find(f => f.id === formationId) || list[0];
  board.formationId = chosen.id;
  board.customOppCount = 0;
  board.customOppRoster = null;
  board.activeCue = null;
  board.lanesMode = 'off';
  board.isAnimatorOpen = false;
  selectedBenchNumber = null;

  // Ensure teamRoster matches target team size for pitchMode
  const desiredCount = getTeamSizeForMode(board.pitchMode);
  if (board.teamRoster.length !== desiredCount) {
    adjustRosterCountForPitchMode(desiredCount);
  }

  const oppCount = getOppCountForState();
  const oppCoords = getDefaultOppCoords(oppCount, Boolean(chosen.oppBehindRetreat && board.retreatLine), board.pitchMode);
  board.oppRoster = oppCoords.map((o, idx) => ({
    id: `o${idx}`,
    label: o.label || (idx === 0 ? 'GK' : String(idx + 1)),
    isGk: Boolean(o.isGk)
  }));

  const teamPos = {};
  board.teamRoster.forEach((tok, idx) => {
    const pt = chosen.coords[idx] || { x: 50, y: 50 };
    teamPos[tok.id] = { x: pt.x, y: pt.y };
  });

  const oppPos = {};
  board.oppRoster.forEach((tok, idx) => {
    const pt = oppCoords[idx] || { x: 50, y: 30 };
    oppPos[tok.id] = { x: pt.x, y: pt.y };
  });

  const ballHostIdx = typeof chosen.ballOnIdx === 'number' ? chosen.ballOnIdx : 0;
  const ballHostId = `t${Math.min(ballHostIdx, board.teamRoster.length - 1)}`;
  const hostPt = teamPos[ballHostId] || { x: 50, y: 50 };

  // Clean pitch: never carry leftover training cones/poles/mini-goals across formations or pitches!
  board.steps = [{
    teamPos,
    oppPos,
    ball: { x: hostPt.x, y: hostPt.y, attachedTo: ballHostId },
    gear: [],
    drawings: []
  }];
  board.activeStepIdx = 0;

  saveWorkingBoard();
  renderAllUI();
}

function adjustRosterCountForPitchMode(desiredCount) {
  while (board.teamRoster.length < desiredCount) {
    if (board.benchRoster.length > 0) {
      const promoted = board.benchRoster.shift();
      board.teamRoster.push({
        id: `t${board.teamRoster.length}`,
        number: promoted.number,
        initials: promoted.initials,
        isGk: false
      });
    } else {
      let n = 1;
      while (board.teamRoster.some(x => x.number === n) || board.benchRoster.some(x => x.number === n)) n++;
      board.teamRoster.push({
        id: `t${board.teamRoster.length}`,
        number: n,
        initials: '',
        isGk: false
      });
    }
  }

  while (board.teamRoster.length > desiredCount) {
    const demoted = board.teamRoster.pop();
    if (demoted) {
      board.benchRoster.unshift({ number: demoted.number, initials: demoted.initials });
    }
  }

  board.teamRoster.forEach((t, idx) => {
    t.id = `t${idx}`;
    t.isGk = idx === 0;
  });
}

// ---------------- Public Controls Bound to Window ----------------
export function openTacticsBoard() {
  initTacticsBoardIfNeeded();
  refreshKitAndInitialsNonDestructive();
  ensureStepTokensIntegrity();

  if (typeof window.openModal === 'function') {
    window.openModal('tacticsBoardModal');
  } else {
    document.getElementById('tacticsBoardModal')?.classList.remove('hidden');
  }

  startTacticsClockTicker();
  requestAnimationFrame(() => {
    resizeTacticsCanvas();
    renderAllUI();
  });
}

export function closeTacticsBoard() {
  stopTacticsAnimation();
  stopTacticsClockTicker();
  closeTacticsPlaybook();
  selectedBenchNumber = null;
  saveWorkingBoard();
  if (typeof window.closeModal === 'function') {
    window.closeModal('tacticsBoardModal');
  } else {
    document.getElementById('tacticsBoardModal')?.classList.add('hidden');
  }
}

export function setTacticsPitchMode(mode) {
  if (!PITCH_MODES[mode] || mode === board.pitchMode) return;
  stopTacticsAnimation();
  pushUndoSnapshot();
  board.pitchMode = mode;
  const list = FORMATIONS[mode] || FORMATIONS['5v5'];
  board.formationId = list[0].id;
  board.retreatLine = mode === '5v5';
  board.oppMode = mode === 'blank' ? 'off' : 'even';
  board.lanesMode = 'off';
  board.isAnimatorOpen = false;
  hapticFeedback('tap');
  applyFormationToBoard(board.formationId, { recordUndo: false });
}

export function onTacticsPitchSelectChange(val) {
  setTacticsPitchMode(val);
}

export function onTacticsFormationSelectChange(val) {
  hapticFeedback('tap');
  applyFormationToBoard(val, { recordUndo: true });
}

export function toggleTacticsRetreatLine() {
  if (board.pitchMode !== '5v5') return;
  pushUndoSnapshot();
  board.retreatLine = !board.retreatLine;
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

export function cycleTacticsLanes() {
  const order = ['off', 'lanes', 'thirds'];
  const next = order[(order.indexOf(board.lanesMode) + 1) % order.length];
  board.lanesMode = next;
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

export function cycleTacticsOpposition() {
  stopTacticsAnimation();
  pushUndoSnapshot();
  const order = ['even', 'powerplay', 'off'];
  const next = order[(order.indexOf(board.oppMode) + 1) % order.length];
  board.oppMode = next;
  board.customOppCount = 0;
  board.customOppRoster = null;
  ensureStepTokensIntegrity();
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

export function setTacticsTool(tool) {
  if (!['move', 'pass', 'run', 'dribble', 'zone'].includes(tool)) return;
  stopTacticsAnimation();
  board.activeTool = tool;
  selectedBenchNumber = null;
  hapticFeedback('tap');
  renderAllUI();
}

export function undoTacticsAction() {
  stopTacticsAnimation();
  if (undoStack.length === 0) return;
  const prev = undoStack.pop();
  Object.assign(board, prev);
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

export function clearTacticsLines() {
  stopTacticsAnimation();
  const step = board.steps[board.activeStepIdx];
  const hasDrawings = Boolean(step && step.drawings && step.drawings.length > 0);
  const hasGear = board.steps.some(s => s.gear && s.gear.length > 0);
  if (!hasDrawings && !hasGear && !board.activeCue) return;
  pushUndoSnapshot();
  if (step) step.drawings = [];
  board.steps.forEach(s => { s.gear = []; });
  board.activeCue = null;
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

export function resetTacticsPitch() {
  stopTacticsAnimation();
  pushUndoSnapshot();
  board.activeCue = null;
  board.steps.forEach(s => { s.gear = []; s.drawings = []; });
  syncSquadFromMatch({ resetPositions: true, silent: true });
  hapticFeedback('success');
  score.showMatchToast('Pitch reset to clean starting formation', '✨', 1800);
}

// ---------------- Bench <-> Pitch Swap (Read-Only Board Sandbox) ----------------
export function selectBenchChipForSwap(benchNum) {
  stopTacticsAnimation();
  const num = Number(benchNum);
  if (selectedBenchNumber === num) {
    selectedBenchNumber = null;
  } else {
    selectedBenchNumber = num;
    board.activeTool = 'move';
  }
  hapticFeedback('tap');
  renderAllUI();
}

export function swapBenchWithPitchToken(benchNum, pitchTokenId) {
  const bIdx = board.benchRoster.findIndex(b => b.number === Number(benchNum));
  const tIdx = board.teamRoster.findIndex(t => t.id === pitchTokenId);
  if (bIdx < 0 || tIdx < 0) return false;

  pushUndoSnapshot();
  const benchPlayer = board.benchRoster[bIdx];
  const pitchPlayer = board.teamRoster[tIdx];

  board.teamRoster[tIdx] = {
    id: pitchPlayer.id,
    number: benchPlayer.number,
    initials: benchPlayer.initials,
    isGk: pitchPlayer.isGk
  };
  board.benchRoster[bIdx] = {
    number: pitchPlayer.number,
    initials: pitchPlayer.initials
  };

  selectedBenchNumber = null;
  hapticFeedback('success');
  saveWorkingBoard();
  renderAllUI();
  return true;
}

// ---------------- Collapsible 1-Row Step Animator ----------------
export function toggleTacticsAnimator() {
  stopTacticsAnimation();
  board.isAnimatorOpen = !board.isAnimatorOpen;
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
  requestAnimationFrame(() => {
    resizeTacticsCanvas();
    drawTacticsCanvas();
  });
}

export function selectTacticsStep(idx) {
  stopTacticsAnimation();
  if (idx < 0 || idx >= board.steps.length) return;
  board.activeStepIdx = idx;
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

export function addTacticsStep() {
  stopTacticsAnimation();
  if (board.steps.length >= MAX_STEPS) {
    score.showMatchToast(`Maximum ${MAX_STEPS} steps per move`, 'ℹ️', 1800);
    return;
  }
  pushUndoSnapshot();
  const source = board.steps[board.steps.length - 1] || board.steps[0];
  const cloned = {
    teamPos: cloneDeep(source.teamPos),
    oppPos: cloneDeep(source.oppPos),
    ball: cloneDeep(source.ball),
    gear: cloneDeep(source.gear),
    drawings: [] // Fresh chalk for the next phase!
  };
  board.steps.push(cloned);
  board.activeStepIdx = board.steps.length - 1;
  board.activeTool = 'move';
  hapticFeedback('success');
  saveWorkingBoard();
  renderAllUI();
}

export function deleteLastTacticsStep() {
  stopTacticsAnimation();
  if (board.steps.length <= 1) return;
  pushUndoSnapshot();
  board.steps.pop();
  board.activeStepIdx = Math.min(board.activeStepIdx, board.steps.length - 1);
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

export function toggleTacticsAnimSpeed() {
  board.animSpeed = board.animSpeed === 1 ? 0.5 : 1;
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Sample smoothly along a curved multi-point run/dribble/pass polyline so overlaps, V-cuts & slalom weaves follow the actual drawn curve!
function samplePolylineBetween(startPt, endPt, drawings, allowedTypes, t) {
  if (Math.hypot(endPt.x - startPt.x, endPt.y - startPt.y) < 0.5) {
    return { x: endPt.x, y: endPt.y };
  }
  const match = (drawings || []).find(d => {
    if (!allowedTypes.includes(d.type) || !Array.isArray(d.pts) || d.pts.length < 3) return false;
    const first = d.pts[0];
    const last = d.pts[d.pts.length - 1];
    return Math.hypot(first.x - startPt.x, first.y - startPt.y) <= 10 &&
           Math.hypot(last.x - endPt.x, last.y - endPt.y) <= 13;
  });

  if (!match) {
    return {
      x: startPt.x + (endPt.x - startPt.x) * t,
      y: startPt.y + (endPt.y - startPt.y) * t
    };
  }

  const waypoints = [startPt, ...match.pts.slice(1, -1), endPt];
  const segLens = [];
  let totalLen = 0;
  for (let i = 0; i < waypoints.length - 1; i++) {
    const len = Math.hypot(waypoints[i + 1].x - waypoints[i].x, waypoints[i + 1].y - waypoints[i].y);
    segLens.push(len);
    totalLen += len;
  }
  if (totalLen <= 0.001) return { x: endPt.x, y: endPt.y };

  const targetDist = clamp(t, 0, 1) * totalLen;
  let acc = 0;
  for (let i = 0; i < segLens.length; i++) {
    if (acc + segLens[i] >= targetDist || i === segLens.length - 1) {
      const localT = segLens[i] > 0.0001 ? clamp((targetDist - acc) / segLens[i], 0, 1) : 1;
      return {
        x: waypoints[i].x + (waypoints[i + 1].x - waypoints[i].x) * localT,
        y: waypoints[i].y + (waypoints[i + 1].y - waypoints[i].y) * localT
      };
    }
    acc += segLens[i];
  }
  return { x: endPt.x, y: endPt.y };
}

function getTokenPosInScene(scene, tokId) {
  if (!scene || !tokId) return null;
  return scene.teamPos?.[tokId] || scene.oppPos?.[tokId] || null;
}

function findNearestTokenIdInScene(scene, pt, maxDist = 8.5, excludeId = null) {
  if (!scene || !pt) return null;
  let bestId = null;
  let bestD = maxDist;
  Object.entries(scene.teamPos || {}).forEach(([id, pos]) => {
    if (id === excludeId) return;
    const d = Math.hypot(pos.x - pt.x, pos.y - pt.y);
    if (d < bestD) { bestD = d; bestId = id; }
  });
  Object.entries(scene.oppPos || {}).forEach(([id, pos]) => {
    if (id === excludeId) return;
    const d = Math.hypot(pos.x - pt.x, pos.y - pt.y);
    if (d < bestD) { bestD = d; bestId = id; }
  });
  return bestId;
}

// Bind pass arrow endpoints to passer (fromId) and receiver (toId) so pass arrows follow moving players cleanly!
function bindPassArrowEndpoints(d, stepA, stepB = null) {
  if (!d || d.type !== 'pass' || !Array.isArray(d.pts) || d.pts.length < 2) return d;
  const first = d.pts[0];
  const tip = d.pts[d.pts.length - 1];

  if (d.fromId === undefined) {
    let fId = null;
    if (stepA?.ball?.attachedTo) {
      const hp = getTokenPosInScene(stepA, stepA.ball.attachedTo);
      if (hp && Math.hypot(first.x - hp.x, first.y - hp.y) <= 13) fId = stepA.ball.attachedTo;
    }
    if (!fId) fId = findNearestTokenIdInScene(stepA, first, 8.5, null);
    d.fromId = fId || null;
  }

  if (d.toId === undefined) {
    let tId = null;
    if (stepB?.ball?.attachedTo && stepB.ball.attachedTo !== d.fromId) {
      const bPos = getTokenPosInScene(stepB, stepB.ball.attachedTo);
      const aPos = getTokenPosInScene(stepA, stepB.ball.attachedTo);
      if ((bPos && Math.hypot(tip.x - bPos.x, tip.y - bPos.y) <= 14) ||
          (aPos && Math.hypot(tip.x - aPos.x, tip.y - aPos.y) <= 14)) {
        tId = stepB.ball.attachedTo;
      }
    }
    if (!tId) {
      const isShotIntoGoalOrSpace = Boolean(stepB && !stepB.ball?.attachedTo);
      if (!isShotIntoGoalOrSpace) {
        const candA = findNearestTokenIdInScene(stepA, tip, 8.5, d.fromId);
        const candB = stepB ? findNearestTokenIdInScene(stepB, tip, 8.5, d.fromId) : null;
        const cand = candA || candB;
        if (cand && (!d.fromId || cand[0] === d.fromId[0])) {
          tId = cand;
        }
      }
    }
    d.toId = tId || null;
  }
  return d;
}

// Project a pass arrow onto the live positions of its attached passer & receiver tokens in the current frame/scene!
function projectDrawingOntoScene(d, scene) {
  if (!d || d.type !== 'pass' || !Array.isArray(d.pts) || d.pts.length < 2) return d;
  const pStart = d.fromId ? getTokenPosInScene(scene, d.fromId) : null;
  const pEnd = d.toId ? getTokenPosInScene(scene, d.toId) : null;
  if (!pStart && !pEnd) return d;

  const rawA = pStart || d.pts[0];
  const rawB = pEnd || d.pts[d.pts.length - 1];
  const dist = Math.hypot(rawB.x - rawA.x, rawB.y - rawA.y);
  if (dist < 0.25) {
    return { ...d, pts: [{ x: rawA.x, y: rawA.y }, { x: rawB.x, y: rawB.y }] };
  }

  const trimA = pStart ? Math.min(4.2, dist * 0.34) : 0;
  const trimB = pEnd ? Math.min(4.2, dist * 0.34) : 0;
  const ux = (rawB.x - rawA.x) / dist;
  const uy = (rawB.y - rawA.y) / dist;
  const newFirst = { x: rawA.x + ux * trimA, y: rawA.y + uy * trimA };
  const newLast = { x: rawB.x - ux * trimB, y: rawB.y - uy * trimB };

  if (d.pts.length === 2) {
    return { ...d, pts: [newFirst, newLast] };
  }

  // Smoothly transform intermediate curve waypoints via 2D similarity transform between newFirst & newLast
  const oFirst = d.pts[0];
  const oLast = d.pts[d.pts.length - 1];
  const oDx = oLast.x - oFirst.x;
  const oDy = oLast.y - oFirst.y;
  const oLenSq = oDx * oDx + oDy * oDy;
  if (oLenSq < 0.25) {
    return { ...d, pts: [newFirst, newLast] };
  }
  const nDx = newLast.x - newFirst.x;
  const nDy = newLast.y - newFirst.y;
  const a = (oDx * nDx + oDy * nDy) / oLenSq;
  const b = (oDx * nDy - oDy * nDx) / oLenSq;

  const mappedPts = d.pts.map((pt, idx) => {
    if (idx === 0) return newFirst;
    if (idx === d.pts.length - 1) return newLast;
    const rx = pt.x - oFirst.x;
    const ry = pt.y - oFirst.y;
    return {
      x: newFirst.x + a * rx - b * ry,
      y: newFirst.y + b * rx + a * ry
    };
  });
  return { ...d, pts: mappedPts };
}

if (typeof window !== 'undefined') {
  window.__getLiveProjectedPassTipForTest = () => {
    const sc = animRenderOverride || board.steps[board.activeStepIdx];
    const pass = (sc?.drawings || []).find(item => item.type === 'pass');
    if (!pass) return null;
    const proj = projectDrawingOntoScene(pass, sc);
    return proj.pts[proj.pts.length - 1];
  };
}

// Auto-synthesize a final completion step if a user drew pass/run/dribble arrows on their last custom step without adding Step N+1!
function buildPlaybackSteps(rawSteps) {
  const steps = cloneDeep(rawSteps || []);
  if (steps.length === 0) return steps;

  steps.forEach((st, idx) => {
    (st.drawings || []).forEach(d => {
      if (d.type === 'pass') bindPassArrowEndpoints(d, st, steps[idx + 1] || null);
    });
  });

  const last = steps[steps.length - 1];
  const actionDrawings = (last.drawings || []).filter(d =>
    ['pass', 'run', 'dribble'].includes(d.type) && Array.isArray(d.pts) && d.pts.length >= 2
  );
  if (actionDrawings.length === 0) return steps;

  const nextStep = cloneDeep(last);
  nextStep.drawings = [];
  let anyMovement = false;

  // Move any player whose token sits near the start of a 'run' or 'dribble' arrow
  actionDrawings.forEach(d => {
    if (d.type !== 'run' && d.type !== 'dribble') return;
    const start = d.pts[0];
    const tip = d.pts[d.pts.length - 1];
    let bestTok = null;
    let bestD = 9.5;
    Object.entries(last.teamPos || {}).forEach(([id, pos]) => {
      const dist = Math.hypot(pos.x - start.x, pos.y - start.y);
      if (dist < bestD) { bestD = dist; bestTok = { group: 'teamPos', id }; }
    });
    Object.entries(last.oppPos || {}).forEach(([id, pos]) => {
      const dist = Math.hypot(pos.x - start.x, pos.y - start.y);
      if (dist < bestD) { bestD = dist; bestTok = { group: 'oppPos', id }; }
    });
    if (bestTok && Math.hypot(tip.x - start.x, tip.y - start.y) > 4) {
      nextStep[bestTok.group][bestTok.id] = { x: clamp(tip.x, 3, 97), y: clamp(tip.y, 2, 97) };
      if (d.type === 'dribble' && nextStep.ball?.attachedTo === bestTok.id) {
        nextStep.ball.x = nextStep[bestTok.group][bestTok.id].x;
        nextStep.ball.y = nextStep[bestTok.group][bestTok.id].y;
      }
      anyMovement = true;
    }
  });

  // Move the ball along any final 'pass' arrow starting near the ball!
  const passArrows = actionDrawings.filter(d => d.type === 'pass');
  if (passArrows.length > 0 && last.ball) {
    const ballOrigin = last.ball.attachedTo
      ? (last.teamPos?.[last.ball.attachedTo] || last.oppPos?.[last.ball.attachedTo] || last.ball)
      : last.ball;
    const lastPass = passArrows[passArrows.length - 1];
    const firstPass = passArrows[0];
    if (Math.hypot(firstPass.pts[0].x - ballOrigin.x, firstPass.pts[0].y - ballOrigin.y) <= 14 || firstPass.fromId === last.ball.attachedTo) {
      const finalTip = lastPass.pts[lastPass.pts.length - 1];
      let receiverId = lastPass.toId || null;
      if (!receiverId) {
        let recDist = 7.5;
        Object.entries(nextStep.teamPos || {}).forEach(([id, pos]) => {
          const d = Math.hypot(pos.x - finalTip.x, pos.y - finalTip.y);
          if (d < recDist) { recDist = d; receiverId = id; }
        });
      }
      const recPos = receiverId ? getTokenPosInScene(nextStep, receiverId) : null;
      if (receiverId && recPos) {
        nextStep.ball = {
          x: recPos.x,
          y: recPos.y,
          attachedTo: receiverId
        };
      } else {
        nextStep.ball = {
          x: clamp(finalTip.x, 3, 97),
          y: clamp(finalTip.y, 2, 97),
          attachedTo: null
        };
      }
      anyMovement = true;
    }
  }

  if (anyMovement) {
    steps.push(nextStep);
  }
  return steps;
}

function interpolateBetweenSteps(stepA, stepB, rawT, showNextStepDrawings = false) {
  const t = easeInOutCubic(clamp(rawT, 0, 1));
  const aDrawings = (stepA.drawings || []).map(d =>
    d.type === 'pass' ? bindPassArrowEndpoints({ ...d }, stepA, stepB) : d
  );

  const teamPos = {};
  board.teamRoster.forEach(tok => {
    const a = stepA.teamPos?.[tok.id] || { x: 50, y: 50 };
    const b = stepB.teamPos?.[tok.id] || a;
    teamPos[tok.id] = samplePolylineBetween(a, b, aDrawings, ['run', 'dribble'], t);
  });

  const oppPos = {};
  board.oppRoster.forEach(tok => {
    const a = stepA.oppPos?.[tok.id] || { x: 50, y: 30 };
    const b = stepB.oppPos?.[tok.id] || a;
    oppPos[tok.id] = samplePolylineBetween(a, b, aDrawings, ['run', 'dribble'], t);
  });

  const startBall = stepA.ball || { x: 50, y: 50, attachedTo: null };
  const endBall = stepB.ball || startBall;
  let bx, by, attachedTo = null;

  if (startBall.attachedTo && startBall.attachedTo === endBall.attachedTo) {
    attachedTo = startBall.attachedTo;
    const host = teamPos[attachedTo] || oppPos[attachedTo] || startBall;
    bx = host.x;
    by = host.y;
  } else {
    // Interpolate ball directly between the LIVE moving passer and LIVE moving receiver so it rides along the live pass arrow!
    const curStartHost = startBall.attachedTo ? (teamPos[startBall.attachedTo] || oppPos[startBall.attachedTo] || startBall) : startBall;
    const curEndHost = endBall.attachedTo ? (teamPos[endBall.attachedTo] || oppPos[endBall.attachedTo] || endBall) : endBall;
    const sampledBall = samplePolylineBetween(curStartHost, curEndHost, aDrawings, ['pass', 'dribble'], t);
    bx = sampledBall.x;
    by = sampledBall.y;
    if (rawT >= 0.98 && endBall.attachedTo) attachedTo = endBall.attachedTo;
  }

  return {
    teamPos,
    oppPos,
    ball: { x: bx, y: by, attachedTo },
    gear: stepA.gear || [],
    drawings: showNextStepDrawings ? (stepB.drawings || []) : aDrawings
  };
}

// 4-Beat Teaching Pacing Calculator: Intro Setup Beat -> Smooth Move -> Mid-Step Cue Beat -> Full Final Finish Hold!
function computePlaybackTimelineMetrics(stepsCount, speed = 1) {
  const introMs = speed === 0.5 ? 720 : 460;
  const moveMs = speed === 0.5 ? 1800 : 1120;
  const midHoldMs = speed === 0.5 ? 580 : 340;
  const outroHoldMs = speed === 0.5 ? 1500 : 1150;
  const numTransitions = Math.max(1, stepsCount - 1);
  const totalMs = introMs + numTransitions * moveMs + Math.max(0, numTransitions - 1) * midHoldMs + outroHoldMs;
  return { introMs, moveMs, midHoldMs, outroHoldMs, numTransitions, totalMs };
}

function evaluatePlaybackFrame(playSteps, elapsed, metrics) {
  const { introMs, moveMs, midHoldMs, numTransitions } = metrics;
  if (elapsed <= introMs) {
    return {
      uiStepIdx: 0,
      scene: interpolateBetweenSteps(playSteps[0], playSteps[1], 0, false)
    };
  }

  let rem = elapsed - introMs;
  for (let i = 0; i < numTransitions; i++) {
    if (rem <= moveMs) {
      const rawT = clamp(rem / moveMs, 0, 1);
      return {
        uiStepIdx: rawT < 0.65 ? i : Math.min(i + 1, board.steps.length - 1),
        scene: interpolateBetweenSteps(playSteps[i], playSteps[i + 1], rawT, false)
      };
    }
    rem -= moveMs;

    const isLastTransition = i === numTransitions - 1;
    if (!isLastTransition) {
      if (rem <= midHoldMs) {
        return {
          uiStepIdx: Math.min(i + 1, board.steps.length - 1),
          scene: interpolateBetweenSteps(playSteps[i], playSteps[i + 1], 1, true)
        };
      }
      rem -= midHoldMs;
    } else {
      // Final Outro Hold: keep ball & players resting in their completed final finish positions!
      return {
        uiStepIdx: board.steps.length - 1,
        scene: interpolateBetweenSteps(playSteps[i], playSteps[i + 1], 1, true)
      };
    }
  }

  const lastIdx = numTransitions - 1;
  return {
    uiStepIdx: board.steps.length - 1,
    scene: interpolateBetweenSteps(playSteps[lastIdx], playSteps[lastIdx + 1], 1, true)
  };
}

export function togglePlayTacticsMove() {
  if (isAnimating) {
    stopTacticsAnimation();
    return;
  }

  const playSteps = buildPlaybackSteps(board.steps);
  if (playSteps.length < 2) {
    addTacticsStep();
    score.showMatchToast('Drag players/ball to their Step 2 positions, then tap Play!', '▶️', 2600);
    return;
  }

  isAnimating = true;
  board.isAnimatorOpen = true;
  board.activeStepIdx = 0;
  hapticFeedback('tap');
  const metrics = computePlaybackTimelineMetrics(playSteps.length, board.animSpeed);
  const startedAt = performance.now();

  renderAnimatorBarUI();

  const tick = (now) => {
    if (!isAnimating) return;
    const elapsed = now - startedAt;

    if (elapsed >= metrics.totalMs) {
      isAnimating = false;
      animRafId = null;
      animRenderOverride = null;
      board.activeStepIdx = board.steps.length - 1;
      renderAllUI();
      return;
    }

    const frame = evaluatePlaybackFrame(playSteps, elapsed, metrics);
    board.activeStepIdx = clamp(frame.uiStepIdx, 0, board.steps.length - 1);
    animRenderOverride = frame.scene;

    renderAnimatorBarUI();
    drawTacticsCanvas();
    animRafId = requestAnimationFrame(tick);
  };

  animRafId = requestAnimationFrame(tick);
}

export function stopTacticsAnimation() {
  if (animRafId) {
    cancelAnimationFrame(animRafId);
    animRafId = null;
  }
  if (isAnimating) {
    isAnimating = false;
    animRenderOverride = null;
    renderAllUI();
  }
}

// ---------------- Two-Tab Playbook (Match Plays vs Training & Gear) ----------------
function resetPitchForPlaybookCategory(category) {
  pushUndoSnapshot();
  board.customOppCount = 0;
  board.customOppRoster = null;
  board.activeCue = null;
  board.lanesMode = 'off';
  board.isAnimatorOpen = false;
  board.activeTool = 'move';
  selectedBenchNumber = null;

  if (category === 'training') {
    board.pitchMode = 'blank';
    board.formationId = 'drill-diamond';
    board.retreatLine = false;
    board.oppMode = 'off';
  } else {
    board.pitchMode = '5v5';
    board.formationId = '1-2-1';
    board.retreatLine = true;
    board.oppMode = 'even';
  }

  applyFormationToBoard(board.formationId, { recordUndo: false });
  requestAnimationFrame(() => {
    resizeTacticsCanvas();
    drawTacticsCanvas();
  });
}

export function openTacticsPlaybook(forcedTab) {
  stopTacticsAnimation();
  let targetTab = playbookTab;
  if (forcedTab === 'match' || forcedTab === 'training') {
    targetTab = forcedTab;
    playbookTabManuallyChosen = true;
  } else if (!playbookTabManuallyChosen) {
    const ts = timer.getTimerState();
    const ht = timer.getHalfTimeBreakState();
    const hasGearOnPitch = board.steps.some(s => s.gear && s.gear.length > 0);
    if (ts.hasHalfStarted || ht.active) {
      targetTab = 'match';
    } else if (board.pitchMode === 'blank' || board.activeCue?.category === 'training' || hasGearOnPitch) {
      targetTab = 'training';
    } else {
      targetTab = 'match';
    }
  }

  if (targetTab !== playbookTab) {
    playbookTab = targetTab;
    resetPitchForPlaybookCategory(playbookTab);
  }
  renderPlaybookModalUI();
  document.getElementById('tacticsPlaybookModal')?.classList.remove('hidden');
  hapticFeedback('tap');
}

export function setTacticsPlaybookTab(tab) {
  if (tab !== 'match' && tab !== 'training') return;
  const changed = playbookTab !== tab;
  playbookTab = tab;
  playbookTabManuallyChosen = true;
  if (changed) {
    resetPitchForPlaybookCategory(tab);
  }
  hapticFeedback('tap');
  renderPlaybookModalUI();
}

export function setTacticsDifficultyFilter(diff) {
  if (!['all', 'easy', 'medium', 'advanced'].includes(diff)) return;
  playbookDifficulty = diff;
  hapticFeedback('tap');
  renderPlaybookModalUI();
}

export function setTacticsFormatFilter(fmt) {
  if (!['all', '5v5', '6v6', '7v7'].includes(fmt)) return;
  playbookFormatFilter = fmt;
  hapticFeedback('tap');
  renderPlaybookModalUI();
}

export function dismissTacticsCoachingCue() {
  board.activeCue = null;
  hapticFeedback('tap');
  saveWorkingBoard();
  renderAllUI();
  requestAnimationFrame(() => {
    resizeTacticsCanvas();
    drawTacticsCanvas();
  });
}

export function closeTacticsPlaybook() {
  document.getElementById('tacticsPlaybookModal')?.classList.add('hidden');
}

export function addTacticsGear(kind) {
  const step = board.steps[board.activeStepIdx];
  if (!step) return;
  pushUndoSnapshot();
  const count = (step.gear || []).length;
  // Stagger slightly near pitch centre so multiple cones don't stack invisibly
  const offsetX = ((count % 4) - 1.5) * 7;
  const offsetY = (Math.floor(count / 4) % 3 - 1) * 7;
  const item = {
    id: `g_${Date.now()}_${Math.floor(Math.random() * 999)}`,
    kind,
    x: clamp(50 + offsetX, 14, 86),
    y: clamp(50 + offsetY, 14, 86)
  };
  // Propagate gear across all steps so cones don't vanish mid-animation
  board.steps.forEach(s => {
    if (!Array.isArray(s.gear)) s.gear = [];
    s.gear.push({ ...item });
  });
  board.activeTool = 'move';
  hapticFeedback('success');
  closeTacticsPlaybook();
  saveWorkingBoard();
  renderAllUI();
}

export function clearTacticsGear() {
  const hasAny = board.steps.some(s => s.gear && s.gear.length > 0);
  if (!hasAny) return;
  pushUndoSnapshot();
  board.steps.forEach(s => { s.gear = []; });
  hapticFeedback('tap');
  closeTacticsPlaybook();
  saveWorkingBoard();
  renderAllUI();
}

export function loadBuiltinTacticsTemplate(templateId) {
  const tpl = BUILTIN_TEMPLATES.find(t => t.id === templateId);
  if (!tpl) return;
  stopTacticsAnimation();
  pushUndoSnapshot();

  // Complete clean slate before hydrating the new Play or Drill!
  board.steps = [];
  board.oppRoster = [];
  board.customOppCount = 0;
  board.customOppRoster = null;
  board.activeCue = null;
  board.lanesMode = 'off';
  board.retreatLine = false;
  selectedBenchNumber = null;

  const built = tpl.build();
  playbookTab = tpl.category === 'training' ? 'training' : 'match';
  board.pitchMode = built.pitchMode;
  board.formationId = built.formationId;
  board.retreatLine = Boolean(built.retreatLine);
  board.lanesMode = built.lanesMode || 'off';
  board.oppMode = built.oppMode || 'off';
  board.customOppCount = built.steps[0]?.customOppCount || 0;
  board.customOppRoster = built.customOppRoster ? cloneDeep(built.customOppRoster) : null;
  board.activeCue = {
    title: tpl.title,
    difficulty: tpl.difficulty || 'easy',
    category: tpl.category || 'match',
    standard: tpl.standard || '',
    cue: tpl.cue || ''
  };

  adjustRosterCountForPitchMode(getTeamSizeForMode(board.pitchMode));
  board.steps = cloneDeep(built.steps).map(s => ({
    teamPos: s.teamPos || {},
    oppPos: s.oppPos || {},
    ball: s.ball || { x: 50, y: 89, attachedTo: 't0' },
    gear: Array.isArray(s.gear) ? s.gear : [],
    drawings: Array.isArray(s.drawings) ? s.drawings : []
  }));
  board.activeStepIdx = 0;
  board.isAnimatorOpen = board.steps.length > 1;
  board.activeTool = 'move';

  ensureStepTokensIntegrity();
  closeTacticsPlaybook();
  hapticFeedback('success');
  saveWorkingBoard();
  renderAllUI();
  requestAnimationFrame(() => {
    resizeTacticsCanvas();
    drawTacticsCanvas();
  });
  score.showMatchToast(`Loaded: ${tpl.title}`, '📋', 2000);
}

function inferSavedEntryCategory(item) {
  if (item.category === 'match' || item.category === 'training') return item.category;
  const snap = item.snapshot;
  if (snap?.pitchMode === 'blank') return 'training';
  if (Array.isArray(snap?.steps) && snap.steps.some(s => s.gear && s.gear.length > 0)) return 'training';
  return 'match';
}

function loadSavedPlaybookList() {
  try {
    const raw = localStorage.getItem(PLAYBOOK_STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch (_) {
    return [];
  }
}

function savePlaybookList(list) {
  try {
    localStorage.setItem(PLAYBOOK_STORAGE_KEY, JSON.stringify(list.slice(0, MAX_SAVED_BOARDS)));
  } catch (_) {}
}

export function saveCurrentTacticsToPlaybook() {
  const input = document.getElementById('tacticsSaveNameInput');
  const rawName = (input?.value || '').trim();
  const defaultPrefix = playbookTab === 'training' ? 'Drill' : (PITCH_MODES[board.pitchMode]?.label || '5v5');
  const name = rawName || `${defaultPrefix} ${board.formationId.toUpperCase()}`;

  const list = loadSavedPlaybookList();
  const entry = {
    id: `pb_${Date.now()}`,
    category: playbookTab,
    name: name.slice(0, 32),
    dateStr: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
    pitchLabel: PITCH_MODES[board.pitchMode]?.label || '5v5',
    stepsCount: board.steps.length,
    snapshot: {
      pitchMode: board.pitchMode,
      formationId: board.formationId,
      retreatLine: board.retreatLine,
      lanesMode: board.lanesMode,
      oppMode: board.oppMode,
      customOppCount: board.customOppCount,
      customOppRoster: board.customOppRoster ? cloneDeep(board.customOppRoster) : null,
      activeCue: board.activeCue ? cloneDeep(board.activeCue) : null,
      steps: cloneDeep(board.steps)
    }
  };

  list.unshift(entry);
  savePlaybookList(list);
  if (input) input.value = '';
  hapticFeedback('success');
  renderPlaybookModalUI();
  score.showMatchToast(`Saved "${entry.name}" to ${playbookTab === 'training' ? 'Training Drills' : 'Match Plays'}`, '💾', 2000);
}

export function loadSavedPlaybookEntry(entryId) {
  const list = loadSavedPlaybookList();
  const found = list.find(x => x.id === entryId);
  if (!found || !found.snapshot) return;

  stopTacticsAnimation();
  pushUndoSnapshot();

  // Complete clean slate before hydrating saved Play or Drill!
  board.steps = [];
  board.oppRoster = [];
  board.customOppCount = 0;
  board.customOppRoster = null;
  board.activeCue = null;
  selectedBenchNumber = null;

  const snap = cloneDeep(found.snapshot);
  playbookTab = inferSavedEntryCategory(found);
  board.pitchMode = snap.pitchMode || '5v5';
  board.formationId = snap.formationId || '1-2-1';
  board.retreatLine = Boolean(snap.retreatLine);
  board.lanesMode = snap.lanesMode || 'off';
  board.oppMode = snap.oppMode || 'off';
  board.customOppCount = snap.customOppCount || 0;
  board.customOppRoster = snap.customOppRoster ? cloneDeep(snap.customOppRoster) : null;
  board.activeCue = snap.activeCue ? cloneDeep(snap.activeCue) : null;

  adjustRosterCountForPitchMode(getTeamSizeForMode(board.pitchMode));
  board.steps = snap.steps;
  board.activeStepIdx = 0;
  board.isAnimatorOpen = board.steps.length > 1;
  board.activeTool = 'move';

  ensureStepTokensIntegrity();
  closeTacticsPlaybook();
  hapticFeedback('success');
  saveWorkingBoard();
  renderAllUI();
  requestAnimationFrame(() => {
    resizeTacticsCanvas();
    drawTacticsCanvas();
  });
  score.showMatchToast(`Loaded "${found.name}"`, '📋', 2000);
}

export function deleteSavedPlaybookEntry(entryId) {
  const list = loadSavedPlaybookList().filter(x => x.id !== entryId);
  savePlaybookList(list);
  hapticFeedback('tap');
  renderPlaybookModalUI();
}

// ---------------- Live Half-Time / Match Clock Pill ----------------
function updateTacticsClockPillUI() {
  const pill = document.getElementById('tacticsClockPill');
  const textEl = document.getElementById('tacticsClockText');
  if (!pill || !textEl) return;

  const ht = timer.getHalfTimeBreakState();
  if (ht.active) {
    textEl.innerText = `HT ${timer.formatTime(ht.remainingSeconds)}`;
    pill.className = ht.remainingSeconds <= 30
      ? 'px-2 py-0.5 rounded-full bg-amber-500/25 border border-amber-400 text-amber-200 font-mono-sport font-black text-[10px] flex items-center gap-1 animate-pulse shrink-0'
      : 'px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/70 text-indigo-200 font-mono-sport font-black text-[10px] flex items-center gap-1 shrink-0';
    return;
  }

  const ts = timer.getTimerState();
  if (ts.currentPeriod === 'Full Time') {
    textEl.innerText = 'FULL TIME';
    pill.className = 'px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-amber-300 font-mono-sport font-black text-[10px] flex items-center gap-1 shrink-0';
  } else {
    const pShort = ts.currentPeriod === '2nd Half' ? '2H' : '1H';
    textEl.innerText = `${pShort} ${timer.formatTime(ts.timerSeconds)}`;
    pill.className = ts.isTimerRunning
      ? 'px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-emerald-300 font-mono-sport font-black text-[10px] flex items-center gap-1 shrink-0'
      : 'px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono-sport font-bold text-[10px] flex items-center gap-1 shrink-0';
  }
}

function startTacticsClockTicker() {
  stopTacticsClockTicker();
  updateTacticsClockPillUI();
  clockPollInterval = setInterval(updateTacticsClockPillUI, 500);
}

function stopTacticsClockTicker() {
  if (clockPollInterval) {
    clearInterval(clockPollInterval);
    clockPollInterval = null;
  }
}

// ---------------- UI Synchronization ----------------
function updateUndoButtonUI() {
  const undoBtn = document.getElementById('tacticsToolUndoBtn');
  if (undoBtn) {
    undoBtn.classList.toggle('opacity-40', undoStack.length === 0);
  }
}

function renderTopControlsUI() {
  const pitchSel = document.getElementById('tacticsPitchSelect');
  if (pitchSel && pitchSel.value !== board.pitchMode) {
    pitchSel.value = board.pitchMode;
  }

  const formSel = document.getElementById('tacticsFormationSelect');
  if (formSel) {
    const hasFormations = ['5v5', '6v6', '7v7'].includes(board.pitchMode);
    formSel.classList.toggle('hidden', !hasFormations);
    if (hasFormations) {
      const list = FORMATIONS[board.pitchMode] || FORMATIONS['5v5'];
      const validId = list.some(f => f.id === board.formationId) ? board.formationId : list[0].id;
      formSel.innerHTML = list.map(f => `<option value="${f.id}" ${f.id === validId ? 'selected' : ''}>${f.short}</option>`).join('');
    }
  }

  const retreatBtn = document.getElementById('tacticsRetreatBtn');
  if (retreatBtn) {
    const supported = board.pitchMode === '5v5';
    retreatBtn.classList.toggle('hidden', !supported);
    if (supported) {
      retreatBtn.className = board.retreatLine
        ? 'px-2 py-1 rounded-lg text-[10px] font-black border bg-amber-500/20 border-amber-400 text-amber-300 transition cursor-pointer shrink-0'
        : 'px-2 py-1 rounded-lg text-[10px] font-bold border bg-slate-900 border-slate-700 text-slate-400 hover:text-white transition cursor-pointer shrink-0';
      retreatBtn.innerText = board.retreatLine ? 'Retreat: ON' : 'Retreat: OFF';
    }
  }

  const lanesBtn = document.getElementById('tacticsLanesBtn');
  if (lanesBtn) {
    const labelMap = { off: 'Lanes: Off', lanes: '3 Lanes', thirds: '3 Thirds' };
    lanesBtn.innerText = labelMap[board.lanesMode] || 'Lanes: Off';
    lanesBtn.className = board.lanesMode !== 'off'
      ? 'px-2 py-1 rounded-lg text-[10px] font-black border bg-sky-500/20 border-sky-400 text-sky-300 transition cursor-pointer shrink-0'
      : 'px-2 py-1 rounded-lg text-[10px] font-bold border bg-slate-900 border-slate-700 text-slate-400 hover:text-white transition cursor-pointer shrink-0';
  }

  const oppBtn = document.getElementById('tacticsOppBtn');
  if (oppBtn) {
    const sz = getTeamSizeForMode(board.pitchMode);
    const oppLabels = {
      off: 'Opp: Off',
      even: `Opp: ${sz}`,
      powerplay: `Opp: ${sz + 1} ⚡`
    };
    oppBtn.innerText = oppLabels[board.oppMode] || 'Opp: Off';
    oppBtn.className = board.oppMode !== 'off'
      ? 'px-2 py-1 rounded-lg text-[10px] font-black border bg-blue-500/20 border-blue-400 text-blue-200 transition cursor-pointer shrink-0'
      : 'px-2 py-1 rounded-lg text-[10px] font-bold border bg-slate-900 border-slate-700 text-slate-400 hover:text-white transition cursor-pointer shrink-0';
  }

  const animToggleBtn = document.getElementById('tacticsAnimToggleBtn');
  if (animToggleBtn) {
    const stepBadge = board.steps.length > 1 ? ` (${board.steps.length})` : '';
    animToggleBtn.innerText = `Animate${stepBadge}`;
    animToggleBtn.className = board.isAnimatorOpen || board.steps.length > 1
      ? 'px-2 py-1 rounded-lg text-[10px] font-black border bg-emerald-500/20 border-emerald-400 text-emerald-300 transition cursor-pointer shrink-0'
      : 'px-2 py-1 rounded-lg text-[10px] font-bold border bg-slate-900 border-slate-700 text-slate-300 hover:text-white transition cursor-pointer shrink-0';
  }

  // Video clip share button shown whenever 2+ animation steps exist
  const videoBtn = document.getElementById('tacticsShareVideoBtn');
  if (videoBtn) {
    const canRecord = typeof window !== 'undefined' && typeof window.MediaRecorder !== 'undefined';
    videoBtn.classList.toggle('hidden', !(board.steps.length >= 2 && canRecord));
  }
}

function renderBenchStripUI() {
  const container = document.getElementById('tacticsBenchTokens');
  const hintEl = document.getElementById('tacticsBenchHint');
  if (!container) return;

  if (hintEl) {
    hintEl.innerText = selectedBenchNumber
      ? `Tap pitch player for #${selectedBenchNumber}:`
      : 'SUBS:';
    hintEl.className = selectedBenchNumber
      ? 'text-[10px] font-black text-amber-300 truncate shrink-0'
      : 'text-[10px] font-black text-slate-400 uppercase tracking-wider shrink-0';
  }

  if (board.benchRoster.length === 0) {
    container.innerHTML = `<span class="text-[10px] text-slate-500 italic">No bench subs</span>`;
    return;
  }

  const ownColor = board.teamMeta.color || '#eab308';
  const isLight = ['#eab308', '#f8fafc'].includes(ownColor.toLowerCase());
  const textCol = isLight ? '#0f172a' : '#ffffff';

  container.innerHTML = board.benchRoster.map(b => {
    const label = b.initials ? `#${b.number} ${score.escapeHtml(b.initials)}` : `#${b.number}`;
    const isSel = selectedBenchNumber === b.number;
    return `
      <button type="button"
        data-bench-num="${b.number}"
        onclick="selectBenchChipForSwap(${b.number})"
        style="background:${ownColor}; color:${textCol};"
        class="tactics-bench-chip px-2 py-0.5 rounded-full font-mono-sport font-black text-[10.5px] shrink-0 shadow cursor-grab active:scale-95 transition ${isSel ? 'ring-2 ring-white scale-105' : 'border border-white/50'}">
        ${label}
      </button>
    `;
  }).join('');

  // Attach touch/mouse drag-to-pitch handlers on bench chips
  container.querySelectorAll('.tactics-bench-chip').forEach(btn => {
    btn.addEventListener('pointerdown', onBenchChipPointerDown);
  });
}

function renderAnimatorBarUI() {
  const bar = document.getElementById('tacticsAnimatorBar');
  const stepsEl = document.getElementById('tacticsStepPills');
  const speedBtn = document.getElementById('tacticsSpeedBtn');
  const playBtn = document.getElementById('tacticsPlayMoveBtn');
  if (!bar) return;

  bar.classList.toggle('hidden', !board.isAnimatorOpen);
  if (!board.isAnimatorOpen) return;

  if (stepsEl) {
    const compact = board.steps.length >= 4;
    const padCls = board.steps.length >= 5 ? 'px-1.5 py-1 text-[10px]' : 'px-2 py-1 text-[10.5px]';
    let html = board.steps.map((_, idx) => {
      const active = idx === board.activeStepIdx;
      const lbl = compact ? `S${idx + 1}` : `Step ${idx + 1}`;
      return `<button type="button" onclick="selectTacticsStep(${idx})" class="${padCls} rounded-lg font-mono-sport font-black whitespace-nowrap transition cursor-pointer ${active ? 'bg-amber-400 text-slate-950 shadow' : 'bg-slate-900 text-slate-400 border border-slate-700 hover:text-white'}">${lbl}</button>`;
    }).join('');

    if (board.steps.length < MAX_STEPS) {
      const addLbl = compact ? '+S' : '+ Step';
      html += `<button type="button" onclick="addTacticsStep()" class="px-2 py-1 rounded-lg font-mono-sport font-bold text-[10.5px] whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/40 cursor-pointer transition" title="Add animation step">${addLbl}</button>`;
    }
    if (board.steps.length > 1) {
      html += `<button type="button" onclick="deleteLastTacticsStep()" class="px-1.5 py-1 rounded-lg font-bold text-[10px] whitespace-nowrap bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-300 border border-slate-800 cursor-pointer transition" title="Remove last step">✕</button>`;
    }
    stepsEl.innerHTML = html;
  }

  if (speedBtn) {
    speedBtn.innerText = `${board.animSpeed}×`;
  }

  if (playBtn) {
    if (isAnimating) {
      playBtn.innerHTML = `<span>■ STOP</span>`;
      playBtn.className = 'px-2.5 py-1 rounded-lg bg-rose-500 hover:bg-rose-400 text-white font-mono-sport font-black text-[11px] flex items-center gap-1 cursor-pointer shadow shrink-0';
    } else {
      playBtn.innerHTML = `<span>▶ PLAY</span>`;
      playBtn.className = 'px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono-sport font-black text-[11px] flex items-center gap-1 cursor-pointer shadow shrink-0';
    }
  }
}

function renderToolDockUI() {
  const tools = ['move', 'pass', 'run', 'dribble', 'zone'];
  tools.forEach(t => {
    const btn = document.getElementById(`tacticsTool_${t}`);
    if (!btn) return;
    const active = board.activeTool === t;
    btn.className = active
      ? 'tactics-dock-btn py-1.5 px-1 rounded-xl bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex flex-col items-center justify-center gap-0.5 font-black text-[10px] transition cursor-pointer shadow-sm'
      : 'tactics-dock-btn py-1.5 px-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 flex flex-col items-center justify-center gap-0.5 font-bold text-[10px] transition cursor-pointer active:scale-95';
  });
  updateUndoButtonUI();
}

function renderCoachingCueBarUI() {
  const bar = document.getElementById('tacticsCoachingCueBar');
  const badgeEl = document.getElementById('tacticsCoachingCueDiffBadge');
  const textEl = document.getElementById('tacticsCoachingCueText');
  if (!bar || !textEl) return;

  if (!board.activeCue || !board.activeCue.cue) {
    bar.classList.add('hidden');
    return;
  }

  bar.classList.remove('hidden');
  textEl.innerText = board.activeCue.cue;

  if (badgeEl) {
    const diff = board.activeCue.difficulty || 'easy';
    const diffStyles = {
      easy: 'px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 font-mono-sport font-black text-[9px] uppercase shrink-0',
      medium: 'px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/50 font-mono-sport font-black text-[9px] uppercase shrink-0',
      advanced: 'px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-400/50 font-mono-sport font-black text-[9px] uppercase shrink-0'
    };
    badgeEl.className = diffStyles[diff] || diffStyles.easy;
    badgeEl.innerText = diff === 'advanced' ? 'ADV CUE' : `${diff.toUpperCase()} CUE`;
  }
}

function renderPlaybookModalUI() {
  const matchTabBtn = document.getElementById('tacticsTabMatchBtn');
  const trainTabBtn = document.getElementById('tacticsTabTrainingBtn');
  const gearSection = document.getElementById('tacticsTrainingGearSection');
  const builtinHeading = document.getElementById('tacticsBuiltinHeading');
  const savedHeading = document.getElementById('tacticsSavedHeading');
  const saveInput = document.getElementById('tacticsSaveNameInput');

  const isTrain = playbookTab === 'training';

  if (matchTabBtn) {
    matchTabBtn.className = !isTrain
      ? 'playbook-tab-btn flex-1 py-2 px-2 rounded-xl bg-amber-500 text-slate-950 font-black text-xs shadow flex items-center justify-center gap-1.5 transition cursor-pointer'
      : 'playbook-tab-btn flex-1 py-2 px-2 rounded-xl text-slate-400 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer';
  }
  if (trainTabBtn) {
    trainTabBtn.className = isTrain
      ? 'playbook-tab-btn flex-1 py-2 px-2 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs shadow flex items-center justify-center gap-1.5 transition cursor-pointer'
      : 'playbook-tab-btn flex-1 py-2 px-2 rounded-xl text-slate-400 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer';
  }

  // Hide Training Gear clutter on Saturday Match Plays tab!
  gearSection?.classList.toggle('hidden', !isTrain);

  if (builtinHeading) {
    builtinHeading.innerText = isTrain
      ? 'Academy Session Drills (Full Step-by-Step)'
      : 'Academy Match Plays by Squad Size (Full Step-by-Step)';
  }
  if (savedHeading) {
    savedHeading.innerText = isTrain ? 'My Saved Training Drills' : 'My Saved Match Plays';
  }
  if (saveInput) {
    saveInput.placeholder = isTrain ? 'Name this training drill...' : 'Name this match play...';
  }

  const allTabTemplates = BUILTIN_TEMPLATES.filter(t => t.category === playbookTab);

  // Squad Size Filter Bar (Visible on Match Plays tab: All Sizes | 5v5 | 6v6 | 7v7)
  const fmtBar = document.getElementById('tacticsFormatFilterBar');
  if (fmtBar) {
    if (isTrain) {
      fmtBar.classList.add('hidden');
    } else {
      fmtBar.classList.remove('hidden');
      const fmtCounts = {
        all: allTabTemplates.length,
        '5v5': allTabTemplates.filter(t => t.squadFormat === '5v5').length,
        '6v6': allTabTemplates.filter(t => t.squadFormat === '6v6').length,
        '7v7': allTabTemplates.filter(t => t.squadFormat === '7v7').length
      };
      const fmtPills = [
        { id: 'all', label: `All (${fmtCounts.all})` },
        { id: '5v5', label: `5v5 (${fmtCounts['5v5']})` },
        { id: '6v6', label: `6v6 (${fmtCounts['6v6']})` },
        { id: '7v7', label: `7v7 (${fmtCounts['7v7']})` }
      ];
      fmtBar.innerHTML = fmtPills.map(p => {
        const isAct = playbookFormatFilter === p.id;
        const cls = isAct
          ? 'playbook-diff-chip flex-1 py-1.5 px-1.5 rounded-lg border border-sky-300 bg-sky-400 text-slate-950 font-black text-[10.5px] shadow-sm transition cursor-pointer text-center whitespace-nowrap'
          : 'playbook-diff-chip flex-1 py-1.5 px-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-[10.5px] transition cursor-pointer text-center whitespace-nowrap';
        return `<button type="button" onclick="setTacticsFormatFilter('${p.id}')" class="${cls}">${p.label}</button>`;
      }).join('');
    }
  }

  const formatFilteredTemplates = (!isTrain && playbookFormatFilter !== 'all')
    ? allTabTemplates.filter(t => t.squadFormat === playbookFormatFilter)
    : allTabTemplates;

  // Render Difficulty Filter Pills with Counts (scoped to active Squad Size!)
  const diffBar = document.getElementById('tacticsDifficultyFilterBar');
  if (diffBar) {
    const counts = {
      all: formatFilteredTemplates.length,
      easy: formatFilteredTemplates.filter(t => t.difficulty === 'easy').length,
      medium: formatFilteredTemplates.filter(t => t.difficulty === 'medium').length,
      advanced: formatFilteredTemplates.filter(t => t.difficulty === 'advanced').length
    };
    const pills = [
      { id: 'all', label: `All (${counts.all})`, activeCls: 'bg-slate-200 text-slate-950 border-white font-black' },
      { id: 'easy', label: `Easy (${counts.easy})`, activeCls: 'bg-emerald-500 text-slate-950 border-emerald-300 font-black' },
      { id: 'medium', label: `Medium (${counts.medium})`, activeCls: 'bg-amber-400 text-slate-950 border-yellow-200 font-black' },
      { id: 'advanced', label: `Adv (${counts.advanced})`, activeCls: 'bg-rose-500 text-white border-rose-300 font-black' }
    ];
    diffBar.innerHTML = pills.map(p => {
      const isAct = playbookDifficulty === p.id;
      const cls = isAct
        ? `playbook-diff-chip flex-1 py-1.5 px-1.5 rounded-lg border text-[10.5px] shadow-sm transition cursor-pointer text-center whitespace-nowrap ${p.activeCls}`
        : 'playbook-diff-chip flex-1 py-1.5 px-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-[10.5px] transition cursor-pointer text-center whitespace-nowrap';
      return `<button type="button" onclick="setTacticsDifficultyFilter('${p.id}')" class="${cls}">${p.label}</button>`;
    }).join('');
  }

  // Render Filtered Built-In Plays / Drills
  const tplList = document.getElementById('tacticsBuiltinTemplatesList');
  if (tplList) {
    const visibleTemplates = playbookDifficulty === 'all'
      ? formatFilteredTemplates
      : formatFilteredTemplates.filter(t => t.difficulty === playbookDifficulty);

    const diffBadgeMap = {
      easy: { label: 'EASY', cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      medium: { label: 'MEDIUM', cls: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
      advanced: { label: 'ADVANCED', cls: 'bg-rose-500/20 text-rose-300 border-rose-500/40' }
    };

    tplList.innerHTML = visibleTemplates.map(t => {
      const db = diffBadgeMap[t.difficulty] || diffBadgeMap.easy;
      return `
        <button type="button" onclick="loadBuiltinTacticsTemplate('${t.id}')" class="w-full p-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-amber-400/60 text-left flex flex-col gap-1.5 transition active:scale-[0.99] cursor-pointer shadow-sm">
          <div class="w-full flex items-center justify-between gap-1.5">
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="px-1.5 py-0.5 rounded border font-mono-sport font-black text-[9px] shrink-0 ${db.cls}">${db.label}</span>
              <span class="font-extrabold text-xs text-white truncate">${score.escapeHtml(t.title)}</span>
            </div>
            <span class="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700 font-mono-sport font-bold text-[9px] shrink-0">${score.escapeHtml(t.tag)}</span>
          </div>
          <p class="text-[10.5px] text-slate-300 leading-snug">${score.escapeHtml(t.desc)}</p>
          <div class="flex items-start justify-between gap-2 pt-1 border-t border-slate-800/80 text-[10px]">
            <span class="text-amber-300/95 font-semibold leading-snug">Cue: “${score.escapeHtml(t.cue || '')}”</span>
            <span class="text-slate-500 font-mono-sport font-bold text-[9px] uppercase shrink-0 pt-0.5">${score.escapeHtml(t.standard || '')}</span>
          </div>
        </button>
      `;
    }).join('');
  }

  // Render Category-Separated Saved Boards
  const savedEl = document.getElementById('tacticsSavedBoardsList');
  if (savedEl) {
    const allItems = loadSavedPlaybookList();
    const items = allItems.filter(item => inferSavedEntryCategory(item) === playbookTab);
    if (items.length === 0) {
      const emptyLabel = isTrain
        ? 'No saved training drills yet — drop cones or tweak a drill and tap Save!'
        : 'No saved match plays yet — set up your formation or set-piece and tap Save!';
      savedEl.innerHTML = `<div class="text-center py-2.5 text-[11px] text-slate-500 italic">${emptyLabel}</div>`;
    } else {
      savedEl.innerHTML = items.map(item => `
        <div class="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2">
          <button type="button" onclick="loadSavedPlaybookEntry('${score.escapeHtml(item.id)}')" class="flex-1 text-left min-w-0 cursor-pointer">
            <div class="font-bold text-xs text-white truncate">${score.escapeHtml(item.name)}</div>
            <div class="text-[10px] text-slate-400 font-mono-sport">${score.escapeHtml(item.pitchLabel)} • ${item.stepsCount || 1} step${(item.stepsCount || 1) === 1 ? '' : 's'} • ${score.escapeHtml(item.dateStr || '')}</div>
          </button>
          <div class="flex items-center gap-1 shrink-0">
            <button type="button" onclick="loadSavedPlaybookEntry('${score.escapeHtml(item.id)}')" class="px-2 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-black text-[10px] cursor-pointer">Load</button>
            <button type="button" onclick="deleteSavedPlaybookEntry('${score.escapeHtml(item.id)}')" class="px-1.5 py-1 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-500 hover:text-rose-400 font-bold text-[10px] cursor-pointer" title="Delete">✕</button>
          </div>
        </div>
      `).join('');
    }
  }
}

function renderAllUI() {
  renderTopControlsUI();
  renderCoachingCueBarUI();
  renderBenchStripUI();
  renderAnimatorBarUI();
  renderToolDockUI();
  updateTacticsClockPillUI();
  drawTacticsCanvas();
}

// ---------------- 2x Retina Pitch & Vector Rendering Engine ----------------
function getCanvasAndMetrics() {
  const canvas = document.getElementById('tacticsPitchCanvas');
  if (!canvas) return null;
  const rect = canvas.getBoundingClientRect();
  return { canvas, width: rect.width || 340, height: rect.height || 440 };
}

export function resizeTacticsCanvas() {
  const m = getCanvasAndMetrics();
  if (!m || m.width <= 10 || m.height <= 10) return;
  const dpr = Math.min(window.devicePixelRatio || 2, 3);
  const targetW = Math.round(m.width * dpr);
  const targetH = Math.round(m.height * dpr);
  if (m.canvas.width !== targetW || m.canvas.height !== targetH) {
    m.canvas.width = targetW;
    m.canvas.height = targetH;
  }
}

function normToPx(nx, ny, w, h, pad = 14) {
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  return {
    x: pad + (nx / 100) * innerW,
    y: pad + (ny / 100) * innerH
  };
}

function pxToNorm(px, py, w, h, pad = 14) {
  const innerW = Math.max(1, w - pad * 2);
  const innerH = Math.max(1, h - pad * 2);
  return {
    x: clamp(((px - pad) / innerW) * 100, 3, 97),
    y: clamp(((py - pad) / innerH) * 100, 3, 97)
  };
}

function drawPitchSurfaceAndLines(ctx, w, h, pad, isSunlight) {
  // 1. Mown grass stripes
  const stripeCount = 10;
  const stripeH = h / stripeCount;
  for (let i = 0; i < stripeCount; i++) {
    if (isSunlight) {
      ctx.fillStyle = i % 2 === 0 ? '#052e16' : '#06371b';
    } else {
      ctx.fillStyle = i % 2 === 0 ? '#0d4a29' : '#0a3f23';
    }
    ctx.fillRect(0, i * stripeH, w, stripeH + 1);
  }

  const left = pad;
  const top = pad;
  const right = w - pad;
  const bottom = h - pad;
  const pw = right - left;
  const ph = bottom - top;
  const cx = left + pw / 2;
  const cy = top + ph / 2;

  // 2. Spatial Overlays (3 Vertical Lanes or 3 Horizontal Thirds)
  if (board.lanesMode === 'lanes') {
    ctx.save();
    ctx.strokeStyle = isSunlight ? 'rgba(255,230,0,0.45)' : 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1.6;
    ctx.setLineDash([6, 6]);
    [left + pw / 3, left + (2 * pw) / 3].forEach(lx => {
      ctx.beginPath();
      ctx.moveTo(lx, top);
      ctx.lineTo(lx, bottom);
      ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.fillStyle = isSunlight ? 'rgba(255,230,0,0.42)' : 'rgba(255,255,255,0.16)';
    ctx.font = '700 10px "Chakra Petch", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('LEFT LANE', left + pw / 6, cy - 8);
    ctx.fillText('CENTRE', cx, cy - 8);
    ctx.fillText('RIGHT LANE', right - pw / 6, cy - 8);
    ctx.restore();
  } else if (board.lanesMode === 'thirds') {
    ctx.save();
    ctx.strokeStyle = isSunlight ? 'rgba(255,230,0,0.45)' : 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1.6;
    ctx.setLineDash([6, 6]);
    [top + ph / 3, top + (2 * ph) / 3].forEach(ly => {
      ctx.beginPath();
      ctx.moveTo(left, ly);
      ctx.lineTo(right, ly);
      ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.fillStyle = isSunlight ? 'rgba(255,230,0,0.42)' : 'rgba(255,255,255,0.16)';
    ctx.font = '700 10px "Chakra Petch", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('ATTACKING THIRD', right - 8, top + ph / 6);
    ctx.fillText('MIDDLE THIRD', right - 8, cy - 8);
    ctx.fillText('BUILD-UP THIRD', right - 8, bottom - ph / 6);
    ctx.restore();
  }

  // 3. Pitch White Touchlines & Markings
  ctx.save();
  ctx.strokeStyle = isSunlight ? '#ffffff' : 'rgba(255,255,255,0.82)';
  ctx.lineWidth = isSunlight ? 2.8 : 2.1;
  ctx.strokeRect(left, top, pw, ph);

  if (board.pitchMode === 'blank') {
    ctx.restore();
    return;
  }

  if (board.pitchMode === 'half') {
    // Top Goal + Attacking Penalty Area + Halfway circle arc at bottom
    const goalW = pw * 0.24;
    ctx.strokeRect(cx - goalW / 2, top - 6, goalW, 6);
    const boxW = pw * 0.58;
    const boxH = ph * 0.28;
    ctx.strokeRect(cx - boxW / 2, top, boxW, boxH);
    const sixW = pw * 0.30;
    const sixH = ph * 0.11;
    ctx.strokeRect(cx - sixW / 2, top, sixW, sixH);
    // Penalty spot
    ctx.fillStyle = ctx.strokeStyle;
    ctx.beginPath();
    ctx.arc(cx, top + boxH * 0.68, 2.8, 0, Math.PI * 2);
    ctx.fill();
    // Centre circle arc at bottom halfway line
    ctx.beginPath();
    ctx.arc(cx, bottom, pw * 0.18, Math.PI, 0);
    ctx.stroke();
    ctx.restore();
    return;
  }

  // Full Small-Sided Pitches (5v5, 6v6, 7v7)
  // Halfway line & centre circle
  ctx.beginPath();
  ctx.moveTo(left, cy);
  ctx.lineTo(right, cy);
  ctx.stroke();

  const circleR = Math.min(pw, ph) * 0.135;
  ctx.beginPath();
  ctx.arc(cx, cy, circleR, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = ctx.strokeStyle;
  ctx.beginPath();
  ctx.arc(cx, cy, 2.8, 0, Math.PI * 2);
  ctx.fill();

  // Goals & Penalty Areas
  const goalW = board.pitchMode === '7v7' ? pw * 0.22 : pw * 0.19;
  ctx.strokeRect(cx - goalW / 2, top - 5, goalW, 5);
  ctx.strokeRect(cx - goalW / 2, bottom, goalW, 5);

  const boxW = board.pitchMode === '7v7' ? pw * 0.56 : (board.pitchMode === '6v6' ? pw * 0.50 : pw * 0.46);
  const boxH = board.pitchMode === '7v7' ? ph * 0.165 : ph * 0.145;
  ctx.strokeRect(cx - boxW / 2, top, boxW, boxH);
  ctx.strokeRect(cx - boxW / 2, bottom - boxH, boxW, boxH);

  // U9 Halfway Retreat Line Cue (5v5)
  if (board.pitchMode === '5v5' && board.retreatLine) {
    const retreatY = cy - 4;
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.4;
    ctx.setLineDash([7, 5]);
    ctx.beginPath();
    ctx.moveTo(left + 2, retreatY);
    ctx.lineTo(right - 2, retreatY);
    ctx.stroke();
    ctx.setLineDash([]);

    const tagText = 'U9 RETREAT LINE';
    ctx.font = '700 9.5px "Chakra Petch", sans-serif';
    const tw = ctx.measureText(tagText).width + 10;
    const tx = right - tw - 6;
    const ty = retreatY - 17;
    ctx.fillStyle = 'rgba(7, 9, 14, 0.86)';
    ctx.fillRect(tx, ty, tw, 14);
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.75)';
    ctx.lineWidth = 1;
    ctx.strokeRect(tx, ty, tw, 14);
    ctx.fillStyle = '#fde68a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(tagText, tx + tw / 2, ty + 7.5);
  }

  ctx.restore();
}

function drawArrowhead(ctx, fromX, fromY, toX, toY, color, size = 10) {
  const angle = Math.atan2(toY - fromY, toX - fromX);
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - size * Math.cos(angle - Math.PI / 6), toY - size * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - size * Math.cos(angle + Math.PI / 6), toY - size * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawSmoothCurve(ctx, pxPts) {
  if (pxPts.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(pxPts[0].x, pxPts[0].y);
  if (pxPts.length === 2) {
    ctx.lineTo(pxPts[1].x, pxPts[1].y);
    return;
  }
  for (let i = 1; i < pxPts.length - 1; i++) {
    const midX = (pxPts[i].x + pxPts[i + 1].x) / 2;
    const midY = (pxPts[i].y + pxPts[i + 1].y) / 2;
    ctx.quadraticCurveTo(pxPts[i].x, pxPts[i].y, midX, midY);
  }
  const last = pxPts[pxPts.length - 1];
  ctx.lineTo(last.x, last.y);
}

function drawWavyPath(ctx, pxPts) {
  if (pxPts.length < 2) return;
  // Resample polyline uniformly and apply perpendicular sine-wave
  const dense = [pxPts[0]];
  for (let i = 1; i < pxPts.length; i++) {
    const a = pxPts[i - 1];
    const b = pxPts[i];
    const dist = Math.hypot(b.x - a.x, b.y - a.y);
    const steps = Math.max(1, Math.ceil(dist / 5));
    for (let s = 1; s <= steps; s++) {
      dense.push({ x: a.x + ((b.x - a.x) * s) / steps, y: a.y + ((b.y - a.y) * s) / steps });
    }
  }

  ctx.beginPath();
  let cumDist = 0;
  const waveAmp = 4.2;
  const waveFreq = 0.28;
  for (let i = 0; i < dense.length; i++) {
    const p = dense[i];
    if (i > 0) cumDist += Math.hypot(p.x - dense[i - 1].x, p.y - dense[i - 1].y);
    const prev = dense[Math.max(0, i - 1)];
    const next = dense[Math.min(dense.length - 1, i + 1)];
    const tx = next.x - prev.x;
    const ty = next.y - prev.y;
    const len = Math.hypot(tx, ty) || 1;
    const nx = -ty / len;
    const ny = tx / len;
    // Taper amplitude near endpoints so arrowhead aligns cleanly
    const edgeFade = Math.min(1, i / 4, (dense.length - 1 - i) / 4);
    const offset = Math.sin(cumDist * waveFreq) * waveAmp * edgeFade;
    const wx = p.x + nx * offset;
    const wy = p.y + ny * offset;
    if (i === 0) ctx.moveTo(wx, wy);
    else ctx.lineTo(wx, wy);
  }
}

function drawTacticalStroke(ctx, d, w, h, pad, isSunlight) {
  ctx.save();
  if (d.type === 'zone') {
    const p1 = normToPx(d.x1, d.y1, w, h, pad);
    const p2 = normToPx(d.x2, d.y2, w, h, pad);
    const cx = (p1.x + p2.x) / 2;
    const cy = (p1.y + p2.y) / 2;
    const rx = Math.max(10, Math.abs(p2.x - p1.x) / 2);
    const ry = Math.max(10, Math.abs(p2.y - p1.y) / 2);

    ctx.fillStyle = isSunlight ? 'rgba(255, 230, 0, 0.24)' : 'rgba(251, 191, 36, 0.17)';
    ctx.strokeStyle = isSunlight ? '#FFE600' : '#fbbf24';
    ctx.lineWidth = 2.2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    return;
  }

  const pts = (d.pts || []).map(p => normToPx(p.x, p.y, w, h, pad));
  if (pts.length < 2) {
    ctx.restore();
    return;
  }

  const colorMap = {
    pass: isSunlight ? '#ffffff' : '#ffffff',
    run: isSunlight ? '#FFE600' : '#38bdf8',
    dribble: isSunlight ? '#ff79c6' : '#c084fc'
  };
  const strokeCol = colorMap[d.type] || '#ffffff';

  // Subtle dark shadow under stroke for outdoor contrast
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowColor = 'rgba(0,0,0,0.65)';
  ctx.shadowBlur = 4;
  ctx.strokeStyle = strokeCol;
  ctx.lineWidth = 3.1;

  if (d.type === 'run') {
    ctx.setLineDash([8, 6]);
    drawSmoothCurve(ctx, pts);
    ctx.stroke();
    ctx.setLineDash([]);
  } else if (d.type === 'dribble') {
    drawWavyPath(ctx, pts);
    ctx.stroke();
  } else {
    drawSmoothCurve(ctx, pts);
    ctx.stroke();
  }

  const tail = pts[Math.max(0, pts.length - 3)];
  const tip = pts[pts.length - 1];
  drawArrowhead(ctx, tail.x, tail.y, tip.x, tip.y, strokeCol, 11);
  ctx.restore();
}

function drawGearItem(ctx, g, w, h, pad) {
  const p = normToPx(g.x, g.y, w, h, pad);
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.55)';
  ctx.shadowBlur = 5;

  if (g.kind.startsWith('cone-')) {
    const colMap = {
      'cone-amber': '#fbbf24',
      'cone-sky': '#38bdf8',
      'cone-rose': '#fb7185',
      'cone-lime': '#a3e635'
    };
    ctx.fillStyle = colMap[g.kind] || '#fbbf24';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y - 9);
    ctx.lineTo(p.x + 9, p.y + 7);
    ctx.lineTo(p.x - 9, p.y + 7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Cone inner hole
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(p.x, p.y + 1, 2, 0, Math.PI * 2);
    ctx.fill();
  } else if (g.kind === 'ball-extra') {
    drawFootballGlyph(ctx, p.x, p.y, 8.5);
  } else if (g.kind === 'mini-goal') {
    ctx.strokeStyle = '#f8fafc';
    ctx.fillStyle = 'rgba(255,255,255,0.16)';
    ctx.lineWidth = 2.4;
    ctx.fillRect(p.x - 18, p.y - 7, 36, 14);
    ctx.strokeRect(p.x - 18, p.y - 7, 36, 14);
  } else if (g.kind === 'pole') {
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(p.x, p.y - 12);
    ctx.lineTo(p.x, p.y + 10);
    ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(p.x, p.y + 10, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawFootballGlyph(ctx, x, y, radius) {
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.75)';
  ctx.shadowBlur = 6;
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Pentagon centre + spokes
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#0f172a';
  const pr = radius * 0.44;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
    const px = x + Math.cos(a) * pr;
    const py = y + Math.sin(a) * pr;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPlayerToken(ctx, x, y, radius, fillHex, trimHex, topLabel, mainLabel, highlightRing = false) {
  ctx.save();
  if (highlightRing) {
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.arc(x, y, radius + 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.shadowColor = 'rgba(0,0,0,0.68)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 2;

  ctx.fillStyle = fillHex;
  ctx.strokeStyle = trimHex;
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  const isLight = ['#eab308', '#f8fafc', '#fde047', '#cffafe'].includes(fillHex.toLowerCase());
  ctx.fillStyle = isLight ? '#0f172a' : '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (topLabel) {
    ctx.font = `700 ${Math.round(radius * 0.47)}px "Chakra Petch", sans-serif`;
    ctx.fillText(topLabel, x, y - radius * 0.31);
    ctx.font = `700 ${Math.round(radius * 0.64)}px "Chakra Petch", sans-serif`;
    ctx.fillText(mainLabel, x, y + radius * 0.27);
  } else {
    ctx.font = `700 ${Math.round(radius * 0.72)}px "Chakra Petch", sans-serif`;
    ctx.fillText(mainLabel, x, y + 1);
  }

  ctx.restore();
}

function renderSceneOntoContext(ctx, w, h, pad, scene, options = { isSunlight: false, scaleFactor: 1 }) {
  const { isSunlight, scaleFactor } = options;
  drawPitchSurfaceAndLines(ctx, w, h, pad, isSunlight);

  // 1. Saved Tactical Drawings + Live In-Progress Stroke
  (scene.drawings || []).forEach(d => drawTacticalStroke(ctx, projectDrawingOntoScene(d, scene), w, h, pad, isSunlight));
  if (activePointer && activePointer.liveDrawing) {
    drawTacticalStroke(ctx, activePointer.liveDrawing, w, h, pad, isSunlight);
  }

  // 2. Training Gear Props
  (scene.gear || []).forEach(g => drawGearItem(ctx, g, w, h, pad));

  // Single-prop Trash Drop Zone along bottom edge while dragging gear!
  if (activePointer && activePointer.mode === 'drag' && activePointer.target?.kind === 'gear') {
    const activeGear = (scene.gear || []).find(item => item.id === activePointer.target.id);
    const overTrash = activeGear && activeGear.y >= 89;
    ctx.save();
    ctx.fillStyle = overTrash ? 'rgba(225, 29, 72, 0.92)' : 'rgba(15, 23, 42, 0.86)';
    ctx.strokeStyle = overTrash ? '#fda4af' : '#fb7185';
    ctx.lineWidth = 2;
    const tzW = Math.min(210, w - 32);
    const tzH = 26;
    const tzX = (w - tzW) / 2;
    const tzY = h - tzH - 8;
    roundRectPath(ctx, tzX, tzY, tzW, tzH, 9);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 10.5px "Chakra Petch", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(overTrash ? 'RELEASE TO DELETE PROP ✕' : 'DRAG HERE TO REMOVE PROP ✕', w / 2, tzY + tzH / 2 + 0.5);
    ctx.restore();
  }

  const baseR = (board.pitchMode === 'half' ? 21 : (board.pitchMode === '7v7' ? 16.5 : 18)) * scaleFactor;
  const oppR = baseR * 0.88;

  // 3. Opposition Tokens
  board.oppRoster.forEach(opp => {
    const pos = scene.oppPos?.[opp.id];
    if (!pos) return;
    const p = normToPx(pos.x, pos.y, w, h, pad);
    const fill = opp.isGk ? '#334155' : board.teamMeta.oppColor;
    const trim = opp.isGk ? '#e2e8f0' : 'rgba(255,255,255,0.85)';
    const hasBall = scene.ball?.attachedTo === opp.id;
    drawPlayerToken(ctx, p.x, p.y, oppR, fill, trim, '', opp.label, false);
    if (hasBall) {
      drawFootballGlyph(ctx, p.x + oppR * 0.72, p.y + oppR * 0.68, 7.5 * scaleFactor);
    }
  });

  // 4. Coached Team Tokens
  const ownColor = board.teamMeta.color || '#f43f5e';
  const gkFill = ownColor.toLowerCase() === '#0284c7' ? '#10b981' : '#06b6d4';
  const ownIsLight = ['#eab308', '#f8fafc'].includes(ownColor.toLowerCase());
  const ownTrim = ownIsLight ? '#0f172a' : '#ffffff';

  board.teamRoster.forEach(tok => {
    const pos = scene.teamPos?.[tok.id];
    if (!pos) return;
    const p = normToPx(pos.x, pos.y, w, h, pad);
    const showAsGk = tok.isGk && board.pitchMode !== 'blank';
    const fill = showAsGk ? gkFill : ownColor;
    const trim = showAsGk ? '#cffafe' : ownTrim;
    const topLbl = tok.initials ? (showAsGk ? 'GK' : `#${tok.number}`) : (showAsGk ? 'GK' : '');
    const mainLbl = tok.initials ? tok.initials : `#${tok.number}`;
    const showSwapRing = Boolean(selectedBenchNumber);
    drawPlayerToken(ctx, p.x, p.y, baseR, fill, trim, topLbl, mainLbl, showSwapRing);

    if (scene.ball?.attachedTo === tok.id) {
      drawFootballGlyph(ctx, p.x + baseR * 0.72, p.y + baseR * 0.68, 8 * scaleFactor);
    }
  });

  // 5. Free-Floating Ball (when not snapped to any player)
  if (scene.ball && !scene.ball.attachedTo) {
    const bp = normToPx(scene.ball.x, scene.ball.y, w, h, pad);
    drawFootballGlyph(ctx, bp.x, bp.y, 9.5 * scaleFactor);
  }
}

export function drawTacticsCanvas() {
  const m = getCanvasAndMetrics();
  if (!m) return;
  const ctx = m.canvas.getContext('2d');
  if (!ctx) return;

  const dpr = m.canvas.width / Math.max(1, m.width);
  ctx.save();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, m.width, m.height);

  const scene = animRenderOverride || board.steps[board.activeStepIdx] || board.steps[0];
  const isSunlight = document.body?.classList.contains('sunlight-mode');
  if (scene) {
    renderSceneOntoContext(ctx, m.width, m.height, 12, scene, { isSunlight, scaleFactor: 1 });
  }
  ctx.restore();
}

// ---------------- Touch / Pointer Interaction Engine ----------------
function hitTestScene(px, py, w, h, pad, scene) {
  const baseR = board.pitchMode === 'half' ? 24 : 21;

  // 1. Check Ball first (either free-floating OR attached badge on a player's boot!)
  if (scene.ball) {
    if (scene.ball.attachedTo) {
      const host = scene.teamPos?.[scene.ball.attachedTo] || scene.oppPos?.[scene.ball.attachedTo];
      if (host) {
        const hp = normToPx(host.x, host.y, w, h, pad);
        const bx = hp.x + 13;
        const by = hp.y + 12;
        if (Math.hypot(px - bx, py - by) <= 15) {
          return { kind: 'ball' };
        }
      }
    } else {
      const bp = normToPx(scene.ball.x, scene.ball.y, w, h, pad);
      if (Math.hypot(px - bp.x, py - bp.y) <= 20) {
        return { kind: 'ball' };
      }
    }
  }

  // 2. Check Coached Team Tokens (reverse order for top-most)
  for (let i = board.teamRoster.length - 1; i >= 0; i--) {
    const tok = board.teamRoster[i];
    const pos = scene.teamPos?.[tok.id];
    if (!pos) continue;
    const p = normToPx(pos.x, pos.y, w, h, pad);
    if (Math.hypot(px - p.x, py - p.y) <= baseR) {
      return { kind: 'team', id: tok.id };
    }
  }

  // 3. Check Opposition Tokens
  for (let i = board.oppRoster.length - 1; i >= 0; i--) {
    const tok = board.oppRoster[i];
    const pos = scene.oppPos?.[tok.id];
    if (!pos) continue;
    const p = normToPx(pos.x, pos.y, w, h, pad);
    if (Math.hypot(px - p.x, py - p.y) <= baseR * 0.92) {
      return { kind: 'opp', id: tok.id };
    }
  }

  // 4. Check Gear Items
  const gearList = scene.gear || [];
  for (let i = gearList.length - 1; i >= 0; i--) {
    const g = gearList[i];
    const p = normToPx(g.x, g.y, w, h, pad);
    if (Math.hypot(px - p.x, py - p.y) <= 20) {
      return { kind: 'gear', id: g.id };
    }
  }

  return null;
}

function simplifyPoints(pts, minDist = 2.2) {
  if (pts.length <= 2) return pts;
  const out = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const prev = out[out.length - 1];
    if (Math.hypot(pts[i].x - prev.x, pts[i].y - prev.y) >= minDist) {
      out.push(pts[i]);
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}

function onCanvasPointerDown(e) {
  if (e.button !== undefined && e.button !== 0) return;
  stopTacticsAnimation();
  const m = getCanvasAndMetrics();
  if (!m) return;

  const rect = m.canvas.getBoundingClientRect();
  const px = e.clientX - rect.left;
  const py = e.clientY - rect.top;
  const norm = pxToNorm(px, py, m.width, m.height, 12);
  const step = board.steps[board.activeStepIdx];
  if (!step) return;

  // Handle 2-tap Bench -> Pitch swap if a bench chip is highlighted
  if (selectedBenchNumber !== null) {
    const hit = hitTestScene(px, py, m.width, m.height, 12, step);
    if (hit && hit.kind === 'team') {
      swapBenchWithPitchToken(selectedBenchNumber, hit.id);
      return;
    }
    selectedBenchNumber = null;
    renderBenchStripUI();
    drawTacticsCanvas();
  }

  try { m.canvas.setPointerCapture(e.pointerId); } catch (_) {}

  if (board.activeTool === 'move') {
    const hit = hitTestScene(px, py, m.width, m.height, 12, step);
    if (!hit) return; // Explicit Move mode: never draw accidental lines on empty grass!

    pushUndoSnapshot();
    const originPos = (hit.kind === 'team' && step.teamPos?.[hit.id]) ? { ...step.teamPos[hit.id] } : null;
    if (hit.kind === 'ball') {
      step.ball.attachedTo = null;
      step.ball.x = norm.x;
      step.ball.y = norm.y;
    }
    activePointer = {
      pointerId: e.pointerId,
      mode: 'drag',
      target: hit,
      originPos,
      moved: false
    };
    drawTacticsCanvas();
    return;
  }

  // Drawing Tools ('pass', 'run', 'dribble', 'zone')
  activePointer = {
    pointerId: e.pointerId,
    mode: 'draw',
    tool: board.activeTool,
    startNorm: norm,
    pts: [norm],
    liveDrawing: board.activeTool === 'zone'
      ? { type: 'zone', x1: norm.x, y1: norm.y, x2: norm.x, y2: norm.y }
      : { type: board.activeTool, pts: [norm] }
  };
}

function onCanvasPointerMove(e) {
  if (!activePointer || e.pointerId !== activePointer.pointerId) return;
  const m = getCanvasAndMetrics();
  if (!m) return;

  const rect = m.canvas.getBoundingClientRect();
  const px = e.clientX - rect.left;
  const py = e.clientY - rect.top;
  const norm = pxToNorm(px, py, m.width, m.height, 12);
  const step = board.steps[board.activeStepIdx];
  if (!step) return;

  if (activePointer.mode === 'drag') {
    activePointer.moved = true;
    const tgt = activePointer.target;
    if (tgt.kind === 'team' && step.teamPos[tgt.id]) {
      step.teamPos[tgt.id] = norm;
      syncAttachedBallPosition(step);
    } else if (tgt.kind === 'opp' && step.oppPos[tgt.id]) {
      step.oppPos[tgt.id] = norm;
      syncAttachedBallPosition(step);
    } else if (tgt.kind === 'ball') {
      step.ball.x = norm.x;
      step.ball.y = norm.y;
    } else if (tgt.kind === 'gear') {
      board.steps.forEach(s => {
        const g = (s.gear || []).find(item => item.id === tgt.id);
        if (g) { g.x = norm.x; g.y = norm.y; }
      });
    }
    drawTacticsCanvas();
    return;
  }

  if (activePointer.mode === 'draw') {
    if (activePointer.tool === 'zone') {
      activePointer.liveDrawing.x2 = norm.x;
      activePointer.liveDrawing.y2 = norm.y;
    } else {
      activePointer.pts.push(norm);
      activePointer.liveDrawing.pts = simplifyPoints(activePointer.pts, 1.8);
    }
    drawTacticsCanvas();
  }
}

function onCanvasPointerUp(e) {
  if (!activePointer || e.pointerId !== activePointer.pointerId) return;
  const step = board.steps[board.activeStepIdx];

  if (activePointer.mode === 'drag' && step) {
    // 1. Single-prop delete when dragging gear into bottom remove zone
    if (activePointer.target.kind === 'gear') {
      const gNow = (step.gear || []).find(item => item.id === activePointer.target.id);
      if (gNow && gNow.y >= 89) {
        const delId = activePointer.target.id;
        board.steps.forEach(s => {
          s.gear = (s.gear || []).filter(item => item.id !== delId);
        });
        hapticFeedback('tap');
        score.showMatchToast('Prop removed (tap Undo to restore)', '✕', 1600);
      }
    }

    // 2. On-pitch Starter <-> Starter / GK Swap when dropping one team player directly onto another!
    if (activePointer.target.kind === 'team' && activePointer.moved && activePointer.originPos) {
      const dragId = activePointer.target.id;
      const dropPos = step.teamPos?.[dragId];
      if (dropPos) {
        const overlapMate = board.teamRoster.find(tok => {
          if (tok.id === dragId) return false;
          const p = step.teamPos?.[tok.id];
          return p && Math.hypot(p.x - dropPos.x, p.y - dropPos.y) <= 5.2;
        });
        if (overlapMate) {
          // Restore formation coordinates cleanly and swap player shirt identities!
          step.teamPos[dragId] = { ...activePointer.originPos };
          syncAttachedBallPosition(step);
          const a = board.teamRoster.find(t => t.id === dragId);
          const b = overlapMate;
          if (a && b) {
            const tmpNum = a.number;
            const tmpInit = a.initials;
            a.number = b.number;
            a.initials = b.initials;
            b.number = tmpNum;
            b.initials = tmpInit;
            hapticFeedback('success');
            if (a.isGk || b.isGk) {
              const newGk = a.isGk ? a : b;
              const lbl = newGk.initials ? `#${newGk.number} ${newGk.initials}` : `#${newGk.number}`;
              score.showMatchToast(`Swapped ${lbl} into Goalkeeper`, '✓', 1800);
            }
          }
        }
      }
    }

    // 3. Magnetic Ball Snap when dropping the ball near any player!
    if (activePointer.target.kind === 'ball' && step.ball) {
      let bestId = null;
      let bestDist = 7.5; // Normalized magnetic snap radius (~7.5% of pitch)
      board.teamRoster.forEach(tok => {
        const p = step.teamPos?.[tok.id];
        if (!p) return;
        const d = Math.hypot(p.x - step.ball.x, p.y - step.ball.y);
        if (d < bestDist) { bestDist = d; bestId = tok.id; }
      });
      board.oppRoster.forEach(tok => {
        const p = step.oppPos?.[tok.id];
        if (!p) return;
        const d = Math.hypot(p.x - step.ball.x, p.y - step.ball.y);
        if (d < bestDist) { bestDist = d; bestId = tok.id; }
      });
      if (bestId) {
        step.ball.attachedTo = bestId;
        syncAttachedBallPosition(step);
        hapticFeedback('selection');
      }
    }
    saveWorkingBoard();
  } else if (activePointer.mode === 'draw' && step && activePointer.liveDrawing) {
    const ld = activePointer.liveDrawing;
    let valid = false;
    if (ld.type === 'zone') {
      valid = Math.hypot(ld.x2 - ld.x1, ld.y2 - ld.y1) >= 5;
    } else if (ld.pts && ld.pts.length >= 2) {
      const first = ld.pts[0];
      const last = ld.pts[ld.pts.length - 1];
      valid = Math.hypot(last.x - first.x, last.y - first.y) >= 4.5;
    }
    if (valid) {
      pushUndoSnapshot();
      const savedStroke = cloneDeep(ld);
      if (savedStroke.type === 'pass') {
        bindPassArrowEndpoints(savedStroke, step, board.steps[board.activeStepIdx + 1] || null);
      }
      step.drawings.push(savedStroke);
      hapticFeedback('selection');
      saveWorkingBoard();
    }
  }

  activePointer = null;
  updateUndoButtonUI();
  drawTacticsCanvas();
}

// Drag-from-Bench onto Pitch Token
function onBenchChipPointerDown(e) {
  const num = Number(e.currentTarget?.getAttribute('data-bench-num'));
  if (!num) return;
  benchDragState = {
    pointerId: e.pointerId,
    num,
    startX: e.clientX,
    startY: e.clientY,
    dragging: false
  };

  const onMove = (ev) => {
    if (!benchDragState || ev.pointerId !== benchDragState.pointerId) return;
    if (!benchDragState.dragging && Math.hypot(ev.clientX - benchDragState.startX, ev.clientY - benchDragState.startY) > 10) {
      benchDragState.dragging = true;
      benchDragGhost = document.createElement('div');
      benchDragGhost.className = 'fixed z-[95] px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 font-mono-sport font-black text-xs shadow-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2 border-2 border-white';
      const bp = board.benchRoster.find(x => x.number === num);
      benchDragGhost.innerText = bp?.initials ? `#${num} ${bp.initials}` : `#${num}`;
      document.body.appendChild(benchDragGhost);
    }
    if (benchDragState.dragging && benchDragGhost) {
      benchDragGhost.style.left = `${ev.clientX}px`;
      benchDragGhost.style.top = `${ev.clientY}px`;
    }
  };

  const onEnd = (ev) => {
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onEnd);
    window.removeEventListener('pointercancel', onEnd);

    if (benchDragGhost) {
      benchDragGhost.remove();
      benchDragGhost = null;
    }
    if (benchDragState && benchDragState.dragging) {
      const m = getCanvasAndMetrics();
      const step = board.steps[board.activeStepIdx];
      if (m && step) {
        const rect = m.canvas.getBoundingClientRect();
        const px = ev.clientX - rect.left;
        const py = ev.clientY - rect.top;
        if (px >= 0 && px <= rect.width && py >= 0 && py <= rect.height) {
          const hit = hitTestScene(px, py, m.width, m.height, 12, step);
          if (hit && hit.kind === 'team') {
            swapBenchWithPitchToken(benchDragState.num, hit.id);
          }
        }
      }
    }
    benchDragState = null;
  };

  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onEnd);
  window.addEventListener('pointercancel', onEnd);
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, w, h, r);
    return;
  }
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// ---------------- 1600x2000 HD PNG & Animated Video Clip Export ----------------
function buildHighResTacticalCardCanvas() {
  const W = 1600;
  const H = 2000;
  const out = document.createElement('canvas');
  out.width = W;
  out.height = H;
  const ctx = out.getContext('2d');

  // Deep stadium night background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#09111e');
  bgGrad.addColorStop(1, '#05080f');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Outer gold frame
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.55)';
  ctx.lineWidth = 4;
  ctx.strokeRect(28, 28, W - 56, H - 56);

  // Header
  ctx.fillStyle = '#fbbf24';
  ctx.font = '700 28px "Chakra Petch", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('TOUCHLINE TACTICS BOARD', 76, 98);

  const formList = FORMATIONS[board.pitchMode] || FORMATIONS['5v5'];
  const formObj = formList.find(f => f.id === board.formationId) || formList[0];
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 54px "Chakra Petch", sans-serif';
  ctx.fillText(board.teamMeta.name.toUpperCase(), 76, 162);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 26px "Chakra Petch", sans-serif';
  const stepNote = board.steps.length > 1 ? ` • STEP ${board.activeStepIdx + 1} OF ${board.steps.length}` : '';
  const playSubtitle = board.activeCue?.title
    ? `${board.activeCue.title.toUpperCase()} (${(board.activeCue.difficulty || 'EASY').toUpperCase()})${stepNote}`
    : `${PITCH_MODES[board.pitchMode]?.fullLabel || '5v5'} • ${(formObj?.label || '').toUpperCase()}${stepNote}`;
  ctx.fillText(playSubtitle, 76, 204);

  // Pitch viewport region
  const pitchX = 76;
  const pitchY = 238;
  const pitchW = W - 152;
  const pitchH = 1540;

  ctx.save();
  ctx.translate(pitchX, pitchY);
  roundRectPath(ctx, 0, 0, pitchW, pitchH, 28);
  ctx.clip();

  const activeScene = board.steps[board.activeStepIdx] || board.steps[0];
  renderSceneOntoContext(ctx, pitchW, pitchH, 42, activeScene, { isSunlight: false, scaleFactor: 2.65 });
  ctx.restore();

  ctx.strokeStyle = '#1e3a2f';
  ctx.lineWidth = 5;
  roundRectPath(ctx, pitchX, pitchY, pitchW, pitchH, 28);
  ctx.stroke();

  // Bench & Brand Footer
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '700 26px "Chakra Petch", sans-serif';
  ctx.textAlign = 'left';
  if (board.benchRoster.length > 0) {
    const benchTxt = board.benchRoster.map(b => b.initials ? `#${b.number} ${b.initials}` : `#${b.number}`).join('   •   ');
    ctx.fillText(`BENCH:  ${benchTxt}`, 76, 1848);
  } else {
    ctx.fillText(`SQUAD ON PITCH: ${board.teamRoster.length} PLAYERS`, 76, 1848);
  }

  ctx.fillStyle = '#64748b';
  ctx.font = '700 22px "Chakra Petch", sans-serif';
  ctx.fillText("WHAT'S THE SCORE REF?  •  GRASSROOTS MATCHDAY & TACTICS COMPANION", 76, 1924);

  ctx.fillStyle = '#10b981';
  ctx.textAlign = 'right';
  ctx.fillText('whatsthescoreref.vercel.app', W - 76, 1924);

  return out;
}

export async function shareTacticsPng() {
  stopTacticsAnimation();
  hapticFeedback('tap');
  const cardCanvas = buildHighResTacticalCardCanvas();

  const blob = await new Promise(resolve => cardCanvas.toBlob(resolve, 'image/png', 0.95));
  if (!blob) return;

  const safeTeam = (board.teamMeta.name || 'team').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const filename = `tactics-${safeTeam}-${board.pitchMode}.png`;
  const file = new File([blob], filename, { type: 'image/png' });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: `${board.teamMeta.name} — Tactics (${PITCH_MODES[board.pitchMode]?.label})`,
        text: `${board.teamMeta.name} tactical board (${PITCH_MODES[board.pitchMode]?.fullLabel})`,
        files: [file]
      });
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
  score.showMatchToast('HD Tactics PNG saved!', '📸', 2200);
}

export async function shareTacticsVideo() {
  if (board.steps.length < 2) {
    shareTacticsPng();
    return;
  }
  if (typeof window.MediaRecorder === 'undefined') {
    shareTacticsPng();
    return;
  }

  stopTacticsAnimation();
  hapticFeedback('tap');
  const videoBtn = document.getElementById('tacticsShareVideoBtn');
  if (videoBtn) {
    videoBtn.disabled = true;
    videoBtn.innerText = 'Rec...';
  }

  try {
    const W = 720;
    const H = 900;
    const recCanvas = document.createElement('canvas');
    recCanvas.width = W;
    recCanvas.height = H;
    const rctx = recCanvas.getContext('2d');

    const mimeCandidates = [
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp9',
      'video/webm'
    ];
    const mimeType = mimeCandidates.find(m => window.MediaRecorder.isTypeSupported(m)) || '';
    const stream = recCanvas.captureStream(30);
    const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
    const chunks = [];
    recorder.ondataavailable = (ev) => { if (ev.data && ev.data.size > 0) chunks.push(ev.data); };

    const playSteps = buildPlaybackSteps(board.steps);
    if (playSteps.length < 2) {
      shareTacticsPng();
      return;
    }

    const donePromise = new Promise(resolve => { recorder.onstop = resolve; });
    recorder.start();

    const metrics = computePlaybackTimelineMetrics(playSteps.length, board.animSpeed);
    const totalMs = metrics.totalMs;
    const startAt = performance.now();

    await new Promise(resolve => {
      const stepFrame = (now) => {
        const elapsed = now - startAt;
        const frame = evaluatePlaybackFrame(playSteps, elapsed, metrics);
        const scene = frame.scene;

        rctx.fillStyle = '#07090e';
        rctx.fillRect(0, 0, W, H);
        rctx.fillStyle = '#fbbf24';
        rctx.font = '700 22px "Chakra Petch", sans-serif';
        rctx.textAlign = 'left';
        rctx.fillText(`${board.teamMeta.name.toUpperCase()} • ${PITCH_MODES[board.pitchMode]?.label}`, 28, 42);

        rctx.save();
        rctx.translate(24, 62);
        renderSceneOntoContext(rctx, W - 48, H - 108, 22, scene, { isSunlight: false, scaleFactor: 1.35 });
        rctx.restore();

        rctx.fillStyle = '#94a3b8';
        rctx.font = '700 15px "Chakra Petch", sans-serif';
        rctx.fillText("WHAT'S THE SCORE REF? • TOUCHLINE TACTICS", 28, H - 18);

        if (elapsed < totalMs) {
          requestAnimationFrame(stepFrame);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(stepFrame);
    });

    recorder.stop();
    await donePromise;

    const finalMime = recorder.mimeType || mimeType || 'video/webm';
    const ext = finalMime.includes('mp4') ? 'mp4' : 'webm';
    const blob = new Blob(chunks, { type: finalMime });
    const filename = `tactics-move.${ext}`;
    const file = new File([blob], filename, { type: finalMime });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: `${board.teamMeta.name} — Animated Tactical Move`,
          files: [file]
        });
        return;
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    score.showMatchToast('Animated tactics clip saved!', '🎬', 2200);
  } finally {
    if (videoBtn) {
      videoBtn.disabled = false;
      videoBtn.innerText = 'Clip';
    }
  }
}

// Expose state getter for E2E verification
export function getTacticsState() {
  return board;
}

export function initTacticsBoardIfNeeded() {
  if (initialized) return;
  initialized = true;

  const saved = loadWorkingBoard();
  if (saved) {
    board.pitchMode = PITCH_MODES[saved.pitchMode] ? saved.pitchMode : '5v5';
    board.formationId = saved.formationId || '1-2-1';
    board.retreatLine = typeof saved.retreatLine === 'boolean' ? saved.retreatLine : true;
    board.lanesMode = saved.lanesMode || 'off';
    board.oppMode = saved.oppMode || 'even';
    board.customOppCount = saved.customOppCount || 0;
    board.customOppRoster = Array.isArray(saved.customOppRoster) ? saved.customOppRoster : null;
    board.activeCue = saved.activeCue || null;
    board.isAnimatorOpen = Boolean(saved.isAnimatorOpen);
    board.animSpeed = saved.animSpeed === 0.5 ? 0.5 : 1;
    board.activeStepIdx = clamp(saved.activeStepIdx || 0, 0, Math.max(0, saved.steps.length - 1));
    board.teamRoster = Array.isArray(saved.teamRoster) ? saved.teamRoster : [];
    board.benchRoster = Array.isArray(saved.benchRoster) ? saved.benchRoster : [];
    board.oppRoster = Array.isArray(saved.oppRoster) ? saved.oppRoster : [];
    board.steps = saved.steps;
    refreshKitAndInitialsNonDestructive();
    if (board.teamRoster.length === 0) {
      syncSquadFromMatch({ resetPositions: true, silent: true });
    } else {
      ensureStepTokensIntegrity();
    }
  } else {
    syncSquadFromMatch({ resetPositions: true, silent: true });
  }

  const canvas = document.getElementById('tacticsPitchCanvas');
  if (canvas) {
    canvas.addEventListener('pointerdown', onCanvasPointerDown);
    canvas.addEventListener('pointermove', onCanvasPointerMove);
    canvas.addEventListener('pointerup', onCanvasPointerUp);
    canvas.addEventListener('pointercancel', onCanvasPointerUp);

    if (window.ResizeObserver && canvas.parentElement) {
      canvasResizeObserver = new ResizeObserver(() => {
        const modal = document.getElementById('tacticsBoardModal');
        if (modal && !modal.classList.contains('hidden')) {
          resizeTacticsCanvas();
          drawTacticsCanvas();
        }
      });
      canvasResizeObserver.observe(canvas.parentElement);
    }
  }
}
