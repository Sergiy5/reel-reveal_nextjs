'use client'

import { useEffect, useState } from "react";
import { getMovieCast } from "../api/actions/getMovieCast";
import { MySlider } from "./MySlider";
import { TopCastCard } from "./TopCastCard";
import { Actor } from "@/types";

interface TopCastProps {
    id: string;
}
export const TopCast: React.FC<TopCastProps> = ({ id }) => {
    const [cast, setCast] = useState([])

    useEffect(() => {
        const getCast = async (id: string) => {
        try {
          const result =  await getMovieCast(id) 
            console.log('RESULT IN CAST', result)
            setCast(result.cast)
            
        } catch (error) {
            console.log(error)
        } 
        }
    getCast(id);
    
    }, [id])
    
 const settings = {
   infinite: true,
   slidesToShow: 6,
   slidesToScroll: 1,
//    autoplay: true,
   speed: 500,
   autoplaySpeed: 3000,
   cssEase: "linear",
   arrows: false,
   pauseOnHover: false,
   responsive: [
     {
       breakpoint: 375,
       settings: {
         centerMode: true,
         centerPadding: "10%",
         slidesToShow: 3,
         slidesToScroll: 1,
       },
     },
     {
       breakpoint: 768,
       settings: {
         centerMode: true,
         centerPadding: "17%",
         slidesToShow: 4,
         slidesToScroll: 1,
       },
     },
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 1,
       },
     },
   ],
 };


  return (
    <div className=" container w-full  z-50">
      {" "}
      <MySlider
        arraySlides={cast}
        SlideComponent={TopCastCard}
        settings={settings}
      />
    </div>
  );
};