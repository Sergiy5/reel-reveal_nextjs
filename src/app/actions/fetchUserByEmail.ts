import {fetchUserByEmailResponse} from "@/typification";

/**
 * Fetches a user by email.
 *
 * @param {string} email - The email of the user to fetch.
 * @returns {Promise<object>} A promise that resolves to the user object.
 */
export const fetchUserByEmail = async (
  email: string
): Promise<fetchUserByEmailResponse> => {

  try {
    const response = await fetch("/api/get-user_by-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    return response.json();
  } catch (error) {
    console.error("Error fetching user by email:", error);
  }
};