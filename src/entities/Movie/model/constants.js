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