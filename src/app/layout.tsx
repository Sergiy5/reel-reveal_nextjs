import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ceraPro } from "./fonts";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Reel-Reveal",
  description: "Discover your perfect movie match with our AI-powered quiz.",
  robots: "noindex, nofollow",
  keywords: "movie recommendations, AI quiz, film match, cinema, entertainment",
  authors: [
    {
      name: "Reel-Reveal Team",
      // url: "https://reel-reveal-nextjs.vercel.app",
    },
  ],
  openGraph: {
    title: "Reel-Reveal - Find Your Perfect Movie",
    description: "Take our AI-based quiz to discover your next favorite film!",
    // url: "https://reel-reveal-nextjs.vercel.app/home",
    type: "website",
    // images: [
    //   {
    //     url: "https://reel-reveal-nextjs.vercel.app/images/og-image.png",
    //     width: 800,
    //     height: 600,
    //     alt: "Reel-Reveal",
    //   },
    // ],
  },
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

      <body className={ceraPro.className}>
        {children}
        <ToastContainer />
        <SpeedInsights />
        <div id="modal" />
      </body>
    </html>
  );
}
