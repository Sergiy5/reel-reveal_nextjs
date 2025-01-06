"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDeviceType } from "@/hooks";
import { MainLogo } from "./ui/MainLogo";
import { FooterMenu } from "./FooterMenu";
import { FooterListSocial } from "./FooterListSocial";
import { DeviceType } from "@/typification";
import { LinkToQuiz } from "./LinkToQuiz";
import { Icon } from "./ui/Icon";

export const Footer: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const deviceType: DeviceType = useDeviceType();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className={`block mx-auto w-max`}>
      <div
        className={`relative flex w-full justify-center items-center mx-auto `}
      >
        <div
          className={`flex flex-col p-4 w-screen bg-bgColor gap-8 z-20 
           md:px-[60px] md:gap-6 md:py-10 md:items-start xl:max-w-[1440px] xl:px-[120px]`}
        >
          {!isClient ? (
            <LinkToQuiz />
          ) : deviceType !== "mobile" ? (
            <MainLogo />
          ) : (
            <LinkToQuiz />
          )}

          <div className={`flex justify-between w-full  `}>
            {!isClient ? null : deviceType !== "mobile" && <FooterMenu />}
            <Icon id="icon-camera" width={154} height={160} />

            <FooterListSocial />
          </div>
        </div>
        <Image
          src={"/icons/footer_bg-ellips.svg"}
          alt="Background ellips"
          width={1429}
          height={614}
          priority
          className={`absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-[100%] blur-footer z-10 w-1440 h-auto`}
        />
      </div>
      <div className={`flex justify-center  text-textColor`}>
        © 2024 Reel Reveal
      </div>
    </footer>
  );
};
