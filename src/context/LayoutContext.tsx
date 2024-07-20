import React, { createContext, useContext, ReactNode } from "react";
import { LayoutContextProps, LayoutProviderProps } from "@/typification";

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }

  return context;
};

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  deviceType,
  children,
}) => {
  return (
    <LayoutContext.Provider value={{ deviceType }}>
      {children}
    </LayoutContext.Provider>
  );
};
