"use server";

import axios from "axios";
import { Movie } from "@/types";

import { generatorUrl } from "@/lib";

export const moviesFromTmdb = async (
  category: string,
  page: string
): Promise<Movie[]> => {
    
  // const params = new URLSearchParams({
  //   category: category,
  //   page: page,
  // });
  // const url = `/api/movies`;

  const token = process.env.BEARER_TOKEN_TMDB;

  const url = generatorUrl(category, parseInt(page, 10));

  try {
    const movies = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return movies.data.results;
  } catch (error: any) {
    return error.message;
  }
  return [];
};
