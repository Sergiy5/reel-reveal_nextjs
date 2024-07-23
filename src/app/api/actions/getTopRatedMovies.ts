import { Movie } from "@/typification";

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const token = process.env.BEARER_TOKEN_TMDB;
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US`;

  try {
    const response = await fetch(url, {
       cache: 'force-cache' ,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.results;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return [];
  }
};
