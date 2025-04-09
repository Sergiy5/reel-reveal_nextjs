import EmailSubscriptionBox from "../EmailSubscriptionBox";

export const EmailSubscriptionSection = () => {
  return (
    <div className="flex justify-start items-center flex-col gap-3">
      <EmailSubscriptionBox />
      <p className="text-sm font-light leading-3 text-disabledColor">
        By sharing my email I agree to Privacy Policy and Terms of Use
      </p>
    </div>
  );
};
