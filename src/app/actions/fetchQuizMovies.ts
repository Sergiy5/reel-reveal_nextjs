import { firstElementsFromArrays } from "@/utils";
import { fetchQuizDataFromOpenAI } from "./fetchQuizDataFromOpenAI";
import { fetchMovieDataFromAPI } from "./fetchMovieDataFromAPI";

export const fetchQuizMovies = async (quizData: string[]) => {
  try {
    // Fetch data from OpenAI API
    const titles = await fetchQuizDataFromOpenAI(quizData);

    if (!titles || !titles.length) {
      throw new Error("Error fetching data from OpenAI... Try again.");
    }

    // Fetch movies from TMDB API
    const movies = await fetchMovieDataFromAPI("/api/movies/many-by-titles", {
      titles,
    });

    if (!movies || movies.length === 0) {
      throw new Error("Error fetching movies... Try again.");
    }
    // Return first few movies from the arrays
    return firstElementsFromArrays(movies);
  } catch (error: any) {
    console.log(error.message);
    return error;
  }
};
