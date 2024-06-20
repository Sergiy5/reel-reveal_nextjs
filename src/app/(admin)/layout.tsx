'use client'

import React from "react";
import { useDeviceType } from "@/hooks";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LayoutProps } from "@/types";


export default function Layout({ children }: LayoutProps) {

  const deviceType = useDeviceType();

  return (
    <>
      <Header deviceType={deviceType} />
      <div>{children}</div>
      <Footer deviceType={deviceType} />
    </>
  );
}
