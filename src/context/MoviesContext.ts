import { signal } from "@preact/signals-react";
import { Movie } from "@/typification";

export const qiuzMoviesSignal = signal<Movie[]>([]);

export const searchQuerySignal = signal<string>("");

export const popularMoviesSignal = signal<Movie[]>([]);

export const favoriteMoviesSignal = signal<Movie[]>([]);

export const totalSearchMoviesSignal = signal<number>(0);
