/* RECONPRO - Institutional Advisory & Interactive Tooling */

// ========== GLOBAL MODAL CONTROLS ==========
window.closeAllModals = function() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
};

// Close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeAllModals();
    }
  });
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeAllModals();
  }
});

// ========== HEADER SCROLL SHADOW ==========
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ========== HERO CAROUSEL AUTO-SCROLL ==========
(function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  let currentSlide = 0;
  let carouselInterval;
  const SLIDE_DURATION = 5000;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function startAutoPlay() {
    carouselInterval = setInterval(nextSlide, SLIDE_DURATION);
  }

  function resetAutoPlay() {
    clearInterval(carouselInterval);
    startAutoPlay();
  }

  // Dot click handlers
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.dataset.slide, 10);
      goToSlide(slideIndex);
      resetAutoPlay();
    });
  });

  // Pause on hover
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    heroSection.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
})();

// ========== SMOOTH ANCHOR SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId && targetId !== '#') {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
        const y = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

// ========== MOBILE NAVIGATION DRAWER ==========
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');

window.toggleMobileMenu = function(open) {
  if (!mobileDrawer || !drawerOverlay) return;
  if (open) {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// ========== LEAD FORM SUBMISSION WITH PREVIEW ==========
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: document.getElementById('leadName')?.value || '',
    phone: document.getElementById('leadPhone')?.value || '',
    city: document.getElementById('leadCity')?.value || '',
    plotSize: document.getElementById('leadSize')?.value || '250',
    budget: document.getElementById('leadBudget')?.value || '',
  };

  const sqYds = parseFloat(data.plotSize) || 250;
  const estimatedSqFt = Math.round(sqYds * 9 * 2.64);
  const estCostLakhs = Math.round((estimatedSqFt * 2800) / 100000);

  // WhatsApp submission
  const message = `Hi ReconPro Team,%0A%0AI would like an Independent Advisory Summary for my home construction project:%0A%0A• Name: ${encodeURIComponent(data.name)}%0A• Mobile: ${encodeURIComponent(data.phone)}%0A• City: ${encodeURIComponent(data.city)}%0A• Plot Area: ${sqYds} sq. yds%0A• Estimated Built-up Area: ~${estimatedSqFt.toLocaleString('en-IN')} sq. ft.%0A• Benchmark Outlay: ~₹${estCostLakhs} Lakhs%0A• Budget Band: ${encodeURIComponent(data.budget || 'Not specified')}%0A%0APlease share your techno-commercial audit approach.`;
  
  window.open(`https://wa.me/919971007906?text=${message}`, '_blank');

  // Visual confirmation
  const btn = form.querySelector('.btn-form-submit');
  const originalText = btn.textContent;
  btn.textContent = '✓ Summary Sent! Opening Advisory Channel...';
  btn.disabled = true;
  btn.style.opacity = '0.85';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    btn.style.opacity = '';
  }, 4000);
};

// ========== EXIT-INTENT ENGAGEMENT MODAL ==========
const engagementModal = document.getElementById('engagementModal');
const modalCloseBtn = document.getElementById('modalClose');
let modalShown = false;

function showEngagementModal() {
  if (modalShown || !engagementModal) return;
  modalShown = true;
  engagementModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEngagementModal() {
  if (!engagementModal) return;
  engagementModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeEngagementModal);
}

window.handleModalSubmit = function(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById('modalName')?.value || '',
    phone: document.getElementById('modalPhone')?.value || '',
    city: document.getElementById('modalCity')?.value || '',
  };

  const message = `Hi ReconPro,%0A%0AI would like to book a Free Techno-Commercial Advisory Consultation:%0A• Name: ${encodeURIComponent(data.name)}%0A• Phone: ${encodeURIComponent(data.phone)}%0A• City: ${encodeURIComponent(data.city)}`;
  window.open(`https://wa.me/919971007906?text=${message}`, '_blank');
  closeEngagementModal();
};

// Exit-Intent: Mouse leaves viewport (desktop only)
if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget && e.clientY <= 0) {
      showEngagementModal();
    }
  });
}

// Dwell time trigger (45s)
setTimeout(() => {
  if (!modalShown) showEngagementModal();
}, 45000);

// ========== FAQ ACCORDION ==========
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

