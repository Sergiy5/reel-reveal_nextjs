import { Movie } from "@/types";
import axios from "axios";

export const moviesFromTmdb = async (category: string, page: string): Promise<Movie[]> => {
    
    const url = `/api/movies?category=${category}&page=${page}`;
     try {
         const res = await axios.get(url).then(response => response.data)
         return res 
     } catch (error) {
        console.log(error)
    }
    return []
}