import { useState } from "react";
import { HeroBanner } from "@/widgets/HeroBanner";
import { Button } from "@/shared/ui/Button";
import { ArrowLink } from "@/shared/ui/ArrowLink";
import { MoviesGridHorizontal } from "@/widgets/MovieGrid/MoviesGridHorizontal";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { MovieFilters } from "@/features/FilterMovies/ui/MovieFilters";
import { useFiltersState } from "@/features/FilterMovies/model/useFiltersState";

import { useRandomMovie } from "@/features/RandomMovie/model/useRandomMovie";
import { useLoadPopular } from "@/features/PopularMovies/model/useLoadPopular";
import { useFilteredMoviesPreview } from "@/features/FilterMovies/model/useFilteredMoviesPreview";
import { buildFiltersUrl } from "@/features/FilterMovies/lib/buildFiltersUrl";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("movies");
  const { filters, setFilters } = useFiltersState();

  const { data: randomMovies, loading: randomLoading } = useRandomMovie();
  const randomMovie = randomMovies[0];

  const { data: movies, loading: moviesLoading, error: moviesError } =
    useLoadPopular("movie");

  const { data: series, loading: seriesLoading, error: seriesError } =
    useLoadPopular("series");

  const {
    data: filteredMovies,
    loading: filteredLoading,
    error: filteredError
  } = useFilteredMoviesPreview(filters, activeTab === "selection");

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">

        {!randomLoading && randomMovie && (
          <HeroBanner movie={randomMovie} className="mb-[80px]" />
        )}

        <div className="flex gap-[15px] mb-[40px]">
          <Button variant={activeTab === "movies" ? "secondary" : "notchosen"} onClick={() => setActiveTab("movies")}>Популярные фильмы</Button>
          <Button variant={activeTab === "series" ? "secondary" : "notchosen"} onClick={() => setActiveTab("series")}>Популярные сериалы</Button>
          <Button variant={activeTab === "selection" ? "secondary" : "notchosen"} onClick={() => setActiveTab("selection")}>Подборка фильмов</Button>
        </div>

        {activeTab === "movies" && (
          <section>
            <div className="flex justify-end mb-[20px]">
              <ArrowLink to="/popular/movie" direction="right">Смотреть всё</ArrowLink>
            </div>

            <ErrorAndLoadingSection loading={moviesLoading} error={moviesError}>
              <MoviesGridHorizontal movies={movies} variant="4x2" />
            </ErrorAndLoadingSection>
          </section>
        )}

        {activeTab === "series" && (
          <section>
            <div className="flex justify-end mb-[20px]">
              <ArrowLink to="/popular/series" direction="right">Смотреть всё</ArrowLink>
            </div>

            <ErrorAndLoadingSection loading={seriesLoading} error={seriesError}>
              <MoviesGridHorizontal movies={series} variant="4x2" />
            </ErrorAndLoadingSection>
          </section>
        )}

        {activeTab === "selection" && (
          <section>
            <MovieFilters filters={filters} onChange={setFilters} />

            <div className="flex justify-end mb-[20px]">
              <ArrowLink to={buildFiltersUrl(filters)} direction="right">
                Смотреть всё
              </ArrowLink>
            </div>

            <ErrorAndLoadingSection loading={filteredLoading} error={filteredError}>
              <MoviesGridHorizontal movies={filteredMovies} variant="4x1" />
            </ErrorAndLoadingSection>
          </section>
        )}
      </div>
    </div>
  );
}