// ========== REBOS PERSONA ROLE SWITCHER ==========
const rebosData = {
  client: {
    title: 'ReBOS Client Live Dashboard',
    badge: 'Client Stream',
    progressVal: '72% Completed',
    progressWidth: '72%',
    checkVal: '1,780 / 2,000 Verified',
    checkWidth: '89%',
    milestones: [
      { text: '✓ Foundation & Raft', status: 'done' },
      { text: '✓ Stilt + 4 RCC Frame', status: 'done' },
      { text: '● MEP & Wet Areas', status: 'active' },
      { text: '○ Final Finishes', status: 'pending' }
    ],
    alertTitle: 'Next Payment Gate: ₹8.5 Lakhs (Plastering & Conduiting)',
    alertDesc: 'Capital released strictly after ReconPro technical checklist certification.',
    features: [
      'Live client dashboard for real-time progress, photo logs, and stage payment approvals.',
      'Milestone timeline with automated delay alerts and variance tracking.',
      '3-stage QA checklist engine (Before, During, After sign-offs).',
      'Central encrypted vault for drawings, contracts, and cube test reports.'
    ]
  },
  supervisor: {
    title: 'ReBOS Site Engineer & QA Portal',
    badge: '3-Stage QA Active',
    progressVal: '94% On-Schedule',
    progressWidth: '94%',
    checkVal: '14 Audits Completed Today',
    checkWidth: '100%',
    milestones: [
      { text: '✓ Shuttering Check', status: 'done' },
      { text: '✓ Steel Spacing Bar', status: 'done' },
      { text: '● Concrete Slump Test', status: 'active' },
      { text: '○ Post-Pour Curing', status: 'pending' }
    ],
    alertTitle: 'Mandatory Stage Gate: 4th Floor Slab Casting Audit',
    alertDesc: 'Geo-tagged photographic evidence of cover blocks & rebar diameter uploaded for audit clearance.',
    features: [
      'Digital 2,000-point inspection checklists right on the mobile app at the construction site.',
      'Geo-tagged and timestamped photographic evidence uploads for every structural milestone.',
      'Automated defect flagging with direct contractor rectify-before-pour notifications.',
      'Material quality log: cube compressive test logs, steel batch test certificates.'
    ]
  },
  builder: {
    title: 'ReBOS Builder & Contractor Portal',
    badge: 'Milestone Submission',
    progressVal: 'Milestone 4 Submitted',
    progressWidth: '80%',
    checkVal: '0 Safety Violations',
    checkWidth: '95%',
    milestones: [
      { text: '✓ Bill 01 Approved', status: 'done' },
      { text: '✓ Bill 02 Approved', status: 'done' },
      { text: '● Bill 03 Under Audit', status: 'active' },
      { text: '○ Handover Billing', status: 'pending' }
    ],
    alertTitle: 'Milestone Fund Holdback Active',
    alertDesc: 'Advisory clearance pending on plumbing pressure testing certificates.',
    features: [
      'Standardized itemized billing portal mapped strictly to the signed BOQ.',
      'Zero dispute stage-gate releases backed by objective third-party audit verification.',
      'Variation request management: locked change-order approvals with transparent pricing.',
      'Structured material procurement tracking ensuring zero unapproved brand substitutions.'
    ]
  },
  admin: {
    title: 'ReconPro Techno-Commercial Advisory Console',
    badge: 'Fiduciary Admin',
    progressVal: '₹18.4L Risk Eliminated',
    progressWidth: '100%',
    checkVal: '100% Impartial Fiduciary',
    checkWidth: '100%',
    milestones: [
      { text: '✓ Quote Audit', status: 'done' },
      { text: '✓ Contract Locked', status: 'done' },
      { text: '● Site QA Oversight', status: 'active' },
      { text: '○ Final Handover Sign-off', status: 'pending' }
    ],
    alertTitle: 'Discrepancy Rectified in Bill #3',
    alertDesc: 'Identified and removed ₹2.8L duplicate masonry scaffolding line items.',
    features: [
      'Comprehensive techno-commercial due diligence and line-by-line contractor BOQ audits.',
      'Independent architectural, structural, and plumbing/electrical compliance oversight.',
      'Fiduciary milestone escrow & payment release recommendations.',
      'IIT/IIM verified project health reports and risk mitigation tracking.'
    ]
  }
};

