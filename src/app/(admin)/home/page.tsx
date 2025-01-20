import dynamic from "next/dynamic";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { getTopRatedMovies, getUpcomingMovies } from "@/app/services";
import { getSessionUser } from "@/utils";

const DynamicQuiz = dynamic(() =>
  import("../../components/Quiz").then((mod) => mod.Quiz)
);
const DynamicSliderCorousel = dynamic(() =>
  import("../../components/SliderCarousel").then((mod) => mod.SliderCarousel)
);

const DynamicGenres = dynamic(() =>
  import("@/app/components/Genres").then((mod) => mod.Genres)
);

const DynamicGetShowMovies = dynamic(() =>
  import("@/app/components/GetShowMovies").then((mod) => mod.GetShowMovies)
);

export default async function Home() {
  // const topRatedMovies = await getTopRatedMovies();
  // const upcomingMovies = await getUpcomingMovies();

  const sessionUser = await getSessionUser();

  return (
    <main>
      <Hero />
      <HowItWorks />
      <DynamicQuiz sessionUser={sessionUser} />
      {/* <DynamicGetShowMovies
        title={"Upcoming 20 movies in 2025"}
        movies={upcomingMovies}
        sessionUser={sessionUser}
      />
     
      <DynamicGetShowMovies
        title={"TOP 20 rated movies"}
        movies={topRatedMovies}
        sessionUser={sessionUser}
      /> */}
      
      <DynamicGenres />
      <DynamicSliderCorousel />
      <TakeOurQuiz />
    </main>
  );
}
