import Image from "next/image";
import clsx from "clsx";
import { SearchBar } from "./SearchBar";
import { MainLogo } from "./MainLogo";
import { HeaderNav } from "./HeaderNav";
import { IsShowComponents } from "@/types";

export const Header: React.FC<IsShowComponents> = ({
  showBurgerMenu,
  showSearchBar,
  showHalfLogo,
}) => {

  
  return (
    <div
      className={
        `flex w-full bg-bgColor
        xl: justify-center items-center`
      }
    >
      <div
        className={
          `z-20 py-0 w-full h-[44px] bg-bgColor flex justify-center 
           md:px-[60px] md:h-[68px] lg:h-[84px] xl:px-[120px]`
        }
      >
          <div className={`flex items-center justify-between w-[1200px]`}>
            <MainLogo isShowHalfLogo={showHalfLogo} />
            <SearchBar isShowSearchBar={showSearchBar} />
            <HeaderNav isShowBurgerMenu={showBurgerMenu} />
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
