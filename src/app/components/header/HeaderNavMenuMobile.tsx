import Link from "next/link";
import { Icon } from "@/app/components/ui/Icon";
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
        className={`absolute flex flex-col items-center justify-between w-screen bg-mobileBgGradient lg:hidden z-60
                    transition-all duration-1000 ease-in-out py-5 md:py-10 px-4 -right-4 md:-right-16
            
           ${isOpenMenu ? "-top-2.5 md:-top-8 h-screen" : "-top-[710px] md:-top-[880px] h-0"}
          `}
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
        <div className={`flex items-center flex-col gap-12 w-full my-[55%] transition-all duration-500 ease-in-out
          ${isOpenMenu ? "h-full opacity-100" : "opacity-0 h-0"}`}>
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
            className={`flex items-center justify-center gap-2 font-medium leading-5 text-xl px-5 w-full md:w-[169px] h-[40px]
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
      </div>
      <button
        type="button"
        aria-label="Open nav menu"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={`flex items-center justify-center md:w-9 h-9 rounded-[3px] bg-bgColor
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
