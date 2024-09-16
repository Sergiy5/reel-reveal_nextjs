"use client";

import React, { useEffect, useState } from "react";
import { useDeviceType } from "@/hooks";
import { DeviceType } from "@/typification";
import { HeaderNavMenuMobile } from "./HeaderNavMenuMobile";
import { HeaderNavMenu } from "./HeaderNavMenu";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

interface HeaderNavMenuProps {
  isAuth: boolean;
}
export const HeaderNav: React.FC<HeaderNavMenuProps> = ({ isAuth }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div id="nav" className={`relative flex`}>
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
