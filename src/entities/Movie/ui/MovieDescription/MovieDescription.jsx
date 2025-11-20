import { cn } from "@/shared/lib/utils";
import { MOVIE_DESCRIPTION_VARIANTS } from "../../model/constants";

export function MovieDescription({ description, variant = "black", className }) {
  return (
    <p className={cn(MOVIE_DESCRIPTION_VARIANTS[variant], className)}>
      {description}
    </p>
  );
}