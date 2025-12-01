import { useEffect, useRef } from "react";
import { cn } from "@/shared/lib/utils";

export function Modal({ isOpen, onClose, children, className }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className={cn(
          "relative w-full max-w-[1100px] bg-[#080423] rounded-[20px]",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[20px] z-10 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Закрыть"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 5L5 15M5 5L15 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
}