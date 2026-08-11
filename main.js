// RECONPRO — Main JavaScript Engine

document.addEventListener('DOMContentLoaded', () => {
  console.log('ReconPro Web Application Initialized.');
  initNavScroll();
});

// Form Submission Handler for Hero Lead Magnet
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('leadName').value;
  const phone = document.getElementById('leadPhone').value;
  const city = document.getElementById('leadCity').value;
  const size = document.getElementById('leadSize').value;

  if (!name || !phone || !size) {
    alert('Please complete all required fields.');
    return;
  }

  // Calculate rough estimate for instant feedback
  const estFar = Math.round(size * 9 * 2.5); // Approx sq ft
  const estCostLacs = Math.round((estFar * 2200) / 100000);

  const message = `Hello ${name}! Based on your plot size of ${size} sq. yds in ${city}:
- Permissible Built-up Area: ~${estFar.toLocaleString()} sq. ft.
- Estimated Budget Range: ₹${estCostLacs - 5} - ₹${estCostLacs + 10} Lacs.

A detailed advisory breakdown is being sent to your WhatsApp number (${phone}).`;

  alert(message);

  // Redirect to WhatsApp chat with pre-filled message
  const waMsg = encodeURIComponent(`Hi RECONPRO Team, I am ${name}. I have a plot of ${size} sq. yds in ${city} and would like to receive my construction advisory cost & FAR summary.`);
  window.open(`https://wa.me/919971007906?text=${waMsg}`, '_blank');
}

// ReBOS Tab Switcher Function
function switchRebosTab(role) {
  const buttons = document.querySelectorAll('.rebos-tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  event.target.classList.add('active');

  const titleEl = document.getElementById('rebosRoleTitle');
  const descEl = document.getElementById('rebosRoleDesc');

  const contentMap = {
    client: {
      title: "Client Dashboard — Watch Your Home Get Built",
      desc: "Track overall progress, stage-wise photo evidence, verified payment milestones, and procurement triggers from your mobile or desktop 24x7."
    },
    supervisor: {
      title: "Site Supervisor App — Record Work As It Happens",
      desc: "Tick mandatory 3-stage QA checklists, log delay days with cause, and upload site photos directly from the slab on site."
    },
    builder: {
      title: "Builder Portal — Run Sites Without Paperwork",
      desc: "See live activity status across assigned projects, schedule payment milestones against real progress, and manage site supervisors."
    },
    admin: {
      title: "Admin Control — Complete Project Setup & Sign-Off",
      desc: "Create client/builder profiles, configure procurement triggers, open submitted work checklists, and approve or decline with feedback."
    }
  };

  if (contentMap[role]) {
    titleEl.textContent = contentMap[role].title;
    descEl.textContent = contentMap[role].desc;
  }
}

// Calculator Modal Trigger Placeholder
function openCalcModal() {
  const size = prompt("Enter your plot size in sq. yards:", "250");
  if (size) {
    const cost = Math.round((size * 9 * 2.5 * 2200) / 100000);
    alert(`Estimated Construction Cost for ${size} sq. yds plot is ~₹${cost} Lacs across Deluxe Specifications. Contact RECONPRO for exact FAR breakdown!`);
  }
}

// Navigation Active Underline Tracker
function initNavScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// Expose handlers globally
window.handleFormSubmit = handleFormSubmit;
window.switchRebosTab = switchRebosTab;
window.openCalcModal = openCalcModal;
