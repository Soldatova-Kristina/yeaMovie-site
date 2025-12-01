import { MOVIE_FALLBACK_POSTER } from "./constants";

export const normalizeMovieData = (raw) => {
  if (!raw || typeof raw !== "object") {
    return {
      id: null,
      title: "",
      originalTitle: "",
      year: null,
      poster: MOVIE_FALLBACK_POSTER,
      rating: null,
      imdbRating: null,
      description: "",
      shortDescription: "",
      genres: [],
      countries: [],
      director: [],
      actors: [],
    };
  }

  const persons = Array.isArray(raw.persons) ? raw.persons : [];

  const directors = persons
    .filter(p => p.enProfession === "director" || p.profession === "режиссеры")
    .map(p => p.name || p.enName)
    .filter(Boolean);

  const actors = persons
    .filter(p => p.enProfession === "actor" || p.profession === "актеры")
    .map(p => p.name || p.enName)
    .filter(Boolean);

  const genres = Array.isArray(raw.genres)
    ? raw.genres.map(g => g?.name).filter(Boolean)
    : [];

  const countries = Array.isArray(raw.countries)
    ? raw.countries.map(c => c?.name).filter(Boolean)
    : [];

  const budget = raw.budget
    ? {
        value: raw.budget.value ?? null,
        currency: raw.budget.currency ?? null,
      }
    : null;

  const fees = raw.fees?.world
    ? {
        world: {
          value: raw.fees.world.value ?? "null",
          currency: raw.fees.world.currency ?? null,
        },
      }
    : null;
    
  return {
  id: raw.id,
  title: raw.name || raw.alternativeName || "Без названия",
  originalTitle: raw.enName || "",
  year: raw.year || raw.releaseYears?.[0]?.start || null,

  poster:
    raw.poster?.url ||
    raw.poster?.previewUrl ||
    MOVIE_FALLBACK_POSTER,

  rating: raw.rating?.kp != null ? Number(raw.rating.kp.toFixed(1)) : null,
  imdbRating: raw.rating?.imdb != null ? Number(raw.rating.imdb.toFixed(1)) : null,

  description: raw.description || "",
  shortDescription: raw.shortDescription || "",

  genres,
  countries,
  director: directors,
  actors: actors.slice(0, 4),

  budget,
  fees,
};
}

export const normalizeStillsData = (raw) => {
if (!raw || typeof raw !== "object") {

  return {
    id: null, 
    url: MOVIE_FALLBACK_POSTER,
    previewUrl: MOVIE_FALLBACK_POSTER,
    movieId: null,
    type: null,
  }
   }
   
  return {
  id: raw._id || raw.id,
  url: raw.url || MOVIE_FALLBACK_POSTER,
  previewUrl: raw.previewUrl || raw.url || MOVIE_FALLBACK_POSTER,
  movieId: raw.movieId,
  type: raw.type,
}
}

