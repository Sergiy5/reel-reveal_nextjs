export const fetchTrailerId = async (movieId: string): Promise<number> => {
  try {
    const response = await fetch("/api/get-trailer_id", {
      method: "POST",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch trailer id");
    }

    const data = await response.json();

    return data.response;
  } catch (error) {
    console.error("Error fetching trailer id:", error);
    return 0; // or consider returning `null` or re-throwing the error
  }
};
