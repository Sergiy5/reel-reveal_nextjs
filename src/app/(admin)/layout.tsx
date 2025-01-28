import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/app/components/header/Header";
import { Footer } from "@/app/components/footer/Footer";
import { Loader } from "@/app/components/ui/Loader";
import { getSessionUser } from "@/utils";

const DynamicServiceMoviesProvider = dynamic(() =>
  import("@/context/ServiceMoviesContext").then(
    (mod) => mod.ServiceMoviesProvider
  )
);

export default async function Layout({ children }: {children:React.ReactNode;}) {
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
