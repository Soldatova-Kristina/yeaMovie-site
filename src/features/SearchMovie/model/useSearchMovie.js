import { useMovieListQuery } from "@/entities/Movie/model/hooks/useMovieListQuery";
import { getMoviesByQuery } from "@/entities/Movie/model/api";
import { useDebounce } from "@/shared/hooks/useDebounce";

export function useSearchMovie(query) {
  const debouncedQuery = useDebounce(query, 500);

  const { data: movies, loading, error } = useMovieListQuery(
    (signal) => {
      if (!debouncedQuery?.trim()) return Promise.resolve([]);
      return getMoviesByQuery(debouncedQuery, 1, 10, { signal });
    },
    [debouncedQuery],
    { 
      skip: !debouncedQuery?.trim(),
      fetchDetails: true 
    }
  );

  return { movies, loading, error };
}