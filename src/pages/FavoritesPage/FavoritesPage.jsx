import { useFavorites } from "@/entities/Favorites";
import { useFetchData } from "@/shared/hooks/useFetchData";
import { getMovieById } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { MoviesGridVertical } from "@/widgets/MoviesGridVertical";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { ArrowLink } from "@/shared/ui/ArrowLink";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const { data: movies = [], loading, error } = useFetchData(
    async () => {
      if (favorites.length === 0) return [];
      
      const moviePromises = favorites.map(id => 
        getMovieById(id).then(normalizeMovieData)
      );
      
      return Promise.all(moviePromises);
    },
    [favorites.join(",")],
    { initialData: [] }
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        <h1 className="text-center text-[#0f0a33] text-[32px] font-medium mb-[60px]">
          Избранное
        </h1>
        
        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#7a7a7a] text-[18px]">
              В избранном пока нет фильмов
            </p>
          </div>
        ) : (
          <ErrorAndLoadingSection loading={loading} error={error}>
            <ArrowLink back direction="left">
              Назад
            </ArrowLink>
            <MoviesGridVertical movies={movies} />
          </ErrorAndLoadingSection>
        )}
      </div>
    </div>
  );
}