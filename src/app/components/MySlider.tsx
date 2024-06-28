import React, { useEffect, useState } from "react";
import {default as Slider, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import { MySliderProps } from "@/types";
import { useResize } from "@/hooks";
import { MovieCard } from "./MovieCard";
import { MySliderBtn } from "./MySliderBtn";


export const MySlider: React.FC<MySliderProps> = ({ arrMovies }) => {
  
  const viewWidth = useResize();

  const settings: Settings = {
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    nextArrow: <MySliderBtn />,
    prevArrow: <MySliderBtn prevStyle={"rotate-180"} />,
    arrows: viewWidth > 1024 ? true : false,
    pauseOnFocus: true,
    initialSlide: 0,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // centerMode: true,

          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          centerMode: true,
          centerPadding: "10%",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className={`my-slyder_wrapper `}>
      <Slider {...settings}>
        {arrMovies.map((movie) => {
          return (
            <div key={nanoid()} className="wrapper-slide">
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
