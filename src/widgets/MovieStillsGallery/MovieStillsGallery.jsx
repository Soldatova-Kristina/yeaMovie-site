import { useState } from "react";
import { ErrorAndLoadingSection } from "@/shared/ui/PageStatus";
import { useMovieStills } from "./useMovieStills";
import { StillsHeader } from "./StillsHeader";
import { StillsGrid } from "./StillsGrid";
import { StillsModal } from "./StillsModal";

export function MovieStillsGallery({ movieId, movieTitle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { stills: previewStills, loading, error } = useMovieStills(movieId, 6);
  const { stills: allStills, loading: loadingAll } = useMovieStills(movieId, 12);

  if (!movieId) return null;

  const handleOpenModal = (index = 0) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <ErrorAndLoadingSection loading={loading} error={error}>
        {previewStills.length > 0 && (
          <section className="mb-[60px]">
            <StillsHeader onShowAll={() => handleOpenModal(0)} />

            <StillsGrid 
              stills={previewStills} 
              movieTitle={movieTitle}
              onStillClick={handleOpenModal}
            />
          </section>
        )}
      </ErrorAndLoadingSection>

      <StillsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stills={loadingAll ? previewStills : allStills}
        movieTitle={movieTitle}
        initialIndex={selectedIndex}
      />
    </>
  );
}