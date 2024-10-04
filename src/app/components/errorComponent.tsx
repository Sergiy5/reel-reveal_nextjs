import { ErrorComponentProps } from "@/typification";

export const ErrorComponent: React.FC<ErrorComponentProps> = ({
  error,
  reset,
  from,
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full flex-col h-96 gap-12 `}
    >
      <p
        className={`text-textColor`}
      >{`Something went wron on ${from} page: ${error.message}`}</p>
      <button
        onClick={() => reset()}
        className={`w-40 h-12 text-bgColor bg-accentColor border-solid rounded-md 
          z-30 transition border-r-2 hover:cursor-pointer active:bg-accentClicked`}
      >
        RELOAD...
      </button>
    </div>
  );
};
