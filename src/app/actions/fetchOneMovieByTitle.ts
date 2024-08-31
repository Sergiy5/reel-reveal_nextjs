
export async function fetchOneMovieByTitle(title: string, page: number) {
  try {
    const response = await fetch("/api/movies/one_by-title", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, page }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();

    return data.response;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
