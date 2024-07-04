import { Movie } from "@/types";
import axios from "axios";

export const moviesFromTmdb = async (category: string, page: string): Promise<Movie[]> => {
    const params = new URLSearchParams({
      category: category,
      page: page,
    });
    const url = `/api/movies`;
     try {
         const res = await axios.get(url, {params}).then(response => response.data)
         return res 
     } catch (error) {
        console.log(error)
    }
    return []
}