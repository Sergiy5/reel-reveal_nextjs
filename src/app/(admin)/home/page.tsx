import { GetShowMovies } from '@/app/components/GetShowMovies';
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Quiz } from "@/app/components/Quiz";
import { Genres } from "@/app/components/Genres";
import { generatorUrl } from "@/lib";
import { Movie } from '@/types';

const fetchData = async (
  category: string,
  page: string
): Promise<Movie[]> => {
  
  const token = process.env.BEARER_TOKEN_TMDB;
  const url = generatorUrl(category, parseInt(page, 10));
  
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.results || [];
  } catch (error: any) {
    console.error("Fetch error:", error.message);
    return [];
  }
};

export default async function Home (){

  const upcoming = await fetchData('upcoming', '1');
  const topRated = await fetchData("top_rated", "1");
  
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        movies={upcoming}
      />
      <GetShowMovies title={"TOP 20 rated movies"} movies={topRated} />
      <Genres />
      <LinkToQuiz />
    </main>
  );
};
