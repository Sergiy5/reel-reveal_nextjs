import { connectDB } from "@/db/db";
import User from "@/db/models/user";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get("userEmail");
if(!email) return NextResponse.json({ message: "User must be logged in" });
  try {
  
  await connectDB();
  const user = await User.findOne({ email });

  return NextResponse.json(user.movies);

} catch (error) {
    console.log(error);
    throw new Error("Failed to get all liked movies");
}

}
