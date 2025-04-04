"use client";

import useSWR from "swr";
import ContentLoader from "react-content-loader";
import { fetchMovieDataFromAPI } from "../../actions/fetchMovieDataFromAPI";
import { useEffect, useState } from "react";

// import { PlayCircle } from "lucide-react";

export function FunnyTrailerPlaceholderWithFlashlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative w-full aspect-video bg-yellow-100 rounded-xl shadow-lg overflow-hidden border-4 border-dashed border-yellow-300"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 p-4 text-center pointer-events-none">
        <p className="text-xl font-semibold text-yellow-900">
          Don’t worry, the drama is buffering… 🍿
        </p>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition animate-pulse">
            Watch Teaser
          </button>
        </div>
      </div>

      {/* Flashlight effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 80px, black 140px)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 80px, black 140px)`,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      />
    </div>
  );
}

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
          {/* <FunnyTrailerPlaceholderWithFlashlight /> */}
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
