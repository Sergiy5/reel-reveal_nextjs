"use client";

import React from "react";
import { GetShowMoviesProps } from "@/typification";
import { MySlider } from "./MySlider";
import { MySliderBtn } from "./MySliderBtn";
import { Settings } from "react-slick";
import { MovieCard } from "./MovieCard";

export const GetShowMovies: React.FC<GetShowMoviesProps> = ({
  title,
  movies
}) => {

  const settings: Settings = {
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    nextArrow: <MySliderBtn />,
    prevArrow: <MySliderBtn prev_style={"rotate-180"} />,
    arrows: true,
    pauseOnFocus: true,
    initialSlide: 0,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10%",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={` flex flex-col items-center gap-12 w-full z-10 xl:max-w-[1440px]`}
    >
      <h2>{title}</h2>
      <div className={` max-w-[1200px] w-full flex flex-col h-auto`}>
        <MySlider
          arraySlides={movies}
          SlideComponent={MovieCard}
          settings={settings}
        />
      </div>
    </div>
  );
};
