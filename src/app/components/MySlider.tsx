import React from "react";
import {default as Slider, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import { MySliderProps } from "@/types";
import { useResize } from "@/hooks";
import { MovieCard } from "./MovieCard";
import { MySliderBtn } from "./MySliderBtn";


export const MySlider: React.FC<MySliderProps> = ({
  arrMovies,
}) => {
  const viewWidth = useResize();

  const settings: Settings = {
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    infinite: false,
    nextArrow: <MySliderBtn />,
    prevArrow: <MySliderBtn prevStyle={'rotate-180'} />,
    arrows: viewWidth > 1024 ? true : false,
    pauseOnFocus: true,
    initialSlide: 0,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 855,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <div className={`my-slyder_wrapper`}>
      <Slider {...settings}>
        {arrMovies?.map((movie) => (
          <MovieCard key={nanoid()} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};
