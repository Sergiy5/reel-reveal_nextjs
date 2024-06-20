import { useState, useEffect } from "react";
import { useResize } from "./useResize";
import { DeviceType } from "@/types";

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => {
    if (typeof window === "undefined") {
      return "desktop";
    }
    if (window.innerWidth < 768) {
      return "mobile";
    } else if (window.innerWidth < 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  });


  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType("mobile");
      } else if (window.innerWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};
