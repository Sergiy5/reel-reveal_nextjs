"use client";

import { useState } from "react";
import clsx from "clsx";
import SearchIcon from "../../../public/icons/search.svg";
import { useRouter } from "next/navigation";
import {
  popularMoviesSignal,
  searchQuerySignal,
} from "@/context/MoviesContext";
import { toast } from "react-toastify";

export const HeaderSearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return toast.info("Please enter a movie title.");
    }
    const clearValue = inputValue.trim().toLowerCase();
    popularMoviesSignal.value = [];
    searchQuerySignal.value = "";
    router.push(`/${clearValue}`);
    setInputValue("");
  };

  return (
    <div id="search movie">
      <form className={"relative flex w-fit mx-2"} onSubmit={handleSubmit}>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="text"
          autoComplete="off"
          placeholder="Search for a movie..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={` flex-grow w-full font-light md:w-[405px] lg:w-[305px] xl:w-[405px] h-[38px] pl-[21px] pr-[54px] text-light text-xl text-textColor bg-inputColor rounded-[20px]
             outline-none border-[1px] border-transparent transition  hover:border-accentColor focus:border-accentColor`}
        />
        <button
          type="submit"
          aria-label="Search"
          className={clsx(
            "absolute w-[42px] h-[38px] right-0 border-r-round bg-tansparent transition duration-200",
            isFocused && "bg-accentColor"
          )}
        >
          <SearchIcon
            className={clsx(
              `ml-auto mr-auto transition duration-200`,
              isFocused && `stroke-bgColor opacity-100`
            )}
          />
        </button>
      </form>
    </div>
  );
};
