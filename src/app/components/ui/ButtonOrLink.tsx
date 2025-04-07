// components/ButtonOrLink.tsx
import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonOrLinkProps {
  href?: string;
  target?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  transparent?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
export const ButtonOrLink: React.FC<ButtonOrLinkProps> = ({
  href,
  target,
  onClick,
  children,
  transparent,
  className,
  type,
  disabled,
  ...props
}) => {
  const commonClasses = `flex items-center justify-center gap-2 text-blackColor h-10 font-semibold
    uppercase rounded-full shadow-0 bg-accentColor
    transition-all duration-300  text-bgColor w-full
     
    focus:shadow-[1px 2px 24px 0 rgba(32, 232, 218, 0.5)]
    focus:bg-accentColor focus:outline-2  focus:shadow-[1px 2px 24px 0 rgba(32, 232, 218, 0.3)]
     ${className}
      
    ${
      !disabled &&
      `active:bg-clickedColor hover:bg-clickedColor active:opacity-100 cursor-pointer hover:border hover:border-accentColor`
    }
    ${
      transparent &&
      `bg-transparent text-textColor border hover:border-accentColor hover:bg-transparent hover:text-accentColor
         border-solid border-textColor active:border-clickedColor active:bg-transparent focus:bg-transparent`
    }
    
     ${disabled && `opacity-50 cursor-default`}
    
    `;

  if (href) {
    return (
      <Link href={href} target={target} className={`${commonClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label="button"
      type={type}
      className={`${commonClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
