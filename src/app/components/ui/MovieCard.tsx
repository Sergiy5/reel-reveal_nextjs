"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import ContentLoader from "react-content-loader";
import { Modal } from "./Modal";
import { MovieInfoTrailer } from "../MovieInfoTrailer";
import { MovieCardHover } from "./MovieCardHover";
import { Movie } from "@/typification";
import { likedMovieSave } from "@/app/actions/likedMovieSave";
import { useMovies } from "@/hooks/useMovies";
import { useOpenUrl } from "@/hooks";
import { removeLikedMovie } from "@/app/actions/likedMovieRemove";
import { optimisticMutate } from "@/utils";
import { sessionUserSignal } from "@/context/UserContext";

export interface IMovieInDB {
  movieId: number;
  watched: boolean;
  liked: boolean;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieToCondition, setMovieToCondition] = useState<IMovieInDB>({
    movieId: 0,
    watched: false,
    liked: false,
  });

  const { userId, status } = sessionUserSignal.value;
  /**
   * Fetch saved movies from database ================
   */
  const { data: movies, error, mutate } = useMovies(userId);

  const openUrl = useOpenUrl();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { poster_path, release_date, vote_average, id, title } = movie;

  const movieForHover = useMemo(() => {
    return {
      voteAverage: vote_average,
      releaseDate: release_date,
      title: title,
      id: id,
      isLiked: movies?.some(
        (movieInDB: IMovieInDB) => movieInDB.liked && movieInDB.movieId === id
      ),
      isWatched: movies?.some(
        (movieInDB: IMovieInDB) => movieInDB.watched && movieInDB.movieId === id
      ),
    };
  }, [vote_average, release_date, title, id, movies]);

  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const clickedTarget = e.currentTarget.dataset.movie;

    if (clickedTarget === "movie") {
      const url = `/movies/${id}`;

      // Open the URL in a new tab if Ctrl or Meta key is pressed
      openUrl(url, e);
    }

    if (clickedTarget === "trailer") toggleModal();

    if (clickedTarget === "sawIt" || clickedTarget === "saveIt") {
      if (status === "unauthenticated") {
        toast.error("You need to be logged in to save movies");
        return;
      }

      const ifMovieWatched = movies?.some(
        (movie: IMovieInDB) => movie.watched && movie.movieId === id
      );
      const ifMovieLiked = movies?.some(
        (movie: IMovieInDB) => movie.liked && movie.movieId === id
      );

      // If Clicked target is "saveIt"
      if (clickedTarget === "saveIt") {
        // Remove movie form db
        if (ifMovieLiked === true && ifMovieWatched === false) {
          const filteredMovies = movies.filter(
            (movie: IMovieInDB) => movie.movieId !== id
          );
          optimisticMutate(mutate, filteredMovies);
          setMovieToCondition({
            movieId: id,
            watched: false,
            liked: false,
          });
        } else {
          optimisticMutate(mutate, {
            movieId: id,
            watched: ifMovieWatched,
            liked: !ifMovieLiked,
          });
          // setTimeout(function () {
          setMovieToCondition({
            movieId: id,
            watched: ifMovieWatched,
            liked: !ifMovieLiked,
          });
          // }, 2000);
        }
      }

      if (clickedTarget === "sawIt") {
        // Remove movie form db

        if (ifMovieLiked === false && ifMovieWatched === true) {
          const filteredMovies = movies.filter(
            (movie: IMovieInDB) => movie.movieId !== id
          );
          optimisticMutate(mutate, filteredMovies);
          setMovieToCondition({ movieId: id, watched: false, liked: false });

        } else {
          //
          optimisticMutate(mutate, {
            movieId: id,
            watched: !ifMovieWatched,
            liked: ifMovieLiked,
          });
          setMovieToCondition({
            movieId: id,
            watched: !ifMovieWatched,
            liked: ifMovieLiked,
          });
        }
      }
    }
  };

  useEffect(() => {
    if (movieToCondition.movieId === 0) return;

    const onSaveMovie = async () => {
      try {
        if (
          movieToCondition.liked === true ||
          movieToCondition.watched === true
        ) {
          const result = await likedMovieSave(
            userId as string,
            movieToCondition as IMovieInDB
          );

          if (result) mutate(result);
          // console.log("RESULT_ON_SAVE", result);
        }
        if (
          movieToCondition.liked === false &&
          movieToCondition.watched === false
        ) {
          const result = await removeLikedMovie(
            userId as string,
            movieToCondition.movieId
          );
          console.log("first", result);
          if (result) mutate(result);
          // console.log("RESULT_ON_REMOVE", result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    onSaveMovie();
  }, [userId, movieToCondition, mutate]);

  const poster = `https://image.tmdb.org/t/p/w400/${poster_path}`;

  return (
    <div
      onMouseEnter={() => {
        setIsShowHover(true);
      }}
      onMouseLeave={() => {
        setIsShowHover(false);
      }}
      className={`p-1 w-full lg:p-2 xl:p-3`}
    >
      <div className=" relative w-full">
        {isShowHover ? (
          <MovieCardHover movie={movieForHover} handleMovie={handleMovie} />
        ) : null}
        {poster_path ? (
          <Image
            id={`${id}`}
            src={poster}
            alt={title}
            width={285}
            height={428}
            quality={75}
            loading="lazy"
            decoding="async"
            className={`w-full h-full rounded-[18px]`}
          />
        ) : (
          <ContentLoader
            animate={true}
            viewBox="0 0 285 428"
            backgroundColor="#20263D"
            foregroundColor="#318b83"
            className={`w-full h-full rounded-[18px]`}
          >
            <rect x="0" y="0" rx="18" ry="18" width="285" height="428" />
          </ContentLoader>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <MovieInfoTrailer id={movie.id} />
      </Modal>
    </div>
  );
};
