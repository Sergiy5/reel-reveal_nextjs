export const getMovieCast = async (id: number) => {
  
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    });
    
    return data;
  } catch (error) {
    console.log(error);
  }
}
