"use client";

import React, { Suspense } from "react";
import { useDeviceType } from "@/hooks";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DeviceType, LayoutProps } from "@/types";
import { LayoutProvider } from "@/context/LayoutContext";
import { Loader } from "../components/Loader";

export default function Layout({ children }: LayoutProps) {
  const deviceType: DeviceType = useDeviceType();

  return (
    <LayoutProvider deviceType={deviceType}>
            <Suspense fallback={<Loader />}>
      <Header deviceType={deviceType} />
      <div>{children}</div>
      <Footer deviceType={deviceType} />
          </Suspense>
    </LayoutProvider>
  );
}
