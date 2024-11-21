"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

interface IMovieForSaving {
  movieId: number;
  watched: boolean;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieToSave, setMovieToSave] = useState<IMovieForSaving | null>(null);
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

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { poster_path, id, title } = movie;

  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const clickedTarget = e.currentTarget.dataset.movie;

    if (clickedTarget === "movie") {
      const stringifyMovie = encodeURIComponent(JSON.stringify(movie));
      const url = `/movies/${stringifyMovie}`;

      // Open the URL in a new tab if Ctrl or Meta key is pressed
      openUrl(url, e);
    }

    if (clickedTarget === "trailer") toggleModal();

    if (clickedTarget === "sawIt" || clickedTarget === "saveIt") {
      if (status === "unauthenticated") {
        toast.error("You need to be logged in to save movies");
        return;
      }

      let watched = false;

      if (clickedTarget === "saveIt") {
        const ifMovieSaved = movies?.some(
          (movie: IMovieForSaving) => movie.movieId === id
        );
        console.log(" ifMovieSaved ", ifMovieSaved);
        console.log("ID_MOVIE", id);

        if (ifMovieSaved) setMovieToRemove({ movieId: id }); // Remove movie from DB
        if (!ifMovieSaved) setMovieToSave({ movieId: id, watched }); // Save movie to DB

      }

      if (clickedTarget === "sawIt") {
        const ifMovieWatched = movies?.some(
          (movie: IMovieForSaving) => movie.watched === watched
        );
        if (ifMovieWatched) setMovieToSave({ movieId: id, watched: false }); // Save not watched movie to DB
        if (!ifMovieWatched) setMovieToSave({ movieId: id, watched: true }); // Save watched movie to DB
      }

    }
  };

  useEffect(() => {
    if (movieToSave === null) return;

    const onSaveMovie = async () => {
      try {
        const result = await likedMovieSave(
          userId as string,
          movieToSave as IMovieForSaving
        );

        if (result)  mutate();
;
      } catch (error) {
        console.log(error);
      }
    };

    onSaveMovie();
  }, [userId, movieToSave, mutate]);

  useEffect(() => {
    if (movieToRemove === null || userId === undefined) return;
    const onRemoveMovie = async () => {
      try {
        const result = await removeLikedMovie(
          userId as string,
          movieToRemove?.movieId
        );
        if (result) mutate();
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
          <MovieCardHover movie={movie} handleMovie={handleMovie} />
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
