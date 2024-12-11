import dynamic from "next/dynamic";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { GetShowMovies } from "@/app/components/GetShowMovies";
import { getTopRatedMovies, getUpcomingMovies } from "@/app/services";
import { getSessionUser } from "@/utils";

const DynamicQuiz = dynamic(
  () => import("../../components/Quiz").then((mod) => mod.Quiz),
  { ssr: false }
);
const DynamicSliderCorousel = dynamic(
  () =>
    import("../../components/SliderCarousel").then((mod) => mod.SliderCarousel),
  { ssr: false }
);

const DynamicGenres = dynamic(
  () => import("@/app/components/Genres").then((mod) => mod.Genres),
  { ssr: false }
);

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  const sessionUser = await getSessionUser()

  return (
    <main>
      <Hero />
      <HowItWorks />
      <DynamicQuiz sessionUser={sessionUser} />
      {upcomingMovies && (
        <GetShowMovies
          title={"Upcoming 20 movies in 2024"}
          movies={upcomingMovies}
          sessionUser={sessionUser}
        />
      )}
      {topRatedMovies && (
        <GetShowMovies
          title={"TOP 20 rated movies"}
          movies={topRatedMovies}
          sessionUser={sessionUser}
        />
      )}
      <DynamicGenres />
      <DynamicSliderCorousel />
      <TakeOurQuiz />
    </main>
  );
}
