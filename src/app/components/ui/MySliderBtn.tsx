import React from "react";
import clsx from "clsx";
import { MySliderBtnProps } from "@/typification";
import { Icon } from "./Icon";

export const MySliderBtn: React.FC<MySliderBtnProps> = ({
  currentSlide,
  slideCount,
  prev_style,
  ...props
}): React.JSX.Element => {
  const isActiveNext = currentSlide === 16;
  const isActivePrev = currentSlide === 0;

  const isActive = prev_style ? isActivePrev : isActiveNext;

  return (
    <button
      {...props}
      aria-disabled={isActive}
      className={clsx(
        `absolute  top-[42%] w-20 h-20 rounded-[20px]
         outline-none transition-colors transition-outline duration-250 ease-in-out z-10`,
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
        prev_style ? "-left-7" : "-right-7"
      )}
    >
      <div
        className={`flex justify-center w-full ${prev_style && "rotate-180"}`}
      >
        <Icon id={"icon-arrow"} width={24} height={24} className={"inherit"} />
      </div>
    </button>
  );
};
