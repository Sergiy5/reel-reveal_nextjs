import "./globals.scss";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ceraPro } from "./fonts";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      <body className={ceraPro.className}>
        {children}
        <ToastContainer />
        <SpeedInsights />
        <div id="modal" />
      </body>
    </html>
  );
}
