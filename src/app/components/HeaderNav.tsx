'use client'

import Link from "next/link";
import HeartIcon from "../../../public/icons/heart.svg";
import UserIcon from "../../../public/icons/user.svg";
import BurgerIcon from "../../../public/icons/burger.svg";
import { DeviceType } from "@/types";
import { useDeviceType } from "@/hooks";

export const HeaderNav: React.FC = () => {

  const deviceType: DeviceType = useDeviceType() ?? 'desktop';
  console.log(deviceType);

  return (
    <>
      {deviceType === "desktop" ? (
        <div className={`flex items-center justify-between w-[380px] h-[40px]`}>
          <Link className={`link font-light leading-8 text-xl`} href={"/"}>
            Movie search
          </Link>
          <Link className="link" href={"/"}>
            <HeartIcon
              className={`w-[18px] h-[16px] fill-textColor transition hover:fill-accentColor`}
            />
          </Link>
          <Link className="link" href={"/"}>
            <UserIcon
              className={`w-[18px] h-[20px] fill-textColor transition hover:fill-accentColor`}
            />
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
      ) : (
        <button
        type="button"
        className={`flex items-center justify-center w-[40px] h-[40px] rounded-[3px] bg-bgColor
          transition duration-200 ease-in-out hover:bg-bgLightColor`}
          >
          <BurgerIcon
            className={`text-textColor w-[31px] h-[22px] lg:w-[38px] lg:h-[42px] `}
            />
        </button>
      )}
    </>
  );
};
