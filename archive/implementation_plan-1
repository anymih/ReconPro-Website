# Implementation Plan: ReconPro High-Trust Advisory Landing Page

## 1. Overview

ReconPro is an independent techno-commercial advisory for home construction operating Pan-India. The platform is led by IIT/IIM alumni and senior architectural experts. ReconPro does not act as a general contractor, turnkey builder, or real estate broker. It operates purely as a client-side fiduciary, evaluating builder quotes, specifications, contracts, and site execution before and during construction.

The redesign repositions the site into an institutional advisory format with crisp visual hierarchy, low text density, and image-led trust modules.

---

## 2. Global Design System and Text Density Discipline

### Page Structure and Single-Job Vertical Sequence
The page follows a single-column layout with 12 structured sections. Each section performs one distinct job:

1. **Hero**: Value proposition, primary lead form, and trust proof.
2. **Metrics Strip**: Standalone quantitative credibility proof.
3. **Problem vs. Advisory Shield**: Direct contrast between construction risks and advisory safeguards.
4. **Advisory Service Modes**: Three distinct engagement pathways for plot owners.
5. **ReconPro 4-Step Process**: Sequential framework from approach selection to project handover.
6. **ReBOS Platform Band**: High-contrast technology module explaining client-side software oversight.
7. **Regulatory and Compliance Tools**: Direct access to calculation and statutory restriction tools.
8. **Construction Package Benchmarks**: Comparative specification tiers audited by ReconPro.
9. **Case Studies and Audited Projects**: Verified project summaries with residential imagery.
10. **Client Testimonials**: Authentic feedback with client portraits.
11. **Institutional FAQ**: Interactive accordion resolving key engagement and scope questions.
12. **Institutional Footer**: Navigation, Pan-India notice, tools, and legal disclosures.

### Text Density Rules
- **10-Second Scannability**: Every section must be understood in under 10 seconds.
- **Card-Based UI**: Replace long paragraphs with icon-led cards (icon + bold title + max 1-2 lines of copy).
- **Hard Copy Limits**:
  - Max 1-2 short sentences per card.
  - Max 3-5 bullets per section.
  - Zero walls of unbroken text.

### Visual Palette and Typography
- **Backgrounds**: Canvas white (`#FFFFFF`) and light neutral (`#F8FAFC` / `#F3EAFB` tint). Zero heavy gradients.
- **Brand Accent**: ReconPro purple (`#7C3AED` / `#6D28D9`) used strictly for primary CTAs, active badges, and metric highlights.
- **Dark Band (ReBOS Only)**: Deep slate (`#0F172A` / `#1A1625`) to visually distinguish proprietary software.
- **Typography Scale**:
  - Hero Headline: 40px-48px Bold, Title Case.
  - Section Headings: 28px-32px Medium, Title Case.
  - Body Copy: 16px-18px Regular, sentence case, 1.6 line-height.
  - Metric Numbers: 32px-40px Bold with compact uppercase labels.
- **Conversion Discipline**: Single primary CTA across the page: "Get Advisory Summary".

---

## 3. Image Strategy and Placeholder Specification

Generate neutral, professional placeholder images and wire them into the HTML/CSS:

| Section | Image Type | Slot Description and Dimensions | File Path Placeholder |
| :--- | :--- | :--- | :--- |
| **Hero** | Residential Photo | Modern home exterior + family in daylight (560x420px, 4:3) | `/assets/placeholders/hero_family_home.jpg` |
| **Problem vs. Shield** | Status Indicators | Minimalist Red X and Green Check icons | Inline SVG / CSS |
| **Advisory Services** | Thematic Illustrations | Blueprint audit, contract review, site inspection (3x 320x200px) | `/assets/placeholders/service_prebuild.jpg`, `service_contract.jpg`, `service_audit.jpg` |
| **4-Step Process** | Sequential Icons | Minimalist line icons for steps 01-04 | Inline SVG |
| **ReBOS Platform** | Software UI Mockup | Client dashboard showing live timeline and milestone QA (600x380px) | `/assets/placeholders/rebos_dashboard_ui.png` |
| **Regulatory Tools** | Tool Icons | Calculator, GIS Map, Legal Document icons | Inline SVG |
| **Package Tiers** | Tier Badges | Economy, Budget, Deluxe, Premium tier icons | Inline SVG |
| **Case Studies** | Facade Photos | Modern residential exteriors (3x 380x240px, 16:10) | `/assets/placeholders/case_study_1.jpg`, `case_study_2.jpg`, `case_study_3.jpg` |
| **Testimonials** | Client Portraits | Professional headshots / portraits (3x 80x80px rounded) | `/assets/placeholders/client_avatar_1.jpg`, `client_avatar_2.jpg`, `client_avatar_3.jpg` |
| **Exit-Intent Modal** | Family Milestone | Family in front of completed modern home (400x500px, 4:5) | `/assets/placeholders/modal_family_home.jpg` |

