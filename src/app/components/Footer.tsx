import Image from "next/image";
import { MainLogo } from "./MainLogo";
import {FooterMenu} from './FooterMenu'
import { ListSocial } from "./ListSocial";

export const Footer: React.FC = () => {

  return (
    <footer
      className={`relative flex w-full bg-bgColor
        xl: justify-center items-center`}
    >
      <div
        className={`flex justify-center flex-col items-center p-4 w-full bg-bgColor gap-4 z-20 
           md:px-[60px] md:py-10 md:items-start xl:px-[120px]`}
      >
        <MainLogo isShowHalfLogo={true} />

        <div className={`flex items-end justify-between w-full`}>
          <FooterMenu />
          <Image
            src={"/icons/camera.svg"}
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
        className={`absolute top-[100%] -translate-y-[100%] blur-header z-10`}
        src={"/icons/footer_bg-ellips.svg"}
        width="1429"
        height="614"
        alt="background ellips"
      />
    </footer>
  );
};
