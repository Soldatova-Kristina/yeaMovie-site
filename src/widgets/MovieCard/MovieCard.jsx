import { MovieCardSearch } from "./MovieCardSearch";
import { MovieCardDetails } from "./MovieCardDetails";

export function MovieCard({ movie, variant = "search", className }) {
  if (variant === "details") {
    return <MovieCardDetails movie={movie} className={className} />;
  }

  return <MovieCardSearch movie={movie} className={className} />;
}