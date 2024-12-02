import dynamic from "next/dynamic";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { Genres } from "@/app/components/Genres";
import { GetShowMovies } from "@/app/components/GetShowMovies";
import { getTopRatedMovies, getUpcomingMovies } from "@/app/services";
import { auth } from "@/auth";
import { userStatuses } from "@/variables";

const DynamicQuiz = dynamic(
  () => import("../../components/Quiz").then((mod) => mod.Quiz),
  { ssr: false }
);
const DynamicSliderCorousel = dynamic(
  () =>
    import("../../components/SliderCarousel").then((mod) => mod.SliderCarousel),
  { ssr: false }
);

export default async function Home() {
  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();

  const session = await auth();

  const sessionUser = {
    userId: session?.user?.id || "",
    userName: session?.user?.name || "",
    email: session?.user?.email || "",
    userStatus: session
      ? userStatuses.Authenticated
      : userStatuses.Unauthenticated,
  };

  return (
    <main>
      <Hero />
      <HowItWorks />
      <DynamicQuiz />
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
      <Genres />
      <DynamicSliderCorousel />
      <TakeOurQuiz />
    </main>
  );
}
