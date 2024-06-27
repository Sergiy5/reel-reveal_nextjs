"use client";

import { useEffect, useState } from "react";
import { getUpcomingMovies, topRatedMovies } from "@/api";
import { GetShowMovies } from "@/app/components/GetShowMovies";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Quiz } from "@/app/components/Quiz";
import { useDeviceType } from "@/hooks";
import { DeviceType } from "@/types";
import { Genres } from "@/app/components/Genres";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const deviceType: DeviceType = useDeviceType();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        getMovies={getUpcomingMovies}
      />
      <GetShowMovies title={"TOP 20 rated movies"} getMovies={topRatedMovies} />
      <Genres />
      {!isClient ? null : deviceType !== "mobile" && <LinkToQuiz />}
    </main>
  );
}
