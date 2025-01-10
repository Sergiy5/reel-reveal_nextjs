"use client";

import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import { FilterArray } from "@/typification";

interface ListSelectedValuesProps {
  selectedValues: FilterArray;
  removeValue: (valueToRemove: string | number) => void;

  isMoving?: boolean;
  onAnimationEnd?: () => void;
}
export const ListSelectedValues: React.FC<ListSelectedValuesProps> = ({
  selectedValues,
  removeValue,
}) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (selectedValues.length > 0) {
      // Incrementally show strings
      setTimeout(() => {
        selectedValues.forEach((_, index) => {
          setTimeout(() => setVisibleCount((prev) => prev + 1), index * 100);
        });
      }, 500);
    }
  
    return () => {
          setVisibleCount(0);
    };
  }, [selectedValues]);

  return (
    <ul
      className={`flex flex-wrap gap-2 max-h-52 overflow-y-auto 
            
            `}
    >
      {selectedValues.map((value, index) => (
        <li
          key={index}
          className={`flex items-center rounded-full border border-bgLightColor px-4 py-2 bg-bgColor
             transition-all ease-in-out duration-500 
              ${index < visibleCount ? "opacity-100" : "opacity-0"}
                 `}
        >
          {value}
          <button
            type="button"
            className="ml-2"
            onClick={() => removeValue(value)}
          >
            <Icon
              id="cross"
              width={14}
              height={14}
              className="text-textColor hover:text-accentColor active:text-accentClicked transition-colors duration-300"
            />
          </button>
        </li>
      ))}
    </ul>
  );
};