import { Movie } from "@/typification";

export const getManyMoviesByTitle = async (
  arrMovies: string[]
): Promise<Movie[][]> => {

  const API_TOKEN = process.env.BEARER_TOKEN_TMDB;
  
  try {
    const requests = arrMovies.map((movie) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US`,
        {
          cache: "force-cache",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      ).then((res) => res.json())
    );
  
    const response = await Promise.all(requests);
    
    return response.map(({ results }) => results);
    
  } catch (error: any) {
    console.log("getManyMoviesByTitle error", error.message);
    return error
  }
};