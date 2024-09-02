// middleware/auth.js
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const { pathname } = req.nextUrl;
  const protectedRoutes = ["/dashboard", "/settings"]; // add your protected routes here

  if (protectedRoutes.includes(pathname)) {
    const token = req.cookies["token"]; // replace with your actual token cookie name

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // you can also verify the token here if you want
    // const user = await verifyToken(token);
    // if (!user) {
    //   return NextResponse.redirect(new URL('/login', req.url));
    // }
  }

  return NextResponse.next();
}

// module.exports = {
//   // ... other config options ...
//   middleware: [
//     {
//       matcher: "/dashboard",
//       middleware: "./middleware/auth",
//     },
//     {
//       matcher: "/settings",
//       middleware: "./middleware/auth",
//     },
//   ],
// };