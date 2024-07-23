import { Movie } from "@/typification";

export default async function getManyMoviesByTitle  (
  arrMovies: string[]
): Promise<Movie[][]>{

  const TOKEN = process.env.NEXT_PUBLIC_BEARER_TOKEN_TMDB;
  
  try {
    const requests = arrMovies.map((movie) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US`,
        {
          cache: "force-cache",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      ).then((res) => res.json())
    );
  
    const response = await Promise.all(requests);
  console.log(response)
    return response.map(({ results }) => results);
    
  } catch (error: any) {
    console.log("getManyMoviesByTitle error", error.message);
    throw error;
  }
};