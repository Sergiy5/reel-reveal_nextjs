"use client";

import useSWR from "swr";
import ContentLoader from "react-content-loader";
import { fetchMovieDataFromAPI } from "../../actions/fetchMovieDataFromAPI";
import { useEffect, useState } from "react";

export interface VideoComponentProps {
  id: number;
}

export const MovieInfoTrailer: React.FC<VideoComponentProps> = ({ id }) => {
  const [trailerId, setTrailerId] = useState<number | null>();

  const { data, error, isLoading } = useSWR(`trailer-${id}`, () =>
    fetchMovieDataFromAPI("/api/movies/trailer_id", { movieId: id })
  );
  useEffect(() => {
    if (!data) return;
    // console.log("DATA_TRAILLER_>>>>>>>>>>>>>>>>>",data)
    if (data.results.length) setTrailerId(data.results[0].key);
  }, [data]);

  if (error || !trailerId) return null;

  return (
    <div className={`flex items-center w-full justify-center`}>
      {isLoading || !trailerId ? (
        <div className="relative w-full h-full">
          <ContentLoader
            uniqueKey="movie-info-loader"
            animate={!isLoading && !trailerId ? false : true}
            viewBox="0 0 340 210"
            backgroundColor="#20263D"
            foregroundColor="#318b83"
            className="w-full h-full rounded-2xl"
          >
            <rect x="0" y="0" width="340" height="210" />
          </ContentLoader>
          {!isLoading && !trailerId && (
            <h3 className="absolute inset-0 flex items-center justify-center text-white z-50">
              Sorry, we couldn&apos;t find any trailer for this movie
            </h3>
          )}
        </div>
      ) : (
          <div
            className={` flex items-center justify-center overflow-hidden w-full h-auto border-0 rounded-2xl`}
          >
            <iframe
              src={`https://www.youtube.com/embed/${trailerId}`}
              allowFullScreen
              title="Description"
              className="w-full aspect-video"
            />
          </div>
      )}
    </div>
  );
};
