import { Movie } from "@/typification";

export async function fetchMoviesByTitles(
  titles: string[]
): Promise<Movie[][]> {
  try {
    const response = await fetch("/api/movies/many-by-titles", {
      method: "POST",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titles }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();

    return data.movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
