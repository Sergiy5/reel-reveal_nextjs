import { connectDB } from "@/db/db";
import User from "@/db/models/user";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    // Validate userId
    const mongoose = require("mongoose");
    const objectId = mongoose.Types.ObjectId;

    if (!objectId.isValid(userId)) {
      return NextResponse.json({ error: "Invalid userId" }, { status: 400 });
    }

    await connectDB();

    const user = await User.findById(userId)
      .then((user) => {
        if (user) {
          
          return user;
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error("Error finding user:", error);
      });
    return NextResponse.json(user.movies);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get all liked movies");
  }
}
