import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pushkar Gaikwad | Developer Portfolio",
  description:
    "Founding Partner @ Agilique-Solutions LLP | Co-Founder @ Team-Radiant | Ex - Application Developer @ 360-View-Tech. Building scalable AI solutions, modern mobile apps & web platforms.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pushkar Gaikwad | Developer Portfolio",
    description:
      "Founding Partner @ Agilique-Solutions LLP | Co-Founder @ Team-Radiant | Full-Stack Mobile & Web Developer",
    url: "https://pushkarbuilds.tech",
    siteName: "Pushkar Gaikwad Portfolio",
    type: "website",
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
      <body className="antialiased selection:bg-amber-400/20 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
