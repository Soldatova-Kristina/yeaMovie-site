import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { MovieCard } from "@/entities/Movie";
import { Button } from '@/shared/ui/Button';

export default function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getMovieById(id);
        setMovie(normalizeMovieData(data));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">

        <ErrorAndLoadingSection loading={loading} error={error}>
          {movie && (
            <MovieCard variant="details" movie={movie} />
          )}
          
          <div className="flex justify-center mt-6">
           <Button
              variant="secondary"
              size="sm"
            >
              Кадры из фильма
            </Button>
            </div>

        </ErrorAndLoadingSection>

      </div>
    </div>
  );
}