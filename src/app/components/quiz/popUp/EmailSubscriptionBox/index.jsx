import { Button } from "@mui/base";

function EmailSubscriptionBox() {
  return (
    <div className="bg-[#20243b] box-border flex justify-between items-center flex-row gap-2 w-[360px] h-11 grow-0 shrink-0 basis-auto overflow-hidden pl-[24.5px] pr-[3px] rounded-[100px]">
      <div className="box-border flex justify-center items-center flex-row gap-2.5 h-[13px] grow-0 shrink-0 basis-auto">
        <p className="[font-family:Urbanist,sans-serif] text-lg font-light text-[rgba(255,255,255,0.50)] grow-0 shrink-0 basis-auto m-0 p-0">enter your email</p>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#20e8da] [font-family:Cera_Pro] text-lg font-bold uppercase text-[#1b1733] min-w-[87px] h-10 w-[87px] cursor-pointer block box-border grow-0 shrink-0 basis-auto rounded-[30px] border-[none]">
        join
      </Button>
    </div>
  );
}

export default EmailSubscriptionBox;