window.switchRebosRole = function(role) {
  document.querySelectorAll('.role-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-role') === role);
  });

  const data = rebosData[role];
  if (!data) return;

  const titleEl = document.getElementById('mockupRoleTitle');
  const badgeEl = document.getElementById('mockupStatusBadge');
  const featureList = document.getElementById('rebosFeatureList');
  const bodyEl = document.getElementById('mockupBody');

  if (titleEl) titleEl.textContent = data.title;
  if (badgeEl) badgeEl.textContent = data.badge;

  if (featureList) {
    featureList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
  }

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="mockup-row">
        <div class="mockup-stat">
          <div class="mockup-stat-label">Metric 1</div>
          <div class="mockup-progress"><div class="mockup-progress-fill" style="width:${data.progressWidth}"></div></div>
          <div class="mockup-stat-value">${data.progressVal}</div>
        </div>
        <div class="mockup-stat">
          <div class="mockup-stat-label">Metric 2</div>
          <div class="mockup-progress"><div class="mockup-progress-fill mockup-fill-green" style="width:${data.checkWidth}"></div></div>
          <div class="mockup-stat-value">${data.checkVal}</div>
        </div>
      </div>
      <div class="mockup-timeline">
        ${data.milestones.map(m => `<div class="mockup-milestone ${m.status}">${m.text}</div>`).join('')}
      </div>
      <div class="mockup-audit-alert">
        <span class="audit-icon">🛡️</span>
        <div class="audit-text">
          <strong>${data.alertTitle}</strong>
          <p>${data.alertDesc}</p>
        </div>
      </div>
    `;
  }
};

// ========== FAR & COST CALCULATOR ==========
const cityFarMap = {
  gurugram: { far: 2.64, name: 'Gurugram (Haryana HUDA/DTCP)', stiltExempt: true },
  delhi: { far: 3.00, name: 'Delhi (DDA/MCD)', stiltExempt: true },
  bengaluru: { far: 2.25, name: 'Bengaluru (BBMP)', stiltExempt: false },
  mumbai: { far: 2.50, name: 'Mumbai / MMR (MCGM)', stiltExempt: false },
  pune: { far: 2.00, name: 'Pune (PMRDA)', stiltExempt: false },
  hyderabad: { far: 2.50, name: 'Hyderabad (GHMC)', stiltExempt: true },
};

const tierCostMap = {
  economy: { rate: 1850, name: 'Economy' },
  budget: { rate: 2250, name: 'Budget' },
  deluxe: { rate: 2800, name: 'Deluxe' },
  premium: { rate: 3700, name: 'Premium' },
};

window.openCalcModal = function() {
  const modal = document.getElementById('calcModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    window.updateCalculator();
  }
};

window.setCalcPlot = function(size) {
  const slider = document.getElementById('calcPlotSize');
  if (slider) {
    slider.value = size;
    document.querySelectorAll('.quick-pill').forEach(pill => {
      pill.classList.toggle('active', pill.textContent.trim() === String(size));
    });
    window.updateCalculator();
  }
};

window.updateCalculator = function() {
  const plotSize = parseFloat(document.getElementById('calcPlotSize')?.value) || 250;
  const cityKey = document.getElementById('calcCity')?.value || 'gurugram';
  const tierKey = document.getElementById('calcTier')?.value || 'deluxe';

  const valEl = document.getElementById('calcPlotSizeVal');
  if (valEl) valEl.textContent = plotSize;

  const cityInfo = cityFarMap[cityKey] || cityFarMap.gurugram;
  const tierInfo = tierCostMap[tierKey] || tierCostMap.deluxe;

  const plotSqFt = plotSize * 9;
  const baseBuiltUp = Math.round(plotSqFt * cityInfo.far);
  const stiltAddition = cityInfo.stiltExempt ? Math.round(plotSqFt * 0.6) : 0;
  const totalBuiltUp = baseBuiltUp + stiltAddition;

  const costLow = (totalBuiltUp * tierInfo.rate * 0.95) / 10000000;
  const costHigh = (totalBuiltUp * tierInfo.rate * 1.1) / 10000000;

  const riskLowLakhs = Math.round(costLow * 100 * 0.12);
  const riskHighLakhs = Math.round(costHigh * 100 * 0.18);

  const builtUpEl = document.getElementById('calcBuiltUp');
  const farDetailEl = document.getElementById('calcFarDetail');
  const costRangeEl = document.getElementById('calcCostRange');
  const riskEl = document.getElementById('calcRiskSavings');

  if (builtUpEl) builtUpEl.innerHTML = `${totalBuiltUp.toLocaleString('en-IN')} <span class="calc-unit">sq. ft.</span>`;
  if (farDetailEl) farDetailEl.textContent = `Based on ${cityInfo.far} FAR ${cityInfo.stiltExempt ? '+ Stilt Parking Exemption' : ''}`;
  
  if (costRangeEl) {
    if (costLow >= 1.0) {
      costRangeEl.textContent = `₹${costLow.toFixed(2)} Cr - ₹${costHigh.toFixed(2)} Cr`;
    } else {
      costRangeEl.textContent = `₹${Math.round(costLow * 100)} Lakhs - ₹${Math.round(costHigh * 100)} Lakhs`;
    }
  }

  if (riskEl) {
    riskEl.innerHTML = `Without line-item BOQ locks and independent audits, contractor scope creep typically adds <strong>₹${riskLowLakhs}L - ₹${riskHighLakhs}L</strong> in unexpected variation bills.`;
  }
};

window.sendCalculatorToWhatsApp = function() {
  const plotSize = document.getElementById('calcPlotSize')?.value || '250';
  const city = document.getElementById('calcCity')?.value || 'Gurugram';
  const builtUp = document.getElementById('calcBuiltUp')?.textContent || '';
  const cost = document.getElementById('calcCostRange')?.textContent || '';

  const msg = `Hi ReconPro,%0A%0AI used your Construction Calculator for my plot:%0A• Plot Size: ${plotSize} sq. yds%0A• City: ${city}%0A• Permissible Built-up: ${builtUp}%0A• Estimated Outlay: ${cost}%0A%0APlease provide a detailed techno-commercial feasibility breakdown.`;
  window.open(`https://wa.me/919971007906?text=${msg}`, '_blank');
};

