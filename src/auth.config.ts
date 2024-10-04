
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
