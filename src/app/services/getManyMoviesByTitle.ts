import { IMovie } from "@/typification";

export const getManyMoviesByTitle = async (
  arrMovies: {title:string, year:string}[]
): Promise<IMovie[][]> => {
  const API_TOKEN = process.env.BEARER_TOKEN_TMDB;

  try {
    const requests = arrMovies.map(({ title, year }) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&year=${year}`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      ).then((res) => res.json())
    );

    const response = await Promise.all(requests);
    
    return response.map(({ results }) => results);
  } catch (error: any) {
    console.log("getManyMoviesByTitle error", error?.message);
    return error;
  }
};
