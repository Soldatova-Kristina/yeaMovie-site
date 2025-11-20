import { useState, useEffect } from 'react';
import { getMoviesByQuery } from '@/entities/Movie';
import { normalizeMovieData } from '@/entities/Movie/model/selectors';

export function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query?.trim()) {
      setMovies([]);
      return;
    }

    setLoading(true);
    setError(null);

    getMoviesByQuery(query)
      .then(rawMovies => rawMovies.map(normalizeMovieData))
      .then(setMovies)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [query]);

  return { movies, loading, error };
}