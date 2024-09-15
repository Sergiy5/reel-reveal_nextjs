import NextAuth, {
  Session as NextAuthSession,
  User as NextAuthUser,
} from "next-auth";
import { JWT } from "next-auth/jwt";
import { IUserType } from "./auth";

// Define token and account interfaces
export interface IToken extends JWT {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiry: number;
  user: IUserType;
  error?: string;
}

export interface IAccount {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

 export interface Session extends NextAuthSession {
   user?: IUserType;
   accessToken?: string;
   error?: string;
 }

// Use NextAuth's User type for consistency
// If you have specific user properties, you can extend this type
// Otherwise, use the provided User type from NextAuth
type User = NextAuthUser;

// Function to refresh Google access token
async function refreshAccessToken(token: IToken): Promise<IToken> {
  try {
    const url = "https://oauth2.googleapis.com/token";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_ID!,
        client_secret: process.env.GOOGLE_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      }).toString(),
    });

    const refreshedTokens = await response.json();

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpiry: Date.now() + refreshedTokens.expires_in * 1000, // 1 hour as per Google documentation
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);

    // If refreshing token fails, return the old token and mark the session for failure
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authConfig = {
  session: {
    strategy: "jwt" as const, // Explicitly set the strategy as "jwt"
  },
  providers: [
    // Add your providers here
  ],
  callbacks: {
    // async jwt({
    //   token,
    //   account,
    //   user,
    // }: {
    //   token: IToken;
    //   account?: IAccount;
    //   user?: User;
    // }): Promise<IToken> {
    //   // Initial sign in, store the tokens
    //   if (account && user) {
    //     return {
    //       accessToken: account.access_token,
    //       refreshToken: account.refresh_token,
    //       accessTokenExpiry: Date.now() + account.expires_in * 1000,
    //       user: user as IUserType,
    //     };
    //   }

    //   // Return the token if the access token is not expired
    //   if (Date.now() < token.accessTokenExpiry) {
    //     return token;
    //   }

    //   // Access token has expired, try to refresh it
    //   return await refreshAccessToken(token);
    // },

    // async session({
    //   session,
    //   token,
    // }: {
    //   session: Session;
    //   token: IToken;
    // }): Promise<NextAuthSession> {
    //   session.user = token.user;
    //   session.accessToken = token.accessToken;
    //   session.error = token.error;

    //   return session;
    // },
  },
};

// import NextAuth, { Session, User } from "next-auth";
// import { JWT } from "next-auth/jwt";
// import { IUserType } from "./auth";
// export interface IToken extends JWT {
//   accessToken: string;
//   refreshToken: string;
//   accessTokenExpiry: number;
//   user: IUserType;
//   error?: string;
// }

// export interface IAccount {
//   access_token: string;
//   refresh_token: string;
//   expires_in: number;
// }

// export interface User {
//   name?: string;
//   email?: string;
//   picture?: string;
//   sub?: string;
// }

// // export interface Session extends NextAuthSession {
// //   user?: IUserType;
// //   accessToken?: string;
// //   error?: string;
// // }

// // Function to refresh Google access token
// async function refreshAccessToken(token: IToken): Promise<IToken> {
//   try {
//     const url = "https://oauth2.googleapis.com/token";

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: `client_id=${process.env.GOOGLE_ID}&client_secret=${process.env.GOOGLE_SECRET}&grant_type=refresh_token&refresh_token=${token.refreshToken}`,
//     });

//     const refreshedTokens = await response.json();

//     return {
//       ...token,
//       accessToken: refreshedTokens.access_token,
//       accessTokenExpiry: Date.now() + refreshedTokens.expires_in * 1000, // 1 hour as per Google documentation
//       refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
//     };
//   } catch (error) {
//     console.error("Error refreshing access token:", error);

//     // If refreshing token fails, return the old token and mark the session for failure
//     return {
//       ...token,
//       error: "RefreshAccessTokenError",
//     };
//   }
// }

// export const authConfig: Parameters<typeof NextAuth>[0] = {
//   session: {
//     strategy: "jwt", // Explicitly set the strategy as "jwt"
//   },
//   providers: [],
//   callbacks: {
//     async jwt({
//       token,
//       account,
//       user,
//     }: {
//       token: IToken;
//       account?: IAccount;
//       user?: User;
//     }): Promise<IToken> {
//       // Initial sign in, store the tokens
//       if (account && user) {
//         return {
//           accessToken: account.access_token,
//           refreshToken: account.refresh_token,
//           accessTokenExpiry: Date.now() + account.expires_in * 1000,
//           user: user as IUserType,
//         };
//       }

//       // Return the token if the access token is not expired
//       if (Date.now() < token.accessTokenExpiry) {
//         return token;
//       }

//       // Access token has expired, try to refresh it
//       return await refreshAccessToken(token);
//     },

//     async session({
//       session,
//       token,
//     }: {
//       session: Session;
//       token: IToken;
//     }): Promise<Session> {
//       session.user = token.user;
//       session.accessToken = token.accessToken;
//       session.error = token.error;

//       return session;
//     },
//   },
// };
