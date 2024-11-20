export const removeLikedMovie = async (email: string, movieId: number) => {
    try {
        const res = await fetch("/api/remove-movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, movieId }),
        });
    }
        catch (error) {
            console.log("Error in action removeMovie", error);
        }
    }
    