'use strict';
/* ══════════════════════════════════════════════════════
   WEM Interactive Sales Deck — Controller v3
   ══════════════════════════════════════════════════════ */

/* ── ATTRACTION DATA ── */
const ATTRACTIONS = {
  waterpark: {
    title: 'World Waterpark',
    sub:   "North America's largest indoor waterpark. 5 acres, 17 water slides, a wave pool and beach area — delivering 2M+ annual visits and 400K event-day brand reach.",
    src:   'assets/waterpark.png',
    stats: [
      { val:'5 Acres', lbl:'Indoor Space' },
      { val:'2M+',     lbl:'Annual Visits' },
      { val:'17',      lbl:'Water Slides' },
      { val:'400K',    lbl:'Event-Day Reach' },
    ],
    opps: ['Naming Rights','Branded Slides','Splash Zone Sponsor','Exclusive Buyout','In-Park Digital OOH'],
  },
  galaxyland: {
    title: 'Galaxyland',
    sub:   "North America's largest indoor amusement park. 27+ rides including a triple-loop roller coaster. 1.5M+ annual riders with massive youth and family brand reach.",
    src:   'assets/amusement.png',
    stats: [
      { val:'27+',    lbl:'Rides & Attractions' },
      { val:'1.5M+',  lbl:'Annual Riders' },
      { val:'2.5 Ac', lbl:'Indoor Footprint' },
      { val:'All Yr', lbl:'Year-Round' },
    ],
    opps: ['Ride Naming Rights','Entrance Arch Branding','Gaming Zone Activation','Youth Loyalty Program','Event Day Co-Sponsor'],
  },
  icerink: {
    title: 'Ice Palace',
    sub:   'Full NHL-regulation ice rink used by the Edmonton Oilers for practice sessions. 2,500 event capacity, 52-week availability, and full naming rights available.',
    src:   'assets/ice_rink.png',
    stats: [
      { val:'NHL',    lbl:'Regulation Standard' },
      { val:'2,500',  lbl:'Event Capacity' },
      { val:'52 wks', lbl:'Year-Round' },
      { val:'200+',   lbl:'Annual Events' },
    ],
    opps: ['Full Naming Rights','Dasherboard Advertising','On-Ice Logo Placement','Corporate Skate Events','Scoreboard Digital'],
  },
  marinelife: {
    title: 'Marine Life',
    sub:   'Immersive aquatic experience featuring sharks, rays, and tropical fish — with behind-the-scenes bio-lab tours. A unique environment for premium brand activations.',
    src:   'assets/waterpark.png',
    stats: [
      { val:'100+',     lbl:'Aquatic Species' },
      { val:'38K+',     lbl:'Daily Footfall' },
      { val:'2 hrs',    lbl:'Avg. Dwell Time' },
      { val:'Yr-Round', lbl:'Open Daily' },
    ],
    opps: ['Presenting Sponsor','Tank Naming Rights','Exclusive After-Hours','Educational Partnership','VIP Experience Brand'],
  },
};

/* ── STATE ── */
let currentScene   = 0;
const TOTAL_SCENES = 8;
let isTransitioning = false;
let scrollLocked    = false;
let activeZonePanel = null;
let activeLightbox  = null;
let currentAttr     = 'waterpark';

/* ══════════════════════════════════════════════════════
   BOOTSTRAP
   ══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initSceneNav();
  initScrollNav();
  initKeyNav();
  initLeaseTabs();
  initAttractionNav();
  initModals();
  initZonePanels();
  initLightbox();
  initCarousel();
  initForms();
  activateScene(0, false);
  updateAttractionContent('waterpark');
});

/* ══════════════════════════════════════════════════════
   SCENE ENGINE
   ══════════════════════════════════════════════════════ */
function activateScene(idx, animate = true) {
  if (idx < 0 || idx >= TOTAL_SCENES) return;
  if (isTransitioning && animate) return;

  if (animate) {
    isTransitioning = true;
    setTimeout(() => { isTransitioning = false; }, 760);
  }

  // Close any open zone panel on scene change
  if (activeZonePanel) closeZonePanel();

  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.rail-item').forEach(r => {
    r.classList.remove('active');
    r.setAttribute('aria-selected', 'false');
  });

  const targetScene = document.getElementById(`scene-${idx}`);
  const targetRail  = document.querySelector(`.rail-item[data-go="${idx}"]`);
  if (targetScene) targetScene.classList.add('active');
  if (targetRail)  { targetRail.classList.add('active'); targetRail.setAttribute('aria-selected', 'true'); }

  currentScene = idx;
  updateCounter(idx);
  updateArrows(idx);
  onSceneEntered(idx);
}

