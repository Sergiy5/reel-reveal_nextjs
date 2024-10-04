import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ceraPro } from "./fonts";
import { ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
// import getServerSession from "next-auth"; 
// import { AuthSessionPovider } from "./components/AuthSessionProvider";

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

export default async function RootLayout({ children }: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <head>
        <title>Reel-Reveal</title>
      </head>

      <body className={ceraPro.className}>
        <SessionProvider >
          {children}
          <div id="modal" />
        </SessionProvider>
          <ToastContainer />
          <SpeedInsights />
      </body>
    </html>
  );
}
