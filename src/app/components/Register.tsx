"use client";

import Link from "next/link";
import { ButtonOrLink } from "./ui/ButtonOrLink";
import { SharedInput } from "./ui/SharedInput";
import { useEffect, useState } from "react";
import { Modal } from "./ui/Modal";
import { Loader } from "./ui/Loader";
import { userEmailSignal } from "@/context/UserContext";
import { registerUser } from "../actions/registerUser";
import { toast } from "react-toastify";
import { validateEmail, validatePassword } from "@/utils";

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export const Register: React.FC = () => {
  const [userData, setUserData] = useState<UserData | {}>();
  const [isValidData, setIsValidData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      // Remove spaces from all fields
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, key) => {
      formData.set(key, String(value).trim());
    });

    const data = Object.fromEntries(formData);
    const { email, password, name, "confirm password": confirmPassword } = data;

    const emptyFields = Object.keys(data).filter((key) => data[key] === "");

    if (emptyFields.length > 0) {
      emptyFields.forEach((field) => {
      return  toast.error(`${field} is required`);
      });
    } else if (!validateEmail(email as string)) {
        setIsValidData(false);
        return toast.error("Invalid email")
        
      } else if (!validatePassword(password as string)) {
      setIsValidData(true);
      return toast.error(
        "Password must be at least 8 characters, with uppercase, lowercase, digit, and special character."
      );
      }else if (password !== confirmPassword){
          return toast.error("Passwords do not match")
    } else {
        console.log("SET_DATA")
        //  setUserData({name, email, password});
      }
      
  };

  useEffect(() => {
    if (!userData) return;
    const regUser = async (userData: UserData | {}) => {
      setIsLoading(true);
      try {
        const response = await registerUser(userData);

        if (response) {
          return console.log("Register response:", response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    regUser(userData);
  }, [userData]);

  return (
    <div className={`flex flex-col items-center justify-center  gap-12 z-10`}>
      <h3>Please enter: name, email, and password.</h3>
      <div
        className={`flex flex-col items-center justify-center gap-6 w-[372px] `}
      >
        <form onSubmit={handleSubmit} className={`flex flex-col gap-10 w-full`}>
          <SharedInput label="Name" type="text" name="name" id="name" />
          <SharedInput
            label="Email"
            type="text"
            name="email"
            id="email"
            isValid={isValidData}
            defaultValue={`${userEmailSignal.value ?? ""}`}
          />
          <SharedInput
            label="Password"
            type="text"
            name="password"
            isValid={isValidData}
            id="password"
          />
          <SharedInput
            label="Confirm password"
            type="text"
            name="confirm password"
            id="Confirm password"
          />

          <ButtonOrLink type="submit" onClick={() => null} className={`w-full`}>
            create account
          </ButtonOrLink>
        </form>
        <Link href={`/register`} className={`link`}>
          <p>Forgot password?</p>
        </Link>
        <div className={`w-full h-[1px] bg-gray-500`}></div>
      </div>
      <p className={`text-lg`}>
        By signing in or creating an account, you agree with our Terms &
        Conditions and Privacy Policy
      </p>
      <Modal isOpen={isLoading}>
        <Loader />{" "}
      </Modal>
    </div>
  );
};
