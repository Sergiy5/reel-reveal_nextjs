import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LayoutProps } from "@/typification";
import { Loader } from "../components/ui/Loader";
import { getSessionUser } from "@/utils";

const DynamicServiceMoviesProvider = dynamic(() =>
  import("@/context/ServiceMoviesContext").then((mod) => mod.ServiceMoviesProvider)
);  


export default async function Layout({ children }: LayoutProps) {
  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;
 

  return (
    <Suspense fallback={<Loader />}>
      <DynamicServiceMoviesProvider userId={userId}>
        <Header />
        <div>{children}</div>
        <Footer />
      </DynamicServiceMoviesProvider>
    </Suspense>
  );
}
