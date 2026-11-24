// What's The Score Ref - Match Report, Share & 2x Retina Match Card Module
import { hapticFeedback } from './hardware.js';
import { teams, getScoreState, getAppMode, setCoachPotm, escapeHtml, createDefaultRoster } from './score.js';
import { getTimerState, getTargetHalfMinutes } from './timer.js';
import { loadPrefs, savePrefs } from './storage.js';

let activeReportScope = 'm1'; // 'm1', 'm2', 'combined'

export function getActiveReportScope() {
  return activeReportScope;
}

export function setReportScope(scope) {
  activeReportScope = scope;
  updateReportUI();
  updateReportText();
}
window.setReportScope = setReportScope;

export function syncReportMetaInputsFromPrefs() {
  const prefs = loadPrefs();
  const pitchInput = document.getElementById('reportPitchInput');
  const refInput = document.getElementById('reportRefInput');
  if (pitchInput && !pitchInput.value && prefs.pitchVenue) {
    pitchInput.value = prefs.pitchVenue;
  }
  if (refInput && !refInput.value && prefs.refName) {
    refInput.value = prefs.refName;
  }
}

export function onReportMetaInputChanged() {
  const pitchInput = document.getElementById('reportPitchInput');
  const refInput = document.getElementById('reportRefInput');
  savePrefs({
    pitchVenue: pitchInput ? pitchInput.value.trim() : '',
    refName: refInput ? refInput.value.trim() : ''
  });
  updateReportText();
}

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
    const cTeam = sState.coachTeam || 'home';
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
      coachTeam: cTeam,
      coachRoster: (sState.teams?.[cTeam]?.roster && sState.teams[cTeam].roster.length > 0)
        ? sState.teams[cTeam].roster
        : createDefaultRoster(),
      targetMinutes: Math.round((tState.targetHalfSeconds || 900) / 60),
      period: formatPeriod(tState.currentPeriod, isFT, tState.timerSeconds, tState.hasHalfStarted),
      isFT
    };
  }

  const m = session.matches && session.matches[scopeNum];
  if (m && m.score) {
    const isFT = m.timer?.currentPeriod === 'Full Time';
    const cTeam = m.score.coachTeam || 'home';
    const fallbackRoster = teams[cTeam]?.roster || createDefaultRoster();
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
      coachTeam: cTeam,
      coachRoster: (m.score.teams?.[cTeam]?.roster && m.score.teams[cTeam].roster.length > 0)
        ? m.score.teams[cTeam].roster
        : fallbackRoster,
      targetMinutes: Math.round((m.timer?.targetHalfSeconds || 900) / 60),
      period: formatPeriod(m.timer?.currentPeriod, isFT, m.timer?.timerSeconds || 0, m.timer?.hasHalfStarted),
      isFT
    };
  }

  const defaultCoachTeam = getScoreState().coachTeam || 'home';
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
    coachTeam: defaultCoachTeam,
    coachRoster: teams[defaultCoachTeam]?.roster || createDefaultRoster(),
    targetMinutes: typeof getTargetHalfMinutes === 'function' ? getTargetHalfMinutes() : 15,
    period: 'Full Time',
    isFT: true
  };
}

export function formatMomentPlayers(m) {
  if (!m) return 'Entire Team';
  if (m.players && Array.isArray(m.players) && m.players.length > 0) {
    return m.players.map(p => {
      if (!p || p === 'team') return 'Entire Team';
      return p.initials ? `#${p.number} ${p.initials}` : `#${p.number}`;
    }).join(', ');
  }
  if (m.player) {
    if (m.player === 'team') return 'Entire Team';
    return m.player.initials ? `#${m.player.number} ${m.player.initials}` : `#${m.player.number}`;
  }
  return 'Entire Team';
}

