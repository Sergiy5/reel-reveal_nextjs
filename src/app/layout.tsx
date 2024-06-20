import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { useDeviceType } from "@/hooks";

const ceraProLight = localFont({
  src: "../../public/fonts/cera-pro/CeraPro-Light.woff2",
  style: "normal",
  variable: "--cera-pro__light",
});

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Reel-Reveal</title>
      </head>
      <body className={ceraProLight.className}>{children}</body>
    </html>
  );
}
