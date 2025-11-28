import { useFetchData } from "@/shared/hooks/useFetchData";
import { getRandomMovies, getPopularMovies } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";

export function useRandomMovie() {
  return useFetchData(
    async ({ signal }) => {
      const random = await getRandomMovies(1, 1, { signal });
      const fallback = await getPopularMovies(1, 1, { signal });
      return (random.length ? random : fallback).map(normalizeMovieData);
    },
    [],
    { initialData: [] }
  );
}