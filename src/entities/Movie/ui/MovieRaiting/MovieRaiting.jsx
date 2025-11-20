import { cn } from "@/shared/lib/utils";
import { MOVIE_RATING_VARIANTS } from "../../model/constants";

export function MovieRating({ rating, imdb, variant = "simple", className }) {
  if (variant === "detailed") {
    return (
      <div className={cn("space-y-1", MOVIE_RATING_VARIANTS[variant], className)}>
        <div>Кинопоиск {rating}/10</div>
        <div>IMDB {imdb}/10</div>
      </div>
    );
  }

  return (
    <div className={cn(MOVIE_RATING_VARIANTS[variant], className)}>
      {rating}/10
    </div>
  );
}