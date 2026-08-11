---
name: RECONPRO — Institutional Violet (LOCKED v1.0)
status: LOCKED — do not alter tokens below without explicit sign-off. Every new page/component
  generated must inherit this file as its single source of truth.
colors:
  primary: '#7C3AED'
  on-primary: '#FFFFFF'
  primary-hover: '#3D2A5C'
  deep-indigo: '#3D2A5C'
  on-deep-indigo: '#FFFFFF'
  lavender-tint: '#F3EAFB'
  orchid-mid: '#A78BDB'
  orchid-mid-15: rgba(167,139,219,0.15)
  orchid-mid-20: rgba(167,139,219,0.20)
  ink-black: '#1A1625'
  ink-black-8: rgba(26,22,37,0.08)
  canvas-white: '#FFFFFF'
  lavender-text-80: rgba(243,234,251,0.80)
  lavender-text-70: rgba(243,234,251,0.70)
  surface: '#fef7ff'
  surface-dim: '#dfd7e6'
  surface-bright: '#fef7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f1ff'
  surface-container: '#f3ebfa'
  surface-container-high: '#ede5f4'
  surface-container-highest: '#e8dfee'
  on-surface: '#1d1a24'
  on-surface-variant: '#4a4455'
  inverse-surface: '#332f39'
  inverse-on-surface: '#f6eefc'
  outline: '#7b7487'
  outline-variant: '#ccc3d8'
  surface-tint: '#732ee4'
  primary-container: '#7c3aed'
  on-primary-container: '#ede0ff'
  inverse-primary: '#d2bbff'
  secondary: '#69558a'
  on-secondary: '#ffffff'
  secondary-container: '#dac1fe'
  on-secondary-container: '#604c81'
  tertiary: '#7d3d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#a15100'
  on-tertiary-container: '#ffe0cd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d2bbff'
  on-primary-fixed: '#25005a'
  on-primary-fixed-variant: '#5a00c6'
  secondary-fixed: '#ecdcff'
  secondary-fixed-dim: '#d4bcf8'
  on-secondary-fixed: '#241042'
  on-secondary-fixed-variant: '#503d70'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb784'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#713700'
  background: '#fef7ff'
  on-background: '#1d1a24'
  surface-variant: '#e8dfee'
typography:
  font-heading: Plus Jakarta Sans
  font-body: Inter
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  nav-label:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '500'
    lineHeight: '1'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button-label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
    textTransform: uppercase
spacing:
  unit: 4px
  gutter: 24px
  margin: 48px
  container-max: 1280px
  header-height: 80px
  footer-padding-y: 64px
  base: 4px
shape:
  corner-radius: 0px
  border-width: 1px
  shadow: none
---

## Brand & Style — LOCKED

RECONPRO is a single unified brand covering both the plot-owner advisory practice and the ReBOS builder platform. The visual system is **Institutional Violet**: the flat, sharp-cornered, "Big-4 consulting" structure of the original Executive Precision system, with the accent family fully replaced from navy to violet/indigo, sourced directly from the RECONPRO logomark (magnifying glass over a house, inside a violet-gradient hexagon).

**Tone of voice:** authoritative, not transactional. RECONPRO is positioned as the expert the client retains, not a vendor requesting business. Copy across all pages should read as declarative capability statements ("Strategic clarity in two weeks," "Our standard, not a suggestion") rather than requests or offers ("We'd love to help," "Contact us today").

**Visuals over text:** pages should favor imagery, icons, and data visuals over dense paragraphs. Violet is used sparingly — as gradient accents, active states, and thin dividers — never as large flat color blocks.

## Color Usage Rules — LOCKED

| Token | Hex | Usage |
|---|---|---|
| Primary Violet | `#7C3AED` | CTA fills, active nav/link states, icon accents, chart highlights |
| Deep Indigo | `#3D2A5C` | Footer background, dark section backgrounds, button hover state |
| Lavender Tint | `#F3EAFB` | Alternate section backgrounds, mega-menu promo strips, hover row fills |
| Orchid Mid | `#A78BDB` | Dividers, hairline borders on dark backgrounds, secondary icon accents |
| Ink Black | `#1A1625` | Primary body/heading text on light backgrounds |
| Canvas White | `#FFFFFF` | Primary page background, header background, text on dark backgrounds |

Never introduce navy, teal, or any color outside this table without updating this file first.

## Typography Rules — LOCKED
- **Headings:** Plus Jakarta Sans, 600–700 weight only.
- **Body/nav/UI text:** Inter, 400–600 weight only.
- **Labels/eyebrows:** Inter, 12px, uppercase, 600 weight, 0.05em letter-spacing.
- No other typefaces permitted anywhere on the site.

## Shape & Elevation Rules — LOCKED
- Corner radius: **0px everywhere** — buttons, cards, inputs, chips, images.
- No drop shadows anywhere. Depth is created only by alternating White / Lavender Tint / Deep Indigo backgrounds.
- Borders: 1px hairlines only, in Ink Black at 8% opacity (light backgrounds) or Orchid Mid at 15–20% opacity (dark backgrounds).