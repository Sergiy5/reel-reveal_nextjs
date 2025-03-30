"use client";

import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
}) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`absolute z-10 overflow-hidden h-0 w-80 px-3 py-2 font-light text-base text-white bg-black rounded-lg shadow-md
          opacity-0 transition-all duration-500 ease-in-out group-hover:flex group-hover:opacity-100 group-hover:h-16
          ${position === "top" && "bottom-full left-1/2 transform -translate-x-1/2 mb-2"}
          ${position === "bottom" && "top-full left-1/2 transform -translate-x-1/2 mt-2"}
          ${position === "left" && "right-full top-1/2 transform -translate-y-1/2 mr-2"}
          ${position === "right" && "left-full top-1/2 transform -translate-y-1/2 ml-2"}`}
      >
        {content}
      </div>
    </div>
  );
};