"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./Loader";
import { fetchTrailerId } from "../actions/fetchTrailerId";
import { VideoComponentProps } from "@/typification";


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
    <div className={`flex items-center justify-center h-lvh`}>
      {isLoading ? (
          <Loader />
        ) : (
          <div className={`relative flex justify-center w-full px-6 h-auto `}>
          <div
            className={` flex items-center justify-center overflow-hidden w-screen xl:max-w-[1200px] border-0 rounded-2xl`}
            >
            <iframe
              src={`https://www.youtube.com/embed/${movieId} `}
              allowFullScreen
              className="w-full aspect-video"
              title="Description"
              />
          </div>
        </div>
      )}
      </div>
  );
};
