export const fetchTrailerId = async (movieId: number): Promise<number> => {
  try {
    const response = await fetch("/api/get-trailer_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch trailer");
    }
    const data = await response.json();

    return data.response;
  } catch (error) {
    console.error("Error fetching trailer id:", error);
  }
  return 0;
}