// What's The Score Ref - League Rules & Quick Rulings Module
// Harrogate & Wharfedale Junior Friendly League Under-9 Matchday Rules (2026–2027)

export function switchRulesTab(tab) {
  const quickBtn = document.getElementById('tabQuickRules') || document.getElementById('tabQuickRulesBtn');
  const allBtn = document.getElementById('tabAllRules') || document.getElementById('tabAllRulesBtn');
  const quickContainer = document.getElementById('quickRulesContainer');
  const allContainer = document.getElementById('allRulesContainer');

  if (tab === 'quick') {
    if (quickBtn) {
      quickBtn.className = 'flex-1 py-2 rounded-lg bg-amber-500 text-black font-extrabold transition shadow';
      quickBtn.style.setProperty('background-color', '#f59e0b', 'important');
      quickBtn.style.setProperty('color', '#020617', 'important');
      quickBtn.style.setProperty('font-weight', '800', 'important');
    }
    if (allBtn) {
      allBtn.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition';
      allBtn.style.setProperty('background-color', 'transparent', 'important');
      allBtn.style.setProperty('color', '#94a3b8', 'important');
      allBtn.style.setProperty('font-weight', '700', 'important');
    }

    if (quickContainer) {
      quickContainer.classList.remove('hidden');
      quickContainer.style.setProperty('display', 'block', 'important');
    }
    if (allContainer) {
      allContainer.classList.add('hidden');
      allContainer.style.setProperty('display', 'none', 'important');
    }
  } else {
    if (allBtn) {
      allBtn.className = 'flex-1 py-2 rounded-lg bg-amber-500 text-black font-extrabold transition shadow';
      allBtn.style.setProperty('background-color', '#f59e0b', 'important');
      allBtn.style.setProperty('color', '#020617', 'important');
      allBtn.style.setProperty('font-weight', '800', 'important');
    }
    if (quickBtn) {
      quickBtn.className = 'flex-1 py-2 rounded-lg text-slate-400 hover:text-white transition';
      quickBtn.style.setProperty('background-color', 'transparent', 'important');
      quickBtn.style.setProperty('color', '#94a3b8', 'important');
      quickBtn.style.setProperty('font-weight', '700', 'important');
    }

    if (quickContainer) {
      quickContainer.classList.add('hidden');
      quickContainer.style.setProperty('display', 'none', 'important');
    }
    if (allContainer) {
      allContainer.classList.remove('hidden');
      allContainer.style.setProperty('display', 'block', 'important');
    }
  }
}

export function filterRulesTopic(topic) {
  try {
    topic = (topic || 'all').toLowerCase().trim();

    const chips = document.querySelectorAll('.rule-filter-chip, [data-topic-filter]');
    chips.forEach(chip => {
      const chipTopic = (chip.getAttribute('data-topic-filter') || '').toLowerCase().trim();
      const isTarget = chipTopic === topic;
      if (isTarget) {
        chip.className = 'rule-filter-chip shrink-0 px-2.5 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950 shadow transition cursor-pointer';
        chip.style.setProperty('background-color', '#f59e0b', 'important');
        chip.style.setProperty('color', '#020617', 'important');
        chip.style.setProperty('border-color', '#f59e0b', 'important');
        chip.style.setProperty('font-weight', '900', 'important');
        chip.style.setProperty('box-shadow', '0 1px 3px 0 rgba(0, 0, 0, 0.4)', 'important');
      } else {
        chip.className = 'rule-filter-chip shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 transition cursor-pointer';
        chip.style.setProperty('background-color', '#0f172a', 'important');
        chip.style.setProperty('color', '#94a3b8', 'important');
        chip.style.setProperty('border-color', '#1e293b', 'important');
        chip.style.setProperty('font-weight', '700', 'important');
        chip.style.setProperty('box-shadow', 'none', 'important');
      }
    });

    const cards = document.querySelectorAll('#quickRulesContainer [data-topic]');
    cards.forEach(card => {
      const cardTopic = (card.getAttribute('data-topic') || '').toLowerCase().trim();
      if (topic === 'all' || cardTopic === topic) {
        card.classList.remove('hidden');
        card.style.setProperty('display', 'block', 'important');
      } else {
        card.classList.add('hidden');
        card.style.setProperty('display', 'none', 'important');
        if (card.tagName.toLowerCase() === 'details') {
          card.open = false;
        }
      }
    });
  } catch (err) {
    console.error('filterRulesTopic error:', err);
  }
}

export function scrollToRuleSection(sectionId) {
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

// Expose synchronously to window as well
if (typeof window !== 'undefined') {
  window.filterRulesTopic = filterRulesTopic;
  window.switchRulesTab = switchRulesTab;
  window.switchRuleTab = switchRulesTab;
  window.scrollToRuleSection = scrollToRuleSection;
}
