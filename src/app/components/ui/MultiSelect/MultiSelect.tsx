"use client";

import React, { useState, useEffect, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { GoTriangleDown } from "react-icons/go";
import { ListSelectedValues } from "./ListSelectedValues";

interface SearchSelectProps {
  placeholder: string;
  options?: string[] | number[];
  setValue?: (selectedValues: string[]) => void;
  height?: string;
}

export const MultiSelect: React.FC<SearchSelectProps> = ({
  placeholder,
  options = [],
  setValue,
  height = "h-14",
}) => {
  const [selectedValues, setSelectedValues] = useState<string[] | number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownWithSearchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  // useEffect(() => {
  //   if (!value) return;
  //   setSelectedValues(value); // Update state if value prop changes
  // }, [value]);

  // useEffect(() => {
  //   const selectedSkills = options.filter((opt) =>
  //     selectedValues.includes(opt)
  //   );
  //   const arrIds = selectedSkills.map((skill) => skill.id);

  //   if (setValue) setValue(arrIds); // Set value to form
  // }, [options, selectedValues, setValue]);

  const handleSelectChange = (option: string | number) => {
    let updatedValues = [];
    // if (selectedValues.includes(option)) {
    //   updatedValues = selectedValues.filter((val) => val !== option);
    // } else {
    //   updatedValues = [...selectedValues, option];
    // }
    // setSelectedValues(updatedValues);
    // if (onChange) onChange(updatedValues);
  };

  const removeValue = (valueToRemove: string | number) => {
    // setSelectedValues(
    //   selectedValues.filter((value) => value !== valueToRemove)
    // );
  };

  const toggleDropdown = () => {
    console.log("togleDropdown");
    setIsOpen(!isOpen);
  };

  // const handleBlur = () => {
  // if (isOpen && inputRef.current) {
  //   inputRef.current.focus(); // Programmatically focus the input
  // }
  // setIsOpen(false); // Close dropdown or related logic
  // };

  return (
    <div
      className={`relative z-20 flex flex-col justify-end w-[120px]
        `}
      ref={dropdownWithSearchRef}
      onClick={toggleDropdown}
      onKeyDown={(e) => (e.key === "Enter" ? toggleDropdown() : null)}
    >
      <div
        className={`flex items-center w-full h-10 py-3 px-4 cursor-pointer transition-all ease-in-out duration-300 bg-bgSelect
          ${isOpen ? "rounded-t-[20px]" : "rounded-[20px]"}`}
      >
        <div>{placeholder}</div>
        {/* <ul className="inline-flex flex-wrap gap-2 w-full">
          <ListSelectedValues
            isOpenSelect={isOpen}
            selectedValues={options}
            removeValue={removeValue}
          />
        </ul> */}
        <div>
          <GoTriangleDown className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* <div
        className={`relative z-10 flex gap-2.5  
            ${isOpen ? "opacity-100" : "max-h-0 opacity-0"}`}
      > */}
      {options.length > 0 && (
        <ul
          className={` absolute -z-10 flex flex-wrap pb-1 rounded-b-[20px] transition-all ease-in-out duration-500
                bg-bgSelectDropDown overflow-y-auto
            ${isOpen ? "max-h-52 top-full" : "max-h-0 top-5"}
              `}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`w-full px-4 py-2 cursor-pointer hover:bg-bgSelectItemHover active:text-accentClicked `}
              onClick={() => handleSelectChange(option)}
              // role="option"
              // aria-selected={selectedValues.includes(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {/* </div> */}
    </div>
  );
};
