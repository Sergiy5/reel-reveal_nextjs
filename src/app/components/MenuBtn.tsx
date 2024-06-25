import React from "react";
import BurgerIcon from "../../../public/icons/burger.svg";

export const MenuBtn: React.FC = () => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center w-[40px] h-[40px] rounded-[3px] bg-bgColor
                     transition duration-200 ease-in-out hover:bg-bgLightColor`}
    >
      <BurgerIcon
        className={`text-textColor w-[31px] h-[22px] lg:w-[38px] lg:h-[42px] `}
      />
    </button>
  );
};
