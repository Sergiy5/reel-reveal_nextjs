import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import BurgerIcon from "../../../public/icons/burger.svg";
import CrossIcon from "../../../public/icons/cross.svg";
import { nanoid } from "nanoid";


interface HeaderNavMenuProps {
  isOpenMenu: boolean;
  isAuth: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}
export const HeaderNavMenuMobile: React.FC<HeaderNavMenuProps> = ({
  isOpenMenu,
  isAuth,
  setIsOpenMenu,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null
  
  return (
    <>
      <div
        className={clsx(
          `absolute flex flex-col items-center justify-between w-screen bg-bgLightColor  z-60
            transition-all duration-1000 ease-in-out pt-10 pb-5 h-80 -right-4 md:-right-16
            
           ${isOpenMenu ? "-top-6 md:-top-8" : "-top-96"}
          `
        )}
      >
        <button
          id={nanoid()}
          type="button"
          aria-label="Close nav menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`absolute right-4 flex items-center justify-center w-[36px] h-[36px] rounded-[3px] bg-bgLightColor
                     transition-all duration-300 lg:hidden`}
        >
          <CrossIcon
            className={` w-[30px] h-[30px] stroke-textColor transition duration-300`}
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
          href={"/saved"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <p className="">My library</p>
        </Link>
        <Link
          href={isAuth ? "/profile" : "/auth"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <p className="">Login</p>
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
      <button
        id={nanoid()}
        type="button"
        aria-label="Open nav menu"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`flex items-center justify-center w-[36px] h-[36px] rounded-[3px] bg-bgColor
                     transition-all duration-300 lg:hidden`}
      >
        <BurgerIcon
          className={` w-[30px] h-[30px] stroke-textColor transition duration-300 `}
        />
      </button>
    </>
  );
};
