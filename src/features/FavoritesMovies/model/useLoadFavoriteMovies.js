import { useMovieListQuery } from "@/entities/Movie/model/hooks/useMovieListQuery";
import { getMovieById } from "@/entities/Movie/model/api";

export function useLoadFavoriteMovies(favorites) {
  return useMovieListQuery(
    async (signal) => {
      if (!favorites || favorites.length === 0) return [];

      const requests = favorites.map((id) => getMovieById(id, { signal }));
      return Promise.all(requests);
    },
    [favorites],
    { skip: !favorites || favorites.length === 0 }
  );
}