import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

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

        {/* It doesn't worked this preload fonts ... */}
        
        {/* <link
          rel="preload"
          href="/fonts/cera-pro/CeraPro-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cera-pro/CeraPro-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cera-pro/CeraPro-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cera-pro/CeraPro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/hind/Hind-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/hind/Hind-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className={ceraProLight.className}>{children}</body>
    </html>
  );
}
