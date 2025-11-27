import { getMoviesByFilters } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { useFetchData } from "@/shared/lib/hooks/useFetchData";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { MoviesGridHorizontal } from "@/widgets/MoviesGridHorizontal";
import { MovieFilters } from "@/features/FilterMovies/ui/MovieFilters";
import { useMovieFilters } from "@/features/FilterMovies/model/useMovieFilters";
import { Button } from "@/shared/ui/Button";

export default function FilmsByCategory() {
  const { filters, setFilters } = useMovieFilters();

  const { data: movies = [], loading, error } = useFetchData(
    async ({ signal }) => {
      const [ratingFrom, ratingTo] = filters.rating 
        ? filters.rating.split("-").map(Number)
        : [undefined, undefined];

      const rawMovies = await getMoviesByFilters({
        page: 1,
        limit: 8,
        genre: filters.genre || undefined,
        country: filters.country || undefined,
        year: filters.year || undefined,
        ratingFrom,
        ratingTo,
        sortField: filters.sort,
        sortOrder: filters.sortOrder,
        signal,
      });
      
      return rawMovies.map(normalizeMovieData);
    },
    [filters],
    { initialData: [] }
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        
        <div className="flex items-center justify-between mb-[40px]">
          <Button variant="secondary" size="md" className="pointer-events-none">
            Фильмы по категориям
          </Button>
        </div>

        <div className="mb-[40px]">
          <MovieFilters filters={filters} onChange={setFilters} />
        </div>

        <ErrorAndLoadingSection loading={loading} error={error}>
          <MoviesGridHorizontal movies={movies} variant="4x1" />
        </ErrorAndLoadingSection>

      </div>
    </div>
  );
}