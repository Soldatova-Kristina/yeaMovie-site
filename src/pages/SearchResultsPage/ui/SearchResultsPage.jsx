import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/features/SearchMovie/model/useSearchMovie';
import { MoviesGrid } from '@/widgets/MoviesGrid';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { movies, loading, error } = useSearchMovies(query);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container-custom py-[80px]">
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF3D81] border-t-transparent"></div>
              <p className="text-[#7a7a7a] text-[18px]">Загрузка...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container-custom py-[80px]">
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <p className="text-[#FF3D81] text-[24px] font-medium">
                Произошла ошибка
              </p>
              <p className="text-[#7a7a7a] text-[18px]">{error.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        <h1 className="text-center text-[#0f0a33] text-[40px] font-medium mb-[60px]">
          Результаты поиска
        </h1>
        <MoviesGrid movies={movies} />
      </div>
    </div>
  );
}