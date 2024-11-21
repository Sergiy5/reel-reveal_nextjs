export const likedMoviesGetAll = async (email: string) => {
    try {
        const res = await fetch(`/api/get-all-liked_movies?userEmail=${email}`, {
            
        
     method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log("RES_IN_SAVE_MOVIE_>>>>>>>>>>>>>>>>>>>>>>>>>>>",res)
    if (!res.ok) {
      throw new Error("Failed to get all movies");
    }
    const result = await res.json();

    return result;
  } catch (error) {
    console.log("Error in action get all movies", error);
  }
}