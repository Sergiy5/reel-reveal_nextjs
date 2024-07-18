"use client";

import { useEffect, useState } from "react";
import { getTrailer } from "../api/actions/getTrailler";
interface VideoComponentProps {
  id: string;
}

export const MovieInfoTrailer: React.FC<VideoComponentProps> = ({ id }) => {
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    const fetchTrailerId = async () => {
      try {
        const response = await getTrailer(id);
        if (response) {
          setTrailerId(response);
        }
      } catch (error) {
        console.error("Failed to fetch trailer data:", error);
      }
    };

    fetchTrailerId();
  }, [id]);

  return (
    <div className={`video-container px-6 h-auto`}>
      <iframe
        src={`https://www.youtube.com/embed/${trailerId} `}
        allowFullScreen
        className="video-iframe w-screen max-w-[1200px] px-24 aspect-[1200/670]"
        title="Description"
      />
    </div>
  );
};
