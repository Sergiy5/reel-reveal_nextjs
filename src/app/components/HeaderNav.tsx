"use client";

import React, { useState } from "react";
import { HeaderNavMenuMobile } from "./HeaderNavMenuMobile";
import { HeaderNavMenu } from "./HeaderNavMenu";
import { useSession } from "next-auth/react";
import { sessionUserSignal } from "@/context/UserContext";

export const HeaderNav: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const session = useSession();

  const sessionUserInfo = session?.data?.user;
  const sessionStatus = session?.status;
  //  Save user info in signal context
  sessionUserSignal.value = {
    userId: sessionUserInfo?.id,
    email: sessionUserInfo?.email,
    userName: sessionUserInfo?.name,
    userStatus: sessionStatus,
  };

  return (
    <div id="nav" className={`relative flex`}>
      <HeaderNavMenu
        isOpenMenu={isOpenMenu}
        isAuth={sessionStatus === "authenticated"}
        setIsOpenMenu={setIsOpenMenu}
      />
      <HeaderNavMenuMobile
        isOpenMenu={isOpenMenu}
        isAuth={sessionStatus === "authenticated"}
        setIsOpenMenu={setIsOpenMenu}
      />
    </div>
  );
};
