"use server";
import { ISessionUserSignal } from "@/context/UserContext";
import { auth } from "@/auth"; // assuming auth is imported from another module
import { userStatuses } from "@/variables";

export const getSessionUser = async (): Promise<ISessionUserSignal> => {
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
