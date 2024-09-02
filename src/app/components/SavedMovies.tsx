"use client";

import Image from "next/image";
import { ButtonOrLink } from "./ui/ButtonOrLink";

export const SavedMovies: React.FC = () => {


  return (
    <div
      className={`flex items-center flex-col justify-center gap-20 w-full z-20`}
    >
      <Image
        src={"/images/popcorn.png"}
        alt="Popcorn image"
        width={163}
        height={161}
        className={`size-auto`}
      />
      <p>
        Your list is empty, explore our movie search or take a quiz to find
        something interesting!
      </p>
      <div className={`flex flex-col justify-center w-full md:flex-row gap-4`}>
        <ButtonOrLink href={"/movies"} transparent>
          search movie
        </ButtonOrLink>
        <ButtonOrLink href={"/quiz"}>start quiz</ButtonOrLink>
      </div>
    </div>
  );
};
