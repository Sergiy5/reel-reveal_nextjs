"use client";

import React, { useEffect, useState } from "react";
import { HeaderNavMenuMobile } from "./HeaderNavMenuMobile";
import { HeaderNavMenu } from "./HeaderNavMenu";

interface HeaderNavProps {
  isAuth: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ isAuth }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      // document.body.style.overflow = "hidden";
    } else {
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
    }
  }, [isOpenMenu]);

  return (
    <div id="nav" className={`relative w-full`}>
      <HeaderNavMenu
        isOpenMenu={isOpenMenu}
        isAuth={isAuth}
        setIsOpenMenu={setIsOpenMenu}
      />
      <HeaderNavMenuMobile
        isOpenMenu={isOpenMenu}
        isAuth={isAuth}
        setIsOpenMenu={setIsOpenMenu}
      />
    </div>
  );
};