---

## 4. Section-by-Section Directive Specifications

### Section 1: Navigation Bar
- Set layout to sticky white top navigation with a subtle hairline bottom border.
- Place ReconPro logo (`logo.png`) and wordmark on the left.
- Place four anchor links (`Practice`, `Portfolio`, `Insights`, `Expertise`) in the center.
- Place single primary CTA button `Get Advisory Summary` on the right (smooth scrolls to `#heroLeadForm`).
- Add minimalist hamburger icon on mobile to toggle off-canvas drawer.

### Section 2: Hero Section (Above the Fold)
- Set layout to two-column desktop grid.
- **Left Column Directives**:
  - Eyebrow: `INDEPENDENT TECHNO-COMMERCIAL ADVISORY`
  - Headline:
    > "Planning to Build a Home? Protect Your Money, Quality and Timeline even before you appoint a builder."
  - Sub-headline (max 35 words):
    > "ReconPro is an independent techno-commercial advisory led by IIT & IIM alumni. We don't sell property or build homes. We analyse your builder's quotes, contracts and site conditions to deliver transparent cost, quality and risk oversight."
  - Support line:
    > "In a market clouded by misinformation, biased referrals and hidden costs, you need a knowledge partner who sits only on your side of the table."
  - Bullets (3 items):
    - Independent, client-side advisory: zero contractor or broker commissions.
    - Structured guidance on approach, agency selection, agreements and project management.
    - Tech-enabled process, site visits and work audits until handover.
  - Hero Image Slot: Place high-quality family + modern home image (`/assets/placeholders/hero_family_home.jpg`).
- **Right Column Directives (Lead Form Card)**:
  - Card Title: "Get Your Advisory Summary"
  - Card Subtitle: "Instant construction cost, FAR & risk evaluation"
  - Form Fields:
    - Full Name (required)
    - Mobile Number (+91, required)
    - Plot Location / City (dropdown / input for Pan-India cities)
    - Plot Size in sq. yds (required)
    - Estimated Budget (optional)
  - CTA Button: "Get Advisory Summary"
  - Microcopy: "Independent advisory only. No builder sales calls. Your details are kept confidential."

### Section 3: Connected Metrics Strip
- Place directly below hero section on solid white background.
- Set layout to 4-card horizontal grid (2x2 on tablet, 1-col on mobile).
- Section label: "Trusted by plot owners."
- Card specifications (number + max 2-line label):
  1. `₹4.5+ Cr`: Construction decisions guided successfully.
  2. `1,75,000+ sq ft`: Projects evaluated for cost, specifications, contracts and execution.
  3. `2,000+ Checkpoints`: Multi-disciplinary team spanning real estate, architecture, construction and law.
  4. `15+ Years`: Combined experience in techno-commercial due diligence and project audits.

### Section 4: Problem vs. Advisory Shield
- Section Title: "Typical Home Construction Traps vs. The ReconPro Shield"
- Section Subtitle: "Independent advisory protection against common industry pitfalls."
- Set layout to two side-by-side comparative cards.
- Limit copy to max 7-10 words per bullet.
- **Traps Card (Red X)**:
  - Cost Escalations: Low initial quotes followed by unexpected mid-build variation bills.
  - Inconsistent Specs: Substandard steel, cement grades, and unverified plumbing.
  - Biased Contracts: One-sided builder terms with zero delay penalties.
  - Premature Payments: Releasing funds before technical stage verification.
