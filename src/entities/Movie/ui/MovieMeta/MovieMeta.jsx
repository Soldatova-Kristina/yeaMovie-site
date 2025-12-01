import { MovieMetaLabel } from "./MovieMetaLabel";
import { MovieMetaValue } from "./MovieMetaValue";
import { formatMoney } from "@/shared/lib/formatMoney";

export function MovieMeta({
  genre,
  country,
  year,
  director,
  actors,
  budget,
  fees,
  showExtended = true, // <-- новое
}) {
  return (
    <div className="flex flex-row gap-[156px]">

      <div className="flex flex-col gap-5">
        <MovieMetaLabel>Жанр:</MovieMetaLabel>
        <MovieMetaLabel>Страна:</MovieMetaLabel>
        <MovieMetaLabel>Год:</MovieMetaLabel>
        <MovieMetaLabel>Режиссёр:</MovieMetaLabel>
        <MovieMetaLabel>В главных ролях:</MovieMetaLabel>

        {showExtended && (
          <>
            <MovieMetaLabel>Бюджет:</MovieMetaLabel>
            <MovieMetaLabel>Сборы в мире:</MovieMetaLabel>
          </>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <MovieMetaValue>{genre}</MovieMetaValue>
        <MovieMetaValue>{country}</MovieMetaValue>
        <MovieMetaValue>{year}</MovieMetaValue>
        <MovieMetaValue>{director}</MovieMetaValue>
        <MovieMetaValue>{actors}</MovieMetaValue>

        {showExtended && (
          <>
            <MovieMetaValue>{formatMoney(budget)}</MovieMetaValue>
            <MovieMetaValue>{formatMoney(fees?.world)}</MovieMetaValue>
          </>
        )}
      </div>
    </div>
  );
}