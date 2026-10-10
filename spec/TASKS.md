# TASKS — Sungrow clone

## Slice 1 — Scaffold + design system + Home
- [x] T1: Scaffold Next.js 16 + TS + Tailwind + Redux Toolkit; `npm run build` clean.
      Done = build passes, store wired, no console errors on `/`.
- [x] T2: Design tokens: Tailwind theme (colors, radii, shadow), `fluid()` clamp utilities,
      Manrope font, button variants (solid/outline pill), section rhythm utilities.
      Done = a tokens demo page shows every token matching research.md values.
- [x] T3: Header (utility row + nav + hover underline + dropdowns + mobile menu in Redux) and
      Footer (5 columns, socials, legal bar) + BackToTop + placeholder chatbot button.
      Done = renders on all routes, dropdowns open on hover, mobile menu toggles.
- [x] T4: Home page sections: hero carousel, stats band, segment tabs, commitment cards,
      split rows, news cards — all copy original, SVG placeholders.
      Done = section order/headings match research.md; carousel/tabs work via Redux.
- [x] T5: Slice-1 QA: Playwright screenshots @1920/1024/768/375 of home; fix visual drift;
      adversarial QA subagent pass; Pintu reviews in browser.

## Slice 2 — Solution pages (shared template)
- [x] T6: Solution template: hero (left text, dot pagination), accordion (5 items),
      scenario tabs, product carousel, news cards, contact form (validation + success).
      Done = C&I page complete per research.md.
- [x] T7: Residential page via same template with its content set.
      Done = route renders, all interactives work, no template leakage (C&I copy).
- [x] T8: Slice-2 QA: screenshots @4 widths both pages; adversarial QA; Pintu review.

## Slice 3 — Brand Story + Sustainability
- [x] T9: Brand story: video-hero placeholder, mission/vision accordion + splits,
      glass milestone timeline carousel, decade tabs, awards, news.
      Done = glass cards (blur, #3F3F60/30, radius 30) match spec.
- [x] T10: Sustainability: hero, sticky sub-nav (anchor scroll), climate target cards,
      5-pillar strategy tabs + stats band, reports tabs + download cards (decorative),
      awards carousel, news, ESG contact.
      Done = sticky nav highlights active section on scroll.
- [x] T11: Slice-3 QA: screenshots @4 widths; adversarial QA; Pintu review.

## Slice 4 — Polish + ship
- [ ] T12: SEO/meta/og per page, alt text audit, orange hex eye-verification vs live site,
      `public/assets/README.md` replacement map.
- [ ] T13: `npm run build` + `lint` clean, Lighthouse ≥85 home desktop, final full-site
      screenshot pass; fix all criticals.
- [ ] T14: Deploy preview to Vercel (on Pintu's approval), handover notes.
