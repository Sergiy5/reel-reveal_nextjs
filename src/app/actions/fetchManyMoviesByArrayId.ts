export const fectchManyMoviesByArrayId = async (arrayIds: string[]) => {
    const res = await fetch("/api/movies/many-by-array_id", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ arrayIds }),
    })

     if (!res.ok) {
       throw new Error("Failed to fetch movies");
     }
    
    return res.json();
};