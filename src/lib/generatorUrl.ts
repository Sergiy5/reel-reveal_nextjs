export const generatorUrl = (
  category: string,
  page: number,
  searchingMovie?: string
) => {
  let url = "";

  switch (category) {
    case "top_rated":
      url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
      break;
    case "upcoming":
      url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
      break;
    case "popular":
      url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
      break;
    case "search":
      // Assuming you are passing search query as part of category (e.g., `search?query=Inception`)
      url = `https://api.themoviedb.org/3/search/movie?query=${searchingMovie}&language=en-US&page=${page}`;
      break;
    default:
      throw new Error("Invalid category");
  }

  return url;
};
