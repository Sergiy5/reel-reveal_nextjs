import ButtonOrLink from "../../ButtonOrLink";

function EmailSubscriptionBox() {
  return (
    <div className="bg-inputColor box-border flex justify-between items-center flex-row gap-2 w-full max-w-[360px] h-11 overflow-hidden pl-6 pr-4 rounded-[100px]">
      <div className="flex justify-center items-center flex-row gap-2.5 h-3">
        <p className="text-lg font-light text-disabledColor">
          enter your email
        </p>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <ButtonOrLink className="">
        join
      </ButtonOrLink>
    </div>
  );
}

export default EmailSubscriptionBox;
