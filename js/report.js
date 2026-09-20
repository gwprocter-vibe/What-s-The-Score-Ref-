// What's The Score Ref - Match Report Module
import { hapticFeedback } from './hardware.js';
import { teams, getScoreState, getAppMode, setCoachPotm } from './score.js';
import { getTimerState, getTargetHalfMinutes } from './timer.js';

let activeReportScope = 'm1'; // 'm1', 'm2', 'combined'

export function setReportScope(scope) {
  activeReportScope = scope;
  updateReportUI();
  updateReportText();
}
window.setReportScope = setReportScope;

export function getMatchDataForScope(scopeNum) {
  const session = (window.getSessionState && typeof window.getSessionState === 'function') ? window.getSessionState() : null;
  const activeId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;

  function formatPeriod(period, isFT, timerSecs, hasStarted) {
    if (isFT || period === 'Full Time') return 'Full Time';
    if (!hasStarted && timerSecs === 0) return 'Full Time';
    return period || 'Full Time';
  }

  if (scopeNum === activeId || !session) {
    const sState = getScoreState();
    const tState = getTimerState();
    const isFT = tState.currentPeriod === 'Full Time';
    return {
      id: activeId,
      home: teams.home.name || 'Home Team',
      away: teams.away.name || 'Away Team',
      homeColor: teams.home.color || '#f43f5e',
      awayColor: teams.away.color || '#2563eb',
      homeScore: sState.homeScore,
      awayScore: sState.awayScore,
      goals: sState.goals || [],
      coachNotes: sState.coachNotes || null,
      period: formatPeriod(tState.currentPeriod, isFT, tState.timerSeconds, tState.hasHalfStarted),
      isFT: isFT
    };
  }

  const m = session.matches && session.matches[scopeNum];
  if (m && m.score) {
    const isFT = m.timer?.currentPeriod === 'Full Time';
    return {
      id: scopeNum,
      home: m.score.teams?.home?.name || teams.home.name || 'Home Team',
      away: m.score.teams?.away?.name || teams.away.name || 'Away Team',
      homeColor: m.score.teams?.home?.color || teams.home.color || '#f43f5e',
      awayColor: m.score.teams?.away?.color || teams.away.color || '#2563eb',
      homeScore: m.score.homeScore ?? 0,
      awayScore: m.score.awayScore ?? 0,
      goals: m.score.goals || [],
      coachNotes: m.score.coachNotes || null,
      period: formatPeriod(m.timer?.currentPeriod, isFT, m.timer?.timerSeconds || 0, m.timer?.hasHalfStarted),
      isFT: isFT
    };
  }

  return {
    id: scopeNum,
    home: teams.home.name || 'Home Team',
    away: teams.away.name || 'Away Team',
    homeColor: teams.home.color || '#f43f5e',
    awayColor: teams.away.color || '#2563eb',
    homeScore: 0,
    awayScore: 0,
    goals: [],
    coachNotes: null,
    period: 'Full Time',
    isFT: true
  };
}

export function formatGoalAttribution(g) {
  if (g.isOwnGoal) {
    return ' — ⚽ Own Goal';
  }
  if (!g.scorer) {
    return '';
  }
  const sStr = `#${g.scorer.number}${g.scorer.initials ? ' ' + g.scorer.initials : ''}`;
  if (!g.assist) {
    return ` — ⚽ ${sStr}`;
  }
  const aStr = `#${g.assist.number}${g.assist.initials ? ' ' + g.assist.initials : ''}`;
  return ` — ⚽ ${sStr} (🅰️ ${aStr})`;
}

export function buildScorersSummaryText(goalsList) {
  const creditedGoals = goalsList.filter(g => g.scorer || g.isOwnGoal);
  if (creditedGoals.length === 0) return '';

  const teamScorers = {};
  const teamAssists = {};

  goalsList.forEach(g => {
    const tName = g.teamName || (g.team === 'home' ? 'Home' : 'Away');
    if (!teamScorers[tName]) teamScorers[tName] = {};
    if (!teamAssists[tName]) teamAssists[tName] = {};

    if (g.isOwnGoal) {
      teamScorers[tName]['Own Goal'] = (teamScorers[tName]['Own Goal'] || 0) + 1;
    } else if (g.scorer) {
      const sKey = `#${g.scorer.number}${g.scorer.initials ? ' ' + g.scorer.initials : ''}`;
      teamScorers[tName][sKey] = (teamScorers[tName][sKey] || 0) + 1;
    }

    if (g.assist) {
      const aKey = `#${g.assist.number}${g.assist.initials ? ' ' + g.assist.initials : ''}`;
      teamAssists[tName][aKey] = (teamAssists[tName][aKey] || 0) + 1;
    }
  });

  let summary = `🎯 SCORERS & ASSISTS (Initials):\n`;
  let hasAny = false;
  Object.keys(teamScorers).forEach(tName => {
    const sObj = teamScorers[tName];
    const aObj = teamAssists[tName] || {};
    const sKeys = Object.keys(sObj);
    const aKeys = Object.keys(aObj);

    if (sKeys.length > 0 || aKeys.length > 0) {
      hasAny = true;
      summary += `• ${tName}:\n`;
      if (sKeys.length > 0) {
        const sList = sKeys.map(k => `${k} (${sObj[k]})`).join(', ');
        summary += `   Goals: ${sList}\n`;
      }
      if (aKeys.length > 0) {
        const aList = aKeys.map(k => `${k} (${aObj[k]})`).join(', ');
        summary += `   Assists: ${aList}\n`;
      }
    }
  });
  summary += `\n`;
  return hasAny ? summary : '';
}

