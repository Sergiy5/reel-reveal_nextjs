import { useState } from "react";
import { saveUserMail } from "@/app/actions";

export const PopUp: React.FC = () => {
  const [valueInput, setValueInput] = useState<string>("");
  const [isMailSaved, setIsMailSaved] = useState<boolean>(false);
      
      const onSubmit = async (e: any) => {
        e.preventDefault();
        
    const nameInput = "entry.1014482569";
    const email = e.target[nameInput].value
    const requestBody = { [nameInput]: email }

    try {
      const response = await saveUserMail(requestBody);
      if(response?.ok) setIsMailSaved(true);
    } catch (error) {}
  };

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
        {!isMailSaved ? (
          <>
            <h4 className="text-xl font-medium text-center text-textColor">
              Please enter your email to join the waiting list
            </h4>
            <div className="flex justify-start items-center flex-col gap-3 grow-0 shrink-0 basis-auto">
              <form onSubmit={onSubmit}>
                <div className="relative flex items-center justify-center w-[360px] h-11 ">
                  <input
                    type="email"
                    name="entry.1014482569"
                    onChange={(e) => setValueInput(e.target.value)}
                    value={valueInput}
                    placeholder="enter your email"
                    className={`text-input w-full h-11 text-lg pl-6 pr-24 text-textColor bg-inputColor rounded-full transition
                    focus:outline-none focus:border focus:border-accentColor autofill:shadow-[inset_0_0_0px_1000px_rgb(32,36,59)]`}
                  />
                  <button
                    type="submit"
                    className={`absolute right-0 top-0 bg-accentColor text-lg font-bold uppercase text-bgColor transition-all duration-300
                   min-w-[87px] h-11 w-[87px] cursor-pointer rounded-[30px] border-[none] hover:opacity-80 `}
                  >
                    join
                  </button>
                </div>
              </form>
              <p className="leading-[14px] text-textColor grow-0 shrink-0 basis-auto">
                By sharing my email I agree to Privacy Policy and Terms of Use
              </p>
            </div>
          </>
        ) : (
          <h4 className="text-xl font-medium text-center text-textColor">
            Thank you! We have received your email.
          </h4>
        )}
      </div>
    </div>
  );
};
