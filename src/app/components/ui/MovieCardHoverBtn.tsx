import clsx from "clsx";
import { Icon } from "./Icon";

 interface MovieCardHoverBtnProps {
  iconId: string;
  text: string;
  isChecked?: boolean;
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
        "relative flex items-center justify-center w-7 h-7 bg-transparent rounded-full border-solid border transition-all duration-350 ease-in-out",
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
          `absolute flex items-center justify-center right-0 text-transparent pr-6 w-7 h-7 border-solid border border-r-hidden
           rounded-full overflow-hidden transition-all duration-350 ease-in-out`,
          "group-hover:w-28 ",

          {
            // group: hoverd,
            " group-hover:text-accentColor group-hover:border-accentColor ":
              isChecked,
            " group-hover:text-textColor group-hover:border-textColor":
              !isChecked,
          }
        )}
      >
        {text}
      </button>
      <Icon id={iconId} width={16} height={16} styles="" />
      
    </div>
  );
};