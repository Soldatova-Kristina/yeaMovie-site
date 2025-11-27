import { MoviePoster } from "@/entities/Movie/ui/MoviePoster";
import { MovieTitle } from "@/entities/Movie/ui/MovieTitle";
import { MovieYear } from "@/entities/Movie/ui/MovieYear";
import { MovieRating } from "@/entities/Movie/ui/MovieRaiting";
import { cn } from "@/shared/lib/utils";
import { useNavigate } from "react-router-dom";

export function MovieCardVibe({ movie, className }) {
  const navigate = useNavigate();

  const {
    id,
    title,
    poster,
    rating,
    year,
  } = movie;

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "w-[315px] h-[378px] cursor-pointer transition-transform hover:scale-105",
        className
      )}
    >
      <div className="mb-[10px]">
        <MoviePoster
          src={poster}
          alt={title}
          variant="gridPoster"
        />
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <MovieTitle 
          title={title} 
          variant="sm"
          className="flex-1 truncate"
        />
        <MovieYear year={year} />
      </div>

      {rating && (
        <MovieRating 
          rating={rating} 
          variant="simple"
        />
      )}
    </div>
  );
}