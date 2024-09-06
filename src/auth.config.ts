import NextAuth, { Session, User } from "next-auth";

export const authConfig: Parameters<typeof NextAuth>[0] = {
  session: {
    strategy: "jwt", // Explicitly set the strategy as "jwt"
  },
  providers: [],
};
