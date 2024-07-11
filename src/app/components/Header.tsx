import Image from "next/image";
import { SearchBar } from "./SearchBar";
import { MainLogo } from "./MainLogo";
import { HeaderNavMenu } from "./HeaderNavMenu";

export const Header: React.FC = () => {

  return (
    <div className={`flex justify-center items-center w-full `}>
      <div
        className={`flex items-center justify-center py-0 w-full h-11 bg-bgColor  z-20 
           md:px-[60px] md:h-[68px] lg:h-[84px]`}
      >
        <div className={`flex items-center justify-between px-4 w-[1200px] md:px-0`}>
          <MainLogo />
          <SearchBar />
          <HeaderNavMenu />
        </div>
      </div>
      <Image
        src={`/icons/header_bg-ellips.svg`}
        alt="Background ellips"
        width={1440}
        height={361}
        priority
        className={`absolute top-0 blur-header 2xl:max-w-[1440px] h-auto z-10 `}
      />
    </div>
  );
};
