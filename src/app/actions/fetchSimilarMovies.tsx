import { firstElementsFromArrays } from "@/utils";
import { fetchMoviesByTitles } from "./fetchMoviesByTitles";
import { fetchSimilarMovieFromOpenAI } from "./fetchSimilarMovieFromOpenAI";

export const fetchSimilarMovies = async (title: string) => {
  // Fetch data from OpenAI API
  const similarTitles = await fetchSimilarMovieFromOpenAI(title);
  if (!similarTitles) throw new Error("No similar titles found");

  // Fetch data from TMDB API
  const movies = await fetchMoviesByTitles(similarTitles);
  if (!movies || movies.length === 0) throw new Error("No movies found");

  // Return first few movies from the list
  return firstElementsFromArrays(movies);
};
