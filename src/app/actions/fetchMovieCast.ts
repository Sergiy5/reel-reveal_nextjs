import { Actor } from "@/typification";

export const fetchMovieCast = async (movieId: string) => {
  try {
    const response = await fetch("/api/get-cast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch cast");
    }
    const data = await response.json();

    return data.response;
  } catch (error) {
    console.error("Error fetching cast:", error);
  }
  return [];
};