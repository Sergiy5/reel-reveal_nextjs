"use client";

import React, { useEffect, useState } from "react";
import { MySlider } from "./ui/MySlider";
import { SliderCarouselSlide } from "./ui/SliderCarouselSlide";
import { fetchPaths } from "../actions";
import { Loader } from "./ui/Loader";

export const SliderCarousel: React.FC = () => {
  const [images, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const handler = async () => {
      try {
        const { files } = await fetchPaths();

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
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      }
    ],
  };

  return (
    <div className={` flex flex-col max-w-[3168px] gap-12 z-20 `}>
      <h2 className={`mx-auto px-3`}>Stuck on Movie Choices?</h2>
      <div className={` flex flex-col mx-auto w-[864px] h-auto md:w-full`}>
        { images.length > 0 ? <MySlider
          arraySlides={images}
          SlideComponent={SliderCarouselSlide}
          settings={settings}
        /> : <Loader/>}
      </div>
    </div>
  );
};

export default SliderCarousel;
