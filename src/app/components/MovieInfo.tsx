'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams} from "next/navigation"
import { getMovieById } from '../api/actions/getMovieById'
import { Movie } from '@/types'

export const MovieInfo: React.FC = () => {
    const [movie, setMovie] = useState<Movie>()
    const { id } = useParams()

     useEffect(() => {
        const movieData = async (id: string | string[]) => {
            try {
                const result = await getMovieById(id);
                console.log("Movie Info", result);
                setMovie(result)
            } catch (error) {
                console.log(error)
            }
        }
        
        movieData(id)
     }, [id])
    
    // const { poster_path } = movie;
    // console.log('MOvie', movie)
    const poster = `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`;
        // poster_path
    //   ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
    //   : "/images/no-image.jpg";
    
    if (!id) {
      return <div>Loading...</div>;
    }
    
    return (
      <div className={` relative w-screen max-w-[1440px] h-[800px]`} >
            <Image
                src={`${poster}`}
                alt={"Movie image"}
                width={600}
                height={400}
                className={` absolute -top-[120px] w-screen h-800`} />
      </div>
    );
}