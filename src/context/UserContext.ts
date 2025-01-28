import { Signal, signal } from "@preact/signals-react";
import { userStatuses } from "@/variables";
import { ISessionUser } from "@/typification";

export const userEmailSignal = signal<string>("");

export const userPasswordSignal = signal<string>("");

export const isAuthUserSignal = signal<boolean>(false);

export const sessionUserSignal: Signal = signal<ISessionUser>({
  userId: "",
  email: "",
  userName: "",
  userStatus: userStatuses.Unauthenticated,
});
