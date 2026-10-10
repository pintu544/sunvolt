"use client";

import { selectTab } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  Placeholder,
  Reveal,
  SectionHeading,
  ButtonPrimary,
  ButtonOutline,
  VDivider,
  OrangeDash,
} from "./ui";
import { home } from "@/content/home";

/* ---------- Promo banner: big rounded image card ---------- */
export function PromoBanner() {
  const p = home.promo;
  return (
    <section className="mx-auto max-w-[1920px] px-[clamp(16px,5.2vw,100px)] pt-[clamp(24px,2.5vw,48px)]">
      <Reveal className="relative overflow-hidden rounded-[40px]">
        <Placeholder scene={p.scene} label={p.title} rounded="rounded-none" className="h-[clamp(320px,42vw,800px)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 px-[7%] text-center">
          <h2 className="max-w-[900px] text-h2 font-medium leading-[1.2] text-white">{p.title}</h2>
          <p className="mt-6 text-h3 font-medium text-white">{p.stat}</p>
          <p className="mt-2 text-body-lg text-white/90">{p.statLabel}</p>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Intro: orange heading + tall divider + body ---------- */
export function IntroSection() {
  const s = home.intro;
  return (
    <section className="mx-auto max-w-[1100px] px-[3%] py-[clamp(3rem,5vw,6rem)] text-center">
      <Reveal>
        <h2 className="text-h2 font-medium leading-[1.2] text-primary">{s.title}</h2>
      </Reveal>
      <Reveal className="my-10">
        <VDivider />
      </Reveal>
      <Reveal>
        <p className="text-body-lg leading-[1.8] text-gray-2">{s.text}</p>
      </Reveal>
    </section>
  );
}

/* ---------- Stats band with orange line icons ---------- */
function StatIcon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    layers: (
      <>
        <path d="M12 3 3 8l9 5 9-5-9-5Z" />
        <path d="m3 13 9 5 9-5" />
      </>
    ),
    medal: (
      <>
        <circle cx="12" cy="14" r="6" />
        <path d="M8.5 9.5 6 3h4l2 4 2-4h4l-2.5 6.5" />
        <path d="M12 11.5v5m-1.5-3.5h3" />
      </>
    ),
    factory: (
      <>
        <path d="M4 21V10l5 3v-3l5 3V7h6v14H4Z" />
        <path d="M7 17h2m4 0h2m4 0h2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
      </>
    ),
    leaf: (
      <>
        <path d="M5 19C5 9 13 4 20 4c0 8-5 15-15 15Z" />
        <path d="M5 19c3-5 7-9 12-11" />
      </>
    ),
  };
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-primary">
      {paths[kind]}
    </svg>
  );
}

