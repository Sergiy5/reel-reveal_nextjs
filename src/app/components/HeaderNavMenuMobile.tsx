import Link from "next/link";
import clsx from "clsx";
import { Icon } from "./ui/Icon";
import { isAuthUserSignal } from "@/context/UserContext";
import { useContextCountQuiz } from "@/context/CountQuizContext";
// import { isAuthUserSignal } from "@/context/UserContext";

interface HeaderNavMenuProps {
  isOpenMenu: boolean;
  isAuth: boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
}
export const HeaderNavMenuMobile: React.FC<HeaderNavMenuProps> = ({
  isOpenMenu,
  isAuth,
  setIsOpenMenu,
}) => {
  
  const { count } = useContextCountQuiz();

  return (
    <>
      <div
        className={clsx(
          `absolute flex flex-col items-center justify-between w-screen bg-bgLightColor lg:hidden z-60
            transition-all duration-1000 ease-in-out pt-10 pb-5 h-80 -right-4 md:-right-16
            
           ${isOpenMenu ? "-top-6 md:-top-8" : "-top-96"}
          `
        )}
      >
        <button
          type="button"
          aria-label="Close nav menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`absolute right-4 flex items-center justify-center w-[36px] h-[36px] rounded-[3px] bg-bgLightColor
                     transition-all duration-300`}
        >
          <Icon id="cross" width={30} height={30} className="text-textColor" />
        </button>
        <Link
          href={"/movies"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`link font-light leading-8 text-xl`}
        >
          Movie search
        </Link>
        <Link
          href={"/saved"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <p className="">My library</p>
        </Link>
        <Link
          href={isAuth || isAuthUserSignal.value ? "/profile" : "/auth"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="link"
        >
          <p className="">Login</p>
        </Link>
        <Link
          href={"/quiz"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className={`flex items-center justify-between font-medium leading-5 text-xl px-5 w-[169px] h-[40px]
           text-bgColor bg-textColor rounded-[30px] shadow-0 transition duration-250 ease-in-out
            hover:bg-accentColor hover:shadow-hoverShadow active:bg-clickedColor`}
        >
          <span className="flex flex-row">
            <span className="w-[13px] mr-[3px]">{count}</span>
            <Icon
              id="icon-ai"
              width={20}
              height={18}
              className="text-bgColor"
            />
          </span>
          <span className="">take quiz</span>
        </Link>
      </div>
      <button
        type="button"
        aria-label="Open nav menu"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`flex items-center justify-center w-[36px] h-[36px] rounded-[3px] bg-bgColor
                     transition-all duration-300 lg:hidden`}
      >
        <Icon
          id="burger-icon"
          width={30}
          height={30}
          className="text-textColor transition duration-300"
        />
      </button>
    </>
  );
};
