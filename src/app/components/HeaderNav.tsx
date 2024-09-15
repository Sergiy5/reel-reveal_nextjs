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
  const [isSession, setIsSession] = useState(false);
  console.log("isSession_>>>>>>>>>>>>>>>", isAuth);
  const session = useSession()
  console.log("Session_>>>>>>>>>>>>>>>", session);
  
  const diviceSize: DeviceType = useDeviceType();

  useEffect(() => {
//     const isSession= async () => {
//       const session = await auth();
//       setIsSession(!!session);
//     }
// isSession();
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
