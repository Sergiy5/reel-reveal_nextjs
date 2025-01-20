"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./ui/Icon";
import { isAuthUserSignal } from "@/context/UserContext";
import { useContextCountQuiz } from "@/context/CountQuizContext";

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
  
  const { count } = useContextCountQuiz();

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
          className="text-textColor transition duration ease-in-out hover:text-accentColor active:text-accentClicked"
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
          className={`transition duration ease-in-out hover:text-accentColor active:text-accentClicked ${
            isAuth || isAuthUserSignal.value
              ? "text-accentColor"
              : "text-textColor"
          }`}
        />
      </Link>
      <Link
        href={"/quiz"}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`flex items-center justify-between font-medium leading-5 text-xl px-5 w-[169px] h-[40px]
           text-bgColor bg-textColor rounded-[30px] shadow-0 transition duration-250 ease-in-out
            hover:bg-accentColor hover:shadow-hoverShadow active:bg-clickedColor`}
      >
        <span className="flex flex-row">
          <span className="w-[13px] mr-[3px]">{count}</span>
          <Icon id="icon-ai" width={20} height={18} className="text-bgColor" />
        </span>
        <span className="">take quiz</span>
      </Link>
    </div>
  );
};