// ========== RESTRICTION CHECKER ==========
window.openRestrictionModal = function() {
  const modal = document.getElementById('restrictionModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    window.evaluateRestrictions();
  }
};

window.evaluateRestrictions = function() {
  const proximity = document.getElementById('restProximity')?.value || 'none';
  const overlay = document.getElementById('restOverlay')?.value || 'none';

  const badgeEl = document.getElementById('restBadge');
  const descEl = document.getElementById('restDescription');
  const listEl = document.getElementById('restChecklist');

  if (proximity === 'prohibited') {
    badgeEl.className = 'rest-badge rest-badge-danger';
    badgeEl.textContent = '⛔ High Risk: Prohibited Monument Buffer (0–100m)';
    descEl.textContent = 'Under the AMASR Act, new construction is strictly prohibited within 100m of an ASI protected monument. Only repair/renovation with prior NMA permission is allowed.';
    listEl.innerHTML = `
      <li>❌ New structural construction banned under central statutory law</li>
      <li>⚠️ National Monuments Authority (NMA) NOC mandatory for any existing work</li>
      <li>📋 ReconPro recommends an immediate geospatial boundary survey before buying or design.</li>
    `;
  } else if (proximity === 'regulated' || overlay !== 'none') {
    badgeEl.className = 'rest-badge rest-badge-warning';
    badgeEl.textContent = '⚠️ Special Statutory Clearances Required';
    descEl.textContent = 'Your plot is located in a regulated buffer or transit corridor requiring multi-department statutory NOCs before building plan sanction.';
    listEl.innerHTML = `
      <li>${proximity === 'regulated' ? '🏛️ National Monuments Authority (NMA) NOC required (100m–300m zone)' : '✓ Beyond ASI Buffer'}</li>
      <li>${overlay === 'metro' ? '🚇 Metro Rail Corporation (DMRC/HMRTC) Technical Clearance required' : ''}</li>
      <li>${overlay === 'htline' ? '⚡ Electricity Transmission Utility (HVPN/DHBVN) Horizontal Setback NOC' : ''}</li>
      <li>${overlay === 'forest' ? '🌲 Forest Department NOC (Aravalli Notification Clearance)' : ''}</li>
      <li>✓ Structural Stability Certificate (Seismic Zone IV)</li>
    `;
  } else {
    badgeEl.className = 'rest-badge rest-badge-ok';
    badgeEl.textContent = '✓ Clear for Standard Building Plan Sanction';
    descEl.textContent = 'Your plot does not trigger special monument or corridor restrictions. Standard municipal sanction through an architect is applicable.';
    listEl.innerHTML = `
      <li>✓ Standard Architectural Plan Sanction through Municipal Portal</li>
      <li>✓ Structural Stability Certificate (Seismic Zone IV)</li>
      <li>✓ Rainwater Harvesting and Green Building Compliance</li>
    `;
  }
};

