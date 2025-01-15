"use client";

import React, { useState, useEffect, useRef, use } from "react";
import { GoTriangleDown } from "react-icons/go";
import { FilterArray } from "@/typification";
import { capitalizeFirstLetter } from "@/utils";

interface SearchSelectProps {
  placeholder: string;
  options: FilterArray;
  selectedOptions: FilterArray;
  isMulti?: boolean;
  setValue?: (selectedValues: (string | number)[]) => void;
}

export const MultiSelect: React.FC<SearchSelectProps> = ({
  placeholder,
  options = [],
  selectedOptions,
  isMulti,
  setValue,
}) => {
  const [selectedValues, setSelectedValues] = useState<FilterArray>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dropdownWithSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValues(selectedOptions);
  }, [selectedOptions.length]);

  // Close drop down on tap outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownWithSearchRef.current &&
        !dropdownWithSearchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectChange = (option: string | number) => {
    // if (isDisabled) return;

    let updatedValues = [];
    if (selectedValues.includes(option)) {
      updatedValues = selectedValues.filter((val) => val !== option);
    } else {
      updatedValues = [...selectedValues, option];
    }
    setSelectedValues(updatedValues);
  };

  useEffect(() => {
    setIsDisabled(false);
    setSelectedValues(selectedOptions);
  }, [selectedOptions]);

  useEffect(() => {
    if (!isOpen) setValue?.(selectedValues);
  }, [isOpen]);

  useEffect(() => {
    if (!isMulti) {
      const isDisabledButton = !isMulti ? selectedValues.length > 0 : false;
      setIsDisabled(isDisabledButton);
      if (isDisabledButton) return;
    }
  }, [selectedValues]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative z-20 flex flex-col justify-end sm:w-[120px]
        `}
      ref={dropdownWithSearchRef}
      onKeyDown={(e) => (e.key === "Enter" ? toggleDropdown() : null)}
    >
      <div
        onClick={toggleDropdown}
        className={`flex items-center gap-[4px] sm:justify-between w-full h-10 sm:py-3 py-2 px-4 sm:px-4 cursor-pointer transition-all ease-in-out duration-300 bg-bgSelect
          ${isOpen ? "rounded-t-[20px]" : "rounded-[20px]"}`}
      >
        <div>{placeholder}</div>

        <div>
          <GoTriangleDown
            className={`w-4 h-4 text-white
            ${isOpen && "rotate-180"}
            `}
          />
        </div>
      </div>

      {options.length > 0 && (
        <div
          className={`w-full absolute -z-10 flex flex-wrap transition-all ease-in-out duration-500 overflow-hidden
            ${isOpen ? "max-h-[220px] top-full" : "max-h-0 top-5"}
        `}
        >
          <ul
            className={` flex flex-wrap pb-1 h-full transition-all ease-in-out duration-500 
              bg-bgSelectDropDown scrollbar scrollbar-w-2 scrollbar-thumb-h-
              scrollbar-track-scrolBarTrackColor hover:scrollbar-thumb-textColor scrollbar-thumb-scrolBarThumbColor overflow-x-hidden overflow-y-scroll
              max-h-[200px]
              `}
          >
            {options.map((option, index) => (
              <li key={index} className="w-full ">
                <button
                  type="button"
                  disabled={isDisabled}
                  className={`flex w-full justify-start px-2 py-2 ${
                    selectedValues.includes(option)
                      ? "text-accentColor"
                      : "text-textColor"
                  }
                  ${isDisabled ? "opactity-100 cursor-default" : "cursor-pointer hover:bg-bgSelectItemHover active:text-accentClicked"}`}
                  onClick={() => handleSelectChange(option)}
                >
                  { typeof option === "string" ? capitalizeFirstLetter(option) : option }
                </button>
              </li>
            ))}
          </ul>
          <div className=" -top-44 w-full h-5 bg-bgSelectDropDown rounded-b-[20px]" />
        </div>
      )}
    </div>
  );
};
