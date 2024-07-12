import { getTmdbUrl } from "@/lib";
import { Movie } from "@/types";

export const getMovieById = async (
  id: string | string[]
): Promise<Movie> => {
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN_TMDB;
  const url = `https://api.themoviedb.org/3/movie/${id}`

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response as Movie;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return {} as Movie;
  }
};
