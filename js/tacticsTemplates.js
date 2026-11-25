// What's The Score Ref - 29 Academy-Standard 4-Step Animated Match Plays & Training Drills (v138)
// Grounded in England Football (FA Foundation Phase), UEFA Grassroots, Ajax TIPS, FC Barcelona La Masia & DFB Funino.
// Every play & drill uses 4 complete causal steps (Setup -> Build -> Trigger/Assist -> Completed Finish/Target)
// so animations never cut off early and every final pass/shot visibly completes its movement.

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
    tag: '5v5 • 4 Steps',
    desc: 'Defenders split wide to the box corners while opponents wait behind halfway, creating a safe 3v1 build-up and finish.',
    cue: 'Split wide early — open your body, drive past the retreat line, and square across goal!',
    build: () => ({
      pitchMode: '5v5',
      formationId: 'gk-retreat',
      retreatLine: true,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 18, y: 78 }, t2: { x: 82, y: 78 }, t3: { x: 50, y: 63 }, t4: { x: 50, y: 46 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 30, y: 25 }, o2: { x: 70, y: 25 }, o3: { x: 35, y: 45 }, o4: { x: 65, y: 45 } },
          ball: { x: 50, y: 89, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 8, y1: 54, x2: 32, y2: 84 },
            { type: 'pass', pts: [{ x: 46, y: 87 }, { x: 22, y: 79 }] },
            { type: 'run', pts: [{ x: 50, y: 63 }, { x: 42, y: 52 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 18, y: 58 }, t2: { x: 78, y: 62 }, t3: { x: 42, y: 52 }, t4: { x: 34, y: 28 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 28, y: 24 }, o2: { x: 66, y: 27 }, o3: { x: 24, y: 48 }, o4: { x: 56, y: 46 } },
          ball: { x: 18, y: 58, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 20, y: 54 }, { x: 32, y: 31 }] },
            { type: 'run', pts: [{ x: 78, y: 58 }, { x: 66, y: 24 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 24, y: 48 }, t2: { x: 62, y: 20 }, t3: { x: 48, y: 40 }, t4: { x: 34, y: 22 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 34, y: 22 }, o2: { x: 58, y: 26 }, o3: { x: 28, y: 42 }, o4: { x: 52, y: 40 } },
          ball: { x: 62, y: 20, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 60, y: 17 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 26, y: 46 }, t2: { x: 60, y: 18 }, t3: { x: 48, y: 36 }, t4: { x: 38, y: 20 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 36, y: 20 }, o2: { x: 56, y: 22 }, o3: { x: 30, y: 38 }, o4: { x: 52, y: 38 } },
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
    tag: '5v5 • 4 Steps',
    desc: 'Forward checks toward the ball to pin their marker, spins down the touchline, and squares for a 1-touch finish.',
    cue: 'Check in to fake the defender, spin into space behind, and flash it across goal!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 54, y: 64 }, t2: { x: 26, y: 50 }, t3: { x: 93, y: 50 }, t4: { x: 74, y: 38 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 36, y: 26 }, o2: { x: 68, y: 24 }, o3: { x: 42, y: 46 }, o4: { x: 74, y: 43 } },
          ball: { x: 93, y: 50, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 74, y: 38 }, { x: 80, y: 44 }, { x: 84, y: 20 }] },
            { type: 'zone', x1: 74, y1: 12, x2: 94, y2: 30 },
            { type: 'pass', pts: [{ x: 91, y: 46 }, { x: 85, y: 23 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 52, y: 58 }, t2: { x: 36, y: 30 }, t3: { x: 86, y: 44 }, t4: { x: 84, y: 20 } },
          oppPos: { o0: { x: 52, y: 11 }, o1: { x: 42, y: 24 }, o2: { x: 72, y: 22 }, o3: { x: 46, y: 38 }, o4: { x: 78, y: 34 } },
          ball: { x: 84, y: 20, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 36, y: 30 }, { x: 44, y: 19 }] },
            { type: 'pass', pts: [{ x: 80, y: 20 }, { x: 47, y: 19 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 54 }, t2: { x: 44, y: 19 }, t3: { x: 80, y: 38 }, t4: { x: 80, y: 18 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 49, y: 20 }, o2: { x: 68, y: 20 }, o3: { x: 48, y: 34 }, o4: { x: 74, y: 28 } },
          ball: { x: 44, y: 19, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 44, y: 16 }, { x: 45, y: 4 }] }
          ]
        },
        {
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
    tag: '5v5 • 4 Steps',
    desc: 'Skip hopeful high crosses: sprint short to create a fast 2v1 angle on the edge of the penalty box and finish low.',
    cue: 'Show short at 45 degrees — attack the 2v1 before a second defender arrives!',
    build: () => ({
      pitchMode: 'half',
      formationId: 'half-corner',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 60 }, t2: { x: 92, y: 10 }, t3: { x: 74, y: 24 }, t4: { x: 44, y: 22 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 46, y: 16 }, o2: { x: 66, y: 20 }, o3: { x: 38, y: 28 }, o4: { x: 56, y: 34 } },
          ball: { x: 92, y: 10, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 74, y: 24 }, { x: 78, y: 16 }] },
            { type: 'pass', pts: [{ x: 89, y: 11 }, { x: 80, y: 15 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 56 }, t2: { x: 88, y: 22 }, t3: { x: 76, y: 17 }, t4: { x: 42, y: 18 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 46, y: 16 }, o2: { x: 72, y: 18 }, o3: { x: 40, y: 26 }, o4: { x: 58, y: 30 } },
          ball: { x: 76, y: 17, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 76, y: 17 }, { x: 64, y: 20 }] },
            { type: 'pass', pts: [{ x: 64, y: 20 }, { x: 43, y: 16 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 54 }, t2: { x: 82, y: 26 }, t3: { x: 64, y: 20 }, t4: { x: 41, y: 16 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 47, y: 15 }, o2: { x: 68, y: 19 }, o3: { x: 42, y: 24 }, o4: { x: 56, y: 28 } },
          ball: { x: 41, y: 16, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 42, y: 13 }, { x: 45, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 50, y: 52 }, t2: { x: 80, y: 26 }, t3: { x: 62, y: 19 }, t4: { x: 42, y: 14 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 47, y: 15 }, o2: { x: 66, y: 18 }, o3: { x: 42, y: 23 }, o4: { x: 55, y: 27 } },
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
    tag: '5v5 • 4 Steps',
    desc: 'Stop swarming the ball: bounce back to the central pivot to unlock the empty far-side lane and finish.',
    cue: 'Crowded on one wing? Bounce back to the pivot and switch lanes fast!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 68 }, t2: { x: 18, y: 52 }, t3: { x: 82, y: 52 }, t4: { x: 50, y: 34 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 25, y: 38 }, o2: { x: 42, y: 46 }, o3: { x: 22, y: 48 }, o4: { x: 56, y: 30 } },
          ball: { x: 18, y: 52, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 68, y1: 22, x2: 92, y2: 56 },
            { type: 'pass', pts: [{ x: 21, y: 55 }, { x: 46, y: 66 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 66 }, t2: { x: 22, y: 48 }, t3: { x: 80, y: 38 }, t4: { x: 50, y: 28 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 36 }, o2: { x: 46, y: 48 }, o3: { x: 28, y: 48 }, o4: { x: 58, y: 28 } },
          ball: { x: 50, y: 66, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 54, y: 63 }, { x: 78, y: 40 }] },
            { type: 'run', pts: [{ x: 50, y: 28 }, { x: 54, y: 19 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 54, y: 58 }, t2: { x: 26, y: 40 }, t3: { x: 78, y: 26 }, t4: { x: 54, y: 19 } },
          oppPos: { o0: { x: 49, y: 10 }, o1: { x: 40, y: 28 }, o2: { x: 56, y: 36 }, o3: { x: 36, y: 42 }, o4: { x: 68, y: 24 } },
          ball: { x: 54, y: 19, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 54, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 54, y: 56 }, t2: { x: 28, y: 38 }, t3: { x: 76, y: 24 }, t4: { x: 54, y: 17 } },
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
    tag: '5v5 • 4 Steps',
    desc: 'Pass into the striker’s feet to pin the defender, explode past your marker for the 1-touch return, and score.',
    cue: 'Pass and sprint immediately — never stand and admire your pass!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 74 }, t2: { x: 24, y: 58 }, t3: { x: 78, y: 56 }, t4: { x: 50, y: 42 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 34, y: 28 }, o2: { x: 66, y: 28 }, o3: { x: 30, y: 48 }, o4: { x: 52, y: 36 } },
          ball: { x: 24, y: 58, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 28, y: 56 }, { x: 47, y: 44 }] },
            { type: 'run', pts: [{ x: 24, y: 54 }, { x: 22, y: 36 }, { x: 34, y: 22 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 48, y: 68 }, t2: { x: 30, y: 32 }, t3: { x: 76, y: 46 }, t4: { x: 50, y: 43 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 38, y: 28 }, o2: { x: 66, y: 28 }, o3: { x: 32, y: 42 }, o4: { x: 50, y: 37 } },
          ball: { x: 50, y: 43, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 24, y1: 16, x2: 44, y2: 28 },
            { type: 'pass', pts: [{ x: 47, y: 40 }, { x: 36, y: 21 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 48, y: 64 }, t2: { x: 36, y: 20 }, t3: { x: 68, y: 26 }, t4: { x: 50, y: 38 } },
          oppPos: { o0: { x: 47, y: 10 }, o1: { x: 40, y: 25 }, o2: { x: 62, y: 26 }, o3: { x: 34, y: 36 }, o4: { x: 50, y: 34 } },
          ball: { x: 36, y: 20, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 39, y: 17 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 48, y: 62 }, t2: { x: 38, y: 18 }, t3: { x: 66, y: 24 }, t4: { x: 50, y: 36 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 40, y: 23 }, o2: { x: 60, y: 24 }, o3: { x: 36, y: 34 }, o4: { x: 50, y: 32 } },
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
    tag: '5v5 • 4 Steps',
    desc: 'Striker curves their run to block the pass back to GK, trapping the opponent on the touchline to win & score.',
    cue: 'Curve your run to cut the switch — lock them onto one sideline and strike!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: true,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 68 }, t2: { x: 26, y: 52 }, t3: { x: 72, y: 52 }, t4: { x: 50, y: 45 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 24, y: 24 }, o2: { x: 76, y: 24 }, o3: { x: 22, y: 42 }, o4: { x: 56, y: 46 } },
          ball: { x: 24, y: 24, attachedTo: 'o1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 50, y: 45 }, { x: 42, y: 28 }, { x: 29, y: 24 }] },
            { type: 'run', pts: [{ x: 26, y: 52 }, { x: 22, y: 40 }] },
            { type: 'zone', x1: 10, y1: 18, x2: 36, y2: 46 }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 87 }, t1: { x: 44, y: 60 }, t2: { x: 22, y: 39 }, t3: { x: 64, y: 46 }, t4: { x: 32, y: 25 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 20, y: 23 }, o2: { x: 72, y: 26 }, o3: { x: 24, y: 43 }, o4: { x: 54, y: 46 } },
          ball: { x: 22, y: 39, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 25, y: 36 }, { x: 45, y: 21 }] },
            { type: 'run', pts: [{ x: 32, y: 25 }, { x: 46, y: 20 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 44, y: 56 }, t2: { x: 26, y: 34 }, t3: { x: 62, y: 30 }, t4: { x: 46, y: 20 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 24, y: 24 }, o2: { x: 64, y: 22 }, o3: { x: 28, y: 40 }, o4: { x: 52, y: 40 } },
          ball: { x: 46, y: 20, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 46, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
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
    tag: '5v5 • 4 Steps',
    desc: 'Positions are roles, not statues: left winger pushes high, striker drops into the pocket, and right winger breaks in.',
    cue: 'When a teammate vacates a space, another player rotates to fill the triangle!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '1-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 50, y: 73 }, t2: { x: 22, y: 56 }, t3: { x: 78, y: 56 }, t4: { x: 50, y: 36 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 30, y: 48 }, o4: { x: 68, y: 48 } },
          ball: { x: 50, y: 73, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 22, y: 52 }, { x: 24, y: 28 }] },
            { type: 'run', pts: [{ x: 50, y: 38 }, { x: 50, y: 53 }] },
            { type: 'pass', pts: [{ x: 50, y: 69 }, { x: 50, y: 55 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 34, y: 68 }, t2: { x: 24, y: 28 }, t3: { x: 76, y: 42 }, t4: { x: 50, y: 53 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 28, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 34, y: 42 }, o4: { x: 66, y: 46 } },
          ball: { x: 50, y: 53, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 76, y: 40 }, { x: 59, y: 20 }] },
            { type: 'pass', pts: [{ x: 52, y: 50 }, { x: 58, y: 22 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 38, y: 62 }, t2: { x: 30, y: 22 }, t3: { x: 59, y: 20 }, t4: { x: 50, y: 46 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 22 }, o2: { x: 66, y: 24 }, o3: { x: 38, y: 38 }, o4: { x: 62, y: 40 } },
          ball: { x: 59, y: 20, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 57, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 40, y: 60 }, t2: { x: 32, y: 20 }, t3: { x: 57, y: 18 }, t4: { x: 50, y: 44 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 34, y: 20 }, o2: { x: 64, y: 22 }, o3: { x: 40, y: 36 }, o4: { x: 60, y: 38 } },
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
    title: '5v5 GK Quick Roll & 3-Pass Counter',
    tag: '5v5 • 4 Steps',
    desc: 'Goalkeeper claims a shot, rolls instantly into the wide channel, and launches a diagonal 2-pass break before opponents recover.',
    cue: 'GK scan up first — roll wide in 2 seconds and counter at top speed!',
    build: () => ({
      pitchMode: '5v5',
      formationId: '2-2',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 26, y: 74 }, t2: { x: 80, y: 68 }, t3: { x: 26, y: 50 }, t4: { x: 64, y: 48 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 38, y: 38 }, o2: { x: 66, y: 42 }, o3: { x: 42, y: 64 }, o4: { x: 58, y: 68 } },
          ball: { x: 50, y: 88, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 54, y: 86 }, { x: 78, y: 70 }] },
            { type: 'run', pts: [{ x: 26, y: 48 }, { x: 36, y: 24 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 30, y: 68 }, t2: { x: 80, y: 54 }, t3: { x: 36, y: 26 }, t4: { x: 64, y: 32 } },
          oppPos: { o0: { x: 50, y: 11 }, o1: { x: 38, y: 30 }, o2: { x: 64, y: 36 }, o3: { x: 46, y: 54 }, o4: { x: 64, y: 56 } },
          ball: { x: 80, y: 54, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 76, y: 51 }, { x: 40, y: 22 }] },
            { type: 'run', pts: [{ x: 64, y: 32 }, { x: 60, y: 20 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 34, y: 62 }, t2: { x: 74, y: 44 }, t3: { x: 40, y: 20 }, t4: { x: 60, y: 20 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 36, y: 24 }, o2: { x: 60, y: 28 }, o3: { x: 46, y: 46 }, o4: { x: 62, y: 48 } },
          ball: { x: 40, y: 20, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 43, y: 17 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 86 }, t1: { x: 36, y: 60 }, t2: { x: 72, y: 42 }, t3: { x: 42, y: 18 }, t4: { x: 58, y: 18 } },
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
    tag: '6v6 • 4 Steps',
    desc: 'Split backs & central pivot form an instant passing triangle to beat the first presser and cross to the striker.',
    cue: 'Form a side triangle — defender, pivot, winger — to play around the press!',
    build: () => ({
      pitchMode: '6v6',
      formationId: 'gk-6v6',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 18, y: 78 }, t2: { x: 82, y: 78 }, t3: { x: 46, y: 64 }, t4: { x: 18, y: 48 }, t5: { x: 54, y: 34 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 26 }, o2: { x: 68, y: 26 }, o3: { x: 30, y: 54 }, o4: { x: 66, y: 50 }, o5: { x: 46, y: 44 } },
          ball: { x: 50, y: 90, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 46, y: 88 }, { x: 21, y: 79 }] },
            { type: 'run', pts: [{ x: 46, y: 64 }, { x: 36, y: 60 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 18, y: 74 }, t2: { x: 78, y: 72 }, t3: { x: 36, y: 60 }, t4: { x: 18, y: 34 }, t5: { x: 52, y: 24 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 25 }, o2: { x: 66, y: 26 }, o3: { x: 24, y: 64 }, o4: { x: 64, y: 46 }, o5: { x: 42, y: 46 } },
          ball: { x: 36, y: 60, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 33, y: 57 }, { x: 20, y: 36 }] },
            { type: 'run', pts: [{ x: 52, y: 24 }, { x: 50, y: 18 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 24, y: 66 }, t2: { x: 74, y: 64 }, t3: { x: 42, y: 48 }, t4: { x: 20, y: 22 }, t5: { x: 50, y: 18 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 32, y: 22 }, o2: { x: 62, y: 22 }, o3: { x: 28, y: 46 }, o4: { x: 60, y: 40 }, o5: { x: 44, y: 36 } },
          ball: { x: 50, y: 18, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 51, y: 15 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 26, y: 64 }, t2: { x: 72, y: 62 }, t3: { x: 44, y: 44 }, t4: { x: 22, y: 20 }, t5: { x: 51, y: 16 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 34, y: 20 }, o2: { x: 60, y: 20 }, o3: { x: 30, y: 42 }, o4: { x: 58, y: 38 }, o5: { x: 44, y: 34 } },
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
            { type: 'run', pts: [{ x: 52, y: 34 }, { x: 54, y: 21 }] },
            { type: 'zone', x1: 46, y1: 17, x2: 62, y2: 26 }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 60 }, t2: { x: 64, y: 60 }, t3: { x: 55, y: 22 }, t4: { x: 62, y: 11 }, t5: { x: 90, y: 10 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 60, y: 12 }, o2: { x: 44, y: 16 }, o3: { x: 63, y: 15 }, o4: { x: 46, y: 24 }, o5: { x: 50, y: 44 } },
          ball: { x: 90, y: 10, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 87, y: 11 }, { x: 57, y: 21 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 58 }, t2: { x: 64, y: 58 }, t3: { x: 54, y: 20 }, t4: { x: 62, y: 12 }, t5: { x: 84, y: 16 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 60, y: 13 }, o2: { x: 44, y: 16 }, o3: { x: 60, y: 17 }, o4: { x: 48, y: 22 }, o5: { x: 50, y: 42 } },
          ball: { x: 54, y: 20, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 52, y: 17 }, { x: 45, y: 4 }] }
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
    tag: '6v6 • 4 Steps',
    desc: 'Draw the opposition block onto the left side, recycle across the two defenders, and release the isolated right winger.',
    cue: 'Two quick passes across the back unlock the 1v1 on the weak side!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '2-2-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 30, y: 72 }, t2: { x: 68, y: 70 }, t3: { x: 18, y: 50 }, t4: { x: 84, y: 48 }, t5: { x: 50, y: 32 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 26, y: 30 }, o2: { x: 58, y: 28 }, o3: { x: 22, y: 44 }, o4: { x: 44, y: 46 }, o5: { x: 34, y: 56 } },
          ball: { x: 18, y: 50, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 20, y: 54 }, { x: 29, y: 69 }] },
            { type: 'zone', x1: 70, y1: 20, x2: 92, y2: 52 }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 32, y: 70 }, t2: { x: 68, y: 66 }, t3: { x: 22, y: 44 }, t4: { x: 82, y: 34 }, t5: { x: 50, y: 26 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 28 }, o2: { x: 62, y: 28 }, o3: { x: 28, y: 44 }, o4: { x: 48, y: 46 }, o5: { x: 38, y: 56 } },
          ball: { x: 68, y: 66, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 70, y: 62 }, { x: 81, y: 37 }] },
            { type: 'run', pts: [{ x: 50, y: 26 }, { x: 48, y: 18 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 36, y: 64 }, t2: { x: 68, y: 58 }, t3: { x: 28, y: 38 }, t4: { x: 76, y: 22 }, t5: { x: 48, y: 18 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 38, y: 24 }, o2: { x: 66, y: 24 }, o3: { x: 34, y: 40 }, o4: { x: 56, y: 38 }, o5: { x: 44, y: 50 } },
          ball: { x: 48, y: 18, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 47, y: 15 }, { x: 45, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 38, y: 62 }, t2: { x: 66, y: 56 }, t3: { x: 30, y: 36 }, t4: { x: 74, y: 20 }, t5: { x: 48, y: 16 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 40, y: 22 }, o2: { x: 64, y: 22 }, o3: { x: 36, y: 38 }, o4: { x: 56, y: 36 }, o5: { x: 46, y: 48 } },
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
    tag: '6v6 • 4 Steps',
    desc: 'Both forwards press outside-in to funnel the opponent into your central midfielder, winning the ball right in front of goal.',
    cue: 'Forwards show them inside into our central midfielder’s trap — win and slip through!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '2-1-2',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 32, y: 72 }, t2: { x: 68, y: 72 }, t3: { x: 50, y: 48 }, t4: { x: 24, y: 34 }, t5: { x: 76, y: 34 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 26, y: 22 }, o2: { x: 74, y: 22 }, o3: { x: 50, y: 38 }, o4: { x: 30, y: 56 }, o5: { x: 70, y: 56 } },
          ball: { x: 26, y: 22, attachedTo: 'o1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 24, y: 34 }, { x: 22, y: 23 }] },
            { type: 'run', pts: [{ x: 50, y: 48 }, { x: 50, y: 39 }] },
            { type: 'zone', x1: 40, y1: 30, x2: 60, y2: 44 }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 34, y: 68 }, t2: { x: 66, y: 68 }, t3: { x: 48, y: 38 }, t4: { x: 24, y: 24 }, t5: { x: 66, y: 26 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 24, y: 20 }, o2: { x: 72, y: 24 }, o3: { x: 52, y: 40 }, o4: { x: 32, y: 54 }, o5: { x: 68, y: 54 } },
          ball: { x: 48, y: 38, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 66, y: 26 }, { x: 56, y: 18 }] },
            { type: 'pass', pts: [{ x: 50, y: 35 }, { x: 55, y: 20 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 88 }, t1: { x: 36, y: 64 }, t2: { x: 64, y: 64 }, t3: { x: 48, y: 32 }, t4: { x: 32, y: 22 }, t5: { x: 56, y: 18 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 30, y: 20 }, o2: { x: 68, y: 22 }, o3: { x: 50, y: 36 }, o4: { x: 34, y: 50 }, o5: { x: 66, y: 50 } },
          ball: { x: 56, y: 18, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 56, y: 15 }, { x: 55, y: 4 }] }
          ]
        },
        {
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
    tag: '6v6 • 4 Steps',
    desc: 'Winger dribbles inside to pin the defender, opening the touchline corridor for an overlapping cut-back and finish.',
    cue: 'Drive inside to pin the full-back — shout "OVER!" at top speed outside!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '1-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 42, y: 74 }, t2: { x: 24, y: 54 }, t3: { x: 54, y: 58 }, t4: { x: 82, y: 54 }, t5: { x: 50, y: 34 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 30, y: 26 }, o2: { x: 70, y: 26 }, o3: { x: 26, y: 42 }, o4: { x: 74, y: 44 }, o5: { x: 50, y: 52 } },
          ball: { x: 42, y: 74, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 39, y: 71 }, { x: 26, y: 57 }] },
            { type: 'run', pts: [{ x: 42, y: 70 }, { x: 14, y: 54 }, { x: 14, y: 22 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 14, y: 22 }, t2: { x: 34, y: 42 }, t3: { x: 52, y: 54 }, t4: { x: 74, y: 34 }, t5: { x: 50, y: 22 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 32, y: 24 }, o2: { x: 68, y: 25 }, o3: { x: 30, y: 38 }, o4: { x: 70, y: 40 }, o5: { x: 48, y: 48 } },
          ball: { x: 14, y: 22, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 18, y: 22 }, { x: 46, y: 20 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 16, y: 20 }, t2: { x: 36, y: 36 }, t3: { x: 50, y: 50 }, t4: { x: 68, y: 22 }, t5: { x: 48, y: 19 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 30, y: 20 }, o2: { x: 62, y: 22 }, o3: { x: 26, y: 30 }, o4: { x: 66, y: 34 }, o5: { x: 48, y: 44 } },
          ball: { x: 48, y: 19, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 50, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 18, y: 19 }, t2: { x: 38, y: 34 }, t3: { x: 50, y: 48 }, t4: { x: 66, y: 20 }, t5: { x: 49, y: 17 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 32, y: 19 }, o2: { x: 60, y: 20 }, o3: { x: 28, y: 28 }, o4: { x: 64, y: 32 }, o5: { x: 48, y: 42 } },
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
    tag: '6v6 • 4 Steps',
    desc: 'Play UP into the central striker, bounce BACK 1-touch to the midfielder, and slide THROUGH for the right winger.',
    cue: 'Find the striker’s feet to draw CBs narrow, then bounce & release the wide runner!',
    build: () => ({
      pitchMode: '6v6',
      formationId: '1-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 46, y: 75 }, t2: { x: 20, y: 54 }, t3: { x: 44, y: 56 }, t4: { x: 82, y: 52 }, t5: { x: 52, y: 36 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 36, y: 26 }, o2: { x: 66, y: 26 }, o3: { x: 32, y: 44 }, o4: { x: 66, y: 44 }, o5: { x: 52, y: 60 } },
          ball: { x: 46, y: 75, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 47, y: 71 }, { x: 51, y: 40 }] },
            { type: 'run', pts: [{ x: 52, y: 36 }, { x: 52, y: 40 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 46, y: 70 }, t2: { x: 22, y: 48 }, t3: { x: 46, y: 50 }, t4: { x: 78, y: 38 }, t5: { x: 52, y: 40 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 42, y: 28 }, o2: { x: 62, y: 28 }, o3: { x: 34, y: 44 }, o4: { x: 64, y: 42 }, o5: { x: 50, y: 58 } },
          ball: { x: 52, y: 40, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 50, y: 43 }, { x: 47, y: 48 }] },
            { type: 'run', pts: [{ x: 78, y: 38 }, { x: 64, y: 20 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 89 }, t1: { x: 46, y: 66 }, t2: { x: 26, y: 42 }, t3: { x: 47, y: 48 }, t4: { x: 64, y: 20 }, t5: { x: 50, y: 32 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 40, y: 26 }, o2: { x: 60, y: 26 }, o3: { x: 38, y: 40 }, o4: { x: 62, y: 36 }, o5: { x: 48, y: 54 } },
          ball: { x: 64, y: 20, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 61, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
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
    tag: '7v7 • 4 Steps',
    desc: 'Centre-backs split wide in 2-3-1 so GK plays out cleanly down the left wing to cross for the striker.',
    cue: 'CBs split wide, wingers stay high & wide — build down the channel and cross low!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 22, y: 78 }, t2: { x: 78, y: 78 }, t3: { x: 16, y: 52 }, t4: { x: 50, y: 58 }, t5: { x: 84, y: 52 }, t6: { x: 50, y: 34 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 24 }, o2: { x: 52, y: 24 }, o3: { x: 74, y: 24 }, o4: { x: 34, y: 46 }, o5: { x: 66, y: 46 }, o6: { x: 50, y: 58 } },
          ball: { x: 50, y: 91, attachedTo: 't0' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 46, y: 89 }, { x: 25, y: 79 }] },
            { type: 'run', pts: [{ x: 16, y: 50 }, { x: 16, y: 34 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 22, y: 68 }, t2: { x: 74, y: 74 }, t3: { x: 16, y: 32 }, t4: { x: 46, y: 50 }, t5: { x: 80, y: 40 }, t6: { x: 50, y: 24 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 26, y: 24 }, o2: { x: 50, y: 24 }, o3: { x: 72, y: 24 }, o4: { x: 28, y: 48 }, o5: { x: 64, y: 44 }, o6: { x: 42, y: 58 } },
          ball: { x: 16, y: 32, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'dribble', pts: [{ x: 16, y: 32 }, { x: 18, y: 20 }] },
            { type: 'pass', pts: [{ x: 20, y: 20 }, { x: 47, y: 19 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 26, y: 62 }, t2: { x: 70, y: 68 }, t3: { x: 18, y: 20 }, t4: { x: 46, y: 42 }, t5: { x: 72, y: 26 }, t6: { x: 50, y: 19 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 28, y: 20 }, o2: { x: 46, y: 22 }, o3: { x: 68, y: 22 }, o4: { x: 30, y: 40 }, o5: { x: 60, y: 38 }, o6: { x: 44, y: 50 } },
          ball: { x: 50, y: 19, attachedTo: 't6' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 51, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 28, y: 60 }, t2: { x: 68, y: 66 }, t3: { x: 20, y: 19 }, t4: { x: 46, y: 38 }, t5: { x: 68, y: 22 }, t6: { x: 51, y: 17 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 30, y: 19 }, o2: { x: 46, y: 20 }, o3: { x: 64, y: 20 }, o4: { x: 32, y: 38 }, o5: { x: 58, y: 36 }, o6: { x: 44, y: 48 } },
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
    tag: '7v7 • 4 Steps',
    desc: 'From a right-side restart, bounce inside to the central midfielder to release the right winger behind the defence.',
    cue: 'Play inside to the CM first — winger sprints the channel on the bounce pass!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 34, y: 74 }, t2: { x: 92, y: 54 }, t3: { x: 22, y: 48 }, t4: { x: 64, y: 54 }, t5: { x: 80, y: 38 }, t6: { x: 48, y: 32 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 30, y: 24 }, o2: { x: 52, y: 25 }, o3: { x: 74, y: 26 }, o4: { x: 40, y: 44 }, o5: { x: 74, y: 44 }, o6: { x: 58, y: 60 } },
          ball: { x: 92, y: 54, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 88, y: 54 }, { x: 67, y: 54 }] },
            { type: 'run', pts: [{ x: 80, y: 38 }, { x: 82, y: 20 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 70 }, t2: { x: 84, y: 50 }, t3: { x: 28, y: 38 }, t4: { x: 64, y: 52 }, t5: { x: 82, y: 20 }, t6: { x: 48, y: 22 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 32, y: 23 }, o2: { x: 52, y: 24 }, o3: { x: 74, y: 24 }, o4: { x: 44, y: 42 }, o5: { x: 70, y: 46 }, o6: { x: 58, y: 56 } },
          ball: { x: 64, y: 52, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 66, y: 48 }, { x: 81, y: 23 }] },
            { type: 'run', pts: [{ x: 48, y: 22 }, { x: 48, y: 18 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 66 }, t2: { x: 80, y: 44 }, t3: { x: 34, y: 26 }, t4: { x: 62, y: 44 }, t5: { x: 80, y: 20 }, t6: { x: 48, y: 18 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 34, y: 22 }, o2: { x: 54, y: 20 }, o3: { x: 74, y: 21 }, o4: { x: 46, y: 38 }, o5: { x: 68, y: 40 }, o6: { x: 56, y: 52 } },
          ball: { x: 48, y: 18, attachedTo: 't6' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 47, y: 15 }, { x: 45, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 64 }, t2: { x: 78, y: 42 }, t3: { x: 36, y: 22 }, t4: { x: 60, y: 42 }, t5: { x: 78, y: 19 }, t6: { x: 48, y: 16 } },
          oppPos: { o0: { x: 55, y: 11 }, o1: { x: 36, y: 20 }, o2: { x: 52, y: 19 }, o3: { x: 72, y: 20 }, o4: { x: 46, y: 36 }, o5: { x: 66, y: 38 }, o6: { x: 54, y: 50 } },
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
    tag: '7v7 • 4 Steps',
    desc: 'Escape a crowded left flank by shifting through your central midfielder out to the wide-open right winger.',
    cue: 'Don’t force into traffic — two passes through the CM switches the attack!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 28, y: 74 }, t2: { x: 70, y: 72 }, t3: { x: 16, y: 48 }, t4: { x: 48, y: 56 }, t5: { x: 84, y: 46 }, t6: { x: 50, y: 32 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 22, y: 28 }, o2: { x: 44, y: 26 }, o3: { x: 66, y: 28 }, o4: { x: 22, y: 42 }, o5: { x: 40, y: 46 }, o6: { x: 32, y: 58 } },
          ball: { x: 16, y: 48, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'zone', x1: 70, y1: 18, x2: 92, y2: 50 },
            { type: 'pass', pts: [{ x: 20, y: 50 }, { x: 45, y: 55 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 30, y: 70 }, t2: { x: 70, y: 68 }, t3: { x: 20, y: 42 }, t4: { x: 48, y: 54 }, t5: { x: 82, y: 30 }, t6: { x: 50, y: 24 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 26, y: 26 }, o2: { x: 48, y: 26 }, o3: { x: 68, y: 26 }, o4: { x: 28, y: 42 }, o5: { x: 46, y: 46 }, o6: { x: 38, y: 56 } },
          ball: { x: 48, y: 54, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 52, y: 51 }, { x: 79, y: 32 }] },
            { type: 'run', pts: [{ x: 82, y: 30 }, { x: 66, y: 19 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 34, y: 66 }, t2: { x: 70, y: 62 }, t3: { x: 26, y: 34 }, t4: { x: 52, y: 44 }, t5: { x: 66, y: 19 }, t6: { x: 46, y: 20 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 24 }, o2: { x: 50, y: 24 }, o3: { x: 72, y: 24 }, o4: { x: 34, y: 38 }, o5: { x: 54, y: 40 }, o6: { x: 44, y: 52 } },
          ball: { x: 66, y: 19, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 63, y: 16 }, { x: 45, y: 4 }] }
          ]
        },
        {
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
    tag: '7v7 • 4 Steps',
    desc: 'Stay compact in a 3-2-1 Christmas Tree block, win the central pass with twin midfielders, and spring a fast 2v1 break.',
    cue: 'Protect the middle in our 3-2-1 — win it centrally and sprint forward together!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '3-2-1',
      retreatLine: false,
      lanesMode: 'off',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 24, y: 74 }, t2: { x: 50, y: 76 }, t3: { x: 76, y: 74 }, t4: { x: 38, y: 56 }, t5: { x: 62, y: 56 }, t6: { x: 50, y: 42 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 32, y: 28 }, o2: { x: 68, y: 28 }, o3: { x: 24, y: 48 }, o4: { x: 50, y: 50 }, o5: { x: 78, y: 48 }, o6: { x: 50, y: 66 } },
          ball: { x: 50, y: 50, attachedTo: 'o4' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 38, y: 56 }, { x: 47, y: 51 }] },
            { type: 'run', pts: [{ x: 62, y: 56 }, { x: 53, y: 51 }] },
            { type: 'zone', x1: 38, y1: 44, x2: 62, y2: 58 }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 26, y: 70 }, t2: { x: 50, y: 72 }, t3: { x: 74, y: 70 }, t4: { x: 48, y: 50 }, t5: { x: 64, y: 38 }, t6: { x: 36, y: 26 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 34, y: 26 }, o2: { x: 66, y: 28 }, o3: { x: 26, y: 48 }, o4: { x: 50, y: 52 }, o5: { x: 76, y: 48 }, o6: { x: 50, y: 64 } },
          ball: { x: 48, y: 50, attachedTo: 't4' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 46, y: 46 }, { x: 37, y: 28 }] },
            { type: 'run', pts: [{ x: 64, y: 38 }, { x: 58, y: 19 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 28, y: 66 }, t2: { x: 50, y: 68 }, t3: { x: 72, y: 66 }, t4: { x: 48, y: 42 }, t5: { x: 58, y: 19 }, t6: { x: 36, y: 22 } },
          oppPos: { o0: { x: 48, y: 10 }, o1: { x: 36, y: 22 }, o2: { x: 64, y: 24 }, o3: { x: 30, y: 44 }, o4: { x: 50, y: 48 }, o5: { x: 72, y: 44 }, o6: { x: 50, y: 60 } },
          ball: { x: 58, y: 19, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 57, y: 16 }, { x: 55, y: 4 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 30, y: 64 }, t2: { x: 50, y: 66 }, t3: { x: 70, y: 64 }, t4: { x: 48, y: 40 }, t5: { x: 57, y: 17 }, t6: { x: 38, y: 20 } },
          oppPos: { o0: { x: 44, y: 11 }, o1: { x: 38, y: 20 }, o2: { x: 62, y: 22 }, o3: { x: 32, y: 42 }, o4: { x: 50, y: 46 }, o5: { x: 70, y: 42 }, o6: { x: 50, y: 58 } },
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
    tag: '7v7 • 4 Steps',
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
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 32, y: 74 }, t2: { x: 68, y: 76 }, t3: { x: 18, y: 54 }, t4: { x: 42, y: 55 }, t5: { x: 82, y: 52 }, t6: { x: 52, y: 36 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 24 }, o2: { x: 52, y: 25 }, o3: { x: 74, y: 25 }, o4: { x: 34, y: 42 }, o5: { x: 64, y: 42 }, o6: { x: 56, y: 60 } },
          ball: { x: 32, y: 74, attachedTo: 't1' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 52, y: 36 }, { x: 52, y: 40 }] },
            { type: 'pass', pts: [{ x: 34, y: 70 }, { x: 50, y: 41 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 34, y: 70 }, t2: { x: 66, y: 72 }, t3: { x: 20, y: 48 }, t4: { x: 44, y: 52 }, t5: { x: 80, y: 40 }, t6: { x: 52, y: 40 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 24 }, o2: { x: 52, y: 30 }, o3: { x: 74, y: 26 }, o4: { x: 38, y: 41 }, o5: { x: 62, y: 42 }, o6: { x: 54, y: 58 } },
          ball: { x: 52, y: 40, attachedTo: 't6' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 50, y: 43 }, { x: 46, y: 50 }] },
            { type: 'run', pts: [{ x: 80, y: 40 }, { x: 66, y: 20 }] },
            { type: 'zone', x1: 58, y1: 14, x2: 76, y2: 28 }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 66 }, t2: { x: 64, y: 68 }, t3: { x: 24, y: 42 }, t4: { x: 46, y: 50 }, t5: { x: 66, y: 20 }, t6: { x: 48, y: 30 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 23 }, o2: { x: 52, y: 28 }, o3: { x: 72, y: 24 }, o4: { x: 42, y: 40 }, o5: { x: 58, y: 38 }, o6: { x: 46, y: 54 } },
          ball: { x: 66, y: 20, attachedTo: 't5' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 63, y: 17 }, { x: 45, y: 4 }] }
          ]
        },
        {
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
    tag: '7v7 • 4 Steps',
    desc: 'Right winger drives into the half-space to pin the defender while the right defender overlaps to cross to the far post.',
    cue: 'Winger comes inside, defender overlaps outside, opposite winger attacks the back post!',
    build: () => ({
      pitchMode: '7v7',
      formationId: '2-3-1',
      retreatLine: false,
      lanesMode: 'lanes',
      oppMode: 'even',
      steps: [
        {
          teamPos: { t0: { x: 50, y: 91 }, t1: { x: 32, y: 74 }, t2: { x: 72, y: 72 }, t3: { x: 18, y: 50 }, t4: { x: 48, y: 56 }, t5: { x: 80, y: 50 }, t6: { x: 50, y: 32 } },
          oppPos: { o0: { x: 50, y: 9 }, o1: { x: 28, y: 25 }, o2: { x: 50, y: 25 }, o3: { x: 72, y: 26 }, o4: { x: 34, y: 44 }, o5: { x: 68, y: 44 }, o6: { x: 50, y: 58 } },
          ball: { x: 72, y: 72, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 74, y: 68 }, { x: 79, y: 53 }] },
            { type: 'run', pts: [{ x: 72, y: 68 }, { x: 88, y: 52 }, { x: 86, y: 22 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 36, y: 68 }, t2: { x: 86, y: 22 }, t3: { x: 32, y: 28 }, t4: { x: 48, y: 52 }, t5: { x: 66, y: 38 }, t6: { x: 52, y: 22 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 24 }, o2: { x: 52, y: 22 }, o3: { x: 68, y: 26 }, o4: { x: 38, y: 40 }, o5: { x: 64, y: 36 }, o6: { x: 50, y: 54 } },
          ball: { x: 86, y: 22, attachedTo: 't2' },
          gear: [],
          drawings: [
            { type: 'run', pts: [{ x: 32, y: 28 }, { x: 40, y: 17 }] },
            { type: 'pass', pts: [{ x: 82, y: 21 }, { x: 43, y: 17 }] }
          ]
        },
        {
          teamPos: { t0: { x: 50, y: 90 }, t1: { x: 38, y: 66 }, t2: { x: 84, y: 20 }, t3: { x: 40, y: 17 }, t4: { x: 50, y: 48 }, t5: { x: 66, y: 34 }, t6: { x: 54, y: 18 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 36, y: 20 }, o2: { x: 52, y: 20 }, o3: { x: 70, y: 22 }, o4: { x: 40, y: 36 }, o5: { x: 64, y: 34 }, o6: { x: 50, y: 50 } },
          ball: { x: 40, y: 17, attachedTo: 't3' },
          gear: [],
          drawings: [
            { type: 'pass', pts: [{ x: 42, y: 14 }, { x: 45, y: 4 }] }
          ]
        },
        {
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
  // TAB 2: TRAINING & GEAR — EASY (3 Drills x 4 Complete Steps)
  // =========================================================================
  {
    id: 'tpl-rondo-box',
    category: 'training',
    difficulty: 'easy',
    standard: 'UEFA Warm-Up',
    title: '4v1 Continuous Rondo Box',
    tag: 'Blank Grass • 4 Steps',
    desc: '4 outside players slide along the cone lines to always give 2 diagonal passing options against 1 presser.',
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
            { type: 'pass', pts: [{ x: 46, y: 75 }, { x: 23, y: 56 }] },
            { type: 'run', pts: [{ x: 50, y: 22 }, { x: 36, y: 22 }] }
          ],
          customOppCount: 1
        },
        {
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
            { type: 'pass', pts: [{ x: 22, y: 50 }, { x: 35, y: 26 }] },
            { type: 'run', pts: [{ x: 80, y: 44 }, { x: 80, y: 36 }] }
          ],
          customOppCount: 1
        },
        {
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
            { type: 'pass', pts: [{ x: 40, y: 24 }, { x: 76, y: 35 }] }
          ],
          customOppCount: 1
        },
        {
          teamPos: { t0: { x: 58, y: 78 }, t1: { x: 20, y: 48 }, t2: { x: 80, y: 36 }, t3: { x: 50, y: 22 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 62, y: 38 } },
          ball: { x: 80, y: 36, attachedTo: 't2' },
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
    tag: 'Half Pitch • 4 Steps',
    desc: 'Close-control two-footed weave through slalom poles, burst through the blue gate, and finish low past the keeper.',
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
            { type: 'dribble', pts: [{ x: 35, y: 74 }, { x: 30, y: 62 }, { x: 40, y: 50 }, { x: 32, y: 38 }] }
          ],
          customOppCount: 1
        },
        {
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 33, y: 36 }, t2: { x: 75, y: 76 }, t3: { x: 35, y: 84 }, t4: { x: 75, y: 92 } },
          oppPos: { o0: { x: 48, y: 10 } },
          ball: { x: 33, y: 36, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 82, y: 79 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 33, y: 36 }, { x: 36, y: 21 }] }
          ],
          customOppCount: 1
        },
        {
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 36, y: 21 }, t2: { x: 75, y: 76 }, t3: { x: 35, y: 78 }, t4: { x: 75, y: 92 } },
          oppPos: { o0: { x: 47, y: 10 } },
          ball: { x: 36, y: 21, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 82, y: 79 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 39, y: 19 }, { x: 56, y: 4 }] }
          ],
          customOppCount: 1
        },
        {
          teamPos: { t0: { x: 12, y: 91 }, t1: { x: 38, y: 19 }, t2: { x: 72, y: 70 }, t3: { x: 35, y: 76 }, t4: { x: 75, y: 88 } },
          oppPos: { o0: { x: 44, y: 11 } },
          ball: { x: 56, y: 3, attachedTo: null },
          gear: [
            { id: 'g1', kind: 'pole', x: 35, y: 62 },
            { id: 'g2', kind: 'pole', x: 35, y: 50 },
            { id: 'g3', kind: 'pole', x: 35, y: 38 },
            { id: 'g4', kind: 'cone-sky', x: 28, y: 26 },
            { id: 'g5', kind: 'cone-sky', x: 43, y: 26 },
            { id: 'g6', kind: 'ball-extra', x: 76, y: 73 }
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
    tag: 'Blank Grass • 4 Steps',
    desc: 'Full 360-degree unopposed passing circuit: check off your cone, receive across your body, pass firm & follow.',
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
            { type: 'pass', pts: [{ x: 46, y: 81 }, { x: 20, y: 54 }] },
            { type: 'run', pts: [{ x: 50, y: 80 }, { x: 24, y: 54 }] }
          ],
          customOppCount: 0
        },
        {
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
            { type: 'pass', pts: [{ x: 21, y: 43 }, { x: 47, y: 20 }] },
            { type: 'run', pts: [{ x: 22, y: 44 }, { x: 46, y: 22 }] }
          ],
          customOppCount: 0
        },
        {
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
            { type: 'pass', pts: [{ x: 57, y: 23 }, { x: 79, y: 47 }] },
            { type: 'run', pts: [{ x: 54, y: 24 }, { x: 76, y: 46 }] }
          ],
          customOppCount: 0
        },
        {
          teamPos: { t0: { x: 18, y: 50 }, t1: { x: 50, y: 18 }, t2: { x: 82, y: 50 }, t3: { x: 76, y: 46 }, t4: { x: 50, y: 84 } },
          oppPos: {},
          ball: { x: 82, y: 50, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-lime', x: 50, y: 86 },
            { id: 'g2', kind: 'cone-lime', x: 22, y: 50 },
            { id: 'g3', kind: 'cone-lime', x: 78, y: 50 },
            { id: 'g4', kind: 'cone-lime', x: 50, y: 16 },
            { id: 'g5', kind: 'ball-extra', x: 56, y: 86 }
          ],
          drawings: [],
          customOppCount: 0
        }
      ]
    })
  },

  // =========================================================================
  // TAB 2: TRAINING & GEAR — MEDIUM (3 Drills x 4 Complete Steps)
  // =========================================================================
  {
    id: 'tpl-2v1-overload',
    category: 'training',
    difficulty: 'medium',
    standard: 'Ajax 2v1 DNA',
    title: '2v1 Finishing Overload',
    tag: 'Half Pitch • 4 Steps',
    desc: 'Ball carrier drives straight at the defender to freeze them, slips the spare attacker in, and finishes past GK.',
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
            { type: 'pass', pts: [{ x: 47, y: 45 }, { x: 63, y: 24 }] },
            { type: 'zone', x1: 56, y1: 16, x2: 74, y2: 32 }
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
            { type: 'pass', pts: [{ x: 60, y: 19 }, { x: 45, y: 4 }] }
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
    tag: 'Blank Grass • 4 Steps',
    desc: 'Circulate fast around the outside to draw both defenders together, thread a split pass right between them, and recycle.',
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
          teamPos: { t0: { x: 50, y: 80 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 50, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 42, y: 60 }, o1: { x: 58, y: 46 } },
          ball: { x: 50, y: 80, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 46, y: 77 }, { x: 21, y: 53 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 44, y: 80 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 54, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 32, y: 57 }, o1: { x: 35, y: 41 } },
          ball: { x: 18, y: 50, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [
            { type: 'zone', x1: 28, y1: 44, x2: 44, y2: 54 },
            { type: 'pass', pts: [{ x: 23, y: 50 }, { x: 77, y: 50 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 50, y: 80 }, t1: { x: 18, y: 50 }, t2: { x: 82, y: 50 }, t3: { x: 56, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 52, y: 54 }, o1: { x: 60, y: 42 } },
          ball: { x: 82, y: 50, attachedTo: 't2' },
          gear: [
            { id: 'g1', kind: 'cone-rose', x: 18, y: 20 },
            { id: 'g2', kind: 'cone-rose', x: 82, y: 20 },
            { id: 'g3', kind: 'cone-rose', x: 18, y: 80 },
            { id: 'g4', kind: 'cone-rose', x: 82, y: 80 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 79, y: 46 }, { x: 58, y: 23 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 50, y: 80 }, t1: { x: 18, y: 46 }, t2: { x: 82, y: 46 }, t3: { x: 56, y: 20 }, t4: { x: 88, y: 90 } },
          oppPos: { o0: { x: 50, y: 42 }, o1: { x: 60, y: 32 } },
          ball: { x: 56, y: 20, attachedTo: 't3' },
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
    tag: 'Half Pitch • 4 Steps',
    desc: 'Attacker races toward two colour-coded cone gates with a defender chasing — fake one gate, chop into the other, and finish.',
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
            { type: 'dribble', pts: [{ x: 50, y: 66 }, { x: 38, y: 48 }] },
            { type: 'run', pts: [{ x: 50, y: 82 }, { x: 33, y: 46 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 38, y: 48 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 33, y: 44 } },
          ball: { x: 38, y: 48, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 24, y: 38 },
            { id: 'g2', kind: 'cone-amber', x: 38, y: 38 },
            { id: 'g3', kind: 'cone-lime', x: 62, y: 38 },
            { id: 'g4', kind: 'cone-lime', x: 76, y: 38 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 40, y: 48 }, { x: 68, y: 42 }, { x: 66, y: 24 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 66, y: 24 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
          oppPos: { o0: { x: 53, y: 10 }, o1: { x: 52, y: 34 } },
          ball: { x: 66, y: 24, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 24, y: 38 },
            { id: 'g2', kind: 'cone-amber', x: 38, y: 38 },
            { id: 'g3', kind: 'cone-lime', x: 62, y: 38 },
            { id: 'g4', kind: 'cone-lime', x: 76, y: 38 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 63, y: 21 }, { x: 45, y: 4 }] }
          ],
          customOppCount: 2
        },
        {
          teamPos: { t0: { x: 14, y: 90 }, t1: { x: 64, y: 21 }, t2: { x: 86, y: 90 }, t3: { x: 26, y: 90 }, t4: { x: 74, y: 90 } },
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
  // TAB 2: TRAINING & GEAR — ADVANCED (3 Drills x 4 Complete Steps)
  // =========================================================================
  {
    id: 'tpl-funino-4goals',
    category: 'training',
    difficulty: 'advanced',
    standard: 'DFB Funino',
    title: 'Funino 3v3 Four-Mini-Goal Switch',
    tag: '4 Mini-Goals • 4 Steps',
    desc: 'Classic Horst Wein / DFB 3v3 game: draw defenders toward one mini-goal, switch fast, and score inside the open goal.',
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
          teamPos: { t0: { x: 24, y: 46 }, t1: { x: 48, y: 60 }, t2: { x: 78, y: 48 }, t3: { x: 10, y: 94 }, t4: { x: 90, y: 94 } },
          oppPos: { o0: { x: 24, y: 26 }, o1: { x: 38, y: 34 }, o2: { x: 56, y: 36 } },
          ball: { x: 24, y: 46, attachedTo: 't0' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 24, y: 11 },
            { id: 'g2', kind: 'mini-goal', x: 76, y: 11 },
            { id: 'g3', kind: 'mini-goal', x: 24, y: 87 },
            { id: 'g4', kind: 'mini-goal', x: 76, y: 87 },
            { id: 'g5', kind: 'cone-amber', x: 10, y: 28 },
            { id: 'g6', kind: 'cone-amber', x: 90, y: 28 }
          ],
          drawings: [
            { type: 'zone', x1: 64, y1: 14, x2: 88, y2: 32 },
            { type: 'pass', pts: [{ x: 28, y: 49 }, { x: 46, y: 58 }] }
          ],
          customOppCount: 3
        },
        {
          teamPos: { t0: { x: 26, y: 36 }, t1: { x: 50, y: 56 }, t2: { x: 76, y: 28 }, t3: { x: 10, y: 94 }, t4: { x: 90, y: 94 } },
          oppPos: { o0: { x: 24, y: 22 }, o1: { x: 42, y: 36 }, o2: { x: 60, y: 34 } },
          ball: { x: 50, y: 56, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 24, y: 11 },
            { id: 'g2', kind: 'mini-goal', x: 76, y: 11 },
            { id: 'g3', kind: 'mini-goal', x: 24, y: 87 },
            { id: 'g4', kind: 'mini-goal', x: 76, y: 87 },
            { id: 'g5', kind: 'cone-amber', x: 10, y: 28 },
            { id: 'g6', kind: 'cone-amber', x: 90, y: 28 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 54, y: 53 }, { x: 75, y: 25 }] },
            { type: 'run', pts: [{ x: 76, y: 28 }, { x: 76, y: 22 }] }
          ],
          customOppCount: 3
        },
        {
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
            { type: 'pass', pts: [{ x: 76, y: 19 }, { x: 76, y: 11 }] }
          ],
          customOppCount: 3
        },
        {
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
    tag: 'Half Pitch • 4 Steps',
    desc: 'Defenders win the ball and try to hit the mini-goals; attackers hunt in a 5-second pack to win it back and score!',
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
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 44, y: 44 }, t2: { x: 24, y: 34 }, t3: { x: 74, y: 38 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 36, y: 38 }, o2: { x: 60, y: 44 } },
          ball: { x: 36, y: 38, attachedTo: 'o1' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [
            { type: 'dribble', pts: [{ x: 36, y: 42 }, { x: 28, y: 60 }] },
            { type: 'run', pts: [{ x: 44, y: 46 }, { x: 30, y: 58 }] },
            { type: 'run', pts: [{ x: 24, y: 38 }, { x: 22, y: 54 }] },
            { type: 'zone', x1: 18, y1: 48, x2: 40, y2: 66 }
          ],
          customOppCount: 3
        },
        {
          teamPos: { t0: { x: 46, y: 88 }, t1: { x: 30, y: 58 }, t2: { x: 22, y: 54 }, t3: { x: 62, y: 42 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 28, y: 62 }, o2: { x: 54, y: 50 } },
          ball: { x: 30, y: 58, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 34, y: 55 }, { x: 59, y: 23 }] },
            { type: 'run', pts: [{ x: 62, y: 42 }, { x: 60, y: 21 }] }
          ],
          customOppCount: 3
        },
        {
          teamPos: { t0: { x: 48, y: 90 }, t1: { x: 36, y: 48 }, t2: { x: 26, y: 44 }, t3: { x: 60, y: 21 }, t4: { x: 90, y: 92 } },
          oppPos: { o0: { x: 52, y: 10 }, o1: { x: 32, y: 56 }, o2: { x: 52, y: 40 } },
          ball: { x: 60, y: 21, attachedTo: 't3' },
          gear: [
            { id: 'g1', kind: 'mini-goal', x: 20, y: 88 },
            { id: 'g2', kind: 'mini-goal', x: 80, y: 88 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 58, y: 18 }, { x: 45, y: 4 }] }
          ],
          customOppCount: 3
        },
        {
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
    tag: 'Half Pitch • 4 Steps',
    desc: 'Keep possession in the midfield cone square until the Up-Back-Through trigger releases a runner in on goal to score.',
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
          teamPos: { t0: { x: 50, y: 92 }, t1: { x: 50, y: 78 }, t2: { x: 30, y: 60 }, t3: { x: 70, y: 60 }, t4: { x: 50, y: 46 } },
          oppPos: { o0: { x: 50, y: 10 }, o1: { x: 44, y: 64 }, o2: { x: 56, y: 56 } },
          ball: { x: 50, y: 78, attachedTo: 't1' },
          gear: [
            { id: 'g1', kind: 'cone-amber', x: 30, y: 46 },
            { id: 'g2', kind: 'cone-amber', x: 70, y: 46 },
            { id: 'g3', kind: 'cone-amber', x: 30, y: 78 },
            { id: 'g4', kind: 'cone-amber', x: 70, y: 78 }
          ],
          drawings: [
            { type: 'pass', pts: [{ x: 50, y: 74 }, { x: 50, y: 49 }] }
          ],
          customOppCount: 3
        },
        {
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
            { type: 'pass', pts: [{ x: 47, y: 48 }, { x: 36, y: 56 }] },
            { type: 'run', pts: [{ x: 70, y: 52 }, { x: 60, y: 22 }] },
            { type: 'zone', x1: 52, y1: 16, x2: 72, y2: 30 }
          ],
          customOppCount: 3
        },
        {
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
            { type: 'pass', pts: [{ x: 58, y: 19 }, { x: 45, y: 4 }] }
          ],
          customOppCount: 3
        },
        {
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
