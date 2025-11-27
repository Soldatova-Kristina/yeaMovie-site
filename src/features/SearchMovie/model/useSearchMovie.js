import { getMoviesByQuery } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { useFetchData} from "@/shared/hooks/useFetchData";
import { useDebounce } from "@/shared/hooks/useDebounce";

export function useSearchMovie(query) {
  const debouncedQuery = useDebounce(query, 500);

  const { data: movies, loading, error } = useFetchData(
  ({ signal }) => {
    if (!debouncedQuery?.trim()) return Promise.resolve([]);

    return getMoviesByQuery(debouncedQuery, 1, 10, { signal })
      .then(rawMovies => rawMovies.map(normalizeMovieData));
  },
  [debouncedQuery],
  { initialData: [] }
);

  return { movies, loading, error };
}
