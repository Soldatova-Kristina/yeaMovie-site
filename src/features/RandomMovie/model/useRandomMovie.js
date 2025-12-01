import { useState, useEffect } from "react";
import { useFetchData } from "@/shared/hooks/useFetchData";
import { getRandomMovies, getPopularMovies } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";

export function useRandomMovie() {
  const [changeMovie, setChangeMovie] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeMovie((prev) => prev + 1);
    }, 5 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  const { data, loading, error } = useFetchData(
    async ({ signal }) => {
      const random = await getRandomMovies(1, 1, { signal });
      const fallback = await getPopularMovies(1, 1, { signal });

      return (random.length ? random : fallback).map(normalizeMovieData);
    },
    [changeMovie],                 
    { initialData: [] }
  );

  return { movie: data?.[0], loading, error };
}