"use client";
import { arrayOfRatings, arrayOfYears } from "@/utils";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { Icon } from "../ui/Icon";
import { MultiSelect } from "../ui/MultiSelect";
import { ListSelectedValues } from "../ui/MultiSelect/ListSelectedValues";
import { genres } from "../../../../public/genres/genres";
import { useEffect, useState } from "react";
import { FilterArray } from "@/typification";

interface MovieSearchFilterProps {}
export const MovieSearchFilter: React.FC<MovieSearchFilterProps> = ({}) => {
  const [allfilterOptions, setAllFilterOptions] = useState<FilterArray>([]);
  const [yearsArray, setYearsArray] = useState<FilterArray>([]);
  const [genresArray, setGenresArray] = useState<FilterArray>([]);
  const [ratingsArray, setRatingsArray] = useState<FilterArray>([]);

  useEffect(() => {
    setTimeout(() => {
      setAllFilterOptions([...genresArray, ...yearsArray, ...ratingsArray]);
      
    }, 1000);
  }, [yearsArray, genresArray, ratingsArray]);

  const removeValue = (valueToRemove: string | number) => {
      setAllFilterOptions(
        allfilterOptions.filter((value) => value !== valueToRemove)
      );
  };

   const arrayIntersection = (arr1: FilterArray, arr2: FilterArray) => {
      // console.log("arr1",arr1);
      // console.log("arr2",arr2)
      const result = arr1.filter((value) => arr2.includes(value));
    // console.log("return ", result);
      return result; 
    }

  return (
    <div className="flex justify-between w-full ">
      <div className="flex flex-col gap-6">
        <ul className="flex gap-6">
          <li key={"Genre"}>
            <MultiSelect
              selectedOptions={arrayIntersection(genresArray, allfilterOptions)}
              options={genres.map((genre) => genre.name)}
              setValue={setGenresArray}
              placeholder="Genre"
            />{" "}
          </li>
          <li key={"Year"}>
            <MultiSelect
              selectedOptions={arrayIntersection(yearsArray, allfilterOptions)}
              options={arrayOfYears(1900).reverse()}
              setValue={setYearsArray}
              placeholder="Year"
            />{" "}
          </li>
          <li key={"Rating"}>
            <MultiSelect
              selectedOptions={arrayIntersection(
                ratingsArray,
                allfilterOptions
              )}
              options={arrayOfRatings(91)}
              setValue={setRatingsArray}
              placeholder="Rating"
            />{" "}
          </li>
        </ul>
        <div className="flex gap-4">
          <ListSelectedValues
            selectedValues={allfilterOptions}
            removeValue={removeValue}
          />
        </div>
      </div>
      <ul className="flex flex-col items-end gap-6">
        <li>
          <ButtonOrLink onClick={() => {}}>apply filters</ButtonOrLink>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setAllFilterOptions([])}
            className="flex items-center justify-center gap-2 text-textColor"
          >
            <span className=" text-lg font-light">Clear all filters</span>
            <span className="mt-1">
              <Icon id="cross" width={14} height={14} />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};
