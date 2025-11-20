import { MovieCard } from '@/entities/Movie';

export function MoviesGrid({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-[#7a7a7a] text-[18px]">Фильмы не найдены</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[50px]">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}