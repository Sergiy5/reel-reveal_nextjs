import clsx from "clsx";

 interface MovieCardHoverBtnProps {
  iconId: string;
  text: string;
  isChecked: boolean;
  dataMovie: string;
  onClick?:((
        e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
      ) => void)
    | undefined;
  hoverd?: boolean;
}
export const MovieCardHoverBtn: React.FC<MovieCardHoverBtnProps> = ({
  iconId,
  text,
  isChecked,
  dataMovie,
  onClick,
  hoverd,
}): React.JSX.Element => {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-center w-7 h-7 bg-transparent rounded-full border-solid border-[1px] transition-all duration-350 ease-in-out",
        {
          group: hoverd,
          "border-accentColor text-accentColor": isChecked,
          "border-textColor text-textColor": !isChecked,
        }
      )}
    >
      <button
        type="button"
        data-movie={dataMovie}
        onClick={onClick}
        className={clsx(
          "absolute flex items-center justify-center right-0 text-transparent pr-6 w-7 h-7 border-solid border-[1px] border-r-hidden rounded-full overflow-hidden transition-all duration-350 ease-in-out",
          "group-hover:w-28 group-hover:text-textColor group-hover:border-textColor",
          {
            "text-accentColor": isChecked,
            "text-textColor": !isChecked,
          }
        )}
      >
        {text}
      </button>
      <svg className="w-4 h-4">
        <use xlinkHref={`/icons/sprite.svg#${iconId}`} />
      </svg>
    </div>
  );
};