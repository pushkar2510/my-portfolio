import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pushkar Gaikwad | Software Engineer — Nashik, India",
  description:
    "Pushkar Gaikwad — Software Engineer & Founding Partner at Agilique Solutions LLP, Nashik. Building PlaceTrix, Certify AI & scalable web/mobile platforms with React, Flutter & TypeScript.",
  keywords: [
    "Pushkar Gaikwad",
    "Software Engineer",
    "Nashik",
    "Agilique Solutions",
    "PlaceTrix",
    "Full Stack Developer",
    "React Developer",
    "Flutter Developer",
    "Web Developer India",
    "Mobile App Developer",
    "Portfolio",
  ],
  authors: [{ name: "Pushkar Gaikwad", url: "https://pushkarbuilds.tech" }],
  creator: "Pushkar Gaikwad",
  publisher: "Pushkar Gaikwad",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://pushkarbuilds.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pushkar Gaikwad | Software Engineer — Nashik, India",
    description:
      "Software Engineer & Founding Partner at Agilique Solutions LLP. Building PlaceTrix, Certify AI & scalable full-stack solutions.",
    url: "https://pushkarbuilds.tech",
    siteName: "Pushkar Gaikwad — Portfolio",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/Pushkar.png",
        width: 1200,
        height: 630,
        alt: "Pushkar Gaikwad — Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <JsonLd />
      </head>
      <body className="antialiased selection:bg-amber-400/20 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
