import { useParams } from "react-router-dom";
import { getPopularMovies, getPopularSeries } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { useFetchData } from "@/shared/hooks/useFetchData";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { MoviesGridHorizontal } from "@/widgets/MoviesGridHorizontal";
import { ArrowLink } from "@/shared/ui/ArrowLink";

export default function PopularPage() {
  const { category } = useParams();
  
  const isMovies = category === "movie";
  const title = isMovies ? "Популярные фильмы" : "Популярные сериалы";

  const { data: movies = [], loading, error } = useFetchData(
    ({ signal }) => {
      const fetchFn = isMovies ? getPopularMovies : getPopularSeries;
      
      return fetchFn(1, 50, { signal })
        .then(rawMovies => rawMovies.map(normalizeMovieData));
    },
    [category],
    { initialData: [] }
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        <h1 className="text-center text-[#0f0a33] text-[32px] font-medium mb-[60px]">
          {title}
        </h1>
        
        <ErrorAndLoadingSection loading={loading} error={error}>
          <ArrowLink back direction="left" className="mb-[40px]">
            Назад
          </ArrowLink>
          <MoviesGridHorizontal movies={movies} variant="infinite" />
        </ErrorAndLoadingSection>
      </div>
    </div>
  );
}