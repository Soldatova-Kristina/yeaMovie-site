import { useState } from "react";
import { getPopularMovies, getPopularSeries } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { useFetchData } from "@/shared/hooks/useFetchData";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { MoviesGridHorizontal } from "@/widgets/MoviesGridHorizontal";
import { ArrowLink } from "@/shared/ui/ArrowLink";
import { Button } from "@/shared/ui/Button";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("movies");

  const { data: movies = [], loading: moviesLoading, error: moviesError } = useFetchData(
    ({ signal }) => 
      getPopularMovies(1, 8, { signal })
        .then(rawMovies => rawMovies.map(normalizeMovieData)),
    [],
    { initialData: [] }
  );

  const { data: series = [], loading: seriesLoading, error: seriesError } = useFetchData(
    ({ signal }) => 
      getPopularSeries(1, 8, { signal })
        .then(rawSeries => rawSeries.map(normalizeMovieData)),
    [],
    { initialData: [] }
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        
        <div className="flex gap-[15px] mb-[40px]">
          <Button 
            variant={activeTab === "movies" ? "primary" : "secondary"}
            size="md"
            onClick={() => setActiveTab("movies")}
          >
            Популярные фильмы
          </Button>
          <Button 
            variant={activeTab === "series" ? "primary" : "secondary"}
            size="md"
            onClick={() => setActiveTab("series")}
          >
            Популярные сериалы
          </Button>
          <Button 
            variant={activeTab === "selection" ? "primary" : "secondary"}
            size="md"
            onClick={() => setActiveTab("selection")}
          >
            Подборка фильмов
          </Button>
        </div>

        {activeTab === "movies" && (
          <section>
            <div className="flex justify-end mb-[20px]">
              <ArrowLink to="/popular/movie" direction="right">
                Смотреть всё
              </ArrowLink>
            </div>
            
            <ErrorAndLoadingSection loading={moviesLoading} error={moviesError}>
              <MoviesGridHorizontal movies={movies} variant="4x2" />
            </ErrorAndLoadingSection>
          </section>
        )}

        {activeTab === "series" && (
          <section>
            <div className="flex justify-end mb-[20px]">
              <ArrowLink to="/popular/series" direction="right">
                Смотреть всё
              </ArrowLink>
            </div>
            
            <ErrorAndLoadingSection loading={seriesLoading} error={seriesError}>
              <MoviesGridHorizontal movies={series} variant="4x2" />
            </ErrorAndLoadingSection>
          </section>
        )}

        {activeTab === "selection" && (
          <div className="flex items-center justify-center py-20">
            <p className="text-[#7a7a7a] text-[18px]">
              Подборка фильмов в разработке
            </p>
          </div>
        )}

      </div>
    </div>
  );
}