export function formatGoalAttribution(g) {
  if (g.isOwnGoal) return ' — ⚽ Own Goal';
  if (!g.scorer) return '';
  const sStr = `#${g.scorer.number}${g.scorer.initials ? ' ' + g.scorer.initials : ''}`;
  if (!g.assist) return ` — ⚽ ${sStr}`;
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
        summary += `   Goals: ${sKeys.map(k => `${k} (${sObj[k]})`).join(', ')}\n`;
      }
      if (aKeys.length > 0) {
        summary += `   Assists: ${aKeys.map(k => `${k} (${aObj[k]})`).join(', ')}\n`;
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
    const halfMin = m1.targetMinutes || 15;

    let text = `📋 WHAT'S THE SCORE REF? — COMBINED DOUBLE-HEADER REPORT\n`;
    text += `⚽ Harrogate & Wharfedale JFL (Under-9)\n`;
    text += `---------------------------------\n`;
    text += `AGGREGATE: ${home} ${aggHome} - ${aggAway} ${away}\n`;
    text += `• Match 1: ${home} ${m1.homeScore} - ${m1.awayScore} ${away} (${m1.period})\n`;
    text += `• Match 2: ${home} ${m2.homeScore} - ${m2.awayScore} ${away} (${m2.period})\n`;
    if (pitch) text += `Pitch: ${pitch}\n`;
    text += `Duration: 4 x ${halfMin} mins (2-Match Double Header)\n\n`;

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
      if (m1.coachNotes?.potm) {
        const p1 = m1.coachNotes.potm;
        text += `• Match 1 POTM: #${p1.number}${p1.initials ? ' ' + p1.initials : ''}\n`;
      }
      if (m2.coachNotes?.potm) {
        const p2 = m2.coachNotes.potm;
        text += `• Match 2 POTM: #${p2.number}${p2.initials ? ' ' + p2.initials : ''}\n`;
      }
      text += `\n`;
    }

    const m1Moments = m1.coachNotes?.moments || [];
    const m2Moments = m2.coachNotes?.moments || [];
    const isCoach = (typeof getAppMode === 'function' && getAppMode() === 'coach') || (m1Moments.length > 0 || m2Moments.length > 0);
    if (isCoach && (m1Moments.length > 0 || m2Moments.length > 0)) {
      text += `⭐ TOUCHLINE MATCH MOMENTS:\n`;
      if (m1Moments.length > 0) {
        text += `• Match 1 (${m1Moments.length}):\n`;
        m1Moments.forEach(m => {
          const pLabel = formatMomentPlayers(m);
          const period = m.period === '1st Half' ? '1H' : (m.period === '2nd Half' ? '2H' : (m.period || '1H'));
          text += `  - [${m.time}] (${period}) ${m.icon || '⭐'} ${m.tag}: ${pLabel}\n`;
        });
      }
      if (m2Moments.length > 0) {
        text += `• Match 2 (${m2Moments.length}):\n`;
        m2Moments.forEach(m => {
          const pLabel = formatMomentPlayers(m);
          const period = m.period === '1st Half' ? '1H' : (m.period === '2nd Half' ? '2H' : (m.period || '1H'));
          text += `  - [${m.time}] (${period}) ${m.icon || '⭐'} ${m.tag}: ${pLabel}\n`;
        });
      }
      text += `\n`;
    }

    if (m1.coachNotes?.notes && m1.coachNotes.notes.trim()) {
      text += `📝 Match 1 Coach Notes: ${m1.coachNotes.notes.trim()}\n`;
    }
    if (m2.coachNotes?.notes && m2.coachNotes.notes.trim()) {
      text += `📝 Match 2 Coach Notes: ${m2.coachNotes.notes.trim()}\n`;
    }
    if ((m1.coachNotes?.notes && m1.coachNotes.notes.trim()) || (m2.coachNotes?.notes && m2.coachNotes.notes.trim())) {
      text += `\n`;
    }

    if (ref) text += `Referee: ${ref}\n`;
    text += `Recorded with "What's The Score Ref?"`;
    return text;
  }

  const matchNum = scope === 'm2' ? 2 : 1;
  const data = getMatchDataForScope(matchNum);
  const { home, away, homeScore, awayScore, goals } = data;
  const halfMin = data.targetMinutes || 15;

  let outcome = 'Draw';
  if (homeScore > awayScore) outcome = `${home} Win`;
  else if (awayScore > homeScore) outcome = `${away} Win`;

  let text = `📋 WHAT'S THE SCORE REF? — MATCH ${matchNum} REPORT\n`;
  text += `⚽ Harrogate & Wharfedale JFL (Under-9)\n`;
  text += `---------------------------------\n`;
  text += `MATCH ${matchNum} RESULT: ${home} ${homeScore} - ${awayScore} ${away}\n`;
  text += `Outcome: ${outcome}\n`;
  if (pitch) text += `Pitch: ${pitch}\n`;
  text += `Duration: 2 x ${halfMin} mins (FA Under-9)\n\n`;

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

  if (data.coachNotes?.potm) {
    const potm = data.coachNotes.potm;
    text += `⭐ Player of the Match: #${potm.number}${potm.initials ? ' ' + potm.initials : ''}\n\n`;
  }

  const moments = data.coachNotes?.moments || [];
  const isCoach = (typeof getAppMode === 'function' && getAppMode() === 'coach') || (moments.length > 0);
  if (isCoach && moments.length > 0) {
    text += `⭐ TOUCHLINE MATCH MOMENTS (${moments.length}):\n`;
    moments.forEach(m => {
      const pLabel = formatMomentPlayers(m);
      const period = m.period === '1st Half' ? '1H' : (m.period === '2nd Half' ? '2H' : (m.period || '1H'));
      text += `• [${m.time}] (${period}) ${m.icon || '⭐'} ${m.tag}: ${pLabel}\n`;
    });
    text += `\n`;
  }

  if (data.coachNotes?.notes && data.coachNotes.notes.trim()) {
    text += `📝 COACH'S NOTES:\n${data.coachNotes.notes.trim()}\n\n`;
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
  const durationSub = document.getElementById('reportDurationSubtitle');
  const singleCard = document.getElementById('reportSingleScoreCard');
  const combinedCard = document.getElementById('reportCombinedScoreCard');

  const m1Btn = document.getElementById('reportScopeM1Btn');
  const m2Btn = document.getElementById('reportScopeM2Btn');
  const combBtn = document.getElementById('reportScopeCombinedBtn');

  const activePillClass = 'py-1.5 px-1 rounded-lg bg-emerald-600 text-white font-black text-xs shadow text-center transition cursor-pointer';
  const inactivePillClass = 'py-1.5 px-1 rounded-lg text-slate-400 hover:text-white font-bold text-xs transition text-center cursor-pointer';

  if (m1Btn) m1Btn.className = activeReportScope === 'm1' ? activePillClass : inactivePillClass;
  if (m2Btn) m2Btn.className = activeReportScope === 'm2' ? activePillClass : inactivePillClass;
  if (combBtn) combBtn.className = activeReportScope === 'combined' ? activePillClass : inactivePillClass;

  if (activeReportScope === 'combined') {
    if (titleEl) titleEl.innerText = 'Combined Double-Header Report';
    singleCard?.classList.add('hidden');
    combinedCard?.classList.remove('hidden');

    const m1 = getMatchDataForScope(1);
    const m2 = getMatchDataForScope(2);
    const aggHome = m1.homeScore + m2.homeScore;
    const aggAway = m1.awayScore + m2.awayScore;

    if (durationSub) durationSub.innerText = `Harrogate & Wharfedale JFL (U9) • 4×${m1.targetMinutes || 15}m Double-Header`;

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
    combinedCard?.classList.add('hidden');
    singleCard?.classList.remove('hidden');

    const data = getMatchDataForScope(matchNum);
    if (durationSub) durationSub.innerText = `Harrogate & Wharfedale JFL (U9) • ${data.targetMinutes || 15}m Halves`;

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
  renderReportMomentsUI();

  const handoverBtn = document.getElementById('saveMatch1PrepareMatch2ReportBtn');
  if (handoverBtn) {
    const activeMatchId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;
    handoverBtn.classList.toggle('hidden', !(activeMatchId === 1 && activeReportScope === 'm1'));
  }
}

export function renderReportMomentsUI() {
  const section = document.getElementById('reportMomentsSection');
  const listContainer = document.getElementById('reportMomentsListContainer');
  const badge = document.getElementById('reportMomentsCountBadge');
  if (!section || !listContainer) return;

  const isCoach = typeof getAppMode === 'function' && getAppMode() === 'coach';

  if (activeReportScope === 'combined') {
    const m1 = getMatchDataForScope(1);
    const m2 = getMatchDataForScope(2);
    const m1Moments = m1.coachNotes?.moments || [];
    const m2Moments = m2.coachNotes?.moments || [];
    const totalCount = m1Moments.length + m2Moments.length;

    if (!isCoach && totalCount === 0) {
      section.classList.add('hidden');
      return;
    }
    section.classList.remove('hidden');
    if (badge) badge.innerText = `${totalCount} Moment${totalCount === 1 ? '' : 's'}`;

    if (totalCount === 0) {
      listContainer.innerHTML = '<div class="text-slate-500 text-[11px] italic py-2 text-center">No touchline moments logged yet for Match 1 or 2.</div>';
      return;
    }

    let html = '';
    if (m1Moments.length > 0) {
      html += `<div class="text-[10px] font-black text-amber-400 uppercase tracking-wider mb-1 mt-0.5">Match 1 (${m1Moments.length}):</div>`;
      html += m1Moments.map(m => renderMomentRowHtml(m)).join('');
    }
    if (m2Moments.length > 0) {
      html += `<div class="text-[10px] font-black text-amber-400 uppercase tracking-wider mb-1 ${m1Moments.length > 0 ? 'mt-2' : 'mt-0.5'}">Match 2 (${m2Moments.length}):</div>`;
      html += m2Moments.map(m => renderMomentRowHtml(m)).join('');
    }
    listContainer.innerHTML = html;
  } else {
    const matchNum = activeReportScope === 'm2' ? 2 : 1;
    const data = getMatchDataForScope(matchNum);
    const moments = data.coachNotes?.moments || [];

    if (!isCoach && moments.length === 0) {
      section.classList.add('hidden');
      return;
    }
    section.classList.remove('hidden');
    if (badge) badge.innerText = `${moments.length} Moment${moments.length === 1 ? '' : 's'}`;

    if (moments.length === 0) {
      listContainer.innerHTML = `<div class="text-slate-500 text-[11px] italic py-2 text-center">No touchline moments logged for Match ${matchNum}.</div>`;
      return;
    }

    listContainer.innerHTML = moments.slice().reverse().map(m => renderMomentRowHtml(m)).join('');
  }
}

function renderMomentRowHtml(m) {
  const pLabel = escapeHtml(formatMomentPlayers(m));
  const periodTag = escapeHtml(m.period === '1st Half' ? '1H' : (m.period === '2nd Half' ? '2H' : (m.period || '1H')));
  return `
    <div class="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <span class="text-base shrink-0">${escapeHtml(m.icon || '⭐')}</span>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="text-amber-400 font-mono-sport font-black text-[11px]">${escapeHtml(m.time)}</span>
            <span class="text-slate-400 text-[10px]">(${periodTag})</span>
            <span class="font-bold text-white text-[11px]">${escapeHtml(m.tag)}</span>
          </div>
          <div class="text-[10px] text-amber-300 font-mono-sport font-semibold truncate" title="${pLabel}">${pLabel}</div>
        </div>
      </div>
    </div>
  `;
}

// Fixed: Uses coached team's roster (Home or Away!) and supports both M1 & M2 POTM in Combined view!
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

  function renderMatchChipsRow(matchNum) {
    const data = getMatchDataForScope(matchNum);
    const currentPotm = data.coachNotes?.potm;
    const roster = data.coachRoster || createDefaultRoster();
    return roster.map(p => {
      const isSelected = currentPotm && currentPotm.number === p.number;
      const label = p.initials ? `#${p.number} ${escapeHtml(p.initials)}` : `#${p.number}`;
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

  if (activeReportScope === 'combined') {
    if (promptText) promptText.innerText = 'Award Player of the Match for Match 1 & Match 2:';
    potmContainer.innerHTML = `
      <div class="w-full space-y-2">
        <div>
          <div class="text-[10px] font-black text-amber-300 uppercase mb-1">Match 1 POTM:</div>
          <div class="flex flex-wrap gap-1.5">${renderMatchChipsRow(1)}</div>
        </div>
        <div class="pt-1.5 border-t border-amber-500/25">
          <div class="text-[10px] font-black text-amber-300 uppercase mb-1">Match 2 POTM:</div>
          <div class="flex flex-wrap gap-1.5">${renderMatchChipsRow(2)}</div>
        </div>
      </div>
    `;
  } else {
    const matchNum = activeReportScope === 'm2' ? 2 : 1;
    if (promptText) promptText.innerText = `Tap player to award Match ${matchNum} POTM (Initials only):`;
    potmContainer.innerHTML = renderMatchChipsRow(matchNum);
  }
}

export function setReportScopePotm(scopeNum, playerNumber) {
  const session = (window.getSessionState && typeof window.getSessionState === 'function') ? window.getSessionState() : null;
  const activeId = (window.getActiveMatchId && typeof window.getActiveMatchId === 'function') ? window.getActiveMatchId() : 1;

  if (scopeNum === activeId || !session) {
    const cTeam = getScoreState().coachTeam || 'home';
    const roster = teams[cTeam]?.roster || [];
    const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
    setCoachPotm(player);
  } else {
    const m = session.matches && session.matches[scopeNum];
    if (m && m.score) {
      if (!m.score.coachNotes) {
        m.score.coachNotes = { potm: null, notes: '', moments: [] };
      }
      const cTeam = m.score.coachTeam || getScoreState().coachTeam || 'home';
      const roster = m.score.teams?.[cTeam]?.roster || teams[cTeam]?.roster || [];
      const player = roster.find(p => p.number === playerNumber) || { number: playerNumber, initials: '' };
      if (m.score.coachNotes.potm && m.score.coachNotes.potm.number === player.number) {
        m.score.coachNotes.potm = null;
      } else {
        m.score.coachNotes.potm = player;
      }
      if (typeof window.persistSessionState === 'function') {
        window.persistSessionState();
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

  syncReportMetaInputsFromPrefs();
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
    if (btnText) btnText.innerText = '✓ FA SMS Copied!';
    if (btn) {
      btn.classList.remove('bg-slate-800', 'text-amber-300');
      btn.classList.add('bg-amber-400', 'text-slate-950');
    }
    hapticFeedback('success');
    if (typeof window.showReportToast === 'function') {
      window.showReportToast('FA Full-Time SMS score copied!');
    }
    setTimeout(() => {
      if (btnText) btnText.innerText = 'Copy FA SMS';
      if (btn) {
        btn.classList.add('bg-slate-800', 'text-amber-300');
        btn.classList.remove('bg-amber-400', 'text-slate-950');
      }
    }, 2500);
  }

  copyPlainTextWithFallback(text, showSuccess);
}

export function copyReportToClipboard() {
  const text = getActiveReportText();
  const btnText = document.getElementById('copyReportBtnText');
  const btn = document.getElementById('copyReportBtn');

  function showSuccess() {
    if (btnText) btnText.innerText = '✓ Copied!';
    if (btn) {
      btn.classList.remove('bg-slate-800', 'text-slate-200');
      btn.classList.add('bg-emerald-500', 'text-slate-950');
    }
    hapticFeedback('success');
    if (typeof window.showReportToast === 'function') {
      window.showReportToast('Full report copied to clipboard!');
    }
    setTimeout(() => {
      if (btnText) btnText.innerText = 'Copy Report';
      if (btn) {
        btn.classList.add('bg-slate-800', 'text-slate-200');
        btn.classList.remove('bg-emerald-500', 'text-slate-950');
      }
    }, 2500);
  }

  copyPlainTextWithFallback(text, showSuccess);
}

function copyPlainTextWithFallback(text, onDone) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onDone).catch(() => {
      execCopyFallback(text);
      onDone();
    });
  } else {
    execCopyFallback(text);
    onDone();
  }
}

function execCopyFallback(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (_) {}
  document.body.removeChild(ta);
}

// Fixed: Uses activeReportScope instead of undeclared currentReportMode!
export function openSharePickerModal() {
  const isCombined = activeReportScope === 'combined';
  const scoreEl = document.getElementById('sharePickerScore');
  const contextEl = document.getElementById('sharePickerContext');

  if (isCombined) {
    const m1 = getMatchDataForScope(1);
    const m2 = getMatchDataForScope(2);
    const aggH = m1.homeScore + m2.homeScore;
    const aggA = m1.awayScore + m2.awayScore;
    if (contextEl) contextEl.innerText = 'Combined Double-Header';
    if (scoreEl) scoreEl.innerText = `${m1.home} ${aggH} - ${aggA} ${m1.away} (Agg)`;
  } else {
    const matchNum = activeReportScope === 'm2' ? 2 : 1;
    const data = getMatchDataForScope(matchNum);
    if (contextEl) contextEl.innerText = `Match ${matchNum} Result`;
    if (scoreEl) {
      scoreEl.innerText = data.isFT
        ? `${data.home} ${data.homeScore} - ${data.awayScore} ${data.away} (FT)`
        : `${data.home} ${data.homeScore} - ${data.awayScore} ${data.away}`;
    }
  }

  hapticFeedback('tap');
  if (window.openModal) {
    window.openModal('sharePickerModal');
  } else {
    document.getElementById('sharePickerModal')?.classList.remove('hidden');
  }
}

export function shareToWhatsApp() {
  const text = getActiveReportText();
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  hapticFeedback('success');
}

export function shareToMessages() {
  const text = getActiveReportText();
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const separator = isIOS ? '&' : '?';
  window.location.href = `sms:${separator}body=${encodeURIComponent(text)}`;
  hapticFeedback('success');
}

export function shareToEmail() {
  const text = getActiveReportText();
  const isCombined = activeReportScope === 'combined';
  const m1 = getMatchDataForScope(activeReportScope === 'm2' ? 2 : 1);
  const subject = encodeURIComponent(
    isCombined
      ? `Double-Header Summary: ${m1.home} vs ${m1.away} (U9)`
      : `Match ${m1.id} Result: ${m1.home} ${m1.homeScore}-${m1.awayScore} ${m1.away}`
  );
  window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(text)}`;
  hapticFeedback('success');
}

export function shareViaSystem() {
  const text = getActiveReportText();
  const isCombined = activeReportScope === 'combined';
  const m1 = getMatchDataForScope(activeReportScope === 'm2' ? 2 : 1);
  const title = isCombined
    ? `U9 Double-Header: ${m1.home} vs ${m1.away}`
    : `Match ${m1.id}: ${m1.home} ${m1.homeScore} - ${m1.awayScore} ${m1.away}`;

  if (navigator.share) {
    navigator.share({ title, text }).catch(err => {
      if (err && err.name !== 'AbortError') copyReportToClipboard();
    });
  } else {
    copyReportToClipboard();
  }
}

export function shareReportNative() {
  openSharePickerModal();
}

// ================= 2x RETINA MATCH CARD GRAPHIC (1600x2000 CANVAS GENERATOR) =================
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

function withLogoImage(cb) {
  let hasRendered = false;
  const done = (img) => {
    if (hasRendered) return;
    hasRendered = true;
    cb(img);
  };

  const existingHeaderImg = document.getElementById('headerLogoImg');
  if (existingHeaderImg && existingHeaderImg.complete && existingHeaderImg.naturalWidth > 0) {
    done(existingHeaderImg);
    return;
  }
  const img = new Image();
  img.onload = () => done(img);
  img.onerror = () => done(null);
  img.src = 'icons/confused_ref.png';
  if (img.complete && img.naturalWidth > 0) {
    done(img);
    return;
  }
  setTimeout(() => done(null), 200);
}

function drawCanvasKitJersey(ctx, cx, cy, scaleSize, fillHex) {
  const isLight = fillHex === '#f8fafc' || fillHex === '#eab308';
  const collarColor = isLight ? '#0f172a' : 'rgba(255, 255, 255, 0.9)';
  const outerStroke = fillHex === '#f8fafc' ? '#94a3b8' : collarColor;

  ctx.save();
  ctx.translate(cx - scaleSize / 2, cy - scaleSize / 2);
  const s = scaleSize / 24;
  ctx.scale(s, s);

  ctx.beginPath();
  ctx.moveTo(8.5, 3);
  ctx.lineTo(4, 5.5);
  ctx.lineTo(2, 9.5);
  ctx.lineTo(5.5, 11.5);
  ctx.lineTo(7, 9.5);
  ctx.lineTo(7, 20.5);
  ctx.quadraticCurveTo(7, 21.5, 8, 21.5);
  ctx.lineTo(16, 21.5);
  ctx.quadraticCurveTo(17, 21.5, 17, 20.5);
  ctx.lineTo(17, 9.5);
  ctx.lineTo(18.5, 11.5);
  ctx.lineTo(22, 9.5);
  ctx.lineTo(20, 5.5);
  ctx.lineTo(15.5, 3);
  ctx.lineTo(14, 5.2);
  ctx.bezierCurveTo(13.3, 6, 10.7, 6, 10, 5.2);
  ctx.closePath();

  ctx.fillStyle = fillHex || '#f43f5e';
  ctx.fill();
  ctx.strokeStyle = outerStroke;
  ctx.lineWidth = 1.4;
  ctx.lineJoin = 'round';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(9.2, 3.4);
  ctx.bezierCurveTo(10.2, 5, 13.8, 5, 14.8, 3.4);
  ctx.strokeStyle = collarColor;
  ctx.lineWidth = 1.4;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.restore();
}

function drawCardBaseAndHeader(ctx, logoImg, subtitleRight, statusBadgeText, isFT = true) {
  // Deep Obsidian + Floodlight Stadium Radial Glow
  const bgGrad = ctx.createLinearGradient(0, 0, 0, 1000);
  bgGrad.addColorStop(0, '#0a1220');
  bgGrad.addColorStop(0.45, '#070b15');
  bgGrad.addColorStop(1, '#04060c');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 800, 1000);

  const topGlow = ctx.createRadialGradient(400, 0, 20, 400, 0, 460);
  topGlow.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
  topGlow.addColorStop(0.6, 'rgba(245, 158, 11, 0.04)');
  topGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, 800, 500);

  // Subtle Chalk Pitch Geometry Watermark (4.5% opacity)
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.048)';
  ctx.lineWidth = 2;
  roundRect(ctx, 22, 22, 756, 956, 28);
  ctx.stroke();

  // Halfway line
  ctx.beginPath();
  ctx.moveTo(22, 500);
  ctx.lineTo(778, 500);
  ctx.stroke();

  // Centre circle & spot
  ctx.beginPath();
  ctx.arc(400, 500, 128, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(400, 500, 4, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.fill();

  // Top & bottom penalty area outlines
  ctx.strokeRect(240, 22, 320, 92);
  ctx.strokeRect(240, 886, 320, 92);
  ctx.restore();

  // Unclipped Rounded-Square Gold Mascot Badge (Enhanced Original Confused Ref)
  if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
    ctx.save();
    roundRect(ctx, 42, 40, 74, 74, 18);
    ctx.clip();
    ctx.drawImage(logoImg, 42, 40, 74, 74);
    ctx.restore();

    roundRect(ctx, 42, 40, 74, 74, 18);
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.2;
    ctx.stroke();
  }

  ctx.fillStyle = '#fbbf24';
  ctx.font = '900 25px "Chakra Petch", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText("WHAT'S THE SCORE REF?", 132, 68);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = '800 12.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText('HARROGATE & WHARFEDALE JFL • UNDER-9', 132, 90);

  ctx.fillStyle = '#64748b';
  ctx.font = '600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(subtitleRight, 132, 110);

  ctx.font = '900 12px "Chakra Petch", monospace';
  const badgeWidth = ctx.measureText(statusBadgeText).width + 26;
  const badgeX = 758 - badgeWidth;
  ctx.fillStyle = isFT ? 'rgba(245, 158, 11, 0.18)' : 'rgba(16, 185, 129, 0.18)';
  roundRect(ctx, badgeX, 56, badgeWidth, 34, 11);
  ctx.fill();
  ctx.strokeStyle = isFT ? '#fbbf24' : '#10b981';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = isFT ? '#fde68a' : '#6ee7b7';
  ctx.fillText(statusBadgeText, badgeX + 13, 78);
}

export function generateCombinedMatchCardCanvas(callback) {
  const m1 = getMatchDataForScope(1);
  const m2 = getMatchDataForScope(2);
  const aggHome = m1.homeScore + m2.homeScore;
  const aggAway = m1.awayScore + m2.awayScore;
  const home = m1.home;
  const away = m1.away;
  const homeColor = m1.homeColor || '#f43f5e';
  const awayColor = m1.awayColor || '#2563eb';
  const halfMinutes = m1.targetMinutes || 15;

  const pitch = document.getElementById('reportPitchInput')?.value?.trim() || '';
  const ref = document.getElementById('reportRefInput')?.value?.trim() || '';

  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 2000;
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  withLogoImage((logoImg) => {
    const today = new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    drawCardBaseAndHeader(ctx, logoImg, `Double-Header Aggregate • ${today}`, `AGGREGATE • 4x${halfMinutes}m`, true);

    // Aggregate Broadcast Scoreboard Plate
    const scoreCardGrad = ctx.createLinearGradient(40, 140, 760, 420);
    scoreCardGrad.addColorStop(0, '#0f172a');
    scoreCardGrad.addColorStop(1, '#090d18');
    ctx.fillStyle = scoreCardGrad;
    roundRect(ctx, 40, 140, 720, 275, 22);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = homeColor;
    ctx.fillRect(40, 140, 360, 5);
    ctx.fillStyle = awayColor;
    ctx.fillRect(400, 140, 360, 5);

    // Home & Away Kit Jersey Shields
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    roundRect(ctx, 162, 162, 56, 56, 16);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.stroke();
    drawCanvasKitJersey(ctx, 190, 190, 36, homeColor);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    roundRect(ctx, 582, 162, 56, 56, 16);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.stroke();
    drawCanvasKitJersey(ctx, 610, 190, 36, awayColor);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 21px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(truncateText(ctx, home, 250), 190, 248);
    ctx.fillText(truncateText(ctx, away, 250), 610, 248);

    // Inset Broadcast Center Score Box
    ctx.fillStyle = 'rgba(4, 7, 15, 0.8)';
    roundRect(ctx, 302, 166, 196, 108, 18);
    ctx.fill();
    ctx.strokeStyle = '#24324a';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#fbbf24';
    ctx.font = '800 10px "Chakra Petch", monospace';
    ctx.fillText('AGGREGATE', 400, 184);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 68px "Chakra Petch", monospace';
    ctx.fillText(String(aggHome), 348, 252);
    ctx.fillText(String(aggAway), 452, 252);

    ctx.fillStyle = '#475569';
    ctx.font = '800 32px "Chakra Petch", monospace';
    ctx.fillText(':', 400, 244);

    // M1 & M2 Split Summary Strip
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    roundRect(ctx, 56, 344, 336, 52, 12);
    ctx.fill();
    roundRect(ctx, 408, 344, 336, 52, 12);
    ctx.fill();

    ctx.fillStyle = '#34d399';
    ctx.font = '900 12px "Chakra Petch", monospace';
    ctx.fillText(`MATCH 1:  ${m1.homeScore} - ${m1.awayScore}  (${m1.period.toUpperCase()})`, 224, 375);
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(`MATCH 2:  ${m2.homeScore} - ${m2.awayScore}  (${m2.period.toUpperCase()})`, 576, 375);

    // Combined Timeline Card
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0d1424';
    roundRect(ctx, 40, 430, 720, 420, 20);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const allGoals = [
      ...m1.goals.map(g => ({ ...g, match: 1 })),
      ...m2.goals.map(g => ({ ...g, match: 2 }))
    ];

    ctx.fillStyle = '#38bdf8';
    ctx.font = '900 15px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
    ctx.fillText(`⚽ DOUBLE-HEADER GOALS (${allGoals.length} TOTAL)`, 65, 466);

    ctx.strokeStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(40, 484);
    ctx.lineTo(760, 484);
    ctx.stroke();

    if (allGoals.length === 0) {
      ctx.fillStyle = '#94a3b8';
      ctx.font = '600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('No goals recorded across Match 1 & Match 2 (0 - 0)', 400, 640);
      ctx.textAlign = 'left';
    } else {
      const maxGoals = 7;
      let rowY = 520;
      allGoals.slice(0, maxGoals).forEach((g, idx) => {
        ctx.fillStyle = g.match === 1 ? 'rgba(16, 185, 129, 0.18)' : 'rgba(245, 158, 11, 0.18)';
        roundRect(ctx, 65, rowY - 17, 42, 24, 6);
        ctx.fill();
        ctx.fillStyle = g.match === 1 ? '#34d399' : '#fbbf24';
        ctx.font = '900 11px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`M${g.match}`, 86, rowY - 1);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        roundRect(ctx, 114, rowY - 17, 64, 24, 6);
        ctx.fill();
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(g.time, 146, rowY - 1);

        ctx.textAlign = 'left';
        ctx.fillStyle = g.team === 'home' ? homeColor : awayColor;
        ctx.beginPath();
        ctx.arc(194, rowY - 5, 5, 0, Math.PI * 2);
        ctx.fill();

        let scorerText = '';
        if (g.isOwnGoal) scorerText = ' • ⚠️ OG';
        else if (g.scorer) {
          const sInit = g.scorer.initials ? `#${g.scorer.number} ${g.scorer.initials}` : `#${g.scorer.number}`;
          const aInit = g.assist ? ` (🅰️ #${g.assist.number}${g.assist.initials ? ' ' + g.assist.initials : ''})` : '';
          scorerText = ` • ⚽ ${sInit}${aInit}`;
        }

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 13.5px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
        ctx.fillText(truncateText(ctx, `${g.teamName}${scorerText}`, 415), 208, rowY);

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '900 14px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`[ ${g.scoreHome} - ${g.scoreAway} ]`, 735, rowY);
        ctx.textAlign = 'left';

        rowY += 44;
      });

      if (allGoals.length > maxGoals) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '700 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`+ ${allGoals.length - maxGoals} more goals in full report`, 400, rowY);
        ctx.textAlign = 'left';
      }
    }

    // Footer
    ctx.fillStyle = '#0d1424';
    roundRect(ctx, 40, 865, 720, 95, 16);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(ref ? `Referee: ${ref}` : 'Double-Header Summary', 65, 896);
    ctx.fillText(pitch ? `Pitch / Venue: ${pitch}` : 'Rules: Harrogate & Wharfedale U9 Grassroots League', 65, 918);

    const potmParts = [];
    if (m1.coachNotes?.potm) potmParts.push(`M1: #${m1.coachNotes.potm.number}${m1.coachNotes.potm.initials ? ' ' + m1.coachNotes.potm.initials : ''}`);
    if (m2.coachNotes?.potm) potmParts.push(`M2: #${m2.coachNotes.potm.number}${m2.coachNotes.potm.initials ? ' ' + m2.coachNotes.potm.initials : ''}`);
    if (potmParts.length > 0) {
      ctx.fillStyle = '#fbbf24';
      ctx.font = '900 11.5px monospace';
      ctx.fillText(`⭐ POTM: ${potmParts.join('  •  ')}`, 65, 944);
    }

    ctx.fillStyle = '#94a3b8';
    ctx.font = '700 11px "Chakra Petch", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('whatsthescoreref.vercel.app • 100% Offline PWA', 735, 912);
    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 11px "Chakra Petch", monospace';
    ctx.fillText('RESPECT • FAIR PLAY', 735, 934);

    if (typeof callback === 'function') callback(canvas);
  });
}

