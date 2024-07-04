"use client";

import { useEffect, useState } from "react";
import { GetShowMovies } from '@/app/components/GetShowMovies';
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { LinkToQuiz } from "@/app/components/LinkToQuiz";
import { Quiz } from "@/app/components/Quiz";
import { useDeviceType } from "@/hooks";
import { DeviceType, Movie } from "@/types";
import { Genres } from "@/app/components/Genres";
import { GetStaticProps, NextPage } from "next";
import { moviesFromTmdb } from "@/app/actions/moviesFromTmdb";

interface HomeProps {
  movies: Movie[];
}

const Home: NextPage<HomeProps> = ({ movies }) => {
  const [isClient, setIsClient] = useState(false);
  const deviceType: DeviceType = useDeviceType();

 


  // export async function getServerSideProps() {
    
  //   console.log(process.env.BEARER_TOKEN_TMDB);
  //   return {
  //     props: {
  //       hello:'HELLO'
  //     }
  //   }
  // }

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main>
      <Hero />
      <HowItWorks />
      <Quiz />
      <GetShowMovies
        title={"Upcoming 20 movies in 2024"}
        category={"upcoming"}
        movies={movies}
      />
      <GetShowMovies
        title={"TOP 20 rated movies"}
        category={"top_rated"}
        movies={movies}
      />
      <Genres />
      {!isClient ? null : deviceType !== "mobile" && <LinkToQuiz />}
    </main>
  );
};
export default Home

// export const getStaticProps: GetStaticProps = async () => {
//   console.log(process.env.BEARER_TOKEN_TMDB);
//   const movies = await moviesFromTmdb("upcoming", "1");
//   console.log("first", movies);
//   return {
//     props: { movies },
//     revalidate: 60,
//   };
// };