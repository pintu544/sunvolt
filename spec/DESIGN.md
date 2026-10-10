# DESIGN — Sungrow clone

## Architecture
Next.js 16 App Router (latest stable). `app/` routes map 1:1 to pages; `components/` holds shared
(Header, Footer, Hero, Accordion, Tabs, Carousel, StatBand, NewsCards, ContactForm, …) and
section components; `content/` holds typed per-page data files; `store/` holds Redux Toolkit
slices; `public/placeholders/` holds SVG placeholder scenes; `styles/` holds Tailwind config +
fluid-scale utilities.

```
app/layout.tsx → <Header/> <ReduxProvider> {page} </ReduxProvider> <Footer/> <BackToTop/>
app/page.tsx, app/solution/[slug]/page.tsx (ci + residential share template),
app/about-us/brand-story/page.tsx, app/sustainability/page.tsx
components/* ← content/*.ts (data) ← store/* (ui state: carousel/tab/accordion/menu/form)
```

## Data model
No backend. Content types (TS): `NavItem`, `HeroSlide`, `Stat`, `Card`, `AccordionItem`,
`TabSet`, `Product`, `NewsItem`, `TimelineEra`, `ReportDoc`, `FormField`. One `content/*.ts`
per page; `content/site.ts` for header/footer.

## API contracts
None (static). Contact form submit → client-side validate → Redux `form.status='success'`
(annotated "wire to backend").

## Key decisions
- **Next.js App Router**: file routing = the 5 pages; Pintu's standard stack.
- **Redux Toolkit** (not zustand/context): Pintu explicitly requested Redux for state management.
  Slices: `ui` (mobile menu, chatbot), `carousel` (per-instance index), `tabs`, `accordion`, `form`.
- **Tailwind + clamp() fluid scale**: replicates the source's `vw-` system —
  `text-[clamp(min, 52/1920*100vw, 52px)]`-style utilities via a `fluid()` helper, so 1920px values
  match authored tokens exactly and scale continuously like the original.
- **Manrope** (Google Fonts): closest free geometric sans to the custom Sungrow face.
- **SVG placeholders, no hotlinks**: deterministic, offline, zero copyright exposure;
  `public/assets/README.md` documents replacement specs per placeholder.
- **CSS motion** (transitions + IntersectionObserver): no Lenis/framer-motion — keeps JS < 250KB.
- Alternatives rejected: plain CSS (loses Tailwind speed), context-only state (violates explicit Redux ask),
  next/image remote (needs their CDN), copying their .otf (licensed).

## Risks
1. **Orange hex unverified** (#FF6A00 start) → de-risk: eyeball against live site once, adjust token.
2. **Mobile reflow unobserved** → de-risk: Playwright screenshots @768/375 during QA; follow fluid-stack logic.
3. **Mega-menu content unobserved** → de-risk: plausible submenu links, marked approximate in comments.
