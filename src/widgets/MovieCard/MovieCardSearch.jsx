import { MoviePoster } from "@/entities/Movie/ui/MoviePoster";
import { MovieDescription } from "@/entities/Movie/ui/MovieDescription";
import { MovieCardHeader } from "./MovieCardHeader";
import { MovieCardActions } from "./MovieCardActions";
import { MovieMeta } from "@/entities/Movie/ui/MovieMeta";

import { cn } from "@/shared/lib/utils";

export function MovieCardSearch({ movie, className }) {
  const {
    id,
    title,
    poster,
    rating,
    imdbRating,
    shortDescription,
    genres = [],
    countries = [],
    year,
    director = [],
    actors = [],
  } = movie;

  return (
    <div className={cn("flex gap-[30px] bg-white rounded-[10px] p-[30px]", className)}>
      <MoviePoster src={poster} alt={title} variant="searchResPoster" />

      <div className="flex-1 flex flex-col">
        <MovieCardHeader title={title} rating={rating} imdbRating={imdbRating} />

       {shortDescription && (
          <MovieDescription
            shortDescription={shortDescription}
            variant="black"
            className="mb-[30px] line-clamp-4"
          />
       )}
       
       <MovieMeta
          genre={genres.join(", ")}
          country={countries.join(", ")}
          year={year}
          director={director.join(", ")}
          actors={actors.join(", ")}
          showExtended={false}
        />

        <MovieCardActions id={id} />
      </div>
    </div>
  );
}