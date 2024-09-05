import NextAuth, { Profile } from "next-auth";
import {Account, User as AuthUser} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "./db/db";
import User from "./db/models/user";
import { Adapter } from "next-auth/adapters";
import { signToken } from "./db/utils";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
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
              token: signToken(account.providerAccountId),// Store Google ID for future logins
            });
          }
          
        } catch (error) {
          console.log(error)
        }
  
      
  
}
  return true;
},
  },
  trustHost: true,
});