export function generateReportText(scope = activeReportScope) {
  const pitchInput = document.getElementById('reportPitchInput');
  const refInput = document.getElementById('reportRefInput');
  const pitch = pitchInput && typeof pitchInput.value === 'string' ? pitchInput.value.trim() : '';
  const ref = refInput && typeof refInput.value === 'string' && refInput.value.trim() ? refInput.value.trim() : '';

  if (scope === 'combined') {
    const m1 = getMatchDataForScope(1);
    const m2 = getMatchDataForScope(2);
    const aggHome = m1.homeScore + m2.homeScore;
    const aggAway = m1.awayScore + m2.awayScore;
    const home = m1.home;
    const away = m1.away;

    let text = `📋 WHAT'S THE SCORE REF? — COMBINED DOUBLE-HEADER REPORT\n`;
    text += `⚽ Harrogate & Wharfedale JFL (Under-9)\n`;
    text += `---------------------------------\n`;
    text += `AGGREGATE: ${home} ${aggHome} - ${aggAway} ${away}\n`;
    text += `• Match 1: ${home} ${m1.homeScore} - ${m1.awayScore} ${away} (${m1.period})\n`;
    text += `• Match 2: ${home} ${m2.homeScore} - ${m2.awayScore} ${away} (${m2.period})\n`;
    if (pitch) text += `Pitch: ${pitch}\n`;
    text += `Duration: 4 x 15 mins (2-Match Double Header)\n\n`;

    // Goals breakdown
    const allGoals = [...m1.goals.map(g => ({ ...g, match: 1 })), ...m2.goals.map(g => ({ ...g, match: 2 }))];
    if (allGoals.length > 0) {
      text += `⏱️ COMBINED GOAL TIMELINE (${allGoals.length} goals):\n`;
      allGoals.forEach((g, i) => {
        text += `${i + 1}. [M${g.match} ${g.time}] (${g.period}) ${g.teamName} [${g.scoreHome}-${g.scoreAway}]${formatGoalAttribution(g)}\n`;
      });
      text += `\n`;

      const summaryText = buildScorersSummaryText(allGoals);
      if (summaryText) text += summaryText;
    }

    if ((m1.coachNotes && m1.coachNotes.potm) || (m2.coachNotes && m2.coachNotes.potm)) {
      text += `⭐ PLAYER OF THE MATCH:\n`;
      if (m1.coachNotes && m1.coachNotes.potm) {
        const p1 = m1.coachNotes.potm;
        text += `• Match 1 POTM: #${p1.number}${p1.initials ? ' ' + p1.initials : ''}\n`;
      }
      if (m2.coachNotes && m2.coachNotes.potm) {
        const p2 = m2.coachNotes.potm;
        text += `• Match 2 POTM: #${p2.number}${p2.initials ? ' ' + p2.initials : ''}\n`;
      }
      text += `\n`;
    }

    const isCoach = typeof getAppMode === 'function' && getAppMode() === 'coach';
    const m1Moments = m1.coachNotes?.moments || [];
    const m2Moments = m2.coachNotes?.moments || [];
    if (isCoach && (m1Moments.length > 0 || m2Moments.length > 0)) {
      text += `⭐ KEY MATCH MOMENTS:\n`;
      if (m1Moments.length > 0) {
        text += `• Match 1:\n`;
        m1Moments.forEach(m => {
          let pLabel = (m.players && m.players.length > 0)
            ? m.players.map(p => p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`).join(', ')
            : (m.player ? (m.player.initials ? `#${m.player.number} ${m.player.initials}` : `#${m.player.number}`) : 'Entire Team');
          text += `  - [${m.time}] ${m.icon || '⭐'} ${m.tag}: ${pLabel}\n`;
        });
      }
      if (m2Moments.length > 0) {
        text += `• Match 2:\n`;
        m2Moments.forEach(m => {
          let pLabel = (m.players && m.players.length > 0)
            ? m.players.map(p => p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`).join(', ')
            : (m.player ? (m.player.initials ? `#${m.player.number} ${m.player.initials}` : `#${m.player.number}`) : 'Entire Team');
          text += `  - [${m.time}] ${m.icon || '⭐'} ${m.tag}: ${pLabel}\n`;
        });
      }
      text += `\n`;
    }

    if (ref) text += `Referee: ${ref}\n`;
    text += `Recorded with "What's The Score Ref?"`;
    return text;
  }

  const matchNum = scope === 'm2' ? 2 : 1;
  const data = getMatchDataForScope(matchNum);
  const home = data.home;
  const away = data.away;
  const homeScore = data.homeScore;
  const awayScore = data.awayScore;
  const goals = data.goals;

  let outcome = 'Draw';
  if (homeScore > awayScore) outcome = `${home} Win`;
  else if (awayScore > homeScore) outcome = `${away} Win`;

  let text = `📋 WHAT'S THE SCORE REF? — MATCH ${matchNum} REPORT\n`;
  text += `⚽ Harrogate & Wharfedale JFL (Under-9)\n`;
  text += `---------------------------------\n`;
  text += `MATCH ${matchNum} RESULT: ${home} ${homeScore} - ${awayScore} ${away}\n`;
  text += `Outcome: ${outcome}\n`;
  if (pitch) text += `Pitch: ${pitch}\n`;
  text += `Duration: 2 x 15 mins (FA Under-9)\n\n`;

  // Calculate half breakdown from goals
  let h1Home = 0, h1Away = 0, h2Home = 0, h2Away = 0;
  goals.forEach(g => {
    if (g.period === '1st Half') {
      if (g.team === 'home') h1Home++; else h1Away++;
    } else {
      if (g.team === 'home') h2Home++; else h2Away++;
    }
  });

  text += `📊 SCORE BREAKDOWN:\n`;
  text += `• 1st Half: ${home} ${h1Home} - ${h1Away} ${away}\n`;
  text += `• 2nd Half: ${home} ${h2Home} - ${h2Away} ${away}\n`;
  text += `• Full Time: ${home} ${homeScore} - ${awayScore} ${away}\n\n`;

  if (goals.length > 0) {
    text += `⏱️ GOAL TIMELINE (${goals.length} goals):\n`;
    goals.forEach((g, i) => {
      text += `${i + 1}. [${g.time}] (${g.period}) ${g.teamName} [${g.scoreHome}-${g.scoreAway}]${formatGoalAttribution(g)}\n`;
    });
    text += `\n`;

    const summaryText = buildScorersSummaryText(goals);
    if (summaryText) text += summaryText;
  } else {
    text += `⏱️ GOAL TIMELINE: No goals recorded.\n\n`;
  }

  if (data.coachNotes && data.coachNotes.potm) {
    const potm = data.coachNotes.potm;
    text += `⭐ Player of the Match: #${potm.number}${potm.initials ? ' ' + potm.initials : ''}\n\n`;
  }

  const isCoach = typeof getAppMode === 'function' && getAppMode() === 'coach';
  const moments = data.coachNotes?.moments || [];
  if (isCoach && moments.length > 0) {
    text += `⭐ KEY MATCH MOMENTS (${moments.length}):\n`;
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
    text += `\n`;
  }

  if (ref) text += `Referee: ${ref}\n`;
  text += `Recorded with "What's The Score Ref?"`;

  return text;
}

export function generateSessionReportText() {
  return generateReportText('combined');
}

export function generateFaFullTimeText(scope = activeReportScope) {
  const refInput = document.getElementById('reportRefInput');
  const ref = refInput && refInput.value.trim() ? refInput.value.trim() : '';

  let text = `Harrogate & Wharfedale U9\n`;

  if (scope === 'combined') {
    const m1 = getMatchDataForScope(1);
    const m2 = getMatchDataForScope(2);
    text += `Match 1: ${m1.home} ${m1.homeScore} - ${m1.awayScore} ${m1.away}\n`;
    text += `Match 2: ${m2.home} ${m2.homeScore} - ${m2.awayScore} ${m2.away}\n`;
  } else {
    const matchNum = scope === 'm2' ? 2 : 1;
    const data = getMatchDataForScope(matchNum);
    text += `Match ${matchNum}: ${data.home} ${data.homeScore} - ${data.awayScore} ${data.away}\n`;
  }

  if (ref) text += `Referee: ${ref}`;
  return text.trim();
}

export function updateReportUI() {
  const titleEl = document.getElementById('reportModalTitle');
  const singleCard = document.getElementById('reportSingleScoreCard');
  const combinedCard = document.getElementById('reportCombinedScoreCard');

  // Pill styling
  const m1Btn = document.getElementById('reportScopeM1Btn');
  const m2Btn = document.getElementById('reportScopeM2Btn');
  const combBtn = document.getElementById('reportScopeCombinedBtn');

  const activePillClass = 'py-1.5 px-1 rounded-lg bg-emerald-600 text-white font-black text-xs shadow text-center transition';
  const inactivePillClass = 'py-1.5 px-1 rounded-lg text-slate-400 hover:text-white font-bold text-xs transition text-center';

  if (m1Btn) m1Btn.className = activeReportScope === 'm1' ? activePillClass : inactivePillClass;
  if (m2Btn) m2Btn.className = activeReportScope === 'm2' ? activePillClass : inactivePillClass;
  if (combBtn) combBtn.className = activeReportScope === 'combined' ? activePillClass : inactivePillClass;

  if (activeReportScope === 'combined') {
    if (titleEl) titleEl.innerText = 'Combined Double-Header Report';
    if (singleCard) singleCard.classList.add('hidden');
    if (combinedCard) combinedCard.classList.remove('hidden');

    const m1 = getMatchDataForScope(1);
    const m2 = getMatchDataForScope(2);
    const aggHome = m1.homeScore + m2.homeScore;
    const aggAway = m1.awayScore + m2.awayScore;

    const cHomeLabel = document.getElementById('reportCombHomeLabel');
    const cAwayLabel = document.getElementById('reportCombAwayLabel');
    const cAggScore = document.getElementById('reportCombAggScore');
    const cM1Score = document.getElementById('reportCombM1Score');
    const cM2Score = document.getElementById('reportCombM2Score');

    if (cHomeLabel) cHomeLabel.innerText = m1.home;
    if (cAwayLabel) cAwayLabel.innerText = m1.away;
    if (cAggScore) cAggScore.innerText = `${aggHome} - ${aggAway}`;
    if (cM1Score) cM1Score.innerText = `M1: ${m1.homeScore} - ${m1.awayScore} (${m1.period})`;
    if (cM2Score) cM2Score.innerText = `M2: ${m2.homeScore} - ${m2.awayScore} (${m2.period})`;
  } else {
    const matchNum = activeReportScope === 'm2' ? 2 : 1;
    if (titleEl) titleEl.innerText = `Match ${matchNum} Report`;
    if (combinedCard) combinedCard.classList.add('hidden');
    if (singleCard) singleCard.classList.remove('hidden');

    const data = getMatchDataForScope(matchNum);
    const homeLabel = document.getElementById('reportHomeTeamLabel');
    const awayLabel = document.getElementById('reportAwayTeamLabel');
    const homeScoreEl = document.getElementById('reportHomeScore');
    const awayScoreEl = document.getElementById('reportAwayScore');
    const statusEl = document.getElementById('reportMatchStatus');

    if (homeLabel) homeLabel.innerText = data.home;
    if (awayLabel) awayLabel.innerText = data.away;
    if (homeScoreEl) homeScoreEl.innerText = data.homeScore;
    if (awayScoreEl) awayScoreEl.innerText = data.awayScore;
    if (statusEl) statusEl.innerText = data.period === 'Full Time' ? 'FULL TIME' : data.period.toUpperCase();

    let h1Home = 0, h1Away = 0, h2Home = 0, h2Away = 0;
    data.goals.forEach(g => {
      if (g.period === '1st Half') {
        if (g.team === 'home') h1Home++; else h1Away++;
      } else {
        if (g.team === 'home') h2Home++; else h2Away++;
      }
    });

    const half1El = document.getElementById('reportHalf1');
    const half2El = document.getElementById('reportHalf2');
    if (half1El) half1El.innerText = `${h1Home} - ${h1Away}`;
    if (half2El) half2El.innerText = `${h2Home} - ${h2Away}`;
  }

  renderReportPotmUI();

  const handoverBtn = document.getElementById('saveMatch1PrepareMatch2ReportBtn');
  if (handoverBtn) {
    const activeMatchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
    if (activeMatchId === 1 && activeReportScope === 'm1') {
      handoverBtn.classList.remove('hidden');
    } else {
      handoverBtn.classList.add('hidden');
    }
  }
}

export function renderReportPotmUI() {
  const potmSection = document.getElementById('reportPotmSection');
  const potmContainer = document.getElementById('reportPotmChipsContainer');
  const promptText = document.getElementById('reportPotmPromptText');
  if (!potmSection || !potmContainer) return;

  const isCoach = typeof getAppMode === 'function' && getAppMode() === 'coach';
  if (!isCoach) {
    potmSection.classList.add('hidden');
    return;
  }
  potmSection.classList.remove('hidden');

  const matchNum = activeReportScope === 'm2' ? 2 : 1;
  const data = getMatchDataForScope(matchNum);
  const currentPotm = data.coachNotes?.potm;
  const roster = teams.home.roster || [];

  if (promptText) {
    promptText.innerText = activeReportScope === 'combined'
      ? `Tap player to award Match 1 POTM (Initials only):`
      : `Tap player to award Match ${matchNum} POTM (Initials only):`;
  }

  potmContainer.innerHTML = roster.map(p => {
    const isSelected = currentPotm && currentPotm.number === p.number;
    const label = p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
    const btnClass = isSelected
      ? 'py-1.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs border-2 border-yellow-200 shadow-md scale-105 transition cursor-pointer flex items-center gap-1'
      : 'py-1.5 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700 transition cursor-pointer';

    return `
      <button type="button" onclick="setReportScopePotm(${matchNum}, ${p.number})" class="${btnClass}">
        ${isSelected ? '⭐ ' : ''}<span>${label}</span>
      </button>
    `;
  }).join('');
}

export function setReportScopePotm(scopeNum, playerNumber) {
  const session = (window.getSessionState && typeof window.getSessionState === 'function') ? window.getSessionState() : null;
  const activeId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;

  if (scopeNum === activeId || !session) {
    const roster = teams.home.roster || [];
    const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
    setCoachPotm(player);
  } else {
    const m = session.matches && session.matches[scopeNum];
    if (m && m.score) {
      if (!m.score.coachNotes) {
        m.score.coachNotes = { potm: null, notes: '', moments: [] };
      }
      const roster = m.score.teams?.home?.roster || [];
      const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
      if (m.score.coachNotes.potm && m.score.coachNotes.potm.number === player.number) {
        m.score.coachNotes.potm = null;
      } else {
        m.score.coachNotes.potm = player;
      }
      hapticFeedback('success');
    }
  }
  updateReportUI();
  updateReportText();
}
window.setReportScopePotm = setReportScopePotm;

export function openReportModal() {
  const activeMatchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
  activeReportScope = activeMatchId === 2 ? 'm2' : 'm1';

  updateReportUI();
  updateReportText();
  window.openModal('reportModal');
}

export function getActiveReportText() {
  const preview = document.getElementById('reportTextPreview');
  if (preview && preview.value && preview.value.trim()) {
    return preview.value.trim();
  }
  return generateReportText(activeReportScope);
}

export function updateReportText() {
  const text = generateReportText(activeReportScope);
  const preview = document.getElementById('reportTextPreview');
  if (preview) preview.value = text;
}

export function copyFaFullTimeToClipboard() {
  const text = generateFaFullTimeText(activeReportScope);
  const btnText = document.getElementById('copyFaBtnText');
  const btn = document.getElementById('copyFaBtn');

  function showSuccess() {
    if (btnText) btnText.innerText = '✓ FA SMS COPIED!';
    if (btn) {
      btn.classList.remove('bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
      btn.classList.add('bg-amber-400', 'text-slate-950', 'border-amber-300');
    }
    hapticFeedback('success');
    if (typeof window.showReportToast === 'function') {
      window.showReportToast('FA Full-Time SMS text copied!');
    }

    setTimeout(() => {
      if (btnText) btnText.innerText = 'COPY FA FULL-TIME SMS';
      if (btn) {
        btn.classList.add('bg-amber-500/20', 'text-amber-300', 'border-amber-500/40');
        btn.classList.remove('bg-amber-400', 'text-slate-950', 'border-amber-300');
      }
    }, 2500);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showSuccess).catch(() => {
      const preview = document.getElementById('reportTextPreview');
      if (preview) {
        preview.value = text;
        if (typeof preview.select === 'function') preview.select();
        document.execCommand('copy');
      }
      showSuccess();
    });
  } else {
    const preview = document.getElementById('reportTextPreview');
    if (preview) {
      preview.value = text;
      if (typeof preview.select === 'function') preview.select();
      document.execCommand('copy');
    }
    showSuccess();
  }
}

export function copyReportToClipboard() {
  const text = getActiveReportText();
  const btnText = document.getElementById('copyReportBtnText');
  const btn = document.getElementById('copyReportBtn');

  function showSuccess() {
    if (btnText) btnText.innerText = '✓ COPIED!';
    if (btn) {
      btn.classList.remove('bg-slate-800', 'text-slate-200');
      btn.classList.add('bg-emerald-500', 'text-slate-950');
    }
    hapticFeedback('success');
    if (typeof window.showReportToast === 'function') {
      window.showReportToast('Report copied to clipboard!');
    }

    setTimeout(() => {
      if (btnText) btnText.innerText = 'Copy Text';
      if (btn) {
        btn.classList.add('bg-slate-800', 'text-slate-200');
        btn.classList.remove('bg-emerald-500', 'text-slate-950');
      }
    }, 2500);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showSuccess).catch(() => {
      const preview = document.getElementById('reportTextPreview');
      if (preview && typeof preview.select === 'function') {
        preview.select();
        document.execCommand('copy');
      }
      showSuccess();
    });
  } else {
    const preview = document.getElementById('reportTextPreview');
    if (preview && typeof preview.select === 'function') {
      preview.select();
      document.execCommand('copy');
    }
    showSuccess();
  }
}

export function openSharePickerModal() {
  const scoreState = getScoreState();
  const timerState = getTimerState();
  const home = teams.home.name || 'Home Team';
  const away = teams.away.name || 'Away Team';
  const matchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
  const isFT = timerState.currentPeriod === 'Full Time';

  const scoreEl = document.getElementById('sharePickerScore');
  const contextEl = document.getElementById('sharePickerContext');
  if (scoreEl) {
    scoreEl.innerText = isFT
      ? `${home} ${scoreState.homeScore} - ${scoreState.awayScore} ${away} (FT)`
      : `${home} ${scoreState.homeScore} - ${scoreState.awayScore} ${away}`;
  }
  if (contextEl) {
    contextEl.innerText = currentReportMode === 'session' ? '2-Match Session Summary' : `Match ${matchId} Result`;
  }

  hapticFeedback('tap');
  if (window.openModal) {
    window.openModal('sharePickerModal');
  } else {
    const modal = document.getElementById('sharePickerModal');
    if (modal) modal.classList.remove('hidden');
  }
}

export function shareToWhatsApp() {
  const text = getActiveReportText();
  const encoded = encodeURIComponent(text);
  const url = `https://api.whatsapp.com/send?text=${encoded}`;
  window.open(url, '_blank');
  hapticFeedback('success');
}

export function shareToMessages() {
  const text = getActiveReportText();
  const encoded = encodeURIComponent(text);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const separator = isIOS ? '&' : '?';
  window.location.href = `sms:${separator}body=${encoded}`;
  hapticFeedback('success');
}

export function shareToEmail() {
  const text = getActiveReportText();
  const matchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
  const home = teams.home.name || 'Home Team';
  const away = teams.away.name || 'Away Team';
  const subject = encodeURIComponent(currentReportMode === 'session' ? `Match Session Summary - U9 Football` : `Match ${matchId} Result: ${home} vs ${away}`);
  const body = encodeURIComponent(text);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
  hapticFeedback('success');
}

export function shareViaSystem() {
  const text = getActiveReportText();
  const home = teams.home.name || 'Home Team';
  const away = teams.away.name || 'Away Team';
  const matchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
  const title = currentReportMode === 'session' ? 'U9 Match Session Report' : `Match ${matchId}: ${home} vs ${away}`;

  if (navigator.share) {
    navigator.share({
      title: title,
      text: text
    }).catch(err => {
      if (err && err.name !== 'AbortError') {
        copyReportToClipboard();
      }
    });
  } else {
    copyReportToClipboard();
  }
}

export function shareReportNative() {
  openSharePickerModal();
}

// ================= MATCH CARD GRAPHIC (CANVAS GENERATOR) =================
export function generateMatchCardCanvas(scopeOrCb, callbackArg) {
  let targetScope = activeReportScope;
  let callback = callbackArg;
  if (typeof scopeOrCb === 'function') {
    callback = scopeOrCb;
  } else if (scopeOrCb) {
    targetScope = scopeOrCb;
  }

  const matchNum = targetScope === 'm2' ? 2 : 1;
  const matchData = getMatchDataForScope(matchNum);

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 1000;
  const ctx = canvas.getContext('2d');

  const home = matchData.home;
  const away = matchData.away;
  const homeColor = matchData.homeColor || '#f43f5e';
  const awayColor = matchData.awayColor || '#2563eb';
  const homeScore = matchData.homeScore;
  const awayScore = matchData.awayScore;
  const goals = matchData.goals || [];
  const isFT = matchData.isFT;
  const periodText = isFT ? 'FULL TIME' : (matchData.period ? matchData.period.toUpperCase() : 'FULL TIME');
  const halfMinutes = typeof getTargetHalfMinutes === 'function' ? getTargetHalfMinutes() : 15;

  const pitchInput = document.getElementById('reportPitchInput');
  const refInput = document.getElementById('reportRefInput');
  const pitch = pitchInput && typeof pitchInput.value === 'string' ? pitchInput.value.trim() : '';
  const ref = refInput && typeof refInput.value === 'string' && refInput.value.trim() ? refInput.value.trim() : '';

  // Calculate half breakdown
  let h1Home = 0, h1Away = 0, h2Home = 0, h2Away = 0;
  goals.forEach(g => {
    if (g.period === '1st Half') {
      if (g.team === 'home') h1Home++; else h1Away++;
    } else {
      if (g.team === 'home') h2Home++; else h2Away++;
    }
  });

  function renderCard(logoImg) {
    // 1. Base Dark Gradient Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, 1000);
    bgGrad.addColorStop(0, '#0a0f1d');
    bgGrad.addColorStop(0.5, '#070a13');
    bgGrad.addColorStop(1, '#05070d');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 800, 1000);

    // Subtle pitch turf markings
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 2;
    roundRect(ctx, 24, 24, 752, 952, 28);
    ctx.stroke();

    // Center pitch circle watermark
    ctx.beginPath();
    ctx.arc(400, 500, 140, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(400, 500, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.fill();

    // 2. Header Area
    // Mascot Logo
    if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(80, 78, 38, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(logoImg, 42, 40, 76, 76);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(80, 78, 38, 0, Math.PI * 2);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }

    // Title Text
    ctx.fillStyle = '#f59e0b'; // Gold
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText("WHAT'S THE SCORE REF?", 134, 68);

    ctx.fillStyle = '#94a3b8'; // Slate
    ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText("HARROGATE & WHARFEDALE JFL • UNDER-9", 134, 90);

    // Date & Match ID
    const today = new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    ctx.fillStyle = '#64748b';
    ctx.font = '600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`Match ${matchNum} • ${today}`, 134, 110);

    // Match Status Badge (Top Right)
    const badgeText = `${periodText} • 2x${halfMinutes}m`;
    ctx.font = '900 12px monospace';
    const badgeWidth = ctx.measureText(badgeText).width + 24;
    const badgeX = 752 - badgeWidth;
    ctx.fillStyle = isFT ? 'rgba(245, 158, 11, 0.18)' : 'rgba(16, 185, 129, 0.18)';
    roundRect(ctx, badgeX, 58, badgeWidth, 32, 10);
    ctx.fill();
    ctx.strokeStyle = isFT ? '#f59e0b' : '#10b981';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = isFT ? '#fbbf24' : '#34d399';
    ctx.fillText(badgeText, badgeX + 12, 79);

    // 3. Scoreboard Main Card
    const scoreCardGrad = ctx.createLinearGradient(40, 140, 760, 420);
    scoreCardGrad.addColorStop(0, '#0d1424');
    scoreCardGrad.addColorStop(1, '#090d18');
    ctx.fillStyle = scoreCardGrad;
    roundRect(ctx, 40, 140, 720, 260, 20);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Top colour stripes for Home & Away
    ctx.fillStyle = homeColor;
    ctx.fillRect(40, 140, 360, 4);
    ctx.fillStyle = awayColor;
    ctx.fillRect(400, 140, 360, 4);

    // Home Team Name
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(truncateText(ctx, home, 300), 220, 195);

    // Home Kit Tag
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    roundRect(ctx, 170, 212, 100, 22, 6);
    ctx.fill();
    ctx.fillStyle = homeColor;
    ctx.beginPath();
    ctx.arc(182, 223, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '800 10px monospace';
    ctx.fillText("HOME", 230, 227);

    // Home Big Score Digit
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 84px monospace';
    ctx.fillText(String(homeScore), 220, 318);

    // VS / Divider
    ctx.fillStyle = '#334155';
    ctx.font = '800 36px monospace';
    ctx.fillText("-", 400, 300);

    // Away Team Name
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(truncateText(ctx, away, 300), 580, 195);

    // Away Kit Tag
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    roundRect(ctx, 530, 212, 100, 22, 6);
    ctx.fill();
    ctx.fillStyle = awayColor;
    ctx.beginPath();
    ctx.arc(542, 223, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '800 10px monospace';
    ctx.fillText("AWAY", 590, 227);

    // Away Big Score Digit
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 84px monospace';
    ctx.fillText(String(awayScore), 580, 318);

    // Halftime Score Bar (bottom of scoreboard card)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    roundRect(ctx, 40, 350, 720, 50, 0);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '700 13px monospace';
    const htSummary = `HALF TIME: ${h1Home} - ${h1Away}    •    2ND HALF: ${h2Home} - ${h2Away}`;
    ctx.fillText(htSummary, 400, 381);

    // 4. Goal Timeline Container
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0d1424';
    roundRect(ctx, 40, 425, 720, 420, 20);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Goal Timeline Header
    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText("⚽ MATCH TIMELINE & GOAL LOG", 65, 462);

    ctx.strokeStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(40, 480);
    ctx.lineTo(760, 480);
    ctx.stroke();

    // Render Goals
    if (goals.length === 0) {
      ctx.fillStyle = '#64748b';
      ctx.font = '600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText("No goals recorded during this match (0 - 0)", 400, 640);
    } else {
      const maxGoalsToShow = 7;
      const displayGoals = goals.slice(0, maxGoalsToShow);
      let rowY = 518;

      displayGoals.forEach((g, idx) => {
        // Goal number badge
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        roundRect(ctx, 65, rowY - 18, 30, 26, 6);
        ctx.fill();
        ctx.fillStyle = '#34d399';
        ctx.font = '900 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(String(idx + 1), 80, rowY);

        // Time pill
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        roundRect(ctx, 105, rowY - 18, 70, 26, 6);
        ctx.fill();
        ctx.fillStyle = '#f59e0b';
        ctx.font = '800 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(g.time, 140, rowY);

        // Period tag
        ctx.fillStyle = '#64748b';
        ctx.font = '700 11px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(g.period === '1st Half' ? '1H' : '2H', 185, rowY);

        // Team name & kit indicator
        const isHome = g.team === 'home';
        ctx.fillStyle = isHome ? homeColor : awayColor;
        ctx.beginPath();
        ctx.arc(220, rowY - 5, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        let scorerText = '';
        if (g.isOwnGoal) {
          scorerText = ' • ⚠️ Own Goal';
        } else if (g.scorer) {
          const sInit = g.scorer.initials ? `#${g.scorer.number} ${g.scorer.initials}` : `#${g.scorer.number}`;
          const aInit = g.assist ? ` (🅰️ #${g.assist.number}${g.assist.initials ? ' ' + g.assist.initials : ''})` : '';
          scorerText = ` • ⚽ ${sInit}${aInit}`;
        }
        const fullGoalLabel = `${g.teamName}${scorerText}`;
        ctx.fillText(truncateText(ctx, fullGoalLabel, 360), 235, rowY);

        // Score at that goal
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '900 15px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`[ ${g.scoreHome} - ${g.scoreAway} ]`, 735, rowY);

        // Divider line between goals
        if (idx < displayGoals.length - 1) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
          ctx.beginPath();
          ctx.moveTo(65, rowY + 18);
          ctx.lineTo(735, rowY + 18);
          ctx.stroke();
        }

        rowY += 46;
      });

      if (goals.length > maxGoalsToShow) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '700 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`+ ${goals.length - maxGoalsToShow} more goals recorded in match log`, 400, rowY);
      }
    }

    // 5. Footer Details Card
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0d1424';
    roundRect(ctx, 40, 865, 720, 95, 16);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(ref ? `Referee: ${ref}` : `Match Result`, 65, 898);

    if (pitch) {
      ctx.fillText(`Pitch / Venue: ${pitch}`, 65, 922);
    } else {
      ctx.fillText(`Rules: Harrogate & Wharfedale U9 Grassroots League`, 65, 922);
    }

    if (matchData.coachNotes && matchData.coachNotes.potm) {
      const potm = matchData.coachNotes.potm;
      const potmStr = `#${potm.number}${potm.initials ? ' ' + potm.initials : ''}`;
      ctx.fillStyle = '#fbbf24';
      ctx.font = '900 12px monospace';
      ctx.fillText(`⭐ POTM: ${potmStr}`, 65, 944);
    }

    ctx.fillStyle = '#64748b';
    ctx.font = '600 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText("What's The Score Ref? • 100% Offline PWA", 735, 915);
    ctx.fillText("thefa.com/full-time", 735, 934);

    if (typeof callback === 'function') {
      callback(canvas);
    }
  }

  function truncateText(c, str, maxW) {
    if (c.measureText(str).width <= maxW) return str;
    let s = str;
    while (s.length > 3 && c.measureText(s + '…').width > maxW) {
      s = s.slice(0, -1);
    }
    return s + '…';
  }

  function roundRect(c, x, y, w, h, r) {
    if (typeof c.roundRect === 'function') {
      c.beginPath();
      c.roundRect(x, y, w, h, r);
      return;
    }
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  // Load logo image (same-origin, no crossOrigin to avoid canvas tainting)
  let hasRendered = false;
  const doRender = (imageToUse) => {
    if (hasRendered) return;
    hasRendered = true;
    renderCard(imageToUse);
  };

  const existingHeaderImg = document.getElementById('headerLogoImg');
  if (existingHeaderImg && existingHeaderImg.complete && existingHeaderImg.naturalWidth > 0) {
    doRender(existingHeaderImg);
  } else {
    const img = new Image();
    img.onload = () => doRender(img);
    img.onerror = () => doRender(null);
    img.src = 'icons/logo-header.png';
    if (img.complete && img.naturalWidth > 0) {
      doRender(img);
    }
    // Safety fallback timeout to ensure card always displays immediately
    setTimeout(() => {
      if (!hasRendered) doRender(null);
    }, 200);
  }
}

function getCanvasBlobSync(canvas) {
  const dataUrl = canvas.toDataURL('image/png');
  const parts = dataUrl.split(',');
  const byteString = atob(parts[1]);
  const mimeString = parts[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}

export function openMatchCardModal() {
  const previewContainer = document.getElementById('matchCardPreviewContainer');
  if (!previewContainer) return;
  previewContainer.innerHTML = '';

  if (activeReportScope === 'combined') {
    // Generate both Match 1 and Match 2 cards
    generateMatchCardCanvas('m1', (canvas1) => {
      generateMatchCardCanvas('m2', (canvas2) => {
        previewContainer.innerHTML = '';

        // Store primary canvas
        canvas1.id = 'matchCardGeneratedCanvas';
        canvas1.style.display = 'none';
        canvas2.id = 'matchCardGeneratedCanvas2';
        canvas2.style.display = 'none';
        previewContainer.appendChild(canvas1);
        previewContainer.appendChild(canvas2);

        const dataUrl1 = canvas1.toDataURL('image/png');
        const dataUrl2 = canvas2.toDataURL('image/png');

        // Container for dual cards
        const dualGrid = document.createElement('div');
        dualGrid.className = 'w-full flex flex-col gap-3';

        // Card 1
        const card1Wrap = document.createElement('div');
        card1Wrap.className = 'flex flex-col items-center';
        const label1 = document.createElement('div');
        label1.className = 'text-[11px] font-black text-emerald-400 mb-1 tracking-wider uppercase flex items-center gap-1.5';
        label1.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Match 1 Graphic';
        const img1 = document.createElement('img');
        img1.src = dataUrl1;
        img1.alt = 'Match 1 Card Graphic';
        img1.className = 'w-full h-auto rounded-xl shadow-xl border border-slate-700/80 max-h-[40vh] object-contain cursor-pointer hover:opacity-95 active:scale-[0.99] transition';
        img1.onclick = () => showFullscreenImageModal(canvas1, 1);
        card1Wrap.appendChild(label1);
        card1Wrap.appendChild(img1);

        // Card 2
        const card2Wrap = document.createElement('div');
        card2Wrap.className = 'flex flex-col items-center pt-2 border-t border-slate-800/80';
        const label2 = document.createElement('div');
        label2.className = 'text-[11px] font-black text-amber-400 mb-1 tracking-wider uppercase flex items-center gap-1.5';
        label2.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span> Match 2 Graphic';
        const img2 = document.createElement('img');
        img2.src = dataUrl2;
        img2.alt = 'Match 2 Card Graphic';
        img2.className = 'w-full h-auto rounded-xl shadow-xl border border-slate-700/80 max-h-[40vh] object-contain cursor-pointer hover:opacity-95 active:scale-[0.99] transition';
        img2.onclick = () => showFullscreenImageModal(canvas2, 2);
        card2Wrap.appendChild(label2);
        card2Wrap.appendChild(img2);

        dualGrid.appendChild(card1Wrap);
        dualGrid.appendChild(card2Wrap);

        const hint = document.createElement('div');
        hint.className = 'text-[10px] text-slate-400 mt-1 text-center flex items-center justify-center gap-1';
        hint.innerHTML = '<span class="text-amber-400 font-black">🔍 Tap either image</span> to view full size (800×1000) or hold to save';

        previewContainer.appendChild(dualGrid);
        previewContainer.appendChild(hint);

        if (window.openModal) {
          window.openModal('matchCardModal');
        } else {
          document.getElementById('matchCardModal')?.classList.remove('hidden');
        }
        hapticFeedback('tap');
      });
    });
    return;
  }

  // Single Match Mode (Scope = m1 or m2)
  const currentScope = activeReportScope;
  generateMatchCardCanvas(currentScope, (canvas) => {
    previewContainer.innerHTML = '';

    let dataUrl = '';
    try {
      dataUrl = canvas.toDataURL('image/png');
    } catch (e) {
      console.warn('Canvas toDataURL preview generation warning:', e);
    }

    // Store canvas in preview container for export methods
    canvas.id = 'matchCardGeneratedCanvas';
    canvas.style.display = 'none';
    previewContainer.appendChild(canvas);

    // Render interactive high-res <img> element
    const matchNum = currentScope === 'm2' ? 2 : 1;
    const label = document.createElement('div');
    label.className = 'text-[11px] font-black text-emerald-400 mb-1 tracking-wider uppercase flex items-center gap-1.5';
    label.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Match ${matchNum} Graphic`;

    const img = document.createElement('img');
    img.id = 'matchCardPreviewImg';
    img.src = dataUrl || canvas.toDataURL();
    img.alt = `Match ${matchNum} Card Graphic`;
    img.className = 'w-full h-auto rounded-xl shadow-2xl border border-slate-700/80 max-h-[48vh] object-contain mx-auto cursor-pointer hover:opacity-95 active:scale-[0.99] transition';
    img.title = 'Tap image to view full resolution (800x1000) or hold to copy/save';
    img.onclick = () => showFullscreenImageModal(canvas, matchNum);

    const hint = document.createElement('div');
    hint.className = 'text-[10px] text-slate-400 mt-1.5 text-center flex items-center justify-center gap-1';
    hint.innerHTML = '<span class="text-amber-400 font-black">🔍 Tap image</span> to view full size (800×1000) or hold to save to Photos';

    previewContainer.appendChild(label);
    previewContainer.appendChild(img);
    previewContainer.appendChild(hint);

    if (window.openModal) {
      window.openModal('matchCardModal');
    } else {
      document.getElementById('matchCardModal')?.classList.remove('hidden');
    }
    hapticFeedback('tap');
  });
}

export function openFullMatchCardImage() {
  const canvas = document.getElementById('matchCardGeneratedCanvas');
  const matchNum = activeReportScope === 'm2' ? 2 : 1;
  if (!canvas) {
    generateMatchCardCanvas(activeReportScope, (newCanvas) => {
      showFullscreenImageModal(newCanvas, matchNum);
    });
    return;
  }
  showFullscreenImageModal(canvas, matchNum);
}

function showFullscreenImageModal(canvas, matchNum = (activeReportScope === 'm2' ? 2 : 1)) {
  try {
    const dataUrl = canvas.toDataURL('image/png');
    const fullImg = document.getElementById('matchCardFullscreenImg');
    const titleEl = document.getElementById('matchCardFullscreenTitle');
    const matchData = getMatchDataForScope(matchNum);
    const home = matchData.home || 'Home';
    const away = matchData.away || 'Away';

    if (fullImg) {
      fullImg.src = dataUrl;
    }
    if (titleEl) {
      titleEl.innerText = `Match ${matchNum}: ${home} ${matchData.homeScore} - ${matchData.awayScore} ${away}`;
    }

    if (window.openModal) {
      window.openModal('matchCardFullscreenModal');
    } else {
      const modal = document.getElementById('matchCardFullscreenModal');
      if (modal) modal.classList.remove('hidden');
    }
    hapticFeedback('tap');
  } catch (err) {
    console.error('showFullscreenImageModal error:', err);
  }
}

function triggerDownloadFallback(dataUrlOrBlobUrl, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrlOrBlobUrl;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (link.parentNode) link.parentNode.removeChild(link);
    if (dataUrlOrBlobUrl.startsWith('blob:')) {
      URL.revokeObjectURL(dataUrlOrBlobUrl);
    }
  }, 400);
}

export function downloadMatchCard() {
  const canvas = document.getElementById('matchCardGeneratedCanvas');
  if (!canvas) {
    generateMatchCardCanvas((newCanvas) => {
      exportCanvasToDownload(newCanvas);
    });
    return;
  }
  exportCanvasToDownload(canvas);
}

function exportCanvasToDownload(canvas) {
  const scoreState = getScoreState();
  const home = (teams.home.name || 'Home').replace(/[^a-zA-Z0-9_-]/g, '_');
  const away = (teams.away.name || 'Away').replace(/[^a-zA-Z0-9_-]/g, '_');
  const filename = `MatchCard_${home}_${scoreState.homeScore}-${scoreState.awayScore}_${away}.png`;

  const isIOS = typeof navigator !== 'undefined' && (/iPad|iPhone|iPod/.test(navigator.userAgent || '') || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  try {
    const blob = getCanvasBlobSync(canvas);
    const blobUrl = URL.createObjectURL(blob);

    if (isIOS) {
      // On iOS: Try triggering native file share which contains "Save Image" option at the very top of iOS Action Sheet
      try {
        const file = new File([blob], filename, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
          navigator.share({
            title: `Match Result: ${teams.home.name} vs ${teams.away.name}`,
            files: [file]
          }).then(() => {
            hapticFeedback('success');
          }).catch((err) => {
            if (err && err.name !== 'AbortError') {
              showFullscreenImageModal(canvas);
            }
          });
          return;
        }
      } catch (e) {}

      // Fallback on iOS: Open fullscreen viewer with hold-to-save instructions
      showFullscreenImageModal(canvas);
      return;
    }

    // Standard Android / Desktop / Chrome file download
    triggerDownloadFallback(blobUrl, filename);
    hapticFeedback('success');
  } catch (err) {
    console.warn('exportCanvasToDownload error, fallback to dataURL:', err);
    try {
      const dataUrl = canvas.toDataURL('image/png');
      triggerDownloadFallback(dataUrl, filename);
      hapticFeedback('success');
    } catch (e2) {
      showFullscreenImageModal(canvas);
    }
  }
}

export function shareMatchCard() {
  const canvas = document.getElementById('matchCardGeneratedCanvas');
  if (!canvas) {
    openSharePickerModal();
    return;
  }

  const scoreState = getScoreState();
  const home = teams.home.name || 'Home';
  const away = teams.away.name || 'Away';
  const matchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
  const safeHome = (teams.home.name || 'Home').replace(/[^a-zA-Z0-9_-]/g, '_');
  const safeAway = (teams.away.name || 'Away').replace(/[^a-zA-Z0-9_-]/g, '_');
  const filename = `MatchCard_${safeHome}_vs_${safeAway}.png`;

  const shareTitle = `Match ${matchId}: ${home} ${scoreState.homeScore} - ${scoreState.awayScore} ${away}`;
  const shareText = `Match Card: ${home} ${scoreState.homeScore} - ${scoreState.awayScore} ${away} (Harrogate & Wharfedale U9).`;

  // Synchronously create File from canvas - maintains user gesture on iOS Safari!
  let file = null;
  try {
    const blob = getCanvasBlobSync(canvas);
    file = new File([blob], filename, { type: 'image/png' });
  } catch (e) {
    console.warn('Synchronous File creation error:', e);
  }

  // 1. Direct Native File Share (iOS Safari Share Sheet / Android Share Sheet)
  if (file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText,
      files: [file]
    }).then(() => {
      hapticFeedback('success');
    }).catch((err) => {
      if (err && err.name !== 'AbortError') {
        openSharePickerModal();
      }
    });
    return;
  }

  // 2. Native Web Share Text Fallback
  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText
    }).then(() => {
      hapticFeedback('success');
    }).catch((err) => {
      if (err && err.name !== 'AbortError') {
        openSharePickerModal();
      }
    });
    return;
  }

  // 3. In-App Apps Picker Fallback
  openSharePickerModal();
}

// Expose directly to window
window.openMatchCardModal = openMatchCardModal;
window.openFullMatchCardImage = openFullMatchCardImage;
window.downloadMatchCard = downloadMatchCard;
window.shareMatchCard = shareMatchCard;


