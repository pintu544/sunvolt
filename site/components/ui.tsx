import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Buttons ---------- */
const btnBase =
  "inline-flex items-center justify-center rounded-pill font-medium transition-colors duration-300 text-body-lg px-10 py-[18px] min-w-[180px]";

export function ButtonPrimary({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${btnBase} bg-primary text-white hover:bg-primary-dark ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonOutline({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${btnBase} border border-primary text-primary bg-transparent hover:bg-primary hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  children,
  tone = "gray",
  className = "",
}: {
  children: ReactNode;
  tone?: "gray" | "white";
  className?: string;
}) {
  return (
    <h2
      className={`text-h1 font-medium leading-[1.2] text-center ${
        tone === "gray" ? "text-gray-1" : "text-white"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ---------- Orange accent bar (solution pages) ---------- */
export function AccentBar() {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="block h-[3px] w-10 bg-primary rounded-full" />
    </div>
  );
}

/* ---------- Section-break motifs ---------- */

/** Tall vertical orange divider — the recurring section-break motif. */
export function VDivider({ className = "h-[220px]" }: { className?: string }) {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <span className={`w-[2px] bg-primary ${className}`} />
    </div>
  );
}

/** Small orange double-dash accent used above split-card headings. */
export function OrangeDash() {
  return (
    <span className="block h-[5px] w-[34px] rounded-full bg-primary" aria-hidden="true" />
  );
}

/* ---------- Reveal-on-scroll wrapper ---------- */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  return (
    <Tag className={`reveal ${className}`} data-reveal>
      {children}
    </Tag>
  );
}

/* ---------- SVG placeholder scene ---------- */
const SCENES: Record<string, [string, string]> = {
  "solar-farm": ["#0e3a5d", "#ff6a00"],
  panels: ["#123a63", "#2f7fd1"],
  home: ["#1c4d3a", "#7fd18f"],
  factory: ["#3a3a4d", "#c9c9d6"],
  forest: ["#14402c", "#4caf7d"],
  product: ["#f2f4f7", "#ff6a00"],
  people: ["#4d3a2a", "#e8a25c"],
  dark: ["#101828", "#3f3f60"],
};

/* Dummy imagery (generated, similar in spirit to the reference site's photography) */
const DUMMY_IMAGES: Record<string, string> = {
  "solar-farm": "/dummy/solar-farm.jpg",
  panels: "/dummy/panels.jpg",
  home: "/dummy/home.jpg",
  factory: "/dummy/factory.jpg",
  forest: "/dummy/forest.jpg",
  product: "/dummy/product.jpg",
  people: "/dummy/people.jpg",
  dark: "/dummy/dark.jpg",
};

export function Placeholder({
  scene = "solar-farm",
  label,
  className = "",
  rounded = "rounded-[20px]",
}: {
  scene?: keyof typeof SCENES | string;
  label: string;
  className?: string;
  rounded?: string;
}) {
  const [bg, accent] = SCENES[scene] ?? SCENES["solar-farm"];
  const dummy = DUMMY_IMAGES[scene];
  if (dummy) {
    return (
      <div role="img" aria-label={label} className={`relative overflow-hidden ${rounded} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dummy}
          alt={label || scene}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {label ? (
          <span className="absolute bottom-3 left-4 text-small text-white font-medium drop-shadow">
            {label}
          </span>
        ) : null}
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${bg} 0%, ${accent}33 130%)`,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 600"
        aria-hidden="true"
      >
        <g fill="none" stroke={accent} strokeWidth="2">
          <circle cx="650" cy="120" r="60" />
          <path d="M0 450 L800 380" />
          <path d="M0 480 L800 420" />
          <rect x="120" y="300" width="180" height="100" rx="6" />
          <rect x="330" y="280" width="180" height="120" rx="6" />
          <rect x="540" y="310" width="140" height="90" rx="6" />
        </g>
      </svg>
      <span className="absolute bottom-3 left-4 text-small text-white/70 font-medium">
        {label}
      </span>
    </div>
  );
}
