"use client";

import Image from "next/image";
import { useState } from "react";
import { MovieCardProps } from "@/typification";
import { useRouter } from "next/navigation";
import { Modal } from "./Modal";
import { MovieInfoTrailer } from "../MovieInfoTrailer";
import { MovieCardHover } from "./MovieCardHover";

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isShowHover, setIsShowHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const router = useRouter();

  const handleMovie = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const clickeTtarget = e.currentTarget.dataset.movie;

    if (clickeTtarget === "movie") {
      const stringifyMovie = encodeURIComponent(JSON.stringify(movie));

      const url = `/movies/${stringifyMovie}`;
      if (e.ctrlKey || e.metaKey) {
        window.open(url, "_blank"); // Open the URL in a new tab if Ctrl or Meta key is pressed
      } else {
        router.push(url);
      }
    }
    if (clickeTtarget === "saw it") console.log("saw it", movie.id);
    if (clickeTtarget === "save it") console.log("save it", movie.id);
    if (clickeTtarget === "trailer") {
      openModal();
    }

    return e.currentTarget.dataset.movie;
  };

  const { poster_path, id, title } = movie;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : "/images/no-image.webp";

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
        <Image
          id={`${id}`}
          src={poster}
          alt={title}
          width={285}
          height={428}
          quality={75}
          priority={true}
          className={`w-full h-full rounded-[18px]`}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MovieInfoTrailer id={movie.id} />
      </Modal>
    </div>
  );
};
