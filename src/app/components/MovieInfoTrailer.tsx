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
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerId} `}
        allowFullScreen
        width={860}
        height={440}
        title="Description"
      />
    </div>
  );
};
