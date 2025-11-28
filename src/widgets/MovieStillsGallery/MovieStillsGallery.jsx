import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { useMovieStills } from "./useMovieStills";
import { StillsHeader } from "./StillsHeader";
import { StillsGrid } from "./StillsGrid";

export function MovieStillsGallery({ movieId, movieTitle, showAll = false }) {
  const { stills, loading, error } = useMovieStills(movieId, showAll);

  if (!movieId) return null;

  return (
    <ErrorAndLoadingSection loading={loading} error={error}>
      {stills.length > 0 && (
        <section className="mb-[60px]">
          <StillsHeader movieId={movieId} showAll={showAll} />

          <StillsGrid stills={stills} movieTitle={movieTitle} />
        </section>
      )}
    </ErrorAndLoadingSection>
  );
}