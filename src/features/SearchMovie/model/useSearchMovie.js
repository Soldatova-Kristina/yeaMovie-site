import { getMoviesByQuery } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { useFetchData} from "@/shared/hooks/useFetchData";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { getMovieById } from "@/entities/Movie/model/api";

export function useSearchMovie(query) {
  const debouncedQuery = useDebounce(query, 500);

  const { data: movies, loading, error } = useFetchData(
    ({ signal }) => {
      if (!debouncedQuery?.trim()) return Promise.resolve([]);

      return getMoviesByQuery(debouncedQuery, 1, 10, { signal })
        .then(raw => Promise.all(
          raw.map(async (item) => {
            const id = item.id;

            const full = await getMovieById(id, { signal });

            return normalizeMovieData(full);
          })
        ));
    },
    [debouncedQuery],
    { initialData: [] }
  );

  return { movies, loading, error };
}