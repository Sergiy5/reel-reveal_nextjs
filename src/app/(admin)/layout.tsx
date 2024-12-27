import React, { Suspense } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LayoutProps } from "@/typification";
import { Loader } from "../components/ui/Loader";
import { ServiceMoviesProvider } from "@/context/ServiceMoviesContext";
import { getSessionUser } from "@/utils";

export default async function Layout({ children }: LayoutProps) {
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  return (
    <Suspense fallback={<Loader />}>
      <ServiceMoviesProvider userId={userId}>
        <Header />
        <div>{children}</div>
        <Footer />
      </ServiceMoviesProvider>
    </Suspense>
  );
}
