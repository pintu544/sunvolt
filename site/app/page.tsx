import type { Metadata } from "next";
import HeroCarousel from "@/components/Hero";
import {
  PromoBanner,
  IntroSection,
  StatsBand,
  SegmentTabs,
  WhySection,
  CommitmentCards,
  SplitRows,
  NewsCards,
  FollowSection,
} from "@/components/Sections";
import { heroSlides } from "@/content/home";

export const metadata: Metadata = {
  title: "SUNVOLT — Clean Power for All",
  description:
    "SUNVOLT delivers solar, storage and clean-energy solutions for homes, businesses and utilities across 180+ countries.",
};

export default function HomePage() {
  return (
    <>
      <HeroCarousel
        id="home-hero"
        slides={heroSlides}
        align="center"
        titleSize="text-h1"
        textPosition="bottom"
        showCta={false}
      />
      <PromoBanner />
      <IntroSection />
      <StatsBand />
      <SegmentTabs />
      <WhySection />
      <CommitmentCards />
      <SplitRows />
      <NewsCards />
      <FollowSection />
    </>
  );
}
