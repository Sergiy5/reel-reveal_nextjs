import { IMovieInDB } from "../components/ui/MovieCard";

export const updateMovieInDB = async (
  userId: string,
  movie: IMovieInDB
) => {
  try {
    const res = await fetch("/api/save-movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, movie }),
    });

    // console.log("RES_IN_SAVE_MOVIE_>>>>>>>>>>>>>>>>>>>>>>>>>>>",res)
    if (!res.ok) {
      throw new Error("Failed to save movie");
    }
    const result = await res.json();
    // console.log("result", result);
    return result;
  } catch (error) {
    console.log("Error in action saveMovie", error);
  }
};
