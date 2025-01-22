export const fetchTrailerId = async (movieId: string): Promise<number> => {
  try {
    const response = await fetch(
      `/api/movies/trailer_id?movieId=${movieId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trailer id");
    }

    const data = await response.json();
    return data.results[0].key;
  } catch (error) {
    console.error("Error fetching trailer id:", error);
    return 0; // or consider returning `null` or re-throwing the error
  }
};
