import { Button } from "@/shared/ui/Button";
import { useFavoriteIds } from "@/features/FavoritesMovies/model/useFavoriteIds";

export function MovieFavoriteButton({ movieId }) {
  const { toggleFavorite, isFavorite } = useFavoriteIds();
  const isFav = isFavorite(movieId);

  return (
    <Button variant="outlined" size="sm" onClick={() => toggleFavorite(movieId)}>
      {isFav ? "В избранном" : "В избранное"}
    </Button>
  );
}