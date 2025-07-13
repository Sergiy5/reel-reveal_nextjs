import { Suspense } from "react";
import { HeaderSearchBar } from "./HeaderSearchBar";
import { MainLogo } from "@/app/components/ui/MainLogo";
import { HeaderNav } from "./HeaderNav";
import { auth } from "@/auth";

export const Header: React.FC = async () => {
  const session = await auth();

  return (
    <div className={`fixed z-10 w-full`}>
      <div
        className={`flex items-center justify-center py-0 w-full bg-bgColor/90 z-20 h-[58px] md:h-[68px] lg:h-[84px]`}
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
    </div>
  );
};
