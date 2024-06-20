import Link from "next/link";
import { TypeDevice } from "@/types";
import LogoMain from "../../../public/icons/main-logo.svg";

export const MainLogo: React.FC<TypeDevice> = ({ deviceType }) => {
  
  return (
    <Link href={"/"} className="flex items-center ">
      <LogoMain alt="logo" width={48} height={48} />

      {deviceType === "desktop" && (
        <div className=" font-bold text-3xl text-textColor ">
          ReelReveal
        </div>
      )}
    </Link>
  );
};
