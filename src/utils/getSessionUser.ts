"use server";

import { cache } from "react";
import { headers } from "next/headers"; // Import headers from Next.js
import { auth } from "@/auth"; // Assuming auth is imported from another module
import { ISessionUser } from "@/typification";
import { userStatuses } from "@/variables";

// Wrap with React cache() to deduplicate calls within the same request
export const getSessionUser = cache(async (): Promise<ISessionUser> => {
  const headersInstance = await headers(); // Await headers() only if you need its data.

  const proto = headersInstance.get("x-forwarded-proto"); // Access specific header value if needed.

  const session = await auth();

  return {
    userId: session?.user?.id || "",
    userName: session?.user?.name || "",
    email: session?.user?.email || "",
    userStatus: session
      ? userStatuses.Authenticated
      : userStatuses.Unauthenticated,
  };
});
