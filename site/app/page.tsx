import type { Metadata } from "next";
import HeroCarousel from "@/components/Hero";
import SegmentTabs, { CommitmentCards, SplitRows, NewsCards } from "@/components/Sections";
import { Placeholder, Reveal, ButtonOutline } from "@/components/ui";
import { heroSlides, stats, segments, commitments, splitRows, news } from "@/content/home";

export const metadata: Metadata = {
  title: "SUNVOLT — Clean Power for All",
  description:
    "SUNVOLT delivers solar, storage and clean-energy solutions for homes, businesses and utilities across 180+ countries.",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel id="home-hero" slides={heroSlides} align="center" />

      {/* Stats band */}
      <section className="border-b border-divider bg-white">
        <div className="mx-auto max-w-[1600px] px-[3%] py-[clamp(2.5rem,3.125vw,3.75rem)]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <Reveal key={s.label} className="text-center">
                <p className="text-h1 font-medium text-ink">
                  {s.value}
                  {s.unit && <span className="text-h3 text-primary"> {s.unit}</span>}
                </p>
                <p className="mt-2 text-body text-gray-1">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <ButtonOutline href="/about-us/brand-story" className="min-w-[270px]">
              Discover Who We Are
            </ButtonOutline>
          </Reveal>
        </div>
      </section>

      <SegmentTabs id="home-segments" segments={segments} />

      <CommitmentCards items={commitments} />

      <SplitRows rows={splitRows} />

      <NewsCards items={news} />

      {/* Bottom CTA band */}
      <section className="relative overflow-hidden">
        <Placeholder scene="solar-farm" label="" rounded="rounded-none" className="absolute inset-0 h-full" />
        <div className="absolute inset-0 bg-black/45" />
        <Reveal className="relative mx-auto max-w-[1600px] px-[3%] py-24 text-center">
          <h2 className="text-h1 font-medium leading-[1.2] text-white">
            Ready to Start Your Clean Energy Journey?
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-body-lg text-white/85">
            Talk to our team about the right solar and storage solution for your home or business.
          </p>
          <div className="mt-8">
            <ButtonOutline href="#" className="!border-white !text-white hover:!bg-white hover:!text-ink">
              Contact Us
            </ButtonOutline>
          </div>
        </Reveal>
      </section>
    </>
  );
}
