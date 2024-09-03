import { signal } from "@preact/signals-react";

type StatusUserType = "logined" | "notLogined";

export const userEmailSignal = signal<string>("");

export const userPasswordSignal = signal<string>("");

export const statusUserSignal = signal<StatusUserType>("notLogined");

