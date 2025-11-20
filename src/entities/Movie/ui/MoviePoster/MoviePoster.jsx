import { cn } from "@/shared/lib/utils";
import { MOVIE_POSTER_VARIANTS } from "../../model/constants";

export function MoviePoster({ src, alt = "", variant = "gridPoster", className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "object-cover", 
        MOVIE_POSTER_VARIANTS[variant], 
        className
      )}
    />
  );
}