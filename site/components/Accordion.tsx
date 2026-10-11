"use client";

import { toggleItem } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Placeholder, Reveal } from "./ui";

export interface AccordionItem {
  title: string;
  text: string;
  link: { label: string; href: string };
  scene: string;
}

export default function Accordion({
  id,
  heading,
  items,
}: {
  id: string;
  heading: string;
  items: AccordionItem[];
}) {
  const dispatch = useAppDispatch();
  const stored = useAppSelector((s) => s.accordion[id]);
  const open = stored === undefined ? 0 : stored;

  return (
    <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <h2 className="text-h2 font-medium leading-[1.2] text-center text-gray-1">
          {heading}
        </h2>
      </Reveal>
      <div className="mx-auto mt-10 max-w-[1100px]">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.title} className="border-b border-divider first:border-t">
              <button
                onClick={() => dispatch(toggleItem({ id, index: i }))}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-10 text-left"
              >
                <span className="text-lead font-normal text-ink">{item.title}</span>
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${
                    isOpen ? "border-primary text-primary" : "border-divider text-gray-1"
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {isOpen ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  isOpen ? "grid-rows-[1fr] pb-10 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid items-center gap-8 md:grid-cols-2">
                    <Placeholder scene={item.scene} label={item.title} className="h-[240px]" />
                    <div>
                      <p className="text-body leading-[1.7] text-gray-2">{item.text}</p>
                      <a href={item.link.href} className="mt-4 inline-block text-body font-medium text-primary hover:underline">
                        {item.link.label}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
