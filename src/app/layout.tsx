import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.scss";
import { ceraPro, hind } from "./fonts";

export const metadata: Metadata = {
  title: "Reel-Reveal",
  description: "Movie quiz based on OpenAi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Reel-Reveal</title>
      </head>

      <body className={(ceraPro.className)}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
