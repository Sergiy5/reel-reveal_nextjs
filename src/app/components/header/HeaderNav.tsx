"use client";

import React, { useState } from "react";
import { HeaderNavMenuMobile } from "./HeaderNavMenuMobile";
import { HeaderNavMenu } from "./HeaderNavMenu";

interface HeaderNavProps {
  isAuth: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ isAuth }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
