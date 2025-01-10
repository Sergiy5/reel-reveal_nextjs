"use client";

import { use, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { FilterArray } from "@/typification";

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
  }, [selectedList]);
  
  useEffect(() => {
    if (selectedValues.length !== selectedList.length) {
      
      setVisibleCount(0);
      setSelectedList(selectedValues);
    }
  }, [selectedValues.length]);
  const removeselectedItem = (valueToRemove: string | number) => {
    removeValue(valueToRemove);
    setSelectedList((prev) => prev.filter((value) => value !== valueToRemove));
  };

  return (
    <ul className={"flex flex-wrap gap-4"}>
      {selectedList.map((value, index) => (
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
            onClick={() => removeselectedItem(value)}
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