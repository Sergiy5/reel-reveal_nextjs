import React from "react";
import Image from "next/image";
import { GenreLinkIcon } from "./ui/GenreLinkIcon";
import { genres } from "../../../public/genres/genres";

export const Genres: React.FC = (): React.JSX.Element => {
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
        className={`relative flex items-start flex-wrap justify-around gap-10 sm:justify-between`}
      >
        {genres.map(({ id, name }) => (
          <GenreLinkIcon key={id} iconName={name} />
        ))}
      </div>
    </div>
  );
};
