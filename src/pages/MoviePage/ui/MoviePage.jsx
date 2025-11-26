import { useParams } from "react-router-dom";
import { getMovieById } from "@/entities/Movie/model/api";
import { normalizeMovieData } from "@/entities/Movie/model/selectors";
import { useFetchData } from "@/shared/hooks/useFetchData";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { MovieCard } from "@/widgets/MovieCard";
import { MovieStillsGallery } from "@/widgets/MovieStillsGallery";

export default function MoviePage() {
  const { id } = useParams();

  const { data: movie, loading, error } = useFetchData(
    async () => {
      const data = await getMovieById(id);
      return normalizeMovieData(data);
    },
    [id]
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom py-[80px]">
        <ErrorAndLoadingSection loading={loading} error={error}>
          {movie && <MovieCard variant="details" movie={movie} />}
          <MovieStillsGallery movieTitle={movie?.title} movieId={id} />
        </ErrorAndLoadingSection>
      </div>
    </div>
  );
}