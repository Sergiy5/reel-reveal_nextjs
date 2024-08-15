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
  try {
    // Connect to the database
    await connectDB();

    // Extract the email from the request body
    const { email } = await request.json();

    // Find a user with the provided email in the database
    const existingUser = await User.findOne({ email });

    // If no user is found, return a JSON response with a message indicating that the user is not found
    if (!existingUser) {
      return NextResponse.json(
        { message: "User not found" },
        {
          status: 404,
        }
      );
    }

    // If a user is found, return a JSON response with a message indicating that the user exists
    return NextResponse.json({ existingUser });
  } catch (error) {
    // Return a JSON response with a message indicating a server error
    return NextResponse.json(
      { message: "Server error" },
      {
        status: 500,
      }
    );
  }
}
