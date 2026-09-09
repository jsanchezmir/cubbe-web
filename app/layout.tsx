import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";

const bric = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bric" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: "Cubbe — Know where everything lives", template: "%s — Cubbe" },
  description: "A calmer way to organize your belongings with smart, photo-powered cataloging.",
  metadataBase: new URL("https://jsanchezmir.github.io/cubbe-web/"),
  openGraph: {
    title: "Cubbe — Know where everything lives",
    description: "Organize your home, storage, and shared spaces with Cubbe.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bric.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
