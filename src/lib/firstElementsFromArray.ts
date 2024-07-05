import { Movie, ResponsDataTMbD } from "@/types";

export const firstElementsFromArray = (arrMovies: Movie[][]): Movie[] | undefined => {
  if (arrMovies.length) {
    const arrForListMovies = arrMovies.map((item: Movie[]) => {
      return item[0];
    });
    return arrForListMovies;
  }
  return undefined;
};
