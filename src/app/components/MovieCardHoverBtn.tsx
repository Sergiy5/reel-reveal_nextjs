import { MovieCardHoverBtnProps } from "@/types";
import clsx from "clsx";


export const MovieCardHoverBtn: React.FC<MovieCardHoverBtnProps> = ({
  id,
  text,
  isChecked,
  dataMovie,
  onClick
}): React.JSX.Element => {
  return (
    <>
      <button
        type="button"
        data-movie={dataMovie}
        onClick={onClick}
        className={clsx(
          `relative flex items-center justify-center w-7 h-7 bg-transparent rounded-full
           border-solid border-[1px] transition-all duration-350 ease-in-out group`,
          {
            "border-accentColor text-accentColor": isChecked,
            "border-textColor text-textColor": !isChecked,
          }
        )}
      >
        <div
          className={clsx(
            ` absolute flex items-center justify-center right-0 text-transparent pr-6 w-7 h-7 border-t
             border-b border-l rounded-full overflow-hidden transition-all duration-350 ease-in-out`,
            ` group-hover:w-28 group-hover:text-textColor group-hover:border-textColor`,
            {
              "text-accentColor": isChecked,
              "text-textColor": !isChecked,
            }
          )}
        >
          {text}
        </div>
        <svg className="w-4 h-4">
          <use xlinkHref={`/icons/sprite.svg#${id}`} />
        </svg>
      </button>
    </>
  );
};
