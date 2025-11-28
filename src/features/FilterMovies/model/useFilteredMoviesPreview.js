import { useFetchData } from "@/shared/hooks/useFetchData";
import { getMoviesByFilters } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";

export function useFilteredMoviesPreview(filters, enabled) {
  return useFetchData(
    ({ signal }) => {
      if (!enabled) return Promise.resolve([]);

      const [ratingFrom, ratingTo] = filters.rating
        ? filters.rating.split("-").map(Number)
        : [undefined, undefined];

      return getMoviesByFilters({
        page: 1,
        limit: 4,
        genre: filters.genre || undefined,
        country: filters.country || undefined,
        year: filters.year || undefined,
        ratingFrom,
        ratingTo,
        sortField: filters.sort,
        sortOrder: filters.sortOrder,
        signal,
      }).then(raw => raw.map(normalizeMovieData));
    },
    [filters, enabled],
    { initialData: [] }
  );
}