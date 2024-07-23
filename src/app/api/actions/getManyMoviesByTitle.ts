'use server'

import { Movie } from "@/typification";
import { getTmdbUrl } from "@/lib";

export const getManyMoviesByTitle = async (
  arrMovies: string[]
): Promise<Movie[][]> => {
  const TOKEN = process.env.BEARER_TOKEN_TMDB;

  try {
    const requests = arrMovies.map((movie) =>
      fetch(getTmdbUrl("search", 1, movie), {
        cache: "force-cache",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((res) => res.json())
    );

    const response = await Promise.all(requests);

    return response.map(({ results }) => results);
    
  } catch (error: any) {
    console.log("getManyMoviesByTitle error", error.message);
    throw error;
  }
};
