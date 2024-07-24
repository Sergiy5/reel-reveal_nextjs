import { Movie } from "@/typification";

export const searchMovieByTitle = async (title: string): Promise<Movie> => {
    
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN_TMDB;
  const url = `https://api.themoviedb.org/3/search/movie?query=${title}&language=en-US`;

  try {
    const response = await fetch(url, {
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