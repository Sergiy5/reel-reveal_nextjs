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
  const [clickedTarget, setClickedTarget] = useState<string | undefined>();
  const session = useSession();
  const openUrl = useOpenUrl();
  const { status, data: user } = session;
  const { email } = user?.user || {};
  /**
   * Fetch and save movies ================
   */
  const {
    data: movies,
    error,
    mutate,
  } = useMovies(email as string);

// console.log("MOVIES_FROM_DB_OR_LOCAL_STPRAGE",movies)
  const router = useRouter();

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { poster_path, id, title } = movie;

  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const clickedTarget = e.currentTarget.dataset.movie;

    setClickedTarget(clickedTarget);

    if (clickedTarget === "movie") {
      const stringifyMovie = encodeURIComponent(JSON.stringify(movie));
      const url = `/movies/${stringifyMovie}`;

      // Open the URL in a new tab if Ctrl or Meta key is pressed
      openUrl(url, e);
     
    }

    if (clickedTarget === "trailer") toggleModal();

      
  };

  useEffect(() => {
    if (clickedTarget !== "sawIt" && clickedTarget !== "saveIt") return;

    if (status === "unauthenticated") {
      toast.error("You need to be logged in to save movies");
      return;
    }

    let watched = false;

    if (clickedTarget === "sawIt") watched = true;
    if (clickedTarget === "saveIt") watched = false;

    const onSaveMovie = async () => {
      try {
        const result = await likedMovieSave(
          email as string,
          { movieId: id, watched } as IMovieForSaving
        );

        if (result) console.log("RESULT_SAVE_MOVIE", result);
      } catch (error) {
        console.log(error);
      }
    };
    onSaveMovie();
  }, [clickedTarget, id, status, email]);

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
