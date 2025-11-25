import { useSearchParams } from 'react-router-dom';
import { useSearchMovie } from '@/features/SearchMovie/model/useSearchMovie';
import { MoviesGrid } from '@/widgets/MoviesGrid';
import { ErrorAndLoadingSection } from '@/shared/ui/PageStatus';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { movies, loading, error } = useSearchMovie(query);
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        <h1 className="text-center text-[#0f0a33] text-[18px] font-medium mb-[60px]">
          Результаты поиска
        </h1>
        <ErrorAndLoadingSection loading={loading} error={error}>
          <MoviesGrid movies={movies} />
        </ErrorAndLoadingSection>
      </div>
    </div>
  )
}