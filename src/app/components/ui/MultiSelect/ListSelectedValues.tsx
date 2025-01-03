"use client";

import { useEffect, useState } from "react";


interface ListSelectedValuesProps {
  selectedValues: string[] | number[];
  isOpenSelect?: boolean;

  removeValue: (valueToRemove: string | number) => void;

}
export const ListSelectedValues: React.FC<ListSelectedValuesProps> = ({
  selectedValues,
  removeValue,
  isOpenSelect
}) => {
  const [visibleCount, setVisibleCount] = useState(0);

  const [arrayValues, setArrayValues] = useState<string[] | []>([]);
  const [opacity, setOpacity] = useState("")
  

  useEffect(() => {
  //   console.log("isOpenSelect", isOpenSelect);
  // console.log("selectedValues", selectedValues);
      setTimeout(() => {
        selectedValues.forEach((_, index) => {
          setTimeout(() => setVisibleCount((prev) => prev + 1), 200);
        });
      }, 300);
    // }
    // else {
    //   //   Hide all strings strings one by one with a delay
    //   for (let i = selectedValues.length - 1; i >= 0; i--) {
    //     setTimeout(
    //       () => setVisibleCount((prev) => prev - 1),
    //       (selectedValues.length - 1 - i) * 200
    //     );
    //   }
    //     setVisibleCount(0);
    // }

  }, [selectedValues]);

  return (
    <>
      {selectedValues.map((value, index) => (
        <li
          key={index}
          className={`flex items-center cursor-pointer rounded-lg p-2.5 bg-blue_sky `}

        >
          {value}
          <button
            type="button"
            className="ml-2"
            onClick={() => removeValue(value)}
          >
            {/* <Icon id="cross" color="black" width={18} height={18} /> */}
          </button>
        </li>
      ))}
    </>
  );
};