function onSceneEntered(idx) {
  if (idx === 2) updateAttractionContent(currentAttr);
}

function nextScene() { if (currentScene < TOTAL_SCENES - 1) activateScene(currentScene + 1); }
function prevScene() { if (currentScene > 0) activateScene(currentScene - 1); }

function updateCounter(idx) {
  const el = document.getElementById('sc-current');
  if (el) el.textContent = String(idx + 1).padStart(2, '0');
}
function updateArrows(idx) {
  const prev = document.getElementById('scene-prev');
  const next = document.getElementById('scene-next');
  if (prev) prev.disabled = (idx === 0);
  if (next) next.disabled = (idx === TOTAL_SCENES - 1);
}

/* ══════════════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════════════ */
function initSceneNav() {
  document.addEventListener('click', e => {
    const goBtn = e.target.closest('[data-go]');
    if (goBtn && !e.target.closest('[data-modal]')) {
      activateScene(parseInt(goBtn.dataset.go));
    }
  });
  document.getElementById('scene-prev')?.addEventListener('click', prevScene);
  document.getElementById('scene-next')?.addEventListener('click', nextScene);
  const beginBtn = document.getElementById('s0-begin');
  if (beginBtn) beginBtn.addEventListener('click', e => { e.stopPropagation(); activateScene(1); });
}

function initScrollNav() {
  document.addEventListener('wheel', e => {
    if (scrollLocked || activeModal || activeZonePanel) return;
    scrollLocked = true;
    if (e.deltaY > 0) nextScene(); else prevScene();
    setTimeout(() => { scrollLocked = false; }, 950);
  }, { passive: true });

  let touchY = 0;
  document.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; }, { passive: true });
  document.addEventListener('touchend', e => {
    if (activeModal || activeZonePanel) return;
    const delta = touchY - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 55) { if (delta > 0) nextScene(); else prevScene(); }
  }, { passive: true });
}

function initKeyNav() {
  document.addEventListener('keydown', e => {
    if (activeZonePanel) {
      if (e.key === 'Escape') closeZonePanel();
      return;
    }
    if (activeModal) {
      if (e.key === 'Escape') closeModal();
      return;
    }
    switch (e.key) {
      case 'ArrowDown': case 'ArrowRight': case ' ':
        e.preventDefault(); nextScene(); break;
      case 'ArrowUp': case 'ArrowLeft':
        e.preventDefault(); prevScene(); break;
      case 'Home': e.preventDefault(); activateScene(0); break;
      case 'End':  e.preventDefault(); activateScene(TOTAL_SCENES - 1); break;
    }
  });
}

/* ══════════════════════════════════════════════════════
   LEASING TABS (Scene 5)
   ══════════════════════════════════════════════════════ */
function initLeaseTabs() {
  const tabs   = document.querySelectorAll('.s5-tab');
  const panels = document.querySelectorAll('.s5-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(`lp-${tab.dataset.leaseTab}`);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ══════════════════════════════════════════════════════
   ATTRACTION NAV (Scene 2)
   ══════════════════════════════════════════════════════ */
function initAttractionNav() {
  document.querySelectorAll('.s2-attr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.s2-attr-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentAttr = btn.dataset.attr;
      updateAttractionContent(currentAttr);
    });
  });
}

function updateAttractionContent(key) {
  const d = ATTRACTIONS[key];
  if (!d) return;

  const bgImg = document.getElementById('s2-bg');
  if (bgImg) {
    bgImg.style.opacity = '0';
    bgImg.style.transition = 'opacity 0.35s ease';
    setTimeout(() => {
      bgImg.src = d.src;
      bgImg.style.opacity = '1';
    }, 350);
  }

  setInner('s2-attr-name', d.title);
  setInner('s2-attr-sub', d.sub);

  const statsEl = document.getElementById('s2-attr-stats');
  if (statsEl) {
    statsEl.innerHTML = d.stats
      .map(s => `<div class="s2-stat"><strong>${s.val}</strong><span>${s.lbl}</span></div>`)
      .join('');
  }

  const oppsEl = document.getElementById('s2-opp-chips');
  if (oppsEl) {
    oppsEl.innerHTML = d.opps.map(o => `<span class="s2-opp-chip">${o}</span>`).join('');
  }

  const exploreBtn = document.getElementById('s2-explore-btn');
  if (exploreBtn) exploreBtn.setAttribute('data-attraction', key);
}

