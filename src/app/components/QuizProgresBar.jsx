import clsx from "clsx";

export const QuizProgresBar = ({ page }) => {
  const barArray = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={` flex flex-row items-center gap-2 w-[244px] h-[68px] `}>
      {barArray.map((bar) => {
        const isFilled = bar < page;
        const isCurrent = bar <= page;

        return (
          <div
            key={bar}
            className={clsx("rounded-full w-7 h-7 border-[3px] border-solid", {
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
