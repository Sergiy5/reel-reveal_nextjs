"use client";

import { useEffect, useState } from "react";
import { getTrailer } from "../actions/getTrailler";
import { toast } from "react-toastify";
import { Loader } from "./Loader";
import { fetchTrailerId } from "../actions/fetchTrailerId";

interface VideoComponentProps {
  id: number;
}

export const MovieInfoTrailer: React.FC<VideoComponentProps> = ({ id }) => {
  const [movieId, setMovieId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrailer = async (id: number) => {
      setIsLoading(true);
      try {
        const traillerId = await fetchTrailerId(id);
        if (!traillerId) toast.error("Faild fetch trailler id");
        setMovieId(traillerId);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrailer(id);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`video-container flex justify-center w-screen lg:w-full px-6 h-auto`}>
          <iframe
            src={`https://www.youtube.com/embed/${movieId} `}
            allowFullScreen
            className="sm:w-full xl:max-w-[1200px] px-24 aspect-video"
            title="Description"
          />
        </div>
      )}
    </>
  );
};
