import { MovieCardVibe } from "@/widgets/MovieCardVibe";
import { MOVIES_GRID_VARIANTS } from "@/widgets/MovieGrid/constants";
import { cn } from "@/shared/lib/utils";

export function MoviesGridHorizontal({ 
  movies, 
  variant = "4x2",
  className 
}) {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-[#7a7a7a] text-[18px]">Фильмы не найдены</p>
      </div>
    );
  }

  const maxMovies = variant === "4x2" ? 8 : variant === "4x1" ? 4 : movies.length;
  const displayedMovies = movies.slice(0, maxMovies);

  return (
    <div className={cn(MOVIES_GRID_VARIANTS[variant], className)}>
      {displayedMovies.map((movie) => (
        <MovieCardVibe key={movie.id} movie={movie} />
      ))}
    </div>
  );
}