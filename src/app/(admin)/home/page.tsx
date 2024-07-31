import dynamic from "next/dynamic";
import SliderCarousel from "@/app/components/SliderCarousel";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { Genres } from "@/app/components/Genres";
import { GetShowMovies } from "@/app/components/GetShowMovies";
import { getTopRatedMovies, getUpcomingMovies } from "@/app/services";

const DynamicQuiz = dynamic(
  () => import("../../components/Quiz").then((mod) => mod.Quiz),
  { ssr: false }
);


export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  return (
    <main>
      <Hero />
      <HowItWorks />
      <DynamicQuiz />
      { upcomingMovies && <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        movies={upcomingMovies}
      />}
      {topRatedMovies && <GetShowMovies title={"TOP 20 rated movies"} movies={topRatedMovies} />}
      <Genres />
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
  );
}
