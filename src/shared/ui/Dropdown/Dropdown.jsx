import { useState, useRef, useEffect } from "react";
import { cn } from "@/shared/lib/utils";

export function Dropdown({ 
  value, 
  onChange, 
  options = [], 
  placeholder = "Выберите",
  className 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
    <button
  type="button"
  onClick={() => setIsOpen(!isOpen)}
  className={cn(
    "w-full px-[20px] py-[12px] rounded-[50px] border border-[#E0E0E0]",
    "text-[#080423] text-[16px] font-normal",
    "flex items-center justify-between gap-2",
    "hover:border-[#080423] transition-colors"
  )}
>
        <span className={cn(!selectedOption && "text-[#7a7a7a]")}>
          {selectedOption?.label || placeholder}
        </span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={cn("transition-transform", isOpen && "rotate-180")}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="#0f0a33"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[10px] border border-[#E0E0E0] shadow-lg z-50 max-h-[300px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-[20px] py-[12px] text-left text-[16px]",
                "hover:bg-[#0f0a33]/10 transition-colors",
                option.value === value && "bg-[#0f0a33]/5 font-medium"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}