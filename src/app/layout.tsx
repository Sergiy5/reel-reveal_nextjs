import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { urbanist } from "@/fonts/fonts";
import "react-toastify/dist/ReactToastify.css";
import { ConsentCoockie } from "./components/consentCoockie/ConsentCookie";


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
