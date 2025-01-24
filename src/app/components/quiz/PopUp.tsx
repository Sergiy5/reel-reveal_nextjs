import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const PopUp: React.FC = () => {
  const [valueInput, setValueInput] = useState<string | undefined>();
  
const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<{ email: string }>({
    mode: "onChange",
  });

  const onSubmit = (data: {email:string}) => {
  console.log(data)
}

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e)
  // }

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
              <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center flex-row gap-2 w-[360px] h-11 grow-0 shrink-0 basis-auto overflow-hidden pl-[24.5px] pr-[3px] rounded-[100px]">
            <div className="flex justify-center items-center flex-row gap-2.5 h-[13px] grow-0 shrink-0 basis-auto">

                <input
                type="email"
                {...register("email")}
                placeholder="enter your email"
                className="text-lg font-light bg-bgColor text-textColor grow-0 shrink-0 basis-auto"
                />
            </div>
            <button
              type="submit"
              className="bg-accentColor text-lg font-bold uppercase text-bgColor min-w-[87px] h-10 w-[87px] cursor-pointer block grow-0 shrink-0 basis-auto rounded-[30px] border-[none]"
              >
              join
            </button>
          </div>
              </form>
          <p className="leading-[14px] text-textColor grow-0 shrink-0 basis-auto">
            By sharing my email I agree to Privacy Policy and Terms of Use
          </p>
        </div>
      </div>
    </div>
  );
};
