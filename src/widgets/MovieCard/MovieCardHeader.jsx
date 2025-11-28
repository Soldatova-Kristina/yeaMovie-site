export function MovieCardHeader({ title, rating, imdbRating, rightSlot }) {
  return (
    <div className="flex items-start justify-between mb-[20px]">
      <div className="flex items-center gap-[40px]">
        <h1 className="text-[#0f0a33] text-[32px] font-medium">{title}</h1>
      </div>

      <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-4">
        {rating && (
          <div className="text-[#ffd233] font-medium text-[18px]">
            Кинопоиск {rating}/10
          </div>
        )}
        {imdbRating && (
          <div className="text-[#ffd233] font-medium text-[18px]">
            IMDB {imdbRating}/10
          </div>
        )}

        {rightSlot}
      </div>
    </div>
  );
}