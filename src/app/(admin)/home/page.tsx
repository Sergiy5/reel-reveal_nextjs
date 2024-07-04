"use client";

import { useEffect, useState } from "react";
// import {  } from ;
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Quiz } from "@/app/components/Quiz";
import { useDeviceType } from "@/hooks";
import { DeviceType } from "@/types";
import { Genres } from "@/app/components/Genres";
import dynamic from "next/dynamic";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const deviceType: DeviceType = useDeviceType();

const DynamicGetShowMovies = dynamic(() => import("../../components/GetShowMovies"), {
  ssr: false,
});
 


  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <DynamicGetShowMovies
        title={"Upcoming 20 movies in 2024"}
        category={"upcoming"}
      />
      <DynamicGetShowMovies
        title={"TOP 20 rated movies"}
        category={"top_rated"}
      />
      <Genres />
      {!isClient ? null : deviceType !== "mobile" && <LinkToQuiz />}
    </main>
  );
}
