import { MoviePoster } from "../../entities/Movie/ui/MoviePoster";
import { MovieTitle } from "../../entities/Movie/ui/MovieTitle";
import { MovieDescription } from "../../entities/Movie/ui/MovieDescription";
import { MovieMeta } from "../../entities/Movie/ui/MovieMeta";
import { Button } from "@/shared/ui/Button";
import { cn } from "@/shared/lib/utils";
import { useNavigate } from "react-router-dom";

export function MovieCard({
   movie,
   variant = "search",
   className
   }) {

  const navigate = useNavigate();
  
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

  const isSearchVariant = variant === "search";
  const isDetailsVariant = variant === "details";
  const posterVariant = isSearchVariant ? "searchResPoster" : "detailsPoster";

  return (
    <div
      className={cn(
        "flex flex-row gap-[50px] bg-[#ffffff] rounded-[10px] p-[30px]",
        className
      )}
    >
      <div className="flex-shrink-0">
        <MoviePoster
          src={poster}
          alt={title}
          variant={posterVariant}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-[20px]">
          <div className="flex items-center gap-[40px]">
            <MovieTitle title={title} variant="xl" />
            
            {isDetailsVariant && (
              <Button
                variant="primary"
                size="sm"
              >
                В избранное
              </Button>
            )}
          </div>

          <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-4">
            {rating && (
              <div className="text-[#ffd233] font-medium text-[18px]">
                Кинопоиск {rating}/10
              </div>
            )}
            {imdbRating && (
              <div className="text-[#ffd233] font-medium text-[18px]">
                IMDB {imdbRating}/10
              </div>
            )}
          </div>
        </div>

        {description && (
          <MovieDescription
            description={description}
            variant="black"
            className="mb-[30px] line-clamp-4"
          />
        )}

        {isDetailsVariant && (
          <h2 className="text-[#0f0a33] text-[32px] font-medium mb-[20px]">
            О фильме
          </h2>
        )} 
        <div className="mb-[40px]">
          <MovieMeta
            genre={genres.join(", ")}
            country={countries.join(", ")}
            year={year}
            director={director.join(", ")}
            actors={actors.join(", ")}
          />
        </div>
        {isSearchVariant && (
          <div className="flex gap-4 mt-auto">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate(`/movie/${id}`)}
            >
              Смотреть
            </Button>
            <Button
              variant="outlined"
              size="sm"
            >
              В избранное
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}