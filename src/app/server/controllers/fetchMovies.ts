import { Movie } from "@/types";
import axios from "axios";

export const fetchMovies = async (
  category: string | undefined,
  page: string | undefined
): Promise<Movie[]> => {

  const apiKey = process.env.TMDB_API_KEY; 
  
  try {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}&api_key=${apiKey}`;

    const response = await axios.get(url);

      return response.data.results as Movie[];
      
  } catch (error:any) {
    console.error(`Error fetching ${category} movies:`, error.message);
    throw error;
  }
};
