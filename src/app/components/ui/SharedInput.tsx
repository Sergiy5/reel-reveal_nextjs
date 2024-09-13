import { useEffect, useState } from "react";
import clsx from "clsx";
import { validateEmail, validatePassword } from "@/utils";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

interface CustomInputProps {
  label: string;
  type?: string;
  id: string;
  name?: string;
  isValid?: boolean;
  defaultValue?: string;
}

export const SharedInput: React.FC<CustomInputProps> = ({
  label,
  id,
  type = "text",
  name,
  defaultValue,
  isValid,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(() => (defaultValue ? true : false));
  const [isValidData, setIsValidData] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);


  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValid && isValid !== undefined) {
      if (e.target.name === "email") {
        validateEmail(e.target.value)
          ? setIsValidData(true)
          : setIsValidData(false);
      }
      if (e.target.name === "password") {
        validatePassword(e.target.value)
          ? setIsValidData(true)
          : setIsValidData(false);
      }
    }
  };

  // Show password =================================================================
 

  const togglePasswordVisibility = () => {
    console.log("PASSWORD_VISIBLE", passwordVisible);
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const confirmPasswordInput = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    
    if (id === "password" && passwordInput) {
        console.log("PASWORD_VISIBLE", passwordInput);
        passwordInput.type = passwordVisible ? "text" : "password";
      }
      if (id === "confirmPassword" && confirmPasswordInput) {
        confirmPasswordInput.type = passwordVisible ? "text" : "password";
      }
    }, [id, passwordVisible]);

  return (
    <div className="relative">
      <input
        onInput={handleInputChange}
        id={id}
        type={type}
        defaultValue={defaultValue ?? ""}
        name={name}
        autoComplete="on"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={clsx(
          `flex-grow w-full font-light h-10 text-light text-xl text-textColor bg-inputColor tracking-widest font-mono
           rounded-[18px] px-5  focus:outline-none transition-all duration-200 ease-in-out
            outline-none border border-transparent focus:border-accentColor hover:border-accentColor`,
          {
            "border-red-400 focus:border-red-400 hover:border-red-400 ":
              !isValidData,
          }
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className={clsx(
          "absolute bg-transparent left-5 text-accentColor transition-all duration-200 ease-in-out",
          isFocused || hasValue ? "-top-6" : " top-2"
        )}
      >
        {label}
      </label>
      {["password", "confirmPassword"].includes(id) && (
        <span
          id="show-password"
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {passwordVisible ? (
            <VscEye onClick={togglePasswordVisibility} />
          ) : (
            <VscEyeClosed onClick={togglePasswordVisibility} />
          )}
        </span>
      )}
    </div>
  );
};
