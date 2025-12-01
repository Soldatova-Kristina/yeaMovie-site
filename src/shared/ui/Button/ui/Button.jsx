import { cn } from "@/shared/lib/utils"
import { BUTTON_VARIANTS, BUTTON_SIZES } from "@/shared/ui/Button/model/constants"

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md",
  className,
  ...props 
}) => {
  const baseStyles = "rounded-full font-medium transition-all duration-200";
  
  return (
    <button
      className={cn(
        baseStyles,
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};


