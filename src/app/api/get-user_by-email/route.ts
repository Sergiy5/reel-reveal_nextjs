"use server";

import { NextResponse } from "next/server";
import User from "@/db/models/user";
import { connectDB } from "@/db/db";

/**
 * POST API endpoint to check if a user exists in the database.
 * This endpoint is used to check if a user with the provided email exists in the database.
 *
 * @param {Request} request - The request object containing the email and password.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object.
 * The response object contains a JSON object with a message indicating whether the user exists or not.
 * The status code of the response indicates the success or failure of the operation.
 */
export async function POST(request: Request): Promise<NextResponse> {
  // Connect to the database
  const { email } = await request.json();
    await connectDB();
    
  // Find a user with the provided email in the database
  const existingUser = await User.findOne({ email });

  // Extract the email and password from the request body
  // If no user is found, return a JSON response with a message indicating that the user is not found
    if (!existingUser) {
      
    return new NextResponse(
      JSON.stringify({ message: "User not found", user: existingUser }),
      {
        status: 404,
      }
    );
  }

  // If a user is found, return a JSON response with a message indicating that the user exists
  return new NextResponse(
    JSON.stringify({ message: "User exists", user: existingUser }),
    {
      status: 200,
    }
  );

  // return new NextResponse(JSON.stringify({ message: "Serever error" }), { status: 500 });
}
