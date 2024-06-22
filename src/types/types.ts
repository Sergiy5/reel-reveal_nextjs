import { LoadMoreCard, Movie } from "./interfaces";

export type DeviceType = "mobile" | "tablet" | "desktop";

export type OpenAiResponse = Movie[] | undefined;

export type CombinedMovieArr = [...Movie[], LoadMoreCard];
