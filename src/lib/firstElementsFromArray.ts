import { Movie, ResponsDataTMbD } from "@/types";

export const firstElementsFromArray = (
  arrMovies: ResponsDataTMbD["arrMovies"]
): Movie[] | undefined => {
  if (arrMovies.length) {
    const arrForListMovies = arrMovies.map((item) => {
      return item.data.results[0];
    });
    return arrForListMovies;
  }
  return undefined;
};
