import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const ceraPro = localFont({
  src: [
    {
      path: "../../public/fonts/cera-pro/CeraPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/cera-pro/CeraPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cera-pro/CeraPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/cera-pro/CeraPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--cera-pro",
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
      
      <body className={ceraPro.className}>{children}</body>
    </html>
  );
}
