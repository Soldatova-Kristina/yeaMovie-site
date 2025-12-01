import { useFavoriteIds } from "@/features/FavoritesMovies/model/useFavoriteIds";
import { useLoadFavoriteMovies } from "@/features/FavoritesMovies/model/useLoadFavoriteMovies";
import { FavoritesEmpty } from "@/features/FavoritesMovies/ui/FavoritesEmpty";
import { MoviesGridVertical } from "@/widgets/MovieGrid/MoviesGridVertical";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { ArrowLink } from "@/shared/ui/ArrowLink";

export default function FavoritesPage() {
  const { favorites } = useFavoriteIds();
  const { data: movies = [], loading, error } = useLoadFavoriteMovies(favorites);

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        
        <h1 className="text-center text-[#0f0a33] text-[32px] font-medium mb-[60px]">
          Избранное
        </h1>

        {favorites.length === 0 ? (
          <FavoritesEmpty />
        ) : (
          <ErrorAndLoadingSection loading={loading} error={error}>
            <ArrowLink back direction="left">Назад</ArrowLink>
            <MoviesGridVertical movies={movies} />
          </ErrorAndLoadingSection>
        )}
      </div>
    </div>
  );
}