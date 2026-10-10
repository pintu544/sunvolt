"use client";

import { useEffect } from "react";
import { goTo, next } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Placeholder, ButtonOutline } from "./ui";

export interface HeroSlide {
  eyebrow?: string;
  title: string;
  text?: string;
  cta?: { label: string; href: string };
  scene: string;
}

/** Full-viewport hero carousel. `id` keys the Redux carousel state.
 *  textPosition "bottom" matches the home hero (bottom-anchored headline). */
export default function HeroCarousel({
  id,
  slides,
  align = "center",
  titleSize = "text-h1",
  textPosition = "center",
}: {
  id: string;
  slides: HeroSlide[];
  align?: "center" | "left";
  titleSize?: string;
  textPosition?: "center" | "bottom";
  showCta?: boolean;
}) {
  const dispatch = useAppDispatch();
  const index = useAppSelector((s) => s.carousel[id] ?? 0);

  useEffect(() => {
    const t = setInterval(
      () => dispatch(next({ id, count: slides.length })),
      7000
    );
    return () => clearInterval(t);
  }, [dispatch, id, slides.length, index]);

  const slide = slides[index];
  const centered = align === "center";

  return (
    <section
      className={
        textPosition === "bottom"
          ? "relative h-[calc(100dvh-clamp(52px,3.9vw,75px))] min-h-[560px] overflow-hidden xl:h-[calc(100dvh-clamp(104px,7.8vw,150px))]"
          : "relative h-dvh min-h-[640px] overflow-hidden"
      }
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Placeholder scene={s.scene} label="" rounded="rounded-none" className="h-full w-full" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div
        className={`relative z-10 mx-auto flex h-full max-w-[1600px] flex-col px-[7%] ${
          textPosition === "bottom"
            ? "items-center justify-end pb-[100px] text-center"
            : "justify-center pt-[10vh] " + (centered ? "items-center text-center" : "items-start text-left")
        }`}
      >
        {textPosition !== "bottom" && (
          <p key={`e-${index}`} className="text-body-lg font-medium uppercase tracking-[0.2em] text-white/80">
            {slide.eyebrow}
          </p>
        )}
        <h1
          key={`t-${index}`}
          className={`${titleSize} mt-4 font-medium leading-[1.15] text-white`}
        >
          {slide.title}
        </h1>
        {textPosition !== "bottom" && (
          <p key={`x-${index}`} className="mt-6 max-w-[640px] text-body-lg leading-[1.55] text-white/90">
            {slide.text}
          </p>
        )}
        {textPosition !== "bottom" && slide.cta && (
          <div className="mt-10">
            <ButtonOutline href={slide.cta.href} className="!border-white !text-white hover:!bg-white hover:!text-ink">
              {slide.cta.label}
            </ButtonOutline>
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => dispatch(goTo({ id, index: i }))}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
