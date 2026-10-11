# SUNVOLT — Solar Website Clone

A pixel-perfect, responsive clone of the Sungrow Power India website, rebuilt with original
copy and AI-generated placeholder imagery under the SUNVOLT brand.

**Live:** https://sunvolt-clone.vercel.app

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, segment explorer, commitment rail, news, follow |
| `/solution/ci-pv-solution` | Commercial & Industrial PV solution |
| `/solution/residential-pv-ess-ev-charging-solution` | Residential PV + ESS + EV charging solution |
| `/about-us/brand-story` | Brand story, milestones, history, awards |
| `/sustainability` | Climate targets, strategy, reports |

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Redux Toolkit** — tabs, carousels, mobile menu, accordion, form state
- **Tailwind CSS v4** — Manrope typeface, `#FF7900` primary
- Tested responsive at 1920 / 1366 / 1024 / 768 / 375

## Project structure

```
site/                  # the Next.js app (Vercel root directory)
  app/                 # routes
  components/          # Header, Hero, Sections, Solution, Brand, Sustain, …
  content/             # page copy (home, solutions, brand, sustainability, site)
  store/               # Redux Toolkit store
  public/dummy/        # AI-generated placeholder imagery
spec/                  # internal planning docs (not published)
```

## Getting started

```bash
cd site
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Deployment

Connected to Vercel with the project root set to `site/`. Every push to `master`
auto-deploys to production at https://sunvolt-clone.vercel.app.

## Notes

- All imagery in `public/dummy/` is AI-generated placeholder art in the spirit of the
  reference site's photography — swap with final assets before any real launch.
- Copy is original; no source text, logos, or media were reused.
