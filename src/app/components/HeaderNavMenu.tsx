"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "./ui/Icon";
import { isAuthUserSignal } from "@/context/UserContext";
import { useContextCountQuiz } from "@/context/CountQuizContext";
import { useSession } from "next-auth/react";
import { ShowQuizCount } from "./showQuizCount/ShowQuizCount";

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
  const [userName, setUserName] = useState<string | null>(null);
  const { count } = useContextCountQuiz();

  const { update, data, status } = useSession();

  useEffect(() => {
    if (!data?.user || userName) return;
    const firstName = data.user?.name?.split(" ")[0];
    setUserName(firstName || null);
  }, [data, userName]);

  return (
    <div
      className={`hidden items-center gap-6 relative h-[40px] lg:flex            
          `}
    >
      <Link
        href={"/movies"}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`link font-light leading-8 text-xl`}
      >
        <p>Movie search</p>
      </Link>
      <Link
        href={`/saved`}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className=" relative link"
      >
        <p>Favorites</p>
       
      </Link>
      <Link
        href={isAuth ? "/profile" : "/auth"}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className="link"
      >
        {isAuth ? (
          <p>
            Hi {" "}<span className="font-thin" >{userName}</span>
          </p>
        ) : (
          <p>Login</p>
        )}
       
      </Link>
      <Link
        href={"/quiz"}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`flex items-center justify-between font-medium leading-5 text-xl px-5 w-[169px] h-[40px]
           text-bgColor bg-textColor rounded-[30px] shadow-0 transition duration-250 ease-in-out
            hover:bg-accentColor hover:shadow-hoverShadow active:bg-clickedColor`}
      >
        <ShowQuizCount/>
        <span className="">take quiz</span>
      </Link>
    </div>
  );
};
