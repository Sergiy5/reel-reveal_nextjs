import { useEffect, useState } from "react";
import Image from "next/image";
import { useDeviceType } from "@/hooks";
import { MainLogo } from "./MainLogo";
import { FooterMenu } from "./FooterMenu";
import { FooterListSocial } from "./FooterListSocial";
import CameraIcon from "../../../public/icons/camera.svg";
import { DeviceType, TypeDevice } from "@/types";
import { LinkToQuiz } from "./LinkToQuiz";

export const Footer: React.FC<TypeDevice> = () => {
  const [isClient, setIsClient] = useState(false);
  const deviceType: DeviceType = useDeviceType();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className={`relative flex w-full justify-center items-center`}>
      <div
        className={`flex flex-col p-4 w-full bg-bgColor gap-8 z-20 
           md:px-[60px] md:gap-6 md:py-10 md:items-start lg:px-[60px] xl:w-[1440px] xl:px-[120px]`}
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

          <CameraIcon
            width={154}
            height={160}
            id="camera-icon"
            alt="Camera icon"
            placeholder="empty"
          />

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
    </footer>
  );
};
