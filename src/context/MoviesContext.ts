import { signal } from "@preact/signals-react";
import { IStoredMovie, IMovie } from "@/typification";

export const qiuzMoviesSignal = signal<IMovie[]>([]);

export const searchQuerySignal = signal<string>("");

export const allMoviesSignal = signal<IMovie[]>([]);

export const favoriteMoviesSignal = signal<IMovie[]>([]);

export const totalSearchMoviesSignal = signal<number>(0);

export const savedMoviesSignal = signal<IStoredMovie[]>([]);
