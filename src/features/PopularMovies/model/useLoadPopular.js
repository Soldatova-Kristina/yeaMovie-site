import { useFetchData } from "@/shared/hooks/useFetchData";
import { getPopularMovies, getPopularSeries } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";

export function useLoadPopular(category) {
  const isMovies = category === "movie";

  return useFetchData(
    ({ signal }) => {
      const fetchFn = isMovies ? getPopularMovies : getPopularSeries;

      return fetchFn(1, 50, { signal })
        .then(raw => raw.map(normalizeMovieData));
    },
    [category],
    { initialData: [] }
  );
}