import type { Metadata } from "next";
import HeroCarousel from "@/components/Hero";
import Accordion from "@/components/Accordion";
import { ScenarioTabs, ProductCarousel } from "@/components/Solution";
import { NewsCards } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";
import { residentialSolution } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Residential PV + ESS + EV Charging Solution — SUNVOLT",
  description:
    "Home solar, battery storage and EV charging in one integrated system for energy independence.",
};

export default function ResidentialSolutionPage() {
  const c = residentialSolution;
  return (
    <>
      <HeroCarousel id="res-hero" slides={[c.hero]} align="left" titleSize="text-display" />
      <Accordion id="res-accordion" heading={c.accordionHeading} items={c.accordion} />
      <ScenarioTabs id="res-scenarios" heading={c.scenariosHeading} scenarios={c.scenarios} />
      <ProductCarousel id="res-products" heading={c.productsHeading} products={c.products} />
      <NewsCards title="Latest News & Events" items={c.news} />
      <div id="contact">
        <ContactForm id="res-contact" heading="Contact Us" />
      </div>
    </>
  );
}
