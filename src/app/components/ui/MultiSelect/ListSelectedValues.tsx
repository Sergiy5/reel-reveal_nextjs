"use client";

import { use, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { FilterArray } from "@/typification";
import { capitalizeFirstLetter } from "@/utils";

interface ListSelectedValuesProps {
  selectedValues: FilterArray;
  removeValue: (valueToRemove: string | number) => void;
}
export const ListSelectedValues: React.FC<ListSelectedValuesProps> = ({
  selectedValues,
  removeValue,
}) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [selectedList, setSelectedList] = useState<FilterArray>([]);

  
  useEffect(() => {
    if (selectedList.length) {
      // Incrementally show strings
      setTimeout(() => {
        selectedValues.forEach((_, index) => {
          setTimeout(() => setVisibleCount((prev) => prev + 1), index * 100);
        });
      }, 300);
    }

    // return () => {
    // };
  }, [selectedList, selectedValues]);
  
  useEffect(() => {
    if (selectedValues.length !== selectedList.length) {
      
      setVisibleCount(0);
      setSelectedList(selectedValues);
    }
  }, [selectedValues.length, selectedList.length, selectedValues]);
  const removeselectedItem = (valueToRemove: string | number) => {
    removeValue(valueToRemove);
    setSelectedList((prev) => prev.filter((value) => value !== valueToRemove));
  };

  return (
    <ul
      className={`flex flex-wrap gap-2 sm:gap-4 transition-all duration-1000 ${selectedList.length === 0 ? "h-0" : "h-[42px]"} `}
    >
      {selectedList.map((value, index) => (
        <li
          key={index}
          className={`flex items-center rounded-full border border-bgLightColor px-4 py-2 bg-bgColor h-[42px]
             transition-all ease-in-out duration-500 
              ${index < visibleCount ? "opacity-100" : "opacity-0"}
                 `}
        >
          {typeof value === "string" ? capitalizeFirstLetter(value) : value}
          <button
            type="button"
            className="ml-2"
            onClick={() => removeselectedItem(value)}
          >
            <Icon
              id="cross"
              width={12}
              height={12}
              className="text-textColor hover:text-accentColor active:text-accentClicked transition-colors duration-300"
            />
          </button>
        </li>
      ))}
    </ul>
  );
};