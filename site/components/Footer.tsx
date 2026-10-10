import Link from "next/link";
import { footerColumns, socialLinks } from "@/content/site";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: (
    <path d="M6.5 8.5v12M6.5 5.5v.1M12 20.5v-6.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5v6.5" />
  ),
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
  Facebook: <path d="M14 8h2V4.5h-2.5C11 4.5 9.5 6 9.5 8.5V11H7v3.5h2.5V21H13v-6.5h2l.5-3.5h-2.5V8.7c0-.4.3-.7.7-.7Z" />,
  X: <path d="M5 4l14 16M19 4L5 20" />,
  YouTube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.8v4.4L14.5 12l-4-2.2Z" fill="currentColor" />
    </>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-gray-1">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 px-[3%] py-16 md:grid-cols-3 lg:grid-cols-5">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-5 text-body-lg font-medium text-ink">{col.title}</h3>
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

      <div className="border-t border-divider">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 px-[3%] py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="text-body-lg font-medium text-ink">Follow SUNVOLT</span>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-divider text-gray-1 transition-colors hover:border-primary hover:text-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {SOCIAL_ICONS[s.label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 text-small">
            <span>© 2026 SUNVOLT. All Rights Reserved.</span>
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
