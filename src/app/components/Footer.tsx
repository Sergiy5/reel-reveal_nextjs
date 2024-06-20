import Image from "next/image";
import { MainLogo } from "./MainLogo";
import {FooterMenu} from './FooterMenu'
import { ListSocial } from "./ListSocial";
import CameraIcon from '../../../public/icons/camera.svg';
import { TypeDevice, ViewWidth } from "@/types";
import { LinkToQuiz } from "./LinkToQuiz";

export const Footer: React.FC<TypeDevice> = ({deviceType}) => {

  return (
    <footer className={`relative flex w-full justify-center items-center`}>
      <div
        className={`flex flex-col p-4 w-full bg-bgColor gap-8 z-20 
           md:px-[60px] md:gap-6 md:py-10 md:items-start lg:px-[60px] xl:w-[1440px] xl:px-[120px]`}
      >
        {deviceType !== "mobile" ? (
          <MainLogo deviceType={"desktop"} />
        ) : (
          <LinkToQuiz />
        )}

        <div className={`flex justify-between w-full  `}>
          {deviceType !=='mobile' && <FooterMenu />}

          <CameraIcon
            width={154}
            height={160}
            id="camera-icon"
            alt="Camera icon"
            placeholder="empty"
          />

          <ListSocial />
        </div>
      </div>
      <Image
        className={`absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-[100%] blur-footer z-10`}
        src={"/icons/footer_bg-ellips.svg"}
        width="1429"
        height="614"
        alt="background ellips"
      />
    </footer>
  );
};
