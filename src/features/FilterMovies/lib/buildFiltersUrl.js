export function buildFiltersUrl(filters) {
  const params = new URLSearchParams();

  for (const key in filters) {
    if (filters[key]) params.set(key, filters[key]);
  }

  const query = params.toString();
  return `/films-by-category${query ? `?${query}` : ""}`;
}