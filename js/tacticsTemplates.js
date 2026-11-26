// Academy Match Plays & Training Drills Library (FA, UEFA, Ajax, La Masia & Funino Standards)
// 29 full un-skipped multi-step plays & drills with aspect-aware non-overlapping token spacing.

export const BUILTIN_TEMPLATES = [
  {
    id: "tpl-retreat-kick",
    category: "match",
    squadFormat: "5v5",
    difficulty: "easy",
    standard: "FA Foundation",
    title: "5v5 Goal Kick: Split & Beat Retreat",
    tag: "5v5 • 6 Steps",
    desc: "GK plays wide to split defender, who drives across the retreat line, feeds the forward, squares across goal, and scores.",
    cue: "Split wide early — first touch forward past halfway!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
          "retreatLine": true,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 78
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 78
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 63
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 25
                            },
                            "o3": {
                                  "x": 35,
                                  "y": 45
                            },
                            "o4": {
                                  "x": 65,
                                  "y": 45
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 89,
                            "attachedTo": "t0"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 8,
                                  "y1": 54,
                                  "x2": 30,
                                  "y2": 84
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 87
                                        },
                                        {
                                              "x": 22,
                                              "y": 79
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 76
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 58
                            },
                            "t4": {
                                  "x": 44,
                                  "y": 38
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 18,
                            "y": 76,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 76
                                        },
                                        {
                                              "x": 17.7,
                                              "y": 52.2
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 44,
                                              "y": 38
                                        },
                                        {
                                              "x": 34.3,
                                              "y": 26.4
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 72
                                        },
                                        {
                                              "x": 74,
                                              "y": 44
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 87
                            },
                            "t1": {
                                  "x": 17.7,
                                  "y": 52.2
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 44
                            },
                            "t3": {
                                  "x": 44,
                                  "y": 50
                            },
                            "t4": {
                                  "x": 34.3,
                                  "y": 26.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 29.3,
                                  "y": 19
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 26.1,
                                  "y": 46.6
                            },
                            "o4": {
                                  "x": 56,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 17.7,
                            "y": 52.2,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 48
                                        },
                                        {
                                              "x": 33,
                                              "y": 28
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 74,
                                              "y": 44
                                        },
                                        {
                                              "x": 65,
                                              "y": 21.7
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 21.4,
                                  "y": 46.4
                            },
                            "t2": {
                                  "x": 65,
                                  "y": 21.7
                            },
                            "t3": {
                                  "x": 45,
                                  "y": 42.3
                            },
                            "t4": {
                                  "x": 33.6,
                                  "y": 22.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48.2,
                                  "y": 9.8
                            },
                            "o1": {
                                  "x": 39.9,
                                  "y": 15.5
                            },
                            "o2": {
                                  "x": 54.6,
                                  "y": 25.2
                            },
                            "o3": {
                                  "x": 29.8,
                                  "y": 40.8
                            },
                            "o4": {
                                  "x": 55.4,
                                  "y": 38.8
                            }
                      },
                      "ball": {
                            "x": 33.6,
                            "y": 22.4,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 38,
                                              "y": 22
                                        },
                                        {
                                              "x": 59,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 23.4,
                                  "y": 44.4
                            },
                            "t2": {
                                  "x": 61.4,
                                  "y": 19.8
                            },
                            "t3": {
                                  "x": 46.9,
                                  "y": 38
                            },
                            "t4": {
                                  "x": 34.6,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 45.9,
                                  "y": 18.6
                            },
                            "o2": {
                                  "x": 52.8,
                                  "y": 25.2
                            },
                            "o3": {
                                  "x": 31.8,
                                  "y": 38.8
                            },
                            "o4": {
                                  "x": 58.4,
                                  "y": 38
                            }
                      },
                      "ball": {
                            "x": 61.4,
                            "y": 19.8,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 59,
                                              "y": 17
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 25.4,
                                  "y": 42.4
                            },
                            "t2": {
                                  "x": 59.8,
                                  "y": 17.6
                            },
                            "t3": {
                                  "x": 46.9,
                                  "y": 36
                            },
                            "t4": {
                                  "x": 37.1,
                                  "y": 19.5
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 43.5,
                                  "y": 10.1
                            },
                            "o1": {
                                  "x": 48.3,
                                  "y": 17.6
                            },
                            "o2": {
                                  "x": 52.5,
                                  "y": 25.2
                            },
                            "o3": {
                                  "x": 33.8,
                                  "y": 36.8
                            },
                            "o4": {
                                  "x": 58.4,
                                  "y": 36
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-vcut-kickin",
    category: "match",
    squadFormat: "5v5",
    difficulty: "easy",
    standard: "U9 Kick-In Rule",
    title: "5v5 Touchline Kick-In: V-Cut & Cross",
    tag: "5v5 • 5 Steps",
    desc: "Forward checks toward the ball to drag their marker tight, spins in behind down the line, crosses low, and scores.",
    cue: "Check in to fake, spin behind, and cross low!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 26,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 93,
                                  "y": 50
                            },
                            "t4": {
                                  "x": 72,
                                  "y": 35.7
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 42,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 93,
                            "y": 50,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 72,
                                              "y": 35.7
                                        },
                                        {
                                              "x": 83.1,
                                              "y": 45
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 72,
                                              "y": 44
                                        },
                                        {
                                              "x": 71.6,
                                              "y": 45
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 52,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 32,
                                  "y": 40
                            },
                            "t3": {
                                  "x": 93,
                                  "y": 50
                            },
                            "t4": {
                                  "x": 83.1,
                                  "y": 45
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 44,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 71.6,
                                  "y": 45
                            }
                      },
                      "ball": {
                            "x": 93,
                            "y": 50,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 74,
                                  "y1": 12,
                                  "x2": 94,
                                  "y2": 28
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 83.1,
                                              "y": 45
                                        },
                                        {
                                              "x": 84,
                                              "y": 20
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 91,
                                              "y": 47
                                        },
                                        {
                                              "x": 84,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 37.6,
                                  "y": 26.4
                            },
                            "t3": {
                                  "x": 86,
                                  "y": 44
                            },
                            "t4": {
                                  "x": 84,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44.3,
                                  "y": 19.7
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 46,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 78,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 84,
                            "y": 20,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 37.6,
                                              "y": 26.4
                                        },
                                        {
                                              "x": 43.5,
                                              "y": 18.9
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 20
                                        },
                                        {
                                              "x": 44,
                                              "y": 19
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 43.5,
                                  "y": 18.9
                            },
                            "t3": {
                                  "x": 80,
                                  "y": 38
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 54.6,
                                  "y": 21.1
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 20
                            },
                            "o3": {
                                  "x": 48,
                                  "y": 34
                            },
                            "o4": {
                                  "x": 74,
                                  "y": 28
                            }
                      },
                      "ball": {
                            "x": 43.5,
                            "y": 18.9,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 44,
                                              "y": 16
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 52
                            },
                            "t2": {
                                  "x": 43.3,
                                  "y": 16.6
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 36
                            },
                            "t4": {
                                  "x": 78,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 52.7,
                                  "y": 21.3
                            },
                            "o2": {
                                  "x": 65.7,
                                  "y": 19.7
                            },
                            "o3": {
                                  "x": 48,
                                  "y": 32
                            },
                            "o4": {
                                  "x": 72.3,
                                  "y": 26.3
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-short-corner-2v1",
    category: "match",
    squadFormat: "5v5",
    difficulty: "easy",
    standard: "UEFA Set-Piece",
    title: "5v5 Short Corner 2v1 Overload",
    tag: "5v5 • 5 Steps",
    desc: "Play short to the showing support player, drive inside to commit the lone defender, slip the striker, and score.",
    cue: "Show short fast — drive in and slip your mate!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 92,
                                  "y": 10
                            },
                            "t3": {
                                  "x": 74.2,
                                  "y": 25.1
                            },
                            "t4": {
                                  "x": 44.3,
                                  "y": 23.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50.6,
                                  "y": 9.4
                            },
                            "o1": {
                                  "x": 42.3,
                                  "y": 15.1
                            },
                            "o2": {
                                  "x": 65.5,
                                  "y": 19.7
                            },
                            "o3": {
                                  "x": 36.6,
                                  "y": 29.3
                            },
                            "o4": {
                                  "x": 56,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 92,
                            "y": 10,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 74.2,
                                              "y": 25.1
                                        },
                                        {
                                              "x": 78.2,
                                              "y": 15.9
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 89,
                                              "y": 11
                                        },
                                        {
                                              "x": 78,
                                              "y": 16
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 89.2,
                                  "y": 18.2
                            },
                            "t3": {
                                  "x": 78.2,
                                  "y": 15.9
                            },
                            "t4": {
                                  "x": 40.2,
                                  "y": 19.3
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51.3,
                                  "y": 9.3
                            },
                            "o1": {
                                  "x": 51.4,
                                  "y": 17.5
                            },
                            "o2": {
                                  "x": 67.4,
                                  "y": 18.7
                            },
                            "o3": {
                                  "x": 39.7,
                                  "y": 27.5
                            },
                            "o4": {
                                  "x": 58,
                                  "y": 31
                            }
                      },
                      "ball": {
                            "x": 78.2,
                            "y": 15.9,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 78.2,
                                              "y": 15.9
                                        },
                                        {
                                              "x": 62.7,
                                              "y": 20.2
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 40.2,
                                              "y": 19.3
                                        },
                                        {
                                              "x": 39.9,
                                              "y": 16
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 84,
                                  "y": 24
                            },
                            "t3": {
                                  "x": 62.7,
                                  "y": 20.2
                            },
                            "t4": {
                                  "x": 39.9,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 9.7
                            },
                            "o1": {
                                  "x": 51.2,
                                  "y": 17.9
                            },
                            "o2": {
                                  "x": 71.1,
                                  "y": 14.6
                            },
                            "o3": {
                                  "x": 42,
                                  "y": 25
                            },
                            "o4": {
                                  "x": 56,
                                  "y": 29
                            }
                      },
                      "ball": {
                            "x": 62.7,
                            "y": 20.2,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 59,
                                              "y": 19
                                        },
                                        {
                                              "x": 44,
                                              "y": 16
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 26
                            },
                            "t3": {
                                  "x": 61.5,
                                  "y": 20.9
                            },
                            "t4": {
                                  "x": 39.7,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53.2,
                                  "y": 9.4
                            },
                            "o1": {
                                  "x": 51,
                                  "y": 17.5
                            },
                            "o2": {
                                  "x": 71.2,
                                  "y": 16.5
                            },
                            "o3": {
                                  "x": 42,
                                  "y": 24.2
                            },
                            "o4": {
                                  "x": 55.9,
                                  "y": 28.1
                            }
                      },
                      "ball": {
                            "x": 39.7,
                            "y": 16,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 42,
                                              "y": 13
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 52
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 26
                            },
                            "t3": {
                                  "x": 60.5,
                                  "y": 19.7
                            },
                            "t4": {
                                  "x": 40,
                                  "y": 13.3
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55.2,
                                  "y": 10.7
                            },
                            "o1": {
                                  "x": 49.2,
                                  "y": 18.2
                            },
                            "o2": {
                                  "x": 70.4,
                                  "y": 15.4
                            },
                            "o3": {
                                  "x": 40.8,
                                  "y": 23.7
                            },
                            "o4": {
                                  "x": 55,
                                  "y": 27
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-switch-lanes",
    category: "match",
    squadFormat: "5v5",
    difficulty: "medium",
    standard: "UEFA Positional",
    title: "5v5 Switch Play Across 3 Lanes",
    tag: "5v5 • 5 Steps",
    desc: "Escape a crowded left wing by bouncing back to the pivot, switching to the wide-open right winger, squaring, and scoring.",
    cue: "Crowded wing? Bounce to the middle and switch sides!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 17.8,
                                  "y": 52.2
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 52
                            },
                            "t4": {
                                  "x": 49.4,
                                  "y": 34.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 25,
                                  "y": 37.5
                            },
                            "o2": {
                                  "x": 42,
                                  "y": 46
                            },
                            "o3": {
                                  "x": 24.8,
                                  "y": 45.7
                            },
                            "o4": {
                                  "x": 57.8,
                                  "y": 28.8
                            }
                      },
                      "ball": {
                            "x": 17.8,
                            "y": 52.2,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 68,
                                  "y1": 22,
                                  "x2": 92,
                                  "y2": 56
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 21,
                                              "y": 55
                                        },
                                        {
                                              "x": 46,
                                              "y": 66
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 20.8,
                                  "y": 48
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 49.3,
                                  "y": 30.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 36
                            },
                            "o2": {
                                  "x": 46,
                                  "y": 48
                            },
                            "o3": {
                                  "x": 32.3,
                                  "y": 48
                            },
                            "o4": {
                                  "x": 60.1,
                                  "y": 27.5
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 66,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 42
                                        },
                                        {
                                              "x": 78,
                                              "y": 26
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 54,
                                              "y": 63
                                        },
                                        {
                                              "x": 78,
                                              "y": 28
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 52,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 25.3,
                                  "y": 41.8
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 26
                            },
                            "t4": {
                                  "x": 52,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 30
                            },
                            "o2": {
                                  "x": 52,
                                  "y": 40
                            },
                            "o3": {
                                  "x": 36.1,
                                  "y": 44.5
                            },
                            "o4": {
                                  "x": 66,
                                  "y": 26
                            }
                      },
                      "ball": {
                            "x": 78,
                            "y": 26,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 22
                                        },
                                        {
                                              "x": 54,
                                              "y": 19
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 74,
                                              "y": 25
                                        },
                                        {
                                              "x": 56,
                                              "y": 19
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 27.6,
                                  "y": 37.8
                            },
                            "t3": {
                                  "x": 76.9,
                                  "y": 24
                            },
                            "t4": {
                                  "x": 54,
                                  "y": 19
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 40,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 56,
                                  "y": 36
                            },
                            "o3": {
                                  "x": 37.1,
                                  "y": 42.5
                            },
                            "o4": {
                                  "x": 65.4,
                                  "y": 24
                            }
                      },
                      "ball": {
                            "x": 54,
                            "y": 19,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 54,
                                              "y": 16
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 29.6,
                                  "y": 35.8
                            },
                            "t3": {
                                  "x": 74.4,
                                  "y": 22
                            },
                            "t4": {
                                  "x": 53.9,
                                  "y": 17
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 42,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 56,
                                  "y": 32
                            },
                            "o3": {
                                  "x": 39.1,
                                  "y": 40.5
                            },
                            "o4": {
                                  "x": 62.9,
                                  "y": 22.1
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-give-go-wall",
    category: "match",
    squadFormat: "5v5",
    difficulty: "medium",
    standard: "Ajax DNA",
    title: "5v5 Central Wall Pass (Give & Go 1-2)",
    tag: "5v5 • 5 Steps",
    desc: "Pass into the striker’s feet, sprint past your marker for the 1-touch return, drive into the box, and score.",
    cue: "Pass and sprint — never stand and watch your pass!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 24,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 56
                            },
                            "t4": {
                                  "x": 49.9,
                                  "y": 42.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 48
                            },
                            "o4": {
                                  "x": 52.6,
                                  "y": 34.4
                            }
                      },
                      "ball": {
                            "x": 24,
                            "y": 58,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 28,
                                              "y": 56
                                        },
                                        {
                                              "x": 47,
                                              "y": 44
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 58
                                        },
                                        {
                                              "x": 24,
                                              "y": 38
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 24,
                                  "y": 38
                            },
                            "t3": {
                                  "x": 76,
                                  "y": 46
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 43.1
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 34.9
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 43.1,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 24,
                                  "y1": 18,
                                  "x2": 44,
                                  "y2": 30
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 38
                                        },
                                        {
                                              "x": 33.2,
                                              "y": 24.9
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 40
                                        },
                                        {
                                              "x": 34,
                                              "y": 25
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 65
                            },
                            "t2": {
                                  "x": 33.2,
                                  "y": 24.9
                            },
                            "t3": {
                                  "x": 70.6,
                                  "y": 30.4
                            },
                            "t4": {
                                  "x": 49.9,
                                  "y": 39.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44.7,
                                  "y": 25.3
                            },
                            "o2": {
                                  "x": 62.2,
                                  "y": 24.8
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 52.2,
                                  "y": 31.6
                            }
                      },
                      "ball": {
                            "x": 33.2,
                            "y": 24.9,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 33.2,
                                              "y": 24.9
                                        },
                                        {
                                              "x": 37.9,
                                              "y": 18.7
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 37.9,
                                  "y": 18.7
                            },
                            "t3": {
                                  "x": 69.5,
                                  "y": 24
                            },
                            "t4": {
                                  "x": 49.9,
                                  "y": 36.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 47,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 39.9,
                                  "y": 26.8
                            },
                            "o2": {
                                  "x": 58.3,
                                  "y": 22.3
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 35
                            },
                            "o4": {
                                  "x": 51.1,
                                  "y": 28.7
                            }
                      },
                      "ball": {
                            "x": 37.9,
                            "y": 18.7,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 16
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 37.5,
                                  "y": 17.5
                            },
                            "t3": {
                                  "x": 67.4,
                                  "y": 22
                            },
                            "t4": {
                                  "x": 49.9,
                                  "y": 35
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44.2,
                                  "y": 10.8
                            },
                            "o1": {
                                  "x": 40,
                                  "y": 25.5
                            },
                            "o2": {
                                  "x": 56.5,
                                  "y": 19.5
                            },
                            "o3": {
                                  "x": 35.9,
                                  "y": 33.2
                            },
                            "o4": {
                                  "x": 51.4,
                                  "y": 26.9
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-diamond-press",
    category: "match",
    squadFormat: "5v5",
    difficulty: "medium",
    standard: "FA Out-of-Possession",
    title: "5v5 Curved Press & Touchline Trap",
    tag: "5v5 • 5 Steps",
    desc: "Opponent plays wide; striker curves press to block GK return, winger jumps the sideline pass, feeds striker, and scores.",
    cue: "Curve your press — lock them onto one touchline!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
          "retreatLine": true,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 26,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 74,
                                  "y": 54
                            },
                            "t4": {
                                  "x": 49.2,
                                  "y": 44.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 76,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 22,
                                  "y": 43
                            },
                            "o4": {
                                  "x": 60.5,
                                  "y": 46.3
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 11,
                            "attachedTo": "o0"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "o0",
                                  "toId": "o1",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 13
                                        },
                                        {
                                              "x": 28,
                                              "y": 22
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 26,
                                  "y": 52
                            },
                            "t3": {
                                  "x": 70.3,
                                  "y": 50.1
                            },
                            "t4": {
                                  "x": 48.7,
                                  "y": 44.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 76,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 22,
                                  "y": 43
                            },
                            "o4": {
                                  "x": 60,
                                  "y": 46.5
                            }
                      },
                      "ball": {
                            "x": 24,
                            "y": 24,
                            "attachedTo": "o1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48.7,
                                              "y": 44.8
                                        },
                                        {
                                              "x": 42,
                                              "y": 28
                                        },
                                        {
                                              "x": 32,
                                              "y": 25
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 26,
                                              "y": 52
                                        },
                                        {
                                              "x": 21.9,
                                              "y": 38.8
                                        }
                                  ]
                            },
                            {
                                  "type": "zone",
                                  "x1": 10,
                                  "y1": 20,
                                  "x2": 34,
                                  "y2": 46
                            },
                            {
                                  "type": "pass",
                                  "fromId": "o1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 28
                                        },
                                        {
                                              "x": 22,
                                              "y": 39
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 87
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 21.9,
                                  "y": 38.8
                            },
                            "t3": {
                                  "x": 64.3,
                                  "y": 43.9
                            },
                            "t4": {
                                  "x": 32,
                                  "y": 25
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 20,
                                  "y": 23
                            },
                            "o2": {
                                  "x": 72,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 24.6,
                                  "y": 46.8
                            },
                            "o4": {
                                  "x": 53.2,
                                  "y": 46.2
                            }
                      },
                      "ball": {
                            "x": 21.9,
                            "y": 38.8,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 32,
                                              "y": 25
                                        },
                                        {
                                              "x": 46,
                                              "y": 20
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 25,
                                              "y": 36
                                        },
                                        {
                                              "x": 46,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 25.9,
                                  "y": 33.6
                            },
                            "t3": {
                                  "x": 62,
                                  "y": 30
                            },
                            "t4": {
                                  "x": 46,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 21.9
                            },
                            "o3": {
                                  "x": 28.6,
                                  "y": 41.6
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 40
                            }
                      },
                      "ball": {
                            "x": 46,
                            "y": 20,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 17
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 27.9,
                                  "y": 31.6
                            },
                            "t3": {
                                  "x": 59.9,
                                  "y": 26.4
                            },
                            "t4": {
                                  "x": 46,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 62.6,
                                  "y": 18.4
                            },
                            "o3": {
                                  "x": 30.6,
                                  "y": 39.6
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 38
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-diamond-rotation",
    category: "match",
    squadFormat: "5v5",
    difficulty: "advanced",
    standard: "Total Football",
    title: "5v5 Fluid 1-2-1 Diamond Rotation",
    tag: "5v5 • 5 Steps",
    desc: "Left winger pushes high, striker drops into the pocket to link play, right winger breaks in, and squares for the tap-in.",
    cue: "One moves out, another fills the open space!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 73
                            },
                            "t2": {
                                  "x": 22,
                                  "y": 56
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 56
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 36
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 48
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 73,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 22,
                                              "y": 56
                                        },
                                        {
                                              "x": 25.6,
                                              "y": 28.4
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 36
                                        },
                                        {
                                              "x": 50,
                                              "y": 53
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 69
                                        },
                                        {
                                              "x": 50,
                                              "y": 53
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 25.6,
                                  "y": 28.4
                            },
                            "t3": {
                                  "x": 76.3,
                                  "y": 43.9
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 53
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32.3,
                                  "y": 21.7
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 36,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 65.2,
                                  "y": 46.2
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 53,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 76.3,
                                              "y": 43.9
                                        },
                                        {
                                              "x": 63.8,
                                              "y": 21.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 50
                                        },
                                        {
                                              "x": 64,
                                              "y": 22
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 30.9,
                                  "y": 22
                            },
                            "t3": {
                                  "x": 63.8,
                                  "y": 21.8
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 44
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 42.4,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 70.5,
                                  "y": 28.5
                            },
                            "o3": {
                                  "x": 40,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 40
                            }
                      },
                      "ball": {
                            "x": 63.8,
                            "y": 21.8,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 30.9,
                                              "y": 22
                                        },
                                        {
                                              "x": 38.2,
                                              "y": 17.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 60,
                                              "y": 21
                                        },
                                        {
                                              "x": 38,
                                              "y": 18
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 40,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 38.2,
                                  "y": 17.8
                            },
                            "t3": {
                                  "x": 61.6,
                                  "y": 19.6
                            },
                            "t4": {
                                  "x": 50.1,
                                  "y": 40.3
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 31.5,
                                  "y": 24.5
                            },
                            "o2": {
                                  "x": 68.3,
                                  "y": 26.3
                            },
                            "o3": {
                                  "x": 40.8,
                                  "y": 35.4
                            },
                            "o4": {
                                  "x": 61,
                                  "y": 37.8
                            }
                      },
                      "ball": {
                            "x": 38.2,
                            "y": 17.8,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 15
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 40,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 40.3,
                                  "y": 15.6
                            },
                            "t3": {
                                  "x": 59.3,
                                  "y": 18.6
                            },
                            "t4": {
                                  "x": 49.7,
                                  "y": 38.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 35.3,
                                  "y": 23
                            },
                            "o2": {
                                  "x": 68.7,
                                  "y": 23.3
                            },
                            "o3": {
                                  "x": 40.7,
                                  "y": 33.3
                            },
                            "o4": {
                                  "x": 60.3,
                                  "y": 35.3
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-5v5-gk-counter",
    category: "match",
    squadFormat: "5v5",
    difficulty: "advanced",
    standard: "UEFA Fast Break",
    title: "5v5 GK Quick Roll & Fast Break",
    tag: "5v5 • 5 Steps",
    desc: "Goalkeeper claims a shot, rolls instantly to the right defender, who carries into space and hits a diagonal pass to score.",
    cue: "Keeper scan up — roll wide fast and sprint!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "2-2",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 26,
                                  "y": 52
                            },
                            "t4": {
                                  "x": 64,
                                  "y": 50
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 38
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 41.9
                            },
                            "o3": {
                                  "x": 42,
                                  "y": 64
                            },
                            "o4": {
                                  "x": 58,
                                  "y": 68
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 88,
                            "attachedTo": "t0"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 54,
                                              "y": 86
                                        },
                                        {
                                              "x": 78,
                                              "y": 71
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 87
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 28,
                                  "y": 46
                            },
                            "t4": {
                                  "x": 63.9,
                                  "y": 44.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 34
                            },
                            "o2": {
                                  "x": 66.6,
                                  "y": 36.4
                            },
                            "o3": {
                                  "x": 44,
                                  "y": 58
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 62
                            }
                      },
                      "ball": {
                            "x": 80,
                            "y": 70,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 70
                                        },
                                        {
                                              "x": 80,
                                              "y": 48
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 28,
                                              "y": 46
                                        },
                                        {
                                              "x": 38,
                                              "y": 23.6
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 63.9,
                                              "y": 44.4
                                        },
                                        {
                                              "x": 60,
                                              "y": 24
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 32,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 48
                            },
                            "t3": {
                                  "x": 38,
                                  "y": 23.6
                            },
                            "t4": {
                                  "x": 60,
                                  "y": 24
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 31.9
                            },
                            "o2": {
                                  "x": 62,
                                  "y": 32.1
                            },
                            "o3": {
                                  "x": 46,
                                  "y": 50
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 52
                            }
                      },
                      "ball": {
                            "x": 80,
                            "y": 48,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 38,
                                              "y": 23.6
                                        },
                                        {
                                              "x": 40.1,
                                              "y": 18.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 45
                                        },
                                        {
                                              "x": 40,
                                              "y": 19
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 42
                            },
                            "t3": {
                                  "x": 40.1,
                                  "y": 18.8
                            },
                            "t4": {
                                  "x": 60,
                                  "y": 19.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 34.4,
                                  "y": 25.9
                            },
                            "o2": {
                                  "x": 60,
                                  "y": 28.2
                            },
                            "o3": {
                                  "x": 46,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 40.1,
                            "y": 18.8,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 43,
                                              "y": 16
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 86
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 40
                            },
                            "t3": {
                                  "x": 42.1,
                                  "y": 18.3
                            },
                            "t4": {
                                  "x": 58,
                                  "y": 17.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44.3,
                                  "y": 10.2
                            },
                            "o1": {
                                  "x": 35.3,
                                  "y": 24.9
                            },
                            "o2": {
                                  "x": 58,
                                  "y": 25.9
                            },
                            "o3": {
                                  "x": 46,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 60,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-6v6-gk-triangle",
    category: "match",
    squadFormat: "6v6",
    difficulty: "easy",
    standard: "FA Build-Up",
    title: "6v6 Goal-Kick Wide Triangle",
    tag: "6v6 • 6 Steps",
    desc: "GK plays to split left back, inside to central pivot, out to left winger, low cross to striker, and finish!",
    cue: "Make a triangle wide — defender, pivot, winger!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "2-2-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 78
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 78
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 64
                            },
                            "t4": {
                                  "x": 18,
                                  "y": 48
                            },
                            "t5": {
                                  "x": 54,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 54
                            },
                            "o4": {
                                  "x": 66,
                                  "y": 50
                            },
                            "o5": {
                                  "x": 46,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 90,
                            "attachedTo": "t0"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 88
                                        },
                                        {
                                              "x": 21,
                                              "y": 79
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 76
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 75
                            },
                            "t3": {
                                  "x": 40,
                                  "y": 62
                            },
                            "t4": {
                                  "x": 18,
                                  "y": 44
                            },
                            "t5": {
                                  "x": 52,
                                  "y": 30
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 64
                            },
                            "o4": {
                                  "x": 66,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 46,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 18,
                            "y": 76,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 62
                                        },
                                        {
                                              "x": 36,
                                              "y": 58
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 21,
                                              "y": 73
                                        },
                                        {
                                              "x": 36,
                                              "y": 58
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 36,
                                  "y": 58
                            },
                            "t4": {
                                  "x": 18,
                                  "y": 34
                            },
                            "t5": {
                                  "x": 52,
                                  "y": 25
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 22,
                                  "y": 61.9
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 46
                            },
                            "o5": {
                                  "x": 42,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 36,
                            "y": 58,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 34
                                        },
                                        {
                                              "x": 19.8,
                                              "y": 22
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 33,
                                              "y": 55
                                        },
                                        {
                                              "x": 20,
                                              "y": 22
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 24,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 40,
                                  "y": 50
                            },
                            "t4": {
                                  "x": 19.8,
                                  "y": 22
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 31.3,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 62,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 48
                            },
                            "o4": {
                                  "x": 60,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 38
                            }
                      },
                      "ball": {
                            "x": 19.8,
                            "y": 22,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 20
                                        },
                                        {
                                              "x": 49.9,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 21
                                        },
                                        {
                                              "x": 50,
                                              "y": 18
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 64
                            },
                            "t3": {
                                  "x": 42,
                                  "y": 46
                            },
                            "t4": {
                                  "x": 21.6,
                                  "y": 20
                            },
                            "t5": {
                                  "x": 49.9,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 9.9
                            },
                            "o1": {
                                  "x": 33.1,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 60.5,
                                  "y": 21.2
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 58,
                                  "y": 40
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 36
                            }
                      },
                      "ball": {
                            "x": 49.9,
                            "y": 18,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 51,
                                              "y": 15
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 62
                            },
                            "t3": {
                                  "x": 44,
                                  "y": 44
                            },
                            "t4": {
                                  "x": 22,
                                  "y": 19
                            },
                            "t5": {
                                  "x": 51.8,
                                  "y": 16.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 43.8,
                                  "y": 10.9
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 19
                            },
                            "o2": {
                                  "x": 61.9,
                                  "y": 20.8
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 58,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-6v6-corner-screen",
    category: "match",
    squadFormat: "6v6",
    difficulty: "easy",
    standard: "UEFA Set-Piece",
    title: "6v6 Near-Post Decoy & Cut-Back Corner",
    tag: "6v6 • 4 Steps",
    desc: "Striker sprints to the near post to drag defenders forward, vacating the penalty-box edge for a clean low cut-back.",
    cue: "One sprints near post — second arrives on the spot!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "2-1-2",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 62
                            },
                            "t3": {
                                  "x": 52.2,
                                  "y": 34.4
                            },
                            "t4": {
                                  "x": 64.7,
                                  "y": 22.2
                            },
                            "t5": {
                                  "x": 92,
                                  "y": 8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49.7,
                                  "y": 9.8
                            },
                            "o1": {
                                  "x": 58,
                                  "y": 15.5
                            },
                            "o2": {
                                  "x": 44,
                                  "y": 18
                            },
                            "o3": {
                                  "x": 63.9,
                                  "y": 30.4
                            },
                            "o4": {
                                  "x": 47.3,
                                  "y": 26.9
                            },
                            "o5": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 92,
                            "y": 8,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 64.7,
                                              "y": 22.2
                                        },
                                        {
                                              "x": 63.9,
                                              "y": 10.6
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52.2,
                                              "y": 34.4
                                        },
                                        {
                                              "x": 55.1,
                                              "y": 24.6
                                        }
                                  ]
                            },
                            {
                                  "type": "zone",
                                  "x1": 46,
                                  "y1": 17,
                                  "x2": 62,
                                  "y2": 26
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 55.1,
                                  "y": 24.6
                            },
                            "t4": {
                                  "x": 63.9,
                                  "y": 10.6
                            },
                            "t5": {
                                  "x": 90,
                                  "y": 10
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51.3,
                                  "y": 8.6
                            },
                            "o1": {
                                  "x": 55.2,
                                  "y": 16.4
                            },
                            "o2": {
                                  "x": 43.2,
                                  "y": 15.9
                            },
                            "o3": {
                                  "x": 66,
                                  "y": 19.2
                            },
                            "o4": {
                                  "x": 43.6,
                                  "y": 24.6
                            },
                            "o5": {
                                  "x": 50,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 90,
                            "y": 10,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 87,
                                              "y": 11
                                        },
                                        {
                                              "x": 54,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 53.7,
                                  "y": 22.6
                            },
                            "t4": {
                                  "x": 66.8,
                                  "y": 11.4
                            },
                            "t5": {
                                  "x": 84,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51.9,
                                  "y": 7.1
                            },
                            "o1": {
                                  "x": 56.2,
                                  "y": 14.7
                            },
                            "o2": {
                                  "x": 43.1,
                                  "y": 15.6
                            },
                            "o3": {
                                  "x": 65.4,
                                  "y": 20.1
                            },
                            "o4": {
                                  "x": 42.4,
                                  "y": 24.1
                            },
                            "o5": {
                                  "x": 50,
                                  "y": 42
                            }
                      },
                      "ball": {
                            "x": 53.7,
                            "y": 22.6,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 17
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 49.9,
                                  "y": 20.3
                            },
                            "t4": {
                                  "x": 69.1,
                                  "y": 11.3
                            },
                            "t5": {
                                  "x": 82,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53.4,
                                  "y": 9.1
                            },
                            "o1": {
                                  "x": 59.7,
                                  "y": 16
                            },
                            "o2": {
                                  "x": 42.4,
                                  "y": 14.1
                            },
                            "o3": {
                                  "x": 65.1,
                                  "y": 23.2
                            },
                            "o4": {
                                  "x": 39.3,
                                  "y": 23.4
                            },
                            "o5": {
                                  "x": 50,
                                  "y": 40
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-6v6-pivot-switch",
    category: "match",
    squadFormat: "6v6",
    difficulty: "medium",
    standard: "UEFA Positional",
    title: "6v6 2-2-1 Weak-Side Wing Switch",
    tag: "6v6 • 6 Steps",
    desc: "Recycle from crowded left wing to left CB, switch across to right CB, feed open right winger, square to striker, and score.",
    cue: "Two quick passes across the back unlock the wing!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "2-2-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 30,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 17.9,
                                  "y": 50.2
                            },
                            "t4": {
                                  "x": 84,
                                  "y": 48
                            },
                            "t5": {
                                  "x": 49.6,
                                  "y": 32.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 30
                            },
                            "o2": {
                                  "x": 59.1,
                                  "y": 27.5
                            },
                            "o3": {
                                  "x": 22.8,
                                  "y": 42.8
                            },
                            "o4": {
                                  "x": 44,
                                  "y": 46
                            },
                            "o5": {
                                  "x": 34,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 17.9,
                            "y": 50.2,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 70,
                                  "y1": 20,
                                  "x2": 92,
                                  "y2": 52
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 54
                                        },
                                        {
                                              "x": 29,
                                              "y": 69
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 30,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 18.8,
                                  "y": 46
                            },
                            "t4": {
                                  "x": 84,
                                  "y": 42
                            },
                            "t5": {
                                  "x": 49.6,
                                  "y": 28
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 61.1,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 30.3,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 46,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 36,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 30,
                            "y": 72,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 34,
                                              "y": 72
                                        },
                                        {
                                              "x": 64,
                                              "y": 68
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 84,
                                              "y": 42
                                        },
                                        {
                                              "x": 82,
                                              "y": 32
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 23,
                                  "y": 41.7
                            },
                            "t4": {
                                  "x": 82,
                                  "y": 32
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 24
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 33.4,
                                  "y": 45.2
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 42,
                                  "y": 54
                            }
                      },
                      "ball": {
                            "x": 68,
                            "y": 66,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 32
                                        },
                                        {
                                              "x": 76.3,
                                              "y": 21.9
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 70,
                                              "y": 62
                                        },
                                        {
                                              "x": 76,
                                              "y": 22
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 27,
                                  "y": 37.7
                            },
                            "t4": {
                                  "x": 76.3,
                                  "y": 21.9
                            },
                            "t5": {
                                  "x": 48,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 65.5,
                                  "y": 24.6
                            },
                            "o3": {
                                  "x": 37.4,
                                  "y": 41.2
                            },
                            "o4": {
                                  "x": 56,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 50
                            }
                      },
                      "ball": {
                            "x": 76.3,
                            "y": 21.9,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 20
                                        },
                                        {
                                              "x": 48.2,
                                              "y": 17.9
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 72,
                                              "y": 21
                                        },
                                        {
                                              "x": 48,
                                              "y": 18
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 29,
                                  "y": 35.7
                            },
                            "t4": {
                                  "x": 74.7,
                                  "y": 19.8
                            },
                            "t5": {
                                  "x": 48.2,
                                  "y": 17.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 38.7,
                                  "y": 22.6
                            },
                            "o2": {
                                  "x": 63.9,
                                  "y": 22.5
                            },
                            "o3": {
                                  "x": 39.4,
                                  "y": 39.2
                            },
                            "o4": {
                                  "x": 56,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 46,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 48.2,
                            "y": 17.9,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 15
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 56
                            },
                            "t3": {
                                  "x": 31.3,
                                  "y": 33.6
                            },
                            "t4": {
                                  "x": 72.7,
                                  "y": 18.8
                            },
                            "t5": {
                                  "x": 47.1,
                                  "y": 16.7
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55.2,
                                  "y": 10.9
                            },
                            "o1": {
                                  "x": 38.3,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 61.9,
                                  "y": 21.5
                            },
                            "o3": {
                                  "x": 40.7,
                                  "y": 38.3
                            },
                            "o4": {
                                  "x": 56,
                                  "y": 34
                            },
                            "o5": {
                                  "x": 46,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-6v6-high-press",
    category: "match",
    squadFormat: "6v6",
    difficulty: "medium",
    standard: "FA Out-of-Possession",
    title: "6v6 2-1-2 Twin-Striker Press Trap",
    tag: "6v6 • 5 Steps",
    desc: "Opponent GK plays wide; forwards press outside-in to force a central turnover to your midfielder, who slips the striker.",
    cue: "Show them inside into our midfielder’s trap!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "2-1-2",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 32,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 48
                            },
                            "t4": {
                                  "x": 26,
                                  "y": 36
                            },
                            "t5": {
                                  "x": 74,
                                  "y": 36
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 74,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 50,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 30,
                                  "y": 56
                            },
                            "o5": {
                                  "x": 70,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 10,
                            "attachedTo": "o0"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "o0",
                                  "toId": "o1",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 12
                                        },
                                        {
                                              "x": 29,
                                              "y": 21
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 32,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 46.3
                            },
                            "t4": {
                                  "x": 24,
                                  "y": 34
                            },
                            "t5": {
                                  "x": 70,
                                  "y": 32
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 74,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 50,
                                  "y": 38.1
                            },
                            "o4": {
                                  "x": 30,
                                  "y": 56
                            },
                            "o5": {
                                  "x": 70,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 26,
                            "y": 22,
                            "attachedTo": "o1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 34
                                        },
                                        {
                                              "x": 24,
                                              "y": 24.4
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 46.3
                                        },
                                        {
                                              "x": 47.8,
                                              "y": 36.8
                                        }
                                  ]
                            },
                            {
                                  "type": "zone",
                                  "x1": 38,
                                  "y1": 30,
                                  "x2": 60,
                                  "y2": 44
                            },
                            {
                                  "type": "pass",
                                  "fromId": "o1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 29,
                                              "y": 24
                                        },
                                        {
                                              "x": 48,
                                              "y": 37
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 47.8,
                                  "y": 36.8
                            },
                            "t4": {
                                  "x": 24,
                                  "y": 24.4
                            },
                            "t5": {
                                  "x": 63.3,
                                  "y": 26.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 16.1
                            },
                            "o2": {
                                  "x": 74.1,
                                  "y": 23.5
                            },
                            "o3": {
                                  "x": 54.5,
                                  "y": 43.5
                            },
                            "o4": {
                                  "x": 32,
                                  "y": 54
                            },
                            "o5": {
                                  "x": 68,
                                  "y": 54
                            }
                      },
                      "ball": {
                            "x": 47.8,
                            "y": 36.8,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 63.3,
                                              "y": 26.2
                                        },
                                        {
                                              "x": 56,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 34
                                        },
                                        {
                                              "x": 56,
                                              "y": 18
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 64
                            },
                            "t3": {
                                  "x": 47.8,
                                  "y": 31.7
                            },
                            "t4": {
                                  "x": 32.4,
                                  "y": 22.4
                            },
                            "t5": {
                                  "x": 56,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 25.7,
                                  "y": 15.7
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 51.7,
                                  "y": 39.4
                            },
                            "o4": {
                                  "x": 34,
                                  "y": 50
                            },
                            "o5": {
                                  "x": 66,
                                  "y": 50
                            }
                      },
                      "ball": {
                            "x": 56,
                            "y": 18,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 56,
                                              "y": 15
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 88
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 62
                            },
                            "t3": {
                                  "x": 47.8,
                                  "y": 29.7
                            },
                            "t4": {
                                  "x": 34.7,
                                  "y": 20.4
                            },
                            "t5": {
                                  "x": 55.6,
                                  "y": 15.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 25.3,
                                  "y": 15.7
                            },
                            "o2": {
                                  "x": 65.1,
                                  "y": 20.5
                            },
                            "o3": {
                                  "x": 51.7,
                                  "y": 37.4
                            },
                            "o4": {
                                  "x": 36,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 64,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-6v6-diamond",
    category: "match",
    squadFormat: "6v6",
    difficulty: "advanced",
    standard: "UEFA Tournament",
    title: "6v6 Wide Overlap & Cut-Back",
    tag: "6v6 • 6 Steps",
    desc: "Defender feeds left winger and overlaps outside while winger drives inside to pin marker, slips overlap, cuts back, and scores.",
    cue: "Dribble inside — overlapper shouts \"OVER!\" outside!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "1-3-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 42,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 24,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 54.2,
                                  "y": 58.4
                            },
                            "t4": {
                                  "x": 82,
                                  "y": 54
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 74,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 49.3,
                                  "y": 50.9
                            }
                      },
                      "ball": {
                            "x": 42,
                            "y": 74,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 39,
                                              "y": 71
                                        },
                                        {
                                              "x": 26,
                                              "y": 57
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 42,
                                              "y": 74
                                        },
                                        {
                                              "x": 16,
                                              "y": 60
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 16,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 24,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 52.2,
                                  "y": 56.4
                            },
                            "t4": {
                                  "x": 78.6,
                                  "y": 46.4
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 30
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 70.2,
                                  "y": 40.8
                            },
                            "o5": {
                                  "x": 47.3,
                                  "y": 48.9
                            }
                      },
                      "ball": {
                            "x": 24,
                            "y": 54,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 54
                                        },
                                        {
                                              "x": 34.1,
                                              "y": 40.1
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 16,
                                              "y": 60
                                        },
                                        {
                                              "x": 12,
                                              "y": 42
                                        },
                                        {
                                              "x": 14,
                                              "y": 28
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 14,
                                  "y": 28
                            },
                            "t2": {
                                  "x": 34.1,
                                  "y": 40.1
                            },
                            "t3": {
                                  "x": 52.2,
                                  "y": 52.4
                            },
                            "t4": {
                                  "x": 74.4,
                                  "y": 33.6
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 24
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 25
                            },
                            "o3": {
                                  "x": 30.3,
                                  "y": 32.4
                            },
                            "o4": {
                                  "x": 67.7,
                                  "y": 40.3
                            },
                            "o5": {
                                  "x": 47.3,
                                  "y": 44.9
                            }
                      },
                      "ball": {
                            "x": 34.1,
                            "y": 40.1,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 14,
                                              "y": 28
                                        },
                                        {
                                              "x": 14,
                                              "y": 20
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 30,
                                              "y": 38
                                        },
                                        {
                                              "x": 14,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 14,
                                  "y": 20
                            },
                            "t2": {
                                  "x": 36,
                                  "y": 36
                            },
                            "t3": {
                                  "x": 50.1,
                                  "y": 50.4
                            },
                            "t4": {
                                  "x": 69.2,
                                  "y": 24.4
                            },
                            "t5": {
                                  "x": 47.7,
                                  "y": 18.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 58.9,
                                  "y": 20.7
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 30
                            },
                            "o4": {
                                  "x": 66,
                                  "y": 34
                            },
                            "o5": {
                                  "x": 47.4,
                                  "y": 42.4
                            }
                      },
                      "ball": {
                            "x": 14,
                            "y": 20,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 20
                                        },
                                        {
                                              "x": 48,
                                              "y": 19
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 16,
                                  "y": 19
                            },
                            "t2": {
                                  "x": 38,
                                  "y": 34
                            },
                            "t3": {
                                  "x": 50.1,
                                  "y": 48.4
                            },
                            "t4": {
                                  "x": 69.2,
                                  "y": 22.5
                            },
                            "t5": {
                                  "x": 46.8,
                                  "y": 18.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 19
                            },
                            "o2": {
                                  "x": 58,
                                  "y": 20.6
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 29
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 33
                            },
                            "o5": {
                                  "x": 47.4,
                                  "y": 40.4
                            }
                      },
                      "ball": {
                            "x": 46.8,
                            "y": 18.8,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 16
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 19
                            },
                            "t2": {
                                  "x": 38,
                                  "y": 33
                            },
                            "t3": {
                                  "x": 50.1,
                                  "y": 46.4
                            },
                            "t4": {
                                  "x": 68.3,
                                  "y": 19.8
                            },
                            "t5": {
                                  "x": 48.6,
                                  "y": 18.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 43.8,
                                  "y": 10.7
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 19
                            },
                            "o2": {
                                  "x": 57.8,
                                  "y": 23.1
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 28
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 32
                            },
                            "o5": {
                                  "x": 47.4,
                                  "y": 38.4
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-6v6-third-man",
    category: "match",
    squadFormat: "6v6",
    difficulty: "advanced",
    standard: "La Masia 6v6",
    title: "6v6 Up-Back-Through Third Man",
    tag: "6v6 • 5 Steps",
    desc: "Play UP into the central striker, bounce BACK 1-touch to the midfielder, slide THROUGH to the winger, and finish.",
    cue: "Up to striker, back to mid, through to winger!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "1-3-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 46,
                                  "y": 75
                            },
                            "t2": {
                                  "x": 20,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 43.6,
                                  "y": 55.8
                            },
                            "t4": {
                                  "x": 82,
                                  "y": 52
                            },
                            "t5": {
                                  "x": 52,
                                  "y": 36
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 66,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 53.1,
                                  "y": 60.5
                            }
                      },
                      "ball": {
                            "x": 46,
                            "y": 75,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 36
                                        },
                                        {
                                              "x": 52,
                                              "y": 40
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 71
                                        },
                                        {
                                              "x": 52,
                                              "y": 40
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 46,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 22,
                                  "y": 48
                            },
                            "t3": {
                                  "x": 45.9,
                                  "y": 50.8
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 42
                            },
                            "t5": {
                                  "x": 52,
                                  "y": 40
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 42,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 62,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 50.3,
                                  "y": 58.5
                            }
                      },
                      "ball": {
                            "x": 52,
                            "y": 40,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 43
                                        },
                                        {
                                              "x": 46,
                                              "y": 50
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 42
                                        },
                                        {
                                              "x": 72,
                                              "y": 28
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 46,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 24,
                                  "y": 44
                            },
                            "t3": {
                                  "x": 45.9,
                                  "y": 49.8
                            },
                            "t4": {
                                  "x": 72,
                                  "y": 28
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 40,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 60,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 36,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 48.6,
                                  "y": 57.8
                            }
                      },
                      "ball": {
                            "x": 45.9,
                            "y": 49.8,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 56,
                                  "y1": 14,
                                  "x2": 74,
                                  "y2": 26
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 72,
                                              "y": 28
                                        },
                                        {
                                              "x": 64.2,
                                              "y": 19.7
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 49,
                                              "y": 47
                                        },
                                        {
                                              "x": 64,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 46,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 26,
                                  "y": 42
                            },
                            "t3": {
                                  "x": 46.9,
                                  "y": 47.7
                            },
                            "t4": {
                                  "x": 64.2,
                                  "y": 19.7
                            },
                            "t5": {
                                  "x": 49.4,
                                  "y": 30.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 40,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 60.2,
                                  "y": 27.4
                            },
                            "o3": {
                                  "x": 38,
                                  "y": 40
                            },
                            "o4": {
                                  "x": 62.1,
                                  "y": 35.5
                            },
                            "o5": {
                                  "x": 48.9,
                                  "y": 55.8
                            }
                      },
                      "ball": {
                            "x": 64.2,
                            "y": 19.7,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 61,
                                              "y": 17
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 89
                            },
                            "t1": {
                                  "x": 46,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 28,
                                  "y": 40
                            },
                            "t3": {
                                  "x": 48,
                                  "y": 43.8
                            },
                            "t4": {
                                  "x": 62.7,
                                  "y": 17.1
                            },
                            "t5": {
                                  "x": 49.1,
                                  "y": 28.5
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 39.6,
                                  "y": 23.8
                            },
                            "o2": {
                                  "x": 59.4,
                                  "y": 24.9
                            },
                            "o3": {
                                  "x": 39.9,
                                  "y": 37.9
                            },
                            "o4": {
                                  "x": 60.1,
                                  "y": 33.1
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 52
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-7v7-retreat-build",
    category: "match",
    squadFormat: "7v7",
    difficulty: "easy",
    standard: "FA 7v7 Build-Up",
    title: "7v7 Split CBs & Wing Progression",
    tag: "7v7 • 6 Steps",
    desc: "GK plays to split left CB, down the line to left winger, dribble to byline, low cross to striker, and finish!",
    cue: "Defenders split wide — build down the wing and cross!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 91
                            },
                            "t1": {
                                  "x": 22,
                                  "y": 78
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 78
                            },
                            "t3": {
                                  "x": 16,
                                  "y": 52
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 58.3
                            },
                            "t5": {
                                  "x": 84,
                                  "y": 52
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 52,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 74,
                                  "y": 24
                            },
                            "o4": {
                                  "x": 34,
                                  "y": 46
                            },
                            "o5": {
                                  "x": 66,
                                  "y": 46
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 50
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 91,
                            "attachedTo": "t0"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 89
                                        },
                                        {
                                              "x": 25,
                                              "y": 79
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 22,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 16,
                                  "y": 48
                            },
                            "t4": {
                                  "x": 48.2,
                                  "y": 53.6
                            },
                            "t5": {
                                  "x": 82,
                                  "y": 48
                            },
                            "t6": {
                                  "x": 49.9,
                                  "y": 30.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 52.6,
                                  "y": 22.4
                            },
                            "o3": {
                                  "x": 74,
                                  "y": 24
                            },
                            "o4": {
                                  "x": 30,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 66,
                                  "y": 46
                            },
                            "o6": {
                                  "x": 43.3,
                                  "y": 61.1
                            }
                      },
                      "ball": {
                            "x": 22,
                            "y": 74,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 16,
                                              "y": 48
                                        },
                                        {
                                              "x": 16,
                                              "y": 38
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 70
                                        },
                                        {
                                              "x": 16,
                                              "y": 38
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 24,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 16,
                                  "y": 38
                            },
                            "t4": {
                                  "x": 46.2,
                                  "y": 49.6
                            },
                            "t5": {
                                  "x": 78,
                                  "y": 38
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 25
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 8.6
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 50,
                                  "y": 16.8
                            },
                            "o3": {
                                  "x": 72,
                                  "y": 24
                            },
                            "o4": {
                                  "x": 28,
                                  "y": 46
                            },
                            "o5": {
                                  "x": 64,
                                  "y": 42
                            },
                            "o6": {
                                  "x": 41.3,
                                  "y": 57.1
                            }
                      },
                      "ball": {
                            "x": 16,
                            "y": 38,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 16,
                                              "y": 38
                                        },
                                        {
                                              "x": 17.8,
                                              "y": 20
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 25
                                        },
                                        {
                                              "x": 50.5,
                                              "y": 18.6
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 17.8,
                                  "y": 20
                            },
                            "t4": {
                                  "x": 46.1,
                                  "y": 43.6
                            },
                            "t5": {
                                  "x": 72.2,
                                  "y": 28.4
                            },
                            "t6": {
                                  "x": 50.5,
                                  "y": 18.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 29.3,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 42.7,
                                  "y": 24.6
                            },
                            "o3": {
                                  "x": 67.3,
                                  "y": 20.9
                            },
                            "o4": {
                                  "x": 30,
                                  "y": 40
                            },
                            "o5": {
                                  "x": 60,
                                  "y": 38
                            },
                            "o6": {
                                  "x": 43.4,
                                  "y": 51.6
                            }
                      },
                      "ball": {
                            "x": 17.8,
                            "y": 20,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 22,
                                              "y": 20
                                        },
                                        {
                                              "x": 50,
                                              "y": 19
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 19.5,
                                  "y": 19
                            },
                            "t4": {
                                  "x": 46,
                                  "y": 40
                            },
                            "t5": {
                                  "x": 70.5,
                                  "y": 24.4
                            },
                            "t6": {
                                  "x": 50.4,
                                  "y": 18.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30.9,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 41.2,
                                  "y": 23.7
                            },
                            "o3": {
                                  "x": 62.7,
                                  "y": 18.4
                            },
                            "o4": {
                                  "x": 32,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 58,
                                  "y": 36
                            },
                            "o6": {
                                  "x": 44,
                                  "y": 48.1
                            }
                      },
                      "ball": {
                            "x": 50.4,
                            "y": 18.8,
                            "attachedTo": "t6"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t6",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 51,
                                              "y": 16
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 60
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 20,
                                  "y": 19
                            },
                            "t4": {
                                  "x": 46,
                                  "y": 38
                            },
                            "t5": {
                                  "x": 69.5,
                                  "y": 22.9
                            },
                            "t6": {
                                  "x": 51.1,
                                  "y": 17.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 43.9,
                                  "y": 10.9
                            },
                            "o1": {
                                  "x": 31.7,
                                  "y": 18.9
                            },
                            "o2": {
                                  "x": 42.1,
                                  "y": 22.4
                            },
                            "o3": {
                                  "x": 62.6,
                                  "y": 16.3
                            },
                            "o4": {
                                  "x": 32,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 58,
                                  "y": 34
                            },
                            "o6": {
                                  "x": 44,
                                  "y": 46.1
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-7v7-sideline-12",
    category: "match",
    squadFormat: "7v7",
    difficulty: "easy",
    standard: "UEFA 7v7 Restart",
    title: "7v7 Sideline Bounce & Cut-Back",
    tag: "7v7 • 5 Steps",
    desc: "From a right-side restart, play inside to CM, bounce down the channel to RW, square to striker, and finish!",
    cue: "Bounce off the midfielder — sprint the open channel!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 91
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 92,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 22,
                                  "y": 48
                            },
                            "t4": {
                                  "x": 64.2,
                                  "y": 53.8
                            },
                            "t5": {
                                  "x": 80.2,
                                  "y": 37.8
                            },
                            "t6": {
                                  "x": 47.9,
                                  "y": 32.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 52.3,
                                  "y": 24.5
                            },
                            "o3": {
                                  "x": 74,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 40,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 73.5,
                                  "y": 44.5
                            },
                            "o6": {
                                  "x": 57.5,
                                  "y": 60.5
                            }
                      },
                      "ball": {
                            "x": 92,
                            "y": 54,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 88,
                                              "y": 54
                                        },
                                        {
                                              "x": 64,
                                              "y": 54
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80.2,
                                              "y": 37.8
                                        },
                                        {
                                              "x": 82.5,
                                              "y": 28.2
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 86,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 26,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 64.2,
                                  "y": 51.9
                            },
                            "t5": {
                                  "x": 82.5,
                                  "y": 28.2
                            },
                            "t6": {
                                  "x": 47.3,
                                  "y": 26.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 23
                            },
                            "o2": {
                                  "x": 56.7,
                                  "y": 21.7
                            },
                            "o3": {
                                  "x": 72.4,
                                  "y": 24.4
                            },
                            "o4": {
                                  "x": 44,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 70.8,
                                  "y": 45.2
                            },
                            "o6": {
                                  "x": 55.8,
                                  "y": 57.5
                            }
                      },
                      "ball": {
                            "x": 64.2,
                            "y": 51.9,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 82.5,
                                              "y": 28.2
                                        },
                                        {
                                              "x": 82.3,
                                              "y": 19.9
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 66,
                                              "y": 48
                                        },
                                        {
                                              "x": 82,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 46
                            },
                            "t3": {
                                  "x": 32,
                                  "y": 32
                            },
                            "t4": {
                                  "x": 61.6,
                                  "y": 46.2
                            },
                            "t5": {
                                  "x": 82.3,
                                  "y": 19.9
                            },
                            "t6": {
                                  "x": 47,
                                  "y": 19.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 58.2,
                                  "y": 21.7
                            },
                            "o3": {
                                  "x": 71.5,
                                  "y": 22.6
                            },
                            "o4": {
                                  "x": 46,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 70.1,
                                  "y": 40.6
                            },
                            "o6": {
                                  "x": 55.1,
                                  "y": 52.9
                            }
                      },
                      "ball": {
                            "x": 82.3,
                            "y": 19.9,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 19.8
                                        },
                                        {
                                              "x": 47.5,
                                              "y": 17.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 78,
                                              "y": 20
                                        },
                                        {
                                              "x": 48,
                                              "y": 18
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 44
                            },
                            "t3": {
                                  "x": 34,
                                  "y": 26.4
                            },
                            "t4": {
                                  "x": 61.6,
                                  "y": 44.2
                            },
                            "t5": {
                                  "x": 81,
                                  "y": 19.8
                            },
                            "t6": {
                                  "x": 47.5,
                                  "y": 17.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 18.1
                            },
                            "o2": {
                                  "x": 57.9,
                                  "y": 21.4
                            },
                            "o3": {
                                  "x": 69.8,
                                  "y": 21.7
                            },
                            "o4": {
                                  "x": 46,
                                  "y": 37
                            },
                            "o5": {
                                  "x": 70.1,
                                  "y": 38.6
                            },
                            "o6": {
                                  "x": 55.1,
                                  "y": 50.9
                            }
                      },
                      "ball": {
                            "x": 47.5,
                            "y": 17.8,
                            "attachedTo": "t6"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t6",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 15
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 42
                            },
                            "t3": {
                                  "x": 36,
                                  "y": 22.4
                            },
                            "t4": {
                                  "x": 59.6,
                                  "y": 42.2
                            },
                            "t5": {
                                  "x": 79,
                                  "y": 18.8
                            },
                            "t6": {
                                  "x": 46.5,
                                  "y": 16.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55.1,
                                  "y": 10.9
                            },
                            "o1": {
                                  "x": 35.5,
                                  "y": 14
                            },
                            "o2": {
                                  "x": 55.6,
                                  "y": 21.4
                            },
                            "o3": {
                                  "x": 67.8,
                                  "y": 20.7
                            },
                            "o4": {
                                  "x": 46,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 68.1,
                                  "y": 36.6
                            },
                            "o6": {
                                  "x": 53.1,
                                  "y": 48.9
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-7v7-switch-play",
    category: "match",
    squadFormat: "7v7",
    difficulty: "medium",
    standard: "UEFA Positional",
    title: "7v7 2-3-1 Midfield Switch of Play",
    tag: "7v7 • 5 Steps",
    desc: "Escape a crowded left flank via CM out to the wide-open right winger, drive diagonally into the box, and score.",
    cue: "Escape traffic — switch through midfield to the open wing!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 91
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 15.9,
                                  "y": 48.1
                            },
                            "t4": {
                                  "x": 48,
                                  "y": 56
                            },
                            "t5": {
                                  "x": 84,
                                  "y": 46
                            },
                            "t6": {
                                  "x": 50.2,
                                  "y": 32.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 22,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 43.5,
                                  "y": 25.5
                            },
                            "o3": {
                                  "x": 66,
                                  "y": 28
                            },
                            "o4": {
                                  "x": 22.6,
                                  "y": 41.4
                            },
                            "o5": {
                                  "x": 40,
                                  "y": 46
                            },
                            "o6": {
                                  "x": 32,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 15.9,
                            "y": 48.1,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 70,
                                  "y1": 18,
                                  "x2": 92,
                                  "y2": 50
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 50
                                        },
                                        {
                                              "x": 48,
                                              "y": 56
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 30,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 19.1,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 48.1,
                                  "y": 54
                            },
                            "t5": {
                                  "x": 82,
                                  "y": 38
                            },
                            "t6": {
                                  "x": 51.1,
                                  "y": 26
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 39.6,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 30.6,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 46,
                                  "y": 45.9
                            },
                            "o6": {
                                  "x": 37.1,
                                  "y": 56.2
                            }
                      },
                      "ball": {
                            "x": 48.1,
                            "y": 54,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 38
                                        },
                                        {
                                              "x": 80.1,
                                              "y": 30
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 51
                                        },
                                        {
                                              "x": 80,
                                              "y": 30
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 32,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 64
                            },
                            "t3": {
                                  "x": 23.3,
                                  "y": 37.8
                            },
                            "t4": {
                                  "x": 49.9,
                                  "y": 48.3
                            },
                            "t5": {
                                  "x": 80.1,
                                  "y": 30
                            },
                            "t6": {
                                  "x": 47.7,
                                  "y": 21.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 52.7,
                                  "y": 29
                            },
                            "o3": {
                                  "x": 71.4,
                                  "y": 24.6
                            },
                            "o4": {
                                  "x": 34.1,
                                  "y": 40.5
                            },
                            "o5": {
                                  "x": 52.6,
                                  "y": 40.3
                            },
                            "o6": {
                                  "x": 41.8,
                                  "y": 54.1
                            }
                      },
                      "ball": {
                            "x": 80.1,
                            "y": 30,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 80.1,
                                              "y": 30
                                        },
                                        {
                                              "x": 65.9,
                                              "y": 18.8
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 62
                            },
                            "t3": {
                                  "x": 25.6,
                                  "y": 33.8
                            },
                            "t4": {
                                  "x": 51.8,
                                  "y": 44.3
                            },
                            "t5": {
                                  "x": 65.9,
                                  "y": 18.8
                            },
                            "t6": {
                                  "x": 45.6,
                                  "y": 19.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 52.3,
                                  "y": 26.3
                            },
                            "o3": {
                                  "x": 71.6,
                                  "y": 25.9
                            },
                            "o4": {
                                  "x": 35.1,
                                  "y": 38.5
                            },
                            "o5": {
                                  "x": 55.7,
                                  "y": 36.6
                            },
                            "o6": {
                                  "x": 44,
                                  "y": 52
                            }
                      },
                      "ball": {
                            "x": 65.9,
                            "y": 18.8,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 63,
                                              "y": 16
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 27.6,
                                  "y": 31.8
                            },
                            "t4": {
                                  "x": 51.8,
                                  "y": 42.3
                            },
                            "t5": {
                                  "x": 63.7,
                                  "y": 16.6
                            },
                            "t6": {
                                  "x": 45.6,
                                  "y": 17.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 52.3,
                                  "y": 24.3
                            },
                            "o3": {
                                  "x": 69.4,
                                  "y": 23.7
                            },
                            "o4": {
                                  "x": 37.1,
                                  "y": 36.5
                            },
                            "o5": {
                                  "x": 55.7,
                                  "y": 34.6
                            },
                            "o6": {
                                  "x": 46,
                                  "y": 50
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-7v7-midblock-counter",
    category: "match",
    squadFormat: "7v7",
    difficulty: "medium",
    standard: "FA Compact Block",
    title: "7v7 3-2-1 Mid-Block Trap & Counter",
    tag: "7v7 • 5 Steps",
    desc: "Twin midfielders trap the central pass, release the striker into the left channel, square to the supporting CM, and score.",
    cue: "Stay compact in the middle — win it and break!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "3-2-1",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 91
                            },
                            "t1": {
                                  "x": 24,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 76,
                                  "y": 74
                            },
                            "t4": {
                                  "x": 38,
                                  "y": 56
                            },
                            "t5": {
                                  "x": 62,
                                  "y": 56
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 41.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 48
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 50
                            },
                            "o5": {
                                  "x": 78,
                                  "y": 48
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 66
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 50,
                            "attachedTo": "o4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 38,
                                              "y": 56
                                        },
                                        {
                                              "x": 47.6,
                                              "y": 49.8
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 62,
                                              "y": 56
                                        },
                                        {
                                              "x": 57.3,
                                              "y": 45.4
                                        }
                                  ]
                            },
                            {
                                  "type": "zone",
                                  "x1": 38,
                                  "y1": 44,
                                  "x2": 62,
                                  "y2": 58
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 74
                            },
                            "t3": {
                                  "x": 74,
                                  "y": 72
                            },
                            "t4": {
                                  "x": 47.6,
                                  "y": 49.8
                            },
                            "t5": {
                                  "x": 57.3,
                                  "y": 45.4
                            },
                            "t6": {
                                  "x": 42,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 48
                            },
                            "o4": {
                                  "x": 53.5,
                                  "y": 56.9
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 48
                            },
                            "o6": {
                                  "x": 49.7,
                                  "y": 64.7
                            }
                      },
                      "ball": {
                            "x": 47.6,
                            "y": 49.8,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 42,
                                              "y": 34
                                        },
                                        {
                                              "x": 36,
                                              "y": 24.2
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 57.3,
                                              "y": 45.4
                                        },
                                        {
                                              "x": 57.5,
                                              "y": 20.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 47
                                        },
                                        {
                                              "x": 36,
                                              "y": 24
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 72,
                                  "y": 68
                            },
                            "t4": {
                                  "x": 47.8,
                                  "y": 43.7
                            },
                            "t5": {
                                  "x": 57.5,
                                  "y": 20.8
                            },
                            "t6": {
                                  "x": 36,
                                  "y": 24.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 16
                            },
                            "o2": {
                                  "x": 67.6,
                                  "y": 24.6
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 51.7,
                                  "y": 51.4
                            },
                            "o5": {
                                  "x": 72,
                                  "y": 44
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 60
                            }
                      },
                      "ball": {
                            "x": 36,
                            "y": 24.2,
                            "attachedTo": "t6"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 57.5,
                                              "y": 20.8
                                        },
                                        {
                                              "x": 57.7,
                                              "y": 18.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t6",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 23
                                        },
                                        {
                                              "x": 58,
                                              "y": 19
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 72,
                                  "y": 66
                            },
                            "t4": {
                                  "x": 47.9,
                                  "y": 41.7
                            },
                            "t5": {
                                  "x": 57.7,
                                  "y": 18.8
                            },
                            "t6": {
                                  "x": 35.2,
                                  "y": 22.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44.8,
                                  "y": 17.9
                            },
                            "o2": {
                                  "x": 66.1,
                                  "y": 24.4
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 43
                            },
                            "o4": {
                                  "x": 51.1,
                                  "y": 49.6
                            },
                            "o5": {
                                  "x": 70,
                                  "y": 43
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 57.7,
                            "y": 18.8,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 57,
                                              "y": 16
                                        },
                                        {
                                              "x": 55,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 30,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 70,
                                  "y": 64
                            },
                            "t4": {
                                  "x": 47.9,
                                  "y": 39.6
                            },
                            "t5": {
                                  "x": 57.9,
                                  "y": 16.3
                            },
                            "t6": {
                                  "x": 35.8,
                                  "y": 20.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 43.8,
                                  "y": 10.4
                            },
                            "o1": {
                                  "x": 46.8,
                                  "y": 18.3
                            },
                            "o2": {
                                  "x": 63.4,
                                  "y": 23.5
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 50.6,
                                  "y": 47.6
                            },
                            "o5": {
                                  "x": 70,
                                  "y": 42
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-la-masia-third-man",
    category: "match",
    squadFormat: "7v7",
    difficulty: "advanced",
    standard: "La Masia DNA",
    title: "7v7 Third-Man: Up, Back & Through",
    tag: "7v7 • 5 Steps",
    desc: "Play UP to the dropping striker, lay BACK 1-touch to midfield, slip THROUGH to the blind-side winger, and score.",
    cue: "Up to striker, bounce back, slip the runner!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 91
                            },
                            "t1": {
                                  "x": 32,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 18,
                                  "y": 54
                            },
                            "t4": {
                                  "x": 42,
                                  "y": 55
                            },
                            "t5": {
                                  "x": 82,
                                  "y": 52
                            },
                            "t6": {
                                  "x": 52,
                                  "y": 36
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 52,
                                  "y": 25
                            },
                            "o3": {
                                  "x": 74,
                                  "y": 25
                            },
                            "o4": {
                                  "x": 34,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 64,
                                  "y": 42
                            },
                            "o6": {
                                  "x": 56,
                                  "y": 60
                            }
                      },
                      "ball": {
                            "x": 32,
                            "y": 74,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 36
                                        },
                                        {
                                              "x": 51.9,
                                              "y": 40
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 34,
                                              "y": 70
                                        },
                                        {
                                              "x": 52,
                                              "y": 40
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 91
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 20,
                                  "y": 48
                            },
                            "t4": {
                                  "x": 44,
                                  "y": 52
                            },
                            "t5": {
                                  "x": 80,
                                  "y": 42
                            },
                            "t6": {
                                  "x": 51.9,
                                  "y": 40
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 52,
                                  "y": 30
                            },
                            "o3": {
                                  "x": 74,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 38,
                                  "y": 41
                            },
                            "o5": {
                                  "x": 62.9,
                                  "y": 42.2
                            },
                            "o6": {
                                  "x": 54,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 51.9,
                            "y": 40,
                            "attachedTo": "t6"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t6",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 43
                                        },
                                        {
                                              "x": 46,
                                              "y": 50
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 42
                                        },
                                        {
                                              "x": 74.1,
                                              "y": 30.4
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 35,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 65,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 22,
                                  "y": 44
                            },
                            "t4": {
                                  "x": 45.9,
                                  "y": 49.8
                            },
                            "t5": {
                                  "x": 74.1,
                                  "y": 30.4
                            },
                            "t6": {
                                  "x": 49.9,
                                  "y": 34.3
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 53.1,
                                  "y": 26.4
                            },
                            "o3": {
                                  "x": 72.5,
                                  "y": 22.2
                            },
                            "o4": {
                                  "x": 40,
                                  "y": 40
                            },
                            "o5": {
                                  "x": 60,
                                  "y": 40
                            },
                            "o6": {
                                  "x": 50.8,
                                  "y": 57.2
                            }
                      },
                      "ball": {
                            "x": 45.9,
                            "y": 49.8,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 58,
                                  "y1": 14,
                                  "x2": 76,
                                  "y2": 26
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 74.1,
                                              "y": 30.4
                                        },
                                        {
                                              "x": 65.7,
                                              "y": 19.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 49,
                                              "y": 47
                                        },
                                        {
                                              "x": 66,
                                              "y": 20
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 24,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 47,
                                  "y": 47.7
                            },
                            "t5": {
                                  "x": 65.7,
                                  "y": 19.8
                            },
                            "t6": {
                                  "x": 47.3,
                                  "y": 30.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 23
                            },
                            "o2": {
                                  "x": 56.7,
                                  "y": 25.7
                            },
                            "o3": {
                                  "x": 74.1,
                                  "y": 25.4
                            },
                            "o4": {
                                  "x": 42,
                                  "y": 40
                            },
                            "o5": {
                                  "x": 58,
                                  "y": 38
                            },
                            "o6": {
                                  "x": 45.7,
                                  "y": 55.9
                            }
                      },
                      "ball": {
                            "x": 65.7,
                            "y": 19.8,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 63,
                                              "y": 17
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 26,
                                  "y": 38
                            },
                            "t4": {
                                  "x": 48.2,
                                  "y": 45.7
                            },
                            "t5": {
                                  "x": 63.8,
                                  "y": 16.8
                            },
                            "t6": {
                                  "x": 46.1,
                                  "y": 26.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 21
                            },
                            "o2": {
                                  "x": 56.3,
                                  "y": 23
                            },
                            "o3": {
                                  "x": 71.5,
                                  "y": 22.9
                            },
                            "o4": {
                                  "x": 44,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 58,
                                  "y": 34
                            },
                            "o6": {
                                  "x": 44.3,
                                  "y": 53.4
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-7v7-fullback-overlap",
    category: "match",
    squadFormat: "7v7",
    difficulty: "advanced",
    standard: "Ajax 7v7 Wing Play",
    title: "7v7 Full-Back Overlap & Back-Post Cross",
    tag: "7v7 • 6 Steps",
    desc: "Right back feeds RW and overlaps outside while RW dribbles inside, slips overlap on the byline, crosses back-post, and scores.",
    cue: "Winger comes inside — defender overlaps to cross!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
          "retreatLine": false,
          "lanesMode": "lanes",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 91
                            },
                            "t1": {
                                  "x": 32,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t4": {
                                  "x": 47.6,
                                  "y": 55.6
                            },
                            "t5": {
                                  "x": 80,
                                  "y": 50
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 32.3
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 50,
                                  "y": 24.1
                            },
                            "o3": {
                                  "x": 72,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 34,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 68,
                                  "y": 44
                            },
                            "o6": {
                                  "x": 54.3,
                                  "y": 62.3
                            }
                      },
                      "ball": {
                            "x": 72,
                            "y": 72,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 74,
                                              "y": 68
                                        },
                                        {
                                              "x": 80,
                                              "y": 50
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 72,
                                              "y": 72
                                        },
                                        {
                                              "x": 86,
                                              "y": 58
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 86,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 22,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 47.6,
                                  "y": 53.6
                            },
                            "t5": {
                                  "x": 80,
                                  "y": 50
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 28.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 50,
                                  "y": 20.1
                            },
                            "o3": {
                                  "x": 72,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 36,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 68,
                                  "y": 42
                            },
                            "o6": {
                                  "x": 54.3,
                                  "y": 60.3
                            }
                      },
                      "ball": {
                            "x": 80,
                            "y": 50,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 50
                                        },
                                        {
                                              "x": 66.2,
                                              "y": 38.2
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 86,
                                              "y": 58
                                        },
                                        {
                                              "x": 88,
                                              "y": 40
                                        },
                                        {
                                              "x": 86,
                                              "y": 28
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 36,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 86,
                                  "y": 28
                            },
                            "t3": {
                                  "x": 29.9,
                                  "y": 30.4
                            },
                            "t4": {
                                  "x": 47.6,
                                  "y": 51.6
                            },
                            "t5": {
                                  "x": 66.2,
                                  "y": 38.2
                            },
                            "t6": {
                                  "x": 52.8,
                                  "y": 23.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51.2,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 32.6,
                                  "y": 22.4
                            },
                            "o2": {
                                  "x": 47,
                                  "y": 16.7
                            },
                            "o3": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 38,
                                  "y": 40
                            },
                            "o5": {
                                  "x": 59.5,
                                  "y": 31.5
                            },
                            "o6": {
                                  "x": 54.3,
                                  "y": 58.3
                            }
                      },
                      "ball": {
                            "x": 66.2,
                            "y": 38.2,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 86,
                                              "y": 28
                                        },
                                        {
                                              "x": 86,
                                              "y": 21
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 70,
                                              "y": 35
                                        },
                                        {
                                              "x": 86,
                                              "y": 21
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 86,
                                  "y": 21
                            },
                            "t3": {
                                  "x": 35.3,
                                  "y": 22.3
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 47.7
                            },
                            "t5": {
                                  "x": 66.7,
                                  "y": 35.4
                            },
                            "t6": {
                                  "x": 55,
                                  "y": 18.5
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 14.1
                            },
                            "o2": {
                                  "x": 46.5,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 70,
                                  "y": 22
                            },
                            "o4": {
                                  "x": 40,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 57.3,
                                  "y": 30.7
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 86,
                            "y": 21,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 35.3,
                                              "y": 22.3
                                        },
                                        {
                                              "x": 40.3,
                                              "y": 16.8
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 20
                                        },
                                        {
                                              "x": 40,
                                              "y": 17
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 65
                            },
                            "t2": {
                                  "x": 84,
                                  "y": 20
                            },
                            "t3": {
                                  "x": 40.3,
                                  "y": 16.8
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 46.7
                            },
                            "t5": {
                                  "x": 65.8,
                                  "y": 34.4
                            },
                            "t6": {
                                  "x": 54.6,
                                  "y": 18.1
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53,
                                  "y": 9.9
                            },
                            "o1": {
                                  "x": 32.4,
                                  "y": 22.8
                            },
                            "o2": {
                                  "x": 47.4,
                                  "y": 24.5
                            },
                            "o3": {
                                  "x": 69,
                                  "y": 21
                            },
                            "o4": {
                                  "x": 41,
                                  "y": 35
                            },
                            "o5": {
                                  "x": 56.3,
                                  "y": 29.7
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 55
                            }
                      },
                      "ball": {
                            "x": 40.3,
                            "y": 16.8,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 42,
                                              "y": 14
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 20
                            },
                            "t3": {
                                  "x": 41.5,
                                  "y": 14.6
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 45.7
                            },
                            "t5": {
                                  "x": 65.1,
                                  "y": 32
                            },
                            "t6": {
                                  "x": 54.5,
                                  "y": 17.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55.2,
                                  "y": 9.7
                            },
                            "o1": {
                                  "x": 33.9,
                                  "y": 20.7
                            },
                            "o2": {
                                  "x": 46.7,
                                  "y": 23.9
                            },
                            "o3": {
                                  "x": 68,
                                  "y": 20
                            },
                            "o4": {
                                  "x": 42,
                                  "y": 34
                            },
                            "o5": {
                                  "x": 53.6,
                                  "y": 32
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 54
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-rondo-box",
    category: "training",
    squadFormat: null,
    difficulty: "easy",
    standard: "UEFA Warm-Up",
    title: "4v1 Continuous Rondo Box",
    tag: "Blank Grass • 5 Steps",
    desc: "Complete 4-side rondo circuit: outside players slide along the cone lines to give 2 diagonal angles on every pass.",
    cue: "Slide along your line — always give two passing angles!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "D",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 78,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 22
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 22
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 75
                                        },
                                        {
                                              "x": 20,
                                              "y": 54
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 22
                                        },
                                        {
                                              "x": 36,
                                              "y": 22
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 38,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 44
                            },
                            "t3": {
                                  "x": 36,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 32,
                                  "y": 50
                            }
                      },
                      "ball": {
                            "x": 20,
                            "y": 54,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 22
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 22
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 22,
                                              "y": 50
                                        },
                                        {
                                              "x": 36,
                                              "y": 22
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 44
                                        },
                                        {
                                              "x": 80,
                                              "y": 36
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 54,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 44
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 36
                            },
                            "t3": {
                                  "x": 36,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 40,
                                  "y": 32
                            }
                      },
                      "ball": {
                            "x": 36,
                            "y": 22,
                            "attachedTo": "t3"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 22
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 22
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 24
                                        },
                                        {
                                              "x": 80,
                                              "y": 36
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 54,
                                              "y": 78
                                        },
                                        {
                                              "x": 62,
                                              "y": 78
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 62,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 36
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 64,
                                  "y": 38
                            }
                      },
                      "ball": {
                            "x": 80,
                            "y": 36,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 22
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 22
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 78,
                                              "y": 40
                                        },
                                        {
                                              "x": 62,
                                              "y": 78
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 62,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 58,
                                  "y": 62
                            }
                      },
                      "ball": {
                            "x": 62,
                            "y": 78,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 22
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 22
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 20,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 80,
                                  "y": 78
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 1
                }
          ],
          "customTeamCount": 4,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-slalom-gates",
    category: "training",
    squadFormat: null,
    difficulty: "easy",
    standard: "Coerver Mastery",
    title: "Slalom Poles & Cone Gate Finish",
    tag: "Half Pitch • 5 Steps",
    desc: "Weave the first poles, exit the final pole, burst through the blue cone gate, finish low past GK, and rotate queues.",
    cue: "Small touches through poles, big touch through the gate!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "GK",
                      "isGk": true
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 35,
                                  "y": 76
                            },
                            "t2": {
                                  "x": 75,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 35,
                                  "y": 92
                            },
                            "t3": {
                                  "x": 75,
                                  "y": 92
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 35,
                            "y": 76,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 62
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 28,
                                  "y": 26
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-sky",
                                  "x": 43,
                                  "y": 26
                            },
                            {
                                  "id": "g6",
                                  "kind": "ball-extra",
                                  "x": 82,
                                  "y": 79
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 35,
                                              "y": 76
                                        },
                                        {
                                              "x": 29,
                                              "y": 62
                                        },
                                        {
                                              "x": 41,
                                              "y": 50
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 41,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 75,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 35,
                                  "y": 86
                            },
                            "t3": {
                                  "x": 75,
                                  "y": 92
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 41,
                            "y": 50,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 62
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 28,
                                  "y": 26
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-sky",
                                  "x": 43,
                                  "y": 26
                            },
                            {
                                  "id": "g6",
                                  "kind": "ball-extra",
                                  "x": 82,
                                  "y": 79
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 41,
                                              "y": 50
                                        },
                                        {
                                              "x": 30,
                                              "y": 38
                                        },
                                        {
                                              "x": 35,
                                              "y": 30
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 35,
                                  "y": 30
                            },
                            "t2": {
                                  "x": 75,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 35,
                                  "y": 80
                            },
                            "t3": {
                                  "x": 75,
                                  "y": 92
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 35,
                            "y": 30,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 62
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 28,
                                  "y": 26
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-sky",
                                  "x": 43,
                                  "y": 26
                            },
                            {
                                  "id": "g6",
                                  "kind": "ball-extra",
                                  "x": 82,
                                  "y": 79
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 35,
                                              "y": 30
                                        },
                                        {
                                              "x": 38,
                                              "y": 20
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 38,
                                  "y": 20
                            },
                            "t2": {
                                  "x": 75,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 35,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 75,
                                  "y": 92
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 47,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 38,
                            "y": 20,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 62
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 28,
                                  "y": 26
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-sky",
                                  "x": 43,
                                  "y": 26
                            },
                            {
                                  "id": "g6",
                                  "kind": "ball-extra",
                                  "x": 82,
                                  "y": 79
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 18
                                        },
                                        {
                                              "x": 56,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 39.7,
                                  "y": 18.5
                            },
                            "t2": {
                                  "x": 75,
                                  "y": 74
                            },
                            "t1": {
                                  "x": 35,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 75,
                                  "y": 90
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44,
                                  "y": 10.9
                            }
                      },
                      "ball": {
                            "x": 56,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 62
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "pole",
                                  "x": 35,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 28,
                                  "y": 26
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-sky",
                                  "x": 43,
                                  "y": 26
                            },
                            {
                                  "id": "g6",
                                  "kind": "ball-extra",
                                  "x": 80,
                                  "y": 76
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 1
                }
          ],
          "customTeamCount": 4,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-diamond-passing",
    category: "training",
    squadFormat: null,
    difficulty: "easy",
    standard: "FA Activation",
    title: "Diamond Back-Foot Passing & Follow",
    tag: "Blank Grass • 5 Steps",
    desc: "Complete 4-cone clockwise passing circuit: every pass & follow rotates all four stations back to the start.",
    cue: "Step off your cone, open body, pass firm & follow!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 84
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 18
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 50,
                            "y": 84,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 86
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-lime",
                                  "x": 22,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 78,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 16
                            },
                            {
                                  "id": "g5",
                                  "kind": "ball-extra",
                                  "x": 64,
                                  "y": 91
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 84
                                        },
                                        {
                                              "x": 18,
                                              "y": 50
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 84
                                        },
                                        {
                                              "x": 22,
                                              "y": 54
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 0
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 22,
                                  "y": 54
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 46
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 18
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 18,
                            "y": 46,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 86
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-lime",
                                  "x": 22,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 78,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 16
                            },
                            {
                                  "id": "g5",
                                  "kind": "ball-extra",
                                  "x": 56,
                                  "y": 86
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 46
                                        },
                                        {
                                              "x": 50,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 46
                                        },
                                        {
                                              "x": 43.5,
                                              "y": 22.6
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 0
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t1": {
                                  "x": 43.5,
                                  "y": 22.6
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 54.3,
                                  "y": 19.9
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 54.3,
                            "y": 19.9,
                            "attachedTo": "t3"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 86
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-lime",
                                  "x": 22,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 78,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 16
                            },
                            {
                                  "id": "g5",
                                  "kind": "ball-extra",
                                  "x": 56,
                                  "y": 86
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 54,
                                              "y": 20
                                        },
                                        {
                                              "x": 82,
                                              "y": 50
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 54.3,
                                              "y": 19.9
                                        },
                                        {
                                              "x": 78,
                                              "y": 46
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 0
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 18
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 46
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 82,
                            "y": 54,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 86
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-lime",
                                  "x": 22,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 78,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 16
                            },
                            {
                                  "id": "g5",
                                  "kind": "ball-extra",
                                  "x": 56,
                                  "y": 86
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 54
                                        },
                                        {
                                              "x": 18,
                                              "y": 50
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 50
                                        },
                                        {
                                              "x": 49.5,
                                              "y": 84.2
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 0
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 49.5,
                                  "y": 84.2
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 18
                            },
                            "t2": {
                                  "x": 59.9,
                                  "y": 80.7
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 50
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 49.5,
                            "y": 84.2,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 86
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-lime",
                                  "x": 22,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 78,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 50,
                                  "y": 16
                            },
                            {
                                  "id": "g5",
                                  "kind": "ball-extra",
                                  "x": 62,
                                  "y": 88
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 0
                }
          ],
          "customTeamCount": 4,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-2v1-overload",
    category: "training",
    squadFormat: null,
    difficulty: "medium",
    standard: "Ajax 2v1 DNA",
    title: "2v1 Finishing Overload",
    tag: "Half Pitch • 4 Steps",
    desc: "Ball carrier drives straight at the defender to freeze them, slips the spare attacker in stride, and finishes past GK.",
    cue: "Drive AT the defender — pass at the last moment!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "GK",
                      "isGk": true
                },
                {
                      "id": "o1",
                      "label": "D",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 34,
                                  "y": 74
                            },
                            "t1": {
                                  "x": 68,
                                  "y": 74
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 50,
                                  "y": 42
                            }
                      },
                      "ball": {
                            "x": 34,
                            "y": 74,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 34,
                                  "y": 81
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 81
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 34,
                                              "y": 74
                                        },
                                        {
                                              "x": 43,
                                              "y": 48
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 68,
                                              "y": 74
                                        },
                                        {
                                              "x": 66,
                                              "y": 34
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 43,
                                  "y": 48
                            },
                            "t1": {
                                  "x": 66,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 45,
                                  "y": 39.9
                            }
                      },
                      "ball": {
                            "x": 43,
                            "y": 48,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 34,
                                  "y": 81
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 81
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 56,
                                  "y1": 16,
                                  "x2": 74,
                                  "y2": 30
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 66,
                                              "y": 34
                                        },
                                        {
                                              "x": 63,
                                              "y": 22
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 45
                                        },
                                        {
                                              "x": 63,
                                              "y": 22
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 42,
                                  "y": 42
                            },
                            "t1": {
                                  "x": 63,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 48,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 63,
                            "y": 22,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 34,
                                  "y": 81
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 81
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 60,
                                              "y": 19
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 44,
                                  "y": 38
                            },
                            "t1": {
                                  "x": 61,
                                  "y": 19
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 56,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 50,
                                  "y": 30
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 34,
                                  "y": 81
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 81
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 2
                }
          ],
          "customTeamCount": 2,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-4v2-split-box",
    category: "training",
    squadFormat: null,
    difficulty: "medium",
    standard: "UEFA Overload",
    title: "4v2 Split-the-Defenders Rondo",
    tag: "Blank Grass • 5 Steps",
    desc: "Pass wide, bounce back to draw both defenders narrow, thread the split pass right between them, and switch out.",
    cue: "Move it fast — 3 bonus points for splitting defenders!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "D1",
                      "isGk": false
                },
                {
                      "id": "o1",
                      "label": "D2",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 80
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 42,
                                  "y": 60
                            },
                            "o1": {
                                  "x": 56,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 80,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 20
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 20
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 80
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 80
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 77
                                        },
                                        {
                                              "x": 18,
                                              "y": 50
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 38,
                                  "y": 80
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 52,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 30,
                                  "y": 58
                            },
                            "o1": {
                                  "x": 44,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 18,
                            "y": 50,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 20
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 20
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 80
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 80
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 54
                                        },
                                        {
                                              "x": 38,
                                              "y": 80
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 38,
                                  "y": 80
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 46
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 52,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 34,
                                  "y": 58
                            },
                            "o1": {
                                  "x": 52,
                                  "y": 54
                            }
                      },
                      "ball": {
                            "x": 38,
                            "y": 80,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 20
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 20
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 80
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 80
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 36,
                                  "y1": 48,
                                  "x2": 52,
                                  "y2": 60
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 76
                                        },
                                        {
                                              "x": 52,
                                              "y": 20
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 48,
                                  "y": 80
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 52,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 42,
                                  "y": 42
                            },
                            "o1": {
                                  "x": 56,
                                  "y": 38
                            }
                      },
                      "ball": {
                            "x": 52,
                            "y": 20,
                            "attachedTo": "t3"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 20
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 20
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 80
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 80
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 56,
                                              "y": 23
                                        },
                                        {
                                              "x": 82,
                                              "y": 50
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 80
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 44
                            },
                            "o1": {
                                  "x": 66,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 82,
                            "y": 50,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 20
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 20
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-rose",
                                  "x": 18,
                                  "y": 80
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-rose",
                                  "x": 82,
                                  "y": 80
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 2
                }
          ],
          "customTeamCount": 4,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-1v1-chase-gate",
    category: "training",
    squadFormat: null,
    difficulty: "medium",
    standard: "Ajax 1v1 Duel",
    title: "1v1 Recovery Chase & Twin Gates",
    tag: "Half Pitch • 5 Steps",
    desc: "Sell the fake toward the amber gate with a defender chasing, chop across, burst through the lime gate, and score.",
    cue: "Check your shoulder — fake one gate, burst through the other!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "GK",
                      "isGk": true
                },
                {
                      "id": "o1",
                      "label": "D",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 70
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 50,
                                  "y": 86
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 70,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 38
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 38,
                                  "y": 38
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 62,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 38
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 70
                                        },
                                        {
                                              "x": 36.3,
                                              "y": 48.2
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 86
                                        },
                                        {
                                              "x": 27.5,
                                              "y": 42.9
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 36.3,
                                  "y": 48.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 27.5,
                                  "y": 42.9
                            }
                      },
                      "ball": {
                            "x": 36.3,
                            "y": 48.2,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 38
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 38,
                                  "y": 38
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 62,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 38
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 36.3,
                                              "y": 48.2
                                        },
                                        {
                                              "x": 68,
                                              "y": 44
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 68,
                                  "y": 44
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 46,
                                  "y": 42
                            }
                      },
                      "ball": {
                            "x": 68,
                            "y": 44,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 38
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 38,
                                  "y": 38
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 62,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 38
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 68,
                                              "y": 44
                                        },
                                        {
                                              "x": 66,
                                              "y": 22
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 66,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 54,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 66,
                            "y": 22,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 38
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 38,
                                  "y": 38
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 62,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 38
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 63,
                                              "y": 19
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 64,
                                  "y": 19
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 56,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 56,
                                  "y": 28
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 38
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 38,
                                  "y": 38
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-lime",
                                  "x": 62,
                                  "y": 38
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 38
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 2
                }
          ],
          "customTeamCount": 1,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-funino-4goals",
    category: "training",
    squadFormat: null,
    difficulty: "advanced",
    standard: "DFB Funino",
    title: "Funino 3v3 Four-Mini-Goal Switch",
    tag: "4 Mini-Goals • 5 Steps",
    desc: "Drive at the left mini-goal to draw defenders, recycle to the pivot, switch to the right attacker, and score in the open goal.",
    cue: "Draw defenders to one side — switch to the open goal!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "D1",
                      "isGk": false
                },
                {
                      "id": "o1",
                      "label": "D2",
                      "isGk": false
                },
                {
                      "id": "o2",
                      "label": "D3",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 24,
                                  "y": 50
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 50
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 26,
                                  "y": 28
                            },
                            "o1": {
                                  "x": 46,
                                  "y": 34
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 36
                            }
                      },
                      "ball": {
                            "x": 24,
                            "y": 50,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 11
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 11
                            },
                            {
                                  "id": "g3",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 87
                            },
                            {
                                  "id": "g4",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 87
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-amber",
                                  "x": 10,
                                  "y": 28
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-amber",
                                  "x": 90,
                                  "y": 28
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 50
                                        },
                                        {
                                              "x": 24,
                                              "y": 34
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 24,
                                  "y": 34
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 42
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 24,
                                  "y": 21
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 30
                            },
                            "o2": {
                                  "x": 56,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 24,
                            "y": 34,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 11
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 11
                            },
                            {
                                  "id": "g3",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 87
                            },
                            {
                                  "id": "g4",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 87
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-amber",
                                  "x": 10,
                                  "y": 28
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-amber",
                                  "x": 90,
                                  "y": 28
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 64,
                                  "y1": 14,
                                  "x2": 88,
                                  "y2": 30
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 27,
                                              "y": 37
                                        },
                                        {
                                              "x": 48,
                                              "y": 56
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 28,
                                  "y": 34
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 32
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 26,
                                  "y": 22
                            },
                            "o1": {
                                  "x": 42,
                                  "y": 34
                            },
                            "o2": {
                                  "x": 60,
                                  "y": 32
                            }
                      },
                      "ball": {
                            "x": 48,
                            "y": 56,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 11
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 11
                            },
                            {
                                  "id": "g3",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 87
                            },
                            {
                                  "id": "g4",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 87
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-amber",
                                  "x": 10,
                                  "y": 28
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-amber",
                                  "x": 90,
                                  "y": 28
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 32
                                        },
                                        {
                                              "x": 76.1,
                                              "y": 22
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 53
                                        },
                                        {
                                              "x": 76,
                                              "y": 22
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 30,
                                  "y": 32
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 48
                            },
                            "t2": {
                                  "x": 76.1,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 30,
                                  "y": 22
                            },
                            "o1": {
                                  "x": 50,
                                  "y": 30
                            },
                            "o2": {
                                  "x": 65.1,
                                  "y": 24.2
                            }
                      },
                      "ball": {
                            "x": 76.1,
                            "y": 22,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 11
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 11
                            },
                            {
                                  "id": "g3",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 87
                            },
                            {
                                  "id": "g4",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 87
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-amber",
                                  "x": 10,
                                  "y": 28
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-amber",
                                  "x": 90,
                                  "y": 28
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 19
                                        },
                                        {
                                              "x": 76,
                                              "y": 11
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 32,
                                  "y": 30
                            },
                            "t1": {
                                  "x": 56,
                                  "y": 44
                            },
                            "t2": {
                                  "x": 77.1,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 34,
                                  "y": 20
                            },
                            "o1": {
                                  "x": 54,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 65.6,
                                  "y": 20
                            }
                      },
                      "ball": {
                            "x": 76,
                            "y": 11,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 11
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 11
                            },
                            {
                                  "id": "g3",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 87
                            },
                            {
                                  "id": "g4",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 87
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-amber",
                                  "x": 10,
                                  "y": 28
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-amber",
                                  "x": 90,
                                  "y": 28
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 3
                }
          ],
          "customTeamCount": 3,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-3v2-transition-wave",
    category: "training",
    squadFormat: null,
    difficulty: "advanced",
    standard: "UEFA Transition",
    title: "3v2 Wave + 5-Second Counter-Press",
    tag: "Half Pitch • 5 Steps",
    desc: "Attack breaks down, defenders counter toward the mini-goals, attackers swarm in 5 seconds to win it back, slip, and score!",
    cue: "Lost the ball? 5-second pack hunt to win it back!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "GK",
                      "isGk": true
                },
                {
                      "id": "o1",
                      "label": "D1",
                      "isGk": false
                },
                {
                      "id": "o2",
                      "label": "D2",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 48,
                                  "y": 60
                            },
                            "t1": {
                                  "x": 22,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 50
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 38
                            },
                            "o2": {
                                  "x": 62,
                                  "y": 40
                            }
                      },
                      "ball": {
                            "x": 48,
                            "y": 60,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 20,
                                  "y": 88
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 80,
                                  "y": 88
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 60
                                        },
                                        {
                                              "x": 43.4,
                                              "y": 45.4
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 22,
                                              "y": 50
                                        },
                                        {
                                              "x": 24,
                                              "y": 36
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 50
                                        },
                                        {
                                              "x": 72,
                                              "y": 38
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 43.4,
                                  "y": 45.4
                            },
                            "t1": {
                                  "x": 24,
                                  "y": 36
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 38
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 36.7,
                                  "y": 38.7
                            },
                            "o2": {
                                  "x": 60,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 36.7,
                            "y": 38.7,
                            "attachedTo": "o1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 20,
                                  "y": 88
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 80,
                                  "y": 88
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 36.7,
                                              "y": 38.7
                                        },
                                        {
                                              "x": 26.2,
                                              "y": 65.6
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 43.4,
                                              "y": 45.4
                                        },
                                        {
                                              "x": 30.3,
                                              "y": 57.9
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 36
                                        },
                                        {
                                              "x": 20.7,
                                              "y": 53.4
                                        }
                                  ]
                            },
                            {
                                  "type": "zone",
                                  "x1": 18,
                                  "y1": 48,
                                  "x2": 38,
                                  "y2": 66
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 30.3,
                                  "y": 57.9
                            },
                            "t1": {
                                  "x": 20.7,
                                  "y": 53.4
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 26.2,
                                  "y": 65.6
                            },
                            "o2": {
                                  "x": 54,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 30.3,
                            "y": 57.9,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 20,
                                  "y": 88
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 80,
                                  "y": 88
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 64,
                                              "y": 34
                                        },
                                        {
                                              "x": 60,
                                              "y": 21
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 34,
                                              "y": 55
                                        },
                                        {
                                              "x": 60,
                                              "y": 21
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 36,
                                  "y": 48
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 44
                            },
                            "t2": {
                                  "x": 60,
                                  "y": 21
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 56
                            },
                            "o2": {
                                  "x": 52,
                                  "y": 40
                            }
                      },
                      "ball": {
                            "x": 60,
                            "y": 21,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 20,
                                  "y": 88
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 80,
                                  "y": 88
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 58,
                                              "y": 18
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 38,
                                  "y": 44
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 40
                            },
                            "t2": {
                                  "x": 58,
                                  "y": 19
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 52
                            },
                            "o2": {
                                  "x": 52,
                                  "y": 36
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 20,
                                  "y": 88
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 80,
                                  "y": 88
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 3
                }
          ],
          "customTeamCount": 3,
          "hideGkBadge": true
    })
  },
  {
    id: "tpl-third-man-rondo-breakout",
    category: "training",
    squadFormat: null,
    difficulty: "advanced",
    standard: "La Masia Breakout",
    title: "Rondo Box → Third-Man Breakout",
    tag: "Half Pitch • 6 Steps",
    desc: "Circulate in the cone box, play UP to the top player, bounce BACK, slip THROUGH to the breakout runner, and score.",
    cue: "Keep the rondo moving — bounce off top to break out!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "retreatLine": false,
          "lanesMode": "off",
          "oppMode": "off",
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "GK",
                      "isGk": true
                },
                {
                      "id": "o1",
                      "label": "D1",
                      "isGk": false
                },
                {
                      "id": "o2",
                      "label": "D2",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 30,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 62
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44,
                                  "y": 66
                            },
                            "o2": {
                                  "x": 56,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 78,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 46
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 46
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 75
                                        },
                                        {
                                              "x": 30,
                                              "y": 62
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 48,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 29.6,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 41.1,
                                  "y": 62
                            },
                            "o2": {
                                  "x": 52,
                                  "y": 54.1
                            }
                      },
                      "ball": {
                            "x": 29.6,
                            "y": 62,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 46
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 46
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 33,
                                              "y": 59
                                        },
                                        {
                                              "x": 50,
                                              "y": 46
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 48,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 32.7,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 45.7
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44,
                                  "y": 59.5
                            },
                            "o2": {
                                  "x": 52.2,
                                  "y": 53.8
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 45.7,
                            "attachedTo": "t3"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 46
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 46
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 48
                                        },
                                        {
                                              "x": 36,
                                              "y": 56
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 70,
                                              "y": 54
                                        },
                                        {
                                              "x": 66,
                                              "y": 36
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 48,
                                  "y": 75
                            },
                            "t1": {
                                  "x": 35.5,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 36
                            },
                            "t3": {
                                  "x": 47.9,
                                  "y": 37.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 47,
                                  "y": 56
                            },
                            "o2": {
                                  "x": 50.6,
                                  "y": 45.6
                            }
                      },
                      "ball": {
                            "x": 35.5,
                            "y": 56,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 46
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 46
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 52,
                                  "y1": 16,
                                  "x2": 72,
                                  "y2": 28
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 66,
                                              "y": 36
                                        },
                                        {
                                              "x": 60,
                                              "y": 22
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 40,
                                              "y": 53
                                        },
                                        {
                                              "x": 60,
                                              "y": 22
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 48,
                                  "y": 74
                            },
                            "t1": {
                                  "x": 37.6,
                                  "y": 54.4
                            },
                            "t2": {
                                  "x": 60,
                                  "y": 22
                            },
                            "t3": {
                                  "x": 45.4,
                                  "y": 33.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44.3,
                                  "y": 47.7
                            },
                            "o2": {
                                  "x": 53.8,
                                  "y": 39.2
                            }
                      },
                      "ball": {
                            "x": 60,
                            "y": 22,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 46
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 46
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 58,
                                              "y": 19
                                        },
                                        {
                                              "x": 45,
                                              "y": -0.9
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 3
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 48,
                                  "y": 72
                            },
                            "t1": {
                                  "x": 39.6,
                                  "y": 50.4
                            },
                            "t2": {
                                  "x": 58,
                                  "y": 19
                            },
                            "t3": {
                                  "x": 45.4,
                                  "y": 29.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 11
                            },
                            "o1": {
                                  "x": 46.3,
                                  "y": 43.7
                            },
                            "o2": {
                                  "x": 53.8,
                                  "y": 35.2
                            }
                      },
                      "ball": {
                            "x": 45,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 46
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 46
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 30,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 70,
                                  "y": 78
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 3
                }
          ],
          "customTeamCount": 4,
          "hideGkBadge": true
    })
  }
];
