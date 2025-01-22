import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ConsentCoockie } from "./components/consentCoockie/ConsentCookie";
import localFont from "next/font/local";

export const urbanist = localFont({
  src: [
    {
      path: "../../publi../../public/fonts/urbanist/Urbanist-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/urbanist/Urbanist-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-urbanist",
});

const CountQuizProviderDynamic = dynamic(() =>
  import("@/context/CountQuizContext").then((mod) => mod.CountQuizProvider)
);

export const metadata: Metadata = {
  title: "Reel-Reveal",
  description: "Discover your perfect movie match with our AI-powered quiz.",
  robots: "noindex, nofollow",
  keywords: "movie recommendations, AI quiz, film match, cinema, entertainment",
  authors: [
    {
      name: "Reel-Reveal Team",
      url: "https://reel-reveal-nextjs.vercel.app",
    },
  ],
  openGraph: {
    title: "Reel-Reveal - Find Your Perfect Movie",
    description: "Take our AI-based quiz to discover your next favorite film!",
    url: "https://reel-reveal-nextjs.vercel.app/home",
    type: "website",
    images: [
      {
        url: "https://reel-reveal-nextjs.vercel.app/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Reel-Reveal",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg"></link>
        <title>Reel-Reveal</title>
      </head>

      <body className={urbanist.className}>
        <SessionProvider>
          <CountQuizProviderDynamic>
            {children}
            <div id="modal" />
          </CountQuizProviderDynamic>
        </SessionProvider>
        <ToastContainer />
        <SpeedInsights />
        <ConsentCoockie />
      </body>
    </html>
  );
}
