"use client";

import React, { useEffect, useState } from "react";
import { getPaths } from "@/app/api/actions/getPaths";
import { MySlider } from "./MySlider";
import { SliderCarouselSlide } from "./SliderCarouselSlide";

export const SliderCarousel: React.FC = () => {
  const [images, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const handler = async () => {
      try {
        const { files } = await getPaths();
        setFiles(files);
      } catch (error: any) {
        console.log(error);
      }
    };
    handler();
  }, []);

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
        <MySlider
          arraySlides={images}
          SlideComponent={SliderCarouselSlide}
          settings={settings}
        />
      </div>
    </div>
  );
};

export default SliderCarousel;
