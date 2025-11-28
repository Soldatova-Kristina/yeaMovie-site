import { MoviePoster } from "@/entities/Movie/ui/MoviePoster";
import { MovieDescription } from "@/entities/Movie/ui/MovieDescription";
import { MovieMeta } from "@/entities/Movie/ui/MovieMeta";
import { MovieCardHeader } from "./MovieCardHeader";
import { MovieFavoriteButton } from "./MovieFavoriteButton";
import { cn } from "@/shared/lib/utils";

export function MovieCardDetails({ movie, className }) {
  const {
    id,
    title,
    poster,
    rating,
    imdbRating,
    description,
    genres = [],
    countries = [],
    year,
    director = [],
    actors = [],
  } = movie;

  return (
    <div className={cn("flex gap-[50px] bg-white rounded-[10px] p-[30px]", className)}>
      <MoviePoster src={poster} alt={title} variant="detailsPoster" />

      <div className="flex-1 flex flex-col">
        <MovieCardHeader
          title={title}
          rating={rating}
          imdbRating={imdbRating}
          rightSlot={<MovieFavoriteButton movieId={id} />}
        />

        {description && (
          <MovieDescription
            description={description}
            variant="black"
            className="mb-[30px]"
          />
        )}

        <h2 className="text-[#0f0a33] text-[32px] font-medium mb-[20px]">
          О фильме
        </h2>

        <MovieMeta
          genre={genres.join(", ")}
          country={countries.join(", ")}
          year={year}
          director={director.join(", ")}
          actors={actors.join(", ")}
        />
      </div>
    </div>
  );
}