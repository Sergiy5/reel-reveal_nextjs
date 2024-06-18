export  const firstElementsFromArray = arrMovies => {
  if (arrMovies.length) {
    const arrForListMovies = arrMovies.map(movie => {
      return movie.data.results[0];
    });
    return arrForListMovies;
  }
};