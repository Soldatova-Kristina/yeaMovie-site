import { cn } from "@/shared/lib/utils";

export function MovieYear({ year, className }) {
  return (
    <span
      className={cn(
        "font-normal text-[16px] text-[rgba(21,21,21,0.28)]",
        className
      )}
    >
      {year}
    </span>
  );
}