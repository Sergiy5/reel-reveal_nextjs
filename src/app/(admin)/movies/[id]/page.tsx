import { getMovieById } from "@/app/api/actions/getMovieById";
import { MovieInfo } from "@/app/components/MovieInfo";
import SliderCarousel from "@/app/components/SliderCarousel";
import { TakeOurQuiz } from "@/app/components/TakeOurQuiz";
import { VideoComponent } from "@/app/components/VideoComponent";
import { GetServerSidePropsContext } from "next";

// export async function generateStaticParams() {

// return [];
// }

// export async function getServerSideProps(
//   context: GetServerSidePropsContext<any>
// ): Promise<{ props: { data: any } }> {
//   const { id } = context.params;
//   const token = process.env.BEARER_TOKEN_TMDB;

//   const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
//     next: { revalidate: 3600 },
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data: any = await response.json();

//   return { props: { data } };
// }

type MoviePageParams = {params:{id: string}}
export default async function MoviePage({ params }:MoviePageParams) {


  const { id } = params
  console.log('FOOT++++++++++++++++++++++++++', id)
  return (
    <>
    <main className={`pt-0`}>
      <MovieInfo id={id} />
      {/* <VideoComponent id={params.id} /> */}
      <SliderCarousel />
      <TakeOurQuiz />
    </main>
    </>
  );
}
// : { params: { data: string | []} }