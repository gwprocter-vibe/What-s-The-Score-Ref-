// Academy Match Plays & Training Drills Library (FA, UEFA, Ajax, La Masia, Coerver & Funino Standards)
// 54 full un-skipped multi-step plays & drills (36 Match Plays across 5v5/6v6/7v7 + 18 Training Drills).

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
                                  "x": 40.7,
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
    id: "tpl-5v5-dribble-in",
    category: "match",
    squadFormat: "5v5",
    difficulty: "easy",
    standard: "U9 Dribble-In Rule",
    title: "5v5 Touchline Dribble-In & Cut-Back",
    tag: "5v5 • 5 Steps",
    desc: "Uses the U9 Dribble-In rule when defenders stand off: drive straight off the sideline, beat the full-back to the byline, and cut back to score.",
    cue: "Space ahead on a kick-in? Dribble straight onto the pitch!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
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
                                  "x": 46,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 7,
                                  "y": 52
                            },
                            "t3": {
                                  "x": 76,
                                  "y": 50
                            },
                            "t4": {
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
                                  "x": 32,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 25,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 56,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 7,
                            "y": 52,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 8,
                                  "y1": 22,
                                  "x2": 26,
                                  "y2": 44
                            },
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 7,
                                              "y": 52
                                        },
                                        {
                                              "x": 14,
                                              "y": 42
                                        },
                                        {
                                              "x": 16,
                                              "y": 30
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 36
                                        },
                                        {
                                              "x": 50,
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
                                  "y": 89
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 62
                            },
                            "t2": {
                                  "x": 16,
                                  "y": 30
                            },
                            "t3": {
                                  "x": 76,
                                  "y": 40
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 24
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 62,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 54,
                                  "y": 36
                            }
                      },
                      "ball": {
                            "x": 16,
                            "y": 30,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 16,
                                              "y": 30
                                        },
                                        {
                                              "x": 13,
                                              "y": 20
                                        },
                                        {
                                              "x": 17.9,
                                              "y": 13
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 24
                                        },
                                        {
                                              "x": 47.7,
                                              "y": 17.8
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 40
                                        },
                                        {
                                              "x": 68.6,
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
                                  "x": 44,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 17.9,
                                  "y": 13
                            },
                            "t3": {
                                  "x": 68.6,
                                  "y": 22
                            },
                            "t4": {
                                  "x": 47.7,
                                  "y": 17.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 28.5,
                                  "y": 16.2
                            },
                            "o2": {
                                  "x": 57.1,
                                  "y": 22.5
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 30
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 32
                            }
                      },
                      "ball": {
                            "x": 17.9,
                            "y": 13,
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
                                              "x": 21,
                                              "y": 14
                                        },
                                        {
                                              "x": 45,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 68.6,
                                              "y": 22
                                        },
                                        {
                                              "x": 64,
                                              "y": 15
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
                                  "x": 46,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 20,
                                  "y": 15
                            },
                            "t3": {
                                  "x": 64,
                                  "y": 15
                            },
                            "t4": {
                                  "x": 48,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 45,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 17
                            },
                            "o2": {
                                  "x": 58,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 29
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 30
                            }
                      },
                      "ball": {
                            "x": 48,
                            "y": 18,
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
                                              "x": 49,
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
                                  "x": 46,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 22,
                                  "y": 16
                            },
                            "t3": {
                                  "x": 62,
                                  "y": 14
                            },
                            "t4": {
                                  "x": 49.7,
                                  "y": 16.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 43.9,
                                  "y": 9.9
                            },
                            "o1": {
                                  "x": 33.1,
                                  "y": 18
                            },
                            "o2": {
                                  "x": 58.5,
                                  "y": 22.3
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 29
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 30
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
    id: "tpl-5v5-kickoff-set",
    category: "match",
    squadFormat: "5v5",
    difficulty: "easy",
    standard: "FA Match Restart",
    title: "5v5 Kick-Off: Back-Set & Wing Launch",
    tag: "5v5 • 5 Steps",
    desc: "Rehearsed U9 Kick-Off: striker rolls back to the central defender, wingers burst wide past halfway, angled pass down the flank, and square ball to finish.",
    cue: "Set Kick-Off back cleanly — sprint wide before the pass!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "1-2-1",
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
                                  "y": 66
                            },
                            "t2": {
                                  "x": 20,
                                  "y": 53
                            },
                            "t3": {
                                  "x": 80,
                                  "y": 53
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 50
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
                                  "x": 38,
                                  "y": 39
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 39
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 50,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 53
                                        },
                                        {
                                              "x": 50,
                                              "y": 63
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 53
                                        },
                                        {
                                              "x": 82,
                                              "y": 34
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 53
                                        },
                                        {
                                              "x": 18,
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
                                  "x": 50,
                                  "y": 65
                            },
                            "t2": {
                                  "x": 18,
                                  "y": 38
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 34
                            },
                            "t4": {
                                  "x": 49.1,
                                  "y": 43.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 25
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 25
                            },
                            "o3": {
                                  "x": 38.7,
                                  "y": 47.1
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 42
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 65,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 62
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
                                              "x": 49.1,
                                              "y": 43.6
                                        },
                                        {
                                              "x": 48,
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
                                  "y": 88
                            },
                            "t1": {
                                  "x": 52,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 22,
                                  "y": 28
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 34
                            },
                            "t4": {
                                  "x": 48,
                                  "y": 24
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
                                  "x": 70,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 44,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 66,
                                  "y": 36
                            }
                      },
                      "ball": {
                            "x": 82,
                            "y": 34,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 34
                                        },
                                        {
                                              "x": 80,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 24
                                        },
                                        {
                                              "x": 47.7,
                                              "y": 16.3
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 22,
                                              "y": 28
                                        },
                                        {
                                              "x": 33.8,
                                              "y": 17.5
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
                                  "y": 56
                            },
                            "t2": {
                                  "x": 33.8,
                                  "y": 17.5
                            },
                            "t3": {
                                  "x": 80,
                                  "y": 18
                            },
                            "t4": {
                                  "x": 47.7,
                                  "y": 16.3
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 36.5,
                                  "y": 25.5
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 18
                            },
                            "o3": {
                                  "x": 44,
                                  "y": 34
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 30
                            }
                      },
                      "ball": {
                            "x": 80,
                            "y": 18,
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
                                              "x": 77,
                                              "y": 18
                                        },
                                        {
                                              "x": 51,
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
                                  "x": 52,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 34,
                                  "y": 16
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 18
                            },
                            "t4": {
                                  "x": 47.9,
                                  "y": 16.1
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55.3,
                                  "y": 9.8
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 24.1
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 19
                            },
                            "o3": {
                                  "x": 44,
                                  "y": 33
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 30
                            }
                      },
                      "ball": {
                            "x": 47.9,
                            "y": 16.1,
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
                                              "x": 48,
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
                                  "x": 52,
                                  "y": 56
                            },
                            "t2": {
                                  "x": 34,
                                  "y": 15
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 18
                            },
                            "t4": {
                                  "x": 47,
                                  "y": 15.7
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 55.1,
                                  "y": 9.9
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 19
                            },
                            "o3": {
                                  "x": 44,
                                  "y": 33
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 30
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
    id: "tpl-5v5-box-defend-counter",
    category: "match",
    squadFormat: "5v5",
    difficulty: "medium",
    standard: "FA Out-of-Possession",
    title: "5v5 2-2 Compact Box & Split Counter",
    tag: "5v5 • 5 Steps",
    desc: "Stay compact in a central 2-2 box to block through-balls, step in to intercept, and immediately split the defence on the counter.",
    cue: "Protect the middle as a 2-2 box — win it and break fast!",
    build: () => ({
          "pitchMode": "5v5",
          "formationId": "2-2",
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
                                  "x": 38,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 62,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 38,
                                  "y": 50
                            },
                            "t4": {
                                  "x": 62,
                                  "y": 50
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
                                  "x": 70,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 54,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 26,
                            "y": 44,
                            "attachedTo": "o3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 34,
                                  "y1": 46,
                                  "x2": 66,
                                  "y2": 72
                            },
                            {
                                  "type": "pass",
                                  "fromId": "o3",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 29,
                                              "y": 47
                                        },
                                        {
                                              "x": 38,
                                              "y": 64
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 38,
                                              "y": 68
                                        },
                                        {
                                              "x": 38,
                                              "y": 62
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
                                  "x": 62,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 32.7,
                                  "y": 43.3
                            },
                            "t4": {
                                  "x": 66,
                                  "y": 44
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
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
                                  "x": 26,
                                  "y": 50
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 38,
                            "y": 62,
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
                                              "x": 41,
                                              "y": 59
                                        },
                                        {
                                              "x": 68,
                                              "y": 34
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 66,
                                              "y": 44
                                        },
                                        {
                                              "x": 70,
                                              "y": 32
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 32.7,
                                              "y": 43.3
                                        },
                                        {
                                              "x": 38.4,
                                              "y": 21.8
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
                                  "y": 56
                            },
                            "t2": {
                                  "x": 60,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 38.4,
                                  "y": 21.8
                            },
                            "t4": {
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
                                  "x": 28.9,
                                  "y": 26.5
                            },
                            "o2": {
                                  "x": 62,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 50
                            }
                      },
                      "ball": {
                            "x": 70,
                            "y": 32,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 70,
                                              "y": 32
                                        },
                                        {
                                              "x": 68.2,
                                              "y": 17.9
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 38.4,
                                              "y": 21.8
                                        },
                                        {
                                              "x": 46,
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
                                  "x": 42,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 60,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 16
                            },
                            "t4": {
                                  "x": 68.2,
                                  "y": 17.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 58.7,
                                  "y": 22.6
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 68.2,
                            "y": 17.9,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 65,
                                              "y": 18
                                        },
                                        {
                                              "x": 49,
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
                                  "x": 42,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 60,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 16
                            },
                            "t4": {
                                  "x": 66.6,
                                  "y": 17.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 58.2,
                                  "y": 23.2
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 46,
                            "y": 16,
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
                                              "x": 46,
                                              "y": 13
                                        },
                                        {
                                              "x": 44,
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
                                  "x": 42,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 60,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 45.4,
                                  "y": 15.4
                            },
                            "t4": {
                                  "x": 66.6,
                                  "y": 17.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54.1,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 58.2,
                                  "y": 23.2
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 44,
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
    id: "tpl-5v5-ifk-box-edge",
    category: "match",
    squadFormat: "5v5",
    difficulty: "advanced",
    standard: "U9 Box-Edge IFK",
    title: "5v5 Indirect Free-Kick Lay-Off Strike",
    tag: "5v5 • 4 Steps",
    desc: "For U9 Indirect Free Kicks on the penalty box edge (deliberate heading or GK punt): decoy run pulls the wall, short sideways lay-off, and clean 2nd-touch finish.",
    cue: "Indirect kick needs two touches — roll sideways and strike!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
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
                                  "y": 66
                            },
                            "t2": {
                                  "x": 24,
                                  "y": 34
                            },
                            "t3": {
                                  "x": 62,
                                  "y": 32
                            },
                            "t4": {
                                  "x": 42,
                                  "y": 30
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 39.3,
                                  "y": 19
                            },
                            "o2": {
                                  "x": 50.8,
                                  "y": 19
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 24
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 26
                            }
                      },
                      "ball": {
                            "x": 42,
                            "y": 30,
                            "attachedTo": "t4"
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
                                              "x": 19.8,
                                              "y": 15.5
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 45,
                                              "y": 30
                                        },
                                        {
                                              "x": 59,
                                              "y": 31
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
                                  "y": 64
                            },
                            "t2": {
                                  "x": 19.8,
                                  "y": 15.5
                            },
                            "t3": {
                                  "x": 60,
                                  "y": 31
                            },
                            "t4": {
                                  "x": 42,
                                  "y": 30
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 36,
                                  "y": 18
                            },
                            "o2": {
                                  "x": 48,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 22.5,
                                  "y": 23.5
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 24
                            }
                      },
                      "ball": {
                            "x": 60,
                            "y": 31,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 60,
                                              "y": 31
                                        },
                                        {
                                              "x": 58.5,
                                              "y": 23
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 42,
                                              "y": 30
                                        },
                                        {
                                              "x": 40.3,
                                              "y": 16.4
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
                                  "y": 62
                            },
                            "t2": {
                                  "x": 19.8,
                                  "y": 14.7
                            },
                            "t3": {
                                  "x": 58.5,
                                  "y": 23
                            },
                            "t4": {
                                  "x": 40.3,
                                  "y": 16.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 47.2,
                                  "y": 9.8
                            },
                            "o1": {
                                  "x": 29.5,
                                  "y": 19.1
                            },
                            "o2": {
                                  "x": 47,
                                  "y": 23
                            },
                            "o3": {
                                  "x": 20,
                                  "y": 23.8
                            },
                            "o4": {
                                  "x": 70,
                                  "y": 23
                            }
                      },
                      "ball": {
                            "x": 58.5,
                            "y": 23,
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
                                              "x": 58,
                                              "y": 20
                                        },
                                        {
                                              "x": 56,
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
                                  "y": 62
                            },
                            "t2": {
                                  "x": 22,
                                  "y": 13.9
                            },
                            "t3": {
                                  "x": 58.7,
                                  "y": 20.9
                            },
                            "t4": {
                                  "x": 39.7,
                                  "y": 16.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46.4,
                                  "y": 9.7
                            },
                            "o1": {
                                  "x": 29.5,
                                  "y": 20.1
                            },
                            "o2": {
                                  "x": 47.4,
                                  "y": 22.5
                            },
                            "o3": {
                                  "x": 18.8,
                                  "y": 23.1
                            },
                            "o4": {
                                  "x": 70,
                                  "y": 23
                            }
                      },
                      "ball": {
                            "x": 56,
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
                                  "x": 66.9,
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
                                  "x": 56.4,
                                  "y": 14.6
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
    id: "tpl-6v6-kickin-overload",
    category: "match",
    squadFormat: "6v6",
    difficulty: "easy",
    standard: "UEFA 6v6 Restart",
    title: "6v6 Touchline Bounce & Wing Release",
    tag: "6v6 • 5 Steps",
    desc: "Winger plays the sideline restart inside to the central pivot, spins behind their marker down the wing for the return ball, and crosses to the striker.",
    cue: "Pass inside from the line — spin and sprint for the return!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "1-3-1",
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
                                  "x": 48,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 7,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 44,
                                  "y": 56
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 52
                            },
                            "t5": {
                                  "x": 52,
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
                                  "y": 25
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 25
                            },
                            "o3": {
                                  "x": 22,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 74,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 7,
                            "y": 54,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 10,
                                              "y": 54
                                        },
                                        {
                                              "x": 41,
                                              "y": 56
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 7,
                                              "y": 54
                                        },
                                        {
                                              "x": 12,
                                              "y": 38
                                        },
                                        {
                                              "x": 15,
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
                                  "x": 48,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 15,
                                  "y": 24
                            },
                            "t3": {
                                  "x": 44,
                                  "y": 56
                            },
                            "t4": {
                                  "x": 80.7,
                                  "y": 44.2
                            },
                            "t5": {
                                  "x": 52,
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
                                  "y": 24
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 25
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 69.9,
                                  "y": 41.5
                            },
                            "o5": {
                                  "x": 46,
                                  "y": 47.9
                            }
                      },
                      "ball": {
                            "x": 44,
                            "y": 56,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 41,
                                              "y": 53
                                        },
                                        {
                                              "x": 17,
                                              "y": 25
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 28
                                        },
                                        {
                                              "x": 48.3,
                                              "y": 17.9
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80.7,
                                              "y": 44.2
                                        },
                                        {
                                              "x": 66.7,
                                              "y": 19.3
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
                                  "x": 15,
                                  "y": 24
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 48
                            },
                            "t4": {
                                  "x": 66.7,
                                  "y": 19.3
                            },
                            "t5": {
                                  "x": 48.3,
                                  "y": 17.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46,
                                  "y": 9.9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 60,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 32
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 39.9
                            }
                      },
                      "ball": {
                            "x": 15,
                            "y": 24,
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
                                              "x": 18,
                                              "y": 23
                                        },
                                        {
                                              "x": 45,
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
                                  "y": 89
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 18,
                                  "y": 20
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 46
                            },
                            "t4": {
                                  "x": 64.2,
                                  "y": 17.6
                            },
                            "t5": {
                                  "x": 48.1,
                                  "y": 17.3
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 45.8,
                                  "y": 9.2
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 59.3,
                                  "y": 25.1
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 32
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 37.9
                            }
                      },
                      "ball": {
                            "x": 48.1,
                            "y": 17.3,
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
                                              "x": 49,
                                              "y": 14
                                        },
                                        {
                                              "x": 54,
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
                                  "x": 48,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 18,
                                  "y": 20
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 46
                            },
                            "t4": {
                                  "x": 64.1,
                                  "y": 16.8
                            },
                            "t5": {
                                  "x": 50.5,
                                  "y": 16.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44.8,
                                  "y": 9.7
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 59.7,
                                  "y": 24.5
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 32
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 37.9
                            }
                      },
                      "ball": {
                            "x": 54,
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
    id: "tpl-6v6-gk-quick-throw",
    category: "match",
    squadFormat: "6v6",
    difficulty: "easy",
    standard: "FA Transition",
    title: "6v6 GK Quick Roll to Wide Runner",
    tag: "6v6 • 5 Steps",
    desc: "As soon as our goalkeeper claims the ball, the right midfielder sprints wide into space for an early fast roll, dribbles past halfway, and feeds the striker.",
    cue: "Keeper catches? Sprint wide immediately for the fast roll!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "2-2-1",
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
                                  "x": 32,
                                  "y": 76
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 23.8,
                                  "y": 60.2
                            },
                            "t4": {
                                  "x": 78,
                                  "y": 62
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 44
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 34,
                                  "y": 30
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 32
                            },
                            "o3": {
                                  "x": 30.5,
                                  "y": 53.5
                            },
                            "o4": {
                                  "x": 62,
                                  "y": 56
                            },
                            "o5": {
                                  "x": 46,
                                  "y": 66
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
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 78,
                                              "y": 62
                                        },
                                        {
                                              "x": 84,
                                              "y": 46
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 86
                                        },
                                        {
                                              "x": 82,
                                              "y": 48
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
                                  "y": 70
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 23.1,
                                  "y": 48
                            },
                            "t4": {
                                  "x": 84,
                                  "y": 46
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
                                  "x": 34,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 28
                            },
                            "o3": {
                                  "x": 34.6,
                                  "y": 48
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 58
                            }
                      },
                      "ball": {
                            "x": 84,
                            "y": 46,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 84,
                                              "y": 46
                                        },
                                        {
                                              "x": 80,
                                              "y": 24
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 34
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
                                              "x": 23.1,
                                              "y": 48
                                        },
                                        {
                                              "x": 27.3,
                                              "y": 24.2
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
                                  "x": 66,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 27.3,
                                  "y": 24.2
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 24
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 38.1,
                                  "y": 21.5
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 50
                            }
                      },
                      "ball": {
                            "x": 80,
                            "y": 24,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 77,
                                              "y": 23
                                        },
                                        {
                                              "x": 53,
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
                                  "x": 66,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 29.3,
                                  "y": 19.8
                            },
                            "t4": {
                                  "x": 78,
                                  "y": 22
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 40.1,
                                  "y": 22.5
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 50,
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
                                              "x": 50,
                                              "y": 15
                                        },
                                        {
                                              "x": 46,
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
                                  "y": 64
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 29.5,
                                  "y": 18.8
                            },
                            "t4": {
                                  "x": 78,
                                  "y": 22
                            },
                            "t5": {
                                  "x": 49.2,
                                  "y": 17.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54.1,
                                  "y": 9.8
                            },
                            "o1": {
                                  "x": 39.6,
                                  "y": 22.6
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 64,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 46,
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
    id: "tpl-6v6-central-freekick",
    category: "match",
    squadFormat: "6v6",
    difficulty: "medium",
    standard: "UEFA Set-Piece",
    title: "6v6 Free-Kick Dummy Run & Reverse Slip",
    tag: "6v6 • 4 Steps",
    desc: "From a central free kick, the striker sprints across the wall as a decoy while the right winger slips blind-side into the box for a disguised reverse pass.",
    cue: "One crosses the wall as decoy — slip the blind-side runner!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "2-2-1",
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
                                  "x": 34,
                                  "y": 66
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 36
                            },
                            "t4": {
                                  "x": 76,
                                  "y": 32
                            },
                            "t5": {
                                  "x": 57.2,
                                  "y": 27.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 41.3,
                                  "y": 24.3
                            },
                            "o2": {
                                  "x": 51.2,
                                  "y": 20.2
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 28
                            },
                            "o4": {
                                  "x": 70,
                                  "y": 22
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 46,
                            "y": 36,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 57.2,
                                              "y": 27.2
                                        },
                                        {
                                              "x": 31.3,
                                              "y": 17.5
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 32
                                        },
                                        {
                                              "x": 64,
                                              "y": 17
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
                                              "y": 34
                                        },
                                        {
                                              "x": 63,
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
                                  "x": 34,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 64
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 34
                            },
                            "t4": {
                                  "x": 64,
                                  "y": 17
                            },
                            "t5": {
                                  "x": 31.3,
                                  "y": 17.5
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 39.3,
                                  "y": 23.4
                            },
                            "o2": {
                                  "x": 50.8,
                                  "y": 24.1
                            },
                            "o3": {
                                  "x": 22,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 74,
                                  "y": 24
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 64,
                            "y": 17,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 64,
                                              "y": 17
                                        },
                                        {
                                              "x": 58.7,
                                              "y": 14.5
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 31.3,
                                              "y": 17.5
                                        },
                                        {
                                              "x": 40,
                                              "y": 14
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
                                  "y": 64
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 64
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 32
                            },
                            "t4": {
                                  "x": 58.7,
                                  "y": 14.5
                            },
                            "t5": {
                                  "x": 40,
                                  "y": 14
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 51,
                                  "y": 8.4
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 22.1
                            },
                            "o2": {
                                  "x": 50,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 22,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 22
                            },
                            "o5": {
                                  "x": 48,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 58.7,
                            "y": 14.5,
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
                                              "x": 56,
                                              "y": 12
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
                                  "x": 34,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 64
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 32
                            },
                            "t4": {
                                  "x": 61.3,
                                  "y": 15
                            },
                            "t5": {
                                  "x": 40,
                                  "y": 13
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52.5,
                                  "y": 9.7
                            },
                            "o1": {
                                  "x": 38,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 50,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 22,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 22
                            },
                            "o5": {
                                  "x": 48,
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
    id: "tpl-6v6-back-recovery-counter",
    category: "match",
    squadFormat: "6v6",
    difficulty: "medium",
    standard: "FA Transition",
    title: "6v6 Sweeper Tackle & 3-Pass Counter",
    tag: "6v6 • 5 Steps",
    desc: "Sweeper steps across to win the ball in our defensive third, connects immediately with the central midfielder, releases the left winger, and finishes.",
    cue: "Win the tackle, find the middle hub, release the wing!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "1-3-1",
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
                                  "x": 52,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 20,
                                  "y": 60
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 56
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 58
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 38
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
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
                                  "x": 28,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 72,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 68
                            }
                      },
                      "ball": {
                            "x": 44,
                            "y": 68,
                            "attachedTo": "o5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 74
                                        },
                                        {
                                              "x": 46,
                                              "y": 70
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "o5",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 44,
                                              "y": 69
                                        },
                                        {
                                              "x": 46,
                                              "y": 70
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
                                  "x": 18,
                                  "y": 50
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 52
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 50
                            },
                            "t5": {
                                  "x": 52,
                                  "y": 32
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
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
                                  "x": 30,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 70,
                                  "y": 46
                            },
                            "o5": {
                                  "x": 40,
                                  "y": 62
                            }
                      },
                      "ball": {
                            "x": 46,
                            "y": 70,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 67
                                        },
                                        {
                                              "x": 50,
                                              "y": 54
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
                                              "x": 20,
                                              "y": 26
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 32
                                        },
                                        {
                                              "x": 54,
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
                                  "x": 48.2,
                                  "y": 64.2
                            },
                            "t2": {
                                  "x": 20,
                                  "y": 26
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 52
                            },
                            "t4": {
                                  "x": 78,
                                  "y": 36
                            },
                            "t5": {
                                  "x": 54,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 32,
                                  "y": 40
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 41.5,
                                  "y": 57.5
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 52,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 49
                                        },
                                        {
                                              "x": 22,
                                              "y": 27
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
                                  "y": 64
                            },
                            "t2": {
                                  "x": 20,
                                  "y": 26
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 44
                            },
                            "t4": {
                                  "x": 74,
                                  "y": 26
                            },
                            "t5": {
                                  "x": 54,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 34,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 54
                            }
                      },
                      "ball": {
                            "x": 20,
                            "y": 26,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 26
                                        },
                                        {
                                              "x": 32,
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
                                  "x": 48,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 32,
                                  "y": 18
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 71.4,
                                  "y": 21.3
                            },
                            "t5": {
                                  "x": 56,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 26.1
                            },
                            "o2": {
                                  "x": 61.9,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 36,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 54
                            }
                      },
                      "ball": {
                            "x": 32,
                            "y": 18,
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
                                              "x": 35,
                                              "y": 15
                                        },
                                        {
                                              "x": 52,
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
                                  "x": 48,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 34,
                                  "y": 17
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 70.7,
                                  "y": 19.3
                            },
                            "t5": {
                                  "x": 56,
                                  "y": 15
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 45,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 36,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 44,
                                  "y": 54
                            }
                      },
                      "ball": {
                            "x": 52,
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
    id: "tpl-6v6-false9-drop",
    category: "match",
    squadFormat: "6v6",
    difficulty: "advanced",
    standard: "Ajax Positional",
    title: "6v6 Striker Drop-Deep & Winger Beyond",
    tag: "6v6 • 5 Steps",
    desc: "Striker checks short into midfield to drag the centre-back out of position, lays off 1-touch to the hub, and the right winger sprints diagonally into the space behind.",
    cue: "Striker drops to pull defender out — winger sprints behind!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "1-3-1",
          "lanesMode": "thirds",
          "oppMode": "even",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 18,
                                  "y": 54
                            },
                            "t3": {
                                  "x": 46,
                                  "y": 56
                            },
                            "t4": {
                                  "x": 82,
                                  "y": 48
                            },
                            "t5": {
                                  "x": 52.2,
                                  "y": 30.4
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 47.3,
                                  "y": 22.9
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 42,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 74,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 42,
                                  "y1": 14,
                                  "x2": 64,
                                  "y2": 26
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52.2,
                                              "y": 30.4
                                        },
                                        {
                                              "x": 54,
                                              "y": 44
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 47.3,
                                              "y": 22.9
                                        },
                                        {
                                              "x": 52,
                                              "y": 35
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 71
                                        },
                                        {
                                              "x": 54,
                                              "y": 46
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
                                  "x": 50,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 18,
                                  "y": 48
                            },
                            "t3": {
                                  "x": 40,
                                  "y": 52
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 40
                            },
                            "t5": {
                                  "x": 54,
                                  "y": 44
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 52,
                                  "y": 35
                            },
                            "o2": {
                                  "x": 72,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 34
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 40,
                                  "y": 42
                            }
                      },
                      "ball": {
                            "x": 54,
                            "y": 44,
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
                                              "x": 51,
                                              "y": 46
                                        },
                                        {
                                              "x": 42,
                                              "y": 51
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 40
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
                                  "y": 89
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 20,
                                  "y": 40
                            },
                            "t3": {
                                  "x": 40,
                                  "y": 52
                            },
                            "t4": {
                                  "x": 56,
                                  "y": 18
                            },
                            "t5": {
                                  "x": 56.1,
                                  "y": 40.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 51.7,
                                  "y": 32.5
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 32
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 40
                            },
                            "o5": {
                                  "x": 38,
                                  "y": 42
                            }
                      },
                      "ball": {
                            "x": 40,
                            "y": 52,
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
                                              "x": 42,
                                              "y": 49
                                        },
                                        {
                                              "x": 55,
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
                                  "x": 50,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 22.6,
                                  "y": 32.7
                            },
                            "t3": {
                                  "x": 42.2,
                                  "y": 46.4
                            },
                            "t4": {
                                  "x": 56,
                                  "y": 18
                            },
                            "t5": {
                                  "x": 54.4,
                                  "y": 34.5
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 48.7,
                                  "y": 27.4
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 32.1,
                                  "y": 28
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 37.3,
                                  "y": 38.9
                            }
                      },
                      "ball": {
                            "x": 56,
                            "y": 18,
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
                                              "x": 55,
                                              "y": 15
                                        },
                                        {
                                              "x": 46,
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
                                  "x": 50,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 22.1,
                                  "y": 30
                            },
                            "t3": {
                                  "x": 42.2,
                                  "y": 46.4
                            },
                            "t4": {
                                  "x": 55.8,
                                  "y": 16.9
                            },
                            "t5": {
                                  "x": 55,
                                  "y": 32.7
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 49.9,
                                  "y": 9.9
                            },
                            "o1": {
                                  "x": 47.1,
                                  "y": 26.8
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 33.6,
                                  "y": 30
                            },
                            "o4": {
                                  "x": 68,
                                  "y": 38
                            },
                            "o5": {
                                  "x": 37.3,
                                  "y": 38.9
                            }
                      },
                      "ball": {
                            "x": 46,
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
    id: "tpl-6v6-powerplay-break",
    category: "match",
    squadFormat: "6v6",
    difficulty: "advanced",
    standard: "FA Power Play",
    title: "6v6 Beating an Extra-Player Press",
    tag: "6v6 • 5 Steps",
    desc: "When opponents add +1 player under FA Power Play rules, use your goalkeeper calmly as the spare bounce player to switch sides and break behind their press.",
    cue: "Use your goalkeeper as the extra player to beat the press!",
    build: () => ({
          "pitchMode": "6v6",
          "formationId": "2-2-1",
          "lanesMode": "off",
          "oppMode": "powerplay",
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 76
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 18.9,
                                  "y": 52.4
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 50
                            },
                            "t5": {
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
                                  "x": 32,
                                  "y": 26
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 29.3,
                                  "y": 48.9
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 54
                            },
                            "o5": {
                                  "x": 72,
                                  "y": 56
                            },
                            "o6": {
                                  "x": 34,
                                  "y": 68
                            }
                      },
                      "ball": {
                            "x": 26,
                            "y": 76,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 29,
                                              "y": 78
                                        },
                                        {
                                              "x": 47,
                                              "y": 89
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 74,
                                              "y": 76
                                        },
                                        {
                                              "x": 78,
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
                                  "y": 90
                            },
                            "t1": {
                                  "x": 24,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 19.4,
                                  "y": 47.6
                            },
                            "t4": {
                                  "x": 82,
                                  "y": 42
                            },
                            "t5": {
                                  "x": 50,
                                  "y": 30
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
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
                                  "x": 27.8,
                                  "y": 53.2
                            },
                            "o4": {
                                  "x": 46,
                                  "y": 62
                            },
                            "o5": {
                                  "x": 66,
                                  "y": 58
                            },
                            "o6": {
                                  "x": 36,
                                  "y": 74
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
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 88
                                        },
                                        {
                                              "x": 76,
                                              "y": 68
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 42
                                        },
                                        {
                                              "x": 82,
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
                                  "x": 26,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 23.8,
                                  "y": 41.6
                            },
                            "t4": {
                                  "x": 82,
                                  "y": 24
                            },
                            "t5": {
                                  "x": 48,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 24
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 28.7,
                                  "y": 49.1
                            },
                            "o4": {
                                  "x": 48,
                                  "y": 58
                            },
                            "o5": {
                                  "x": 68,
                                  "y": 54
                            },
                            "o6": {
                                  "x": 40,
                                  "y": 70
                            }
                      },
                      "ball": {
                            "x": 78,
                            "y": 66,
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
                                              "x": 79,
                                              "y": 62
                                        },
                                        {
                                              "x": 82,
                                              "y": 27
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 20
                                        },
                                        {
                                              "x": 48,
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
                                  "y": 89
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 30.8,
                                  "y": 22.8
                            },
                            "t4": {
                                  "x": 82,
                                  "y": 24
                            },
                            "t5": {
                                  "x": 48,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 37.5,
                                  "y": 29.5
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 20
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 52
                            },
                            "o5": {
                                  "x": 68,
                                  "y": 48
                            },
                            "o6": {
                                  "x": 42,
                                  "y": 66
                            }
                      },
                      "ball": {
                            "x": 82,
                            "y": 24,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 79,
                                              "y": 23
                                        },
                                        {
                                              "x": 51,
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
                                  "y": 89
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 31.8,
                                  "y": 19.5
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 22
                            },
                            "t5": {
                                  "x": 48,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 34.5,
                                  "y": 27.5
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 20
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 52
                            },
                            "o5": {
                                  "x": 68,
                                  "y": 48
                            },
                            "o6": {
                                  "x": 42,
                                  "y": 66
                            }
                      },
                      "ball": {
                            "x": 48,
                            "y": 16,
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
                                              "x": 48,
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
                                  "y": 89
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 58
                            },
                            "t3": {
                                  "x": 31.9,
                                  "y": 18.7
                            },
                            "t4": {
                                  "x": 80,
                                  "y": 22
                            },
                            "t5": {
                                  "x": 47.4,
                                  "y": 15.6
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54.1,
                                  "y": 8.9
                            },
                            "o1": {
                                  "x": 34.2,
                                  "y": 26.8
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 20
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 52
                            },
                            "o5": {
                                  "x": 68,
                                  "y": 48
                            },
                            "o6": {
                                  "x": 42,
                                  "y": 66
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
                                  "x": 51.2,
                                  "y": 17.3
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
                                  "x": 72.3,
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
    id: "tpl-7v7-kickoff-wing",
    category: "match",
    squadFormat: "7v7",
    difficulty: "easy",
    standard: "FA 7v7 Restart",
    title: "7v7 Kick-Off: Pivot Drop & Wide Drive",
    tag: "7v7 • 5 Steps",
    desc: "Structured 7v7 Kick-Off: striker taps back to the central midfielder, quick diagonal ball out to the left winger, drive down the flank, and low cross.",
    cue: "Kick-off back to centre-mid — swing wide and attack the box!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
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
                                  "x": 30,
                                  "y": 76
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 16,
                                  "y": 54
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 62
                            },
                            "t5": {
                                  "x": 84,
                                  "y": 54
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 50
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 72,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 20,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 28
                            },
                            "o5": {
                                  "x": 80,
                                  "y": 38
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 40
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 50,
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
                                              "y": 53
                                        },
                                        {
                                              "x": 50,
                                              "y": 60
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 16,
                                              "y": 54
                                        },
                                        {
                                              "x": 13.6,
                                              "y": 36.2
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
                                  "x": 30,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 74
                            },
                            "t3": {
                                  "x": 13.6,
                                  "y": 36.2
                            },
                            "t4": {
                                  "x": 50,
                                  "y": 62
                            },
                            "t5": {
                                  "x": 82.2,
                                  "y": 44.4
                            },
                            "t6": {
                                  "x": 52,
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
                                  "y": 22
                            },
                            "o2": {
                                  "x": 72,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 23.1,
                                  "y": 31.5
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 28
                            },
                            "o5": {
                                  "x": 77.3,
                                  "y": 36.9
                            },
                            "o6": {
                                  "x": 48,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 62,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 60
                                        },
                                        {
                                              "x": 16,
                                              "y": 38
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 40
                                        },
                                        {
                                              "x": 48,
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
                                  "x": 30,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 14,
                                  "y": 36
                            },
                            "t4": {
                                  "x": 48.2,
                                  "y": 50.5
                            },
                            "t5": {
                                  "x": 76,
                                  "y": 29.4
                            },
                            "t6": {
                                  "x": 48,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 30
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 28.1
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 37.7
                            },
                            "o6": {
                                  "x": 45.5,
                                  "y": 42.5
                            }
                      },
                      "ball": {
                            "x": 14,
                            "y": 36,
                            "attachedTo": "t3"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 14,
                                              "y": 36
                                        },
                                        {
                                              "x": 16,
                                              "y": 16
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 20
                                        },
                                        {
                                              "x": 48.3,
                                              "y": 16.8
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 29.4
                                        },
                                        {
                                              "x": 63.8,
                                              "y": 17.6
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
                                  "y": 70
                            },
                            "t3": {
                                  "x": 16,
                                  "y": 16
                            },
                            "t4": {
                                  "x": 49.2,
                                  "y": 45.2
                            },
                            "t5": {
                                  "x": 63.8,
                                  "y": 17.6
                            },
                            "t6": {
                                  "x": 48.3,
                                  "y": 16.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 45,
                                  "y": 8.9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 18
                            },
                            "o2": {
                                  "x": 68.7,
                                  "y": 25.1
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 28
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 28
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 36
                            },
                            "o6": {
                                  "x": 42.5,
                                  "y": 38.5
                            }
                      },
                      "ball": {
                            "x": 16,
                            "y": 16,
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
                                              "x": 19,
                                              "y": 16
                                        },
                                        {
                                              "x": 45,
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
                                  "y": 90
                            },
                            "t1": {
                                  "x": 30,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 17.7,
                                  "y": 15.9
                            },
                            "t4": {
                                  "x": 49.2,
                                  "y": 45.2
                            },
                            "t5": {
                                  "x": 63.9,
                                  "y": 16.8
                            },
                            "t6": {
                                  "x": 48.1,
                                  "y": 16.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44.7,
                                  "y": 8.4
                            },
                            "o1": {
                                  "x": 28.8,
                                  "y": 18.2
                            },
                            "o2": {
                                  "x": 68.3,
                                  "y": 24.5
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 28
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 28
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 36
                            },
                            "o6": {
                                  "x": 42.5,
                                  "y": 38.5
                            }
                      },
                      "ball": {
                            "x": 48.1,
                            "y": 16.2,
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
                                              "x": 49,
                                              "y": 13
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
                                  "y": 70
                            },
                            "t2": {
                                  "x": 70,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 17.7,
                                  "y": 15.9
                            },
                            "t4": {
                                  "x": 49.2,
                                  "y": 45.2
                            },
                            "t5": {
                                  "x": 63.9,
                                  "y": 16.8
                            },
                            "t6": {
                                  "x": 49.8,
                                  "y": 16.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44.9,
                                  "y": 8.8
                            },
                            "o1": {
                                  "x": 28.8,
                                  "y": 18.2
                            },
                            "o2": {
                                  "x": 68.3,
                                  "y": 24.5
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 28
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 28
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 36
                            },
                            "o6": {
                                  "x": 42.5,
                                  "y": 38.5
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
    id: "tpl-7v7-corner-short-triangle",
    category: "match",
    squadFormat: "7v7",
    difficulty: "easy",
    standard: "UEFA 7v7 Set-Piece",
    title: "7v7 Short Corner Triangle & Box Cut-Back",
    tag: "7v7 • 4 Steps",
    desc: "Leaves two defenders at halfway for counter-protection while working a crisp 3-player corner triangle on the right to feed the striker in front of goal.",
    cue: "Two defenders stay back — work a triangle at the corner!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
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
                                  "y": 58
                            },
                            "t2": {
                                  "x": 75.3,
                                  "y": 27.4
                            },
                            "t3": {
                                  "x": 34.4,
                                  "y": 21.8
                            },
                            "t4": {
                                  "x": 77.7,
                                  "y": 12.5
                            },
                            "t5": {
                                  "x": 93,
                                  "y": 6
                            },
                            "t6": {
                                  "x": 51.8,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 8
                            },
                            "o1": {
                                  "x": 40.9,
                                  "y": 15.1
                            },
                            "o2": {
                                  "x": 62.5,
                                  "y": 14.9
                            },
                            "o3": {
                                  "x": 25.9,
                                  "y": 27.4
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 26.2
                            },
                            "o5": {
                                  "x": 81.1,
                                  "y": 20.3
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 93,
                            "y": 6,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 90,
                                              "y": 8
                                        },
                                        {
                                              "x": 80,
                                              "y": 13
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 75.3,
                                              "y": 27.4
                                        },
                                        {
                                              "x": 68,
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
                                  "y": 91
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "t3": {
                                  "x": 33.5,
                                  "y": 20.3
                            },
                            "t4": {
                                  "x": 77.8,
                                  "y": 13.6
                            },
                            "t5": {
                                  "x": 90,
                                  "y": 10
                            },
                            "t6": {
                                  "x": 50.9,
                                  "y": 16.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 8
                            },
                            "o1": {
                                  "x": 40,
                                  "y": 13.5
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 14
                            },
                            "o3": {
                                  "x": 27,
                                  "y": 27.1
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 26
                            },
                            "o5": {
                                  "x": 81.6,
                                  "y": 21.3
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 77.8,
                            "y": 13.6,
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
                                              "x": 76,
                                              "y": 16
                                        },
                                        {
                                              "x": 70,
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
                                  "y": 91
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 67.8,
                                  "y": 22
                            },
                            "t3": {
                                  "x": 34.6,
                                  "y": 15.3
                            },
                            "t4": {
                                  "x": 79.4,
                                  "y": 11.5
                            },
                            "t5": {
                                  "x": 90.7,
                                  "y": 9.9
                            },
                            "t6": {
                                  "x": 50.6,
                                  "y": 16.1
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 7.9
                            },
                            "o1": {
                                  "x": 42,
                                  "y": 21.6
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 14
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 54,
                                  "y": 26
                            },
                            "o5": {
                                  "x": 78.8,
                                  "y": 19.7
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 67.8,
                            "y": 22,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 65,
                                              "y": 21
                                        },
                                        {
                                              "x": 53,
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
                                  "y": 91
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 67.6,
                                  "y": 22.1
                            },
                            "t3": {
                                  "x": 35.4,
                                  "y": 14.2
                            },
                            "t4": {
                                  "x": 79.4,
                                  "y": 11.5
                            },
                            "t5": {
                                  "x": 90.7,
                                  "y": 9.9
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 7.9
                            },
                            "o1": {
                                  "x": 40.8,
                                  "y": 21.4
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 14
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 54,
                                  "y": 26
                            },
                            "o5": {
                                  "x": 78.6,
                                  "y": 19.7
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 16,
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
                                              "x": 49,
                                              "y": 13
                                        },
                                        {
                                              "x": 46,
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
                                  "y": 91
                            },
                            "t1": {
                                  "x": 34,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 67.6,
                                  "y": 22.1
                            },
                            "t3": {
                                  "x": 35.4,
                                  "y": 14.2
                            },
                            "t4": {
                                  "x": 79.4,
                                  "y": 11.5
                            },
                            "t5": {
                                  "x": 90.7,
                                  "y": 9.9
                            },
                            "t6": {
                                  "x": 48.7,
                                  "y": 15.8
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 7.9
                            },
                            "o1": {
                                  "x": 40.6,
                                  "y": 21.6
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 14
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 26
                            },
                            "o4": {
                                  "x": 54,
                                  "y": 26
                            },
                            "o5": {
                                  "x": 78.6,
                                  "y": 19.7
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 46,
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
                                  "x": 37,
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
                                  "x": 67.7,
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
    id: "tpl-7v7-gk-switch-cb",
    category: "match",
    squadFormat: "7v7",
    difficulty: "medium",
    standard: "UEFA Build-Up",
    title: "7v7 Pressed CB Recycle Through GK",
    tag: "7v7 • 6 Steps",
    desc: "When the right-back is pressed after a goal kick, don’t force it down the line: recycle calmly through the GK to switch to the wide-open left side.",
    cue: "Blocked on one side? Bounce off your keeper to switch sides!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
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
                                  "x": 49.6,
                                  "y": 58
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
                                  "x": 30,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 78,
                                  "y": 44
                            },
                            "o6": {
                                  "x": 61.1,
                                  "y": 58
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
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 89
                                        },
                                        {
                                              "x": 75,
                                              "y": 79
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 61.1,
                                              "y": 58
                                        },
                                        {
                                              "x": 72,
                                              "y": 70
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 52,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 78
                            },
                            "t3": {
                                  "x": 14,
                                  "y": 46
                            },
                            "t4": {
                                  "x": 48,
                                  "y": 56
                            },
                            "t5": {
                                  "x": 84.7,
                                  "y": 49.3
                            },
                            "t6": {
                                  "x": 50,
                                  "y": 32
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 26,
                                  "y": 44
                            },
                            "o4": {
                                  "x": 54,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 78,
                                  "y": 56
                            },
                            "o6": {
                                  "x": 72,
                                  "y": 70
                            }
                      },
                      "ball": {
                            "x": 78,
                            "y": 78,
                            "attachedTo": "t2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 75,
                                              "y": 80
                                        },
                                        {
                                              "x": 55,
                                              "y": 89
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 52,
                                  "y": 90
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 78.4,
                                  "y": 78.2
                            },
                            "t3": {
                                  "x": 14,
                                  "y": 38
                            },
                            "t4": {
                                  "x": 45.6,
                                  "y": 52
                            },
                            "t5": {
                                  "x": 84,
                                  "y": 48
                            },
                            "t6": {
                                  "x": 48,
                                  "y": 26
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 70,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 30,
                                  "y": 46
                            },
                            "o4": {
                                  "x": 57.1,
                                  "y": 52
                            },
                            "o5": {
                                  "x": 80,
                                  "y": 58
                            },
                            "o6": {
                                  "x": 68.9,
                                  "y": 73.5
                            }
                      },
                      "ball": {
                            "x": 52,
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
                                              "x": 49,
                                              "y": 88
                                        },
                                        {
                                              "x": 23,
                                              "y": 74
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 14,
                                              "y": 38
                                        },
                                        {
                                              "x": 16,
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
                                  "x": 20,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 74
                            },
                            "t3": {
                                  "x": 16,
                                  "y": 28
                            },
                            "t4": {
                                  "x": 43.6,
                                  "y": 43.8
                            },
                            "t5": {
                                  "x": 80,
                                  "y": 42
                            },
                            "t6": {
                                  "x": 48,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 30,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 40
                            },
                            "o4": {
                                  "x": 53.1,
                                  "y": 48.5
                            },
                            "o5": {
                                  "x": 78,
                                  "y": 54
                            },
                            "o6": {
                                  "x": 64,
                                  "y": 68
                            }
                      },
                      "ball": {
                            "x": 20,
                            "y": 72,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 68
                                        },
                                        {
                                              "x": 16,
                                              "y": 31
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 18
                                        },
                                        {
                                              "x": 48.3,
                                              "y": 16.9
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
                                  "y": 64
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 16,
                                  "y": 24
                            },
                            "t4": {
                                  "x": 44,
                                  "y": 38
                            },
                            "t5": {
                                  "x": 76,
                                  "y": 34
                            },
                            "t6": {
                                  "x": 48.3,
                                  "y": 16.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46,
                                  "y": 8.9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 50
                            },
                            "o6": {
                                  "x": 60,
                                  "y": 64
                            }
                      },
                      "ball": {
                            "x": 16,
                            "y": 24,
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
                                              "x": 19,
                                              "y": 21
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
                                  "x": 22,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 17.7,
                                  "y": 22.1
                            },
                            "t4": {
                                  "x": 44,
                                  "y": 36
                            },
                            "t5": {
                                  "x": 74,
                                  "y": 30
                            },
                            "t6": {
                                  "x": 48.3,
                                  "y": 16.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46,
                                  "y": 8.9
                            },
                            "o1": {
                                  "x": 28.8,
                                  "y": 19.8
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 28,
                                  "y": 36
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 44
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 50
                            },
                            "o6": {
                                  "x": 60,
                                  "y": 64
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
    id: "tpl-7v7-double-wall-channel",
    category: "match",
    squadFormat: "7v7",
    difficulty: "medium",
    standard: "Ajax 7v7 DNA",
    title: "7v7 Wing 1-2 & Far-Post Tap-In",
    tag: "7v7 • 5 Steps",
    desc: "Right winger plays an inside 1-2 off the striker to break into the penalty box, then squares across the face of goal for the opposite winger arriving at the far post.",
    cue: "Back-post winger always sprints in to finish across goal!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "3-2-1",
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
                                  "y": 74
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 72
                            },
                            "t4": {
                                  "x": 21.5,
                                  "y": 46.9
                            },
                            "t5": {
                                  "x": 78,
                                  "y": 44
                            },
                            "t6": {
                                  "x": 54,
                                  "y": 32
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
                                  "x": 70,
                                  "y": 26
                            },
                            "o3": {
                                  "x": 25.4,
                                  "y": 39.2
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 24
                            },
                            "o5": {
                                  "x": 74,
                                  "y": 36
                            },
                            "o6": {
                                  "x": 48,
                                  "y": 48
                            }
                      },
                      "ball": {
                            "x": 78,
                            "y": 44,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 75,
                                              "y": 42
                                        },
                                        {
                                              "x": 57,
                                              "y": 33
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 78,
                                              "y": 44
                                        },
                                        {
                                              "x": 84,
                                              "y": 30
                                        },
                                        {
                                              "x": 76,
                                              "y": 16
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 21.5,
                                              "y": 46.9
                                        },
                                        {
                                              "x": 31.2,
                                              "y": 27.2
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
                                  "x": 22,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 74
                            },
                            "t3": {
                                  "x": 78,
                                  "y": 66
                            },
                            "t4": {
                                  "x": 31.2,
                                  "y": 27.2
                            },
                            "t5": {
                                  "x": 76,
                                  "y": 16
                            },
                            "t6": {
                                  "x": 54,
                                  "y": 32
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 24.5,
                                  "y": 20.5
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 40
                            },
                            "o4": {
                                  "x": 52,
                                  "y": 23.9
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 32
                            },
                            "o6": {
                                  "x": 48,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 54,
                            "y": 32,
                            "attachedTo": "t6"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t6",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 57,
                                              "y": 30
                                        },
                                        {
                                              "x": 73,
                                              "y": 17
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 31.2,
                                              "y": 27.2
                                        },
                                        {
                                              "x": 40,
                                              "y": 13
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
                                  "y": 70
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 76,
                                  "y": 62
                            },
                            "t4": {
                                  "x": 40,
                                  "y": 13
                            },
                            "t5": {
                                  "x": 76,
                                  "y": 16
                            },
                            "t6": {
                                  "x": 56.7,
                                  "y": 26.7
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 56,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 66,
                                  "y": 20
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 20
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 28
                            },
                            "o6": {
                                  "x": 48,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 76,
                            "y": 16,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 73,
                                              "y": 16
                                        },
                                        {
                                              "x": 43,
                                              "y": 13
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
                                  "y": 70
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 76,
                                  "y": 62
                            },
                            "t4": {
                                  "x": 40,
                                  "y": 13
                            },
                            "t5": {
                                  "x": 75,
                                  "y": 15.5
                            },
                            "t6": {
                                  "x": 56.5,
                                  "y": 25.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 56,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 65.6,
                                  "y": 20.2
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 47.9,
                                  "y": 19.7
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 28
                            },
                            "o6": {
                                  "x": 48,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 40,
                            "y": 13,
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
                                              "x": 41,
                                              "y": 10
                                        },
                                        {
                                              "x": 44,
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
                                  "x": 24,
                                  "y": 70
                            },
                            "t2": {
                                  "x": 50,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 76,
                                  "y": 62
                            },
                            "t4": {
                                  "x": 41,
                                  "y": 12
                            },
                            "t5": {
                                  "x": 75,
                                  "y": 15.5
                            },
                            "t6": {
                                  "x": 56.5,
                                  "y": 25.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 56,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 65.6,
                                  "y": 20.2
                            },
                            "o3": {
                                  "x": 24,
                                  "y": 38
                            },
                            "o4": {
                                  "x": 47.9,
                                  "y": 19.7
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 28
                            },
                            "o6": {
                                  "x": 48,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 44,
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
                                  "x": 63,
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
    id: "tpl-7v7-diamond-overload",
    category: "match",
    squadFormat: "7v7",
    difficulty: "advanced",
    standard: "La Masia 7v7",
    title: "7v7 2-1-2-1 Box Midfield Through-Ball",
    tag: "7v7 • 5 Steps",
    desc: "Uses the 2-1-2-1 central diamond to outnumber a flat midfield: pivot connects left-to-right across the half-spaces before threading the striker in behind.",
    cue: "Dominate the middle diamond — draw them narrow then slip in!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-1-2-1",
          "lanesMode": "thirds",
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
                                  "y": 76
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 76
                            },
                            "t3": {
                                  "x": 49.8,
                                  "y": 61.5
                            },
                            "t4": {
                                  "x": 28.4,
                                  "y": 46.2
                            },
                            "t5": {
                                  "x": 71.3,
                                  "y": 44.2
                            },
                            "t6": {
                                  "x": 48,
                                  "y": 28
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 18.9,
                                  "y": 41.5
                            },
                            "o4": {
                                  "x": 48,
                                  "y": 48
                            },
                            "o5": {
                                  "x": 82.1,
                                  "y": 41.5
                            },
                            "o6": {
                                  "x": 52.5,
                                  "y": 69.5
                            }
                      },
                      "ball": {
                            "x": 28,
                            "y": 76,
                            "attachedTo": "t1"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 24,
                                  "y1": 38,
                                  "x2": 76,
                                  "y2": 64
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 31,
                                              "y": 74
                                        },
                                        {
                                              "x": 47,
                                              "y": 63
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
                                  "x": 28,
                                  "y": 74
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 74
                            },
                            "t3": {
                                  "x": 50.1,
                                  "y": 61.8
                            },
                            "t4": {
                                  "x": 30.7,
                                  "y": 44.2
                            },
                            "t5": {
                                  "x": 68,
                                  "y": 38
                            },
                            "t6": {
                                  "x": 46,
                                  "y": 26
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 19.9,
                                  "y": 41.5
                            },
                            "o4": {
                                  "x": 46,
                                  "y": 52
                            },
                            "o5": {
                                  "x": 78,
                                  "y": 42
                            },
                            "o6": {
                                  "x": 47.4,
                                  "y": 69.8
                            }
                      },
                      "ball": {
                            "x": 50.1,
                            "y": 61.8,
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
                                              "x": 47,
                                              "y": 60
                                        },
                                        {
                                              "x": 32,
                                              "y": 46
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 68,
                                              "y": 38
                                        },
                                        {
                                              "x": 64,
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
                                  "x": 28,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 48,
                                  "y": 56
                            },
                            "t4": {
                                  "x": 30.4,
                                  "y": 44.1
                            },
                            "t5": {
                                  "x": 64,
                                  "y": 32
                            },
                            "t6": {
                                  "x": 44,
                                  "y": 24
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 19.9,
                                  "y": 40.6
                            },
                            "o4": {
                                  "x": 41.5,
                                  "y": 46.3
                            },
                            "o5": {
                                  "x": 78,
                                  "y": 40
                            },
                            "o6": {
                                  "x": 46,
                                  "y": 64.1
                            }
                      },
                      "ball": {
                            "x": 30.4,
                            "y": 44.1,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t5",
                                  "pts": [
                                        {
                                              "x": 33,
                                              "y": 43
                                        },
                                        {
                                              "x": 61,
                                              "y": 33
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 44,
                                              "y": 24
                                        },
                                        {
                                              "x": 52.8,
                                              "y": 16.2
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
                                  "y": 72
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 48,
                                  "y": 54
                            },
                            "t4": {
                                  "x": 32.7,
                                  "y": 39.8
                            },
                            "t5": {
                                  "x": 64,
                                  "y": 32
                            },
                            "t6": {
                                  "x": 52.8,
                                  "y": 16.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 47.9,
                                  "y": 8.8
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 21.9,
                                  "y": 42.5
                            },
                            "o4": {
                                  "x": 44,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 38
                            },
                            "o6": {
                                  "x": 46,
                                  "y": 64
                            }
                      },
                      "ball": {
                            "x": 64,
                            "y": 32,
                            "attachedTo": "t5"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t5",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 62,
                                              "y": 29
                                        },
                                        {
                                              "x": 54,
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
                                  "x": 28,
                                  "y": 72
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 48,
                                  "y": 54
                            },
                            "t4": {
                                  "x": 32.4,
                                  "y": 37.8
                            },
                            "t5": {
                                  "x": 64,
                                  "y": 30
                            },
                            "t6": {
                                  "x": 52.2,
                                  "y": 15.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 45.5,
                                  "y": 8.5
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 22.9,
                                  "y": 42.5
                            },
                            "o4": {
                                  "x": 44,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 38
                            },
                            "o6": {
                                  "x": 46,
                                  "y": 64
                            }
                      },
                      "ball": {
                            "x": 52.2,
                            "y": 15.2,
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
                                              "x": 52,
                                              "y": 12
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
                                  "y": 72
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 72
                            },
                            "t3": {
                                  "x": 48,
                                  "y": 54
                            },
                            "t4": {
                                  "x": 32.4,
                                  "y": 37.8
                            },
                            "t5": {
                                  "x": 64,
                                  "y": 30
                            },
                            "t6": {
                                  "x": 53.3,
                                  "y": 15.1
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 45.8,
                                  "y": 8.9
                            },
                            "o1": {
                                  "x": 32,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 22.9,
                                  "y": 42.5
                            },
                            "o4": {
                                  "x": 44,
                                  "y": 42
                            },
                            "o5": {
                                  "x": 76,
                                  "y": 38
                            },
                            "o6": {
                                  "x": 46,
                                  "y": 64
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
    id: "tpl-7v7-high-press-counter",
    category: "match",
    squadFormat: "7v7",
    difficulty: "advanced",
    standard: "UEFA Gegenpress",
    title: "7v7 Front-Three Press Trap & Finish",
    tag: "7v7 • 5 Steps",
    desc: "Striker curves their run to block the pass back to the GK while the right winger and centre-mid lock onto the full-back, winning possession high to score.",
    cue: "Curve your run to cut off the keeper — trap on the sideline!",
    build: () => ({
          "pitchMode": "7v7",
          "formationId": "2-3-1",
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
                                  "y": 70
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 70
                            },
                            "t3": {
                                  "x": 23.4,
                                  "y": 44.7
                            },
                            "t4": {
                                  "x": 52,
                                  "y": 44
                            },
                            "t5": {
                                  "x": 77.8,
                                  "y": 35.6
                            },
                            "t6": {
                                  "x": 48,
                                  "y": 24
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 76,
                                  "y": 22
                            },
                            "o3": {
                                  "x": 13.9,
                                  "y": 40
                            },
                            "o4": {
                                  "x": 50,
                                  "y": 35.9
                            },
                            "o5": {
                                  "x": 82.7,
                                  "y": 43.1
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 9,
                            "attachedTo": "o0"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "o0",
                                  "toId": "o2",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 11
                                        },
                                        {
                                              "x": 73,
                                              "y": 21
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 24
                                        },
                                        {
                                              "x": 58,
                                              "y": 16
                                        },
                                        {
                                              "x": 64,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 77.8,
                                              "y": 35.6
                                        },
                                        {
                                              "x": 79.6,
                                              "y": 29.3
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
                                  "x": 68,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 25.4,
                                  "y": 42
                            },
                            "t4": {
                                  "x": 60.4,
                                  "y": 36
                            },
                            "t5": {
                                  "x": 79.6,
                                  "y": 29.3
                            },
                            "t6": {
                                  "x": 64,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 9
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 75.8,
                                  "y": 21.6
                            },
                            "o3": {
                                  "x": 13.9,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 48.9,
                                  "y": 36
                            },
                            "o5": {
                                  "x": 84,
                                  "y": 40
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 75.8,
                            "y": 21.6,
                            "attachedTo": "o2"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 62,
                                  "y1": 14,
                                  "x2": 88,
                                  "y2": 38
                            },
                            {
                                  "type": "pass",
                                  "fromId": "o2",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 73,
                                              "y": 25
                                        },
                                        {
                                              "x": 62,
                                              "y": 34
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
                                  "x": 68,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 28,
                                  "y": 36
                            },
                            "t4": {
                                  "x": 60,
                                  "y": 34
                            },
                            "t5": {
                                  "x": 80.4,
                                  "y": 24
                            },
                            "t6": {
                                  "x": 52.3,
                                  "y": 16.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 8.9
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 22
                            },
                            "o2": {
                                  "x": 68.9,
                                  "y": 24
                            },
                            "o3": {
                                  "x": 20,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 48,
                                  "y": 34
                            },
                            "o5": {
                                  "x": 84,
                                  "y": 40
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 60,
                            "y": 34,
                            "attachedTo": "t4"
                      },
                      "gear": [],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t4",
                                  "toId": "t6",
                                  "pts": [
                                        {
                                              "x": 58,
                                              "y": 31
                                        },
                                        {
                                              "x": 53,
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
                                  "x": 32,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 30,
                                  "y": 30
                            },
                            "t4": {
                                  "x": 60,
                                  "y": 32
                            },
                            "t5": {
                                  "x": 77.2,
                                  "y": 20.8
                            },
                            "t6": {
                                  "x": 52.1,
                                  "y": 16.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 47.7,
                                  "y": 8.5
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 20
                            },
                            "o2": {
                                  "x": 70.5,
                                  "y": 27.5
                            },
                            "o3": {
                                  "x": 20,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 48,
                                  "y": 32
                            },
                            "o5": {
                                  "x": 84,
                                  "y": 40
                            },
                            "o6": {
                                  "x": 50,
                                  "y": 56
                            }
                      },
                      "ball": {
                            "x": 52.1,
                            "y": 16.2,
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
                                              "x": 52,
                                              "y": 13
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
                                  "x": 32,
                                  "y": 68
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 68
                            },
                            "t3": {
                                  "x": 30,
                                  "y": 28
                            },
                            "t4": {
                                  "x": 60,
                                  "y": 32
                            },
                            "t5": {
                                  "x": 77.2,
                                  "y": 20.8
                            },
                            "t6": {
                                  "x": 52.8,
                                  "y": 15.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46.9,
                                  "y": 8.9
                            },
                            "o1": {
                                  "x": 28,
                                  "y": 19.9
                            },
                            "o2": {
                                  "x": 70.5,
                                  "y": 27.5
                            },
                            "o3": {
                                  "x": 20,
                                  "y": 42
                            },
                            "o4": {
                                  "x": 48,
                                  "y": 32
                            },
                            "o5": {
                                  "x": 84,
                                  "y": 40
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
    id: "tpl-drill-triangle-turn",
    category: "training",
    squadFormat: null,
    difficulty: "easy",
    standard: "Coerver Ball Mastery",
    title: "3-Player Triangle Receive & Back-Foot Turn",
    tag: "Blank Grass • 5 Steps",
    desc: "Fundamental 3-cone triangle: middle receiver checks off their cone, opens their body to take the ball on the back foot, and plays crisp to the next corner.",
    cue: "Check away from your cone — open body and take it back-foot!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 3,
          "hideGkBadge": true,
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 84
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 50
                            },
                            "t2": {
                                  "x": 74,
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
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 48
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 74,
                                  "y": 24
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 28,
                                              "y": 50
                                        },
                                        {
                                              "x": 18,
                                              "y": 52
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
                                              "y": 81
                                        },
                                        {
                                              "x": 20,
                                              "y": 54
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 84
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 52
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 18
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 18,
                            "y": 52,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 48
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 74,
                                  "y": 24
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 52
                                        },
                                        {
                                              "x": 20,
                                              "y": 42
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
                                              "x": 30,
                                              "y": 56
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 30,
                                  "y": 56
                            },
                            "t1": {
                                  "x": 20,
                                  "y": 42
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 18
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 20,
                            "y": 42,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 48
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 74,
                                  "y": 24
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 23,
                                              "y": 40
                                        },
                                        {
                                              "x": 71,
                                              "y": 20
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 42
                                        },
                                        {
                                              "x": 64,
                                              "y": 24
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 28,
                                  "y": 52
                            },
                            "t1": {
                                  "x": 64,
                                  "y": 24
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 18
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 74,
                            "y": 18,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 48
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 74,
                                  "y": 24
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 74,
                                              "y": 18
                                        },
                                        {
                                              "x": 78,
                                              "y": 30
                                        }
                                  ]
                            },
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 76,
                                              "y": 32
                                        },
                                        {
                                              "x": 52,
                                              "y": 80
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 28,
                                              "y": 52
                                        },
                                        {
                                              "x": 50,
                                              "y": 84
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 84
                            },
                            "t1": {
                                  "x": 72,
                                  "y": 20
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 30
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
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 48
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 74,
                                  "y": 24
                            }
                      ],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-drill-4corner-squares",
    category: "training",
    squadFormat: null,
    difficulty: "easy",
    standard: "FA Foundation Warm-Up",
    title: "Pass, Sprint & Follow Around the Square",
    tag: "Blank Grass • 5 Steps",
    desc: "Classic Tuesday night technical warm-up: pass firmly down the outside of the cone square to your teammate’s back foot, then sprint to follow your pass.",
    cue: "Firm pass to their back foot — sprint straight to follow it!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 5,
          "hideGkBadge": true,
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 20,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 22
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 18
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 78
                            },
                            "t4": {
                                  "x": 14,
                                  "y": 88
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 20,
                            "y": 78,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 76
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 24
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 76
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 74
                                        },
                                        {
                                              "x": 18,
                                              "y": 26
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 78
                                        },
                                        {
                                              "x": 20,
                                              "y": 34
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 14,
                                              "y": 88
                                        },
                                        {
                                              "x": 20,
                                              "y": 80
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 20,
                                  "y": 34
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 22
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 18
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 78
                            },
                            "t4": {
                                  "x": 20,
                                  "y": 80
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 18,
                            "y": 22,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 76
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 24
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 76
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 22,
                                              "y": 21
                                        },
                                        {
                                              "x": 76,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 18,
                                              "y": 22
                                        },
                                        {
                                              "x": 66,
                                              "y": 18
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 20,
                                              "y": 34
                                        },
                                        {
                                              "x": 18,
                                              "y": 22
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 18,
                                  "y": 22
                            },
                            "t1": {
                                  "x": 66,
                                  "y": 18
                            },
                            "t2": {
                                  "x": 80,
                                  "y": 18
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 78
                            },
                            "t4": {
                                  "x": 20,
                                  "y": 80
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 80,
                            "y": 18,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 76
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 24
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 76
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 22
                                        },
                                        {
                                              "x": 82,
                                              "y": 74
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 80,
                                              "y": 18
                                        },
                                        {
                                              "x": 82,
                                              "y": 66
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 66,
                                              "y": 18
                                        },
                                        {
                                              "x": 80,
                                              "y": 18
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 18,
                                  "y": 22
                            },
                            "t1": {
                                  "x": 80,
                                  "y": 18
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 66
                            },
                            "t3": {
                                  "x": 82,
                                  "y": 78
                            },
                            "t4": {
                                  "x": 20,
                                  "y": 80
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 82,
                            "y": 78,
                            "attachedTo": "t3"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 76
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 24
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 76
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t3",
                                  "toId": "t4",
                                  "pts": [
                                        {
                                              "x": 78,
                                              "y": 79
                                        },
                                        {
                                              "x": 24,
                                              "y": 80
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 78
                                        },
                                        {
                                              "x": 34,
                                              "y": 80
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 82,
                                              "y": 66
                                        },
                                        {
                                              "x": 82,
                                              "y": 78
                                        }
                                  ]
                            }
                      ]
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 18,
                                  "y": 22
                            },
                            "t1": {
                                  "x": 80,
                                  "y": 18
                            },
                            "t2": {
                                  "x": 82,
                                  "y": 78
                            },
                            "t3": {
                                  "x": 34,
                                  "y": 80
                            },
                            "t4": {
                                  "x": 20,
                                  "y": 80
                            }
                      },
                      "oppPos": {},
                      "ball": {
                            "x": 20,
                            "y": 80,
                            "attachedTo": "t4"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 76
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 24
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 76
                            }
                      ],
                      "drawings": []
                }
          ]
    })
  },
  {
    id: "tpl-drill-1v1-shield-turn",
    category: "training",
    squadFormat: null,
    difficulty: "easy",
    standard: "FA 1v1 Foundation",
    title: "1v1 Back-to-Goal Turn & Twin Mini-Goals",
    tag: "Blank Grass • 5 Steps",
    desc: "Server plays into the striker’s feet with a tight defender behind: fake toward the left mini-goal to shift the defender, spin right, and score!",
    cue: "Feel the defender behind you — fake one way, spin the other!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 2,
          "hideGkBadge": true,
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
                                  "x": 50,
                                  "y": 48
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 36
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
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 50,
                                  "y": 82
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
                                              "y": 75
                                        },
                                        {
                                              "x": 50,
                                              "y": 51
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
                                              "y": 39.8
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 48
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 39.8
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 48,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 50,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 48
                                        },
                                        {
                                              "x": 38,
                                              "y": 44
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 39.8
                                        },
                                        {
                                              "x": 35,
                                              "y": 35
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 38,
                                  "y": 44
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 35,
                                  "y": 35
                            }
                      },
                      "ball": {
                            "x": 38,
                            "y": 44,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 50,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 38,
                                              "y": 44
                                        },
                                        {
                                              "x": 58,
                                              "y": 38
                                        },
                                        {
                                              "x": 72,
                                              "y": 28
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 72,
                                  "y": 28
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 32
                            }
                      },
                      "ball": {
                            "x": 72,
                            "y": 28,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 50,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 73,
                                              "y": 25
                                        },
                                        {
                                              "x": 76,
                                              "y": 14
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 73,
                                  "y": 25
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 56,
                                  "y": 28
                            }
                      },
                      "ball": {
                            "x": 76,
                            "y": 14,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 24,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 76,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 50,
                                  "y": 82
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 1
                }
          ]
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
    id: "tpl-drill-y-passing-shoot",
    category: "training",
    squadFormat: null,
    difficulty: "medium",
    standard: "UEFA Technical",
    title: "Y-Shape Combination & Goal Finish",
    tag: "Half Pitch • 5 Steps",
    desc: "UEFA Y-shape passing pattern: server plays into the central pivot, bounces back, threads an angled through-pass around the pole into the runner’s stride to score.",
    cue: "Bounce short to set the angle — weight the pass into stride!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 3,
          "hideGkBadge": true,
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
                                  "x": 50,
                                  "y": 80
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 38
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
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
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 50,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 34
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 34
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 49,
                                              "y": 77
                                        },
                                        {
                                              "x": 45,
                                              "y": 57
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 80
                                        },
                                        {
                                              "x": 56,
                                              "y": 66
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 56,
                                  "y": 66
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 78,
                                  "y": 38
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 44,
                            "y": 54,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 50,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 34
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 34
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 56
                                        },
                                        {
                                              "x": 54,
                                              "y": 64
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 78,
                                              "y": 38
                                        },
                                        {
                                              "x": 68,
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
                                  "x": 56,
                                  "y": 66
                            },
                            "t1": {
                                  "x": 42,
                                  "y": 48
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 53,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 56,
                            "y": 66,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 50,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 34
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 34
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 58,
                                              "y": 63
                                        },
                                        {
                                              "x": 67,
                                              "y": 23
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 56,
                                  "y": 62
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 36
                            },
                            "t2": {
                                  "x": 66,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 66,
                            "y": 18,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 50,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 34
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 34
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
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
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 56,
                                  "y": 62
                            },
                            "t1": {
                                  "x": 44,
                                  "y": 34
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 17
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 54,
                                  "y": 10
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
                                  "x": 50,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 50,
                                  "y": 50
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 34
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 34
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 1
                }
          ]
    })
  },
  {
    id: "tpl-drill-wing-cross-finish",
    category: "training",
    squadFormat: null,
    difficulty: "medium",
    standard: "FA Finishing",
    title: "Wide Overlap Cross & Two-Runner Finish",
    tag: "Half Pitch • 5 Steps",
    desc: "Midfielder feeds the overlapping left winger past the slalom pole, then times two coordinated box runs (one near post, one penalty spot) to finish the low cross.",
    cue: "One attacks near post, one holds the spot — head up to cross!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 3,
          "hideGkBadge": true,
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
                                  "x": 50,
                                  "y": 70
                            },
                            "t1": {
                                  "x": 16,
                                  "y": 54
                            },
                            "t2": {
                                  "x": 68,
                                  "y": 52
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
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
                                  "kind": "pole",
                                  "x": 22,
                                  "y": 40
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 46,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 74
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 16,
                                              "y": 54
                                        },
                                        {
                                              "x": 14,
                                              "y": 30
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
                                              "y": 68
                                        },
                                        {
                                              "x": 16,
                                              "y": 32
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 56
                            },
                            "t1": {
                                  "x": 14,
                                  "y": 30
                            },
                            "t2": {
                                  "x": 64,
                                  "y": 40
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 14,
                            "y": 30,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 22,
                                  "y": 40
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 46,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 74
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "dribble",
                                  "pts": [
                                        {
                                              "x": 14,
                                              "y": 30
                                        },
                                        {
                                              "x": 16,
                                              "y": 14
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50,
                                              "y": 56
                                        },
                                        {
                                              "x": 37.4,
                                              "y": 16.6
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 64,
                                              "y": 40
                                        },
                                        {
                                              "x": 54,
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
                                  "x": 37.4,
                                  "y": 16.6
                            },
                            "t1": {
                                  "x": 16,
                                  "y": 14
                            },
                            "t2": {
                                  "x": 54,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44.1,
                                  "y": 9.9
                            }
                      },
                      "ball": {
                            "x": 16,
                            "y": 14,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 22,
                                  "y": 40
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 46,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 74
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 19,
                                              "y": 15
                                        },
                                        {
                                              "x": 51,
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
                                  "x": 37.4,
                                  "y": 15.4
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 15
                            },
                            "t2": {
                                  "x": 54,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46.1,
                                  "y": 10
                            }
                      },
                      "ball": {
                            "x": 54,
                            "y": 20,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "pole",
                                  "x": 22,
                                  "y": 40
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 46,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 74
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 54,
                                              "y": 17
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
                                  "x": 37.4,
                                  "y": 15.4
                            },
                            "t1": {
                                  "x": 18,
                                  "y": 15
                            },
                            "t2": {
                                  "x": 54,
                                  "y": 18
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 46.1,
                                  "y": 10
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
                                  "x": 22,
                                  "y": 40
                            },
                            {
                                  "id": "g2",
                                  "kind": "pole",
                                  "x": 46,
                                  "y": 24
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 50,
                                  "y": 74
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 1
                }
          ]
    })
  },
  {
    id: "tpl-drill-3v1-transfer-rondo",
    category: "training",
    squadFormat: null,
    difficulty: "medium",
    standard: "Ajax Rondo DNA",
    title: "Twin-Box 3v1 Transfer Rondo",
    tag: "Blank Grass • 5 Steps",
    desc: "String quick passes in the bottom 3v1 box to draw the chaser in, then thread a split pass into the target player in the top box and transition up to support.",
    cue: "Three quick passes to draw the chaser — split to the next box!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 4,
          "hideGkBadge": true,
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
                                  "y": 80
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 64
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 66
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
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 84
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 50
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-lime",
                                  "x": 24,
                                  "y": 16
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 16
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
                                              "y": 78
                                        },
                                        {
                                              "x": 30,
                                              "y": 66
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 66
                                        },
                                        {
                                              "x": 38.9,
                                              "y": 66.2
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 80
                            },
                            "t1": {
                                  "x": 27.9,
                                  "y": 64
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 62
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 38.9,
                                  "y": 66.2
                            }
                      },
                      "ball": {
                            "x": 27.9,
                            "y": 64,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 84
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 50
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-lime",
                                  "x": 24,
                                  "y": 16
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 16
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 31,
                                              "y": 64
                                        },
                                        {
                                              "x": 69,
                                              "y": 62
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 38.9,
                                              "y": 66.2
                                        },
                                        {
                                              "x": 58,
                                              "y": 62
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 78
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 58
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 62
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
                            "x": 72,
                            "y": 62,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 84
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 50
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-lime",
                                  "x": 24,
                                  "y": 16
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 16
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t3",
                                  "pts": [
                                        {
                                              "x": 70,
                                              "y": 59
                                        },
                                        {
                                              "x": 52,
                                              "y": 25
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 28,
                                              "y": 58
                                        },
                                        {
                                              "x": 28,
                                              "y": 34
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 72,
                                              "y": 62
                                        },
                                        {
                                              "x": 72,
                                              "y": 34
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 34
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 34
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 52,
                                  "y": 40
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 22,
                            "attachedTo": "t3"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 84
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 50
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-lime",
                                  "x": 24,
                                  "y": 16
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 16
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
                                              "y": 24
                                        },
                                        {
                                              "x": 30,
                                              "y": 33
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 52,
                                              "y": 40
                                        },
                                        {
                                              "x": 44,
                                              "y": 32
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 1
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 50,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 28,
                                  "y": 34
                            },
                            "t2": {
                                  "x": 72,
                                  "y": 34
                            },
                            "t3": {
                                  "x": 50,
                                  "y": 22
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44,
                                  "y": 32
                            }
                      },
                      "ball": {
                            "x": 28,
                            "y": 34,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 24,
                                  "y": 84
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 76,
                                  "y": 84
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 24,
                                  "y": 50
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 76,
                                  "y": 50
                            },
                            {
                                  "id": "g5",
                                  "kind": "cone-lime",
                                  "x": 24,
                                  "y": 16
                            },
                            {
                                  "id": "g6",
                                  "kind": "cone-lime",
                                  "x": 76,
                                  "y": 16
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 1
                }
          ]
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
                                  "x": 65,
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
  },
  {
    id: "tpl-drill-2v2-plus1-neutral",
    category: "training",
    squadFormat: null,
    difficulty: "advanced",
    standard: "La Masia Positional",
    title: "2v2 + Magic Man Directional Box",
    tag: "Blank Grass • 5 Steps",
    desc: "Directional possession game with a central all-time attacker (\"Magic Man\"): combine to create 3v2 triangles, pull defenders narrow, and score into the open mini-goal.",
    cue: "Use the central Magic Man to always create a 2v1 triangle!",
    build: () => ({
          "pitchMode": "blank",
          "formationId": "drill-diamond",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 3,
          "hideGkBadge": true,
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
                                  "x": 30,
                                  "y": 76
                            },
                            "t1": {
                                  "x": 50,
                                  "y": 52
                            },
                            "t2": {
                                  "x": 74,
                                  "y": 66
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 38,
                                  "y": 58
                            },
                            "o1": {
                                  "x": 64,
                                  "y": 44
                            }
                      },
                      "ball": {
                            "x": 30,
                            "y": 76,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 26,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 74,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 18,
                                  "y": 82
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 82,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 33,
                                              "y": 73
                                        },
                                        {
                                              "x": 48,
                                              "y": 55
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 30,
                                              "y": 76
                                        },
                                        {
                                              "x": 22,
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
                                  "x": 22,
                                  "y": 44
                            },
                            "t1": {
                                  "x": 50.3,
                                  "y": 51.9
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 52
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 39.5,
                                  "y": 54.6
                            },
                            "o1": {
                                  "x": 60,
                                  "y": 46
                            }
                      },
                      "ball": {
                            "x": 50.3,
                            "y": 51.9,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 26,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 74,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 18,
                                  "y": 82
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 82,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 52
                                        },
                                        {
                                              "x": 73,
                                              "y": 52
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 50.3,
                                              "y": 51.9
                                        },
                                        {
                                              "x": 48,
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
                                  "x": 24,
                                  "y": 30
                            },
                            "t1": {
                                  "x": 48,
                                  "y": 34
                            },
                            "t2": {
                                  "x": 76,
                                  "y": 52
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 44,
                                  "y": 42
                            },
                            "o1": {
                                  "x": 68,
                                  "y": 42
                            }
                      },
                      "ball": {
                            "x": 76,
                            "y": 52,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 26,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 74,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 18,
                                  "y": 82
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 82,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 73,
                                              "y": 50
                                        },
                                        {
                                              "x": 51,
                                              "y": 35
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 24,
                                              "y": 30
                                        },
                                        {
                                              "x": 26,
                                              "y": 24
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 26,
                                  "y": 24
                            },
                            "t1": {
                                  "x": 48.7,
                                  "y": 34
                            },
                            "t2": {
                                  "x": 74.7,
                                  "y": 38.2
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 37.2,
                                  "y": 34
                            },
                            "o1": {
                                  "x": 63.9,
                                  "y": 35.5
                            }
                      },
                      "ball": {
                            "x": 48.7,
                            "y": 34,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 26,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 74,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 18,
                                  "y": 82
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 82,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 45,
                                              "y": 32
                                        },
                                        {
                                              "x": 29,
                                              "y": 25
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 26,
                                  "y": 24
                            },
                            "t1": {
                                  "x": 48.3,
                                  "y": 32.1
                            },
                            "t2": {
                                  "x": 72.9,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 37.2,
                                  "y": 29.8
                            },
                            "o1": {
                                  "x": 61.4,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 26,
                            "y": 24,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 26,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 74,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 18,
                                  "y": 82
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 82,
                                  "y": 82
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 26,
                                              "y": 21
                                        },
                                        {
                                              "x": 26,
                                              "y": 14
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 26,
                                  "y": 23
                            },
                            "t1": {
                                  "x": 48.3,
                                  "y": 32.1
                            },
                            "t2": {
                                  "x": 72.9,
                                  "y": 34
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 37.2,
                                  "y": 29.8
                            },
                            "o1": {
                                  "x": 61.4,
                                  "y": 34
                            }
                      },
                      "ball": {
                            "x": 26,
                            "y": 14,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "mini-goal",
                                  "x": 26,
                                  "y": 14
                            },
                            {
                                  "id": "g2",
                                  "kind": "mini-goal",
                                  "x": 74,
                                  "y": 14
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-amber",
                                  "x": 18,
                                  "y": 82
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-amber",
                                  "x": 82,
                                  "y": 82
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 2
                }
          ]
    })
  },
  {
    id: "tpl-drill-gk-shot-rebound",
    category: "training",
    squadFormat: null,
    difficulty: "advanced",
    standard: "FA Reactions & Finishing",
    title: "Edge Strike, GK Parry & Rebound Tap-In",
    tag: "Half Pitch • 5 Steps",
    desc: "Trains strikers to follow every shot in: edge-of-box strike is parried wide by the goalkeeper, and the weak-side forward reacts fastest to beat the defender to the rebound.",
    cue: "Never admire a shot — follow every strike in for the rebound!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 3,
          "hideGkBadge": true,
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
                                  "x": 66,
                                  "y": 54
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 36
                            },
                            "t2": {
                                  "x": 30,
                                  "y": 36
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 40,
                                  "y": 26
                            }
                      },
                      "ball": {
                            "x": 66,
                            "y": 54,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 34,
                                  "y": 42
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 66,
                                  "y": 42
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 64,
                                              "y": 51
                                        },
                                        {
                                              "x": 56,
                                              "y": 38
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 30,
                                              "y": 36
                                        },
                                        {
                                              "x": 31.7,
                                              "y": 26.1
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
                                  "y": 48
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 36
                            },
                            "t2": {
                                  "x": 31.7,
                                  "y": 26.1
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 42.8,
                                  "y": 23.8
                            }
                      },
                      "ball": {
                            "x": 54,
                            "y": 36,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 34,
                                  "y": 42
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 66,
                                  "y": 42
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "o0",
                                  "pts": [
                                        {
                                              "x": 53,
                                              "y": 33
                                        },
                                        {
                                              "x": 50,
                                              "y": 12
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 31.7,
                                              "y": 26.1
                                        },
                                        {
                                              "x": 34,
                                              "y": 16
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 62,
                                  "y": 44
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 28
                            },
                            "t2": {
                                  "x": 34,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44,
                                  "y": 22
                            }
                      },
                      "ball": {
                            "x": 48,
                            "y": 10,
                            "attachedTo": "o0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 34,
                                  "y": 42
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 66,
                                  "y": 42
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "o0",
                                  "toId": "t2",
                                  "pts": [
                                        {
                                              "x": 45,
                                              "y": 11
                                        },
                                        {
                                              "x": 36,
                                              "y": 15
                                        }
                                  ]
                            }
                      ],
                      "customOppCount": 2
                },
                {
                      "teamPos": {
                            "t0": {
                                  "x": 62,
                                  "y": 42
                            },
                            "t1": {
                                  "x": 54,
                                  "y": 24
                            },
                            "t2": {
                                  "x": 34,
                                  "y": 16
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 44,
                                  "y": 20
                            }
                      },
                      "ball": {
                            "x": 34,
                            "y": 16,
                            "attachedTo": "t2"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 34,
                                  "y": 42
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 66,
                                  "y": 42
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t2",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 36,
                                              "y": 13
                                        },
                                        {
                                              "x": 44,
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
                                  "x": 62,
                                  "y": 42
                            },
                            "t1": {
                                  "x": 54.4,
                                  "y": 22.1
                            },
                            "t2": {
                                  "x": 35.8,
                                  "y": 13.9
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 43.2,
                                  "y": 20.2
                            }
                      },
                      "ball": {
                            "x": 44,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-amber",
                                  "x": 34,
                                  "y": 42
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-amber",
                                  "x": 66,
                                  "y": 42
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 2
                }
          ]
    })
  },
  {
    id: "tpl-drill-pressing-gates-counter",
    category: "training",
    squadFormat: null,
    difficulty: "advanced",
    standard: "UEFA Pressing Trap",
    title: "2v2 Sideline Press Trap → Fast Finish",
    tag: "Half Pitch • 5 Steps",
    desc: "Build-up pair try to play out through wide halfway gates; pressing pair curve their run to trap on the sideline, win possession, play a 1-2, and score.",
    cue: "One shows them down the line — partner steps in to steal & score!",
    build: () => ({
          "pitchMode": "half",
          "formationId": "half-attack",
          "lanesMode": "off",
          "oppMode": "off",
          "customTeamCount": 2,
          "hideGkBadge": true,
          "customOppRoster": [
                {
                      "id": "o0",
                      "label": "GK",
                      "isGk": true
                },
                {
                      "id": "o1",
                      "label": "B1",
                      "isGk": false
                },
                {
                      "id": "o2",
                      "label": "B2",
                      "isGk": false
                }
          ],
          "steps": [
                {
                      "teamPos": {
                            "t0": {
                                  "x": 46,
                                  "y": 44
                            },
                            "t1": {
                                  "x": 26,
                                  "y": 54
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 28
                            }
                      },
                      "ball": {
                            "x": 50,
                            "y": 10,
                            "attachedTo": "o0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 16,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 32,
                                  "y": 78
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 84,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "o0",
                                  "toId": "o1",
                                  "pts": [
                                        {
                                              "x": 47,
                                              "y": 12
                                        },
                                        {
                                              "x": 28,
                                              "y": 26
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 46,
                                              "y": 44
                                        },
                                        {
                                              "x": 38,
                                              "y": 26
                                        }
                                  ]
                            },
                            {
                                  "type": "run",
                                  "pts": [
                                        {
                                              "x": 26,
                                              "y": 54
                                        },
                                        {
                                              "x": 22,
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
                                  "x": 38,
                                  "y": 26
                            },
                            "t1": {
                                  "x": 22,
                                  "y": 38
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 50,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 68,
                                  "y": 30
                            }
                      },
                      "ball": {
                            "x": 24,
                            "y": 28,
                            "attachedTo": "o1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 16,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 32,
                                  "y": 78
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 84,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "zone",
                                  "x1": 12,
                                  "y1": 20,
                                  "x2": 36,
                                  "y2": 42
                            },
                            {
                                  "type": "pass",
                                  "fromId": "o1",
                                  "toId": "t1",
                                  "pts": [
                                        {
                                              "x": 23,
                                              "y": 31
                                        },
                                        {
                                              "x": 22,
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
                                  "x": 46,
                                  "y": 20
                            },
                            "t1": {
                                  "x": 22,
                                  "y": 36
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 24,
                                  "y": 27.9
                            },
                            "o2": {
                                  "x": 64,
                                  "y": 26
                            }
                      },
                      "ball": {
                            "x": 22,
                            "y": 36,
                            "attachedTo": "t1"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 16,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 32,
                                  "y": 78
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 84,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t1",
                                  "toId": "t0",
                                  "pts": [
                                        {
                                              "x": 25,
                                              "y": 34
                                        },
                                        {
                                              "x": 44,
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
                                  "x": 46,
                                  "y": 20
                            },
                            "t1": {
                                  "x": 28.5,
                                  "y": 23.1
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 48,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 24.6,
                                  "y": 30.8
                            },
                            "o2": {
                                  "x": 60,
                                  "y": 24
                            }
                      },
                      "ball": {
                            "x": 46,
                            "y": 20,
                            "attachedTo": "t0"
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 16,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 32,
                                  "y": 78
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 84,
                                  "y": 78
                            }
                      ],
                      "drawings": [
                            {
                                  "type": "pass",
                                  "fromId": "t0",
                                  "toId": null,
                                  "pts": [
                                        {
                                              "x": 48,
                                              "y": 17
                                        },
                                        {
                                              "x": 55,
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
                                  "x": 47,
                                  "y": 18.2
                            },
                            "t1": {
                                  "x": 30,
                                  "y": 20
                            }
                      },
                      "oppPos": {
                            "o0": {
                                  "x": 47,
                                  "y": 10
                            },
                            "o1": {
                                  "x": 26,
                                  "y": 28
                            },
                            "o2": {
                                  "x": 58,
                                  "y": 24
                            }
                      },
                      "ball": {
                            "x": 55,
                            "y": -1.2,
                            "attachedTo": null
                      },
                      "gear": [
                            {
                                  "id": "g1",
                                  "kind": "cone-sky",
                                  "x": 16,
                                  "y": 78
                            },
                            {
                                  "id": "g2",
                                  "kind": "cone-sky",
                                  "x": 32,
                                  "y": 78
                            },
                            {
                                  "id": "g3",
                                  "kind": "cone-sky",
                                  "x": 68,
                                  "y": 78
                            },
                            {
                                  "id": "g4",
                                  "kind": "cone-sky",
                                  "x": 84,
                                  "y": 78
                            }
                      ],
                      "drawings": [],
                      "customOppCount": 3
                }
          ]
    })
  }
];
