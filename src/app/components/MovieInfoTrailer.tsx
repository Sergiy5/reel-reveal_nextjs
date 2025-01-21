"use client";

import { useEffect, useState } from "react";
import { fetchTrailerId } from "../actions/fetchTrailerId";
import useSWR from "swr";
import ContentLoader from "react-content-loader";
import { fetchMovieDataFromAPI } from "../actions/fetchMovieDataFromAPI";

export interface VideoComponentProps {
  id: number;
}

export const MovieInfoTrailer: React.FC<VideoComponentProps> = ({ id }) => {
  const [movieId, setMovieId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  // const { data, error, mutate, isValidating } = useSWR(
  //   movieId ? `trailer-${movieId}` : null,
  //   () => fetchMovieDataFromAPI("/api/movies/trailer_id", { movieId: movieId })
  // );

  
//   useEffect(() => {
//     if(!id || typeof window === "undefined") return
//     console.log("DATA_>>>>>>>>>>>>>>>>>>>>>>>>>>", data)
// setMovieId(id)
//   },[id])

  // useEffect(() => {
  //   const fetchTrailer = async (id: number) => {
  //     // setIsLoading(true);
  //     try {
  //       const traillerId = await fetchTrailerId(`${id}`);

  //       if (!traillerId) throw new Error();
  //       setMovieId(traillerId);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //   };
  //   fetchTrailer(id);
  // }, [id]);

//  if (!id) return null;

//   console.log("ERROR_>>>>>>>>>>>>>>>>>",error)
  
//  if (error) {
//    return <div>Error loading trailer. Please try again later.</div>;
//  }

  return (
    <div className={`flex items-center w-full justify-center lg:px-16`}>
      {isLoading ? (
        <ContentLoader
          uniqueKey="movie-info-loader"
          animate={true}
          viewBox="0 0 480 270"
          backgroundColor="#20263D"
          foregroundColor="#318b83"
          className={`w-full h-full rounded-[18px]`}
        >
          <rect x="0" y="0" rx="18" ry="18" width="480" height="270" />
        </ContentLoader>
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
