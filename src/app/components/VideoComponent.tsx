"use client";

import { useEffect, useState } from "react";
import { Loader } from "./Loader";

interface VideoComponentProps {
  id: string;
}

export const VideoComponent: React.FC<VideoComponentProps> = ({ id }) => {
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    const getTMDBVideoInfo = async (id: string) => {
      const KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`
      );
      const data = await response.json();

      // Find the trailer video from the results
      const trailer = data.results.find(
        (video: any) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer) {
        setTrailerId(trailer.key); // The 'key' property contains the YouTube video ID
      }
    };

    getTMDBVideoInfo(id);
  }, [id]);

  return (
    <div>
      {trailerId ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailerId} `}
          allowFullScreen
          width={860}
          height={440}
          title="Description"
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};
