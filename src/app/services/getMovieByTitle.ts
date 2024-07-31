import { Movie } from "@/typification";

export const getMovieByTitle = async (title: string, page: number) => {
  const TOKEN = process.env.BEARER_TOKEN_TMDB;
  const url = `https://api.themoviedb.org/3/search/movie?query=${title}&language=en-US&page=${page}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }).then((res) => res.json());

    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response;

  } catch (error: any) {

    console.error("Fetch error:", error);
    
    return [];
  }
};