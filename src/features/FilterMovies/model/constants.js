import { GENRE_OPTIONS, COUNTRY_OPTIONS, YEAR_OPTIONS, RATING_OPTIONS, SORT_OPTIONS } from "@/entities/Movie/model/constants";

export const FILTER_CONFIG = [
  { field: "genre", placeholder: "Жанр", options: GENRE_OPTIONS },
  { field: "country", placeholder: "Страна", options: COUNTRY_OPTIONS },
  { field: "year", placeholder: "Год", options: YEAR_OPTIONS },
  { field: "rating", placeholder: "Рейтинг", options: RATING_OPTIONS },
  { field: "sort", placeholder: "Сортировка", options: SORT_OPTIONS },
];