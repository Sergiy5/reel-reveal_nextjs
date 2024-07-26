export const getTrailer = async (id: string) => {
  
  const KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`
    );
    const data = await response.json();

    // Find the trailer video from the results
    const trailer = data.results.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );
    if (trailer) {
      return trailer.key;
    }
  } catch (error) {
    console.log(error, "Trailer not found");
  }
};
