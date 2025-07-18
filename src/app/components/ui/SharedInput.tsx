"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
// import { validateEmail, validatePassword } from "@/utils";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { UseFormReturn } from "react-hook-form";

interface CustomInputProps {
  label: string;
  type?: string;
  id: string;
  defaultValue?: string;
  isSubmited: boolean;
  onInput?: (value: string) => void;
  register: UseFormReturn<any, any>["register"];
  errors: UseFormReturn<any, any>["formState"]["errors"];
  validation?: {
    required?: boolean;
    validate?: (value: string) => string | boolean;
  };
}

export const SharedInput: React.FC<CustomInputProps> = ({
  register,
  errors,
  validation,
  onInput,
  isSubmited,
  label,
  id,
  type = "text",
  defaultValue,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(() => (defaultValue ? true : false));
  const [passwordVisible, setPasswordVisible] = useState(false);
  // For change color border input ===================================================
  const handleFocus = () => {
    setIsFocused((prev) => !prev);
  };
  // Input handler (if need) =================================================================
  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput && onInput(e.target.value);

    if (e.target.value.length > 1) setHasValue(true);
    else setHasValue(false);
  };

  // Show password =================================================================
  const togglePasswordVisibility = () => {
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
      passwordInput.type = passwordVisible ? "text" : "password";
    }
    if (id === "confirmPassword" && confirmPasswordInput) {
      confirmPasswordInput.type = passwordVisible ? "text" : "password";
    }
  }, [id, passwordVisible]);

  return (
    <div className="relative">
      <input
        onInput={onInputHandler}
        aria-label={`input ${label}`}
        id={id}
        type={type}
        defaultValue={defaultValue ?? ""}
        onFocus={handleFocus}
        {...register(id, { ...validation, onBlur: handleFocus })}
        autoComplete={
          ["password", "confirmPassword"].includes(id) ? "off" : "on"
        }
        className={`text-input flex-grow w-full font-light h-10 text-light text-xl text-textColor bg-inputColor tracking-widest font-mono
           rounded-[18px] px-5 focus:outline-none transition-all duration-200 ease-in-out outline-none border 
            autofill:shadow-[inset_0_0_0px_1000px_rgb(32,36,59)]
            
          ${!errors[id] && !hasValue && "border-transparent"} 
          ${isSubmited && errors[id] && "border-error  text-error"}
          ${!errors[id] && hasValue && "border-accentColor"}
            `}
      />
      <label
        htmlFor={id}
        className={clsx(
          "absolute bg-transparent left-5 text-textColor transition-all duration-200 ease-in-out",
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
