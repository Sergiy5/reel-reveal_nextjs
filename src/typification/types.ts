
export type DeviceType = "mobile" | "tablet" | "desktop";

export type OpenAiResponse = string[];
export type Actor = {
  adult: boolean;
  cast_id: number;
  name: string;
  character: string;
  original_name: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  order: number;
  popularity: number;
  profile_path: string;
};
