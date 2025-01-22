"use client";

import useSWR from "swr";
import ContentLoader from "react-content-loader";
import { fetchMovieDataFromAPI } from "../actions/fetchMovieDataFromAPI";

export interface VideoComponentProps {
  id: number;
}

export const MovieInfoTrailer: React.FC<VideoComponentProps> = ({ id }) => {
  const { data, error, isLoading } = useSWR(`trailer-${id}`, () =>
    fetchMovieDataFromAPI("/api/movies/trailer_id", { movieId: id })
  );

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
              src={`https://www.youtube.com/embed/${data.results[0].key}`}
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
