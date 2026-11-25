// What's The Score Ref - 29 Academy-Standard Full Step-by-Step Animated Match Plays & Training Drills (v140)
// Grounded in England Football (FA Foundation Phase), UEFA Grassroots, Ajax TIPS, FC Barcelona La Masia & DFB Funino.
// Zero skipped passes or touches: every single pass, dribble, V-cut, overlap, press, cross, and finish has its own causal step
// (4 to 6 steps per play), and every pass arrow carries explicit `fromId` / `toId` bindings so arrows dynamically follow moving players.

export const BUILTIN_TEMPLATES = [
  // =========================================================================
  // TAB 1: MATCH PLAYS — 5v5 SQUAD SIZE (8 Plays: 3 Easy, 3 Medium, 2 Advanced)
  // =========================================================================
  {
    id: 'tpl-retreat-kick',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'easy',
    standard: 'FA Foundation',
    title: '5v5 Goal Kick: Split & Beat Retreat',
    tag: '5v5 • 6 Steps',
    desc: 'GK plays wide to split defender, who drives across the retreat line, feeds the forward, squares across goal, and scores.',
    cue: 'Split wide early — receive on the back foot, drive past the retreat line, and square!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: true,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: GK plays short goal kick out to wide-left defender t1
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 18, y: 78 }, t2: { x: 82, y: 78 }, t3: { x: 50, y: 63 }, t4: { x: 50, y: 46 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 30, y: 25 }, o2: { x: 70, y: 25 }, o3: { x: 35, y: 45 }, o4: { x: 65, y: 45 } },
          ball: { x: 50, y: 89, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 8, y1: 54, x2: 30, y2: 84 },
            { type: 'pass', fromId: 't0', toId: 't1', pts: [{ x: 46, y: 87 }, { x: 22, y: 79 }] }
          ]
        },
        {
          // S2: t1 receives wide and dribbles forward past the retreat line while opponents step out
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 18, y: 76 }, t2: { x: 80, y: 72 }, t3: { x: 46, y: 58 }, t4: { x: 44, y: 38 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 30, y: 25 }, o2: { x: 68, y: 26 }, o3: { x: 32, y: 46 }, o4: { x: 62, y: 46 } },
          ball: { x: 18, y: 76, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 18, y: 74 }, { x: 18, y: 52 }] },
            { type: 'run', pts: [{ x: 44, y: 38 }, { x: 34, y: 26 }] },
            { type: 'run', pts: [{ x: 80, y: 72 }, { x: 74, y: 44 }] }
          ]
        },
        {
          // S3: t1 arrives in midfield and threads forward pass into striker t4
          teamPos: { t0: { x: 50, y: 87 }, t1: { x: 18, y: 52 }, t2: { x: 74, y: 44 }, t3: { x: 44, y: 50 }, t4: { x: 34, y: 26 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 23 }, o2: { x: 66, y: 26 }, o3: { x: 24, y: 48 }, o4: { x: 56, y: 46 } },
          ball: { x: 18, y: 52, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't4', pts: [{ x: 20, y: 48 }, { x: 33, y: 28 }] },
            { type: 'run', pts: [{ x: 74, y: 44 }, { x: 64, y: 22 }] }
          ]
        },
        {
          // S4: Striker t4 receives on edge of box and squares across goal to far-post runner t2
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 22, y: 46 }, t2: { x: 64, y: 22 }, t3: { x: 46, y: 42 }, t4: { x: 34, y: 22 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 36, y: 20 }, o2: { x: 58, y: 24 }, o3: { x: 28, y: 42 }, o4: { x: 52, y: 40 } },
          ball: { x: 34, y: 22, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't4', toId: 't2', pts: [{ x: 38, y: 22 }, { x: 59, y: 20 }] }
          ]
        },
        {
          // S5: Far-post runner t2 receives square pass and fires past GK
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 24, y: 44 }, t2: { x: 61, y: 20 }, t3: { x: 48, y: 38 }, t4: { x: 36, y: 20 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 38, y: 20 }, o2: { x: 56, y: 22 }, o3: { x: 30, y: 40 }, o4: { x: 52, y: 38 } },
          ball: { x: 61, y: 20, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't2', toId: null, pts: [{ x: 59, y: 17 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S6: Completed goal finish
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 26, y: 42 }, t2: { x: 59, y: 18 }, t3: { x: 48, y: 36 }, t4: { x: 38, y: 19 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 38, y: 19 }, o2: { x: 56, y: 20 }, o3: { x: 32, y: 38 }, o4: { x: 52, y: 36 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-vcut-kickin',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'easy',
    standard: 'U9 Kick-In Rule',
    title: '5v5 Touchline Kick-In: V-Cut & Cross',
    tag: '5v5 • 5 Steps',
    desc: 'Forward checks toward the ball to drag their marker tight, spins in behind down the line, crosses low, and scores.',
    cue: 'Check in first to sell the fake, spin into space behind, and flash it across goal!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: t4 checks short toward kick-in taker t3 to pull defender o4 tight
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 54, y: 64 }, t2: { x: 26, y: 50 }, t3: { x: 93, y: 50 }, t4: { x: 72, y: 36 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 36, y: 26 }, o2: { x: 66, y: 24 }, o3: { x: 42, y: 46 }, o4: { x: 72, y: 42 } },
          ball: { x: 93, y: 50, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 72, y: 36 }, { x: 82, y: 45 }] },
            { type: 'run', pts: [{ x: 72, y: 42 }, { x: 80, y: 46 }] }
          ]
        },
        {
          // S2: t4 spins down the touchline into open space while t3 plays the kick-in pass
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 52, y: 60 }, t2: { x: 32, y: 40 }, t3: { x: 93, y: 50 }, t4: { x: 82, y: 45 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 38, y: 25 }, o2: { x: 68, y: 24 }, o3: { x: 44, y: 42 }, o4: { x: 79, y: 45 } },
          ball: { x: 93, y: 50, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 74, y1: 12, x2: 94, y2: 28 },
            { type: 'run', pts: [{ x: 82, y: 45 }, { x: 84, y: 20 }] },
            { type: 'pass', fromId: 't3', toId: 't4', pts: [{ x: 91, y: 47 }, { x: 84, y: 20 }] }
          ]
        },
        {
          // S3: t4 collects in space on right byline and squares low across to t2
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 56 }, t2: { x: 38, y: 26 }, t3: { x: 86, y: 44 }, t4: { x: 84, y: 20 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 42, y: 22 }, o2: { x: 70, y: 22 }, o3: { x: 46, y: 36 }, o4: { x: 78, y: 34 } },
          ball: { x: 84, y: 20, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 38, y: 26 }, { x: 44, y: 19 }] },
            { type: 'pass', fromId: 't4', toId: 't2', pts: [{ x: 80, y: 20 }, { x: 44, y: 19 }] }
          ]
        },
        {
          // S4: t2 arrives in front of goal and slots 1-touch past GK
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 54 }, t2: { x: 44, y: 19 }, t3: { x: 80, y: 38 }, t4: { x: 80, y: 18 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 49, y: 20 }, o2: { x: 68, y: 20 }, o3: { x: 48, y: 34 }, o4: { x: 74, y: 28 } },
          ball: { x: 44, y: 19, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't2', toId: null, pts: [{ x: 44, y: 16 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 52 }, t2: { x: 44, y: 17 }, t3: { x: 78, y: 36 }, t4: { x: 78, y: 18 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 48, y: 19 }, o2: { x: 66, y: 20 }, o3: { x: 48, y: 32 }, o4: { x: 72, y: 26 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-short-corner-2v1',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'easy',
    standard: 'UEFA Set-Piece',
    title: '5v5 Short Corner 2v1 Overload',
    tag: '5v5 • 5 Steps',
    desc: 'Play short to the showing support player, drive inside to commit the lone defender, slip the striker, and score.',
    cue: 'Show short at 45 degrees — drive inside to commit the defender, then slip the pass!',
    build: () => ({
      pitchMode: 'half',
      formationId: 'half-attack',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: t3 shows short for corner from t2
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 60 }, t2: { x: 92, y: 10 }, t3: { x: 74, y: 25 }, t4: { x: 44, y: 22 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 46, y: 16 }, o2: { x: 66, y: 20 }, o3: { x: 38, y: 28 }, o4: { x: 56, y: 34 } },
          ball: { x: 92, y: 10, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 74, y: 25 }, { x: 78, y: 16 }] },
            { type: 'pass', fromId: 't2', toId: 't3', pts: [{ x: 89, y: 11 }, { x: 78, y: 16 }] }
          ]
        },
        {
          // S2: t3 receives short and dribbles inside toward the box edge to draw o2
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 58 }, t2: { x: 88, y: 18 }, t3: { x: 78, y: 16 }, t4: { x: 42, y: 19 } },
          oppPos: { o0: { x: 51, y: 10 }, o1: { x: 46, y: 16 }, o2: { x: 70, y: 18 }, o3: { x: 40, y: 26 }, o4: { x: 58, y: 31 } },
          ball: { x: 78, y: 16, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 78, y: 16 }, { x: 63, y: 20 }] },
            { type: 'run', pts: [{ x: 42, y: 19 }, { x: 41, y: 16 }] }
          ]
        },
        {
          // S3: t3 commits o2 and slips pass across to t4 on penalty spot
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 56 }, t2: { x: 84, y: 24 }, t3: { x: 63, y: 20 }, t4: { x: 41, y: 16 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 48, y: 16 }, o2: { x: 66, y: 18 }, o3: { x: 42, y: 25 }, o4: { x: 56, y: 29 } },
          ball: { x: 63, y: 20, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't3', toId: 't4', pts: [{ x: 59, y: 19 }, { x: 44, y: 16 }] }
          ]
        },
        {
          // S4: t4 receives in space and shoots low into left corner
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 54 }, t2: { x: 82, y: 26 }, t3: { x: 61, y: 20 }, t4: { x: 41, y: 16 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 47, y: 15 }, o2: { x: 64, y: 19 }, o3: { x: 42, y: 24 }, o4: { x: 56, y: 28 } },
          ball: { x: 41, y: 16, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't4', toId: null, pts: [{ x: 42, y: 13 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 52 }, t2: { x: 80, y: 26 }, t3: { x: 60, y: 19 }, t4: { x: 42, y: 14 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 47, y: 15 }, o2: { x: 63, y: 18 }, o3: { x: 42, y: 23 }, o4: { x: 55, y: 27 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-switch-lanes',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'medium',
    standard: 'UEFA Positional',
    title: '5v5 Switch Play Across 3 Lanes',
    tag: '5v5 • 5 Steps',
    desc: 'Escape a crowded left wing by bouncing back to the pivot, switching to the wide-open right winger, squaring, and scoring.',
    cue: 'Crowded on one wing? Bounce back to the pivot and switch lanes fast!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: Left winger t2 bounces back to central pivot t1
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 68 }, t2: { x: 18, y: 52 }, t3: { x: 82, y: 52 }, t4: { x: 50, y: 34 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 25, y: 38 }, o2: { x: 42, y: 46 }, o3: { x: 22, y: 48 }, o4: { x: 56, y: 30 } },
          ball: { x: 18, y: 52, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 68, y1: 22, x2: 92, y2: 56 },
            { type: 'pass', fromId: 't2', toId: 't1', pts: [{ x: 21, y: 55 }, { x: 46, y: 66 }] }
          ]
        },
        {
          // S2: Pivot t1 switches play across to wide-open right winger t3
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 66 }, t2: { x: 22, y: 48 }, t3: { x: 82, y: 42 }, t4: { x: 50, y: 30 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 36 }, o2: { x: 46, y: 48 }, o3: { x: 28, y: 48 }, o4: { x: 58, y: 28 } },
          ball: { x: 50, y: 66, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 82, y: 42 }, { x: 78, y: 26 }] },
            { type: 'pass', fromId: 't1', toId: 't3', pts: [{ x: 54, y: 63 }, { x: 78, y: 28 }] }
          ]
        },
        {
          // S3: Right winger t3 receives in open right lane and squares across to striker t4
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 52, y: 60 }, t2: { x: 26, y: 42 }, t3: { x: 78, y: 26 }, t4: { x: 52, y: 22 } },
          oppPos: { o0: { x: 51, y: 10 }, o1: { x: 38, y: 30 }, o2: { x: 52, y: 40 }, o3: { x: 34, y: 44 }, o4: { x: 66, y: 26 } },
          ball: { x: 78, y: 26, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 52, y: 22 }, { x: 54, y: 19 }] },
            { type: 'pass', fromId: 't3', toId: 't4', pts: [{ x: 74, y: 25 }, { x: 56, y: 19 }] }
          ]
        },
        {
          // S4: Striker t4 receives square pass and shoots past GK
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 54, y: 58 }, t2: { x: 28, y: 38 }, t3: { x: 76, y: 24 }, t4: { x: 54, y: 19 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 40, y: 28 }, o2: { x: 56, y: 36 }, o3: { x: 36, y: 42 }, o4: { x: 68, y: 24 } },
          ball: { x: 54, y: 19, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't4', toId: null, pts: [{ x: 54, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 54, y: 56 }, t2: { x: 30, y: 36 }, t3: { x: 74, y: 22 }, t4: { x: 54, y: 17 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 42, y: 26 }, o2: { x: 56, y: 32 }, o3: { x: 38, y: 40 }, o4: { x: 64, y: 22 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-give-go-wall',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'medium',
    standard: 'Ajax DNA',
    title: '5v5 Central Wall Pass (Give & Go 1-2)',
    tag: '5v5 • 5 Steps',
    desc: 'Pass into the striker’s feet, sprint past your marker for the 1-touch return, drive into the box, and score.',
    cue: 'Pass and sprint immediately — never stand and admire your pass!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: t2 passes into striker t4 and starts sprinting beyond marker o3
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 74 }, t2: { x: 24, y: 58 }, t3: { x: 78, y: 56 }, t4: { x: 50, y: 42 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 34, y: 28 }, o2: { x: 66, y: 28 }, o3: { x: 30, y: 48 }, o4: { x: 52, y: 36 } },
          ball: { x: 24, y: 58, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't2', toId: 't4', pts: [{ x: 28, y: 56 }, { x: 47, y: 44 }] },
            { type: 'run', pts: [{ x: 24, y: 54 }, { x: 22, y: 40 }] }
          ]
        },
        {
          // S2: t4 pins o4 and lays 1-touch wall pass into space for sprinting t2
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 48, y: 68 }, t2: { x: 24, y: 38 }, t3: { x: 76, y: 46 }, t4: { x: 50, y: 43 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 38, y: 28 }, o2: { x: 66, y: 28 }, o3: { x: 32, y: 44 }, o4: { x: 50, y: 37 } },
          ball: { x: 50, y: 43, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 24, y1: 18, x2: 44, y2: 30 },
            { type: 'run', pts: [{ x: 24, y: 38 }, { x: 34, y: 25 }] },
            { type: 'pass', fromId: 't4', toId: 't2', pts: [{ x: 47, y: 40 }, { x: 34, y: 25 }] }
          ]
        },
        {
          // S3: t2 collects return pass in stride and takes positive dribble touch into box
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 48, y: 65 }, t2: { x: 34, y: 25 }, t3: { x: 70, y: 30 }, t4: { x: 50, y: 39 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 40, y: 26 }, o2: { x: 64, y: 26 }, o3: { x: 32, y: 38 }, o4: { x: 50, y: 35 } },
          ball: { x: 34, y: 25, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 34, y: 25 }, { x: 38, y: 19 }] }
          ]
        },
        {
          // S4: t2 strikes low across GK into far corner
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 48, y: 64 }, t2: { x: 38, y: 19 }, t3: { x: 68, y: 24 }, t4: { x: 50, y: 36 } },
          oppPos: { o0: { x: 47, y: 10 }, o1: { x: 41, y: 24 }, o2: { x: 62, y: 24 }, o3: { x: 34, y: 35 }, o4: { x: 50, y: 33 } },
          ball: { x: 38, y: 19, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't2', toId: null, pts: [{ x: 40, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 48, y: 62 }, t2: { x: 39, y: 17 }, t3: { x: 66, y: 22 }, t4: { x: 50, y: 34 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 41, y: 22 }, o2: { x: 60, y: 22 }, o3: { x: 36, y: 33 }, o4: { x: 50, y: 31 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-diamond-press',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'medium',
    standard: 'FA Out-of-Possession',
    title: '5v5 Curved Press & Touchline Trap',
    tag: '5v5 • 5 Steps',
    desc: 'Opponent plays wide; striker curves press to block GK return, winger jumps the sideline pass, feeds striker, and scores.',
    cue: 'Curve your run to cut the switch — lock them onto one sideline and strike!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: true,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: Opponent GK rolls short to left defender o1 (pressing trigger!)
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 68 }, t2: { x: 26, y: 54 }, t3: { x: 74, y: 54 }, t4: { x: 50, y: 45 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 24, y: 24 }, o2: { x: 76, y: 24 }, o3: { x: 22, y: 43 }, o4: { x: 58, y: 46 } },
          ball: { x: 50, y: 11, attachedTo: 'o0' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 'o0', toId: 'o1', pts: [{ x: 46, y: 13 }, { x: 28, y: 22 }] }
          ]
        },
        {
          // S2: t4 curves run to cut GK return & t2 jumps sideline pass to intercept!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 48, y: 64 }, t2: { x: 26, y: 52 }, t3: { x: 70, y: 50 }, t4: { x: 50, y: 45 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 24, y: 24 }, o2: { x: 76, y: 24 }, o3: { x: 22, y: 43 }, o4: { x: 56, y: 46 } },
          ball: { x: 24, y: 24, attachedTo: 'o1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 50, y: 45 }, { x: 42, y: 28 }, { x: 30, y: 24 }] },
            { type: 'run', pts: [{ x: 26, y: 52 }, { x: 22, y: 39 }] },
            { type: 'zone', x1: 10, y1: 20, x2: 34, y2: 46 },
            { type: 'pass', fromId: 'o1', toId: 't2', pts: [{ x: 24, y: 28 }, { x: 22, y: 39 }] }
          ]
        },
        {
          // S3: t2 wins interception and slips central striker t4 into the box
          teamPos: { t0: { x: 50, y: 87 }, t1: { x: 44, y: 60 }, t2: { x: 22, y: 39 }, t3: { x: 64, y: 44 }, t4: { x: 32, y: 25 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 20, y: 23 }, o2: { x: 72, y: 26 }, o3: { x: 24, y: 45 }, o4: { x: 54, y: 46 } },
          ball: { x: 22, y: 39, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 32, y: 25 }, { x: 46, y: 20 }] },
            { type: 'pass', fromId: 't2', toId: 't4', pts: [{ x: 25, y: 36 }, { x: 46, y: 20 }] }
          ]
        },
        {
          // S4: t4 receives in front of goal and shoots low
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 44, y: 56 }, t2: { x: 26, y: 34 }, t3: { x: 62, y: 30 }, t4: { x: 46, y: 20 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 24, y: 24 }, o2: { x: 64, y: 22 }, o3: { x: 28, y: 40 }, o4: { x: 52, y: 40 } },
          ball: { x: 46, y: 20, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't4', toId: null, pts: [{ x: 46, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 44, y: 54 }, t2: { x: 28, y: 32 }, t3: { x: 60, y: 26 }, t4: { x: 46, y: 18 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 28, y: 22 }, o2: { x: 62, y: 20 }, o3: { x: 30, y: 38 }, o4: { x: 52, y: 38 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-diamond-rotation',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'advanced',
    standard: 'Total Football',
    title: '5v5 Fluid 1-2-1 Diamond Rotation',
    tag: '5v5 • 5 Steps',
    desc: 'Left winger pushes high, striker drops into the pocket to link play, right winger breaks in, and squares for the tap-in.',
    cue: 'When a teammate vacates a space, another player rotates to fill the triangle!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: t2 pushes high, t4 drops into midfield pocket, t1 passes into t4
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 73 }, t2: { x: 22, y: 56 }, t3: { x: 78, y: 56 }, t4: { x: 50, y: 36 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 30, y: 48 }, o4: { x: 68, y: 48 } },
          ball: { x: 50, y: 73, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 22, y: 52 }, { x: 26, y: 28 }] },
            { type: 'run', pts: [{ x: 50, y: 38 }, { x: 50, y: 53 }] },
            { type: 'pass', fromId: 't1', toId: 't4', pts: [{ x: 50, y: 69 }, { x: 50, y: 53 }] }
          ]
        },
        {
          // S2: t4 turns in pocket and slips blind-side runner t3 into right channel
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 34, y: 68 }, t2: { x: 26, y: 28 }, t3: { x: 76, y: 44 }, t4: { x: 50, y: 53 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 28, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 36, y: 44 }, o4: { x: 66, y: 46 } },
          ball: { x: 50, y: 53, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 76, y: 44 }, { x: 64, y: 22 }] },
            { type: 'pass', fromId: 't4', toId: 't3', pts: [{ x: 53, y: 50 }, { x: 64, y: 22 }] }
          ]
        },
        {
          // S3: t3 receives in right channel and squares across to rotated left winger t2 at far post
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 38, y: 62 }, t2: { x: 32, y: 22 }, t3: { x: 64, y: 22 }, t4: { x: 50, y: 44 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 34, y: 22 }, o2: { x: 66, y: 24 }, o3: { x: 40, y: 38 }, o4: { x: 62, y: 40 } },
          ball: { x: 64, y: 22, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 32, y: 22 }, { x: 38, y: 18 }] },
            { type: 'pass', fromId: 't3', toId: 't2', pts: [{ x: 60, y: 21 }, { x: 38, y: 18 }] }
          ]
        },
        {
          // S4: Rotated winger t2 taps in past GK
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 40, y: 60 }, t2: { x: 38, y: 18 }, t3: { x: 62, y: 20 }, t4: { x: 50, y: 40 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 36, y: 20 }, o2: { x: 64, y: 22 }, o3: { x: 42, y: 36 }, o4: { x: 60, y: 38 } },
          ball: { x: 38, y: 18, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't2', toId: null, pts: [{ x: 40, y: 15 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 40, y: 58 }, t2: { x: 40, y: 16 }, t3: { x: 60, y: 19 }, t4: { x: 50, y: 38 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 38, y: 19 }, o2: { x: 62, y: 20 }, o3: { x: 42, y: 34 }, o4: { x: 58, y: 36 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-5v5-gk-counter',
    category: 'match',
    squadFormat: '5v5',
    difficulty: 'advanced',
    standard: 'UEFA Fast Break',
    title: '5v5 GK Quick Roll & Fast Break',
    tag: '5v5 • 5 Steps',
    desc: 'Goalkeeper claims a shot, rolls instantly to the right defender, who carries into space and hits a diagonal pass to score.',
    cue: 'GK scan up first — roll wide in 2 seconds and counter at top speed!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '2-2',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: GK t0 rolls fast out to right defender t2
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 26, y: 74 }, t2: { x: 80, y: 70 }, t3: { x: 26, y: 52 }, t4: { x: 64, y: 50 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 38, y: 38 }, o2: { x: 66, y: 42 }, o3: { x: 42, y: 64 }, o4: { x: 58, y: 68 } },
          ball: { x: 50, y: 88, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't0', toId: 't2', pts: [{ x: 54, y: 86 }, { x: 78, y: 71 }] }
          ]
        },
        {
          // S2: t2 drives forward down right lane as t3 & t4 sprint ahead of recovering opponents
          teamPos: { t0: { x: 50, y: 87 }, t1: { x: 28, y: 70 }, t2: { x: 80, y: 70 }, t3: { x: 28, y: 46 }, t4: { x: 64, y: 44 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 38, y: 34 }, o2: { x: 66, y: 38 }, o3: { x: 44, y: 58 }, o4: { x: 62, y: 62 } },
          ball: { x: 80, y: 70, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 80, y: 68 }, { x: 80, y: 48 }] },
            { type: 'run', pts: [{ x: 28, y: 46 }, { x: 38, y: 24 }] },
            { type: 'run', pts: [{ x: 64, y: 44 }, { x: 60, y: 24 }] }
          ]
        },
        {
          // S3: t2 hits diagonal ball across to t3 breaking into left side of box
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 32, y: 64 }, t2: { x: 80, y: 48 }, t3: { x: 38, y: 24 }, t4: { x: 60, y: 24 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 38, y: 28 }, o2: { x: 62, y: 32 }, o3: { x: 46, y: 50 }, o4: { x: 64, y: 52 } },
          ball: { x: 80, y: 48, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 38, y: 24 }, { x: 40, y: 19 }] },
            { type: 'pass', fromId: 't2', toId: 't3', pts: [{ x: 76, y: 45 }, { x: 40, y: 19 }] }
          ]
        },
        {
          // S4: t3 receives in stride and sweeps past GK
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 34, y: 62 }, t2: { x: 74, y: 42 }, t3: { x: 40, y: 19 }, t4: { x: 60, y: 20 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 36, y: 24 }, o2: { x: 60, y: 28 }, o3: { x: 46, y: 46 }, o4: { x: 62, y: 48 } },
          ball: { x: 40, y: 19, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't3', toId: null, pts: [{ x: 43, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 36, y: 60 }, t2: { x: 72, y: 40 }, t3: { x: 42, y: 17 }, t4: { x: 58, y: 18 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 38, y: 22 }, o2: { x: 58, y: 24 }, o3: { x: 46, y: 44 }, o4: { x: 60, y: 44 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },

  // =========================================================================
  // TAB 1: MATCH PLAYS — 6v6 SQUAD SIZE (6 Plays: 2 Easy, 2 Medium, 2 Advanced)
  // =========================================================================
  {
    id: 'tpl-6v6-gk-triangle',
    category: 'match',
    squadFormat: '6v6',
    difficulty: 'easy',
    standard: 'FA Build-Up',
    title: '6v6 Goal-Kick Wide Triangle',
    tag: '6v6 • 6 Steps',
    desc: 'GK plays to split left back, inside to central pivot, out to left winger, low cross to striker, and finish!',
    cue: 'Form a side triangle — defender, pivot, winger — to play cleanly around the press!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '2-2-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: GK t0 plays short to split left back t1
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 18, y: 78 }, t2: { x: 82, y: 78 }, t3: { x: 46, y: 64 }, t4: { x: 18, y: 48 }, t5: { x: 54, y: 34 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 30, y: 54 }, o4: { x: 66, y: 50 }, o5: { x: 46, y: 44 } },
          ball: { x: 50, y: 90, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't0', toId: 't1', pts: [{ x: 46, y: 88 }, { x: 21, y: 79 }] }
          ]
        },
        {
          // S2: o3 presses t1, so t1 plays angled pass inside to pivot t3
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 18, y: 76 }, t2: { x: 80, y: 75 }, t3: { x: 40, y: 62 }, t4: { x: 18, y: 44 }, t5: { x: 52, y: 30 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 24, y: 64 }, o4: { x: 66, y: 48 }, o5: { x: 46, y: 46 } },
          ball: { x: 18, y: 76, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 40, y: 62 }, { x: 36, y: 58 }] },
            { type: 'pass', fromId: 't1', toId: 't3', pts: [{ x: 21, y: 73 }, { x: 36, y: 58 }] }
          ]
        },
        {
          // S3: Pivot t3 plays 1-touch around o3 out to left winger t4
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 20, y: 70 }, t2: { x: 76, y: 70 }, t3: { x: 36, y: 58 }, t4: { x: 18, y: 34 }, t5: { x: 52, y: 25 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 24 }, o2: { x: 66, y: 26 }, o3: { x: 22, y: 62 }, o4: { x: 64, y: 46 }, o5: { x: 42, y: 48 } },
          ball: { x: 36, y: 58, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 18, y: 34 }, { x: 20, y: 22 }] },
            { type: 'pass', fromId: 't3', toId: 't4', pts: [{ x: 33, y: 55 }, { x: 20, y: 22 }] }
          ]
        },
        {
          // S4: Left winger t4 receives in space and squares low to striker t5
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 24, y: 66 }, t2: { x: 74, y: 66 }, t3: { x: 40, y: 50 }, t4: { x: 20, y: 22 }, t5: { x: 50, y: 20 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 30, y: 22 }, o2: { x: 62, y: 22 }, o3: { x: 28, y: 48 }, o4: { x: 60, y: 42 }, o5: { x: 44, y: 38 } },
          ball: { x: 20, y: 22, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 50, y: 20 }, { x: 50, y: 18 }] },
            { type: 'pass', fromId: 't4', toId: 't5', pts: [{ x: 24, y: 21 }, { x: 50, y: 18 }] }
          ]
        },
        {
          // S5: Striker t5 finishes past GK
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 26, y: 64 }, t2: { x: 72, y: 64 }, t3: { x: 42, y: 46 }, t4: { x: 22, y: 20 }, t5: { x: 50, y: 18 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 32, y: 20 }, o2: { x: 60, y: 21 }, o3: { x: 30, y: 44 }, o4: { x: 58, y: 40 }, o5: { x: 44, y: 36 } },
          ball: { x: 50, y: 18, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: null, pts: [{ x: 51, y: 15 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S6: Goal!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 26, y: 62 }, t2: { x: 72, y: 62 }, t3: { x: 44, y: 44 }, t4: { x: 22, y: 19 }, t5: { x: 51, y: 16 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 34, y: 19 }, o2: { x: 60, y: 20 }, o3: { x: 30, y: 42 }, o4: { x: 58, y: 38 }, o5: { x: 44, y: 34 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-6v6-corner-screen',
    category: 'match',
    squadFormat: '6v6',
    difficulty: 'easy',
    standard: 'UEFA Set-Piece',
    title: '6v6 Near-Post Decoy & Cut-Back Corner',
    tag: '6v6 • 4 Steps',
    desc: 'Striker sprints to the near post to drag defenders forward, vacating the penalty-box edge for a clean low cut-back.',
    cue: 'One sprints near post as the decoy — second runner arrives late on the penalty spot!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '2-1-2',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 62 }, t2: { x: 64, y: 62 }, t3: { x: 52, y: 34 }, t4: { x: 64, y: 22 }, t5: { x: 92, y: 8 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 58, y: 16 }, o2: { x: 44, y: 18 }, o3: { x: 64, y: 26 }, o4: { x: 48, y: 28 }, o5: { x: 50, y: 46 } },
          ball: { x: 92, y: 8, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 64, y: 22 }, { x: 62, y: 11 }] },
            { type: 'run', pts: [{ x: 52, y: 34 }, { x: 54, y: 22 }] },
            { type: 'zone', x1: 46, y1: 17, x2: 62, y2: 26 }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 60 }, t2: { x: 64, y: 60 }, t3: { x: 54, y: 22 }, t4: { x: 62, y: 11 }, t5: { x: 90, y: 10 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 60, y: 12 }, o2: { x: 44, y: 16 }, o3: { x: 63, y: 15 }, o4: { x: 46, y: 24 }, o5: { x: 50, y: 44 } },
          ball: { x: 90, y: 10, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: 't3', pts: [{ x: 87, y: 11 }, { x: 54, y: 20 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 58 }, t2: { x: 64, y: 58 }, t3: { x: 54, y: 20 }, t4: { x: 62, y: 12 }, t5: { x: 84, y: 16 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 60, y: 13 }, o2: { x: 44, y: 16 }, o3: { x: 60, y: 17 }, o4: { x: 48, y: 22 }, o5: { x: 50, y: 42 } },
          ball: { x: 54, y: 20, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't3', toId: null, pts: [{ x: 52, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 58 }, t2: { x: 64, y: 58 }, t3: { x: 52, y: 18 }, t4: { x: 62, y: 12 }, t5: { x: 82, y: 18 } },
          oppPos: { o0: { x: 56, y: 11 }, o1: { x: 58, y: 13 }, o2: { x: 44, y: 15 }, o3: { x: 58, y: 17 }, o4: { x: 48, y: 20 }, o5: { x: 50, y: 40 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-6v6-pivot-switch',
    category: 'match',
    squadFormat: '6v6',
    difficulty: 'medium',
    standard: 'UEFA Positional',
    title: '6v6 2-2-1 Weak-Side Wing Switch',
    tag: '6v6 • 6 Steps',
    desc: 'Recycle from crowded left wing to left CB, switch across to right CB, feed open right winger, square to striker, and score.',
    cue: 'Two quick passes across the back unlock the 1v1 on the weak side!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '2-2-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: Crowded left mid t3 recycles back to left CB t1
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 30, y: 72 }, t2: { x: 68, y: 70 }, t3: { x: 18, y: 50 }, t4: { x: 84, y: 48 }, t5: { x: 50, y: 32 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 26, y: 30 }, o2: { x: 58, y: 28 }, o3: { x: 22, y: 44 }, o4: { x: 44, y: 46 }, o5: { x: 34, y: 56 } },
          ball: { x: 18, y: 50, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 70, y1: 20, x2: 92, y2: 52 },
            { type: 'pass', fromId: 't3', toId: 't1', pts: [{ x: 20, y: 54 }, { x: 29, y: 69 }] }
          ]
        },
        {
          // S2: Left CB t1 switches across to right CB t2
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 30, y: 72 }, t2: { x: 68, y: 68 }, t3: { x: 20, y: 46 }, t4: { x: 84, y: 42 }, t5: { x: 50, y: 28 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 30, y: 28 }, o2: { x: 60, y: 28 }, o3: { x: 26, y: 46 }, o4: { x: 46, y: 48 }, o5: { x: 36, y: 58 } },
          ball: { x: 30, y: 72, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't2', pts: [{ x: 34, y: 72 }, { x: 64, y: 68 }] },
            { type: 'run', pts: [{ x: 84, y: 42 }, { x: 82, y: 32 }] }
          ]
        },
        {
          // S3: Right CB t2 plays forward into wide-open right winger t4
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 34, y: 68 }, t2: { x: 68, y: 66 }, t3: { x: 24, y: 42 }, t4: { x: 82, y: 32 }, t5: { x: 50, y: 24 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 34, y: 26 }, o2: { x: 64, y: 26 }, o3: { x: 30, y: 44 }, o4: { x: 52, y: 44 }, o5: { x: 42, y: 54 } },
          ball: { x: 68, y: 66, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 82, y: 32 }, { x: 76, y: 22 }] },
            { type: 'pass', fromId: 't2', toId: 't4', pts: [{ x: 70, y: 62 }, { x: 76, y: 22 }] }
          ]
        },
        {
          // S4: Right winger t4 receives in right lane and squares across to striker t5
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 36, y: 64 }, t2: { x: 68, y: 60 }, t3: { x: 28, y: 38 }, t4: { x: 76, y: 22 }, t5: { x: 48, y: 20 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 38, y: 24 }, o2: { x: 68, y: 24 }, o3: { x: 34, y: 40 }, o4: { x: 56, y: 38 }, o5: { x: 44, y: 50 } },
          ball: { x: 76, y: 22, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 48, y: 20 }, { x: 48, y: 18 }] },
            { type: 'pass', fromId: 't4', toId: 't5', pts: [{ x: 72, y: 21 }, { x: 48, y: 18 }] }
          ]
        },
        {
          // S5: Striker t5 finishes low into goal
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 38, y: 62 }, t2: { x: 66, y: 58 }, t3: { x: 30, y: 36 }, t4: { x: 74, y: 20 }, t5: { x: 48, y: 18 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 40, y: 22 }, o2: { x: 66, y: 22 }, o3: { x: 36, y: 38 }, o4: { x: 56, y: 36 }, o5: { x: 46, y: 48 } },
          ball: { x: 48, y: 18, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: null, pts: [{ x: 47, y: 15 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S6: Goal!
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 38, y: 60 }, t2: { x: 66, y: 56 }, t3: { x: 32, y: 34 }, t4: { x: 72, y: 19 }, t5: { x: 48, y: 16 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 40, y: 21 }, o2: { x: 64, y: 21 }, o3: { x: 36, y: 36 }, o4: { x: 56, y: 34 }, o5: { x: 46, y: 46 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-6v6-high-press',
    category: 'match',
    squadFormat: '6v6',
    difficulty: 'medium',
    standard: 'FA Out-of-Possession',
    title: '6v6 2-1-2 Twin-Striker Press Trap',
    tag: '6v6 • 5 Steps',
    desc: 'Opponent GK plays wide; forwards press outside-in to force a central turnover to your midfielder, who slips the striker.',
    cue: 'Forwards show them inside into our central midfielder’s trap — win and slip through!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '2-1-2',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: Opponent GK rolls out to left back o1
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 32, y: 72 }, t2: { x: 68, y: 72 }, t3: { x: 50, y: 48 }, t4: { x: 26, y: 36 }, t5: { x: 74, y: 36 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 26, y: 22 }, o2: { x: 74, y: 22 }, o3: { x: 50, y: 38 }, o4: { x: 30, y: 56 }, o5: { x: 70, y: 56 } },
          ball: { x: 50, y: 10, attachedTo: 'o0' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 'o0', toId: 'o1', pts: [{ x: 46, y: 12 }, { x: 29, y: 21 }] }
          ]
        },
        {
          // S2: t4 presses outside-in while t3 jumps central pass to intercept
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 32, y: 70 }, t2: { x: 68, y: 70 }, t3: { x: 50, y: 46 }, t4: { x: 24, y: 34 }, t5: { x: 70, y: 32 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 26, y: 22 }, o2: { x: 74, y: 22 }, o3: { x: 50, y: 39 }, o4: { x: 30, y: 56 }, o5: { x: 70, y: 56 } },
          ball: { x: 26, y: 22, attachedTo: 'o1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 24, y: 34 }, { x: 22, y: 24 }] },
            { type: 'run', pts: [{ x: 50, y: 46 }, { x: 48, y: 37 }] },
            { type: 'zone', x1: 38, y1: 30, x2: 60, y2: 44 },
            { type: 'pass', fromId: 'o1', toId: 't3', pts: [{ x: 29, y: 24 }, { x: 48, y: 37 }] }
          ]
        },
        {
          // S3: t3 intercepts centrally and slips t5 between CBs
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 34, y: 68 }, t2: { x: 66, y: 68 }, t3: { x: 48, y: 37 }, t4: { x: 24, y: 24 }, t5: { x: 64, y: 26 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 24, y: 20 }, o2: { x: 72, y: 24 }, o3: { x: 52, y: 41 }, o4: { x: 32, y: 54 }, o5: { x: 68, y: 54 } },
          ball: { x: 48, y: 37, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 64, y: 26 }, { x: 56, y: 18 }] },
            { type: 'pass', fromId: 't3', toId: 't5', pts: [{ x: 50, y: 34 }, { x: 56, y: 18 }] }
          ]
        },
        {
          // S4: t5 shoots low into net
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 36, y: 64 }, t2: { x: 64, y: 64 }, t3: { x: 48, y: 32 }, t4: { x: 32, y: 22 }, t5: { x: 56, y: 18 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 30, y: 20 }, o2: { x: 68, y: 22 }, o3: { x: 50, y: 36 }, o4: { x: 34, y: 50 }, o5: { x: 66, y: 50 } },
          ball: { x: 56, y: 18, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: null, pts: [{ x: 56, y: 15 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 36, y: 62 }, t2: { x: 64, y: 62 }, t3: { x: 48, y: 30 }, t4: { x: 34, y: 20 }, t5: { x: 56, y: 16 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 32, y: 19 }, o2: { x: 64, y: 20 }, o3: { x: 50, y: 34 }, o4: { x: 36, y: 48 }, o5: { x: 64, y: 48 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-6v6-diamond',
    category: 'match',
    squadFormat: '6v6',
    difficulty: 'advanced',
    standard: 'UEFA Tournament',
    title: '6v6 Wide Overlap & Cut-Back',
    tag: '6v6 • 6 Steps',
    desc: 'Defender feeds left winger and overlaps outside while winger drives inside to pin marker, slips overlap, cuts back, and scores.',
    cue: 'Drive inside to pin the full-back — shout "OVER!" at top speed outside!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '1-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: t1 passes wide to left winger t2 and starts overlapping run
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 42, y: 74 }, t2: { x: 24, y: 54 }, t3: { x: 54, y: 58 }, t4: { x: 82, y: 54 }, t5: { x: 50, y: 34 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 30, y: 26 }, o2: { x: 70, y: 26 }, o3: { x: 26, y: 42 }, o4: { x: 74, y: 44 }, o5: { x: 50, y: 52 } },
          ball: { x: 42, y: 74, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't2', pts: [{ x: 39, y: 71 }, { x: 26, y: 57 }] },
            { type: 'run', pts: [{ x: 42, y: 74 }, { x: 16, y: 60 }] }
          ]
        },
        {
          // S2: t2 dribbles inside to pin o3 while t1 overlaps at full speed down left touchline
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 16, y: 60 }, t2: { x: 24, y: 54 }, t3: { x: 52, y: 56 }, t4: { x: 78, y: 46 }, t5: { x: 50, y: 30 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 30, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 26, y: 42 }, o4: { x: 72, y: 42 }, o5: { x: 48, y: 50 } },
          ball: { x: 24, y: 54, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 24, y: 54 }, { x: 34, y: 40 }] },
            { type: 'run', pts: [{ x: 16, y: 60 }, { x: 12, y: 42 }, { x: 14, y: 22 }] }
          ]
        },
        {
          // S3: t2 slips through-ball into overlapping t1 in open left corridor
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 14, y: 28 }, t2: { x: 34, y: 40 }, t3: { x: 52, y: 52 }, t4: { x: 74, y: 34 }, t5: { x: 50, y: 24 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 24 }, o2: { x: 68, y: 25 }, o3: { x: 32, y: 36 }, o4: { x: 70, y: 38 }, o5: { x: 48, y: 46 } },
          ball: { x: 34, y: 40, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 14, y: 28 }, { x: 14, y: 20 }] },
            { type: 'pass', fromId: 't2', toId: 't1', pts: [{ x: 30, y: 38 }, { x: 14, y: 20 }] }
          ]
        },
        {
          // S4: Overlapping t1 cuts back from byline to striker t5
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 14, y: 20 }, t2: { x: 36, y: 36 }, t3: { x: 50, y: 50 }, t4: { x: 68, y: 24 }, t5: { x: 48, y: 19 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 30, y: 20 }, o2: { x: 62, y: 22 }, o3: { x: 26, y: 30 }, o4: { x: 66, y: 34 }, o5: { x: 48, y: 44 } },
          ball: { x: 14, y: 20, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't5', pts: [{ x: 18, y: 20 }, { x: 48, y: 19 }] }
          ]
        },
        {
          // S5: Striker t5 slams cut-back past GK
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 16, y: 19 }, t2: { x: 38, y: 34 }, t3: { x: 50, y: 48 }, t4: { x: 66, y: 22 }, t5: { x: 48, y: 19 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 32, y: 19 }, o2: { x: 60, y: 21 }, o3: { x: 28, y: 29 }, o4: { x: 64, y: 33 }, o5: { x: 48, y: 42 } },
          ball: { x: 48, y: 19, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: null, pts: [{ x: 50, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S6: Goal!
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 18, y: 19 }, t2: { x: 38, y: 33 }, t3: { x: 50, y: 46 }, t4: { x: 66, y: 20 }, t5: { x: 49, y: 17 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 34, y: 19 }, o2: { x: 60, y: 20 }, o3: { x: 28, y: 28 }, o4: { x: 64, y: 32 }, o5: { x: 48, y: 40 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-6v6-third-man',
    category: 'match',
    squadFormat: '6v6',
    difficulty: 'advanced',
    standard: 'La Masia 6v6',
    title: '6v6 Up-Back-Through Third Man',
    tag: '6v6 • 5 Steps',
    desc: 'Play UP into the central striker, bounce BACK 1-touch to the midfielder, slide THROUGH to the winger, and finish.',
    cue: 'Find the striker’s feet to draw CBs narrow, then bounce & release the wide runner!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '1-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: Defender t1 plays UP into dropping striker t5
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 46, y: 75 }, t2: { x: 20, y: 54 }, t3: { x: 44, y: 56 }, t4: { x: 82, y: 52 }, t5: { x: 52, y: 36 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 36, y: 26 }, o2: { x: 66, y: 26 }, o3: { x: 32, y: 44 }, o4: { x: 66, y: 44 }, o5: { x: 52, y: 60 } },
          ball: { x: 46, y: 75, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 52, y: 36 }, { x: 52, y: 40 }] },
            { type: 'pass', fromId: 't1', toId: 't5', pts: [{ x: 47, y: 71 }, { x: 52, y: 40 }] }
          ]
        },
        {
          // S2: Striker t5 lays BACK 1-touch to central midfielder t3
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 46, y: 70 }, t2: { x: 22, y: 48 }, t3: { x: 46, y: 51 }, t4: { x: 80, y: 42 }, t5: { x: 52, y: 40 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 42, y: 28 }, o2: { x: 62, y: 28 }, o3: { x: 34, y: 44 }, o4: { x: 64, y: 42 }, o5: { x: 50, y: 58 } },
          ball: { x: 52, y: 40, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: 't3', pts: [{ x: 50, y: 43 }, { x: 46, y: 50 }] },
            { type: 'run', pts: [{ x: 80, y: 42 }, { x: 72, y: 28 }] }
          ]
        },
        {
          // S3: Midfielder t3 slides THROUGH ball to blind-side runner t4
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 46, y: 68 }, t2: { x: 24, y: 44 }, t3: { x: 46, y: 50 }, t4: { x: 72, y: 28 }, t5: { x: 50, y: 34 } },
          oppPos: { o0: { x: 51, y: 10 }, o1: { x: 40, y: 26 }, o2: { x: 60, y: 28 }, o3: { x: 36, y: 42 }, o4: { x: 62, y: 38 }, o5: { x: 48, y: 56 } },
          ball: { x: 46, y: 50, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 56, y1: 14, x2: 74, y2: 26 },
            { type: 'run', pts: [{ x: 72, y: 28 }, { x: 64, y: 20 }] },
            { type: 'pass', fromId: 't3', toId: 't4', pts: [{ x: 49, y: 47 }, { x: 64, y: 20 }] }
          ]
        },
        {
          // S4: Winger t4 receives in on goal and shoots across GK
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 46, y: 66 }, t2: { x: 26, y: 42 }, t3: { x: 47, y: 48 }, t4: { x: 64, y: 20 }, t5: { x: 50, y: 30 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 40, y: 25 }, o2: { x: 60, y: 26 }, o3: { x: 38, y: 40 }, o4: { x: 62, y: 35 }, o5: { x: 48, y: 52 } },
          ball: { x: 64, y: 20, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't4', toId: null, pts: [{ x: 61, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 46, y: 64 }, t2: { x: 28, y: 40 }, t3: { x: 48, y: 44 }, t4: { x: 62, y: 18 }, t5: { x: 50, y: 28 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 40, y: 24 }, o2: { x: 58, y: 24 }, o3: { x: 40, y: 38 }, o4: { x: 60, y: 32 }, o5: { x: 48, y: 50 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },

  // =========================================================================
  // TAB 1: MATCH PLAYS — 7v7 SQUAD SIZE (6 Plays: 2 Easy, 2 Medium, 2 Advanced)
  // =========================================================================
  {
    id: 'tpl-7v7-retreat-build',
    category: 'match',
    squadFormat: '7v7',
    difficulty: 'easy',
    standard: 'FA 7v7 Build-Up',
    title: '7v7 Split CBs & Wing Progression',
    tag: '7v7 • 6 Steps',
    desc: 'GK plays to split left CB, down the line to left winger, dribble to byline, low cross to striker, and finish!',
    cue: 'CBs split wide, wingers stay high & wide — build down the channel and cross low!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: GK t0 plays short to split left CB t1
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 22, y: 78 }, t2: { x: 78, y: 78 }, t3: { x: 16, y: 52 }, t4: { x: 50, y: 58 }, t5: { x: 84, y: 52 }, t6: { x: 50, y: 34 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 24 }, o2: { x: 52, y: 24 }, o3: { x: 74, y: 24 }, o4: { x: 34, y: 46 }, o5: { x: 66, y: 46 }, o6: { x: 50, y: 58 } },
          ball: { x: 50, y: 91, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't0', toId: 't1', pts: [{ x: 46, y: 89 }, { x: 25, y: 79 }] }
          ]
        },
        {
          // S2: Left CB t1 steps forward and feeds left winger t3 down the touchline
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 22, y: 74 }, t2: { x: 76, y: 76 }, t3: { x: 16, y: 48 }, t4: { x: 48, y: 54 }, t5: { x: 82, y: 48 }, t6: { x: 50, y: 30 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 24 }, o2: { x: 52, y: 24 }, o3: { x: 74, y: 24 }, o4: { x: 30, y: 48 }, o5: { x: 66, y: 46 }, o6: { x: 44, y: 60 } },
          ball: { x: 22, y: 74, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 16, y: 48 }, { x: 16, y: 38 }] },
            { type: 'pass', fromId: 't1', toId: 't3', pts: [{ x: 20, y: 70 }, { x: 16, y: 38 }] }
          ]
        },
        {
          // S3: Left winger t3 dribbles down the wing to the byline
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 24, y: 68 }, t2: { x: 74, y: 72 }, t3: { x: 16, y: 38 }, t4: { x: 46, y: 50 }, t5: { x: 78, y: 38 }, t6: { x: 50, y: 24 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 26, y: 24 }, o2: { x: 50, y: 24 }, o3: { x: 72, y: 24 }, o4: { x: 28, y: 46 }, o5: { x: 64, y: 42 }, o6: { x: 42, y: 56 } },
          ball: { x: 16, y: 38, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 16, y: 38 }, { x: 18, y: 20 }] },
            { type: 'run', pts: [{ x: 50, y: 24 }, { x: 50, y: 19 }] }
          ]
        },
        {
          // S4: t3 crosses low from byline to striker t6
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 26, y: 64 }, t2: { x: 72, y: 70 }, t3: { x: 18, y: 20 }, t4: { x: 46, y: 44 }, t5: { x: 72, y: 28 }, t6: { x: 50, y: 19 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 28, y: 20 }, o2: { x: 46, y: 22 }, o3: { x: 68, y: 22 }, o4: { x: 30, y: 40 }, o5: { x: 60, y: 38 }, o6: { x: 44, y: 50 } },
          ball: { x: 18, y: 20, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't3', toId: 't6', pts: [{ x: 22, y: 20 }, { x: 50, y: 19 }] }
          ]
        },
        {
          // S5: Striker t6 shoots past GK
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 28, y: 62 }, t2: { x: 70, y: 68 }, t3: { x: 20, y: 19 }, t4: { x: 46, y: 40 }, t5: { x: 70, y: 24 }, t6: { x: 50, y: 19 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 30, y: 20 }, o2: { x: 46, y: 21 }, o3: { x: 66, y: 21 }, o4: { x: 32, y: 38 }, o5: { x: 58, y: 36 }, o6: { x: 44, y: 48 } },
          ball: { x: 50, y: 19, attachedTo: 't6' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't6', toId: null, pts: [{ x: 51, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S6: Goal!
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 28, y: 60 }, t2: { x: 68, y: 66 }, t3: { x: 20, y: 19 }, t4: { x: 46, y: 38 }, t5: { x: 68, y: 22 }, t6: { x: 51, y: 17 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 32, y: 19 }, o2: { x: 46, y: 20 }, o3: { x: 64, y: 20 }, o4: { x: 32, y: 36 }, o5: { x: 58, y: 34 }, o6: { x: 44, y: 46 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-7v7-sideline-12',
    category: 'match',
    squadFormat: '7v7',
    difficulty: 'easy',
    standard: 'UEFA 7v7 Restart',
    title: '7v7 Sideline Bounce & Cut-Back',
    tag: '7v7 • 5 Steps',
    desc: 'From a right-side restart, play inside to CM, bounce down the channel to RW, square to striker, and finish!',
    cue: 'Play inside to the CM first — winger sprints the channel on the bounce pass!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: Right back t2 plays inside to CM t4
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 34, y: 74 }, t2: { x: 92, y: 54 }, t3: { x: 22, y: 48 }, t4: { x: 64, y: 54 }, t5: { x: 80, y: 38 }, t6: { x: 48, y: 32 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 30, y: 24 }, o2: { x: 52, y: 25 }, o3: { x: 74, y: 26 }, o4: { x: 40, y: 44 }, o5: { x: 74, y: 44 }, o6: { x: 58, y: 60 } },
          ball: { x: 92, y: 54, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't2', toId: 't4', pts: [{ x: 88, y: 54 }, { x: 64, y: 54 }] },
            { type: 'run', pts: [{ x: 80, y: 38 }, { x: 82, y: 28 }] }
          ]
        },
        {
          // S2: CM t4 bounces 1-touch pass down right channel to RW t5
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 70 }, t2: { x: 86, y: 50 }, t3: { x: 26, y: 42 }, t4: { x: 64, y: 52 }, t5: { x: 82, y: 28 }, t6: { x: 48, y: 26 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 32, y: 23 }, o2: { x: 52, y: 24 }, o3: { x: 74, y: 25 }, o4: { x: 44, y: 42 }, o5: { x: 70, y: 46 }, o6: { x: 58, y: 56 } },
          ball: { x: 64, y: 52, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 82, y: 28 }, { x: 82, y: 20 }] },
            { type: 'pass', fromId: 't4', toId: 't5', pts: [{ x: 66, y: 48 }, { x: 82, y: 20 }] }
          ]
        },
        {
          // S3: RW t5 receives at byline and squares low to striker t6
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 68 }, t2: { x: 82, y: 46 }, t3: { x: 32, y: 32 }, t4: { x: 62, y: 46 }, t5: { x: 82, y: 20 }, t6: { x: 48, y: 20 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 34, y: 22 }, o2: { x: 54, y: 21 }, o3: { x: 74, y: 22 }, o4: { x: 46, y: 38 }, o5: { x: 68, y: 42 }, o6: { x: 56, y: 52 } },
          ball: { x: 82, y: 20, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 48, y: 20 }, { x: 48, y: 18 }] },
            { type: 'pass', fromId: 't5', toId: 't6', pts: [{ x: 78, y: 20 }, { x: 48, y: 18 }] }
          ]
        },
        {
          // S4: Striker t6 receives and finishes past GK
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 66 }, t2: { x: 80, y: 44 }, t3: { x: 34, y: 26 }, t4: { x: 62, y: 44 }, t5: { x: 80, y: 20 }, t6: { x: 48, y: 18 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 34, y: 21 }, o2: { x: 54, y: 20 }, o3: { x: 74, y: 21 }, o4: { x: 46, y: 37 }, o5: { x: 68, y: 40 }, o6: { x: 56, y: 50 } },
          ball: { x: 48, y: 18, attachedTo: 't6' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't6', toId: null, pts: [{ x: 47, y: 15 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 64 }, t2: { x: 78, y: 42 }, t3: { x: 36, y: 22 }, t4: { x: 60, y: 42 }, t5: { x: 78, y: 19 }, t6: { x: 48, y: 16 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 36, y: 20 }, o2: { x: 52, y: 19 }, o3: { x: 72, y: 20 }, o4: { x: 46, y: 36 }, o5: { x: 66, y: 38 }, o6: { x: 54, y: 48 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-7v7-switch-play',
    category: 'match',
    squadFormat: '7v7',
    difficulty: 'medium',
    standard: 'UEFA Positional',
    title: '7v7 2-3-1 Midfield Switch of Play',
    tag: '7v7 • 5 Steps',
    desc: 'Escape a crowded left flank via CM out to the wide-open right winger, drive diagonally into the box, and score.',
    cue: 'Don’t force into traffic — two passes through the CM switches the attack!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: LW t3 recycles inside to CM t4
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 28, y: 74 }, t2: { x: 70, y: 72 }, t3: { x: 16, y: 48 }, t4: { x: 48, y: 56 }, t5: { x: 84, y: 46 }, t6: { x: 50, y: 32 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 22, y: 28 }, o2: { x: 44, y: 26 }, o3: { x: 66, y: 28 }, o4: { x: 22, y: 42 }, o5: { x: 40, y: 46 }, o6: { x: 32, y: 58 } },
          ball: { x: 16, y: 48, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 70, y1: 18, x2: 92, y2: 50 },
            { type: 'pass', fromId: 't3', toId: 't4', pts: [{ x: 20, y: 50 }, { x: 48, y: 56 }] }
          ]
        },
        {
          // S2: CM t4 switches wide right to isolated RW t5
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 30, y: 70 }, t2: { x: 70, y: 68 }, t3: { x: 20, y: 42 }, t4: { x: 48, y: 54 }, t5: { x: 82, y: 38 }, t6: { x: 50, y: 26 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 26, y: 26 }, o2: { x: 48, y: 26 }, o3: { x: 68, y: 26 }, o4: { x: 28, y: 42 }, o5: { x: 46, y: 46 }, o6: { x: 38, y: 56 } },
          ball: { x: 48, y: 54, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 82, y: 38 }, { x: 80, y: 30 }] },
            { type: 'pass', fromId: 't4', toId: 't5', pts: [{ x: 52, y: 51 }, { x: 80, y: 30 }] }
          ]
        },
        {
          // S3: RW t5 receives in right lane and dribbles diagonally into penalty area
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 32, y: 68 }, t2: { x: 70, y: 64 }, t3: { x: 24, y: 38 }, t4: { x: 50, y: 48 }, t5: { x: 80, y: 30 }, t6: { x: 48, y: 22 } },
          oppPos: { o0: { x: 51, y: 10 }, o1: { x: 30, y: 25 }, o2: { x: 50, y: 25 }, o3: { x: 72, y: 25 }, o4: { x: 32, y: 40 }, o5: { x: 52, y: 42 }, o6: { x: 42, y: 54 } },
          ball: { x: 80, y: 30, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 80, y: 30 }, { x: 66, y: 19 }] }
          ]
        },
        {
          // S4: RW t5 drills shot across GK into far corner
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 34, y: 66 }, t2: { x: 70, y: 62 }, t3: { x: 26, y: 34 }, t4: { x: 52, y: 44 }, t5: { x: 66, y: 19 }, t6: { x: 46, y: 20 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 24 }, o2: { x: 50, y: 24 }, o3: { x: 70, y: 24 }, o4: { x: 34, y: 38 }, o5: { x: 54, y: 40 }, o6: { x: 44, y: 52 } },
          ball: { x: 66, y: 19, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: null, pts: [{ x: 63, y: 16 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 64 }, t2: { x: 68, y: 60 }, t3: { x: 28, y: 32 }, t4: { x: 52, y: 42 }, t5: { x: 64, y: 17 }, t6: { x: 46, y: 18 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 34, y: 22 }, o2: { x: 50, y: 22 }, o3: { x: 68, y: 22 }, o4: { x: 36, y: 36 }, o5: { x: 54, y: 38 }, o6: { x: 46, y: 50 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-7v7-midblock-counter',
    category: 'match',
    squadFormat: '7v7',
    difficulty: 'medium',
    standard: 'FA Compact Block',
    title: '7v7 3-2-1 Mid-Block Trap & Counter',
    tag: '7v7 • 5 Steps',
    desc: 'Twin midfielders trap the central pass, release the striker into the left channel, square to the supporting CM, and score.',
    cue: 'Protect the middle in our 3-2-1 — win it centrally and sprint forward together!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '3-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          // S1: Twin CMs t4 & t5 clamp central opponent o4 to win possession
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 24, y: 74 }, t2: { x: 50, y: 76 }, t3: { x: 76, y: 74 }, t4: { x: 38, y: 56 }, t5: { x: 62, y: 56 }, t6: { x: 50, y: 42 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 32, y: 28 }, o2: { x: 68, y: 28 }, o3: { x: 24, y: 48 }, o4: { x: 50, y: 50 }, o5: { x: 78, y: 48 }, o6: { x: 50, y: 66 } },
          ball: { x: 50, y: 50, attachedTo: 'o4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 38, y: 56 }, { x: 48, y: 50 }] },
            { type: 'run', pts: [{ x: 62, y: 56 }, { x: 53, y: 50 }] },
            { type: 'zone', x1: 38, y1: 44, x2: 62, y2: 58 }
          ]
        },
        {
          // S2: t4 wins ball and releases striker t6 into left channel while t5 sprints forward
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 26, y: 72 }, t2: { x: 50, y: 74 }, t3: { x: 74, y: 72 }, t4: { x: 48, y: 50 }, t5: { x: 56, y: 46 }, t6: { x: 42, y: 34 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 34, y: 26 }, o2: { x: 66, y: 28 }, o3: { x: 26, y: 48 }, o4: { x: 50, y: 53 }, o5: { x: 76, y: 48 }, o6: { x: 50, y: 64 } },
          ball: { x: 48, y: 50, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 42, y: 34 }, { x: 36, y: 24 }] },
            { type: 'run', pts: [{ x: 56, y: 46 }, { x: 60, y: 26 }] },
            { type: 'pass', fromId: 't4', toId: 't6', pts: [{ x: 46, y: 47 }, { x: 36, y: 24 }] }
          ]
        },
        {
          // S3: Striker t6 receives at 36,24, commits CB o1, and squares to supporting t5
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 28, y: 68 }, t2: { x: 50, y: 70 }, t3: { x: 72, y: 68 }, t4: { x: 48, y: 44 }, t5: { x: 58, y: 21 }, t6: { x: 36, y: 24 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 36, y: 22 }, o2: { x: 66, y: 24 }, o3: { x: 30, y: 44 }, o4: { x: 50, y: 48 }, o5: { x: 72, y: 44 }, o6: { x: 50, y: 60 } },
          ball: { x: 36, y: 24, attachedTo: 't6' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 58, y: 21 }, { x: 58, y: 19 }] },
            { type: 'pass', fromId: 't6', toId: 't5', pts: [{ x: 40, y: 23 }, { x: 58, y: 19 }] }
          ]
        },
        {
          // S4: t5 receives square pass and slots past GK
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 28, y: 66 }, t2: { x: 50, y: 68 }, t3: { x: 72, y: 66 }, t4: { x: 48, y: 42 }, t5: { x: 58, y: 19 }, t6: { x: 36, y: 22 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 38, y: 21 }, o2: { x: 64, y: 23 }, o3: { x: 32, y: 43 }, o4: { x: 50, y: 47 }, o5: { x: 70, y: 43 }, o6: { x: 50, y: 58 } },
          ball: { x: 58, y: 19, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: null, pts: [{ x: 57, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 30, y: 64 }, t2: { x: 50, y: 66 }, t3: { x: 70, y: 64 }, t4: { x: 48, y: 40 }, t5: { x: 57, y: 17 }, t6: { x: 38, y: 20 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 38, y: 20 }, o2: { x: 62, y: 22 }, o3: { x: 32, y: 42 }, o4: { x: 50, y: 46 }, o5: { x: 70, y: 42 }, o6: { x: 50, y: 56 } },
          ball: { x: 55, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-la-masia-third-man',
    category: 'match',
    squadFormat: '7v7',
    difficulty: 'advanced',
    standard: 'La Masia DNA',
    title: '7v7 Third-Man: Up, Back & Through',
    tag: '7v7 • 5 Steps',
    desc: 'Play UP to the dropping striker, lay BACK 1-touch to midfield, slip THROUGH to the blind-side winger, and score.',
    cue: 'Up to the striker, back to the midfielder, through to the Third Man!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: Left CB t1 plays UP into dropping striker t6
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 32, y: 74 }, t2: { x: 68, y: 76 }, t3: { x: 18, y: 54 }, t4: { x: 42, y: 55 }, t5: { x: 82, y: 52 }, t6: { x: 52, y: 36 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 24 }, o2: { x: 52, y: 25 }, o3: { x: 74, y: 25 }, o4: { x: 34, y: 42 }, o5: { x: 64, y: 42 }, o6: { x: 56, y: 60 } },
          ball: { x: 32, y: 74, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 52, y: 36 }, { x: 52, y: 40 }] },
            { type: 'pass', fromId: 't1', toId: 't6', pts: [{ x: 34, y: 70 }, { x: 52, y: 40 }] }
          ]
        },
        {
          // S2: Striker t6 lays BACK 1-touch to CM t4
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 34, y: 70 }, t2: { x: 66, y: 72 }, t3: { x: 20, y: 48 }, t4: { x: 44, y: 52 }, t5: { x: 80, y: 42 }, t6: { x: 52, y: 40 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 24 }, o2: { x: 52, y: 30 }, o3: { x: 74, y: 26 }, o4: { x: 38, y: 41 }, o5: { x: 62, y: 42 }, o6: { x: 54, y: 58 } },
          ball: { x: 52, y: 40, attachedTo: 't6' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't6', toId: 't4', pts: [{ x: 50, y: 43 }, { x: 46, y: 50 }] },
            { type: 'run', pts: [{ x: 80, y: 42 }, { x: 74, y: 30 }] }
          ]
        },
        {
          // S3: CM t4 plays THROUGH ball into RW t5 sprinting blind-side
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 35, y: 68 }, t2: { x: 65, y: 70 }, t3: { x: 22, y: 44 }, t4: { x: 46, y: 50 }, t5: { x: 74, y: 30 }, t6: { x: 50, y: 34 } },
          oppPos: { o0: { x: 51, y: 10 }, o1: { x: 30, y: 24 }, o2: { x: 52, y: 29 }, o3: { x: 73, y: 25 }, o4: { x: 40, y: 40 }, o5: { x: 60, y: 40 }, o6: { x: 50, y: 56 } },
          ball: { x: 46, y: 50, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 58, y1: 14, x2: 76, y2: 26 },
            { type: 'run', pts: [{ x: 74, y: 30 }, { x: 66, y: 20 }] },
            { type: 'pass', fromId: 't4', toId: 't5', pts: [{ x: 49, y: 47 }, { x: 66, y: 20 }] }
          ]
        },
        {
          // S4: RW t5 receives in on goal and shoots across GK
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 66 }, t2: { x: 64, y: 68 }, t3: { x: 24, y: 42 }, t4: { x: 47, y: 48 }, t5: { x: 66, y: 20 }, t6: { x: 48, y: 30 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 23 }, o2: { x: 52, y: 28 }, o3: { x: 72, y: 24 }, o4: { x: 42, y: 40 }, o5: { x: 58, y: 38 }, o6: { x: 46, y: 54 } },
          ball: { x: 66, y: 20, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't5', toId: null, pts: [{ x: 63, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 64 }, t2: { x: 64, y: 66 }, t3: { x: 26, y: 38 }, t4: { x: 48, y: 46 }, t5: { x: 63, y: 18 }, t6: { x: 48, y: 26 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 34, y: 21 }, o2: { x: 50, y: 25 }, o3: { x: 70, y: 22 }, o4: { x: 44, y: 38 }, o5: { x: 58, y: 34 }, o6: { x: 46, y: 50 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },
  {
    id: 'tpl-7v7-fullback-overlap',
    category: 'match',
    squadFormat: '7v7',
    difficulty: 'advanced',
    standard: 'Ajax 7v7 Wing Play',
    title: '7v7 Full-Back Overlap & Back-Post Cross',
    tag: '7v7 • 6 Steps',
    desc: 'Right back feeds RW and overlaps outside while RW dribbles inside, slips overlap on the byline, crosses back-post, and scores.',
    cue: 'Winger comes inside, defender overlaps outside, opposite winger attacks the back post!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          // S1: Right back t2 passes up to RW t5 and starts overlap
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 32, y: 74 }, t2: { x: 72, y: 72 }, t3: { x: 18, y: 50 }, t4: { x: 48, y: 56 }, t5: { x: 80, y: 50 }, t6: { x: 50, y: 32 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 25 }, o2: { x: 50, y: 25 }, o3: { x: 72, y: 26 }, o4: { x: 34, y: 44 }, o5: { x: 68, y: 44 }, o6: { x: 50, y: 58 } },
          ball: { x: 72, y: 72, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't2', toId: 't5', pts: [{ x: 74, y: 68 }, { x: 80, y: 50 }] },
            { type: 'run', pts: [{ x: 72, y: 72 }, { x: 86, y: 58 }] }
          ]
        },
        {
          // S2: RW t5 dribbles inside into half-space while t2 overlaps outside
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 34, y: 70 }, t2: { x: 86, y: 58 }, t3: { x: 22, y: 42 }, t4: { x: 48, y: 54 }, t5: { x: 80, y: 50 }, t6: { x: 50, y: 28 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 30, y: 25 }, o2: { x: 50, y: 24 }, o3: { x: 72, y: 26 }, o4: { x: 36, y: 42 }, o5: { x: 68, y: 42 }, o6: { x: 50, y: 56 } },
          ball: { x: 80, y: 50, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 80, y: 50 }, { x: 66, y: 38 }] },
            { type: 'run', pts: [{ x: 86, y: 58 }, { x: 88, y: 40 }, { x: 86, y: 24 }] }
          ]
        },
        {
          // S3: RW t5 slips overlapping right back t2 into right byline space
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 68 }, t2: { x: 86, y: 28 }, t3: { x: 30, y: 30 }, t4: { x: 48, y: 52 }, t5: { x: 66, y: 38 }, t6: { x: 52, y: 22 } },
          oppPos: { o0: { x: 51, y: 10 }, o1: { x: 32, y: 24 }, o2: { x: 52, y: 22 }, o3: { x: 68, y: 26 }, o4: { x: 38, y: 40 }, o5: { x: 64, y: 36 }, o6: { x: 50, y: 54 } },
          ball: { x: 66, y: 38, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 86, y: 28 }, { x: 86, y: 21 }] },
            { type: 'pass', fromId: 't5', toId: 't2', pts: [{ x: 70, y: 35 }, { x: 86, y: 21 }] }
          ]
        },
        {
          // S4: Overlapping t2 crosses across box to LW t3 arriving at back post
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 66 }, t2: { x: 86, y: 21 }, t3: { x: 36, y: 22 }, t4: { x: 50, y: 48 }, t5: { x: 66, y: 35 }, t6: { x: 54, y: 19 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 36, y: 21 }, o2: { x: 52, y: 20 }, o3: { x: 70, y: 22 }, o4: { x: 40, y: 36 }, o5: { x: 64, y: 34 }, o6: { x: 50, y: 50 } },
          ball: { x: 86, y: 21, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 36, y: 22 }, { x: 40, y: 17 }] },
            { type: 'pass', fromId: 't2', toId: 't3', pts: [{ x: 82, y: 20 }, { x: 40, y: 17 }] }
          ]
        },
        {
          // S5: LW t3 finishes at the back post
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 65 }, t2: { x: 84, y: 20 }, t3: { x: 40, y: 17 }, t4: { x: 50, y: 47 }, t5: { x: 65, y: 34 }, t6: { x: 54, y: 18 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 36, y: 20 }, o2: { x: 52, y: 20 }, o3: { x: 69, y: 21 }, o4: { x: 41, y: 35 }, o5: { x: 63, y: 33 }, o6: { x: 50, y: 49 } },
          ball: { x: 40, y: 17, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', fromId: 't3', toId: null, pts: [{ x: 42, y: 14 }, { x: 45, y: 4 }] }
          ]
        },
        {
          // S6: Goal!
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 64 }, t2: { x: 82, y: 20 }, t3: { x: 41, y: 15 }, t4: { x: 50, y: 46 }, t5: { x: 64, y: 32 }, t6: { x: 54, y: 17 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 36, y: 19 }, o2: { x: 52, y: 19 }, o3: { x: 68, y: 20 }, o4: { x: 42, y: 34 }, o5: { x: 62, y: 32 }, o6: { x: 50, y: 48 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [],
          drawings: []
        }
      ]
    })
  },

  // =========================================================================
  // TAB 2: TRAINING & GEAR — EASY (3 Drills: Full Un-Skipped Circuits)
  // =========================================================================
  {
    id: 'tpl-rondo-box',
    category: 'training',
    difficulty: 'easy',
    standard: 'UEFA Warm-Up',
    title: '4v1 Continuous Rondo Box',
    tag: 'Blank Grass • 5 Steps',
    desc: 'Complete 4-side rondo circuit: outside players slide along the cone lines to give 2 diagonal angles on every pass.',
    cue: 'Slide to offer two angles — open your hips and receive on the back foot!',
    build: () => ({
      pitchMode: 'blank',
      formationId: 'drill-diamond',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [{ id: 'o0', label: 'D', isGk: false }],
      steps: [
        {
          // S1: Bottom t0 -> Left t1
          teamPos: { t0: { x: 50, y: 78 }, t1: { x: 20, y: 54 }, t2: { x: 80, y: 54 }, t3: { x: 50, y: 22 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 46, y: 58 } },
          ball: { x: 50, y: 78, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 20, y: 22 },
            { id: 'g2', kind: 'cone-amber', x: 80, y: 22 },
            { id: 'g3', kind: 'cone-amber', x: 20, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 80, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't0', toId: 't1', pts: [{ x: 46, y: 75 }, { x: 20, y: 54 }] },
            { type: 'run', pts: [{ x: 50, y: 22 }, { x: 36, y: 22 }] }
          ],
          customOppCount: 1
        },
        {
          // S2: Left t1 -> Top t3
          teamPos: { t0: { x: 38, y: 78 }, t1: { x: 20, y: 54 }, t2: { x: 80, y: 44 }, t3: { x: 36, y: 22 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 32, y: 50 } },
          ball: { x: 20, y: 54, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 20, y: 22 },
            { id: 'g2', kind: 'cone-amber', x: 80, y: 22 },
            { id: 'g3', kind: 'cone-amber', x: 20, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 80, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't3', pts: [{ x: 22, y: 50 }, { x: 36, y: 22 }] },
            { type: 'run', pts: [{ x: 80, y: 44 }, { x: 80, y: 36 }] }
          ],
          customOppCount: 1
        },
        {
          // S3: Top t3 -> Right t2
          teamPos: { t0: { x: 54, y: 78 }, t1: { x: 20, y: 44 }, t2: { x: 80, y: 36 }, t3: { x: 36, y: 22 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 40, y: 32 } },
          ball: { x: 36, y: 22, attachedTo: 't3' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 20, y: 22 },
            { id: 'g2', kind: 'cone-amber', x: 80, y: 22 },
            { id: 'g3', kind: 'cone-amber', x: 20, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 80, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't3', toId: 't2', pts: [{ x: 40, y: 24 }, { x: 80, y: 36 }] },
            { type: 'run', pts: [{ x: 54, y: 78 }, { x: 62, y: 78 }] }
          ],
          customOppCount: 1
        },
        {
          // S4: Right t2 -> Bottom t0 (completes full 4-side loop!)
          teamPos: { t0: { x: 62, y: 78 }, t1: { x: 20, y: 50 }, t2: { x: 80, y: 36 }, t3: { x: 50, y: 22 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 64, y: 38 } },
          ball: { x: 80, y: 36, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 20, y: 22 },
            { id: 'g2', kind: 'cone-amber', x: 80, y: 22 },
            { id: 'g3', kind: 'cone-amber', x: 20, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 80, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't2', toId: 't0', pts: [{ x: 78, y: 40 }, { x: 62, y: 78 }] }
          ],
          customOppCount: 1
        },
        {
          // S5: Completed full circuit back at t0
          teamPos: { t0: { x: 62, y: 78 }, t1: { x: 20, y: 54 }, t2: { x: 80, y: 50 }, t3: { x: 50, y: 22 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 58, y: 62 } },
          ball: { x: 62, y: 78, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 20, y: 22 },
            { id: 'g2', kind: 'cone-amber', x: 80, y: 22 },
            { id: 'g3', kind: 'cone-amber', x: 20, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 80, y: 78 }
          ],
          drawings: [],
          customOppCount: 1
        }
      ]
    })
  },
  {
    id: 'tpl-slalom-gates',
    category: 'training',
    difficulty: 'easy',
    standard: 'Coerver Mastery',
    title: 'Slalom Poles & Cone Gate Finish',
    tag: 'Half Pitch • 5 Steps',
    desc: 'Weave the first poles, exit the final pole, burst through the blue cone gate, finish low past GK, and rotate queues.',
    cue: 'Tiny touches through the poles, big positive touch through the gate, head up to shoot!',
    build: () => ({
      pitchMode: 'half',
      formationId: 'half-attack',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [{ id: 'o0', label: 'GK', isGk: true }],
      steps: [
        {
          // S1: Weave first two poles
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 35, y: 76 }, t2: { x: 75, y: 76 }, t3: { x: 35, y: 92 }, t4: { x: 75, y: 92 } },
          oppPos: { o0: { x: 50, y: 10 } },
          ball: { x: 35, y: 76, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 82, y: 79 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 35, y: 76 }, { x: 29, y: 62 }, { x: 41, y: 50 }] }
          ],
          customOppCount: 1
        },
        {
          // S2: Weave third pole and burst up to cone gate
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 41, y: 50 }, t2: { x: 75, y: 76 }, t3: { x: 35, y: 86 }, t4: { x: 75, y: 92 } },
          oppPos: { o0: { x: 49, y: 10 } },
          ball: { x: 41, y: 50, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 82, y: 79 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 41, y: 50 }, { x: 30, y: 38 }, { x: 35, y: 30 }] }
          ],
          customOppCount: 1
        },
        {
          // S3: Explode through blue gate into penalty area
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 35, y: 30 }, t2: { x: 75, y: 76 }, t3: { x: 35, y: 80 }, t4: { x: 75, y: 92 } },
          oppPos: { o0: { x: 48, y: 10 } },
          ball: { x: 35, y: 30, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 82, y: 79 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 35, y: 30 }, { x: 38, y: 20 }] }
          ],
          customOppCount: 1
        },
        {
          // S4: Shoot low across GK into far corner
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 38, y: 20 }, t2: { x: 75, y: 76 }, t3: { x: 35, y: 76 }, t4: { x: 75, y: 92 } },
          oppPos: { o0: { x: 47, y: 10 } },
          ball: { x: 38, y: 20, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 82, y: 79 }
          ],
          drawings: [
            { type: 'pass', fromId: 't1', toId: null, pts: [{ x: 40, y: 18 }, { x: 56, y: 4 }] }
          ],
          customOppCount: 1
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 40, y: 18 }, t2: { x: 75, y: 74 }, t3: { x: 35, y: 76 }, t4: { x: 75, y: 90 } },
          oppPos: { o0: { x: 44, y: 11 } },
          ball: { x: 56, y: 3, attachedTo: null },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 80, y: 76 }
          ],
          drawings: [],
          customOppCount: 1
        }
      ]
    })
  },
  {
    id: 'tpl-diamond-passing',
    category: 'training',
    difficulty: 'easy',
    standard: 'FA Activation',
    title: 'Diamond Back-Foot Passing & Follow',
    tag: 'Blank Grass • 5 Steps',
    desc: 'Complete 4-cone clockwise passing circuit: every pass & follow rotates all four stations back to the start.',
    cue: 'Check off the cone to create space — back-foot first touch, firm pass, follow!',
    build: () => ({
      pitchMode: 'blank',
      formationId: 'drill-diamond',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [],
      steps: [
        {
          // S1: Bottom t0 -> Left t1 & follow
          teamPos: { t0: { x: 50, y: 84 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 50, y: 18 }, t4: { x: 58, y: 91 } },
          oppPos: {},
          ball: { x: 50, y: 84, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'cone-lime', x: 50, y: 86 },
            { id: 'g2', kind: 'cone-lime', x: 22, y: 50 },
            { id: 'g3', kind: 'cone-lime', x: 78, y: 50 },
            { id: 'g4', kind: 'cone-lime', x: 50, y: 16 },
            { id: 'g5', kind: 'ball-extra', x: 64, y: 91 }
          ],
          drawings: [
            { type: 'pass', fromId: 't0', toId: 't1', pts: [{ x: 46, y: 81 }, { x: 18, y: 50 }] },
            { type: 'run', pts: [{ x: 50, y: 80 }, { x: 24, y: 54 }] }
          ],
          customOppCount: 0
        },
        {
          // S2: Left t1 -> Top t3 & follow
          teamPos: { t0: { x: 22, y: 54 }, t1: { x: 18, y: 46 }, t2: { x: 82, y: 50 }, t3: { x: 50, y: 18 }, t4: { x: 50, y: 84 } },
          oppPos: {},
          ball: { x: 18, y: 46, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-lime', x: 50, y: 86 },
            { id: 'g2', kind: 'cone-lime', x: 22, y: 50 },
            { id: 'g3', kind: 'cone-lime', x: 78, y: 50 },
            { id: 'g4', kind: 'cone-lime', x: 50, y: 16 },
            { id: 'g5', kind: 'ball-extra', x: 56, y: 86 }
          ],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't3', pts: [{ x: 21, y: 43 }, { x: 50, y: 18 }] },
            { type: 'run', pts: [{ x: 18, y: 46 }, { x: 46, y: 22 }] }
          ],
          customOppCount: 0
        },
        {
          // S3: Top t3 -> Right t2 & follow
          teamPos: { t0: { x: 18, y: 50 }, t1: { x: 46, y: 22 }, t2: { x: 82, y: 50 }, t3: { x: 54, y: 20 }, t4: { x: 50, y: 84 } },
          oppPos: {},
          ball: { x: 54, y: 20, attachedTo: 't3' },
          gear: [
            { id: 'g1', kind: 'cone-lime', x: 50, y: 86 },
            { id: 'g2', kind: 'cone-lime', x: 22, y: 50 },
            { id: 'g3', kind: 'cone-lime', x: 78, y: 50 },
            { id: 'g4', kind: 'cone-lime', x: 50, y: 16 },
            { id: 'g5', kind: 'ball-extra', x: 56, y: 86 }
          ],
          drawings: [
            { type: 'pass', fromId: 't3', toId: 't2', pts: [{ x: 57, y: 23 }, { x: 82, y: 50 }] },
            { type: 'run', pts: [{ x: 54, y: 20 }, { x: 78, y: 46 }] }
          ],
          customOppCount: 0
        },
        {
          // S4: Right t2 -> Bottom t4 & follow (completes full 4-side diamond!)
          teamPos: { t0: { x: 18, y: 50 }, t1: { x: 50, y: 18 }, t2: { x: 82, y: 54 }, t3: { x: 78, y: 46 }, t4: { x: 50, y: 84 } },
          oppPos: {},
          ball: { x: 82, y: 54, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-lime', x: 50, y: 86 },
            { id: 'g2', kind: 'cone-lime', x: 22, y: 50 },
            { id: 'g3', kind: 'cone-lime', x: 78, y: 50 },
            { id: 'g4', kind: 'cone-lime', x: 50, y: 16 },
            { id: 'g5', kind: 'ball-extra', x: 56, y: 86 }
          ],
          drawings: [
            { type: 'pass', fromId: 't2', toId: 't4', pts: [{ x: 79, y: 57 }, { x: 50, y: 84 }] },
            { type: 'run', pts: [{ x: 82, y: 54 }, { x: 56, y: 82 }] }
          ],
          customOppCount: 0
        },
        {
          // S5: Completed full 360-degree diamond rotation
          teamPos: { t0: { x: 18, y: 50 }, t1: { x: 50, y: 18 }, t2: { x: 56, y: 82 }, t3: { x: 82, y: 50 }, t4: { x: 50, y: 84 } },
          oppPos: {},
          ball: { x: 50, y: 84, attachedTo: 't4' },
          gear: [
            { id: 'g1', kind: 'cone-lime', x: 50, y: 86 },
            { id: 'g2', kind: 'cone-lime', x: 22, y: 50 },
            { id: 'g3', kind: 'cone-lime', x: 78, y: 50 },
            { id: 'g4', kind: 'cone-lime', x: 50, y: 16 },
            { id: 'g5', kind: 'ball-extra', x: 62, y: 88 }
          ],
          drawings: [],
          customOppCount: 0
        }
      ]
    })
  },

  // =========================================================================
  // TAB 2: TRAINING & GEAR — MEDIUM (3 Drills: Full Un-Skipped Sequences)
  // =========================================================================
  {
    id: 'tpl-2v1-overload',
    category: 'training',
    difficulty: 'medium',
    standard: 'Ajax 2v1 DNA',
    title: '2v1 Finishing Overload',
    tag: 'Half Pitch • 4 Steps',
    desc: 'Ball carrier drives straight at the defender to freeze them, slips the spare attacker in stride, and finishes past GK.',
    cue: 'Drive AT the defender to commit them — release the pass at the last moment!',
    build: () => ({
      pitchMode: 'half',
      formationId: 'half-attack',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [
        { id: 'o0', label: 'GK', isGk: true },
        { id: 'o1', label: 'D', isGk: false }
      ],
      steps: [
        {
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 34, y: 74 }, t2: { x: 68, y: 74 }, t3: { x: 14, y: 88 }, t4: { x: 86, y: 88 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 50, y: 42 } },
          ball: { x: 34, y: 74, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-sky', x: 34, y: 81 },
            { id: 'g2', kind: 'cone-sky', x: 68, y: 81 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 34, y: 70 }, { x: 43, y: 48 }] },
            { type: 'run', pts: [{ x: 68, y: 70 }, { x: 66, y: 34 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 43, y: 48 }, t2: { x: 66, y: 34 }, t3: { x: 14, y: 88 }, t4: { x: 86, y: 88 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 45, y: 40 } },
          ball: { x: 43, y: 48, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-sky', x: 34, y: 81 },
            { id: 'g2', kind: 'cone-sky', x: 68, y: 81 }
          ],
          drawings: [
            { type: 'zone', x1: 56, y1: 16, x2: 74, y2: 30 },
            { type: 'run', pts: [{ x: 66, y: 34 }, { x: 63, y: 22 }] },
            { type: 'pass', fromId: 't1', toId: 't2', pts: [{ x: 47, y: 45 }, { x: 63, y: 22 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 42, y: 42 }, t2: { x: 63, y: 22 }, t3: { x: 14, y: 88 }, t4: { x: 86, y: 88 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 48, y: 34 } },
          ball: { x: 63, y: 22, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-sky', x: 34, y: 81 },
            { id: 'g2', kind: 'cone-sky', x: 68, y: 81 }
          ],
          drawings: [
            { type: 'pass', fromId: 't2', toId: null, pts: [{ x: 60, y: 19 }, { x: 45, y: 4 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 44, y: 38 }, t2: { x: 61, y: 19 }, t3: { x: 14, y: 88 }, t4: { x: 86, y: 88 } },
          oppPos: { o0: { x: 56, y: 11 }, o1: { x: 50, y: 30 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [
            { id: 'g1', kind: 'cone-sky', x: 34, y: 81 },
            { id: 'g2', kind: 'cone-sky', x: 68, y: 81 }
          ],
          drawings: [],
          customOppCount: 2
        }
      ]
    })
  },
  {
    id: 'tpl-4v2-split-box',
    category: 'training',
    difficulty: 'medium',
    standard: 'UEFA Overload',
    title: '4v2 Split-the-Defenders Rondo',
    tag: 'Blank Grass • 5 Steps',
    desc: 'Pass wide, bounce back to draw both defenders narrow, thread the split pass right between them, and switch out.',
    cue: 'Move the ball quickly side-to-side — 3 bonus points for splitting the defenders!',
    build: () => ({
      pitchMode: 'blank',
      formationId: 'drill-diamond',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [
        { id: 'o0', label: 'D1', isGk: false },
        { id: 'o1', label: 'D2', isGk: false }
      ],
      steps: [
        {
          // S1: Bottom t0 -> Left t1
          teamPos: { t0: { x: 50, y: 80 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 50, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 42, y: 60 }, o1: { x: 56, y: 46 } },
          ball: { x: 50, y: 80, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [
            { type: 'pass', fromId: 't0', toId: 't1', pts: [{ x: 46, y: 77 }, { x: 18, y: 50 }] }
          ],
          customOppCount: 2
        },
        {
          // S2: Left t1 bounces back to t0 to pull o0 & o1 across
          teamPos: { t0: { x: 38, y: 80 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 52, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 30, y: 58 }, o1: { x: 44, y: 48 } },
          ball: { x: 18, y: 50, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't0', pts: [{ x: 20, y: 54 }, { x: 38, y: 80 }] }
          ],
          customOppCount: 2
        },
        {
          // S3: t0 threads the split pass right between o0 and o1 to Top t3!
          teamPos: { t0: { x: 38, y: 80 }, t1: { x: 18, y: 46 }, t2: { x: 82, y: 50 }, t3: { x: 52, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 34, y: 58 }, o1: { x: 52, y: 54 } },
          ball: { x: 38, y: 80, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [
            { type: 'zone', x1: 36, y1: 48, x2: 52, y2: 60 },
            { type: 'pass', fromId: 't0', toId: 't3', pts: [{ x: 40, y: 76 }, { x: 52, y: 20 }] }
          ],
          customOppCount: 2
        },
        {
          // S4: Top t3 plays quick 1-touch pass out to Right t2
          teamPos: { t0: { x: 48, y: 80 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 52, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 42, y: 42 }, o1: { x: 56, y: 38 } },
          ball: { x: 52, y: 20, attachedTo: 't3' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [
            { type: 'pass', fromId: 't3', toId: 't2', pts: [{ x: 56, y: 23 }, { x: 82, y: 50 }] }
          ],
          customOppCount: 2
        },
        {
          // S5: Right t2 controls cleanly
          teamPos: { t0: { x: 50, y: 80 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 50, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 54, y: 44 }, o1: { x: 66, y: 46 } },
          ball: { x: 82, y: 50, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [],
          customOppCount: 2
        }
      ]
    })
  },
  {
    id: 'tpl-1v1-chase-gate',
    category: 'training',
    difficulty: 'medium',
    standard: 'Ajax 1v1 Duel',
    title: '1v1 Recovery Chase & Twin Gates',
    tag: 'Half Pitch • 5 Steps',
    desc: 'Sell the fake toward the amber gate with a defender chasing, chop across, burst through the lime gate, and score.',
    cue: 'Scan over your shoulder — sell the fake to one gate and explode through the open gate!',
    build: () => ({
      pitchMode: 'half',
      formationId: 'half-attack',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [
        { id: 'o0', label: 'GK', isGk: true },
        { id: 'o1', label: 'D', isGk: false }
      ],
      steps: [
        {
          // S1: t1 drives toward left amber gate with o1 chasing hard
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 50, y: 70 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 50, y: 86 } },
          ball: { x: 50, y: 70, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 24, y: 38 },
            { id: 'g2', kind: 'cone-amber', x: 38, y: 38 },
            { id: 'g3', kind: 'cone-lime', x: 62, y: 38 },
            { id: 'g4', kind: 'cone-lime', x: 76, y: 38 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 50, y: 66 }, { x: 36, y: 48 }] },
            { type: 'run', pts: [{ x: 50, y: 82 }, { x: 32, y: 46 }] }
          ],
          customOppCount: 2
        },
        {
          // S2: t1 Cruyff-chops across toward the open lime gate
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 36, y: 48 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 31, y: 45 } },
          ball: { x: 36, y: 48, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 24, y: 38 },
            { id: 'g2', kind: 'cone-amber', x: 38, y: 38 },
            { id: 'g3', kind: 'cone-lime', x: 62, y: 38 },
            { id: 'g4', kind: 'cone-lime', x: 76, y: 38 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 36, y: 48 }, { x: 68, y: 44 }] }
          ],
          customOppCount: 2
        },
        {
          // S3: t1 accelerates cleanly through the lime gate into the box
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 68, y: 44 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 46, y: 42 } },
          ball: { x: 68, y: 44, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 24, y: 38 },
            { id: 'g2', kind: 'cone-amber', x: 38, y: 38 },
            { id: 'g3', kind: 'cone-lime', x: 62, y: 38 },
            { id: 'g4', kind: 'cone-lime', x: 76, y: 38 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 68, y: 44 }, { x: 66, y: 22 }] }
          ],
          customOppCount: 2
        },
        {
          // S4: t1 shoots low across GK
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 66, y: 22 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 54, y: 34 } },
          ball: { x: 66, y: 22, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 24, y: 38 },
            { id: 'g2', kind: 'cone-amber', x: 38, y: 38 },
            { id: 'g3', kind: 'cone-lime', x: 62, y: 38 },
            { id: 'g4', kind: 'cone-lime', x: 76, y: 38 }
          ],
          drawings: [
            { type: 'pass', fromId: 't1', toId: null, pts: [{ x: 63, y: 19 }, { x: 45, y: 4 }] }
          ],
          customOppCount: 2
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 64, y: 19 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
          oppPos: { o0: { x: 56, y: 11 }, o1: { x: 56, y: 28 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 24, y: 38 },
            { id: 'g2', kind: 'cone-amber', x: 38, y: 38 },
            { id: 'g3', kind: 'cone-lime', x: 62, y: 38 },
            { id: 'g4', kind: 'cone-lime', x: 76, y: 38 }
          ],
          drawings: [],
          customOppCount: 2
        }
      ]
    })
  },

  // =========================================================================
  // TAB 2: TRAINING & GEAR — ADVANCED (3 Drills: Full Un-Skipped Sequences)
  // =========================================================================
  {
    id: 'tpl-funino-4goals',
    category: 'training',
    difficulty: 'advanced',
    standard: 'DFB Funino',
    title: 'Funino 3v3 Four-Mini-Goal Switch',
    tag: '4 Mini-Goals • 5 Steps',
    desc: 'Drive at the left mini-goal to draw defenders, recycle to the pivot, switch to the right attacker, and score in the open goal.',
    cue: 'Attract defenders to one side — scan early and switch to the unguarded mini-goal!',
    build: () => ({
      pitchMode: 'blank',
      formationId: 'drill-diamond',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [
        { id: 'o0', label: 'D1', isGk: false },
        { id: 'o1', label: 'D2', isGk: false },
        { id: 'o2', label: 'D3', isGk: false }
      ],
      steps: [
        {
          // S1: t0 drives toward left shooting zone to suck o0 & o1 across
          teamPos: { t0: { x: 24, y: 50 }, t1: { x: 48, y: 62 }, t2: { x: 78, y: 50 }, t3: { x: 10, y: 94 }, t4: { x: 90, y: 94 } },
          oppPos: { o0: { x: 26, y: 28 }, o1: { x: 46, y: 34 }, o2: { x: 66, y: 36 } },
          ball: { x: 24, y: 50, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 24, y: 11 },
            { id: 'g2', kind: 'mini-goal', x: 76, y: 11 },
            { id: 'g3', kind: 'mini-goal', x: 24, y: 87 },
            { id: 'g4', kind: 'mini-goal', x: 76, y: 87 },
            { id: 'g5', kind: 'cone-amber', x: 10, y: 28 },
            { id: 'g6', kind: 'cone-amber', x: 90, y: 28 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 24, y: 50 }, { x: 24, y: 34 }] }
          ],
          customOppCount: 3
        },
        {
          // S2: Blocked on left, t0 recycles back to pivot t1
          teamPos: { t0: { x: 24, y: 34 }, t1: { x: 48, y: 56 }, t2: { x: 78, y: 42 }, t3: { x: 10, y: 94 }, t4: { x: 90, y: 94 } },
          oppPos: { o0: { x: 24, y: 21 }, o1: { x: 36, y: 30 }, o2: { x: 56, y: 34 } },
          ball: { x: 24, y: 34, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 24, y: 11 },
            { id: 'g2', kind: 'mini-goal', x: 76, y: 11 },
            { id: 'g3', kind: 'mini-goal', x: 24, y: 87 },
            { id: 'g4', kind: 'mini-goal', x: 76, y: 87 },
            { id: 'g5', kind: 'cone-amber', x: 10, y: 28 },
            { id: 'g6', kind: 'cone-amber', x: 90, y: 28 }
          ],
          drawings: [
            { type: 'zone', x1: 64, y1: 14, x2: 88, y2: 30 },
            { type: 'pass', fromId: 't0', toId: 't1', pts: [{ x: 27, y: 37 }, { x: 48, y: 56 }] }
          ],
          customOppCount: 3
        },
        {
          // S3: Pivot t1 switches fast into right shooting zone for t2
          teamPos: { t0: { x: 28, y: 34 }, t1: { x: 48, y: 56 }, t2: { x: 76, y: 32 }, t3: { x: 10, y: 94 }, t4: { x: 90, y: 94 } },
          oppPos: { o0: { x: 26, y: 22 }, o1: { x: 42, y: 34 }, o2: { x: 60, y: 32 } },
          ball: { x: 48, y: 56, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 24, y: 11 },
            { id: 'g2', kind: 'mini-goal', x: 76, y: 11 },
            { id: 'g3', kind: 'mini-goal', x: 24, y: 87 },
            { id: 'g4', kind: 'mini-goal', x: 76, y: 87 },
            { id: 'g5', kind: 'cone-amber', x: 10, y: 28 },
            { id: 'g6', kind: 'cone-amber', x: 90, y: 28 }
          ],
          drawings: [
            { type: 'run', pts: [{ x: 76, y: 32 }, { x: 76, y: 22 }] },
            { type: 'pass', fromId: 't1', toId: 't2', pts: [{ x: 52, y: 53 }, { x: 76, y: 22 }] }
          ],
          customOppCount: 3
        },
        {
          // S4: t2 finishes inside the Funino shooting zone into the open right mini-goal
          teamPos: { t0: { x: 30, y: 32 }, t1: { x: 54, y: 48 }, t2: { x: 76, y: 22 }, t3: { x: 10, y: 94 }, t4: { x: 90, y: 94 } },
          oppPos: { o0: { x: 30, y: 22 }, o1: { x: 50, y: 30 }, o2: { x: 66, y: 24 } },
          ball: { x: 76, y: 22, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 24, y: 11 },
            { id: 'g2', kind: 'mini-goal', x: 76, y: 11 },
            { id: 'g3', kind: 'mini-goal', x: 24, y: 87 },
            { id: 'g4', kind: 'mini-goal', x: 76, y: 87 },
            { id: 'g5', kind: 'cone-amber', x: 10, y: 28 },
            { id: 'g6', kind: 'cone-amber', x: 90, y: 28 }
          ],
          drawings: [
            { type: 'pass', fromId: 't2', toId: null, pts: [{ x: 76, y: 19 }, { x: 76, y: 11 }] }
          ],
          customOppCount: 3
        },
        {
          // S5: Goal inside mini-goal!
          teamPos: { t0: { x: 32, y: 30 }, t1: { x: 56, y: 44 }, t2: { x: 76, y: 20 }, t3: { x: 10, y: 94 }, t4: { x: 90, y: 94 } },
          oppPos: { o0: { x: 34, y: 20 }, o1: { x: 54, y: 28 }, o2: { x: 70, y: 20 } },
          ball: { x: 76, y: 11, attachedTo: null },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 24, y: 11 },
            { id: 'g2', kind: 'mini-goal', x: 76, y: 11 },
            { id: 'g3', kind: 'mini-goal', x: 24, y: 87 },
            { id: 'g4', kind: 'mini-goal', x: 76, y: 87 },
            { id: 'g5', kind: 'cone-amber', x: 10, y: 28 },
            { id: 'g6', kind: 'cone-amber', x: 90, y: 28 }
          ],
          drawings: [],
          customOppCount: 3
        }
      ]
    })
  },
  {
    id: 'tpl-3v2-transition-wave',
    category: 'training',
    difficulty: 'advanced',
    standard: 'UEFA Transition',
    title: '3v2 Wave + 5-Second Counter-Press',
    tag: 'Half Pitch • 5 Steps',
    desc: 'Attack breaks down, defenders counter toward the mini-goals, attackers swarm in 5 seconds to win it back, slip, and score!',
    cue: '5-second reaction rule: the instant possession turns over, sprint to hunt in a pack!',
    build: () => ({
      pitchMode: 'half',
      formationId: 'half-attack',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [
        { id: 'o0', label: 'GK', isGk: true },
        { id: 'o1', label: 'D1', isGk: false },
        { id: 'o2', label: 'D2', isGk: false }
      ],
      steps: [
        {
          // S1: t1 drives forward and loses possession to stepping defender o1
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 48, y: 60 }, t2: { x: 22, y: 50 }, t3: { x: 76, y: 50 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 38, y: 38 }, o2: { x: 62, y: 40 } },
          ball: { x: 48, y: 60, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 48, y: 60 }, { x: 40, y: 42 }] },
            { type: 'run', pts: [{ x: 22, y: 50 }, { x: 24, y: 36 }] },
            { type: 'run', pts: [{ x: 76, y: 50 }, { x: 72, y: 38 }] }
          ],
          customOppCount: 3
        },
        {
          // S2: o1 wins tackle & drives toward mini-goal; t1 & t2 counter-press in a 5s pack!
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 42, y: 44 }, t2: { x: 24, y: 36 }, t3: { x: 72, y: 38 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 38, y: 40 }, o2: { x: 60, y: 44 } },
          ball: { x: 38, y: 40, attachedTo: 'o1' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 38, y: 40 }, { x: 28, y: 60 }] },
            { type: 'run', pts: [{ x: 42, y: 44 }, { x: 30, y: 58 }] },
            { type: 'run', pts: [{ x: 24, y: 36 }, { x: 22, y: 54 }] },
            { type: 'zone', x1: 18, y1: 48, x2: 38, y2: 66 }
          ],
          customOppCount: 3
        },
        {
          // S3: t1 wins counter-press tackle and immediately releases spare t3
          teamPos: { t0: { x: 46, y: 88 }, t1: { x: 30, y: 58 }, t2: { x: 22, y: 54 }, t3: { x: 64, y: 34 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 28, y: 62 }, o2: { x: 54, y: 48 } },
          ball: { x: 30, y: 58, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [
            { type: 'run', pts: [{ x: 64, y: 34 }, { x: 60, y: 21 }] },
            { type: 'pass', fromId: 't1', toId: 't3', pts: [{ x: 34, y: 55 }, { x: 60, y: 21 }] }
          ],
          customOppCount: 3
        },
        {
          // S4: t3 receives in on goal and shoots across GK
          teamPos: { t0: { x: 48, y: 90 }, t1: { x: 36, y: 48 }, t2: { x: 26, y: 44 }, t3: { x: 60, y: 21 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 56 }, o2: { x: 52, y: 40 } },
          ball: { x: 60, y: 21, attachedTo: 't3' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [
            { type: 'pass', fromId: 't3', toId: null, pts: [{ x: 58, y: 18 }, { x: 45, y: 4 }] }
          ],
          customOppCount: 3
        },
        {
          // S5: Goal!
          teamPos: { t0: { x: 48, y: 90 }, t1: { x: 38, y: 44 }, t2: { x: 28, y: 40 }, t3: { x: 58, y: 19 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 34, y: 52 }, o2: { x: 52, y: 36 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [],
          customOppCount: 3
        }
      ]
    })
  },
  {
    id: 'tpl-third-man-rondo-breakout',
    category: 'training',
    difficulty: 'advanced',
    standard: 'La Masia Breakout',
    title: 'Rondo Box → Third-Man Breakout',
    tag: 'Half Pitch • 6 Steps',
    desc: 'Circulate in the cone box, play UP to the top player, bounce BACK, slip THROUGH to the breakout runner, and score.',
    cue: 'Patience in the rondo — bounce off the top player to break out and finish!',
    build: () => ({
      pitchMode: 'half',
      formationId: 'half-attack',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'off',
      customOppRoster: [
        { id: 'o0', label: 'GK', isGk: true },
        { id: 'o1', label: 'D1', isGk: false },
        { id: 'o2', label: 'D2', isGk: false }
      ],
      steps: [
        {
          // S1: Rondo pass t1 -> t2
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 50, y: 78 }, t2: { x: 30, y: 62 }, t3: { x: 70, y: 62 }, t4: { x: 50, y: 46 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 44, y: 66 }, o2: { x: 56, y: 58 } },
          ball: { x: 50, y: 78, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 30, y: 46 },
            { id: 'g2', kind: 'cone-amber', x: 70, y: 46 },
            { id: 'g3', kind: 'cone-amber', x: 30, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 70, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't1', toId: 't2', pts: [{ x: 47, y: 75 }, { x: 30, y: 62 }] }
          ],
          customOppCount: 3
        },
        {
          // S2: Play UP from t2 -> t4 at top of square
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 48, y: 78 }, t2: { x: 30, y: 62 }, t3: { x: 70, y: 58 }, t4: { x: 50, y: 46 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 38, y: 62 }, o2: { x: 52, y: 54 } },
          ball: { x: 30, y: 62, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 30, y: 46 },
            { id: 'g2', kind: 'cone-amber', x: 70, y: 46 },
            { id: 'g3', kind: 'cone-amber', x: 30, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 70, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't2', toId: 't4', pts: [{ x: 33, y: 59 }, { x: 50, y: 46 }] }
          ],
          customOppCount: 3
        },
        {
          // S3: Bounce BACK from t4 -> t2 while t3 triggers breakout run
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 48, y: 76 }, t2: { x: 34, y: 58 }, t3: { x: 70, y: 54 }, t4: { x: 50, y: 46 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 42, y: 58 }, o2: { x: 50, y: 50 } },
          ball: { x: 50, y: 46, attachedTo: 't4' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 30, y: 46 },
            { id: 'g2', kind: 'cone-amber', x: 70, y: 46 },
            { id: 'g3', kind: 'cone-amber', x: 30, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 70, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't4', toId: 't2', pts: [{ x: 47, y: 48 }, { x: 36, y: 56 }] },
            { type: 'run', pts: [{ x: 70, y: 54 }, { x: 66, y: 36 }] }
          ],
          customOppCount: 3
        },
        {
          // S4: Slip THROUGH pass from t2 -> breakout runner t3
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 48, y: 75 }, t2: { x: 36, y: 56 }, t3: { x: 66, y: 36 }, t4: { x: 48, y: 38 } },
          oppPos: { o0: { x: 51, y: 10 }, o1: { x: 40, y: 56 }, o2: { x: 50, y: 44 } },
          ball: { x: 36, y: 56, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 30, y: 46 },
            { id: 'g2', kind: 'cone-amber', x: 70, y: 46 },
            { id: 'g3', kind: 'cone-amber', x: 30, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 70, y: 78 }
          ],
          drawings: [
            { type: 'zone', x1: 52, y1: 16, x2: 72, y2: 28 },
            { type: 'run', pts: [{ x: 66, y: 36 }, { x: 60, y: 22 }] },
            { type: 'pass', fromId: 't2', toId: 't3', pts: [{ x: 40, y: 53 }, { x: 60, y: 22 }] }
          ],
          customOppCount: 3
        },
        {
          // S5: t3 shoots past GK
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 48, y: 74 }, t2: { x: 38, y: 54 }, t3: { x: 60, y: 22 }, t4: { x: 46, y: 34 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 40, y: 52 }, o2: { x: 52, y: 38 } },
          ball: { x: 60, y: 22, attachedTo: 't3' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 30, y: 46 },
            { id: 'g2', kind: 'cone-amber', x: 70, y: 46 },
            { id: 'g3', kind: 'cone-amber', x: 30, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 70, y: 78 }
          ],
          drawings: [
            { type: 'pass', fromId: 't3', toId: null, pts: [{ x: 58, y: 19 }, { x: 45, y: 4 }] }
          ],
          customOppCount: 3
        },
        {
          // S6: Goal!
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 48, y: 72 }, t2: { x: 40, y: 50 }, t3: { x: 58, y: 19 }, t4: { x: 46, y: 30 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 42, y: 48 }, o2: { x: 52, y: 34 } },
          ball: { x: 45, y: 3, attachedTo: null },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 30, y: 46 },
            { id: 'g2', kind: 'cone-amber', x: 70, y: 46 },
            { id: 'g3', kind: 'cone-amber', x: 30, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 70, y: 78 }
          ],
          drawings: [],
          customOppCount: 3
        }
      ]
    })
  }
];
