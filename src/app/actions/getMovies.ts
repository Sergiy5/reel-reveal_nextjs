import { generatorUrl } from "@/lib";
import { Movie } from "@/types";

export const getMovies = async (category: string, page: string): Promise<Movie[]> => {

  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN_TMDB;
  const url = generatorUrl(category, parseInt(page, 10));

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

    return response.results || [];
  } catch (error: any) {
    console.error("Fetch error:", error);
    return [];
  }
};