- **Shield Card (Green Check)**:
  - Quote Dissection: Comprehensive BOQ matching and locked specifications.
  - ReBOS 2,000-Point Audit: Mandatory photo-verified inspection before sign-off.
  - Milestone Controls: Funds disbursed only after independent technical clearance.
  - Impartial Oversight: 100% fiduciary advice with zero contractor commission.

### Section 5: Advisory Service Modes
- Section Title: "Advisory Service Modes"
- Section Subtitle: "Structured engagement pathways across your build journey."
- Set layout to 3-card grid with image placeholder thumbnail, bold title, and max 2-line description.
- Card items:
  1. **Pre-Build Advisory**: For plot owners deciding whether to build, sell, collaborate or wait. Model scenarios, risks and returns to choose the optimal path.
  2. **Agency Evaluation & Contracts**: For plot owners shortlisting agencies. Evaluate builders on documented criteria and reshape agreements to lock in accountability.
  3. **Project Oversight & Audits**: For ongoing projects. Conduct site visits, quality audits, and contract-to-execution checks to catch issues early.

### Section 6: ReconPro 4-Step Process
- Section Title: "ReconPro 4-Step Process"
- Section Subtitle: "A structured advisory flow so you are never guessing your way through a crore-level decision."
- Set layout to 4 horizontal connected step cards with step numbers (01-04) and line icons.
- Limit copy to title + single sentence description per step:
  - **01 Approach Selection**: Evaluate plot parameters, family requirements, and budget to select the optimal build method (Turnkey, Collaborator, Architect-led, Contractor-led, or Owner-managed).
  - **02 Agency Evaluation**: Detailed technical, financial, and track-record due diligence of prospective contractors on documented evidence.
  - **03 Agreements & Specs**: Redraft one-sided contract clauses, standardize specifications, and negotiate locked pricing terms.
  - **04 Project Management**: Conduct routine site audits, verify stage milestones, and track execution via ReBOS through final handover.

### Section 7: ReBOS Platform Band (High-Contrast Dark Band)
- Set background to dark charcoal/navy (`#0F172A`) with light text and violet accents.
- Section Title: "ReBOS: Builder Operating System"
- Section Subtitle: "A client-side software layer where your builder, site team and advisory operate on the same live timeline."
- Set layout to two-column grid:
  - **Left**: 4 one-line feature bullets:
    - Live client dashboard for progress, photos, and payment approvals.
    - Real-time milestone timeline with delay warnings and variance alerts.
    - 3-stage QA checklist engine (Before, During, After).
    - Central repository for drawings, contracts, and test reports.
    - Primary CTA Button: "Request ReBOS Demo"
  - **Right**: UI screenshot mockup placeholder (`/assets/placeholders/rebos_dashboard_ui.png`).

### Section 8: Regulatory and Compliance Tools
- Section Title: "Validate Regulations & Costs Before You Build"
- Section Subtitle: "Pan-India calculation tools and statutory check resources."
- Set layout to 3-card grid with icons and single action buttons:
  1. **FAR & Construction Cost Calculator**: Calculate permissible FAR, built-up area, and preliminary cost benchmarks. (CTA: "Calculate Now")
  2. **ASI & Master Plan Restriction Tool**: Verify heritage buffer zones and transit easement rules. (CTA: "Check Restrictions")
  3. **City Building Bye-Laws Hub**: Reference municipal setback guidelines, ground coverage, and height limits. (CTA: "Browse Bye-Laws")

### Section 9: Construction Package Benchmarks
- Section Title: "Construction Package Tiers Benchmark"
- Section Subtitle: "ReconPro audits and benchmarks builder packages; it does not sell construction packages."
- Set layout to 4-card grid (Economy, Budget, Deluxe, Premium).
- Limit copy to 2-3 concise specification bullets per card + "View Specs" link.

