import type { Metadata } from "next";
import HeroCarousel from "@/components/Hero";
import Accordion from "@/components/Accordion";
import { ScenarioTabs, ProductCarousel } from "@/components/Solution";
import { NewsCards } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { ciSolution } from "@/content/solutions";

export const metadata: Metadata = {
  title: "C&I PV Solution — SUNVOLT",
  description:
    "Commercial and industrial solar solutions: high-efficiency inverters, smart O&M and fast returns for business rooftops.",
};

export default function CiPvSolutionPage() {
  const c = ciSolution;
  return (
    <>
      <HeroCarousel id="ci-hero" slides={[c.hero]} align="left" titleSize="text-display" />
      <Accordion id="ci-accordion" heading={c.accordionHeading} items={c.accordion} />
      <ScenarioTabs id="ci-scenarios" heading={c.scenariosHeading} scenarios={c.scenarios} />
      <ProductCarousel id="ci-products" heading={c.productsHeading} products={c.products} />
      <NewsCards title="Latest News & Events" items={c.news} />
      <div id="contact">
        <ContactForm id="ci-contact" heading="Contact Us" />
      </div>
    </>
  );
}
