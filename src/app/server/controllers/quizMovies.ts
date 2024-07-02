import axios, { AxiosResponse } from "axios";
import { Movie } from "@/types";

// Define the type for the API response structure
interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Construct the search URL for a movie

// Function to fetch movie data based on an array of movie titles
export const quizMovies = async (arrMovies: string): Promise<Movie[][]> => {
const apiKey = process.env.TMDB_API_KEY;

    const urlSearchMovie = (movie: string) => {
      return `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;
  };
  
  const parsedMOvies: string[] = JSON.parse(arrMovies);
  try {
    const requests = parsedMOvies.map((movie) =>
      axios.get<MovieResponse>(urlSearchMovie(movie))
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
