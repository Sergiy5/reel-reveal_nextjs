import { Movie } from "@/typification";
import { getTmdbUrl } from "@/lib";

export const getManyMoviesByTitle = async (
  arrMovies: string[]
): Promise<Movie[][]> => {
  const Back_END_URL = "/api/fetchMovies?query=";

  const results = arrMovies.map((movie) => {
    return fetch(`${Back_END_URL}${movie}`).then((res) => res.json());
  });

  const response = await Promise.all(results);

    return response.map(({ results }) => results);
};

// const TOKEN = process.env.BEARER_TOKEN_TMDB;
// // const url = `https://api.themoviedb.org/3/search/movie?query=${searchingMovie}&language=en-US`;

// try {
//   const requests = arrMovies.map((movie) =>
//     fetch(getTmdbUrl("search", 1, movie), {
//       cache: "force-cache",
//       headers: {
//         Authorization: `Bearer ${TOKEN}`,
//       },
//     }).then((res) => res.json())
//   );

//   const response = await Promise.all(requests);

//   return response.map(({ results }) => results);
  
// } catch (error: any) {
//   console.log("getManyMoviesByTitle error", error.message);
//   throw error;
// }