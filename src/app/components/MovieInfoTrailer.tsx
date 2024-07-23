interface VideoComponentProps {
  id: number;
}

export const MovieInfoTrailer: React.FC<VideoComponentProps> = ({ id }) => {
 
  return (
    <div className={`video-container -mt-32 px-6 h-auto`}>
      <iframe
        src={`https://www.youtube.com/embed/${id} `}
        allowFullScreen
        className="video-iframe w-screen max-w-[1200px] px-24 aspect-[1200/670]"
        title="Description"
      />
    </div>
  );
};
