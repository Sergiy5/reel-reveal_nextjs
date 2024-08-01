export const getTrailer = async (id: string): Promise<string | null> => {
  const KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trailer data from TMDB");
    }

    const data = await response.json();

    // Find the trailer video from the results
    const trailer = data.results.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );

    if (trailer) {
      return trailer.key;
    } else {
      throw new Error("Trailer not found");
    }
  } catch (error) {
    console.error("Error in getTrailer:", error);
    throw error; // re-throw the error to be caught in the route handler
  }
};
