"use client";

import React, { useEffect, useRef, useState } from "react";
import { Settings, default as Slider } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import { MySliderProps } from "@/typification";
import { MySliderBtn } from "./MySliderBtn";

export const settings: Settings = {
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

export const MySlider = <T,>({
  arraySlides,
  SlideComponent,
  settings,
}: MySliderProps<T>) => {
  const [key, setKey] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const handleImagesLoad = () => {
      setKey((prevKey) => prevKey + 1);
    };

    handleImagesLoad();
  }, [arraySlides]);

  return (
    <Slider key={key} ref={sliderRef} {...settings}>
      {arraySlides.map((item) => (
        <SlideComponent key={nanoid()} movie={item} />
      ))}
    </Slider>
  );
};
