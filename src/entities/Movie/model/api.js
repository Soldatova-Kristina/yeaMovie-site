import { requestMovieList } from "./requestMovieList";
import { apiClient } from "@/shared/api/apiClient";

export async function getRandomMovies(page = 1, limit = 10) {

   return requestMovieList({
    endpoint: "/movie/random",
    params: { page, limit },
    errorMessage: "рандомный фильм",
  });
}

export async function getMoviesByQuery(query, page = 1, limit = 10) {
   if (!query || !query.trim()) return Promise.resolve([]);

   return requestMovieList({
    endpoint: "/movie/search",
    params: { 
      page, 
      limit,
      query
    },
    errorMessage: "фильмы по запросу",
  });
}

export async function getMovieById(id) {
   if (!id) return null;

   try {
    const response = await apiClient.get(`/movie/${id}`);
    return response.data;        
  } catch (error) {
    console.error("Не удалось найти фильм по ID:", error);
    throw error;
  }
}

export async function getPopularMovies (page = 1, limit = 10) {

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
    });
}

export async function getPopularSeries (page = 1, limit = 10) {

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
    });
}

export function getMoviesByFilters({
    page = 1, 
    limit = 10, 
    genre,
    country, 
    yearFrom, 
    yearTo,
    year,
    ratingFrom,
    ratingTo,
}) {
const params = {};

if (genre) params["genres.name"] = genre;

if (country) params["countries.name"] = country;

if (year) {
  params.year = year;
} else if (yearFrom && yearTo) {
  params.year = `${yearFrom}-${yearTo}`;
}

if (ratingFrom && ratingTo) params["rating.kp"] = `${ratingFrom}-${ratingTo}`;

params.page = page;
params.limit = limit;

return requestMovieList({
    endpoint: "/movie",
    params,
    errorMessage: "фильмы по вашему запросу",
  });
}

export async function getMovieStills(movieId, page = 1, limit = 10) {
  const response = await requestMovieList({
    endpoint: "/image",
    params: { movieId, page, limit },
    errorMessage: "кадры из фильма",
  });
  return Array.isArray(response) ? response : []
}



