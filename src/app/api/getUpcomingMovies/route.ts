// import { useSearchParams } from "next/navigation";
import { fetchMovies } from "@/app/actions/fetchMovies";



export const GET = async (req: Request) => {
  if (req.method !== "GET") Response.json({ error: "Method not allowed" });

  // const params = useSearchParams();
  // const paraPAge = params?.get('page') 

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
