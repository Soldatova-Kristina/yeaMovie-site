import { useFetchData } from "@/shared/hooks/useFetchData";
import { getMoviesByFilters } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";

export function useFilteredMovies(filters) {
  return useFetchData(
    ({ signal }) => {
      const [ratingFrom, ratingTo] = filters.rating 
        ? filters.rating.split("-").map(Number)
        : [undefined, undefined];

      return getMoviesByFilters({
        page: 1,
        limit: 50,
        genre: filters.genre || undefined,
        country: filters.country || undefined,
        year: filters.year || undefined,
        ratingFrom,
        ratingTo,
        sortField: filters.sort,
        sortOrder: filters.sortOrder,
        signal,
      }).then(rawMovies => rawMovies.map(normalizeMovieData));
    },
    [filters],
    { initialData: [] }
  );
}