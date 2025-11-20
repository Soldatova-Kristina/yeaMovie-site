import { cn } from "@/shared/lib/utils";

export function MovieMetaValue({ children, className }) {
  return (
    <p className={cn("font-normal text-[18px] text-[#7a7a7a]", className)}>
      {children}
    </p>
  );
}