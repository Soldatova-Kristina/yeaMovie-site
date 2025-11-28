import { useParams } from "react-router-dom";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { MoviesGridHorizontal } from "@/widgets/MoviesGridHorizontal";
import { ArrowLink } from "@/shared/ui/ArrowLink";
import { useLoadPopular } from "@/features/PopularMovies/model/useLoadPopular";

export default function PopularPage() {
  const { category } = useParams();
  const isMovies = category === "movie";

  const title = isMovies
    ? "Популярные фильмы"
    : "Популярные сериалы";

  const { data: movies = [], loading, error } = useLoadPopular(category);

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