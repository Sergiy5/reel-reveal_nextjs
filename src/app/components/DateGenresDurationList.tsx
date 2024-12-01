import { hoursFromMinuts } from "@/utils";
import { nanoid } from "nanoid";

interface IGnre {
  id: number;
  name: string;
}

interface DateGenresDurationListProps {
  listGenres: IGnre[];
  runtime: number;
  reliseDate: Date;
}

export const DateGenresDurationList: React.FC<DateGenresDurationListProps> = ({ listGenres, reliseDate, runtime }) => {
  return (
    <ul className={`flex justify-start flex-wrap w-full`}>
      <li className={`rounded-2xl bg-bgColor m-2 px-2`}>
        {reliseDate.toString().slice(0, 4).replaceAll("-", " ")}
      </li>
      {listGenres?.map((item: IGnre) => {
        return (
          <li key={nanoid()} className={`rounded-2xl bg-bgColor m-2 px-2`}>
            {item.name}
          </li>
        );
      })}
      <li className={`rounded-2xl bg-bgColor m-2 px-2`}>
        {runtime ? hoursFromMinuts(runtime) : "Unknown duration"}
      </li>
    </ul>
  );
};
