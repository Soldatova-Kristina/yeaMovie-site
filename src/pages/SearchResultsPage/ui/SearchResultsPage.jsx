import { useSearchParams } from 'react-router-dom';
import { useSearchMovies } from '@/features/search-movies';
import { MovieGrid } from '@/widgets/MovieGrid';

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  
  const { movies, loading, error } = useSearchMovies(query);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div>
      <h1>Результаты поиска: {query}</h1>
      <MovieGrid movies={movies} />
    </div>
  );
}
