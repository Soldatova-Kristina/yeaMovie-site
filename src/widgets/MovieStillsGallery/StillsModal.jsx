import { useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { cn } from "@/shared/lib/utils";

export function StillsModal({ isOpen, onClose, stills, movieTitle, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? stills.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === stills.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!stills || stills.length === 0) return null;

  const currentStill = stills[currentIndex];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative flex flex-col items-center p-[40px]">
        
        <div className="relative w-full max-w-[900px] h-[500px] mb-[30px]">
          <img
            src={currentStill.url}
            alt={`${movieTitle} - кадр ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-[10px]"
          />

          <button
            onClick={goToPrevious}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Предыдущий кадр"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Следующий кадр"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="text-white text-[16px] mb-[20px]">
          {currentIndex + 1} из {stills.length}
        </div>

        <div className="flex gap-[10px] overflow-x-auto max-w-full pb-[10px]">
          {stills.map((still, index) => (
            <button
              key={still.id || `thumbnail-${index}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "flex-shrink-0 w-[120px] h-[80px] rounded-[8px] overflow-hidden transition-all",
                "hover:opacity-100 hover:ring-2 hover:ring-white/50",
                index === currentIndex
                  ? "ring-2 ring-white opacity-100"
                  : "opacity-50"
              )}
            >
              <img
                src={still.previewUrl || still.url}
                alt={`Миниатюра ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}