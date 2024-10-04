import { Signal, signal } from "@preact/signals-react";

export const userEmailSignal = signal<string>("");

export const userPasswordSignal = signal<string>("");

export const isAuthUserSignal = signal<boolean>();

export const sessionUserSignal: Signal<any> = signal<any>(null);
