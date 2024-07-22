import { GetShowMovies } from "@/app/components/GetShowMovies";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { Quiz } from "@/app/components/Quiz";
import { Genres } from "@/app/components/Genres";
import SliderCarousel from "@/app/components/SliderCarousel";
import { getTopRatedMovies, getUpcomingMovies } from "@/app/api/actions";
import { Movie } from "@/typification";

// export interface PageProps {
//   topRatedMovies: Movie[];
//   upcomingMovies: Movie[];
// }

// export async function generateStaticParams() {
//   const topRatedMovies = await getTopRatedMovies();
//   const upcomingMovies = await getUpcomingMovies();

//   return [{ topRatedMovies, upcomingMovies }];
// }
async function getUpcoming() {
 
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  console.log("PUBLIC_KEY", API_KEY)
   const API = process.env.TMDB_API_KEY;
   console.log("SERVER_KEY", API);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`
  );
 // `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  return res.json()
}

  
export default async function Home() {
  // const { topRatedMovies, upcomingMovies } = props;
// console.log("+++++++))))))======", topRatedMovies);
  // const topRatedMovies = getTopRatedMovies();
  const upcomingMovies = await getUpcoming();
console.log("___+++++++++++++++++++++++++++++", upcomingMovies)
  if (!upcomingMovies) return(<><div>Page</div></>)
    
    
    console.log(upcomingMovies);
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        movies={upcomingMovies.results}
      />
      {/* <GetShowMovies title={"TOP 20 rated movies"} movies={topRatedMovies} /> */}
      <Genres />
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
  );
}

    