export function generateMatchCardCanvas(scopeOrCb, callbackArg) {
  let targetScope = activeReportScope;
  let callback = callbackArg;
  if (typeof scopeOrCb === 'function') {
    callback = scopeOrCb;
  } else if (scopeOrCb) {
    targetScope = scopeOrCb;
  }

  if (targetScope === 'combined') {
    generateCombinedMatchCardCanvas(callback);
    return;
  }

  const matchNum = targetScope === 'm2' ? 2 : 1;
  const matchData = getMatchDataForScope(matchNum);

  // 2x Retina Resolution (1600x2000 physical pixels over 800x1000 logical coordinates)
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 2000;
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  const home = matchData.home;
  const away = matchData.away;
  const homeColor = matchData.homeColor || '#f43f5e';
  const awayColor = matchData.awayColor || '#2563eb';
  const homeScore = matchData.homeScore;
  const awayScore = matchData.awayScore;
  const goals = matchData.goals || [];
  const isFT = matchData.isFT;
  const periodText = isFT ? 'FULL TIME' : (matchData.period ? matchData.period.toUpperCase() : 'FULL TIME');
  const halfMinutes = matchData.targetMinutes || 15;

  const pitch = document.getElementById('reportPitchInput')?.value?.trim() || '';
  const ref = document.getElementById('reportRefInput')?.value?.trim() || '';

  let h1Home = 0, h1Away = 0, h2Home = 0, h2Away = 0;
  goals.forEach(g => {
    if (g.period === '1st Half') {
      if (g.team === 'home') h1Home++; else h1Away++;
    } else {
      if (g.team === 'home') h2Home++; else h2Away++;
    }
  });

  withLogoImage((logoImg) => {
    const today = new Date().toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    drawCardBaseAndHeader(ctx, logoImg, `Match ${matchNum} • ${today}`, `${periodText} • 2x${halfMinutes}m`, isFT);

    // Broadcast Hero Scoreboard Plate (Single Match)
    const scoreCardGrad = ctx.createLinearGradient(40, 140, 760, 420);
    scoreCardGrad.addColorStop(0, '#0f172a');
    scoreCardGrad.addColorStop(1, '#090d18');
    ctx.fillStyle = scoreCardGrad;
    roundRect(ctx, 40, 140, 720, 260, 22);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = homeColor;
    ctx.fillRect(40, 140, 360, 5);
    ctx.fillStyle = awayColor;
    ctx.fillRect(400, 140, 360, 5);

    const isCoach = (typeof getAppMode === 'function' && getAppMode() === 'coach') || (matchData.coachNotes?.moments?.length > 0) || (matchData.coachNotes?.potm != null);
    const homeIsCoach = isCoach && matchData.coachTeam === 'home';
    const awayIsCoach = isCoach && matchData.coachTeam === 'away';

    // Home & Away Kit Jersey Badges
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    roundRect(ctx, 160, 164, 60, 60, 17);
    ctx.fill();
    ctx.strokeStyle = homeIsCoach ? 'rgba(251, 191, 36, 0.55)' : 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    drawCanvasKitJersey(ctx, 190, 194, 38, homeColor);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    roundRect(ctx, 580, 164, 60, 60, 17);
    ctx.fill();
    ctx.strokeStyle = awayIsCoach ? 'rgba(251, 191, 36, 0.55)' : 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    drawCanvasKitJersey(ctx, 610, 194, 38, awayColor);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 21px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(truncateText(ctx, homeIsCoach ? `★ ${home}` : home, 255), 190, 256);
    ctx.fillText(truncateText(ctx, awayIsCoach ? `★ ${away}` : away, 255), 610, 256);

    ctx.fillStyle = homeIsCoach ? '#fbbf24' : '#94a3b8';
    ctx.font = '800 10.5px "Chakra Petch", monospace';
    ctx.fillText(homeIsCoach ? 'COACH TEAM' : 'HOME', 190, 276);

    ctx.fillStyle = awayIsCoach ? '#fbbf24' : '#94a3b8';
    ctx.fillText(awayIsCoach ? 'COACH TEAM' : 'AWAY', 610, 276);

    // Inset Broadcast Center Score Box
    ctx.fillStyle = 'rgba(4, 7, 15, 0.82)';
    roundRect(ctx, 298, 168, 204, 118, 20);
    ctx.fill();
    ctx.strokeStyle = '#24324a';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 76px "Chakra Petch", monospace';
    ctx.fillText(String(homeScore), 348, 254);
    ctx.fillText(String(awayScore), 452, 254);

    ctx.fillStyle = '#475569';
    ctx.font = '800 36px "Chakra Petch", monospace';
    ctx.fillText(':', 400, 244);

    // Half Breakdown & Format Strip
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    ctx.beginPath();
    ctx.moveTo(64, 344);
    ctx.lineTo(736, 344);
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '700 12.5px "Chakra Petch", monospace';
    ctx.fillText(`1ST HALF: ${h1Home} - ${h1Away}    •    2ND HALF: ${h2Home} - ${h2Away}    •    5v5 RESPECT FIXTURE`, 400, 375);

    ctx.textAlign = 'left';
    const moments = matchData.coachNotes?.moments || [];

    if (isCoach && moments.length > 0) {
      if (goals.length > 0) {
        ctx.fillStyle = '#0d1424';
        roundRect(ctx, 40, 415, 720, 185, 16);
        ctx.fill();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(40, 415, 720, 3);
        ctx.font = '900 13px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
        ctx.fillText('⚽ MATCH GOALS & TIMELINE', 65, 442);

        ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        roundRect(ctx, 640, 427, 95, 20, 6);
        ctx.fill();
        ctx.fillStyle = '#38bdf8';
        ctx.font = '900 10.5px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${goals.length} GOAL${goals.length === 1 ? '' : 'S'}`, 687, 441);
        ctx.textAlign = 'left';

        ctx.strokeStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(40, 456);
        ctx.lineTo(760, 456);
        ctx.stroke();

        const maxGoalsToShow = 3;
        let goalRowY = 488;
        goals.slice(0, maxGoalsToShow).forEach((g, idx) => {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
          roundRect(ctx, 65, goalRowY - 15, 24, 20, 5);
          ctx.fill();
          ctx.fillStyle = '#34d399';
          ctx.font = '900 11px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(String(idx + 1), 77, goalRowY);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          roundRect(ctx, 95, goalRowY - 15, 54, 20, 5);
          ctx.fill();
          ctx.fillStyle = '#f59e0b';
          ctx.font = '800 11px monospace';
          ctx.fillText(g.time, 122, goalRowY);

          ctx.fillStyle = '#64748b';
          ctx.font = '700 10.5px monospace';
          ctx.textAlign = 'left';
          ctx.fillText(g.period === '1st Half' ? '1H' : '2H', 156, goalRowY);

          ctx.fillStyle = g.team === 'home' ? homeColor : awayColor;
          ctx.beginPath();
          ctx.arc(184, goalRowY - 4, 4.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = '800 13px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
          let scorerText = '';
          if (g.isOwnGoal) scorerText = ' • ⚠️ Own Goal';
          else if (g.scorer) {
            const sInit = g.scorer.initials ? `#${g.scorer.number} ${g.scorer.initials}` : `#${g.scorer.number}`;
            const aInit = g.assist ? ` (🅰️ #${g.assist.number}${g.assist.initials ? ' ' + g.assist.initials : ''})` : '';
            scorerText = ` • ⚽ ${sInit}${aInit}`;
          }
          ctx.fillText(truncateText(ctx, `${g.teamName}${scorerText}`, 360), 196, goalRowY);

          ctx.fillStyle = '#cbd5e1';
          ctx.font = '900 13px monospace';
          ctx.textAlign = 'right';
          ctx.fillText(`[ ${g.scoreHome} - ${g.scoreAway} ]`, 735, goalRowY);
          ctx.textAlign = 'left';

          goalRowY += 34;
        });

        if (goals.length > maxGoalsToShow) {
          ctx.fillStyle = '#94a3b8';
          ctx.font = '700 11px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`+ ${goals.length - maxGoalsToShow} more goals in match report`, 400, 584);
          ctx.textAlign = 'left';
        }

        // Touchline Moments Card
        ctx.fillStyle = '#0d1424';
        roundRect(ctx, 40, 612, 720, 242, 16);
        ctx.fill();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(40, 612, 720, 3);
        ctx.font = '900 13px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
        ctx.fillText('⭐ TOUCHLINE MATCH MOMENTS', 65, 638);

        ctx.fillStyle = 'rgba(245, 158, 11, 0.18)';
        roundRect(ctx, 625, 623, 110, 20, 6);
        ctx.fill();
        ctx.fillStyle = '#fbbf24';
        ctx.font = '900 10.5px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${moments.length} MOMENT${moments.length === 1 ? '' : 'S'}`, 680, 637);
        ctx.textAlign = 'left';

        ctx.strokeStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(40, 652);
        ctx.lineTo(760, 652);
        ctx.stroke();

        const maxMoments = 6;
        moments.slice(0, maxMoments).forEach((m, idx) => {
          const isCol2 = idx % 2 === 1;
          const rowIdx = Math.floor(idx / 2);
          const boxX = isCol2 ? 408 : 56;
          const boxY = 662 + (rowIdx * 45);
          const pLabel = formatMomentPlayers(m);
          const pTag = m.period === '1st Half' ? '1H' : (m.period === '2nd Half' ? '2H' : (m.period || '1H'));

          ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
          roundRect(ctx, boxX, boxY, 336, 40, 8);
          ctx.fill();
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.22)';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.font = '15px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(m.icon || '⭐', boxX + 20, boxY + 25);

          ctx.fillStyle = '#ffffff';
          ctx.font = '800 11.5px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(truncateText(ctx, m.tag, 190), boxX + 38, boxY + 17);

          ctx.fillStyle = '#fcd34d';
          ctx.font = '700 10.5px monospace';
          ctx.fillText(truncateText(ctx, `[${m.time}] ${pTag} • ${pLabel}`, 280), boxX + 38, boxY + 31);
        });

        if (moments.length > maxMoments) {
          ctx.fillStyle = '#94a3b8';
          ctx.font = '700 10.5px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`+ ${moments.length - maxMoments} more moments in match report`, 400, 843);
          ctx.textAlign = 'left';
        }
      } else {
        ctx.fillStyle = '#0d1424';
        roundRect(ctx, 40, 415, 720, 44, 12);
        ctx.fill();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#94a3b8';
        ctx.font = '700 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`⚽ Match Result: ${home} ${homeScore} - ${awayScore} ${away} • Clean sheet / No goals recorded`, 400, 442);
        ctx.textAlign = 'left';

        ctx.fillStyle = '#0d1424';
        roundRect(ctx, 40, 468, 720, 386, 16);
        ctx.fill();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(40, 468, 720, 3);
        ctx.font = '900 14px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
        ctx.fillText('⭐ TOUCHLINE MATCH MOMENTS', 65, 497);

        ctx.strokeStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(40, 513);
        ctx.lineTo(760, 513);
        ctx.stroke();

        const maxMoments = 8;
        moments.slice(0, maxMoments).forEach((m, idx) => {
          const isCol2 = idx % 2 === 1;
          const rowIdx = Math.floor(idx / 2);
          const boxX = isCol2 ? 408 : 56;
          const boxY = 525 + (rowIdx * 64);
          const pLabel = formatMomentPlayers(m);
          const pTag = m.period === '1st Half' ? '1H' : (m.period === '2nd Half' ? '2H' : (m.period || '1H'));

          ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
          roundRect(ctx, boxX, boxY, 336, 54, 10);
          ctx.fill();
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.font = '16px "Segoe UI Emoji", "Apple Color Emoji", sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(m.icon || '⭐', boxX + 24, boxY + 33);

          ctx.fillStyle = '#ffffff';
          ctx.font = '800 12.5px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(truncateText(ctx, m.tag, 270), boxX + 46, boxY + 22);

          ctx.fillStyle = '#fcd34d';
          ctx.font = '700 11px monospace';
          ctx.fillText(truncateText(ctx, `[${m.time}] (${pTag}) • ${pLabel}`, 275), boxX + 46, boxY + 41);
        });
      }
    } else {
      // FIXED: Explicit dark #0d1424 card background in Referee Mode / 0-moments Coach Mode!
      ctx.fillStyle = '#0d1424';
      roundRect(ctx, 40, 425, 720, 420, 20);
      ctx.fill();
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(40, 425, 720, 3);
      ctx.font = '900 15px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
      ctx.fillText('⚽ MATCH TIMELINE & GOAL LOG', 65, 462);

      ctx.strokeStyle = '#1e293b';
      ctx.beginPath();
      ctx.moveTo(40, 480);
      ctx.lineTo(760, 480);
      ctx.stroke();

      if (goals.length === 0) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '600 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('No goals recorded during this match (0 - 0)', 400, 640);
        ctx.textAlign = 'left';
      } else {
        const maxGoalsToShow = 7;
        let rowY = 518;
        goals.slice(0, maxGoalsToShow).forEach((g, idx) => {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
          roundRect(ctx, 65, rowY - 18, 30, 26, 6);
          ctx.fill();
          ctx.fillStyle = '#34d399';
          ctx.font = '900 12px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(String(idx + 1), 80, rowY);

          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          roundRect(ctx, 105, rowY - 18, 70, 26, 6);
          ctx.fill();
          ctx.fillStyle = '#f59e0b';
          ctx.font = '800 12px monospace';
          ctx.fillText(g.time, 140, rowY);

          ctx.fillStyle = '#94a3b8';
          ctx.font = '700 11px monospace';
          ctx.textAlign = 'left';
          ctx.fillText(g.period === '1st Half' ? '1H' : '2H', 185, rowY);

          ctx.fillStyle = g.team === 'home' ? homeColor : awayColor;
          ctx.beginPath();
          ctx.arc(220, rowY - 5, 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = '800 14px -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Segoe UI", Roboto, sans-serif';
          let scorerText = '';
          if (g.isOwnGoal) scorerText = ' • ⚠️ Own Goal';
          else if (g.scorer) {
            const sInit = g.scorer.initials ? `#${g.scorer.number} ${g.scorer.initials}` : `#${g.scorer.number}`;
            const aInit = g.assist ? ` (🅰️ #${g.assist.number}${g.assist.initials ? ' ' + g.assist.initials : ''})` : '';
            scorerText = ` • ⚽ ${sInit}${aInit}`;
          }
          ctx.fillText(truncateText(ctx, `${g.teamName}${scorerText}`, 360), 235, rowY);

          ctx.fillStyle = '#e2e8f0';
          ctx.font = '900 15px monospace';
          ctx.textAlign = 'right';
          ctx.fillText(`[ ${g.scoreHome} - ${g.scoreAway} ]`, 735, rowY);
          ctx.textAlign = 'left';

          if (idx < Math.min(goals.length, maxGoalsToShow) - 1) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
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
          ctx.textAlign = 'left';
        }
      }
    }

    // Footer Details Card
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0d1424';
    roundRect(ctx, 40, 865, 720, 95, 16);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText(ref ? `Referee: ${ref}` : 'Match Result', 65, 898);
    ctx.fillText(pitch ? `Pitch / Venue: ${pitch}` : 'Rules: Harrogate & Wharfedale U9 Grassroots League', 65, 922);

    if (matchData.coachNotes?.potm) {
      const potm = matchData.coachNotes.potm;
      const potmStr = `#${potm.number}${potm.initials ? ' ' + potm.initials : ''}`;
      ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
      roundRect(ctx, 65, 930, 270, 22, 6);
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#fbbf24';
      ctx.font = '900 11px monospace';
      ctx.fillText(`⭐ PLAYER OF THE MATCH: ${potmStr}`, 75, 945);
    }

    ctx.fillStyle = '#94a3b8';
    ctx.font = '700 11px "Chakra Petch", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('whatsthescoreref.vercel.app • 100% Offline PWA', 735, 912);
    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 11px "Chakra Petch", monospace';
    ctx.fillText('RESPECT • FAIR PLAY', 735, 934);

    if (typeof callback === 'function') callback(canvas);
  });
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

export function openMatchCardModal(overrideScope = null) {
  const previewContainer = document.getElementById('matchCardPreviewContainer');
  if (!previewContainer) return;
  if (overrideScope) activeReportScope = overrideScope;
  previewContainer.innerHTML = '<div class="text-center py-12 text-slate-500 text-xs animate-pulse">Generating HD 1600×2000 graphic...</div>';

  const currentScope = activeReportScope;
  generateMatchCardCanvas(currentScope, (canvas) => {
    previewContainer.innerHTML = '';

    let dataUrl = '';
    try { dataUrl = canvas.toDataURL('image/png'); } catch (_) {}

    canvas.id = 'matchCardGeneratedCanvas';
    canvas.style.display = 'none';
    previewContainer.appendChild(canvas);

    const isComb = currentScope === 'combined';
    const matchNum = currentScope === 'm2' ? 2 : 1;
    const label = document.createElement('div');
    label.className = 'text-[11px] font-black text-emerald-400 mb-1 tracking-wider uppercase flex items-center gap-1.5';
    label.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> ${isComb ? 'Double-Header Aggregate Graphic (HD)' : `Match ${matchNum} Graphic (HD)`}`;

    const img = document.createElement('img');
    img.id = 'matchCardPreviewImg';
    img.src = dataUrl || canvas.toDataURL();
    img.alt = isComb ? 'Double-Header Card Graphic' : `Match ${matchNum} Card Graphic`;
    img.className = 'w-full h-auto rounded-xl shadow-2xl border border-slate-700/80 max-h-[46vh] object-contain mx-auto cursor-pointer hover:opacity-95 active:scale-[0.99] transition';
    img.onclick = () => showFullscreenImageModal(canvas, isComb ? 'combined' : matchNum);

    const hint = document.createElement('div');
    hint.className = 'text-[10px] text-slate-400 mt-1.5 text-center';
    hint.innerHTML = 'Use <strong class="text-amber-300">Share Image</strong> below or tap image for fullscreen zoom';

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
  const scopeTag = activeReportScope === 'combined' ? 'combined' : (activeReportScope === 'm2' ? 2 : 1);
  if (!canvas) {
    generateMatchCardCanvas(activeReportScope, (newCanvas) => {
      showFullscreenImageModal(newCanvas, scopeTag);
    });
    return;
  }
  showFullscreenImageModal(canvas, scopeTag);
}

function showFullscreenImageModal(canvas, matchNumOrComb = 1) {
  try {
    const dataUrl = canvas.toDataURL('image/png');
    const fullImg = document.getElementById('matchCardFullscreenImg');
    const titleEl = document.getElementById('matchCardFullscreenTitle');

    if (fullImg) fullImg.src = dataUrl;
    if (titleEl) {
      if (matchNumOrComb === 'combined') {
        const m1 = getMatchDataForScope(1);
        const m2 = getMatchDataForScope(2);
        titleEl.innerText = `Aggregate: ${m1.home} ${m1.homeScore + m2.homeScore} - ${m1.awayScore + m2.awayScore} ${m1.away}`;
      } else {
        const matchData = getMatchDataForScope(matchNumOrComb);
        titleEl.innerText = `Match ${matchNumOrComb}: ${matchData.home} ${matchData.homeScore} - ${matchData.awayScore} ${matchData.away}`;
      }
    }

    if (window.openModal) {
      window.openModal('matchCardFullscreenModal');
    } else {
      document.getElementById('matchCardFullscreenModal')?.classList.remove('hidden');
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
    if (dataUrlOrBlobUrl.startsWith('blob:')) URL.revokeObjectURL(dataUrlOrBlobUrl);
  }, 400);
}

export function downloadMatchCard() {
  const canvas = document.getElementById('matchCardGeneratedCanvas');
  if (!canvas) {
    generateMatchCardCanvas(activeReportScope, (newCanvas) => exportCanvasToDownload(newCanvas));
    return;
  }
  exportCanvasToDownload(canvas);
}

function getCardFilename() {
  const isComb = activeReportScope === 'combined';
  const m1 = getMatchDataForScope(activeReportScope === 'm2' ? 2 : 1);
  const safeHome = (m1.home || 'Home').replace(/[^a-zA-Z0-9_-]/g, '_');
  const safeAway = (m1.away || 'Away').replace(/[^a-zA-Z0-9_-]/g, '_');
  if (isComb) {
    const m2 = getMatchDataForScope(2);
    return `MatchCard_Aggregate_${safeHome}_${m1.homeScore + m2.homeScore}-${m1.awayScore + m2.awayScore}_${safeAway}.png`;
  }
  return `MatchCard_M${m1.id}_${safeHome}_${m1.homeScore}-${m1.awayScore}_${safeAway}.png`;
}

function exportCanvasToDownload(canvas) {
  const filename = getCardFilename();
  const isIOS = typeof navigator !== 'undefined' && (/iPad|iPhone|iPod/.test(navigator.userAgent || '') || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  try {
    const blob = getCanvasBlobSync(canvas);
    const blobUrl = URL.createObjectURL(blob);

    if (isIOS) {
      try {
        const file = new File([blob], filename, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
          navigator.share({ files: [file] }).then(() => hapticFeedback('success')).catch((err) => {
            if (err && err.name !== 'AbortError') showFullscreenImageModal(canvas);
          });
          return;
        }
      } catch (_) {}
      showFullscreenImageModal(canvas);
      return;
    }

    triggerDownloadFallback(blobUrl, filename);
    hapticFeedback('success');
  } catch (_) {
    try {
      triggerDownloadFallback(canvas.toDataURL('image/png'), filename);
      hapticFeedback('success');
    } catch (_) {
      showFullscreenImageModal(canvas);
    }
  }
}

export function shareMatchCard() {
  const canvas = document.getElementById('matchCardGeneratedCanvas');
  if (!canvas) {
    generateMatchCardCanvas(activeReportScope, (newCanvas) => shareMatchCardFromCanvas(newCanvas));
    return;
  }
  shareMatchCardFromCanvas(canvas);
}

function shareMatchCardFromCanvas(canvas) {
  const isComb = activeReportScope === 'combined';
  const m1 = getMatchDataForScope(activeReportScope === 'm2' ? 2 : 1);
  const m2 = getMatchDataForScope(2);
  const filename = getCardFilename();

  const shareTitle = isComb
    ? `Double-Header: ${m1.home} ${m1.homeScore + m2.homeScore} - ${m1.awayScore + m2.awayScore} ${m1.away}`
    : `Match ${m1.id}: ${m1.home} ${m1.homeScore} - ${m1.awayScore} ${m1.away}`;
  const shareText = `${shareTitle} (Harrogate & Wharfedale U9)`;

  let file = null;
  try {
    const blob = getCanvasBlobSync(canvas);
    file = new File([blob], filename, { type: 'image/png' });
  } catch (_) {}

  if (file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
    navigator.share({ title: shareTitle, text: shareText, files: [file] })
      .then(() => hapticFeedback('success'))
      .catch((err) => {
        if (err && err.name !== 'AbortError') downloadMatchCard();
      });
    return;
  }

  downloadMatchCard();
}

window.openMatchCardModal = openMatchCardModal;
window.openFullMatchCardImage = openFullMatchCardImage;
window.downloadMatchCard = downloadMatchCard;
window.shareMatchCard = shareMatchCard;
window.onReportMetaInputChanged = onReportMetaInputChanged;
