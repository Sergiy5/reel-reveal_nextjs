import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify, decode } from "jsonwebtoken";
import { getCsrfToken } from "next-auth/react";
const { jwtDecrypt } = require("jose");
import { getToken } from "next-auth/jwt";
// import { decode } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET
export async function middleware(req: NextRequest) {
  
  // Extract the token from cookies
  const token = req.cookies.get("token");
  const googleToken = req.cookies.get("next-auth.session-token");
  
  if(!secret){
    throw new Error("AUTH_SECRET is not defined");
  }
  // const  payload  =  await getToken({ req })
  
  // Define the path where middleware should apply
  const protectedPaths = ["/profile", "/saved"];
  const pathname = req.nextUrl.pathname;
  
  // Check if the request is for a protected route
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    
    // If no token, redirect to login page
    if (!token && !googleToken) {

      const url = req.nextUrl.clone();
      url.pathname = "/auth";
      url.searchParams.set("from", pathname); // Optional: To redirect back after login
      
      return NextResponse.redirect(url);
    }
    if(!process.env.AUTH_SECRET){
      throw new Error("AUTH_SECRET is not defined");
    }
    
    // Decode the token, check its expiration, etc.
    // console.log("SECRET_AUTH_MIDDLEWARE>>>>>>>>",secret)
    if (googleToken && secret) {
      {
        try {
          console.log("googleToken=========", googleToken);

        } catch (error) {
          console.log("ERROR_TOKEN_MIDLEWARE>>>>>>>>>>>>>>", error);
          // Invalid token: redirect to login
          const loginUrl = new URL("/auth", req.url);
          return NextResponse.redirect(loginUrl);
        }
      }
    }

    // If the token is present or the route is not protected, allow the request to proceed
    return NextResponse.next();
  }
}
// Apply middleware to specific paths or the entire app
export const config = {
  matcher: ["/saved/:path*", "/profile/:path*"], // Example protected paths
};
