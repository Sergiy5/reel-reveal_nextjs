export const EmailSubscriptionPrompt = () => {
  return (
    <div className="box-border flex justify-start items-center flex-col gap-6">
      <p className="text-xl font-medium text-center text-white">
        Please enter your email to join the waiting list
      </p>
      <div className="box-border flex justify-start items-center flex-col gap-3">
        <div className="bg-inputColor box-border flex justify-between items-center flex-row gap-2 w-[360px] h-11 overflow-hidden pl-[24.5px] pr-[3px] rounded-[100px]">
          <div className="box-border flex justify-center items-center flex-row gap-2.5 h-[13px]">
            <p className="text-lg font-light text-disabledColor">
              enter your email
            </p>
          </div>
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <ButtonOrLink className="bg-accentColor text-lg font-bold uppercase text-bgSelectDropDown min-w-[87px] h-10 w-[87px] cursor-pointer block box-border rounded-[30px] border-[none]">
            join
          </ButtonOrLink>
        </div>
        <p className="text-sm font-light leading-4 text-disabledColor">
          By sharing my email I agree to Privacy Policy and Terms of Use
        </p>
      </div>
    </div>
  );
};
