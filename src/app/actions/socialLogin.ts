"use server";

import { signIn, signOut } from "@/auth";
import { NextResponse } from "next/server";

export async function socialLogin(formData: FormData) {
    const action = formData.get("action") as string;
    
  await signIn(action, { redirectTo: "/home" });
// const response = NextResponse.json({
//   message: `User ${user.name} logged in successfully`,
//   response: "OK",
// });
// response.cookies.set("token", user.token, {
//   maxAge: 3600,
//   httpOnly: true,
//   secure: true,
//   sameSite: "strict",
//   path: "/",
// });

// return response;
  
}

export async function socialLogout() {
  await signOut({ redirectTo: "/home" });
}
