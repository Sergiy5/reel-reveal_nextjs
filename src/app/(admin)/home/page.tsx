import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
// import { Quiz } from "@/app/components/Quiz";
import { Genres } from "@/app/components/Genres";
import SliderCarousel from "@/app/components/SliderCarousel";
import { GetShowMovies } from "@/app/components/GetShowMovies";
import { getManyMoviesByTitle, getTopRatedMovies, getUpcomingMovies } from "@/app/api/actions";
import { firstElementsFromArray } from "@/lib";
import { Movie } from "@/typification";
import dynamic from "next/dynamic";

const DynamicQuiz = dynamic(
  () => import("../../components/Quiz").then((mod) => mod.Quiz),
  { ssr: false }
);

export default async function Home() {
  
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  if (!upcomingMovies) return <div>Page</div>;
  if (!topRatedMovies) return <div>Page</div>;


  return (
    <main>
      <Hero />
      <HowItWorks />
      <DynamicQuiz />
      <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        movies={upcomingMovies}
      />
      <GetShowMovies title={"TOP 20 rated movies"} movies={topRatedMovies} />
      <Genres />
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
  );
}
