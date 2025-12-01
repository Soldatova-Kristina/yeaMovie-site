export const GENRE_OPTIONS = [
  { value: "", label: "Все жанры" },
  { value: "драма", label: "Драма" },
  { value: "комедия", label: "Комедия" },
  { value: "боевик", label: "Боевик" },
  { value: "триллер", label: "Триллер" },
  { value: "фантастика", label: "Фантастика" },
  { value: "ужасы", label: "Ужасы" },
  { value: "мелодрама", label: "Мелодрама" },
  { value: "криминал", label: "Криминал" },
  { value: "фэнтези", label: "Фэнтези" },
  { value: "детектив", label: "Детектив" },
];

export const COUNTRY_OPTIONS = [
  { value: "", label: "Все страны" },
  { value: "США", label: "США" },
  { value: "Россия", label: "Россия" },
  { value: "СССР", label: "СССР" },
  { value: "Франция", label: "Франция" },
  { value: "Великобритания", label: "Великобритания" },
  { value: "Германия", label: "Германия" },
  { value: "Италия", label: "Италия" },
  { value: "Япония", label: "Япония" },
  { value: "Южная Корея", label: "Южная Корея" },
];

export const YEAR_OPTIONS = [
  { value: "", label: "Все годы" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
];

export const RATING_OPTIONS = [
  { value: "", label: "Любой рейтинг" },
  { value: "9-10", label: "от 9" },
  { value: "8-10", label: "от 8" },
  { value: "7-10", label: "от 7" },
  { value: "6-10", label: "от 6" },
  { value: "5-10", label: "от 5" },
];

export const SORT_OPTIONS = [
  { value: "rating", label: "По рейтингу" },
  { value: "year", label: "По году" },
  { value: "name", label: "По названию" },
];



export const FILTER_CONFIG = [
  { field: "genre", placeholder: "Жанр", options: GENRE_OPTIONS },
  { field: "country", placeholder: "Страна", options: COUNTRY_OPTIONS },
  { field: "year", placeholder: "Год", options: YEAR_OPTIONS },
  { field: "rating", placeholder: "Рейтинг", options: RATING_OPTIONS },
  { field: "sort", placeholder: "Сортировка", options: SORT_OPTIONS },
];
