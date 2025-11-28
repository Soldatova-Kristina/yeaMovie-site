export const MOVIE_FALLBACK_POSTER = "/images/no-poster.png";

export const MOVIE_TITLE_VARIANTS = {
  xl: "font-bold text-[80px] text-[#0f0a33]",
  lg: "font-medium text-[60px] text-white",
  sm: "font-medium text-[18px] text-[#080423] leading-[22px]",
};

export const MOVIE_RATING_VARIANTS = {
  simple: "font-medium text-[18px] text-[#ffd233] leading-[22px]",
  detailed: "font-bold text-[20px] text-[#ffd233]",
};

export const MOVIE_POSTER_VARIANTS = {
  searchResPoster: "w-[482px] h-[573px] rounded-[10px]",
  cardPoster: "w-[482px] h-[650px] rounded-[10px]",
  gridPoster: "w-[315px] h-[315px] rounded-[10px]",
  bannerPoster: "w-[765px] h-[480px] rounded-[10px] border border-black",
  shot: "w-[430px] h-[420px] rounded-[10px]",
};

export const MOVIE_DESCRIPTION_VARIANTS = {
  black: "text-black font-light text-[18px]",
  white: "text-white font-light text-[18px]",
};

export const BUTTON_VARIANTS = {
  primary: "bg-[#FF3D81] hover:bg-[#ed769f] text-white",
  secondary: "bg-[#080423] border-2 border-white/20",
  outlined: "bg-[#FFFFF] border-2 border-[#FF3D81] text-[#FF3D81] hover:bg-[#FF3D81] hover:text-white",
  notchosen: "bg-[#FFFFFF] text-[#080423] hover:border-[#FF3D81]",
};

export const BUTTON_SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const MOVIES_GRID_VARIANTS = {
  "4x1": "grid grid-cols-4 gap-[30px]",
  "4x2": "grid grid-cols-4 gap-[30px]",
  "infinite": "grid grid-cols-4 gap-[30px]",
};

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

