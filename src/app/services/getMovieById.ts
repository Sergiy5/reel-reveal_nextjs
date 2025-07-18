import { IMovie } from "@/typification";

export const getMovieById = async (id: number): Promise<IMovie> => {
  const token = process.env.BEARER_TOKEN_TMDB;
  const url = `https://api.themoviedb.org/3/movie/${id}`;

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

    return response as IMovie;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return {} as IMovie;
  }
};
