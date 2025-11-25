import { Link } from 'react-router-dom';
import { MovieStills } from '@/entities/Movie/ui/MovieStills';
import { normalizeStillsData } from '@/entities/Movie/model/selectors';
import { getMovieStills } from '@/entities/Movie/model/api';
import { useFetchData } from '@/shared/lib/hooks/useFetchData';
import { ErrorAndLoadingSection } from '@/shared/ui/PageStatus';

export function MovieStillsGallery({movieId, movieTitle, showAll = false}) {
   const { data: stills, loading, error } = useFetchData(
  async () => {
    if (!movieId) return [];

    const limit = showAll ? 21 : 6;

    const images = await getMovieStills(movieId, 1, limit); 
    return images.map(normalizeStillsData);
  },
  [movieId, showAll]
);

    return (
        <ErrorAndLoadingSection loading={loading} error={error}>
      {!stills.length ? null : (
        <section className="mb-[60px]">
          <div className="flex justify-center mb-[30px]">
            <h2 className="text-[#ffffff] text-[24px] font-medium bg-[#0f0a33] rounded-[50px] px-[40px] py-[12px]">
              Кадры из фильма
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-x-[15px] gap-y-[15px] mb-[30px]">
            {stills.map((still, index) => (
              <MovieStills 
                key={still.id || index}
                src={still.url} 
                alt={`${movieTitle} - кадр ${index + 1}`}
              />
            ))}
          </div>

          {!showAll && stills.length >= 6 && (
            <div className="flex justify-end">
              <Link 
                to={`/movie/${movieId}/stills`}
                className="text-[#0f0a33] text-[18px] font-medium hover:underline flex items-center gap-2"
              >
                Смотреть всё
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L1 11" stroke="#0f0a33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          )}
        </section>
      )}
    </ErrorAndLoadingSection>
  );
    }