import { useState } from "react";
import clsx from "clsx";

interface CustomInputProps {
  label: string;
  id: string;
  type?: string;
  name?: string;
  defaultValue?: string;
}

export const SharedInput: React.FC<CustomInputProps> = ({
  label,
  id,
  type = "text",
  name,
  defaultValue,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(() => (defaultValue ? true : false));

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        defaultValue={defaultValue ?? ""}
        name={name}
        className={`flex-grow w-full font-light h-10 text-light text-xl text-textColor bg-inputColor
           rounded-[18px] px-5  focus:outline-none transition-all duration-200 ease-in-out
            outline-none border-[1px] border-transparent hover:border-accentColor focus:border-accentColor`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <label
        htmlFor={id}
        className={clsx(
          "absolute left-5 top-2 text-accentColor transition-all duration-200 ease-in-out",
          { " -top-6 left-4 bg-transparent px-1": isFocused || hasValue }
        )}
      >
        {label}
      </label>
    </div>
  );
};
