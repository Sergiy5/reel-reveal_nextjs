import dynamic from "next/dynamic";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { GetShowMovies } from "@/app/components/GetShowMovies";
import { getTopRatedMovies, getUpcomingMovies } from "@/app/services";
import { getSessionUser } from "@/utils";
import { Loader } from "@/app/components/ui/Loader";

const DynamicQuiz = dynamic(() =>
  import("../../components/Quiz").then((mod) => mod.Quiz)
);
const DynamicSliderCorousel = dynamic(() =>
  import("../../components/SliderCarousel").then((mod) => mod.SliderCarousel)
);

const DynamicGenres = dynamic(() =>
  import("@/app/components/Genres").then((mod) => mod.Genres)
);

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  const sessionUser = await getSessionUser();

  return (
    <main>
      <Hero />
      <HowItWorks />
      <DynamicQuiz sessionUser={sessionUser} />
      {upcomingMovies ? (
        <GetShowMovies
          title={"Upcoming 20 movies in 2025"}
          movies={upcomingMovies}
          sessionUser={sessionUser}
        />
      ) : (
        <Loader />
      )}
      {topRatedMovies ? (
        <GetShowMovies
          title={"TOP 20 rated movies"}
          movies={topRatedMovies}
          sessionUser={sessionUser}
        />
      ) : (
        <Loader />
      )}
      <DynamicGenres />
      <DynamicSliderCorousel />
      <TakeOurQuiz />
    </main>
  );
}
