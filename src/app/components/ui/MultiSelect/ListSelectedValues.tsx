"use client";

import { FilterArray } from "@/typification";
import { useEffect, useState } from "react";
import { Icon } from "../Icon";
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

  useEffect(() => {
    // console.log(selectedValues)
    // Reset visible count when selectedValues changes
    setVisibleCount(0);

    // Gradually show items with a delay
    selectedValues.forEach((_, index) => {
      setTimeout(() => setVisibleCount((prev) => prev + 1), index * 100);
    });

    // Cleanup to avoid memory leaks when selectedValues changes
    return () => {
      setVisibleCount(0);
    };
  }, [selectedValues]);

  return (
    <ul className="flex flex-wrap gap-4">
      {selectedValues.slice(0, visibleCount).map((value, index) => {
       
        return (
          <li
            key={index}
            className={`flex items-center rounded-full border border-bgLightColor px-4 py-2 bg-bgColor transition-opacity duration-3000
            ${index === visibleCount-(visibleCount-index) ? "opacity-100" : "opacity-0"}`}
            
          >
            {capitalizeFirstLetter(value.toString())}
            <button
              type="button"
              className="ml-2 cursor-pointer"
              onClick={() => removeValue(value)}
            >
              <Icon
                id="cross"
                width={14}
                height={14}
                className="text-textColor hover:text-accentColor active:text-accentClicked transition-colors duration-300 "
              />
            </button>
          </li>
        );})}
    </ul>
  );
};