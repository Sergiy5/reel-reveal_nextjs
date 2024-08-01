import { Movie } from "@/typification";

export const getPopularMovies = async (page: number = 1): Promise<Movie[]> => {
  const token = process.env.BEARER_TOKEN_TMDB;
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.results;
  } catch (error) {
    console.error("Error in getTrailer:", error);
    throw error; // re-throw the error to be caught in the route handler
  }
};
