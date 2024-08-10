import React, { Suspense } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LayoutProps } from "@/typification";
import { Loader } from "../components/ui/Loader";

export default function Layout({ children }: LayoutProps) {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <div>{children}</div>
      <Footer />
    </Suspense>
  );
}
