"use client";

import { useForm } from "react-hook-form";
import { userEmailSignal } from "@/context/UserContext";
import { fetchUserByEmail } from "../actions/fetchUserByEmail";
import { socialLogin } from "../actions/socialLogin";
import Google from "../../../public/icons/google.svg";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { validateEmail } from "@/utils";
import { Icon } from "./ui/Icon";

interface AuthLoginProps {
  setStatusUser: (statusUser: "register" | "signup") => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const AuthLogin: React.FC<AuthLoginProps> = ({
  setStatusUser,
  setIsLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<{ email: string }>({
    mode: "onChange",
  });

  const onSubmit = async (data: { email: string }) => {
    setIsLoading(true);

    try {
      const response = await fetchUserByEmail(data.email).then((res) =>
        res.json()
      );

      if (!response.user) {
        userEmailSignal.value = data.email;

        return setStatusUser("register");
      }

      if (response.user) {
        setStatusUser("signup");
        userEmailSignal.value = response.user.email;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-[387px] gap-6 justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-6 w-full`}
      >
        <SharedInput
          label="Email"
          id="email"
          type="text"
          register={register}
          validation={{ required: true, validate: validateEmail }}
          errors={errors}
        />

        <ButtonOrLink
          type="submit"
          disabled={!isValid}
          className={`w-full disabled:opacity-75`}
        >
          continue with email
        </ButtonOrLink>
      </form>
      <div className={`w-full flex items-center justify-center gap-2`}>
        <div className={`w-10 h-[1px] bg-gray-400 `}></div>
        <p>or use Google </p>
        <div className={`w-10 h-[1px] bg-gray-400 `}></div>
      </div>
      <ul className={`flex items-center justify-center gap-5 `}>
        <li>
          <form action={socialLogin}>
            <button
              type="submit"
              name="action"
              value="google"
              className={`group size-44 rounded-2xl font-normal text-2xl bg-bgLightColor transition duration-300 hover:text-accentColor`}
            >
              <div className="flex justify-center text-inherit group-hover:text-accentColor">
                <Icon
                  id="icon-google"
                  width={64}
                  height={64}
                  className="transition duration-300 group-hover:fill-accentColor"
                />
              </div>
              Google
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};
