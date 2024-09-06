"use server";

import { signIn, signOut } from "@/auth";
import { NextResponse } from "next/server";

export async function socialLogin(formData: FormData) {
    const action = formData.get("action") as string;
    
  await signIn(action, { redirectTo: "/home" });  
}

export async function socialLogout() {
  await signOut({ redirectTo: "/home" });
}
