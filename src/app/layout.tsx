import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { siteContent } from "@/data/site-content";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const { brand } = siteContent;

const siteDescription =
  "Follow Colin's pursuit of becoming an MMA champion in a cinematic documentary series happening right now.";

const metadataBase = new URL(getSiteUrl());

export const metadata: Metadata = {
  metadataBase,
  title: `${brand.name} | Premium Documentary`,
  description: siteDescription,
  openGraph: {
    title: `${brand.name} | Premium Documentary`,
    description: siteDescription,
    url: "/",
    siteName: brand.name,
    images: [
      {
        url: "/brand/og.png",
        width: 2048,
        height: 1366,
        alt: `${brand.name} — ${brand.tagline}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Premium Documentary`,
    description: siteDescription,
    images: ["/brand/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
