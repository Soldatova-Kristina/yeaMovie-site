import { Dropdown } from "@/shared/ui/Dropdown";
import { FILTER_CONFIG } from "@/features/FilterMovies/model/constants";
import { SortButtons } from "@/features/FilterMovies/ui/SortButtons";

export function MovieFilters({ filters, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...filters, [field]: value });
  };

  return (
    <div className="flex items-center gap-[15px] flex-wrap">
      {FILTER_CONFIG.map(({ field, placeholder, options }) => (
        <Dropdown
          key={field}
          value={filters[field]}
          onChange={(v) => handleChange(field, v)}
          options={options}
          placeholder={placeholder}
          className="min-w-[150px]"
        />
      ))}

      <SortButtons
        value={filters.sortOrder}
        onChange={(value) => handleChange("sortOrder", value)}
      />
    </div>
  );
}