// components/ButtonOrLink.tsx
import React from "react";
import Link from "next/link";

interface ButtonOrLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  transparent?: boolean;
  type?: "button" | "submit" | "reset";
}
export const ButtonOrLink: React.FC<ButtonOrLinkProps> = ({
  href,
  onClick,
  children,
  transparent,
  className = "",
  type,
  ...props
}) => {
  const commonClasses = `flex items-center justify-center h-10 font-[var(--cera-pro)] font-bold
    text-lg  leading-[333%] uppercase rounded-full cursor-pointer shadow-0 bg-accentColor
    transition-all duration-300  text-bgColor w-[285px]
    ${
      transparent &&
      `bg-transparent text-textColor border hover:border-accentColor hover:bg-transparent hover:text-accentColor
         border-solid border-textColor`
    }
     hover:shadow-hoverShadow hover:bg-accentColor 
     focus:shadow-[1px 2px 24px 0 rgba(32, 232, 218, 0.5)]
     focus:bg-accentColor focus:outline-2 focus:shadow-[1px 2px 24px 0 rgba(32, 232, 218, 0.3)]
     active:bg-clickedColor ${className}`;

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={commonClasses} {...props}>
      {children}
    </button>
  );
};
