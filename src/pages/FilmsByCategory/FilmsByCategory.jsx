import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

import { MovieFilters } from "@/features/FilterMovies/ui/MovieFilters";
import { useFiltersState } from "@/features/FilterMovies/model/useFiltersState";
import { useFilteredMovies } from "@/features/FilterMovies/model/useFilteredMovies";

import { MoviesGridHorizontal } from "@/widgets/MovieGrid/MoviesGridHorizontal";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { ArrowLink } from "@/shared/ui/ArrowLink";

export default function FilmsByCategory() {
  const [searchParams] = useSearchParams();

  const initialFilters = useMemo(
    () => ({
      genre: searchParams.get("genre") || "",
      country: searchParams.get("country") || "",
      year: searchParams.get("year") || "",
      rating: searchParams.get("rating") || "",
      sort: searchParams.get("sort") || "rating.kp",
      sortOrder: searchParams.get("sortOrder") || "desc",
    }),
    [searchParams]
  );

  const { filters, setFilters } = useFiltersState(initialFilters);

  const { data: movies = [], loading, error } = useFilteredMovies(filters);

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        
        <h1 className="text-center text-[#0f0a33] text-[32px] font-medium mb-[60px]">
          Фильмы по категориям
        </h1>

        <ArrowLink back direction="left" className="mb-[40px]">
          Назад
        </ArrowLink>

        <div className="mb-[40px]">
          <MovieFilters filters={filters} onChange={setFilters} />
        </div>

        <ErrorAndLoadingSection loading={loading} error={error}>
          <MoviesGridHorizontal movies={movies} variant="infinite" />
        </ErrorAndLoadingSection>

      </div>
    </div>
  );
}