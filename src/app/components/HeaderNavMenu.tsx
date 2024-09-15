import React, { useEffect, useState } from "react";
import Link from "next/link";
import HeartIcon from "../../../public/icons/heart.svg";
import UserIcon from "../../../public/icons/user.svg";

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
 const [isClient, setIsClient] = useState(false);

 useEffect(() => {
   setIsClient(true);
 }, []);
  
  console.log("isAuth_header_nav_>>>>>>>>", isAuth);

 if (!isClient) return null;
  return (
      <div
        className={`flex items-center justify-between
           relative w-[380px] h-[40px] flex-row           
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
          href={"/saved"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <HeartIcon
            className={`hidden w-[18px] h-[16px] fill-textColor transition hover:fill-accentColor lg:block`}
          />
        </Link>
        <Link
          href={isAuth ? "/profile" : "/auth"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <UserIcon
            className={`hidden w-[18px] h-[20px] transition hover:fill-accentColor lg:block
             ${
               isAuth
                 ? "fill-accentColor hover:fill-clickedColor"
                 : "fill-textColor hover:fill-accentColor"
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
