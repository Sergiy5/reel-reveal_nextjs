import { fetchMovies } from "../../actions/fetchMovies";

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
