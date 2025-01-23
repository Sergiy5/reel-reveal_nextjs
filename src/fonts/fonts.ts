import localFont from "next/font/local";

export const urbanist = localFont({
  src: [
    {
      path: "../../public/fonts/urbanist/Urbanist-Thin.woff2",
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
