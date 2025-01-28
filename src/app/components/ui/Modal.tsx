"use client";

import React, { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icon";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  toggleDuration?: number;
  isHideCross?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  isHideCross = false,
}) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isOpen]);

  useEffect(() => {
    const handleBodyScroll = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0px";
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  useEffect(() => {
    if (onClose) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      if (isOpen) {
        document.addEventListener("keydown", handleKeyDown);
      } else {
        document.removeEventListener("keydown", handleKeyDown);
      }

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose && onClose();
    }
  };

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal");

  if (!modalRoot) return null;

  return createPortal(
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleClickOutside(e)
      }
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
    >
      <div
        className="relative flex items-center justify-center shadow-lg"
        role="dialog"
        aria-modal="true"
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2"
            aria-label="Close Modal"
          >
            {!isHideCross && (
              <Icon
                id={"cross"}
                width={30}
                height={30}
                className={` w-[30px] h-[30px] lg:w-[38px] lg:h-[42px] text-textColor
                         transition duration-300 easy-in-out hover:text-accentColor`}
              />
            )}
          </button>
        )}
        {children}
      </div>
    </div>,
    modalRoot
  );
};
