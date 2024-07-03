import { generatorUrl } from "@/lib";
import { Movie } from "@/types";
import axios from "axios";

export const getMovies = async (
  category: string,
  page: number,
) => {


  const token = process.env.BEARER_TOKEN_TMDB;
 const url = generatorUrl(category, page);
   try {
    // url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`;
    
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    
    return response ;
  } catch (error: any) {
    console.error(`Error fetching movies:`, error.message);
    throw error;
  }
};
//api.themoviedb.org/3/search/movie?query=Inception&api_key=YOUR_API_KEY&language=en-US&page=1
