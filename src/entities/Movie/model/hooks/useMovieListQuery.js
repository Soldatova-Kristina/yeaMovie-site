import { useFetchData } from "@/shared/hooks/useFetchData";
import { getMovieById } from "../api";
import { normalizeMovieData } from "../selectors";

export function useMovieListQuery(fetchFn, deps = [], options = {}) {
  const { fetchDetails = false, ...fetchOptions } = options;

  return useFetchData(
    async ({ signal }) => {
      const rawMovies = await fetchFn(signal);
      
      if (!rawMovies || !Array.isArray(rawMovies)) {
        return [];
      }

      if (fetchDetails) {
        const detailedMovies = await Promise.all(
          rawMovies.map(async (item) => {
            try {
              const fullData = await getMovieById(item.id, { signal });
              return normalizeMovieData(fullData);
            } catch (error) {
              console.warn(`Failed to load details for movie ${item.id}:`, error);
              return normalizeMovieData(item);
            }
          })
        );
        return detailedMovies;
      }

      return rawMovies.map(normalizeMovieData);
    },
    deps,
    { initialData: [], ...fetchOptions }
  );
}