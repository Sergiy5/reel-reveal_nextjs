import Image from "next/image";
import { MainLogo } from "./MainLogo";
import {FooterMenu} from './FooterMenu'
import { ListSocial } from "./ListSocial";
import CameraIcon from '../../../public/icons/camera.svg';

export const Footer: React.FC = () => {

  return (
    <footer className={`relative flex w-full justify-center items-center`}>
      <div
        className={`flex flex-col p-4 w-full bg-bgColor gap-4 z-20 
           md:px-[60px] md:py-10 md:items-start lg:px-[120px]`}
      >
        <MainLogo isShowHalfLogo={true} />

        <div className={`flex justify-between w-full  `}>
          <FooterMenu />
          <CameraIcon
            width={154}
            height={160}
            id="camera-icon"
            alt="Camera icon"
            placeholder="empty"
            className={`hidden md:block`}
          />

          <ListSocial />
        </div>
      </div>
      <Image
        className={`absolute top-[70%] -translate-y-[70%] blur-footer z-10`}
        src={"/icons/footer_bg-ellips.svg"}
        width="1429"
        height="614"
        alt="background ellips"
      />
    </footer>
  );
};
