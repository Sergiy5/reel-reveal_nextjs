"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { useResize } from "@/lib";
import { Hero } from "./components/Hero";
import {HowItWorks} from './components/HowItWorks'
import { LinkToQuiz } from "./components/LinkToQuiz";

export default function Home() {
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);
  const [isShowSearchBar, setIsShowSearchBar] = useState(true);
  const [isShowHalfLogo, setIsShowHalfLogo] = useState(true);

  const viewWidth = useResize();

  useEffect(() => {
    if (viewWidth <= 1024) setIsShowBurgerMenu(false);
    if (viewWidth > 1024) setIsShowBurgerMenu(true);

    if (viewWidth <= 768) setIsShowSearchBar(false);
    if (viewWidth > 768) setIsShowSearchBar(true);

    if (viewWidth <= 768) setIsShowHalfLogo(true);
    if (viewWidth <= 1280) setIsShowHalfLogo(false);
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
        <HowItWorks />
        {viewWidth > 768 ? <LinkToQuiz viewWidth={viewWidth} /> : null}
        <h2>Root Page</h2>
      </main>

      <Footer viewWidth={viewWidth} />
    </>
  );
}
