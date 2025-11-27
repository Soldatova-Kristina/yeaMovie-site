import { MovieStills } from "@/entities/Movie/ui/MovieStills";
import { normalizeStillsData } from "@/entities/Movie/model/selectors";
import { getMovieStills } from "@/entities/Movie/model/api";
import { useFetchData } from "@/shared/hooks/useFetchData";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { ArrowLink } from "@/shared/ui/ArrowLink";

export function MovieStillsGallery({ movieId, movieTitle, showAll = false }) {
  const limit = showAll ? 21 : 6;
  
  const { data: stills = [], loading, error } = useFetchData(
  ({ signal }) => {
    if (!movieId) return Promise.resolve([]);

    return getMovieStills(movieId, 1, limit, { signal })
      .then(images => images.map(normalizeStillsData));
  },
  [movieId, showAll],
  { initialData: [] }
);

  const placeholders = Array(Math.max(0, limit - stills.length)).fill({});
  const filledStills = [
    ...stills, 
    ...placeholders.map(normalizeStillsData),
  ];

  return (
    <ErrorAndLoadingSection loading={loading} error={error}>
      {!stills || stills.length === 0 ? null : (
        <section className="mb-[60px]">
          <div className="flex justify-center mb-[30px]">
            <h2 className="text-[#ffffff] text-[24px] font-medium bg-[#0f0a33] rounded-[50px] px-[40px] py-[12px]">
              Кадры из фильма
            </h2>
          </div>
          {!showAll && stills.length >= 6 && (
            <div className="flex justify-end mb-[20px]">
              <ArrowLink to={`/movie/${movieId}/stills`} direction="right">
                Смотреть всё
              </ArrowLink>
            </div>
          )}
          <div className="grid grid-cols-3 gap-x-[15px] gap-y-[15px] mb-[30px]">
            {filledStills.map((still, index) => (
              <MovieStills
                key={still.id || `fallback-${index}`}
                src={still.url}
                alt={`${movieTitle} - кадр ${index + 1}`}
              />
            ))}
          </div>
        </section>
      )}
    </ErrorAndLoadingSection>
  );
}