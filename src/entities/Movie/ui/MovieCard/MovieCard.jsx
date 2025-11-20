import { MoviePoster } from '../MoviePoster';
import { MovieTitle } from '../MovieTitle';
import { MovieDescription } from '../MovieDescription';
import { MovieMeta } from '../MovieMeta';
// import { MovieRaiting } from '../MovieRaiting';
import { Button } from '@/shared/ui/Button';
import { cn } from '@/shared/lib/utils';

export function MovieCard({ movie, className }) {
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
    <div
      className={cn(
        'flex flex-row gap-[50px] bg-[#F5F5F5] rounded-[10px] p-[30px]',
        className
      )}
    >
      <div className="flex-shrink-0">
        <MoviePoster
          src={poster}
          alt={title}
          variant="searchResPoster"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-[20px]">
          <MovieTitle title={title} variant="xl" />

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
        <div className="mb-[40px]">
          <MovieMeta
            genre={genres.join(', ')}
            country={countries.join(', ')}
            year={year}
            director={director.join(', ')}
            actors={actors.join(', ')}
          />
        </div>
        <div className="flex gap-4 mt-auto">
          <Button
            variant="primary"
            size="md"
            className="bg-[#FF3D81] hover:bg-[#FF3D81]/90 text-white"
          >
            Смотреть
          </Button>

          <Button
            variant="outlined"
            size="md"
            className="border-2 border-[#FF3D81] text-[#FF3D81] hover:bg-[#FF3D81] hover:text-white"
          >
            В избранное
          </Button>
        </div>
      </div>
    </div>
  );
}