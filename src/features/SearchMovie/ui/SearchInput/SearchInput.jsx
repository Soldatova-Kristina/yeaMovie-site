import { Input } from "@/shared/ui/Input";
import { FiSearch } from "react-icons/fi";
import { useSearchMovie } from "../../model/useSearchMovie";

const SearchInput = function SearchInput() {
  const { query, setQuery, submit, manualSubmit } = useSearchMovie();

  return (
    <div className="relative w-[400px]">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={submit}
        placeholder="Поиск..."
        className="h-[40px] pr-10"
      />

      <FiSearch
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={manualSubmit}
      />
    </div>
  );
}

export { SearchInput };
