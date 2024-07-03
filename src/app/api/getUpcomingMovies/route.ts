import axios from "axios";
import { Movie } from "@/types";

export const fetchMovies = async (
  category: string | undefined,
  page: string | undefined
): Promise<Movie[]> => {
  
  const apiKey = process.env.TMDB_API_KEY;

  try {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}&api_key=${apiKey}`;

    const response = await axios.get(url);

    return response.data.results as Movie[];
  } catch (error: any) {
    console.error(`Error fetching ${category} movies:`, error.message);
    throw error;
  }
};

export const GET = async (req: Request) => {
  if (req.method !== "GET") Response.json({ error: "Method not allowed" });

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  try {
    const upcomingMovies = await fetchMovies("upcoming", page as string);

    return Response.json(upcomingMovies);
  } catch (error) {
    console.error(error);

    return Response.json({
      error: "Failed to fetch top upcoming movies",
    });
  }
};
