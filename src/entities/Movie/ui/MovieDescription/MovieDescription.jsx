import { cn } from "@/shared/lib/utils";
import { MOVIE_DESCRIPTION_VARIANTS } from "../../model/constants";

export function MovieDescription({ description, shortDescription, variant = "black", className }) {
  const text = shortDescription || description;

  return (
    <p className={cn(MOVIE_DESCRIPTION_VARIANTS[variant], className)}>
      {text}
    </p>
  );
}