import { getMovieById } from "@/app/api/actions/getMovieById";
import { MovieInfoProps } from "@/types";
import Image from "next/image";

export const MovieInfo: React.FC<MovieInfoProps> = async ({ id }) => {
  const movie = await getMovieById(id);
console.log("id", id);
  const {
    backdrop_path,
    adult,
    genre_ids,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = movie;

  const poster = backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    : "/images/no-image.jpg";

  return (
    <div className={`relative w-screen max-w-[1440px] h-[800px]`}>
      <Image
        src={poster}
        alt={"Movie image"}
        width={600}
        height={400}
        className={`absolute -top-[120px] w-screen h-800`}
      />
      <p>{`Movie id: ${id}`}</p>
    </div>
  );
};
