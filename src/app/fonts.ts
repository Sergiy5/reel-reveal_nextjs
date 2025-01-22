import localFont from "next/font/local";

export const ceraPro = localFont({
  src: [
    {
      path: "/fonts/cera-pro/CeraPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/cera-pro/CeraPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/cera-pro/CeraPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/cera-pro/CeraPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--cera-pro",
});

export const hind = localFont({
  src: [
    {
      path: "/fonts/hind/Hind-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/hind/Hind-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--hind-font",
});
