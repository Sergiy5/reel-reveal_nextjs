"use server";

import {NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {

  const token = process.env.BEARER_TOKEN_TMDB;

   const id = req.nextUrl.searchParams;
console.log('+++', id)
  try {
      const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());;

  
   
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
