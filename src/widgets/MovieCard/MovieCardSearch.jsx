import { MoviePoster } from "@/entities/Movie/ui/MoviePoster";
import { MovieDescription } from "@/entities/Movie/ui/MovieDescription";
import { MovieCardHeader } from "./MovieCardHeader";
import { MovieCardActions } from "./MovieCardActions";
import { cn } from "@/shared/lib/utils";

export function MovieCardSearch({ movie, className }) {
  const {
    id,
    title,
    poster,
    rating,
    imdbRating,
    description,
  } = movie;

  return (
    <div className={cn("flex gap-[30px] bg-white rounded-[10px] p-[30px]", className)}>
      <MoviePoster src={poster} alt={title} variant="searchResPoster" />

      <div className="flex-1 flex flex-col">
        <MovieCardHeader title={title} rating={rating} imdbRating={imdbRating} />

        {description && (
          <MovieDescription
            description={description}
            variant="black"
            className="mb-[30px] line-clamp-4"
          />
        )}

        <MovieCardActions id={id} />
      </div>
    </div>
  );
}