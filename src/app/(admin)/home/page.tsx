import { GetShowMovies } from "@/app/components/GetShowMovies";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { Quiz } from "@/app/components/Quiz";
import { Genres } from "@/app/components/Genres";
import StuckOnMovieChoices from "@/app/components/StuckOnMovieChoices";
import { getPaths } from "@/app/api/getPaths";





export default async function Home() {

  const { files } = await getPaths();

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
      <StuckOnMovieChoices images={files} />
      <TakeOurQuiz />
    </main>
  );
}

    
