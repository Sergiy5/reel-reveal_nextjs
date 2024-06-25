"use client";

import { getUpcomingMovies } from "@/api";
import { GetShowMovies } from "@/app/components/GetShowMovies";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Quiz } from "@/app/components/Quiz";
import { useDeviceType } from "@/hooks";
import { DeviceType } from "@/types";

export default function Home() {
    const deviceType: DeviceType = useDeviceType() ?? "mobile";


  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        getMovies={getUpcomingMovies}
      />
      {deviceType !== "mobile" && <LinkToQuiz />}
    </main>
  );
}
