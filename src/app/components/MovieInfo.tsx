'use client'

import Image from 'next/image'
import { useParams } from "next/navigation"
import { useEffect } from 'react'

export const MovieInfo: React.FC = () => {
    const { id } = useParams()
   
    useEffect(() => {
        const movieData = async (id: string | string[]) => {
            try {
                
            } catch (error) {
                
            }
        }

        movieData(id)
    },[id])

    console.log("Movie Info",id)

    return <>
        <Image src={''} alt={"Movie image"} />
    </>;
}