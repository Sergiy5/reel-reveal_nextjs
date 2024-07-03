"use client";

import { useEffect, useState } from "react";
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
  const upcomingURL = process.env.NEXT_PUBLIC_UPCOMING_MOVIES_URL;
  const topRatedURL = process.env.NEXT_PUBLIC_TOP_RATED_MOVIES_URL;


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
        category={"upcoming"}
      />
      <GetShowMovies title={"TOP 20 rated movies"} category={"top_rated"} />
      <Genres />
      {!isClient ? null : deviceType !== "mobile" && <LinkToQuiz />}
    </main>
  );
}
