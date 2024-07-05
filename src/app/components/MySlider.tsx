'use client'

import React, { useEffect, useRef, useState } from "react";
import {default as Slider, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import { MySliderProps } from "@/types";
import { MovieCard } from "./MovieCard";
import { MySliderBtn } from "./MySliderBtn";


export const MySlider: React.FC<MySliderProps> = ({ arrMovies }) => {
const [key, setKey] = useState(0);
const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    nextArrow: <MySliderBtn />,
    prevArrow: <MySliderBtn prevStyle={"rotate-180"} />,
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

  useEffect(() => {
    const handleImagesLoad = () => {
      setKey((prevKey) => prevKey + 1);
    };

    handleImagesLoad();
  }, [arrMovies]);

  return (
    <div className={`my-slyder_wrapper `}>
      <Slider key={key} ref={sliderRef} {...settings}>
        {arrMovies.map((movie) => (
          <MovieCard key={nanoid()} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};
