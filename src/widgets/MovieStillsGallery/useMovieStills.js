import { useFetchData } from "@/shared/hooks/useFetchData";
import { getMovieStills } from "@/entities/Movie/model/api";
import { normalizeStillsData } from "@/entities/Movie/model/selectors";

export function useMovieStills(movieId, showAll) {
  const limit = showAll ? 21 : 6;

  const { data: stills = [], loading, error } = useFetchData(
    ({ signal }) => {
      if (!movieId) return Promise.resolve([]);

      return getMovieStills(movieId, 1, limit, { signal })
        .then(images => images.map(normalizeStillsData));
    },
    [movieId, showAll],
    { initialData: [] }
  );

  const placeholders = Array(Math.max(0, limit - stills.length)).fill({});
  const filledStills = [
    ...stills,
    ...placeholders.map(normalizeStillsData),
  ];

  return {
    stills: filledStills,
    loading,
    error,
    limit
  };
}