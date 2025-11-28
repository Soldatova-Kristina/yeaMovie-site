import { useFetchData } from "@/shared/hooks/useFetchData";
import { getMovieById } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";

export function useLoadFavoriteMovies(favorites) {
  return useFetchData(
    ({ signal }) => {
      if (!favorites || favorites.length === 0) return Promise.resolve([]);

      const requests = favorites.map((id) =>
        getMovieById(id, { signal }).then(normalizeMovieData)
      );

      return Promise.all(requests);
    },
    [favorites],
    { initialData: [] }
  );
}