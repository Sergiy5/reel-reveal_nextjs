import { GetShowMovies } from "@/app/components/GetShowMovies";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { Quiz } from "@/app/components/Quiz";
import { Genres } from "@/app/components/Genres";
import SliderCarousel from "@/app/components/SliderCarousel";
import { getTopRatedMovies, getUpcomingMovies } from "@/app/api/actions";


export default async function Home() {

  const topRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();


  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        movies={upcomingMovies}
      />
      <GetShowMovies title={"TOP 20 rated movies"} movies={topRatedMovies}  />
      <Genres />
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
  );
}

    
