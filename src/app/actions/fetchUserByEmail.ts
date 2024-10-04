import { NextResponse } from "next/server";

/**
 * Fetches a user by email.
 *
 * @param {string} email - The email of the user to fetch.
 * @returns {Promise<object>} A promise that resolves to the user object.
 */
export const fetchUserByEmail = async (email: string) => {
  
  try {
    const response = await fetch("/api/auth/get-user_by-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const { existingUser } = await response.json();
    
    return NextResponse.json({ user: existingUser });
  } catch (error) {
    console.error("Error fetching user by email:", error);

    return NextResponse.json({
      message: "Error fetching user by email",
      error,
    });
  }
};
