import Link from "next/link";
import { footerColumns } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] text-gray-1">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 px-[3%] py-16 md:grid-cols-3 lg:grid-cols-5">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-5 text-body-lg font-semibold text-ink">{col.title}</h3>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-body text-gray-1 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1600px] px-[3%]">
        <Link
          href="/"
          aria-label="SUNVOLT home"
          className="inline-block text-[26px] font-extrabold tracking-[0.08em] text-primary"
        >
          SUNVOLT
        </Link>
        <div className="mt-6 border-t border-divider pt-6 pb-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <span className="text-body text-gray-1">© 2026 SUNVOLT. All Rights Reserved.</span>
            <div className="flex items-center gap-8 text-body text-gray-1">
              <Link href="#" className="hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