// ========== BUILDING BYE-LAWS HUB ==========
const byelawsData = {
  haryana: `
    <table>
      <thead>
        <tr><th>Parameter</th><th>HUDA / DTCP Standard (Plots < 500 sq yds)</th><th>Advisory Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Permissible FAR</strong></td><td>2.64 (Base 1.98 + Purchasable 0.66)</td><td>Max built-up area utilization without violations</td></tr>
        <tr><td><strong>Max Height</strong></td><td>15.0 meters (Stilt + 4 Floors)</td><td>Subject to 9m+ road width and structural sign-off</td></tr>
        <tr><td><strong>Ground Coverage</strong></td><td>Max 66% to 75% depending on plot size</td><td>Preserves mandatory front and rear setbacks</td></tr>
        <tr><td><strong>Stilt Parking</strong></td><td>Mandatory 2.4m clear height for Stilt+4</td><td>Exempted from FAR calculation</td></tr>
        <tr><td><strong>Basement</strong></td><td>Single basement within plot setback lines</td><td>Storage & parking only; cannot be commercial</td></tr>
      </tbody>
    </table>
  `,
  delhi: `
    <table>
      <thead>
        <tr><th>Parameter</th><th>Delhi DDA / MCD Norms (MPD 2021/2041)</th><th>Advisory Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Permissible FAR</strong></td><td>3.00 (Max 350 for smaller plots)</td><td>Allows optimal vertical residential utilization</td></tr>
        <tr><td><strong>Max Height</strong></td><td>15.0 meters (17.5m with Stilt parking)</td><td>Fire NOC required if height exceeds 15m</td></tr>
        <tr><td><strong>Ground Coverage</strong></td><td>75% (Plots up to 250 sq m)</td><td>Mandatory green setback and light shafts</td></tr>
        <tr><td><strong>Stilt Parking</strong></td><td>Mandatory for all 4-floor approvals</td><td>Clear height of 2.4m minimum</td></tr>
      </tbody>
    </table>
  `,
  karnataka: `
    <table>
      <thead>
        <tr><th>Parameter</th><th>Bengaluru BBMP / BDA Bye-Laws</th><th>Advisory Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Permissible FAR</strong></td><td>1.75 to 2.25 based on road width</td><td>Road width < 30ft limits vertical floors</td></tr>
        <tr><td><strong>Max Height</strong></td><td>11.5m to 15.0m (Ground + 3/4)</td><td>Strict setback offsets on all 4 sides</td></tr>
        <tr><td><strong>Setback Rules</strong></td><td>Front 2m, Rear 1.5m, Sides 1.0m min</td><td>Critical for light and cross-ventilation audit</td></tr>
        <tr><td><strong>Rainwater Harvesting</strong></td><td>Mandatory for all plots > 1,200 sq ft</td><td>Mandatory BWSSB compliance certification</td></tr>
      </tbody>
    </table>
  `,
  maharashtra: `
    <table>
      <thead>
        <tr><th>Parameter</th><th>Maharashtra DCPR (MCGM / PMRDA)</th><th>Advisory Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Permissible FSI</strong></td><td>1.50 to 2.50 (Base FSI + Premium / TDR)</td><td>TDR purchase dynamics require cost audit</td></tr>
        <tr><td><strong>Height Norms</strong></td><td>Governed by road width and setback margins</td><td>Civil Aviation NOC if near flight paths</td></tr>
        <tr><td><strong>Balcony & Fungible</strong></td><td>Fungible FSI up to 35% residential</td><td>Requires exact municipal calculation check</td></tr>
      </tbody>
    </table>
  `
};

window.openByelawsModal = function() {
  const modal = document.getElementById('byelawsModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    window.switchByelawsTab('haryana');
  }
};