export function StatsBand() {
  const s = home.stats;
  return (
    <section className="mx-auto max-w-[1600px] px-[3%] pb-[clamp(2rem,3vw,4rem)]">
      <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
        {s.items.map((item) => (
          <Reveal key={item.value} className="flex flex-col items-center text-center">
            <StatIcon kind={item.icon} />
            <p className="mt-5 font-light text-ink" style={{ fontSize: "clamp(56px, 5.7vw, 110px)", lineHeight: 1.1 }}>
              {item.value}
              {item.unit && (
                <span className="ml-2 align-baseline text-gray-1" style={{ fontSize: "clamp(20px, 2vw, 38px)" }}>
                  {item.unit}
                </span>
              )}
            </p>
            <p className="mt-4 max-w-[220px] text-body leading-[1.5] text-gray-2">{item.label}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 text-center">
        {s.footnotes.map((f) => (
          <p key={f} className="text-small leading-[1.7] text-gray-2/80">
            {f}
          </p>
        ))}
      </Reveal>
      <Reveal className="mt-10 text-center">
        <ButtonOutline href={s.cta.href} className="min-w-[300px]">
          {s.cta.label}
        </ButtonOutline>
      </Reveal>
      <Reveal className="mt-14">
        <VDivider className="h-[180px]" />
      </Reveal>
    </section>
  );
}

/* ---------- Segments: full-bleed image panels ---------- */
export function SegmentTabs() {
  const s = home.segments;
  const dispatch = useAppDispatch();
  const tab = useAppSelector((st) => st.tabs["home-segtype"] ?? 0);
  const seg = useAppSelector((st) => st.tabs["home-segment"] ?? 0);
  const active = s.types[tab].segments[seg] ?? s.types[tab].segments[0];

  return (
    <section className="relative overflow-hidden">
      <div key={`${tab}-${seg}`} className="absolute inset-0">
        <Placeholder scene={active.scene} label="" rounded="rounded-none" className="h-full" />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="relative mx-auto flex min-h-[clamp(560px,72vh,900px)] max-w-[1920px] flex-col px-[3%] py-12">
        {/* type tabs */}
        <div role="tablist" aria-label="Segment type" className="flex justify-center gap-10">
          {s.types.map((t, i) => (
            <button
              key={t.label}
              role="tab"
              aria-selected={tab === i}
              onClick={() => {
                dispatch(selectTab({ id: "home-segtype", index: i }));
                dispatch(selectTab({ id: "home-segment", index: 0 }));
              }}
              className={`pb-2 text-body-lg font-medium transition-colors ${
                tab === i ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {t.label}
              <span className={`mt-1 block h-[2px] bg-white transition-transform ${tab === i ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          ))}
        </div>
        {/* segment pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {s.types[tab].segments.map((g, i) => (
            <button
              key={g.label}
              onClick={() => dispatch(selectTab({ id: "home-segment", index: i }))}
              className={`rounded-pill border px-6 py-2.5 text-body font-medium transition-colors ${
                seg === i
                  ? "border-white bg-white text-ink"
                  : "border-white/50 text-white hover:border-white"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
        {/* panel */}
        <div className="flex flex-1 flex-col justify-center py-16">
          <Reveal key={active.label}>
            <a href={active.href} className="group inline-flex items-center gap-3">
              <h2 className="text-h1 font-medium text-white">{active.label}</h2>
              <span className="text-h2 text-primary transition-transform group-hover:translate-x-2">›</span>
            </a>
            <ul className="mt-10 space-y-5">
              {active.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center gap-2 text-h3 font-light text-white/95 hover:text-white">
                    {l.label}
                    <span className="text-body text-primary transition-transform group-hover:translate-x-1">›</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why SUNVOLT ---------- */
export function WhySection() {
  const w = home.why;
  return (
    <section className="bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1100px] px-[3%] py-[clamp(4rem,6vw,7rem)] text-center">
        <Reveal>
          <h2 className="font-medium leading-[1.15] text-primary" style={{ fontSize: "clamp(40px, 3.33vw, 64px)" }}>
            {w.title}
          </h2>
        </Reveal>
        <Reveal className="my-10">
          <VDivider />
        </Reveal>
        <Reveal>
          <p className="text-body-lg leading-[1.8] text-gray-2">{w.text}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Commitment: horizontal image cards ---------- */
export function CommitmentCards() {
  const c = home.commitment;
  return (
    <section className="py-[clamp(3rem,5vw,6rem)]">
      <Reveal className="mx-auto max-w-[1600px] px-[3%]">
        <SectionHeading className="text-gray-1">{c.title}</SectionHeading>
      </Reveal>
      <Reveal className="mt-12">
        <div className="flex gap-6 overflow-x-auto px-[3%] pb-4" style={{ scrollbarWidth: "none" }}>
          {c.cards.map((card) => (
            <article
              key={card.title}
              className="relative h-[clamp(420px,32vw,620px)] w-[clamp(320px,33vw,640px)] shrink-0 overflow-hidden rounded-[30px]"
            >
              <Placeholder scene={card.scene} label="" rounded="rounded-none" className="absolute inset-0 h-full" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/25" />
              <div className="absolute left-0 right-0 top-0 p-10">
                <h3 className="text-h3 font-medium leading-[1.25] text-white">{card.title}</h3>
                <div className="mt-8">
                  <ButtonPrimary href={card.href}>Explore More</ButtonPrimary>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Together: big rounded split cards ---------- */
export function SplitRows() {
  return (
    <section className="mx-auto max-w-[1920px] space-y-8 px-[clamp(16px,5.2vw,100px)] py-[clamp(2rem,3vw,4rem)]">
      <Reveal className="text-center">
        <h2 className="text-h2 font-medium leading-[1.2] text-gray-1">Together, We Forge a Greener Tomorrow</h2>
      </Reveal>
      {home.together.map((row, i) => (
        <Reveal
          key={row.title}
          className="grid overflow-hidden rounded-[40px] bg-white lg:grid-cols-2"
        >
          <div className={`flex flex-col justify-center p-[clamp(2rem,5vw,5rem)] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <p className="text-body text-gray-2">{row.eyebrow}</p>
            <div className="mt-4">
              <OrangeDash />
            </div>
            <h3 className="mt-6 font-medium leading-[1.2] text-gray-1" style={{ fontSize: "clamp(32px, 2.9vw, 56px)" }}>
              {row.title}
            </h3>
            <div className="mt-10">
              <ButtonOutline href={row.href}>Explore More</ButtonOutline>
            </div>
          </div>
          <div className={`min-h-[320px] lg:min-h-[520px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <Placeholder scene={row.scene} label={row.title} rounded="rounded-none" className="h-full" />
          </div>
        </Reveal>
      ))}
    </section>
  );
}

/* ---------- News: featured + 2x2 ---------- */
type NewsItem = { tag: string; title: string; date: string; scene: string };
export function NewsCards({ title, items }: { title?: string; items?: NewsItem[] }) {
  const n = home.news;
  const heading = title ?? n.title;
  const list = items ?? n.items;
  const [featured, ...rest] = list;
  return (
    <section className="bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,5vw,6rem)]">
        <Reveal>
          <h2 className="text-center text-h2 font-medium leading-[1.2] text-gray-1">{heading}</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal as="article" className="overflow-hidden rounded-[24px] bg-white shadow-card">
            <Placeholder scene={featured.scene} label={featured.title} rounded="rounded-none" className="h-[clamp(280px,26vw,480px)]" />
            <div className="p-8">
              <p className="text-body font-medium text-primary">{featured.tag}</p>
              <h3 className="mt-3 text-h3 font-medium leading-[1.35] text-ink">{featured.title}</h3>
              <p className="mt-4 text-body text-gray-2">{featured.date}</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.slice(0, 4).map((item) => (
              <Reveal key={item.title} as="article" className="overflow-hidden rounded-[24px] bg-white shadow-card">
                <Placeholder scene={item.scene} label={item.title} rounded="rounded-none" className="h-[190px]" />
                <div className="p-6">
                  <p className="text-body font-medium text-primary">{item.tag}</p>
                  <h3 className="mt-2 text-body-lg font-medium leading-[1.4] text-ink">{item.title}</h3>
                  <p className="mt-3 text-small text-gray-2">{item.date}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonOutline href="#">Explore More</ButtonOutline>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Follow: big social icons ---------- */
const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: (
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.2 8h4.6v14H.2V8Zm7.6 0h4.4v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.6v-6.6c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V22H7.8V8Z" />
  ),
  Instagram: (
    <>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </>
  ),
  Facebook: (
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4Z" />
  ),
  X: <path d="M17.8 3h3l-6.7 7.7L22 21h-6.2l-4.8-6.3L5.4 21h-3l7.2-8.2L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.1h1.7L7.4 4.8H5.6l11.1 14.3Z" />,
  YouTube: (
    <>
      <rect x="1" y="5" width="22" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m10 9 5 3-5 3V9Z" />
    </>
  ),
};

export function FollowSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(4rem,6vw,7rem)] text-center">
      <Reveal>
        <h2 className="font-medium leading-[1.15] text-gray-1" style={{ fontSize: "clamp(40px, 2.9vw, 56px)" }}>
          Follow SUNVOLT
        </h2>
      </Reveal>
      <Reveal className="mt-14 flex items-center justify-center gap-[clamp(1.25rem,7vw,7rem)]">
        {home.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-[#4a4a4a] transition-colors hover:text-primary"
          >
            <svg className="h-11 w-11 sm:h-[52px] sm:w-[52px]" viewBox="0 0 24 24" fill="currentColor">
              {socialIcons[s.label]}
            </svg>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
