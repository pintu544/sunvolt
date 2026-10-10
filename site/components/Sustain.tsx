"use client";

import { useEffect, useState } from "react";
import { selectTab, prev, next } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Placeholder, Reveal, SectionHeading, AccentBar, ButtonOutline } from "./ui";

/* ---------- Sticky sub-nav with scroll spy ---------- */
export function StickySubNav({ items }: { items: { label: string; href: string }[] }) {
  const [active, setActive] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[104px] z-30 border-b border-divider bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-[1600px] justify-start gap-2 overflow-x-auto px-[3%] md:justify-center">
        {items.map((i) => (
          <a
            key={i.href}
            href={i.href}
            className={`relative shrink-0 whitespace-nowrap px-6 py-4 text-body font-medium transition-colors ${
              active === i.href ? "text-primary" : "text-gray-1 hover:text-ink"
            }`}
          >
            {i.label}
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full bg-primary transition-transform duration-300 ${
                active === i.href ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ---------- Climate target cards ---------- */
export function TargetCards({
  items,
}: {
  items: { title: string; text: string; scene: string }[];
}) {
  return (
    <section id="overview" className="mx-auto max-w-[1600px] scroll-mt-[170px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <AccentBar />
        <h2 className="text-h2 font-medium leading-[1.2] text-center text-gray-1">Our Climate Targets</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <Reveal key={t.title} className="overflow-hidden rounded-[8px] bg-white shadow-card">
            <Placeholder scene={t.scene} label={t.title} rounded="rounded-none" className="h-[200px]" />
            <div className="p-8">
              <p className="text-h1 font-medium text-primary">{t.title}</p>
              <p className="mt-3 text-body leading-[1.65] text-gray-2">{t.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Strategy pillar tabs + stats band ---------- */
export function StrategyTabs({
  id,
  pillars,
}: {
  id: string;
  pillars: { label: string; title: string; text: string; stats: { value: string; label: string }[]; scene: string }[];
}) {
  const dispatch = useAppDispatch();
  const active = useAppSelector((s) => s.tabs[id] ?? 0);
  const pillar = pillars[active];

  return (
    <section id="strategy" className="scroll-mt-[170px] bg-[#fafafa]">
      <div className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
        <Reveal>
          <AccentBar />
          <h2 className="text-h2 font-medium leading-[1.2] text-center text-gray-1">
            Our Sustainability Strategy
          </h2>
        </Reveal>
        <Reveal className="mt-8">
          <div role="tablist" aria-label="Strategy pillars" className="flex flex-wrap justify-center gap-3">
            {pillars.map((p, i) => (
              <button
                key={p.label}
                role="tab"
                aria-selected={i === active}
                onClick={() => dispatch(selectTab({ id, index: i }))}
                className={`rounded-pill px-6 py-3 text-body font-medium transition-colors ${
                  i === active ? "bg-primary text-white" : "bg-white text-gray-1 shadow-sm hover:text-primary"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal key={pillar.label} className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <Placeholder scene={pillar.scene} label={pillar.title} className="h-[300px] lg:h-[380px]" />
          <div>
            <h3 className="text-h2 font-medium text-ink">{pillar.title}</h3>
            <p className="mt-5 text-body-lg leading-[1.65] text-gray-2">{pillar.text}</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {pillar.stats.map((s) => (
                <div key={s.label} className="rounded-[8px] bg-white p-6 shadow-card">
                  <p className="text-h3 font-medium text-primary">{s.value}</p>
                  <p className="mt-2 text-small text-gray-2">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="text-body font-medium text-primary hover:underline">
                Learn More About Our Actions
              </a>
              <span className="text-divider">|</span>
              <a href="#" className="text-body font-medium text-primary hover:underline">
                All Strategies
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Reports & policies ---------- */
export function ReportsSection({
  id,
  reports,
}: {
  id: string;
  reports: { title: string; year: string; kind: string; scene: string }[];
}) {
  const dispatch = useAppDispatch();
  const tab = useAppSelector((s) => s.tabs[id] ?? 0); // 0 = reports, 1 = policies
  const kinds = ["report", "policy"];
  const shown = reports.filter((r) => r.kind === kinds[tab]);

  return (
    <section id="reports" className="mx-auto max-w-[1600px] scroll-mt-[170px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <AccentBar />
        <h2 className="text-h2 font-medium leading-[1.2] text-center text-gray-1">
          Latest Reports & Policies
        </h2>
      </Reveal>
      <Reveal className="mt-8">
        <div role="tablist" aria-label="Reports and policies" className="flex justify-center gap-3">
          {["Sustainability Report", "Sustainability Policy"].map((label, i) => (
            <button
              key={label}
              role="tab"
              aria-selected={tab === i}
              onClick={() => dispatch(selectTab({ id, index: i }))}
              className={`rounded-pill px-8 py-3 text-body font-medium transition-colors ${
                tab === i ? "bg-primary text-white" : "bg-[#f4f4f4] text-gray-1 hover:bg-[#eaeaea]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <Reveal key={r.title} className="overflow-hidden rounded-[8px] bg-white shadow-card">
            <Placeholder scene={r.scene} label={r.title} rounded="rounded-none" className="h-[220px]" />
            <div className="p-6">
              <p className="text-small font-medium uppercase tracking-wider text-gray-2">{r.year}</p>
              <h3 className="mt-2 text-body-lg font-medium text-ink">{r.title}</h3>
              <button className="mt-4 inline-flex items-center gap-2 text-body font-medium text-primary hover:underline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
                </svg>
                Download
              </button>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <ButtonOutline href="#">Explore More</ButtonOutline>
      </Reveal>
    </section>
  );
}

/* ---------- Honors carousel ---------- */
export function HonorsCarousel({
  id,
  items,
}: {
  id: string;
  items: { title: string; scene: string }[];
}) {
  const dispatch = useAppDispatch();
  const index = useAppSelector((s) => s.carousel[id] ?? 0);
  const visible = 4;
  const maxIndex = Math.max(0, items.length - visible);
  const shown = items.slice(index, index + visible);

  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
        <Reveal>
          <SectionHeading>Honors and Rewards</SectionHeading>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {shown.map((h) => (
            <Reveal key={h.title} className="rounded-[8px] bg-white p-6 text-center shadow-card">
              <Placeholder scene={h.scene} label={h.title} className="h-[160px]" rounded="rounded-[8px]" />
              <p className="mt-4 text-body font-medium text-ink">{h.title}</p>
            </Reveal>
          ))}
        </div>
        {maxIndex > 0 && (
          <div className="mt-8 flex justify-center gap-4">
            <button
              aria-label="Previous honors"
              disabled={index === 0}
              onClick={() => dispatch(prev({ id, count: maxIndex + 1 }))}
              className="grid h-16 w-16 place-items-center rounded-full border border-primary text-primary disabled:border-disabled disabled:text-disabled disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5m7-7-7 7 7 7" />
              </svg>
            </button>
            <button
              aria-label="Next honors"
              disabled={index >= maxIndex}
              onClick={() => dispatch(next({ id, count: maxIndex + 1 }))}
              className="grid h-16 w-16 place-items-center rounded-full border border-primary text-primary disabled:border-disabled disabled:text-disabled disabled:opacity-50"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
