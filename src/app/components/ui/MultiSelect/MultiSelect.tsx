"use client";

import React, { useState, useEffect, useRef, use } from "react";
import { GoTriangleDown } from "react-icons/go";
import { FilterArray } from "@/typification";

interface SearchSelectProps {
  placeholder: string;
  options: FilterArray;
  selectedOptions: FilterArray;
  setValue?: (selectedValues: (string| number)[]) => void;
}

export const MultiSelect: React.FC<SearchSelectProps> = ({
  placeholder,
  options = [],
  selectedOptions,
  setValue,
}) => {
  const [selectedValues, setSelectedValues] =
    useState<FilterArray>(selectedOptions);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownWithSearchRef = useRef<HTMLDivElement>(null);
  // const [searchQuery, setSearchQuery] = useState("");
  // const inputRef = useRef<HTMLInputElement>(null);

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
    let updatedValues = [];
    if (selectedValues.includes(option)) {
      updatedValues = selectedValues.filter((val) => val !== option);
    } else {
      updatedValues = [...selectedValues, option];
    }
    setSelectedValues(updatedValues);
  };

  const arrayIntersection = (arr1: FilterArray, arr2: FilterArray) => {
    // console.log("arr1",arr1);
    // console.log("arr2",arr2)
    const result = arr1.filter((value) => arr2.includes(value));
  // console.log("return ", result);
    return result; 
  }
  
  useEffect(() => {
    if (selectedOptions?.length) {
      setSelectedValues(selectedOptions);
    }
    }, [selectedOptions]);
  
  useEffect(() => {
  console.log("selectedOptions", selectedOptions);
  console.log("selectedValues", selectedValues);
  }, [selectedOptions])
  useEffect(() => {
    if(!isOpen) setValue?.(selectedValues);
  }, [isOpen]);
  
const toggleDropdown = () => {
  setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative z-20 flex flex-col justify-end w-[120px]
        `}
      ref={dropdownWithSearchRef}
      onKeyDown={(e) => (e.key === "Enter" ? toggleDropdown() : null)}
    >
      <div
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full h-10 py-3 px-4 cursor-pointer transition-all ease-in-out duration-300 bg-bgSelect
          ${isOpen ? "rounded-t-[20px]" : "rounded-[20px]"}`}
      >
        <div>{placeholder}</div>
        {/* <div className="inline-flex flex-wrap gap-2 w-full"> */}
        {/* </div> */}

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
              <li
                key={index}
                className={`w-full px-4 py-2 cursor-pointer hover:bg-bgSelectItemHover active:text-accentClicked ${
                  selectedValues.includes(option)
                    ? "text-accentColor"
                    : "text-textColor"
                }`}
                onClick={() => handleSelectChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className=" -top-44 w-full h-5 bg-bgSelectDropDown rounded-b-[20px]" />
        </div>
      )}
    </div>
  );
};
