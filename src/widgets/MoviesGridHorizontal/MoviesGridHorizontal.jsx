export function MoviesGridHorizontal({ movies }) {
  return (
    <div className="flex flex-wrap gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
