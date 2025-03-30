"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useContextCountQuiz } from "@/context/CountQuizContext";
import { useSession } from "next-auth/react";
import { ShowQuizCount } from "@/app/components/showQuizCount/ShowQuizCount";
import { Tooltip } from "@/app/components/ui/Tooltip";

interface HeaderNavMenuProps {
  isAuth: boolean;
}
export const HeaderNavMenu: React.FC<HeaderNavMenuProps> = ({ isAuth }) => {
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
      className={`hidden items-center justify-between h-[40px] w-full gap-4 lg:flex xl:gap-6           
          `}
    >
      <Link href={"/movies"} className={`link font-light leading-8 text-xl`}>
        <p>Movie search</p>
      </Link>
      <Link href={`/saved`} className=" relative link">
        <p>Favorites</p>
      </Link>
      <Link href={isAuth ? "/profile" : "/auth"} className="link">
        {isAuth ? (
          <p>
            Hi <span className="font-thin">{userName}</span>
          </p>
        ) : (
          <p>Login</p>
        )}
      </Link>
      <Tooltip
        content="Limit of 4 free quizzes reached! Upgrade to Pro for unlimited access."
        position="bottom"
      >
        <Link
          href={"/quiz"}
          className={`flex items-center justify-between gap-2 leading-5  px-5 h-[38px]
           text-blackColor bg-textColor rounded-[30px] shadow-0 uppercase transition duration-250 ease-in-out
            hover:bg-accentColor hover:shadow-hoverShadow active:bg-clickedColor`}
        >
          <span className="font-semibold text-base">
            {count == 0 ? "get pro" : "take quiz"}
          </span>
          <ShowQuizCount count={count} />
        </Link>
      </Tooltip>
    </div>
  );
};
