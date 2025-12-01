import { useFetchData } from "@/shared/hooks/useFetchData";
import { getMovieStills } from "@/entities/Movie/model/api";
import { normalizeStillsData } from "@/entities/Movie/model/selectors";

export function useMovieStills(movieId, limit = 6) {
  const { data: stills = [], loading, error } = useFetchData(
    ({ signal }) => {
      if (!movieId) return Promise.resolve([]);

      return getMovieStills(movieId, 1, limit, { signal })
        .then(images => images.map(normalizeStillsData));
    },
    [movieId, limit],
    { initialData: [] }
  );

  return {
    stills,  
    loading,
    error,
  };
}