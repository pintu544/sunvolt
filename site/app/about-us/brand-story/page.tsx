import type { Metadata } from "next";
import { VideoHero, MilestoneCarousel, DecadeTabs, MissionCards, AwardCards } from "@/components/Brand";
import Accordion from "@/components/Accordion";
import { NewsCards } from "@/components/Sections";
import { brandStory } from "@/content/brand";

export const metadata: Metadata = {
  title: "Brand Story — SUNVOLT",
  description:
    "Three decades of clean-energy innovation: our mission, milestones, history and recognitions.",
};

export default function BrandStoryPage() {
  const b = brandStory;
  return (
    <>
      <VideoHero
        eyebrow={b.hero.eyebrow}
        title={b.hero.title}
        text={b.hero.text}
      />
      <MissionCards heading={b.mission.heading} cards={b.mission.cards} />
      <Accordion id="brand-values" heading="What Guides Us" items={b.mission.values} />
      <MilestoneCarousel id="brand-milestones" items={b.milestones} />
      <AwardCards items={b.awards} />
      <DecadeTabs id="brand-history" heading="Our History" eras={b.history} />
      <NewsCards title="Latest News" items={b.news} />
    </>
  );
}
