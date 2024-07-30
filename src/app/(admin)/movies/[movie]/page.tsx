import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { MovieInfoTrailer } from "@/app/components/MovieInfoTrailer";
import { MovieInfoCast } from "@/app/components/MovieInfoCast";
import dynamic from "next/dynamic";
import { getUpcomingMovies } from "@/app/services";
import { Movie } from "@/typification";

const DynamicSimilarMovies = dynamic(
  () =>
    import("@/app/components/SimilarMovies").then((mod) => mod.SimilarMovies),
  { ssr: false }
);


type ApiResponse = {
  results: Movie[];
};

export async function generateStaticParams() {
  const TOKEN = process.env.BEARER_TOKEN_TMDB;
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US`;

  try {
    const response = await fetch(url, {
      cache: "force-cache",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.results) return [{ movie: "3" }];

    const cutArr = data.results.slice(0, 5);

    const encodedMovie = cutArr.map((item: any) => {
// return {movie: JSON.stringify(item.id)}
     const str = encodeURIComponent(
        JSON.stringify({
          title: item.title,
          poster_path: item.poster_path,
          vote_average: item.vote_average,
          release_date: item.release_date,
          runtime: item.runtime,
          overview: item.overview,
          backdrop_path: item.backdrop_path,
        })
      )
return {movie: `${str}`}
    });
    // return { movie: decodeURIComponent(encodedMovie) };
    console.log("encodedMovie+++++++++++-------------------------------------------------", encodedMovie);
    return encodedMovie
  } catch (error) {
    console.error("Error fetching data:", error);
    return [{ movie: "3" }]; // Fallback in case of error
  }
}

export default async function OneMoviePage({
  params,
}: {
  params: { movie: string};
  }) {
  
  const { movie } = params;
console.log("MOVIE////////////////////////////////////////////////////////////////////", movie)
  if (movie !== "3") return (<div>Page</div>)
  
  const decodedMovie = JSON.parse(decodeURIComponent(movie));

  const { id, title, original_title } = decodedMovie;
  return (
    <main className={`pt-0 gap-0`}>
      <MovieInfo movie={decodedMovie} />
      <MovieInfoTrailer id={id} />
      <div className={`flex items-center justify-center flex-col w-full gap-16 md:gap-20 xl:gap-30`}>
        <MovieInfoCast id={id} />
        <DynamicSimilarMovies title={title ?? original_title} />
        <SliderCarousel />
        <TakeOurQuiz />
      </div>
    </main>
  );
}
