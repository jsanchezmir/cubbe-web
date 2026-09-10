import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";

const bric = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bric" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: "Cubbe — Know where everything lives", template: "%s — Cubbe" },
  description: "A calmer way to organize your belongings with smart, photo-powered cataloging.",
  metadataBase: new URL("https://cubbe.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cubbe — Know where everything lives",
    description: "Organize your home, storage, and shared spaces with Cubbe.",
    type: "website",
    url: "https://cubbe.app",
    siteName: "Cubbe",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cubbe — Know where everything lives" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cubbe — Know where everything lives",
    description: "Organize your home, storage, and shared spaces with Cubbe.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bric.variable} ${mono.variable}`}><script dangerouslySetInnerHTML={{ __html: `(() => { try { const theme = localStorage.getItem("cubbe-theme"); document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light"; } catch (_) { document.documentElement.dataset.theme = "light"; } })()` }} />{children}</body>
    </html>
  );
}
