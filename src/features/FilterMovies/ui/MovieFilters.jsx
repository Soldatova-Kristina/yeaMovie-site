import { Dropdown } from "@/shared/ui/Dropdown";
import { GENRE_OPTIONS, COUNTRY_OPTIONS, YEAR_OPTIONS, RATING_OPTIONS, SORT_OPTIONS } from "@/entities/Movie/model/constants";
import { cn } from "@/shared/lib/utils/cn";

export function MovieFilters({ filters, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...filters, [field]: value });
  };

  return (
    <div className="flex items-center gap-[15px] flex-wrap">
      <Dropdown
        value={filters.genre}
        onChange={(value) => handleChange("genre", value)}
        options={GENRE_OPTIONS}
        placeholder="Жанр"
        className="min-w-[150px]"
      />

      <Dropdown
        value={filters.country}
        onChange={(value) => handleChange("country", value)}
        options={COUNTRY_OPTIONS}
        placeholder="Страна"
        className="min-w-[150px]"
      />

      <Dropdown
        value={filters.year}
        onChange={(value) => handleChange("year", value)}
        options={YEAR_OPTIONS}
        placeholder="Год"
        className="min-w-[150px]"
      />

      <Dropdown
        value={filters.rating}
        onChange={(value) => handleChange("rating", value)}
        options={RATING_OPTIONS}
        placeholder="Рейтинг"
        className="min-w-[150px]"
      />

      <Dropdown
        value={filters.sort}
        onChange={(value) => handleChange("sort", value)}
        options={SORT_OPTIONS}
        placeholder="Сортировка"
        className="min-w-[150px]"
      />

      <div className="flex gap-[5px]">
        <button
          onClick={() => handleChange("sortOrder", "desc")}
          className={cn(
            "w-[40px] h-[40px] rounded-full border border-[#E0E0E0] flex items-center justify-center",
            "hover:border-[#0f0a33] transition-colors",
            filters.sortOrder === "desc" && "bg-[#0f0a33] text-white"
          )}
        >
          ↑
        </button>
        <button
          onClick={() => handleChange("sortOrder", "asc")}
          className={cn(
            "w-[40px] h-[40px] rounded-full border border-[#E0E0E0] flex items-center justify-center",
            "hover:border-[#0f0a33] transition-colors",
            filters.sortOrder === "asc" && "bg-[#0f0a33] text-white"
          )}
        >
          ↓
        </button>
      </div>
    </div>
  );
}