# GRILL — Sungrow Power India clone (5 pages)

## Q1. What exactly counts as "clone"? Verbatim copy or structural replica?
**A:** Structural replica. Same information architecture, section order, layout, and design
language as the 5 source pages. All marketing copy is paraphrased/original (no verbatim reproduction
of Sungrow text); brand identity uses a neutral placeholder name ("SUNVOLT") with the same lockup
style — Pintu swaps in real brand assets if this is for a client. No Sungrow logo files, no hotlinked
Sungrow images.

## Q2. What is the completion evidence (the one demo that proves it works)?
**A:** `npm run dev`, visit all 5 routes; each page visually matches the source page's layout at
1920px desktop (section order, type scale, spacing, colors per research.md tokens) and reflows
cleanly at 1024/768/375px. All interactive elements work: hero carousel, tabs, accordions, product/news
carousels, sticky sub-nav, contact form validation, back-to-top, chatbot button (decorative).

## Q3. Stack — why these choices?
**A:** Next.js 16 (latest stable, 16.4.0) with App Router (Pintu's standard; file-based routing maps 1:1 to the 5 pages), React 19,
Redux Toolkit (Pintu explicitly requested Redux for state — carousels, tabs, accordions, mobile menu,
form state), Tailwind CSS. Fluid `vw-` scale replicated with CSS `clamp()` so type/spacing matches
@1920 and scales proportionally like the original. Fonts: Manrope (closest free geometric sans to the
custom Sungrow face) via Google Fonts. Motion: CSS transitions + IntersectionObserver reveals
(no Lenis dependency — CSS `scroll-behavior: smooth` suffices).

## Q4. Images and media — hotlink, download, or placeholder?
**A:** Neither hotlink nor download Sungrow assets. All imagery = local SVG/CSS placeholders
(gradient scenes labeled by section, e.g. "solar farm", "product shot") in `public/placeholders/`.
Deterministic, offline-safe, no copyright exposure. A documented `public/assets/README.md` maps each
placeholder to its replacement spec (dimensions, subject) so real assets drop in 1:1.

## Q5. What about the unobserved parts (mega-menus, exact orange hex, mobile reflow)?
**A:** Mega-menu dropdowns: implement hover dropdowns with the observed top-level items and plausible
submenu links (marked as approximate in code comments). Primary orange: start at #FF6A00, verify by
eye against the live site, adjust once. Mobile reflow: follow the fluid-scale logic (continuous scaling
+ stack below 1024px); verified by Playwright screenshots at 4 widths during QA, not by guessing.

## Q6. Forms, downloads, login, search, chatbot — functional or decorative?
**A:** Contact form: full client-side validation + success state (no backend; submit shows confirmation,
marked "demo — wire to backend" in code). Report download buttons: decorative (no files). Login, search,
chatbot button, back-to-top: decorative except back-to-top (functional scroll). Newsletter: none on
source (confirmed). Region selector "India": static label.

## Q7. Pixel-perfect — how is it verified, given no access to their Figma?
**A:** Source of truth = authored token values captured in research.md (exact px @1920, hex colors,
radii, shadows). Verification = Playwright screenshots of our pages at 1920/1024/768/375 vs. the token
spec + a visual side-by-side review pass per slice. "Pixel-perfect" = matches authored spec values
exactly at 1920 and scales per the fluid system; not a screenshot-diff against the live site
(their images/fonts can't be reproduced 1:1).

## Q8. i18n, CMS, SEO — in or out?
**A:** Out. Single locale (en), hardcoded content in `content/` data files (one per page, typed).
SEO basics in scope: semantic HTML, per-page `<title>`/meta description, alt text, og tags.
No CMS, no i18n routing.

## Q9. What's explicitly out of scope?
**A:** Backend/API; real form submission; file downloads; login/auth; search functionality; chatbot
logic; video file for brand-story hero (gradient + play-button placeholder); actual Sungrow brand
assets/copy; e-commerce; analytics; tests beyond build+lint+screenshot QA.

## Q10. Repo, deploy, ports?
**A:** Local repo `~/workspace/sungrow-clone` (no public GitHub push unless Pintu asks — avoids
publishing a brand clone). Dev on port 3000. Deploy target: Vercel (Pintu's standard) after his approval.
