export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

/* Top-level nav mirrors the source structure; submenu links are plausible
   approximations (source mega-menu content was not observable). */
export const mainNav: NavItem[] = [
  {
    label: "For Home",
    href: "/solution/residential-pv-ess-ev-charging-solution",
    children: [
      { label: "Residential PV + ESS + EV Solution", href: "/solution/residential-pv-ess-ev-charging-solution" },
      { label: "Products for Home", href: "/solution/residential-pv-ess-ev-charging-solution#products" },
    ],
  },
  {
    label: "For Business",
    href: "/solution/ci-pv-solution",
    children: [
      { label: "C&I PV Solution", href: "/solution/ci-pv-solution" },
      { label: "Products for Business", href: "/solution/ci-pv-solution#products" },
    ],
  },
  {
    label: "For Utility",
    href: "/solution/ci-pv-solution",
    children: [{ label: "Utility-Scale Solutions", href: "/solution/ci-pv-solution" }],
  },
  {
    label: "Partners",
    href: "#",
    children: [
      { label: "For Installers", href: "#" },
      { label: "For Distributors", href: "#" },
      { label: "Find a Distributor", href: "#" },
    ],
  },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "PV Inverters", href: "/solution/ci-pv-solution#products" },
      { label: "Energy Storage Systems", href: "/solution/residential-pv-ess-ev-charging-solution#products" },
      { label: "Smart Energy Products", href: "#" },
    ],
  },
  {
    label: "Service & Support",
    href: "#",
    children: [
      { label: "Service Stories", href: "#" },
      { label: "Product Documentation", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Warranty", href: "#" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  {
    label: "About Us",
    href: "/about-us/brand-story",
    children: [
      { label: "Brand Story", href: "/about-us/brand-story" },
      { label: "Technology & Innovation", href: "/about-us/brand-story" },
      { label: "News & Media", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Products & Solutions",
    links: [
      { label: "Solutions for Home", href: "/solution/residential-pv-ess-ev-charging-solution" },
      { label: "Solutions for Business", href: "/solution/ci-pv-solution" },
      { label: "Solutions for Utility", href: "/solution/ci-pv-solution" },
      { label: "PV Inverter", href: "/solution/ci-pv-solution#products" },
      { label: "Energy Storage System", href: "/solution/residential-pv-ess-ev-charging-solution#products" },
      { label: "Smart Energy Products", href: "#" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "SUNVOLT for Installers", href: "#" },
      { label: "SUNVOLT for Distributors", href: "#" },
      { label: "Find a Distributor", href: "#" },
    ],
  },
  {
    title: "Service & Support",
    links: [
      { label: "SUNVOLT Service", href: "#" },
      { label: "Service Stories", href: "#" },
      { label: "Installers Support", href: "#" },
      { label: "Product Documentation", href: "#" },
      { label: "Cases & Stories", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Warranty", href: "#" },
      { label: "Security Incident Response", href: "#" },
    ],
  },
  {
    title: "Sustainability",
    links: [
      { label: "Overview", href: "/sustainability" },
      { label: "Sustainability Strategy", href: "/sustainability#strategy" },
      { label: "Reports and Policies", href: "/sustainability#reports" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Brand Story", href: "/about-us/brand-story" },
      { label: "Technology and Innovation", href: "/about-us/brand-story" },
      { label: "Globalization", href: "#" },
      { label: "News & Media", href: "#" },
      { label: "Career", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact SUNVOLT", href: "#" },
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];
