"use client";

import { useEffect, useState } from "react";
import { getMovieCast } from "../api/actions/getMovieCast";
import { MySlider } from "./MySlider";
import { MovieInfoCastCard } from "./MovieInfoCastCard";
import { Actor } from "@/typification";
import { MySliderBtn } from "./MySliderBtn";

interface TopCastProps {
  id: string;
}
export const MovieInfoCast: React.FC<TopCastProps> = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async (id: string) => {
      try {
        const result = await getMovieCast(id);

        setCast(result.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast(id);
  }, [id]);

  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 5,
    //    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <MySliderBtn />,
    prevArrow: <MySliderBtn prevStyle={"rotate-180"} />,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          centerMode: true,
          centerPadding: "18%",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "1%",
          slidesToShow: 2.7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          centerPadding: "1%",
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className={`flex flex-col justify-center items-center w-full`}>
      <h2 className={`flex justify-center w-full mb-12`}>Top cast</h2>
      <div className="container -ml-10 w-full sm:ml-0 md:-mx-2.5">
        {" "}
        <MySlider
          arraySlides={cast}
          SlideComponent={MovieInfoCastCard}
          settings={settings}
        />
      </div>
    </div>
  );
};
