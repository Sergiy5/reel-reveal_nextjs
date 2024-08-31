"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "./ui/Loader";
import { fetchTrailerId } from "../actions/fetchTrailerId";
import { VideoComponentProps } from "@/typification";

export const MovieInfoTrailer: React.FC<VideoComponentProps> = ({ id }) => {
  const [movieId, setMovieId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrailer = async (id: number) => {
      setIsLoading(true);
      try {
        const traillerId = await fetchTrailerId(`${id}`);

        if (!traillerId) throw new Error();
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
    <div className={`flex items-center w-full justify-center lg:px-16`}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`flex justify-center w-full h-auto`}>
          <div
            className={` flex items-center justify-center overflow-hidden w-full xl:max-w-[1200px] border-0 rounded-2xl`}
          >
            <iframe
              src={`https://www.youtube.com/embed/${movieId} `}
              allowFullScreen
              title="Description"
              className="w-full aspect-video"
            />
          </div>
        </div>
      )}
    </div>
  );
};
