"use client";

import React, { useEffect, useState } from "react";
import { useDeviceType } from "@/hooks";
import { DeviceType } from "@/typification";
import { HeaderNavMenuMobile } from "./HeaderNavMenuMobile";
import { HeaderNavMenu } from "./HeaderNavMenu";

interface HeaderNavMenuProps {
  isAuth: boolean;
}
export const HeaderNav: React.FC<HeaderNavMenuProps> = ({ isAuth }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const diviceSize: DeviceType = useDeviceType();

  useEffect(() => {
    diviceSize !== "desktop" && setIsOpenMenu(false);
  }, [diviceSize]);

  return (
    <div id="nav" className={`relative flex`}>
      {diviceSize === "desktop" ? (
        <HeaderNavMenu
          isOpenMenu={isOpenMenu}
          isAuth={isAuth}
          setIsOpenMenu={setIsOpenMenu}
        />
      ) : (
        <HeaderNavMenuMobile
          isOpenMenu={isOpenMenu}
          isAuth={isAuth}
          setIsOpenMenu={setIsOpenMenu}
        />
      )}
    </div>
  );
};
