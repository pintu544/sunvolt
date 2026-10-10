import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop, { ChatButton } from "@/components/BackToTop";
import RevealInit from "@/components/RevealInit";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SUNVOLT — Clean Power for All",
  description:
    "SUNVOLT delivers solar, storage and clean-energy solutions for homes, businesses and utilities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ReduxProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <ChatButton />
          <RevealInit />
        </ReduxProvider>
      </body>
    </html>
  );
}
