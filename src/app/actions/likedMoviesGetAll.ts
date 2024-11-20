export const likedMoviesGetAll = async (email: string) => {
    try {
        const response = await fetch(`/api/get_all_liked-movies?user=${email}`);
    } catch (error) {
        
    }
}