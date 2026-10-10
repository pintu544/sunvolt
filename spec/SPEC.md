# SPEC — Sungrow Power India structural clone (5 pages)

## Problem
Pintu wants a pixel-faithful structural replica of 5 Sungrow Power India pages as a
Next.js + React + Redux + Tailwind build — likely a client template or portfolio piece.
He needs the same information architecture, layout rhythm, and design language, rebuilt
with his own stack and original copy/placeholder assets (no brand-asset reuse).

## Users
- Pintu (developer): reuses the build as a template / client deliverable.
- Site visitor: browses 5 pages, uses carousels/tabs/accordions/forms.

## Functional requirements
1. The system SHALL render 5 routes: `/`, `/solution/ci-pv-solution`,
   `/solution/residential-pv-ess-ev-charging-solution`, `/about-us/brand-story`, `/sustainability`.
2. The system SHALL render the shared header (utility row + main nav w/ hover underline + hover dropdowns)
   and shared footer (5 link columns, social row, bottom legal bar) on all pages.
3. The system SHALL render every section in research.md in order, per page, with matching headings hierarchy.
4. The system SHALL implement: hero carousel (home), segment tabs (home), 5-item accordions (solutions),
   scenario tabs (solutions), product carousels (solutions), decade tabs + glass timeline carousel
   (brand story), sticky sub-nav + strategy/report tabs (sustainability), news carousels, contact form
   with validation + success state, back-to-top button.
5. Interactive UI state (carousel index, active tabs, open accordion, mobile menu, form) SHALL live in Redux.
6. The system SHALL match authored design tokens @1920px: type scale (60/52/36/32/24/20/18/14),
   colors (#1e1e1e, #606060, #5c5c5c, #EBEBEB, primary orange), radii (pill/8/20/30), shadow
   `0 20px 60px rgba(0,0,0,0.08)`, fluid `vw-` scaling via clamp().
7. All copy SHALL be original/paraphrased; brand placeholder "SUNVOLT"; no Sungrow assets or hotlinks.
8. The system SHALL be responsive: fluid scale + stacked layouts below 1024px; verified at 1920/1024/768/375.

## Non-functional
- `npm run build` passes with zero errors/warnings; `npm run lint` clean.
- First-load JS < 250KB per route (no heavy deps; CSS-only motion).
- Lighthouse performance ≥ 85 desktop on home route.
- Semantic HTML, alt text, per-page title/meta/og tags.

## Out of scope
Backend/API, real form submission, downloads, auth, search, chatbot logic, brand-story hero video file,
Sungrow brand assets/verbatim copy, i18n/CMS, analytics, e-commerce, public GitHub push.
