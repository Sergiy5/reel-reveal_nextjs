export const PopUp: React.FC = () => {
  return (
    <div className="bg-bgColor flex justify-start items-center flex-col gap-12 w-[800px] p-[54px] rounded-[18px]">
      <h2 className="text-textColor">Thanks for Trying Reel Reveal!</h2>
      <p className="text-textColor">
        You&apos;ve used all your free quiz attempts during our demo mode for 1
        day. <br />
        We&apos;re excited to bring you more features soon! Join our waiting
        list to stay updated on the launch of our paid plans and unlock
        unlimited quizzes.
      </p>
      <div className="flex justify-start items-center flex-col gap-6 self-stretch grow-0 shrink-0 basis-auto">
        <p className="text-xl font-medium text-center text-textColor self-stretch grow-0 shrink-0 basis-auto">
          Please enter your email to join the waiting list
        </p>
        <div className="flex justify-start items-center flex-col gap-3 grow-0 shrink-0 basis-auto">
          <div className="bg-[#20243b] flex justify-between items-center flex-row gap-2 w-[360px] h-11 grow-0 shrink-0 basis-auto overflow-hidden pl-[24.5px] pr-[3px] rounded-[100px]">
            <div className="flex justify-center items-center flex-row gap-2.5 h-[13px] grow-0 shrink-0 basis-auto">
              <input
                placeholder="enter your email"
                className="text-lg font-light text-textColor grow-0 shrink-0 basis-auto"
              />
            </div>
            {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <button className="bg-accentColor text-lg font-bold uppercase text-bgColor min-w-[87px] h-10 w-[87px] cursor-pointer block grow-0 shrink-0 basis-auto rounded-[30px] border-[none]">
              join
            </button>
          </div>
          <p className="leading-[14px] text-textColor grow-0 shrink-0 basis-auto">
            By sharing my email I agree to Privacy Policy and Terms of Use
          </p>
        </div>
      </div>
    </div>
  );
};
