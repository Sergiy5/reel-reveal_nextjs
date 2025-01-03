import Image from "next/image";
import { HeaderSearchBar } from "./HeaderSearchBar";
import { MainLogo } from "./ui/MainLogo";
import { HeaderNav } from "./HeaderNav";
import { auth } from "@/auth";
import { Suspense } from "react";

export const Header: React.FC = async () => {
  const session = await auth();

  return (
    <div className={`flex justify-center items-center w-full `}>
      <div
        className={`flex items-center justify-center py-0 w-full h-11 bg-bgColor  z-20 
            md:h-[68px] lg:h-[84px]`}
      >
        <div
          className={`flex items-center justify-between px-4 w-[1440px] md:px-[60px] xl:px-[120px] lg:px-[60px]`}
        >
          <MainLogo />
          <Suspense fallback={<div>Loading...</div>}>
            <HeaderSearchBar />
          </Suspense>
          <HeaderNav isAuth={!!session} />
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
