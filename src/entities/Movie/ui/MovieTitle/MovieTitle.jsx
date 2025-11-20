import { cn } from "@/shared/lib/utils";
import { MOVIE_TITLE_VARIANTS } from "../../model/constants";

export function MovieTitle({ title, variant = "sm", className }) {
  return (
    <h2 className={cn(MOVIE_TITLE_VARIANTS[variant], className)}>
      {title}
    </h2>
  );
}