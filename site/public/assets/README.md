# Asset Replacement Map

All imagery on the site is currently a **placeholder**: a labeled gradient + line-art SVG
rendered by `components/ui.tsx` → `<Placeholder scene="..." label="..." />`. No external
images are hotlinked and no brand assets are bundled.

## Scenes
| scene key | palette | intended replacement |
|---|---|---|
| `solar-farm` | deep blue → orange | utility-scale solar plant, wide aerial |
| `panels` | blue steel | close-up of PV modules / inverter |
| `home` | green | residential rooftop with family home |
| `factory` | slate | commercial rooftop / industrial facility |
| `forest` | deep green | forest + solar aerial (sustainability) |
| `product` | light gray → orange | product packshot on light background |
| `people` | warm brown | team / installer / community photo |
| `dark` | near-black indigo | dark abstract / night plant (brand film bg) |

## How to replace
1. Drop final assets into `site/public/assets/` (e.g. `hero-home.jpg`, `product-sv150cx.png`).
2. In `components/ui.tsx`, extend `<Placeholder>` to accept an optional `src` — or swap the
   component call for `next/image` at each call site (search for `<Placeholder`).
3. Recommended sizes: heroes 1920×1080, cards 800×600, product shots 800×800 transparent PNG.
4. Keep `alt`/`aria-label` text from the `label` prop.

## Brand tokens to verify by eye
- Primary orange `#FF6A00` is an **eye approximation** of the reference site's brand orange
  (exact hex not exposed in their markup). Compare against the live reference and adjust
  `--color-primary` in `site/app/globals.css` if needed.
- Font: Manrope (free geometric sans) stands in for the reference's licensed custom face.