/* ══════════════════════════════════════════════════════
   ZONE PANEL SYSTEM
   ══════════════════════════════════════════════════════ */
function initZonePanels() {
  const backdrop = document.getElementById('zp-backdrop');

  // Open: click on img-panel
  document.addEventListener('click', e => {
    // If clicking the lightbox trigger specifically
    const lbBtn = e.target.closest('[data-lightbox]');
    if (lbBtn && !e.target.closest('.img-hover-pill') && !e.target.closest('.zp-actions')) {
      openLightbox(lbBtn.dataset.lightbox, lbBtn.dataset.lbTitle, lbBtn.dataset.lbDesc);
      return;
    }

    const imgPanel = e.target.closest('.img-panel');
    const exploreAction = e.target.closest('.img-hover-pill');
    
    // If clicking "Explore Zone" pill -> Open Panel
    if (exploreAction && imgPanel) {
      const zone = imgPanel.dataset.zone;
      if (zone) openZonePanel(zone);
      return;
    }

    // Venue cards (Scene 4)
    const venueCard = e.target.closest('.s4-venue-card');
    if (venueCard && !e.target.closest('[data-modal]')) {
      const zone = venueCard.dataset.zone;
      if (zone) openZonePanel(zone);
      return;
    }
  });

  // Keyboard: Enter/Space on img-panel or venue card
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const imgPanel = e.target.closest('.img-panel');
      if (imgPanel) {
        e.preventDefault();
        openZonePanel(imgPanel.dataset.zone);
        return;
      }
      const venueCard = e.target.closest('.s4-venue-card');
      if (venueCard) {
        e.preventDefault();
        openZonePanel(venueCard.dataset.zone);
      }
    }
  });

  // Close: backdrop
  backdrop?.addEventListener('click', closeZonePanel);

  // Close: zone panel close buttons
  document.addEventListener('click', e => {
    if (e.target.closest('[data-close-zone]')) closeZonePanel();
  });
}

function openZonePanel(zone) {
  if (!zone) return;
  const panel    = document.getElementById(`zp-${zone}`);
  const backdrop = document.getElementById('zp-backdrop');
  if (!panel) return;

  if (activeZonePanel) {
    activeZonePanel.classList.remove('open');
    activeZonePanel = null;
  }

  panel.classList.add('open');
  backdrop?.classList.add('active');
  activeZonePanel = panel;

  // Focus close button
  setTimeout(() => {
    panel.querySelector('.zp-close')?.focus();
  }, 80);
}

function closeZonePanel() {
  const backdrop = document.getElementById('zp-backdrop');
  if (activeZonePanel) {
    activeZonePanel.classList.remove('open');
    activeZonePanel = null;
  }
  backdrop?.classList.remove('active');
}

/* ══════════════════════════════════════════════════════
   MODAL SYSTEM
   ══════════════════════════════════════════════════════ */
function initModals() {
  const backdrop = document.getElementById('modal-backdrop');

  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-modal]');
    if (!trigger) return;
    const id = trigger.dataset.modal;

    if (id === 'modal-schedule') {
      const desc = document.getElementById('modal-schedule-unit-desc');
      if (desc) {
        if (trigger.dataset.unit) {
          desc.textContent = `Regarding: ${trigger.dataset.unit}`;
          desc.hidden = false;
        } else {
          desc.hidden = true;
        }
      }
    }
    if (id === 'modal-sponsor') {
      const tierEl = document.getElementById('sponsor-tier-name');
      if (tierEl) tierEl.textContent = trigger.dataset.tier || '—';
    }
    if (id === 'modal-view-details') {
      const dvName = document.getElementById('dv-name');
      if (dvName) dvName.textContent = trigger.dataset.unit || 'Selected Unit';
    }
    if (id === 'modal-attraction') {
      buildAttractionModal(trigger.dataset.attraction || currentAttr);
    }

    openModal(id);
  });

  document.addEventListener('click', e => {
    if (e.target.closest('[data-close-modal]')) closeModal();
  });

  backdrop?.addEventListener('click', closeModal);

  document.querySelectorAll('.modal-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(form)) return;
      const btn = form.querySelector('[type="submit"]');
      const origText = btn?.textContent;
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      setTimeout(() => {
        closeModal();
        setTimeout(() => openModal('modal-success'), 200);
        if (btn) { btn.textContent = origText; btn.disabled = false; }
        form.reset();
        form.querySelectorAll('input,select,textarea').forEach(i => { i.style.borderColor = ''; });
      }, 1300);
    });
  });
}

