import Image from "next/image";
import { HeaderSearchBar } from "./HeaderSearchBar";
import { MainLogo } from "@/app/components/ui/MainLogo";
import { HeaderNav } from "./HeaderNav";
import { auth } from "@/auth";
import { Suspense } from "react";

export const Header: React.FC = async () => {
  const session = await auth();

  return (
    <div className={` w-full`}>
      <div
        className={`flex items-center justify-center py-0 w-full h-[58px] bg-bgColor z-20 
            md:h-[68px] lg:h-[84px]`}
      >
        <div
          className={`flex items-center justify-between w-full px-4 max-w-[1440px] md:px-[60px] lg:px-[60px] xl:px-[120px]`}
        >
          <div>
            <MainLogo />
          </div>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <HeaderSearchBar />
            </Suspense>
          </div>
          <div>
            <HeaderNav isAuth={!!session} />
          </div>
        </div>
      </div>
      {/* <Image
        src={`/icons/header_bg-ellips.svg`}
        alt="Background ellips"
        width={1440}
        height={361}
        priority
        className={`absolute top-0 blur-header 2xl:max-w-[1440px] h-auto z-10 `}
      /> */}
    </div>
  );
};
