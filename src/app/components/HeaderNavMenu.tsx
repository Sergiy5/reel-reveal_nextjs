"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./ui/Icon";
import { isAuthUserSignal} from "@/context/UserContext";

interface HeaderNavMenuProps {
  isAuth: boolean;
  isOpenMenu: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}
export const HeaderNavMenu: React.FC<HeaderNavMenuProps> = ({
  isAuth,
  isOpenMenu,
  setIsOpenMenu,
}) => {
  return (
    <div
      className={`hidden items-center justify-between relative w-[380px] h-[40px] flex-row lg:flex            
          `}
    >
      <Link
        href={"/movies"}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`link font-light leading-8 text-xl`}
      >
        Movie search
      </Link>
      <Link
        href={`/saved`}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className=" relative link"
      >
        <Icon
          id="icon-heart"
          width={18}
          height={16}
          styles="text-textColor transition duration ease-in-out hover:text-accentColor active:text-accentClicked"
        />
      </Link>
      <Link
        href={isAuth ? "/profile" : "/auth"}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="link"
      >
        <Icon
          id="icon-user"
          width={18}
          height={20}
          styles={`transition duration ease-in-out hover:text-accentColor active:text-accentClicked ${
            isAuth ? "text-accentColor" : "text-textColor"
          }`}
        />
      </Link>
      <Link
        href={"/quiz"}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`header__link-btn flex items-center justify-center font-medium leading-8 text-xl
               w-[140px] h-[40px] text-bgColor bg-textColor rounded-[30px] shadow-0
                transition duration-250 ease-in-out hover:bg-accentColor hover:shadow-hoverShadow
                 active:bg-clickedColor`}
      >
        take quiz
      </Link>
    </div>
  );
};
