import { GetShowMovies } from "@/app/components/GetShowMovies";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Quiz } from "@/app/components/Quiz";
import { Genres } from "@/app/components/Genres";

export default async function Home() {
  // const upcoming = await fetchData('upcoming', '1');
  // const topRated = await fetchData("top_rated", "1");

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
      <LinkToQuiz />
    </main>
  );
}
