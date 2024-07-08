"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { nanoid } from "nanoid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrameShot from "../../../public/icons/frame-shot.svg";
import { getFilNameFromPath } from "@/lib";
import { getPaths } from "../api/getPaths";

export interface StuckOnMovieChoicesProps {
  images: string[];
}

export const StuckOnMovieChoices: React.FC = () => {
  const [images, setFiles] = useState<string[]>([])

  useEffect(() => {
    const handler = async () => {
      try {
        const { files } = await getPaths();
        setFiles(files)
      } catch (error: any) {
    console.log(error)
      }
    }
handler()
},[])
  
  const settings = {
    infinite: true,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className={` flex flex-col max-w-[3168px] gap-12 w-lvw xl:full  `}>
      <h2 className={`mx-auto w-auto px-3`}>Stuck on Movie Choices?</h2>
      <div
        className={` flex flex-col mx-auto w-[576px] h-auto sm:w-full md:w-full`}
      >
        <Slider {...settings}>
          {images.map((image) => {
            const pathName = getFilNameFromPath(image);
            const title = pathName.replaceAll("-", " ");

            return (
              <div key={nanoid()} className={` relative cursor-pointer`}>
                <FrameShot className={`w-[288px] h-auto`} />
                <div className={` rounded-[3px]`}>
                  <Image
                    src={`/carousel-images/${pathName}.webp`}
                    width={288}
                    height={275}
                    data-title={title}
                    alt={title}
                    className={`absolute w-[276px] mt-[1.5px] rounded-xl h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default StuckOnMovieChoices;

// const mappingFilePath = path.join(process.cwd(), "movies.json");
// const rawData = fs.readFileSync(mappingFilePath, "utf-8");
// const mappings = JSON.parse(rawData);

// // Create an array with file paths and corresponding movie names
// const filesWithNames = files.map((file) => ({
//   path: file,
//   name: mappings[file] || "Unknown Movie",
// }));
