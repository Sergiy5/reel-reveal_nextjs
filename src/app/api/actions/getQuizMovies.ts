import axios, { AxiosResponse } from "axios";
import { Movie } from "@/types";
import { getTmdbUrl } from "@/lib";


interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getQuizMovies = async (arrMovies: string[]): Promise<Movie[][]> => {
  
  const TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN_TMDB;;
  
  try {
    const requests = arrMovies.map((movie) =>
      axios.get<MovieResponse>(getTmdbUrl("search", 1, movie), {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
    );

    const responses: AxiosResponse<MovieResponse>[] = await Promise.all(
      requests
    );

    return responses.map((response) => response.data.results);
  } catch (error: any) {
    console.log("getQuizMovies error", error.message);
    throw error;
  }
};
