import Image from "next/image";
import { SearchBar } from "./SearchBar";
import { MainLogo } from "./MainLogo";
import { HeaderNav } from "./HeaderNav";
import { TypeDevice } from "@/types";

export const Header: React.FC<TypeDevice> = ({ deviceType }) => {

  return (
    <div
      className={`flex justify-center items-center w-full
        `}
    >
      <div
        className={`flex items-center justify-center py-0 w-full h-11 bg-bgColor  z-20 
           md:px-[60px] md:h-[68px] lg:h-[84px]`}
      >
        <div className={`flex items-center justify-between w-[1200px]`}>
          <MainLogo deviceType={deviceType} />

          {/* {deviceType === "desktop" && <SearchBar />} */}
          <SearchBar />

          <HeaderNav deviceType={deviceType} />
        </div>
      </div>
      <Image
        className={`absolute top-0 blur-header z-10`}
        src={"/icons/header_bg-ellips.svg"}
        width="1440"
        height="361"
        alt="background ellips"
      />
    </div>
  );
};
