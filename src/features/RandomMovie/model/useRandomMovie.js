import { useState, useEffect } from "react";
import { useMovieListQuery } from "@/entities/Movie/model/hooks/useMovieListQuery";
import { getRandomMovies, getPopularMovies } from "@/entities/Movie/model/api";

export function useRandomMovie() {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const { data, loading, error } = useMovieListQuery(
    async (signal) => {
      const random = await getRandomMovies(1, 1, { signal });
      const fallback = await getPopularMovies(1, 1, { signal });
      return random.length ? random : fallback;
    },
    [refreshKey]
  );

  return { data, loading, error };
}