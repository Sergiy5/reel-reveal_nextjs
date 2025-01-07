import { Signal, signal } from "@preact/signals-react";
import { userStatuses } from "@/variables";
import { sessionUser } from "@/typification";

export const userEmailSignal = signal<string>("");

export const userPasswordSignal = signal<string>("");

export const isAuthUserSignal = signal<boolean>();

export const sessionUserSignal: Signal = signal<sessionUser>({
  userId: "",
  email: "",
  userName: "",
  userStatus: userStatuses.Unauthenticated,
});
