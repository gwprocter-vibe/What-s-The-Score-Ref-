// What's The Score Ref - League Rules, Topic Filtering & Instant Search Module
// Harrogate & Wharfedale Junior Friendly League Under-9 Matchday Rules (2026–2027)
import { hapticFeedback } from './hardware.js';

let activeRuleTab = 'quick';
let activeRuleTopic = 'all';
let activeRuleQuery = '';

export function switchRulesTab(tab) {
  activeRuleTab = tab === 'all' ? 'all' : 'quick';
  const quickBtn = document.getElementById('tabQuickRules');
  const allBtn = document.getElementById('tabAllRules');
  const quickContainer = document.getElementById('quickRulesContainer');
  const allContainer = document.getElementById('allRulesContainer');

  const activeCls = 'flex-1 py-2 rounded-lg bg-amber-500 text-slate-950 font-extrabold transition shadow cursor-pointer';
  const inactiveCls = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white font-bold transition cursor-pointer';

  if (activeRuleTab === 'quick') {
    if (quickBtn) quickBtn.className = activeCls;
    if (allBtn) allBtn.className = inactiveCls;
    if (quickContainer) quickContainer.classList.remove('hidden');
    if (allContainer) allContainer.classList.add('hidden');
  } else {
    if (allBtn) allBtn.className = activeCls;
    if (quickBtn) quickBtn.className = inactiveCls;
    if (quickContainer) quickContainer.classList.add('hidden');
    if (allContainer) allContainer.classList.remove('hidden');
  }

  applyRulesFilters();
}

export function filterRulesTopic(topic) {
  activeRuleTopic = (topic || 'all').toLowerCase().trim();
  hapticFeedback('selection');

  const chips = document.querySelectorAll('.rule-filter-chip, [data-topic-filter]');
  chips.forEach(chip => {
    const chipTopic = (chip.getAttribute('data-topic-filter') || '').toLowerCase().trim();
    if (chipTopic === activeRuleTopic) {
      chip.className = 'rule-filter-chip shrink-0 px-2.5 py-1 rounded-full text-[11px] font-black bg-amber-500 text-slate-950 border border-amber-400 shadow transition cursor-pointer';
    } else {
      chip.className = 'rule-filter-chip shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 transition cursor-pointer';
    }
  });

  // Topic pills apply to Quick Rulings; switch to Quick tab if on All Rules
  if (activeRuleTab !== 'quick' && activeRuleTopic !== 'all') {
    switchRulesTab('quick');
    return;
  }

  applyRulesFilters();
}

export function searchRules(query) {
  activeRuleQuery = (query || '').toLowerCase().trim();
  const clearBtn = document.getElementById('rulesSearchClearBtn');
  if (clearBtn) {
    clearBtn.classList.toggle('hidden', activeRuleQuery.length === 0);
  }
  applyRulesFilters();
}

export function clearRulesSearch() {
  const input = document.getElementById('rulesSearchInput');
  if (input) input.value = '';
  searchRules('');
}

function applyRulesFilters() {
  const q = activeRuleQuery;

  // 1. Filter Quick Ruling <details> cards
  const cards = document.querySelectorAll('#quickRulesContainer details[data-topic]');
  let visibleQuickCount = 0;
  cards.forEach(card => {
    const cardTopic = (card.getAttribute('data-topic') || '').toLowerCase().trim();
    const topicMatch = activeRuleTopic === 'all' || cardTopic === activeRuleTopic;
    const textMatch = !q || (card.textContent || '').toLowerCase().includes(q);

    if (topicMatch && textMatch) {
      card.classList.remove('hidden');
      visibleQuickCount++;
      if (q.length >= 2) {
        card.open = true;
      }
    } else {
      card.classList.add('hidden');
      card.open = false;
    }
  });

  const emptyQuickEl = document.getElementById('quickRulesEmptyState');
  if (emptyQuickEl) {
    emptyQuickEl.classList.toggle('hidden', visibleQuickCount > 0);
  }

  // 2. Filter All Rules sections when searching
  const sections = document.querySelectorAll('#allRulesContainer > div[id^="ruleSection-"]');
  let visibleSectionCount = 0;
  sections.forEach(sec => {
    const textMatch = !q || (sec.textContent || '').toLowerCase().includes(q);
    if (textMatch) {
      sec.classList.remove('hidden');
      visibleSectionCount++;
    } else {
      sec.classList.add('hidden');
    }
  });

  const emptyAllEl = document.getElementById('allRulesEmptyState');
  if (emptyAllEl) {
    emptyAllEl.classList.toggle('hidden', visibleSectionCount > 0);
  }
}

export function resetRulesModalView() {
  activeRuleTopic = 'all';
  activeRuleQuery = '';
  const input = document.getElementById('rulesSearchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('rulesSearchClearBtn');
  if (clearBtn) clearBtn.classList.add('hidden');

  document.querySelectorAll('#quickRulesContainer details[open]').forEach(c => { c.open = false; });
  filterRulesTopic('all');
  switchRulesTab('quick');
}

export function scrollToRuleSection(sectionId) {
  if (activeRuleTab !== 'all') {
    switchRulesTab('all');
  }
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.add('ring-2', 'ring-amber-400');
    setTimeout(() => {
      target.classList.remove('ring-2', 'ring-amber-400');
    }, 1200);
  }
}

export const switchRuleTab = switchRulesTab;

if (typeof window !== 'undefined') {
  window.filterRulesTopic = filterRulesTopic;
  window.switchRulesTab = switchRulesTab;
  window.switchRuleTab = switchRulesTab;
  window.searchRules = searchRules;
  window.clearRulesSearch = clearRulesSearch;
  window.scrollToRuleSection = scrollToRuleSection;
  window.resetRulesModalView = resetRulesModalView;
}
