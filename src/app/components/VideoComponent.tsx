interface VideoComponentProps {
    id: string;
}
export const VideoComponent: React.FC<VideoComponentProps> = ({ id }) => {
    
    return (
      <div>
        <iframe
          className="w-full aspect-video self-stretch md:min-h-96"
          src={`https://www.youtube.com/embed/${id}`}
          title="Product Overview Video"
          aria-hidden="true"
        />
      </div>
    );
};