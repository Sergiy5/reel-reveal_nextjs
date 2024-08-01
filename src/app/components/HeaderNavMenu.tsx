"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import HeartIcon from "../../../public/icons/heart.svg";
import UserIcon from "../../../public/icons/user.svg";
import BurgerIcon from "../../../public/icons/burger.svg";
import CrossIcon from "../../../public/icons/cross.svg";
import { useDeviceType } from "@/hooks";
import { DeviceType } from "@/typification";

export const HeaderNavMenu: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const diviceSize: DeviceType = useDeviceType();

  useEffect(() => {
    diviceSize === "desktop" ? setIsOpenMenu(true) : setIsOpenMenu(false);
  }, [diviceSize]);
  
  return (
    <div id="nav" className={`relative flex`}>
      <div
        className={clsx(
          `absolute flex flex-col items-center justify-between w-screen bg-bgLightColor lg:bg-transparent z-30
            transition-all duration-1000 ease-in-out pt-10 pb-5 h-80 -right-4 md:-right-16
           ${isOpenMenu ? "-top-2 md:-top-4 " : "-top-96"}
           lg:relative lg:top-0 lg:right-0 lg:w-[380px] lg:h-[40px] lg:flex-row lg:p-0 ,
          `
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`absolute right-2 top-2 flex items-center justify-center w-[36px] h-[36px] rounded-[3px] bg-bgLightColor
                     transition-all duration-300 lg:hidden`}
        >
          <CrossIcon
            className={` w-[30px] h-[30px] lg:w-[38px] lg:h-[42px] stroke-textColor transition duration-300`}
          />
        </button>
        <Link
          href={"/movies"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`link font-light leading-8 text-xl`}
        >
          Movie search
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <HeartIcon
            className={`hidden w-[18px] h-[16px] fill-textColor transition hover:fill-accentColor lg:block`}
          />
          <p className="lg:hidden">My library</p>
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <UserIcon
            className={`hidden w-[18px] h-[20px] fill-textColor transition hover:fill-accentColor lg:block`}
          />
          <p className="lg:hidden">Login</p>
        </Link>
        <Link
          href={"/quiz"}
          className={`header__link-btn flex items-center justify-center font-medium leading-8 text-xl
               w-[140px] h-[40px] text-bgColor bg-textColor rounded-[30px] shadow-0
                transition duration-250 ease-in-out hover:bg-accentColor hover:shadow-hoverShadow
                 active:bg-clickedColor`}
        >
          take quiz
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`flex items-center justify-center w-[36px] h-[36px] rounded-[3px] bg-bgColor
                     transition-all duration-300 lg:hidden`}
      >
        <BurgerIcon
          className={` w-[30px] h-[30px] lg:w-[38px] lg:h-[42px] stroke-textColor transition duration-300 `}
        />
      </button>
    </div>
  );
};
