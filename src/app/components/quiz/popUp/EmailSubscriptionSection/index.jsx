import EmailSubscriptionBox from "../EmailSubscriptionBox";

function EmailSubscriptionSection() {
  return (
    <div className="box-border flex justify-start items-center flex-col gap-3 grow-0 shrink-0 basis-auto">
      <EmailSubscriptionBox />
      <p className="[font-family:Cera_Pro] text-sm font-light leading-[14px] text-[rgba(255,255,255,0.40)] grow-0 shrink-0 basis-auto m-0 p-0">
        By sharing my email I agree to Privacy Policy and Terms of Use
      </p>
    </div>
  );
}

export default EmailSubscriptionSection;
