import { getMoviesByQuery } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { useFetchData} from "@/shared/hooks/useFetchData";

export function useSearchMovie(query) {
  const { data: movies, loading, error } = useFetchData(
    async () => {
      const rawMovies = await getMoviesByQuery(query);
      if (!Array.isArray(rawMovies)) return [];
      return rawMovies.map(normalizeMovieData);
    },
    [query],
    { 
      skip: !query?.trim(),
      initialData: []
    }
  );

  return { movies, loading, error };
}
