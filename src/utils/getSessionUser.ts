"use server";

import { headers } from "next/headers"; // Import headers from Next.js
import { auth } from "@/auth"; // Assuming auth is imported from another module
import { ISessionUser } from "@/typification";
import { userStatuses } from "@/variables";

export const getSessionUser = async (): Promise<ISessionUser> => {
  const headersInstance = await headers(); // Await headers() only if you need its data.
  // console.log(`Protocol>>>>>>>>>>>>>>>>>>>>>>>>>>>>_: ${headersInstance}`); // Debug log for x-forwarded-proto, optional.

  const proto = headersInstance.get("x-forwarded-proto"); // Access specific header value if needed.
  // console.log(`Protocol>>>>>>>>>>>>>>>>>>>>>>>>>>>>_: ${proto}`); // Debug log for x-forwarded-proto, optional.

  const session = await auth();

  return {
    userId: session?.user?.id || "",
    userName: session?.user?.name || "",
    email: session?.user?.email || "",
    userStatus: session
      ? userStatuses.Authenticated
      : userStatuses.Unauthenticated,
  };
};
