import { Movie, ResponsDataOpenAI } from "@/types";

export const firstElementsFromArray = (
  arrMovies: ResponsDataOpenAI['arrMovies']
): Movie[] | undefined => {
  if (arrMovies.length) {
    const arrForListMovies = arrMovies.map((item) => {
      return item.data.results[0];
    });
    return arrForListMovies;
  }
  return undefined;
};
