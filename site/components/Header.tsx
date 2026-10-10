"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/content/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeMobileMenu, toggleMobileMenu } from "@/store/store";

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="SUNVOLT home">
      <span className="grid h-9 w-9 place-items-center rounded-[8px] bg-primary font-bold text-white text-body">
        S
      </span>
      <span className="text-h3 font-bold tracking-wide text-primary">
        SUNVOLT
      </span>
    </Link>
  );
}

export default function Header() {
  const dispatch = useAppDispatch();
  const mobileOpen = useAppSelector((s) => s.ui.mobileMenuOpen);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      {/* Utility row */}
      <div className="border-b border-divider">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-[3%] py-2">
          <button className="flex items-center gap-2 text-small text-gray-1">
            <span className="inline-block h-4 w-6 rounded-[2px] bg-gradient-to-b from-[#ff9933] via-white to-[#138808]" />
            India
          </button>
          <div className="flex items-center gap-5 text-small text-gray-1">
            <button aria-label="Search" className="hover:text-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
            <button aria-label="Account" className="hover:text-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
            </button>
            <button className="font-medium tracking-wide hover:text-primary">LOGIN</button>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-[3%]">
        <Wordmark />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDrop(item.children ? item.label : null)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <Link
                href={item.href}
                className="group relative flex items-center py-5 text-body font-medium text-gray-1 hover:text-ink"
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
        <button
          className="py-4 xl:hidden"
          aria-label="Open menu"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

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
    </header>
  );
}
