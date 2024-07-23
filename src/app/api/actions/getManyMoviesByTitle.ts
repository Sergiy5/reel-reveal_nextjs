"use server"

import { Movie } from "@/typification";
import { getTmdbUrl } from "@/lib";
export const dynamic = "force-dynamic";
export default async function getManyMoviesByTitle  (
  arrMovies: string[]
): Promise<Movie[][]>{
  // getTmdbUrl("search", 1, movie)
  const TOKEN = process.env.BEARER_TOKEN_TMDB;
  // const url = `https://api.themoviedb.org/3/search/movie?query=${searchingMovie}&language=en-US`;
  
  try {
    const requests = arrMovies.map((movie) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US`,
        {
          cache: "force-cache",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      ).then((res) => res.json())
    );
  
    const response = await Promise.all(requests);
  console.log(response)
    return response.map(({ results }) => results);
    
  } catch (error: any) {
    console.log("getManyMoviesByTitle error", error.message);
    throw error;
  }
};