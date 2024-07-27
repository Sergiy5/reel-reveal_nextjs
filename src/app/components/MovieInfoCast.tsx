"use client";

import { MySlider } from "./MySlider";
import { MovieInfoCastCard } from "./MovieInfoCastCard";
import { MySliderBtn } from "./MySliderBtn";
import { Actor } from "@/typification";
import { useEffect } from "react";
import { fetchMovieCast } from "../actions/fetchMovieCast";
import { toast } from "react-toastify";
import useSWR from "swr";
import { Loader } from "./Loader";

interface TopCastProps {
  id: number
}
export const MovieInfoCast: React.FC<TopCastProps> = ({ id }) => {
  const { data, error, isLoading } = useSWR(`${id}`, fetchMovieCast);

  if (error) return toast.error('Error fetch cast...')
  
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 5,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <MySliderBtn />,
    prevArrow: <MySliderBtn prev_style={"rotate-180"} />,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10%",
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10%",
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
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
      className={`flex flex-col justify-center items-center w-full mt-16 md:mt-20 xl:mt-30 `}
    >
      <h2 className={`flex justify-center w-full mb-12`}>Top cast</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container w-full md:-mx-2.5">
          {" "}
          <MySlider
            arraySlides={data}
            SlideComponent={MovieInfoCastCard}
            settings={settings}
          />
        </div>
      )}
    </div>
  );
};
