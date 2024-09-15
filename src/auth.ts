import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "./db/db";
import User from "@/db/models/user";
import { signToken } from "@/db/utils";
import { authConfig } from "@/auth.config";

export interface IUserType {
  name: string;
  email: string;
  password: string;
  image: string;
  googleId?: string;
  token?: string;
}
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          return null;
        }

        try {
          await connectDB();

          const user: IUserType | null = await User.findOne({
            email: credentials.email,
          }).lean();

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            
            if (isMatch) {
              
              // console.log("USER_IN_AUTH_IS_MATCH_>>>>>>>>>>>>>>>>>", user);
              return user;
            } else {
              throw new Error("Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error: any) {
          console.log("AUTH_ERROR_>>>>>>>>>>>>>>", error);
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        await connectDB(); // Connect to MongoDB
        try {
          const userData: any = await User.findOne({ email: profile?.email });

          if (!userData) {
            // If no user exists, create a new user with Google OAuth
            await User.create({
              name: profile?.name,
              email: profile?.email,
              image: profile?.picture,
              googleId: account.providerAccountId,
              token: signToken(account.providerAccountId), // Store Google ID for future logins
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
  },
  trustHost: true,
});
