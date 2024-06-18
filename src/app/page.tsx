"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { useResize } from "@/lib";
import { Hero } from "./components/Hero";

export default function Home() {
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);
  const [isShowSearchBar, setIsShowSearchBar] = useState(true);
  const [isShowHalfLogo, setIsShowHalfLogo] = useState(true);

  const viewWidth = useResize();

  useEffect(() => {
    if (viewWidth <= 1024) setIsShowBurgerMenu(false);
    if (viewWidth >= 1025) setIsShowBurgerMenu(true);

    if (viewWidth <= 768) setIsShowSearchBar(false);
    if (viewWidth >= 769) setIsShowSearchBar(true);

    if (viewWidth <= 1280) setIsShowHalfLogo(false);
    if (viewWidth <= 768) setIsShowHalfLogo(true);
    if (viewWidth > 1280) setIsShowHalfLogo(true);
  }, [viewWidth]);

  return (
    <>
      <Header
        showBurgerMenu={isShowBurgerMenu}
        showSearchBar={isShowSearchBar}
        showHalfLogo={isShowHalfLogo}
      />

      <main>
          <Hero />
          <h2>Root Page</h2>
      </main>

      <Footer isShowHalfLogo={isShowHalfLogo} />
    </>
  );
}
