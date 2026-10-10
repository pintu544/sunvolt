import type { Metadata } from "next";
import HeroCarousel from "@/components/Hero";
import { StickySubNav, TargetCards, StrategyTabs, ReportsSection, HonorsCarousel } from "@/components/Sustain";
import { Placeholder, Reveal, SectionHeading, ButtonOutline } from "@/components/ui";
import { sustainability } from "@/content/sustainability";

export const metadata: Metadata = {
  title: "Sustainability — SUNVOLT",
  description:
    "Green Mission, Better Life: our climate targets, sustainability strategy, reports and ESG contact.",
};

export default function SustainabilityPage() {
  const s = sustainability;
  return (
    <>
      <HeroCarousel id="sustain-hero" slides={[s.hero]} align="center" />
      <StickySubNav items={s.subnav} />
      <TargetCards items={s.targets} />
      <StrategyTabs id="sustain-pillars" pillars={s.pillars} />
      <ReportsSection id="sustain-reports" reports={s.reports} />
      <HonorsCarousel id="sustain-honors" items={s.honors} />

      {/* Latest news: 1 featured + 2 side */}
      <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
        <Reveal>
          <SectionHeading>Latest News</SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal as="article" className="overflow-hidden rounded-[8px] bg-white shadow-card">
            <Placeholder scene={s.news.featured.scene} label={s.news.featured.tag} rounded="rounded-none" className="h-[320px]" />
            <div className="p-8">
              <span className="inline-block rounded-pill bg-primary/10 px-3 py-1 text-small font-medium text-primary">
                {s.news.featured.tag}
              </span>
              <h3 className="mt-3 text-h3 font-medium text-ink">{s.news.featured.title}</h3>
              <p className="mt-3 text-body leading-[1.65] text-gray-2">{s.news.featured.text}</p>
              <p className="mt-4 text-small text-gray-2">{s.news.featured.date}</p>
            </div>
          </Reveal>
          <div className="grid gap-6">
            {s.news.side.map((n) => (
              <Reveal key={n.title} as="article" className="grid grid-cols-2 overflow-hidden rounded-[8px] bg-white shadow-card">
                <Placeholder scene={n.scene} label={n.tag} rounded="rounded-none" className="h-full min-h-[180px]" />
                <div className="p-6">
                  <span className="inline-block rounded-pill bg-primary/10 px-3 py-1 text-small font-medium text-primary">
                    {n.tag}
                  </span>
                  <h3 className="mt-3 text-body font-medium leading-[1.45] text-ink">{n.title}</h3>
                  <p className="mt-3 text-small text-gray-2">{n.date}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESG contact */}
      <section className="bg-[#fafafa]">
        <Reveal className="mx-auto max-w-[1600px] px-[3%] py-20 text-center">
          <SectionHeading>Contact Us</SectionHeading>
          <p className="mx-auto mt-5 max-w-[520px] text-body-lg text-gray-2">
            Questions about our sustainability performance? Reach out to our ESG team directly.
          </p>
          <div className="mt-8">
            <ButtonOutline href="mailto:esg@sunvolt.example">Email ESG Team</ButtonOutline>
          </div>
        </Reveal>
      </section>
    </>
  );
}
