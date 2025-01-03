"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import ContentLoader from "react-content-loader";
import { Modal } from "./Modal";
import { MovieInfoTrailer } from "../MovieInfoTrailer";
import { MovieCardHover } from "./MovieCardHover";
import { Movie } from "@/typification";
import { useOpenUrl } from "@/hooks";
import { useMoviesContext } from "@/context/ServiceMoviesContext";

export interface IMovieInDB {
  movieId: number;
  watched: boolean;
  liked: boolean;
}

interface ISessionUser {
  email: string;
  userId: string;
  userName: string;
  userStatus: string;
}
interface MovieCardProps {
  movie: Movie;
  sessionUser: ISessionUser;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, sessionUser }) => {
  const [isShowHover, setIsShowHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { likedMovies, watchedMovies, toggleLiked, toggleWatched } =
    useMoviesContext();
  
  const openUrl = useOpenUrl();

  const { userStatus } = sessionUser;

  const isLiked = likedMovies.includes(movie.id);
  const isWatched = watchedMovies.includes(movie.id);


  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { poster_path, release_date, vote_average, id, title } = movie;

  const movieForHover = {
    voteAverage: vote_average,
    releaseDate: release_date,
    title: title,
    id: id,
    isLiked: isLiked,
    isWatched: isWatched,
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
      
if (userStatus === "unauthenticated") {
        toast.error("You need to be logged in to save movies");
        return;
      }
      if (clickedTarget === "saveIt") {
        toggleLiked(movie.id);
      }

      if (clickedTarget === "sawIt") {
        toggleWatched(movie.id);
      }
    }
  };

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
