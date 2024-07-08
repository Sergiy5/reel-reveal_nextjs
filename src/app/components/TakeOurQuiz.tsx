import { LinkToQuiz } from "./LinkToQuiz";

export const TakeOurQuiz = () => {
    
  return (
    <div
      className={` flex items-center justify-center flex-col gap-[28px] z-20 md:flex-row md:gap-12`}
    >
      <h2 className={`hidden md:flex`}>Take Our Quiz!</h2>
      <div className={`hidden md:block`}>
        <LinkToQuiz />
      </div>
    </div>
  );
};
