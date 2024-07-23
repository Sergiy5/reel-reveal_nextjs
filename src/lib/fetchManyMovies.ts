import { getManyMoviesByTitle } from "@/app/api/actions";

export const fetchManyMovies =async (movies:string[] ) => {
    
    const result = await getManyMoviesByTitle(movies);
    
  return result;
};