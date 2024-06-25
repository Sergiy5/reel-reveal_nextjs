import React from "react";
import { CustomArrowProps, default as Slider, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "nanoid";
import { MySliderProps } from "@/types";
import { useResize } from "@/hooks";
import { MovieCard } from "./MovieCard";
import ArrowIcon from "../../../public/icons/arrow.svg";

const arrowButtonBaseStyles = `
  absolute 
  top-1/2 
  transform 
  -translate-y-1/2
  bg-transparent 
  border-none 
  cursor-pointer 
  z-10
`;

const SvgArrowStyled = `
  ml-auto 
  mr-auto
  w-6
  h-6
  transition 
  duration-200
`;

export function SampleNextArrow(props: CustomArrowProps): React.JSX.Element {
  const { currentSlide, onClick } = props;
  const isActive = currentSlide !== 16 ? false : true;

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={`arrow-button  right-0`}
    >
      <ArrowIcon className={`arrow-svg `} />
    </button>
  );
}

export function SamplePrevArrow(props: CustomArrowProps): React.JSX.Element {
  const { currentSlide, onClick } = props;
  const isActive = currentSlide !== 0 ? false : true;

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={`arrow-button  left-0`}
    >
      <ArrowIcon className={`arrow-svg `} />
    </button>
  );
}

export const MySlider: React.FC<MySliderProps> = ({
  arrMovies,
}) => {
  const viewWidth = useResize();

  const settings: Settings = {
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div
      className={`max-w-[1200px] flex flex-col w-[900px] h-auto sm:w-full lg:w-[calc(100vw-125px)] xl:w-[calc(100vw-230px)] gap-5`}
    >
      <Slider {...settings}>
        {arrMovies?.map((movie) => (
          <MovieCard key={nanoid()} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};
