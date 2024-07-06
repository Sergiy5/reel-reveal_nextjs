import React from "react";
import ArrowIcon from "../../../public/icons/arrow.svg";
import clsx from "clsx";
import { MySliderBtnProps } from "@/types";

export const MySliderBtn: React.FC<MySliderBtnProps> = (
  props
): React.JSX.Element => {
  const { currentSlide, onClick, prevStyle } = props;

  const isActiveNext = currentSlide === 16;
  const isActivePrev = currentSlide === 0;

  const isActive = prevStyle ? isActivePrev : isActiveNext;
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={clsx(
        `absolute  top-[42%] flex items-center justify-center w-20 h-20 rounded-[20px]
         outline-none transition-colors transition-outline duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] z-10`,
        {
          "cursor-default": isActive,
          "cursor-pointer": !isActive,
          [`${
            isActive
              ? "text-disabledColor bg-disabledBgColor"
              : "text-textColor bg-enableBgColor"
          }`]: true,

          [`hover:text-${
            !isActive ? "accentColor" : "textColor"
          } hover:bg-hoverBgColor active:text-accentClicked active:bg-accentClicked focus:outline-2`]:
            !isActive,
          "focus:outline-2": !isActive,
        },
        prevStyle ? "-left-7" : "-right-8"
      )}
    >
      <ArrowIcon className={clsx(" ml-auto mr-auto text-inherit w-6 h-6 opacity-100", prevStyle)} />
    </button>
  );
};