### Section 10: Case Studies and Audited Projects
- Section Title: "Audited Projects"
- Section Subtitle: "Verified outcomes from real residential advisory engagements."
- Set layout to 3-card grid with facade photo placeholder (`case_study_*.jpg`), project title, city, plot size, and 1-line outcome.
- Populate strictly with verified project records from ReconPro inventory.

### Section 11: Client Testimonials
- Section Title: "Client Feedback"
- Section Subtitle: "Experiences from plot owners who built with independent advisory oversight."
- Set layout to 3 testimonial cards with client portrait placeholder (`client_avatar_*.jpg`), name, city, and max 2-line quote.
- Populate strictly with authentic client feedback from ReconPro.

### Section 12: Institutional FAQ
- Section Title: "Frequently Asked Questions"
- Section Subtitle: "Common questions regarding independent advisory, engagement stages, and fees."
- Set layout to interactive accordion component.
- Limit answers to max 3-4 lines:
  - **Q1: Is ReconPro a builder or contractor?**
    Answer: No. ReconPro is an independent techno-commercial advisory. We do not sell property, we do not build, and we do not act as brokers. Our only role is to protect the client's interests in home construction and related decisions.
  - **Q2: When should I engage ReconPro?**
    Answer: Ideally before you appoint a builder or sign any agreement. That is where we can add maximum value in approach selection, agency evaluation and contract structuring. We can also join mid-way to audit an ongoing project.
  - **Q3: Do I need a technical background to work with you?**
    Answer: No. The point of ReconPro is to make technical, legal and financial detail understandable and actionable for non-experts. We explain options, risks and implications in plain language while we handle the complexity.

### Section 13: Institutional Footer
- Set background to dark charcoal (`#0F172A`) with high-contrast text.
- Columns: About ReconPro, Advisory Practice, Tools & Tech, Contact & Pan-India location notice.
- Bottom Bar: Copyright notice, Privacy Policy, Terms of Advisory.

---

## 5. Exit-Intent and Engagement Modal Specification

Implement a responsive modal to capture interest before exit:

### Triggers and Behavior
- Trigger once per session on:
  1. Desktop mouseleave towards top browser chrome OR
  2. User scrolls past 75% of page height OR
  3. Dwell time exceeds 40 seconds without form submission.
- Dismiss on clicking "X" button, pressing `Escape`, or clicking backdrop overlay.
- Prevent duplicate triggers using `sessionStorage`.

### Modal Layout and Content
- Set layout to centered two-column modal (stacked on mobile).
- **Left Column**: Family + completed home image (`/assets/placeholders/modal_family_home.jpg`).
- **Right Column Directives**:
  - Headline: "Ready to treat your plot like a serious investment, not a leap of faith?"
  - Sub-headline: "Share a few basic details and get a structured advisory summary: your best approach, key risks to watch, and the questions you should ask every builder before you sign."
  - Form Fields: Name, Mobile Number (+91), City.
  - CTA Button: "Book FREE Consultation"
  - Microcopy: "Independent advisory only. No builder sales calls. Your details are kept confidential."

---

## 6. Implementation Notes for Development

### For `index.html`:
- Wrap all 12 modules in semantic `<section>` blocks with explicit IDs.
- Insert structured `<img>` tags with responsive `loading="lazy"` in Hero, Services, ReBOS, Case Studies, Testimonials, and Modal.
- Insert modal markup before closing `</body>` tag.
- Ensure all IDs (`#heroLeadForm`, `#modalForm`, `#leadName`, `#leadPhone`, `#leadCity`, `#leadSize`) match existing script hooks.

### For `styles.css`:
- Implement 8px grid baseline spacing scale.
- Apply high color contrast (WCAG AAA/AA) on all surfaces.
- Style modal with backdrop blur (`rgba(15, 23, 42, 0.75)`) and centered animation.
- Ensure responsive two-column to single-column collapsing on mobile (<768px).

### For `main.js`:
- Wire form submit handler with instant FAR/cost feedback and WhatsApp redirection.
- Add FAQ accordion expand/collapse logic.
- Add ReBOS role switcher tab logic.
- Add exit-intent, scroll threshold, and timer listeners for modal.
- Add smooth scrolling targeting `#heroLeadForm` for all "Get Advisory Summary" CTAs.
