import { MovieStills } from "@/entities/Movie/ui/MovieStills";

export function StillsGrid({ stills, movieTitle }) {
  return (
    <div className="grid grid-cols-3 gap-x-[15px] gap-y-[15px] mb-[30px]">
      {stills.map((still, index) => (
        <MovieStills
          key={still.id || `fallback-${index}`}
          src={still.url}
          alt={`${movieTitle} - кадр ${index + 1}`}
        />
      ))}
    </div>
  );
}