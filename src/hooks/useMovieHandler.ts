import { useState, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import { useMovies } from "@/hooks/useMovies";
import { optimisticMutate } from "@/utils/optimisticMutate";
import { Movie } from "@/typification";
import { IMovieInDB } from "@/app/components/movieCard/MovieCard";
import { saveMovieToDB } from "@/app/actions/saveMovieToDB";
import { removeMovieFromDB } from "@/app/actions/removeMovieFromDB";

export const useMovieHandler = (
  movie: Movie,
  userId: string,
  userStatus: string,
  muvies: IMovieInDB[],
  mutate: any
) => {
  const [movieToCondition, setMovieToCondition] = useState({
    movieId: 0,
    watched: false,
    liked: false,
  });

  const movieForHover = useMemo(() => {
    return {
      voteAverage: movie.vote_average,
      releaseDate: movie.release_date,
      title: movie.title,
      id: movie.id,
      isLiked: mutate?.some(
        (movieInDB: IMovieInDB) =>
          movieInDB.liked && movieInDB.movieId === movie.id
      ),
      isWatched: mutate?.some(
        (movieInDB: IMovieInDB) =>
          movieInDB.watched && movieInDB.movieId === movie.id
      ),
    };
  }, [movie, mutate]);

  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const clickedTarget = e.currentTarget.dataset.movie;

    if (!clickedTarget) return;

    if (userStatus === "Unauthenticated") {
      toast.error("You need to be logged in to save movies");
      return;
    }

    const ifMovieWatched = muvies?.some(
      (movieInDB: IMovieInDB) =>
        movieInDB.watched && movieInDB.movieId === movie.id
    );
    const ifMovieLiked = muvies?.some(
      (movieInDB: IMovieInDB) =>
        movieInDB.liked && movieInDB.movieId === movie.id
    );

    if (clickedTarget === "saveIt") {
      if (ifMovieLiked && !ifMovieWatched) {
        const filteredMovies = muvies.filter(
          (movieInDB: IMovieInDB) => movieInDB.movieId !== movie.id
        );
        optimisticMutate(mutate, filteredMovies[0]);
        setMovieToCondition({
          movieId: movie.id,
          watched: false,
          liked: false,
        });
      } else {
        optimisticMutate(mutate, {
          movieId: movie.id,
          watched: ifMovieWatched,
          liked: !ifMovieLiked,
        });
        setMovieToCondition({
          movieId: movie.id,
          watched: ifMovieWatched,
          liked: !ifMovieLiked,
        });
      }
    }

    if (clickedTarget === "sawIt") {
      if (!ifMovieLiked && ifMovieWatched) {
        const filteredMovies = mutate.filter(
          (movieInDB: IMovieInDB) => movieInDB.movieId !== movie.id
        );
        optimisticMutate(mutate, filteredMovies);
        setMovieToCondition({
          movieId: movie.id,
          watched: false,
          liked: false,
        });
      } else {
        optimisticMutate(mutate, {
          movieId: movie.id,
          watched: !ifMovieWatched,
          liked: ifMovieLiked,
        });
        setMovieToCondition({
          movieId: movie.id,
          watched: !ifMovieWatched,
          liked: ifMovieLiked,
        });
      }
    }
  };

  useEffect(() => {
    if (movieToCondition.movieId === 0) return;

    const onSaveMovie = async () => {
      try {
        if (movieToCondition.liked || movieToCondition.watched) {
          const result = await saveMovieToDB(userId, movieToCondition);
          if (result) mutate(result);
        }
        if (!movieToCondition.liked && !movieToCondition.watched) {
          const result = await removeMovieFromDB(
            userId,
            movieToCondition.movieId
          );
          if (result) mutate(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    onSaveMovie();
  }, [movieToCondition, userId, mutate]);

  return { handleMovie, movieForHover, setMovieToCondition };
};
