"use client";

import { selectTab, prev, next } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Placeholder, Reveal, ButtonPrimary, ButtonOutline } from "./ui";

/* ---------- Feature sections: centered H2 + text + big rounded banner (matches reference) ---------- */
export interface FeatureItem {
  title: string;
  text: string;
  scene: string;
}

export function FeatureSections({ heading, items }: { heading: string; items: FeatureItem[] }) {
  return (
    <>
      <section className="mx-auto max-w-[1600px] px-[3%] pt-[clamp(3rem,5vw,6rem)] text-center">
        <Reveal>
          <h2 className="font-medium leading-[1.2] text-gray-1" style={{ fontSize: "clamp(36px, 2.9vw, 56px)" }}>
            {heading}
          </h2>
        </Reveal>
      </section>
      {items.map((item) => (
        <section key={item.title} className="mx-auto max-w-[1920px] px-[clamp(16px,5.2vw,100px)] py-[clamp(2.5rem,4vw,5rem)] text-center">
          <Reveal>
            <h2 className="font-medium leading-[1.2] text-gray-1" style={{ fontSize: "clamp(36px, 2.9vw, 56px)" }}>
              {item.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[1000px] text-body-lg leading-[1.8] text-gray-2">{item.text}</p>
          </Reveal>
          <Reveal className="mt-10">
            <Placeholder
              scene={item.scene}
              label=""
              rounded="rounded-[40px]"
              className="h-[clamp(320px,36vw,640px)]"
            />
          </Reveal>
        </section>
      ))}
    </>
  );
}

/* ---------- Scenario tabs (image-top cards) ---------- */
export interface Scenario {
  label: string;
  title: string;
  text: string;
  scene: string;
}

export function ScenarioTabs({
  id,
  heading,
  scenarios,
}: {
  id: string;
  heading: string;
  scenarios: Scenario[];
}) {
  const dispatch = useAppDispatch();
  const active = useAppSelector((s) => s.tabs[id] ?? 0);

  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
        <Reveal>
          <h2 className="text-h2 font-medium leading-[1.2] text-center text-gray-1">{heading}</h2>
        </Reveal>
        <Reveal className="mt-8 flex flex-wrap justify-center gap-3" >
          <div role="tablist" aria-label={heading} className="flex flex-wrap justify-center gap-3">
            {scenarios.map((s, i) => (
              <button
                key={s.label}
                role="tab"
                aria-selected={i === active}
                onClick={() => dispatch(selectTab({ id, index: i }))}
                className={`rounded-pill px-8 py-3 text-body font-medium transition-colors ${
                  i === active ? "bg-primary text-white" : "bg-white text-gray-1 shadow-sm hover:text-primary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s, i) => (
            <Reveal
              key={s.label}
              className={`overflow-hidden rounded-[8px] bg-white shadow-card transition-opacity ${
                i === active ? "opacity-100" : "opacity-40"
              }`}
            >
              <Placeholder scene={s.scene} label={s.title} rounded="rounded-none" className="h-[260px]" />
              <div className="p-6">
                <h3 className="text-body-lg font-medium text-ink">{s.title}</h3>
                <p className="mt-3 text-small leading-[1.8] text-gray-2">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Product carousel ---------- */
export interface Product {
  tag: string;
  name: string;
  text: string;
  scene: string;
}

export function ProductCarousel({
  id,
  heading,
  products,
}: {
  id: string;
  heading: string;
  products: Product[];
}) {
  const dispatch = useAppDispatch();
  const index = useAppSelector((s) => s.carousel[id] ?? 0);
  const visible = 3;
  const maxIndex = Math.max(0, products.length - visible);

  const shown = products.slice(index, index + visible);

  return (
    <section id="products" className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <h2 className="text-h2 font-medium leading-[1.2] text-center text-gray-1">{heading}</h2>
      </Reveal>
      <div className="relative mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {shown.map((p) => (
            <Reveal key={p.name} className="rounded-[8px] bg-white p-8 shadow-card">
              <span className="inline-block rounded-pill bg-primary/10 px-4 py-1.5 text-small font-medium text-primary">
                {p.tag}
              </span>
              <Placeholder scene={p.scene} label={p.name} className="mt-6 h-[220px]" rounded="rounded-[8px]" />
              <h3 className="mt-6 text-h3 font-medium text-ink">{p.name}</h3>
              <p className="mt-3 text-body leading-[1.6] text-gray-2">{p.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonPrimary href="#">Learn More</ButtonPrimary>
                <ButtonOutline href="#">Documents & Installation</ButtonOutline>
              </div>
            </Reveal>
          ))}
        </div>
        {maxIndex > 0 && (
          <div className="mt-10 flex justify-center gap-4">
            <button
              aria-label="Previous products"
              disabled={index === 0}
              onClick={() => dispatch(prev({ id, count: maxIndex + 1 }))}
              className="grid h-20 w-20 place-items-center rounded-full border border-primary text-primary transition-opacity disabled:border-disabled disabled:text-disabled disabled:opacity-50"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5m7-7-7 7 7 7" />
              </svg>
            </button>
            <button
              aria-label="Next products"
              disabled={index >= maxIndex}
              onClick={() => dispatch(next({ id, count: maxIndex + 1 }))}
              className="grid h-20 w-20 place-items-center rounded-full border border-primary text-primary transition-opacity disabled:border-disabled disabled:text-disabled disabled:opacity-50"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
