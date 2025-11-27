import { requestMovieList } from "./requestMovieList";
import { apiClient } from "@/shared/api/apiClient";

export async function getRandomMovies(page = 1, limit = 10, { signal } = {}) {
  return requestMovieList({
    endpoint: "/movie/random",
    params: { page, limit },
    errorMessage: "рандомный фильм",
    signal,
  });
}

export async function getMoviesByQuery(
  query,
  page = 1,
  limit = 10,
  { signal } = {}
) {
  if (!query || !query.trim()) return Promise.resolve([]);

  return requestMovieList({
    endpoint: "/movie/search",
    params: { page, limit, query },
    errorMessage: "фильмы по запросу",
    signal,
  });
}

export async function getMovieById(id, { signal } = {}) {
  if (!id) return null;

  try {
    const response = await apiClient.get(`/movie/${id}`, { signal });
    return response.data;
  } catch (error) {
  if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
  if (error.name === "AbortError") return;

  console.error("Не удалось найти фильм по ID:", error.message);
  throw error;
}
}

export async function getPopularMovies(
  page = 1,
  limit = 10,
  { signal } = {}
) {
  return requestMovieList({
    endpoint: "/movie",
    params: {
      page,
      limit,
      type: "movie",
      "rating.kp": "6-10",
      sortField: "votes.kp",
      sortType: "-1",
    },
    errorMessage: "популярные фильмы",
    signal,
  });
}

export async function getPopularSeries(
  page = 1,
  limit = 10,
  { signal } = {}
) {
  return requestMovieList({
    endpoint: "/movie",
    params: {
      page,
      limit,
      type: "tv-series",
      "rating.kp": "6-10",
      sortField: "votes.kp",
      sortType: "-1",
    },
    errorMessage: "популярные сериалы",
    signal,
  });
}

export async function getMoviesByFilters({
  page = 1,
  limit = 10,
  genre,
  country,
  yearFrom,
  yearTo,
  year,
  ratingFrom,
  ratingTo,
  signal,
}) {
  const params = {};

  if (genre) params["genres.name"] = genre;
  if (country) params["countries.name"] = country;

  if (year) {
    params.year = year;
  } else if (yearFrom && yearTo) {
    params.year = `${yearFrom}-${yearTo}`;
  }

  if (ratingFrom && ratingTo)
    params["rating.kp"] = `${ratingFrom}-${ratingTo}`;

  params.page = page;
  params.limit = limit;

  return requestMovieList({
    endpoint: "/movie",
    params,
    errorMessage: "фильмы по вашему запросу",
    signal,
  });
}

export async function getMovieStills(movieId, page = 1, limit = 10, { signal } = {}) {
  const response = await requestMovieList({
    endpoint: "/image",
    params: { movieId, page, limit },
    errorMessage: "кадры из фильма",
    signal,
  });

  return Array.isArray(response) ? response : [];
}