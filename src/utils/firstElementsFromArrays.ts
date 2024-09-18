import { Movie } from "@/typification";

export const firstElementsFromArrays = (arrMovies: Movie[][]): Movie[] => {
  if (arrMovies.length) {
    const arrForListMovies = arrMovies
      .map((item: Movie[]) => {
        for (let i = 0; i < item.length; i++) {
          if (item[i].poster_path?.length) {
            return item[i];
          }
        }
        return undefined;
      })
      .filter((movie) => movie !== undefined); // Remove undefined values

    return arrForListMovies as Movie[];
  }
  return [];
};
