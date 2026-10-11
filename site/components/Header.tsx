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
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  const closeMenu = () => {
    setMobileSub(null);
    dispatch(closeMobileMenu());
  };

  return (
    <>
      {/* Row 1: STICKY — region (left) | wordmark (center) | tools (right) */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="mx-auto grid h-[clamp(52px,3.9vw,75px)] max-w-[1920px] grid-cols-[1fr_auto_1fr] items-center px-[3%]">
          {/* Region: text label on desktop, flag only on mobile (matches reference) */}
          <button className="flex items-center gap-2 justify-self-start text-gray-1" style={{ fontSize: "clamp(13px, 1.04vw, 20px)" }}>
            <span className="inline-block h-[14px] w-[22px] rounded-[2px] bg-gradient-to-b from-[#ff9933] via-white to-[#138808]" />
            <span className="hidden xl:inline">India</span>
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

        {/* Mobile tools: search + hamburger (right), like the reference */}
        <div className="absolute right-[3%] top-1/2 flex -translate-y-1/2 items-center gap-4 text-ink xl:hidden">
          <button aria-label="Search" className="hover:text-primary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button aria-label="Open menu" onClick={() => dispatch(toggleMobileMenu())}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        {/* Mobile menu: full-screen drill-down panel (matches reference) */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[60] flex flex-col bg-white xl:hidden">
            {/* Close */}
            <div className="flex h-[clamp(52px,3.9vw,75px)] items-center justify-end px-[5%]">
              <button aria-label="Close menu" onClick={closeMenu} className="text-primary">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            {mobileSub === null ? (
              /* Main list */
              <nav className="flex-1 overflow-y-auto px-[6%]" aria-label="Mobile">
                {mainNav.map((item) =>
                  item.children ? (
                    <button
                      key={item.label}
                      onClick={() => setMobileSub(item.label)}
                      className="flex w-full items-center justify-between border-b border-divider py-4 text-left text-[17px] font-normal text-ink"
                    >
                      {item.label}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex w-full items-center justify-between border-b border-divider py-4 text-left text-[17px] font-normal text-ink"
                    >
                      {item.label}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </Link>
                  )
                )}
              </nav>
            ) : (
              /* Submenu drill-down */
              (() => {
                const item = mainNav.find((i) => i.label === mobileSub)!;
                return (
                  <nav className="flex-1 overflow-y-auto px-[6%]" aria-label="Mobile submenu">
                    <div className="flex items-center gap-3 border-b border-divider py-4">
                      <button aria-label="Back" onClick={() => setMobileSub(null)} className="text-ink">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m14 6-6 6 6 6" />
                        </svg>
                      </button>
                    </div>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-1 border-b border-divider py-4 text-[17px] font-normal text-ink"
                    >
                      {item.label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="m9 6 6 6-6 6" />
                      </svg>
                    </Link>
                    {item.children?.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={closeMenu}
                        className="block border-b border-divider py-4 pl-2 text-[16px] font-normal text-gray-1"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </nav>
                );
              })()
            )}

            {/* LOGIN pill */}
            <div className="flex justify-center pb-10 pt-4">
              <button className="w-[42%] rounded-full bg-[#f1f1f1] py-3.5 text-[15px] font-medium tracking-[0.08em] text-gray-1">
                LOGIN
              </button>
            </div>
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
