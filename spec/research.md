# Research — Sungrow Power India site structure
Captured 2026-10-11 via live-browser structural read (read-only, no forms submitted).
Sources:
- https://www.sungrowpower.com/in/en (Home)
- https://www.sungrowpower.com/in/en/solution/ci-pv-solution
- https://www.sungrowpower.com/in/en/solution/residential-pv-ess-ev-charging-solution
- https://www.sungrowpower.com/in/en/about-us/brand-story
- https://www.sungrowpower.com/in/en/sustainability

## Global design tokens (authored values, 1920px baseline)
- Fluid system: `vw-*` utilities scale linearly with viewport against 1920px baseline
  (e.g. `vw-text-[52]` = 52px @1920). Fixed tokens (leading, radius) don't scale.
- Typography: custom geometric sans (.otf webfonts); headings font-medium (500); wordmark is custom logotype.
- Colors: white #ffffff; text near-black #1e1e1e; mid gray #606060; secondary #5c5c5c;
  divider #EBEBEB; disabled #ccc; glass tint #3F3F60 @30%. Brand orange via
  `text-primary/bg-primary/border-primary` tokens (exact hex not in markup — visually vivid orange,
  approx #FF6A00; to be verified by eye).
- Header: two-row white bar. Row 1 utility: region button (flag + "India"), search/person icons, LOGIN.
  Row 2 centered nav: For Home, For Business, For Utility, Partners, Products, Service & Support,
  Sustainability, About Us. Nav items font-medium gray w/ animated orange underline (0→100% on hover).
  Side gutters `vw-px-[390]` (huge — likely max-width container behavior, verify in build).
- Footer (shared, 5 columns): Products & Solutions | Partners | Service & Support | Sustainability | About Us;
  "Follow SUNGROW" social row (LinkedIn, Instagram, Facebook, Twitter, YouTube); bottom bar
  "© 2026 SUNGROW. All Rights Reserved." + Privacy Policy + Disclaimer. No newsletter. Floating chatbot button.
- Buttons: pill (`rounded-pc`); solid orange/white text OR outline orange/orange text (hover fills orange);
  `vw-py-[18] vw-px-[40]`, 18–20px medium text, hero CTAs min-width ~270px.
- Cards: product/news = white, radius 8px, shadow `0 20px 60px rgba(0,0,0,0.08)`;
  dark-section timeline = glass (radius 30px, backdrop-blur, #3F3F60/30);
  image+text split media radius 20px.
- Type scale @1920: hero H1 60px / hero titles 52px / section H2 52px (home/brand) or 36px (solutions) /
  card titles 32px / accordion buttons 24px / body 18px / small 14px. Line-heights 1.2–1.55.
- Layout rhythm: solution pages container `px-[14%]`; section vertical padding ~`vw-py-[60]`;
  pattern per section: centered heading → content → CTA.
- Motion: Lenis smooth scroll, fade/slide-up entrances, nav underline animation, button hover-fill, carousels.
- Responsive: `vw-` fluid scaling (continuous, not breakpoint jumps); `lg:` prefix @1024px seen in markup.
  Breakpoint reflow at 768/375 not empirically verified.

## Page blueprints
### 1. Home (/)
- Hero: 100vh full-bleed image carousel; centered white text (`vw-pt-[200]`, `vw-gap-[30]`, `vw-px-[100]`);
  H "Clean Power for All" 52px; subtext 18px/1.44; pagination dots; fade+translateY entrance.
- Stats band: 5 image+text stats row (GW installed; NO.1 PV Inverter & ESS & PCS Bankability;
  R&D Centers; Intl Subsidiaries; AAA MSCI ESG 2025) + 2 footnotes; CTA "Discover Who We Are" pill outline.
- Segment tabs: For Home | For Business | For Utility | Installers | Distributors + "Customer Scenarios /
  Business Areas" tabs; "Why Sungrow" image+text split.
- "Our Commitment to Innovation and Excellence" (52px centered): 4 icon cards (Technological Innovation,
  Lean Manufacturing, Global Presence, Professional Services) + "Explore More" links.
- "Together, We Forge a Greener Tomorrow": 3 image+text split rows + CTAs (Sustainability / Our people / Service).
- "Trending News & Events": 5 cards (1 News, 3 Events, 1 Influencer): image + tag + title + date + CTA.

### 2. C&I PV Solution (/solution/ci-pv-solution)
- Hero: 100vh image, left text (`pt-[16%]`, `px-[14%]`); eyebrow breadcrumb 20px white;
  H1 "Commercial & Industrial PV Solution" 60px/1.2 white; vertical dot pagination right edge.
- "Flexible Solutions for Maximum Value" (36px centered #606060, orange accent bar): 5-item accordion
  (Investment Returns, Enhanced Safety, Simplified O&M, Higher Yields, Smart Management); buttons 24px
  #1e1e1e `vw-py-[40]`, plus/minus toggle, #EBEBEB dividers; expanded = image + desc + link.
- "Flexible Applications for Every Scenario": 4 tabs (Retail & Commercial, Industrial Parks, Public Facilities,
  Agriculture); cards image top `h-[260]`, title 20px medium, desc 14px/1.8 #5c5c5c.
- "Our Products": 3 cards/row `w-[30%]`, white, rounded-8, soft shadow; orange category tag 16px;
  product image; model 32px; CTAs "Learn More" + "Documents & Installation" (SG150CX, SG125CX-P2, iSolarCloud).
  Carousel arrows 80px circles, orange border (disabled #ccc 50%).
- "Latest News & Events": 4 cards. Contact form: First/Last Name, Email, Phone, Company, Country select,
  Industry select, message, file upload, subscribe checkbox, consent text, submit.

### 3. Residential (/solution/residential-pv-ess-ev-charging-solution)
- Same template as C&I. Hero eyebrow + H1 "Residential Energy Solution" 60px.
- Accordion: Solar Energy Maximizing Home Value, Higher Yields, Enhanced Safety, Simplified O&M, Smart Management.
- Tabs: Villa, Apartment, Courtyard, Farmhouse. Products: iSolarCloud, SG25/30/33/36/40/50CX-P2, SBH100-400.
- News 4 cards + same contact form.

### 4. Brand Story (/about-us/brand-story)
- Hero: 100vh VIDEO bg (mp4), centered "Brand Story" 52px white `vw-mb-[14]`.
- "To Be the Global Leader of Clean Energy Conversion Technology" 52px #606060: mission/vision/values
  accordion + 2 image+text splits (Mission, Vision), media `rounded-[20]`.
- "Milestones" 52px white over dark image: glass timeline carousel — cards 520px `vw-p-[60]`
  `vw-rounded-[30]` `backdrop-blur-[10px]` #3F3F60/30; year 48px orange; desc 24px/2 white;
  4 slides (1997 / 2002-2009 / 2011-2021 / 2022-2024); 32px chevron buttons. "Awards": Forbes Asia, D&B cards.
- "Our History": decade tabs (1980s–2020s) → year timeline + description.
- News 3 cards.

### 5. Sustainability (/sustainability)
- Hero: 100vh aerial image, centered "Green Mission / Better Life" 52px/1.38 white `vw-mb-[30]`.
  Sticky sub-nav: Overview | Sustainability Strategy | Reports and Policies (anchor links).
- "Our Climate Targets": 3 cards (carbon neutrality Scope 1+2 by 2028; supply chain 2038; net zero 2048)
  + footnote accordion.
- "Our Sustainability Strategy": 5 pillar tabs (Governance Excellence, Net-Zero Transition, Eco-Harmony,
  Mutual Prosperity, Equity & Inclusion); panel = image + links + stats band (Female Mgr 16.9%,
  Local Hiring 98%, 1700+ safety-certified, 12000+ volunteer hrs).
- "Latest Reports & Policies": tabs (Report / Policy); cards with cover, title, year, Download (2021–2025).
- "Honors and Rewards": 4-image awards carousel. "Latest News": 1 featured + 2 side.
- "Contact Us": ESG team email link.

## Corrected homepage blueprint (pixel audit 2026-10-11, computed values from live DOM)
- Header: row 1 STICKY (India left | wordmark centered | search/person/LOGIN right); nav row STATIC below (scrolls away). Brand orange = **#FF7900** (sampled from wordmark + back-to-top arrow).
- Hero: 100vh video, headline text BAKED INTO VIDEO, bottom-anchored (~52px white centered, ~100px above bottom). No HTML headline.
- Promo banner: rounded ~40px image card, ~100px side margins, below hero.
- Pattern: orange 52px centered heading → TALL vertical orange divider (~180-250px, 2px) → content.
- Stats: orange line-art icons (~48px) above HUGE dark numbers (~110px, #1e1e1e), unit smaller; gray labels ~18px; tiny footnotes; outline pill CTA ~300px.
- Segments: full-bleed dark image; top tabs "Customer Scenarios | Business Areas" (white); panel = big white title + orange chevron + white link list (~28px).
- "Why Sungrow": gray bg, ORANGE 64px heading, tall divider, gray body text.
- Commitment: horizontal-scroll image cards (~620×600, radius ~30px), white title ~40px top-left, SOLID orange "Explore More" pill.
- Together: big rounded cards (radius ~40px); left white panel: gray eyebrow ~20px + orange double-dash + gray heading ~56px + outline pill; right full-bleed image.
- News: "Trending News & Events" gray ~48px; featured large card left + 2×2 grid right; white cards radius ~24px; orange tag ~20px; dark title ~24px; date.
- Follow: "Follow SUNGROW" gray ~56px + 5 LARGE (~48px) gray social icons, wide spacing.
- Footer: light gray bg; 5 columns (dark bold titles ~18px, gray links); bottom: orange wordmark left, divider, "© 2026 ... All Rights Reserved." + Privacy/Disclaimer.

## Gaps / unverified
- Mega-menu dropdown content (not opened, read-only).
- Exact primary-orange hex (not in markup).
- Breakpoint reflow at 768/375 (viewport resize unavailable); `lg:`@1024 seen.
- `vw-px-[390]` header gutters seem extreme — treat as max-width container ~1140px content width; verify by eye.
