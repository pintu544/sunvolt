"use client";

import Link from "next/link";
import { selectTab } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Placeholder, Reveal, SectionHeading, ButtonPrimary } from "./ui";

export interface Segment {
  id: string;
  label: string;
  title: string;
  text: string;
  href: string;
  scene: string;
}

export default function SegmentTabs({ id, segments }: { id: string; segments: Segment[] }) {
  const dispatch = useAppDispatch();
  const active = useAppSelector((s) => s.tabs[id] ?? 0);
  const seg = segments[active];

  return (
    <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Customer segments">
          {segments.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => dispatch(selectTab({ id, index: i }))}
              className={`rounded-pill px-8 py-3 text-body font-medium transition-colors ${
                i === active
                  ? "bg-primary text-white"
                  : "bg-[#f4f4f4] text-gray-1 hover:bg-[#eaeaea]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <Placeholder scene={seg.scene} label={seg.title} className="h-[320px] lg:h-[420px]" />
        <div key={seg.id}>
          <h3 className="text-h2 font-medium leading-[1.2] text-ink">{seg.title}</h3>
          <p className="mt-5 text-body-lg leading-[1.6] text-gray-2">{seg.text}</p>
          <div className="mt-8">
            <ButtonPrimary href={seg.href}>Explore More</ButtonPrimary>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function CommitmentCards({
  items,
}: {
  items: { title: string; text: string; icon: string }[];
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <SectionHeading>Our Commitment to Innovation and Excellence</SectionHeading>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((c) => (
          <Reveal key={c.title} className="rounded-[8px] bg-white p-8 shadow-card">
            <div className="grid h-14 w-14 place-items-center rounded-[12px] bg-primary/10 text-primary">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <h3 className="mt-6 text-body-lg font-medium text-ink">{c.title}</h3>
            <p className="mt-3 text-body leading-[1.6] text-gray-2">{c.text}</p>
            <Link href="#" className="mt-5 inline-block text-body font-medium text-primary hover:underline">
              Explore More
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SplitRows({
  rows,
}: {
  rows: { title: string; text: string; href: string; scene: string }[];
}) {
  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
        <Reveal>
          <SectionHeading>Together, We Forge a Greener Tomorrow</SectionHeading>
        </Reveal>
        <div className="mt-12 space-y-12">
          {rows.map((r, i) => (
            <Reveal
              key={r.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Placeholder scene={r.scene} label={r.title} className="h-[280px] lg:h-[360px]" />
              <div>
                <h3 className="text-h2 font-medium leading-[1.2] text-ink">{r.title}</h3>
                <p className="mt-5 text-body-lg leading-[1.6] text-gray-2">{r.text}</p>
                <div className="mt-8">
                  <ButtonPrimary href={r.href}>Explore More</ButtonPrimary>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsCards({
  title = "Trending News & Events",
  items,
}: {
  title?: string;
  items: { tag: string; title: string; date: string; scene: string }[];
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-[3%] py-[clamp(3rem,3.125vw,3.75rem)]">
      <Reveal>
        <SectionHeading>{title}</SectionHeading>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {items.map((n) => (
          <Reveal key={n.title} as="article" className="overflow-hidden rounded-[8px] bg-white shadow-card">
            <Placeholder scene={n.scene} label={n.tag} rounded="rounded-none" className="h-[180px]" />
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
    </section>
  );
}
