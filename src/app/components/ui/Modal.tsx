"use client";

import React, { useEffect, ReactNode, useState } from "react";
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
const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if(!document) return
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

  
  useEffect(() => {
    const modalRoot = document?.getElementById("modal");
    setModalRoot(modalRoot);
  }, [])
  
  if (!modalRoot || !isOpen) return null;
  
  return createPortal(
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 flex items-center justify-center w-screen bg-black bg-opacity-80"
    >
      {/* This is the dynamic sizing wrapper */}
      <div className="relative max-w-screen inline-block">
        {children}
        {onClose && !isHideCross && (
          <button
            onClick={onClose}
            className="absolute z-50 p-1 top-4 right-4"
            aria-label="Close Modal"
          >
            <Icon
              id={"cross"}
              width={20}
              height={20}
              className="w-[20px] h-[20px] text-disabledColor transition duration-300 ease-in-out hover:text-accentColor"
            />
          </button>
        )}
      </div>
    </div>,
    modalRoot
  );
};
