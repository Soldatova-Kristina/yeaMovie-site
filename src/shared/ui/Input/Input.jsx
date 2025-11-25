import { cn } from "@/shared/lib/utils"

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 rounded-full bg-white text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        "transition-all duration-200",
        className
      )}
      {...props}
    />
  )
}