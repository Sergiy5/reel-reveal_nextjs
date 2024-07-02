// import { quizMovies } from "../../controllers/quizMovies";
// import { NextRequest, NextResponse } from "next/server";

// export const GET = async (
//   req: NextRequest,
//   res: NextResponse
// ) => {
// const { searchParams } = new URL(req.url);
// const arrMovies = searchParams.get("strings");
// const params = 'jou'

//   if (req.method === "GET") {
      
//       if (!params) {
        
//       return NextResponse.json({ error: "Movie titles are required" });
//     }

//     const movieTitles = Array.isArray(params) ? params : [params];

//     try {
//         const movies = await quizMovies(arrMovies);

//         console.log('SERVER RESPONSE', movies)
//       return NextResponse.json(movies);
//     } catch (error: any) {
//       console.error("Error fetching quiz movies:", error.message);
//       return NextResponse.json({ error: "Failed to fetch quiz movies" });
//     }
//   } else {
//     return NextResponse.json({ error: "Method not allowed" });
//   }
// }
