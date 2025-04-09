import { Icon } from "../ui/Icon";
import { ButtonOrLink } from "../ui";
import Image from "next/image";

const proPreferencesList = [
  "Unlimited movie quizes",
  "Movie recommendations made with AI",
  `AI operated chat (coming\u00A0soon)`,
];

export const Popup: React.FC = () => {
  return (
    <div className="relative flex items-center gap-10 w-full h-full bg-bgColor rounded-2xl mx-auto px-4 pb-4 lg:pb-0 md:px-16 pt-16">
      <Image
        src="/images/iphone_14.webp"
        width={343}
        height={570}
        alt="iphon_14"
        className="mt-auto rounded-t-3xl hidden lg:block"
      />
      <div className="flex flex-col justify-start items-start w-full lg:max-w-96 gap-14 mx-auto">
        <h2 className="w-full">Get unlimited access with Pro</h2>
        <ul className="flex flex-col justify-start items-start gap-6">
          {proPreferencesList.map((item, index) => (
            <li key={index} className="flex justify-start items-center gap-4">
              <Icon
                id={"cross"}
                width={16}
                height={16}
                className="text-white rotate-45"
              />
              <h5 className="flex flex-wrap text-xl font-medium text-start text-white">
                {item}
              </h5>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-start items-start gap-4">
          <h2>€5</h2>
          <p>Monthly, no auto-charges</p>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-start gap-2 w-full">
          <ButtonOrLink transparent className="w-full">
            {/* <p className="text-base font-medium text-left uppercase text-white"> */}
            keep free Plan
            {/* </p> */}
          </ButtonOrLink>
          <ButtonOrLink
            href="https://buy.stripe.com/test_cN27vHdLm69n7TifYY"
            target="_blank"
            className="w-full"
          >
            {/* <p className="text-base font-medium text-left uppercase text-[#17171d]"> */}
            Get pro
            {/* </p> */}
            <Icon
              id="icon-crown"
              width={20}
              height={17}
              className="text-bgColor"
            />
          </ButtonOrLink>
        </div>
      </div>
    </div>
  );
};