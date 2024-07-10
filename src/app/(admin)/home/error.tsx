"use client";

export interface ErrorComponentProp {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProp) {
  return (
    <div
      className={`flex items-center justify-center w-full flex-col h-96 gap-12 `}
    >
      <p
        className={`text-textColor`}
      >{`Something went wron ${error.message}`}</p>
      <button
        onClick={() => reset()}
        className={`w-40 h-12 text-bgColor bg-accentColor border-solid rounded-md 
          z-30 transition border-r-2 hover:cursor-pointer active:bg-accentClicked`}
      >
        TRY AGAIN
      </button>
    </div>
  );
}
