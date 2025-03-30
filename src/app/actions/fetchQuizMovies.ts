import { firstElementsFromArrays } from "@/utils";
import { fetchQuizDataFromOpenAI } from "./fetchQuizDataFromOpenAI";

export const fetchQuizMovies = async (quizData: string[]) => {
  try {
    // Fetch data from OpenAI API
    const movieTitles = await fetchQuizDataFromOpenAI(quizData);

    if (!movieTitles || !movieTitles.length) {
      throw new Error("Error fetching data from OpenAI... Try again.");
    }
    // Fetch movies from TMDB API
        const movies = await fetch(`/api/movies/many-by-titles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movieTitles),
        }).then((res) => res.json());


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
