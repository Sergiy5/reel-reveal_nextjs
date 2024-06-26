"use client";

import { useEffect, useState } from "react";
import { DeviceType } from "@/types";
import { useDeviceType } from "@/hooks";
import { MenuBtn } from "./MenuBtn";
import { HeaderNavMenu } from "./HeaderNavMenu";

export const HeaderNav: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  
  const deviceType: DeviceType = useDeviceType();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderContent = () => {
    if (!isClient) {
     return <HeaderNavMenu />;
    }
    if (deviceType === "desktop") {
     return <HeaderNavMenu />;
    }
    return (
      <MenuBtn />
    );
  };
  return <>{renderContent()}</>;
};
