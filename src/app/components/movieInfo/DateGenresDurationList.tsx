import { hoursFromMinuts } from "@/utils";

interface IGnre {
  id: number;
  name: string;
}

interface DateGenresDurationListProps {
  listGenres: IGnre[];
  runtime: number;
  reliseDate: Date;
}

export const DateGenresDurationList: React.FC<DateGenresDurationListProps> = ({
  listGenres,
  reliseDate,
  runtime,
}) => {
  const year = reliseDate.toString().slice(0, 4).replaceAll("-", " ");
  const durationTime = runtime ? hoursFromMinuts(runtime) : "Unknown duration";
  const genres = listGenres.map((genre) => genre.name);

  const arr = [year, durationTime, ...genres];

  return (
    <ul className={`flex justify-start gap-2 flex-wrap w-full`}>
      {arr?.map((item: string, index) => {
        return (
          <li key={index}>
            <DateGenresDurationListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

interface DateGenresDurationListItemProps {
  item: string | number;
}
export const DateGenresDurationListItem: React.FC<
  DateGenresDurationListItemProps
> = ({ item }) => {
  return (
    <div
      className={`flex items-center rounded-full h-8 bg-bgColor py-2 px-4 text-lg`}
    >
      {item}
    </div>
  );
};
