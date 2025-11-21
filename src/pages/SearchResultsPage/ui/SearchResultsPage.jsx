import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/features/SearchMovie/model/useSearchMovie';
import { MoviesGrid } from '@/widgets/MoviesGrid';
import { LoadingBlock, ErrorBlock } from "@/shared/ui/PageStatus";

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { movies, loading, error } = useSearchMovies(query);

  if (loading) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        <LoadingBlock />
      </div>
    </div>
  );
}

if (error) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        <ErrorBlock message={error.message} />
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