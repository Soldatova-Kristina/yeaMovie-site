import { cn } from "@/shared/lib/utils/cn";

export function SortButtons({ value, onChange }) {
  return (
    <div className="flex gap-[5px]">
      {["desc", "asc"].map((type) => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={cn(
            "w-[40px] h-[40px] rounded-full border border-[#E0E0E0] flex items-center justify-center",
            "hover:border-[#080423] transition-colors",
            value === type && "bg-[#080423] text-white"
          )}
        >
          {type === "desc" ? "↑" : "↓"}
        </button>
      ))}
    </div>
  );
}