window.switchByelawsTab = function(city) {
  document.querySelectorAll('.byelaws-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(city));
  });
  const contentEl = document.getElementById('byelawsContent');
  if (contentEl) {
    contentEl.innerHTML = byelawsData[city] || byelawsData.haryana;
  }
};

// ========== PACKAGE SPECIFICATIONS MODAL ==========
const specsData = {
  Economy: {
    title: 'Economy Specification Audit Criteria',
    subtitle: 'Baseline quality standard for budget-conscious construction (~₹1,850/sq.ft.)',
    table: `
      <table>
        <thead><tr><th>Component</th><th>Audited Specification</th><th>ReconPro Quality Checkpoint</th></tr></thead>
        <tbody>
          <tr><td><strong>Structural Steel</strong></td><td>Fe 500 Primary/Secondary ISI (Kamdhenu/Rathi)</td><td>Tensile & elongation batch test certificate check</td></tr>
          <tr><td><strong>Cement & RCC</strong></td><td>PPC 43 Grade (Ultratech/Ambuja/JK), M20 Concrete</td><td>Cube compressive strength test at 7, 14, 28 days</td></tr>
          <tr><td><strong>Masonry & Plaster</strong></td><td>Standard Red Clay Brick (Class 1) or AAC Blocks, 1:6 Mortar</td><td>Plumb line alignment and verticality checks</td></tr>
          <tr><td><strong>Flooring</strong></td><td>Standard Vitrified Tiles (₹45–₹60/sq.ft.), Granite Stairs</td><td>Hollow sounding tile check with rubber mallet</td></tr>
          <tr><td><strong>Plumbing & Sanitary</strong></td><td>CPVC/UPVC Astral/Supreme, Cera/Hindware Fittings</td><td>Hydrostatic pressure test before plastering</td></tr>
          <tr><td><strong>Electrical</strong></td><td>Anchor/Havells concealed wiring & modular switches</td><td>Conduit routing & earthing resistance test</td></tr>
          <tr><td><strong>Waterproofing</strong></td><td>Integral waterproofing compound in RCC slabs</td><td>48-hour ponding test on terrace & wet areas</td></tr>
        </tbody>
      </table>
    `
  },
  Budget: {
    title: 'Budget Specification Audit Criteria',
    subtitle: 'Standard institutional homeowner package (~₹2,250/sq.ft.)',
    table: `
      <table>
        <thead><tr><th>Component</th><th>Audited Specification</th><th>ReconPro Quality Checkpoint</th></tr></thead>
        <tbody>
          <tr><td><strong>Structural Steel</strong></td><td>Fe 500D Primary TMT (Tata Tiscon / Jindal Panther / SAIL)</td><td>Mandatory brand tag verification on all rebar bundles</td></tr>
          <tr><td><strong>Cement & RCC</strong></td><td>OPC 53 for RCC, PPC for Plaster, RMC M25 Grade</td><td>Slump cone test on every transit mixer delivery</td></tr>
          <tr><td><strong>Doors & Windows</strong></td><td>UPVC 2-Track Windows with 5mm toughened glass</td><td>Corner joint welding & EPDM gasket air-tightness</td></tr>
          <tr><td><strong>Flooring</strong></td><td>600x1200mm Glazed Vitrified Tiles (Kajaria / Somany)</td><td>Zero lippage audit with digital level indicators</td></tr>
          <tr><td><strong>Plumbing & Sanitary</strong></td><td>Jaquar / Kohler CP fittings, Wall-hung WCs</td><td>Concealed diverter testing & slope verification</td></tr>
          <tr><td><strong>Electrical</strong></td><td>Polycab/Finolex FRLS wires, Schneider switches</td><td>Independent circuit allocation for high-load ACs</td></tr>
          <tr><td><strong>Waterproofing</strong></td><td>2-Layer elastomeric polymer coating in wet areas</td><td>Zero dampness sign-off before tiling</td></tr>
        </tbody>
      </table>
    `
  },
  Deluxe: {
    title: 'Deluxe Specification Audit Criteria (Recommended Benchmark)',
    subtitle: 'High-durability residential standard for modern custom residences (~₹2,800/sq.ft.)',
    table: `
      <table>
        <thead><tr><th>Component</th><th>Audited Specification</th><th>ReconPro Quality Checkpoint</th></tr></thead>
        <tbody>
          <tr><td><strong>Structural Steel</strong></td><td>Fe 550D High-Ductility TMT (Tata Tiscon / JSW Neosteel)</td><td>Seismic Zone IV lap length & stirrup hook angle audit</td></tr>
          <tr><td><strong>Concrete</strong></td><td>Design Mix RMC M25/M30 with silica fume additives</td><td>Core cut testing and temperature-controlled curing</td></tr>
          <tr><td><strong>Flooring & Cladding</strong></td><td>Indian White Marble / 800x1600mm GVT, Granite facade</td><td>Epoxy grouting & anti-stain sealant application</td></tr>
          <tr><td><strong>Plumbing & Sanitary</strong></td><td>Grohe / Kohler / Toto wall-hung fixtures, Astral Silencio</td><td>Acoustic drain pipe dampening & dual-line plumbing</td></tr>
          <tr><td><strong>Electrical & AC</strong></td><td>Schneider AvatarOn / Legrand Arteor, VRV copper piping</td><td>Megger insulation test & surge protection units</td></tr>
          <tr><td><strong>Windows & Facade</strong></td><td>Fenesta / Kommerling UPVC / Slimline Aluminium, DGU glass</td><td>Soundproof acoustic decibel testing</td></tr>
          <tr><td><strong>Waterproofing</strong></td><td>3-Layer crystalline membrane + APP bitumen on terrace</td><td>10-Year non-tear warranty contractor binding check</td></tr>
        </tbody>
      </table>
    `
  },
  Premium: {
    title: 'Premium / Luxury Specification Audit Criteria',
    subtitle: 'Ultra-luxury bespoke villa and designer bungalow specification (~₹3,700+/sq.ft.)',
    table: `
      <table>
        <thead><tr><th>Component</th><th>Audited Specification</th><th>ReconPro Quality Checkpoint</th></tr></thead>
        <tbody>
          <tr><td><strong>Structural Framing</strong></td><td>High-Strength Fe 550D, Waterproof Concrete Basement Raft</td><td>Complete geo-technical pile load test verification</td></tr>
          <tr><td><strong>Flooring & Stone</strong></td><td>Imported Italian Statuario / Botticino marble (300+ ₹/sq.ft.)</td><td>Laser-leveled dry-lay inspection before fixing</td></tr>
          <tr><td><strong>HVAC & Automation</strong></td><td>Daikin/Mitsubishi VRV IV, KNX Smart Home Automation</td><td>Duct pressure test & centralized automation commissioning</td></tr>
          <tr><td><strong>Sanitary & Wellness</strong></td><td>Hansgrohe Axor / Villeroy & Boch, concealed thermostatic valves</td><td>Flow rate balancing & pressure booster pump test</td></tr>
          <tr><td><strong>Windows & Glazing</strong></td><td>Reynaers / Schüco Thermal-Break Double Glazed Low-E Glass</td><td>Thermal efficiency and hurricane-grade wind load tests</td></tr>
          <tr><td><strong>Waterproofing</strong></td><td>Polyurea spray / EPDM continuous membrane waterproofing</td><td>Electronic leak detection test across all structural roofs</td></tr>
        </tbody>
      </table>
    `
  }
};

window.openSpecsModal = function(tier) {
  const modal = document.getElementById('specsModal');
  if (!modal) return;

  const data = specsData[tier] || specsData.Deluxe;
  const titleEl = document.getElementById('specsModalTitle');
  const subtitleEl = document.getElementById('specsModalSubtitle');
  const containerEl = document.getElementById('specsTableContainer');

  if (titleEl) titleEl.textContent = data.title;
  if (subtitleEl) subtitleEl.textContent = data.subtitle;
  if (containerEl) containerEl.innerHTML = data.table;

  document.querySelectorAll('.spec-pill').forEach(pill => {
    pill.classList.toggle('active', pill.id === `pill-${tier}`);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// ========== INTERSECTION OBSERVER ANIMATIONS ==========
const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  const targets = document.querySelectorAll(
    '.metric-card, .comparison-card, .how-we-help-content, .service-card, .process-step, .tool-card, .services-glance-content, .portfolio-card, .leader-card, .testimonial-card, .faq-item'
  );
  targets.forEach(t => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(20px)';
    t.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(t);
  });
};

const style = document.createElement('style');
style.textContent = `.animate-in { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
  animateOnScroll();
}
