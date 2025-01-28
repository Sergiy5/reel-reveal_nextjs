import { IMovie } from "@/typification";

export const getManyMoviesByIds = async (
  arrayIds: number[]
): Promise<IMovie[]> => {
  const token = process.env.BEARER_TOKEN_TMDB;

  try {
    const requests = arrayIds.map((id: number) =>
      fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        // next: { revalidate: 3600 },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json())
    );

    const response = await Promise.all(requests);

    if (!response) {
      throw new Error(`HTTP error! Status: ${response}`);
    }

    return response;
  } catch (error: any) {
    console.error("Fetch error:", error);
    return [] as IMovie[];
  }
};