function openModal(id) {
  if (!id) return;
  const modal    = document.getElementById(id);
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal) return;
  if (activeModal) closeModal(false);

  modal.hidden = false;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modal.classList.add('open');
      backdrop?.classList.add('active');
      activeModal = modal;
      const first = modal.querySelector('input,select,textarea,button:not(.modal-close)');
      if (first) setTimeout(() => first.focus(), 50);
    });
  });
}

function closeModal(animated = true) {
  if (!activeModal) return;
  const modal    = activeModal;
  const backdrop = document.getElementById('modal-backdrop');
  modal.classList.remove('open');
  backdrop?.classList.remove('active');
  activeModal = null;
  setTimeout(() => { modal.hidden = true; }, animated ? 260 : 0);
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(input => {
    const val = input.value.trim();
    if (!val) {
      input.style.borderColor = '#c0392b'; valid = false;
    } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      input.style.borderColor = '#c0392b'; valid = false;
    } else {
      input.style.borderColor = '';
    }
  });
  return valid;
}

/* Attraction modal builder */
function buildAttractionModal(key) {
  const d     = ATTRACTIONS[key];
  const body  = document.getElementById('modal-attraction-body');
  const title = document.getElementById('at-title');
  if (!body || !d) return;
  if (title) title.textContent = `${d.title} — Brand Opportunities`;
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:18px">
      <p style="font-size:13.5px;color:rgba(255,255,255,0.62);line-height:1.76">${d.sub}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        ${d.stats.map(s => `
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:8px;padding:16px;text-align:center">
            <div style="font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:300;color:#fff;line-height:1;margin-bottom:6px">${s.val}</div>
            <div style="font-size:10px;color:rgba(255,255,255,0.35);font-weight:500">${s.lbl}</div>
          </div>`).join('')}
      </div>
      <div>
        <div style="font-size:9.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.3);margin-bottom:10px">Sponsorship Opportunities</div>
        <div style="display:flex;gap:7px;flex-wrap:wrap">
          ${d.opps.map(o => `<span style="font-size:10px;font-weight:600;color:#b8923a;background:rgba(184,146,58,0.1);border:1px solid rgba(184,146,58,0.22);padding:4px 11px;border-radius:4px">${o}</span>`).join('')}
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="deck-btn btn-gold" data-modal="modal-book-event">Book Activation</button>
        <button class="deck-btn btn-outline" data-modal="modal-sponsor" data-tier="${d.title} Sponsorship">Request Proposal</button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════
   CONTACT FORM (Scene 7)
   ══════════════════════════════════════════════════════ */
function initForms() {
  const form   = document.getElementById('s7-form');
  const btnTxt = document.getElementById('s7-btn-text');
  const btn    = document.getElementById('s7-submit');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('#s7-name');
    const email   = form.querySelector('#s7-email');
    const company = form.querySelector('#s7-company');
    let valid = true;
    [name, email, company].forEach(input => {
      if (!input?.value.trim()) { if (input) input.style.borderColor = '#c0392b'; valid = false; }
      else if (input) input.style.borderColor = '';
    });
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      email.style.borderColor = '#c0392b'; valid = false;
    }
    if (!valid) { return; }

    if (btnTxt) btnTxt.textContent = 'Sending…';
    if (btn) btn.disabled = true;

    setTimeout(() => {
      openModal('modal-success');
      form.reset();
      form.querySelectorAll('input,select').forEach(i => { i.style.borderColor = ''; });
      if (btnTxt) btnTxt.textContent = 'Submit Enquiry';
      if (btn) btn.disabled = false;
    }, 1400);
  });
}



/* ══════════════════════════════════════════════════════
   UTILITY
   ══════════════════════════════════════════════════════ */
function setInner(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
