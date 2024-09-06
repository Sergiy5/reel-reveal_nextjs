import { SessionProvider } from "next-auth/react";

export interface AutProviderProps {
  children: React.ReactNode;
  session: any;
}

export const AuthSessionPovider: React.FC<AutProviderProps> = ({
  children,
  session,
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
