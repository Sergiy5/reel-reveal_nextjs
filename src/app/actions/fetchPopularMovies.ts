import { Movie } from "@/typification";

export const fetchPopularMovies = async (page: number) => {
  try {
    const response = await fetch("/api/movies/popular", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return []; // or consider returning `null` or re-throwing the error
  }
};
