import React from "react";
import { IconGenre } from "./IconGenre";
import Image from "next/image";

export const ChoseGenres: React.FC = (): React.JSX.Element => {
  return (
    <div className={`relative flex flex-col items-center gap-12`}>
      <Image
        src={"/icons/genres_bg-ellips.svg"}
        alt="Background ellips"
        width={1440}
        height={720}
        priority
        className={`absolute z-0 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4
           w-full h-auto blur-hero xl:max-w-[1440px]`}
      />

      <h2>Choose a movie by genre</h2>

      <div
        className={`relative flex items-start flex-wrap justify-around gap-16 sm:justify-between`}
      >
        <IconGenre iconID="comedy" />
        <IconGenre iconID="thriller" />
        <IconGenre iconID="detective" />
        <IconGenre iconID="drama" />
        <IconGenre iconID="romcom" />
        <IconGenre iconID="fantasy" />
        <IconGenre iconID="history" />
        <IconGenre iconID="sci-fi" />
        <IconGenre iconID="non-fic" />
        <IconGenre iconID="horror" />
        <IconGenre iconID="adventure" />
        <IconGenre iconID="cartoon" />
        <IconGenre iconID="musical" />
        <IconGenre iconID="anime" />
      </div>
    </div>
  );
};
