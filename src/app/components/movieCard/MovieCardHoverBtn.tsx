import { Icon } from "../ui/Icon";

interface MovieCardHoverBtnProps {
  iconId: string;
  text: string;
  isChecked?: boolean;
  dataMovie: string;
  onClick?:
    | ((e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void)
    | undefined;
}
export const MovieCardHoverBtn: React.FC<MovieCardHoverBtnProps> = ({
  iconId,
  text,
  isChecked,
  dataMovie,
  onClick,
}): React.JSX.Element => {

  return (
    <div
      className={`group relative flex items-center justify-center w-7 h-7 bg-transparent rounded-full border-solid border
         transition-all duration-350 ease-in-out
        ${isChecked ? "border-accentColor" : "border-textColor"}
      `}
    >
      <button
        type="button"
        data-movie={dataMovie}
        onClick={onClick}
        className={`absolute flex items-center justify-center right-0 pr-6 w-7 h-7
           border-solid border border-r-hidden rounded-full overflow-hidden transition-all duration-350 ease-in-out
          group-hover:w-28 text-transparent
          ${
            isChecked
              ? "group-hover:text-accentColor border-accentColor"
              : "group-hover:text-textColor border-textColor"
          }
        `}
      >
        {text}
      </button>
      <Icon
        id={iconId}
        width={16}
        height={16}
        className={`${isChecked ? "text-accentColor" : "text-textColor"}`}
      />
    </div>
  );
};
