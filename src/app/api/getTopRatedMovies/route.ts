import { fetchMovies } from "@/app/actions/fetchMovies";

export const GET = async (req: Request) => {

  if (req.method !== "GET") Response.json({ error: "Method not allowed" });

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  try {
    const topRatedMovies = await fetchMovies("top_rated", page as string);

    return Response.json(topRatedMovies);
    
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Failed to fetch top rated movies" });
  }
};
