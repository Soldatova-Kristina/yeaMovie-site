import { useState } from "react";

export function useMovieFilters(initialFilters = {}) {
  const [filters, setFilters] = useState({
    genre: "",
    country: "",
    year: "",
    rating: "",
    sort: "rating.kp",
    sortOrder: "desc",
    ...initialFilters,
  });

  const resetFilters = () => {
    setFilters({
      genre: "",
      country: "",
      year: "",
      rating: "",
      sort: "rating.kp",
      sortOrder: "desc",
    });
  };

  return {
    filters,
    setFilters,
    resetFilters,
  };
}