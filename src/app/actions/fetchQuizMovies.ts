import { firstElementsFromArrays } from "@/utils";
import { fetchMoviesByTitles } from "./fetchMoviesByTitles";
import { fetchQuizDataFromOpenAI } from "./fetchQuizDataFromOpenAI";

export const fetchQuizMovies = async (quizData: string[]) => {

    try {
        
         // Fetch data from OpenAI API
        const result = await fetchQuizDataFromOpenAI(quizData);
        
        if (!result || !result.length) {
          throw new Error("Error fetching data from OpenAI... Try again.");
        }
        
         // Fetch movies from TMDB API
        const movies = await fetchMoviesByTitles(result);
        
        if (!movies || movies.length === 0) {
          
          throw new Error("Error fetching movies... Try again.");
        }
        // Return first few movies from the arrays
       return firstElementsFromArrays(movies);
      } catch (error: any) {
        
        console.log(error.message);
      }
    
}