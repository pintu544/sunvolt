"use client";

import { prev, next, goTo, selectTab } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Placeholder, Reveal, SectionHeading, ButtonPrimary } from "./ui";

/* ---------- Video hero placeholder (brand story) ---------- */
export function VideoHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative flex h-dvh min-h-[640px] items-center justify-center overflow-hidden">
      <Placeholder scene="dark" label="" rounded="rounded-none" className="absolute inset-0 h-full" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto max-w-[800px] px-[7%] pt-[12vh] text-center">
        <p className="text-body-lg font-medium uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
        <h1 className="mt-4 text-h1 font-medium leading-[1.15] text-white">{title}</h1>
        <p className="mx-auto mt-6 max-w-[560px] text-body-lg leading-[1.55] text-white/90">{text}</p>
        {/* play button (placeholder for brand film) */}
        <button
          aria-label="Play brand film (placeholder)"
          className="mx-auto mt-10 grid h-24 w-24 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform hover:scale-105"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ---------- Glass milestone timeline carousel ---------- */
export function MilestoneCarousel({
  id,
  items,
}: {
  id: string;
  items: { years: string; text: string }[];
}) {
  const dispatch = useAppDispatch();
  const index = useAppSelector((s) => s.carousel[id] ?? 0);

  return (
    <section id="milestones" className="relative overflow-hidden py-[clamp(4rem,5vw,6rem)]">
      <Placeholder scene="dark" label="" rounded="rounded-none" className="absolute inset-0 h-full" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-[1600px] px-[3%]">
        <Reveal>
          <SectionHeading tone="white">Milestones</SectionHeading>
        </Reveal>
        <Reveal className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((m) => (
                <div key={m.years} className="w-full shrink-0 px-2">
                  <div className="mx-auto max-w-[520px] rounded-[30px] bg-[#3F3F60]/30 p-[clamp(2rem,3.125vw,3.75rem)] backdrop-blur-[10px]">
                    <h3 className="text-h3 font-medium text-primary" style={{ fontSize: "clamp(2rem, 2.5vw, 3rem)" }}>
                      {m.years}
                    </h3>
                    <p className="mt-6 text-lead leading-[2] text-white">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="Previous milestone"
            onClick={() => dispatch(prev({ id, count: items.length }))}
            className="absolute left-0 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:grid"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next milestone"
            onClick={() => dispatch(next({ id, count: items.length }))}
            className="absolute right-0 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:grid"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div className="mt-8 flex justify-center gap-3">
            {items.map((m, i) => (
              <button
                key={m.years}
                aria-label={`Go to milestone ${m.years}`}
                onClick={() => dispatch(goTo({ id, index: i }))}
                className={`h-2 rounded-full transition-all ${i === index ? "w-10 bg-white" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Decade tabs (Our History) ---------- */
export function DecadeTabs({
  id,
  heading,
  eras,
}: {
  id: string;
  heading: string;
  eras: { decade: string; years: string; text: string }[];
}) {
  const dispatch = useAppDispatch();
  const active = useAppSelector((s) => s.tabs[id] ?? 0);
  const era = eras[active];

  return (
    <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <SectionHeading>{heading}</SectionHeading>
      </Reveal>
      <Reveal className="mt-10">
        <div role="tablist" aria-label={heading} className="flex flex-wrap justify-center gap-3">
          {eras.map((e, i) => (
            <button
              key={e.decade}
              role="tab"
              aria-selected={i === active}
              onClick={() => dispatch(selectTab({ id, index: i }))}
              className={`rounded-pill px-8 py-3 text-body font-medium transition-colors ${
                i === active ? "bg-primary text-white" : "bg-[#f4f4f4] text-gray-1 hover:bg-[#eaeaea]"
              }`}
            >
              {e.decade}
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal key={era.decade} className="mx-auto mt-10 max-w-[800px] text-center">
        <p className="text-h3 font-medium text-primary">{era.years}</p>
        <p className="mt-5 text-body-lg leading-[1.7] text-gray-2">{era.text}</p>
        {/* year timeline rail */}
        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-divider" />
          <div className="relative flex justify-between">
            {eras.map((e, i) => (
              <button
                key={e.decade}
                onClick={() => dispatch(selectTab({ id, index: i }))}
                aria-label={`Show ${e.decade}`}
                className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 text-small font-medium transition-colors ${
                  i === active
                    ? "border-primary bg-primary text-white"
                    : "border-divider bg-white text-gray-2 hover:border-primary"
                }`}
              >
                {e.decade.slice(2)}
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Mission / vision split cards ---------- */
export function MissionCards({
  heading,
  cards,
}: {
  heading: string;
  cards: { title: string; text: string; scene: string }[];
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <SectionHeading>{heading}</SectionHeading>
      </Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {cards.map((c) => (
          <Reveal key={c.title} className="overflow-hidden rounded-[20px] bg-white shadow-card">
            <Placeholder scene={c.scene} label={c.title} rounded="rounded-none" className="h-[280px]" />
            <div className="p-8">
              <h3 className="text-h3 font-medium text-ink">{c.title}</h3>
              <p className="mt-4 text-body-lg leading-[1.65] text-gray-2">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Awards ---------- */
export function AwardCards({ items }: { items: { title: string; text: string; scene: string }[] }) {
  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
        <Reveal>
          <SectionHeading>Awards and Recognitions</SectionHeading>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-[1000px] gap-8 md:grid-cols-2">
          {items.map((a) => (
            <Reveal key={a.title} className="rounded-[8px] bg-white p-10 text-center shadow-card">
              <Placeholder scene={a.scene} label={a.title} className="mx-auto h-[140px] w-[140px] !rounded-full" />
              <h3 className="mt-6 text-body-lg font-medium text-ink">{a.title}</h3>
              <p className="mt-3 text-body text-gray-2">{a.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonPrimary href="#">Explore More</ButtonPrimary>
        </Reveal>
      </div>
    </section>
  );
}
