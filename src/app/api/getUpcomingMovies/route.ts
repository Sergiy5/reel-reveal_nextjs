import axios from "axios";
// import { fetchMovies } from "@/app/actions/fetchMovies";


export async function GET(req: Request) {
  
  if (req.method !== "GET") Response.json({ error: "Method not allowed" });

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  // try {
  //   const upcomingMovies = await fetchMovies("upcoming", page as string);
  const apiKey = process.env.TMDB_API_KEY;
const category: string | undefined = 'upcoming'
  try {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}&api_key=${apiKey}`;

    const response = await axios.get(url).then((res) =>res.data.results);

    return Response.json(response);

    // return response.data.results as Movie[];
    // return Response.json(upcomingMovies);
  } catch (error) {
    console.error(error);

    return Response.json({
      error: "Failed to fetch top upcoming movies",
    });
  }
};
