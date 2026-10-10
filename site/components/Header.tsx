"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/content/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeMobileMenu, toggleMobileMenu } from "@/store/store";

function Wordmark() {
  return (
    <Link
      href="/"
      aria-label="SUNVOLT home"
      className="text-[30px] font-extrabold tracking-[0.08em] text-primary"
      style={{ fontSize: "clamp(20px, 1.5625vw, 30px)" }}
    >
      SUNVOLT
    </Link>
  );
}

export default function Header() {
  const dispatch = useAppDispatch();
  const mobileOpen = useAppSelector((s) => s.ui.mobileMenuOpen);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  return (
    <>
      {/* Row 1: STICKY — region (left) | wordmark (center) | tools (right) */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="mx-auto grid h-[clamp(52px,3.9vw,75px)] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-[3%]">
          <button className="flex items-center gap-2 justify-self-start text-gray-1" style={{ fontSize: "clamp(13px, 1.04vw, 20px)" }}>
            <span className="inline-block h-[14px] w-[22px] rounded-[2px] bg-gradient-to-b from-[#ff9933] via-white to-[#138808]" />
            India
          </button>
          <Wordmark />
          <div className="hidden items-center gap-5 justify-self-end text-gray-1 xl:flex">
            <button aria-label="Search" className="hover:text-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <button aria-label="Account" className="hover:text-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            </button>
            <button
              className="font-medium tracking-[0.12em] hover:text-primary"
              style={{ fontSize: "clamp(13px, 1.04vw, 20px)" }}
            >
              LOGIN
            </button>
          </div>
        </div>

        {/* Mobile hamburger (in row 1, right) */}
        <button
          className="absolute right-[3%] top-1/2 -translate-y-1/2 py-1 xl:hidden"
          aria-label="Open menu"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-divider bg-white xl:hidden">
            <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
              {mainNav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => dispatch(closeMobileMenu())}
                    className="block border-b border-divider py-3 text-body font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      onClick={() => dispatch(closeMobileMenu())}
                      className="block py-2 pl-4 text-body text-gray-1"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Row 2: STATIC nav — scrolls away */}
      <div className="hidden justify-center bg-white xl:flex">
        <nav className="flex h-[clamp(48px,3.9vw,75px)] items-center gap-10" aria-label="Main">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDrop(item.children ? item.label : null)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <Link
                href={item.href}
                className="group relative flex h-full items-center font-medium text-gray-1 hover:text-ink"
                style={{ fontSize: "clamp(14px, 1.04vw, 20px)" }}
              >
                {item.label}
                <span className="absolute bottom-3 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
              {item.children && openDrop === item.label && (
                <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 rounded-[8px] bg-white p-2 shadow-card">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block rounded-[6px] px-4 py-2.5 text-body text-gray-1 hover:bg-[#fafafa] hover:text-primary"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
