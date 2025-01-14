"use client";
import { useEffect, useState } from "react";
import { genres } from "../../../../public/genres/genres";
import { arrayOfRatings, arrayOfYears } from "@/utils";
import { ButtonOrLink } from "../ui/ButtonOrLink";
import { Icon } from "../ui/Icon";
import { MultiSelect } from "../ui/MultiSelect";
import { ListSelectedValues } from "../ui/MultiSelect/ListSelectedValues";
import { FilterArray, IQueryFilterParams } from "@/typification";

interface MovieSearchFilterProps {
  getFilterOptions: (filter: IQueryFilterParams) => void;
  genreName: string | null;
}
export const MovieSearchFilter: React.FC<MovieSearchFilterProps> = ({
  getFilterOptions,
  genreName
}) => {
  const [allfilterOptions, setAllFilterOptions] = useState<FilterArray>([]);
  const [yearsArray, setYearsArray] = useState<FilterArray>([]);
  const [genresArray, setGenresArray] = useState<FilterArray>([]);
  const [ratingsArray, setRatingsArray] = useState<FilterArray>([]);

  useEffect(() => {
    setAllFilterOptions([...genresArray, ...yearsArray, ...ratingsArray]);
  }, [yearsArray, genresArray, ratingsArray]);
  
  useEffect(() => {
    if (genreName) {
      setGenresArray([genreName]);
        // console.log("CALL_FUNCTION>>>>>>>>>>>>>>>>>>>>>>>");
      }
    }, [genreName]);
    
    useEffect(() => {
      if (genreName && genresArray) {
        handleFilterOptions();
      }
    }, [genreName, genresArray]);
  const removeValue = (valueToRemove: string | number) => {
    const filter = allfilterOptions.filter((value) => value !== valueToRemove);

    setAllFilterOptions(filter);
  };

  const arrayIntersection = (arr1: FilterArray, arr2: FilterArray) => {
    const result = arr1.filter((value) => arr2.includes(value));

    return result;
  };

  const setIdGenresFromName = (
    arrayOfNames: string[],
    arrayOfObjects: { name: string; id: number }[]
  ) => {
    const arrayOfIds = arrayOfNames.map(
      (name: string) =>
        arrayOfObjects.find((element) => element.name === name)?.id
    );
    return arrayOfIds;
  };

  useEffect(() => {
    setGenresArray(arrayIntersection(genresArray, allfilterOptions));
    setYearsArray(arrayIntersection(yearsArray, allfilterOptions));
    setRatingsArray(arrayIntersection(ratingsArray, allfilterOptions));
  }, [allfilterOptions.length]);

  const handleFilterOptions = () => {
    getFilterOptions({
      genresId: setIdGenresFromName(
        genresArray.filter((value) => typeof value === "string"),
        genres
      ).filter((id) => id !== undefined),

      years: yearsArray.filter((value) => typeof value === "number"),

      rating: ratingsArray.filter((value) => {
        return typeof value === "number"
      }),
    });
  };

  return (
    <div className="flex justify-between w-full ">
      <div className="flex flex-col gap-6">
        <ul className="flex gap-6">
          <li key={"Genre"}>
            <MultiSelect
              isMulti={true}
              selectedOptions={genresArray}
              options={genres.map((genre) => genre.name)}
              setValue={setGenresArray}
              placeholder="Genre"
            />{" "}
          </li>
          <li key={"Year"}>
            <MultiSelect
              selectedOptions={yearsArray}
              options={arrayOfYears(1900).reverse()}
              setValue={setYearsArray}
              placeholder="Year"
            />{" "}
          </li>
          <li key={"Rating"}>
            <MultiSelect
              selectedOptions={ratingsArray}
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
          <ButtonOrLink onClick={handleFilterOptions}>
            apply filters
          </ButtonOrLink>
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
