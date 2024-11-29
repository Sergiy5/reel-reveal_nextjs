"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
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
  const [movieToSave, setMovieToSave] = useState<IMovieInDB>({
    movieId: 0,
    watched: false,
    liked: false,
  });
  const [movieToRemove, setMovieToRemove] = useState<{
    movieId: number;
  } | null>(null);

  const session = useSession();
  const openUrl = useOpenUrl();
  const { status, data: user } = session;
  const { id: userId } = user?.user || {};
  /**
   * Fetch saved movies from database ================
   */
  const { data: movies, error, mutate } = useMovies(userId as string);

//   useEffect(() => { 
//     console.log(error)
// console.log("MOVIES",movies)
//   }, [error])

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { poster_path, id, title } = movie;

  const movieForHover = {
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
    title: movie.title,
    id: movie.id,
    isLiked: movies?.some(
      (movie: IMovieInDB) => movie.liked && movie.movieId === id
    ),
    isWatched: movies?.some(
      (movie: IMovieInDB) => movie.watched && movie.movieId === id
    ),
  };

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

      // If Clicked target is "saveIt" (add to liked movies)
      if (clickedTarget === "saveIt") {
// console.log("ifMovieLiked+>>>>>>", ifMovieLiked);
        if (ifMovieLiked && !ifMovieWatched) {
          // console.log("REMOVE_MOVIE")
          setMovieToRemove({ movieId: id });
        } else {
          // 
          optimisticMutate(mutate, {
            movieId: id,
            watched: ifMovieWatched,
            liked: true,
          });
          // setTimeout(function () {
          setMovieToSave({
            movieId: id,
            watched: ifMovieWatched,
            liked: true,
          });
          // }, 2000);
        }
      }

      if (clickedTarget === "sawIt") {

        if (!ifMovieLiked && ifMovieWatched) {
          setMovieToRemove({ movieId: id });
        } else {
          // 
          optimisticMutate(mutate, {
            movieId: id,
            watched: ifMovieWatched,
            liked: ifMovieLiked,
          });
          // setTimeout(function () {
          setMovieToSave({
            movieId: id,
            watched: ifMovieWatched,
            liked: ifMovieLiked,
          });
          // }, 2000);
        }
        
      };
    }
  };

  useEffect(() => {
    if (movieToSave.movieId === 0) return;
console.log("SAVE_MOVIE_IN_USEFFECT", movieToSave)
    const onSaveMovie = async () => {
      try {
        const result = await likedMovieSave(
          userId as string,
          movieToSave as IMovieInDB
        );

        if (result) mutate();
          console.log("RESULT_ON_SAVE", result);

      } catch (error) {
        console.log(error);
      }
    };

    onSaveMovie();
  }, [userId, movieToSave, mutate]);

  useEffect(() => {
    if (movieToRemove === null || userId === undefined) return;
console.log("REMOVE_IN_USEFFECT", movieToRemove);

    const onRemoveMovie = async () => {
      try {
        const result = await removeLikedMovie(
          userId as string,
          movieToRemove?.movieId
        );
        if (result) mutate()
          console.log("RESULT_ON_REMOVE", result);
      } catch (error) {
        console.log(error);
      }
    };
    
    onRemoveMovie();
  }, [movieToRemove, mutate, userId]);

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
