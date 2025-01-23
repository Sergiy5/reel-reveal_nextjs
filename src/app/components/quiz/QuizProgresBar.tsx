import clsx from "clsx";

interface QuizProgresBarProps{ page: number}


export const QuizProgresBar: React.FC<QuizProgresBarProps> = ({ page }) => {
  const barArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={` flex items-center gap-[4px]`}>
      {barArray.map((bar) => {
        const isFilled = bar < page;
        const isCurrent = bar <= page;

        return (
          <div
            key={bar}
            className={clsx("rounded-full w-4 h-4 border-[2px] border-solid", {
              "bg-accentColor": isFilled,
              "bg-bgColor": !isFilled,
              "border-accentColor": isCurrent,
              "border-textColor": !isCurrent,
            })}
          ></div>
        );
      })}
    </div>
  );
};
