import { useMovieListQuery } from "@/entities/Movie/model/hooks/useMovieListQuery";
import { getMoviesByFilters } from "@/entities/Movie/model/api";

export function useFilteredMovies(filters) {
  return useMovieListQuery(
    (signal) => {
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
      });
    },
    [filters]
  );
}