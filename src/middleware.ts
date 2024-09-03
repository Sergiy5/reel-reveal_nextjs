import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

    console.log("MIDDLEWARE ========================")
  // Extract the token from cookies
  const token = req.cookies.get("token");
console.log("TOKEN_Name=================", token)
  // Define the path where middleware should apply
  const protectedPaths = ["/profile", "/saved"];
  const pathname = req.nextUrl.pathname;

  // Check if the request is for a protected route
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    // If no token, redirect to login page
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth";
      url.searchParams.set("from", pathname); // Optional: To redirect back after login
      return NextResponse.redirect(url);
    }

    // Here you might want to validate the token if needed
    // e.g., decode the token, check its expiration, etc.
  }

  // If the token is present or the route is not protected, allow the request to proceed
  return NextResponse.next();
}

// Apply middleware to specific paths or the entire app
export const config = {
  matcher: ["/saved/:path*", "/profile/:path*"], // Example protected paths
};
