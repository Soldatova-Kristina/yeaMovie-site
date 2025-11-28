import { useState } from "react";

export function useFiltersState(initialFilters = {}) {
  const defaultFilters = {
    genre: "",
    country: "",
    year: "",
    rating: "",
    sort: "rating.kp",
    sortOrder: "desc",
  };

  const [filters, setFilters] = useState({
    ...defaultFilters,
    ...initialFilters,
  });

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  return {
    filters,
    setFilters,
    resetFilters,
  };
}
