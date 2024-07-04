import Link from "next/link";
import { TypeDevice, ViewWidth } from "@/types";

export const LinkToQuiz: React.FC = () => {
  // const [isClient, setIsClient] = useState(false);
  // const deviceType: DeviceType = useDeviceType();

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // !isClient ? null : deviceType !== "mobile" &&
  return (
    <div
      className={` flex items-center justify-center flex-col gap-[28px] z-20 md:flex-row md:gap-12`}
    >
      <h2 className={`hidden md:flex`}>Take Our Quiz!</h2>

      <Link
        href={"/quiz"}
        className={`link-btn w-[249px] sm:w-[343px] md:w-[249px]`}
      >
        take a quiz
      </Link>
    </div>
  );
};
