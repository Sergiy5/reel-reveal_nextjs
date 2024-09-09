import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

const secret = process.env.AUTH_SECRET;
export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const session = await auth();
  const isAuthenticated = !!session?.user;

  // console.log("IN_MIDDLEWARE_>>>>>>>>>>>>>", isAuthenticated, nextUrl.pathname);

  // Define the path where middleware should apply
  const protectedPaths = ["/profile", "/saved"];
  const pathname = req.nextUrl.pathname;

  // Check if the request is for a protected route
  if (!isAuthenticated && protectedPaths.some((path) => pathname.startsWith(path))) {
    
      const url = req.nextUrl.clone();
      url.pathname = "/auth";
      url.searchParams.set("from", pathname); // Optional: To redirect back after login
      return NextResponse.redirect(url);
  }
   
    // return NextResponse.next();
  }

// Apply middleware to specific paths or the entire app
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

export const config = {
  matcher: ["/saved/:path*", "/profile/:path*"], 
};
