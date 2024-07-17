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
      const KEY =
        process.env.NEXT_PUBLIC_TMDB_API_KEY ??
        process.env.TMDB_API_KEY;
console.log('first', KEY)
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`
      );
      const data = await response.json();
      console.log("dataVideo", data);

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
          width="860"
          height="480"
          src={`https://www.youtube.com/embed/${trailerId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};


// import { useState, useEffect } from "react";

// interface VideoComponentProps {
//   id: string;
// }

// export const VideoComponent: React.FC<VideoComponentProps> = ({ id }) => {
//   const [trailerId, setTrailerId] = useState("");
//   const [isIframeVisible, setIsIframeVisible] = useState(false);

//   useEffect(() => {
//     const getTMDBVideoInfo = async (id: string | string[]) => {
//       const KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`
//       );
//       const data = await response.json();
//       const trailer = data.results.find(
//         (video: any) => video.type === "Trailer" && video.site === "YouTube"
//       );
//       if (trailer) {
//         setTrailerId(trailer.key);
//       }
//     };
//     getTMDBVideoInfo(id);
//   }, [id]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const iframeElement = document.getElementById("youtube-iframe");
//       if (iframeElement) {
//         const rect = iframeElement.getBoundingClientRect();
//         if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//           setIsIframeVisible(true);
//         }
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   console.log("VIDEO", isIframeVisible, trailerId);

//   return (
//     <div>
//       {isIframeVisible && trailerId ? (
//         <iframe
//           id="youtube-iframe"
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${trailerId}`}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           title="Embedded YouTube"
//         />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };
