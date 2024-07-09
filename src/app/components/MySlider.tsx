'use client'

import React, { useEffect, useRef, useState } from "react";
import {default as Slider} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import { MySliderProps } from "@/types";

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
        <SlideComponent key={nanoid()} item={item} />
      ))}
    </Slider>
  );
};
