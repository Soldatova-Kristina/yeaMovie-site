import { useMovieListQuery } from "@/entities/Movie/model/hooks/useMovieListQuery";
import { getPopularMovies, getPopularSeries } from "@/entities/Movie/model/api";

export function useLoadPopular(category) {
  const isMovies = category === "movie";

  return useMovieListQuery(
    (signal) => {
      const fetchFn = isMovies ? getPopularMovies : getPopularSeries;
      return fetchFn(1, 50, { signal });
    },
    [category]
  );
}