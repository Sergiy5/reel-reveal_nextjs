import { Signal, signal } from "@preact/signals-react";

interface IUserSession {
  userId: string;
  email:string;
  userName:string;
  userStatus: string;
}

export const userEmailSignal = signal<string>("");

export const userPasswordSignal = signal<string>("");

export const isAuthUserSignal = signal<boolean>();

export const sessionUserSignal: Signal = signal<IUserSession>();
