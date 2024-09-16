import { signal } from "@preact/signals-react";

type StatusUserType = boolean;

export const userEmailSignal = signal<string>("");

export const userPasswordSignal = signal<string>("");

export const statusUserSignal = signal<StatusUserType>(false);

