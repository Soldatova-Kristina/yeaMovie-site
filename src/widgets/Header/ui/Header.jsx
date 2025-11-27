import { SearchInput } from "../../../features/SearchMovie/ui/SearchInput";
import { Logo } from "@/shared/ui/Logo";
// import { Link } from "react-router-dom";
import { useFavorites } from "@/entities/Favorites/model/useFavorites";

export default function Header() {
    const { favorites } = useFavorites();
    const favCount = favorites.length;

    return (
        <header className="bg-[#080423] w-full">
            <div className="flex max-w-[1440px] h-[80px] justify-center items-center px-4 pl-[92px]">
                <div>
                   <Logo />
                </div>
                <div className="ml-[124px] mr-[590px] relative">
                    <SearchInput />
                </div>
                {/* <Link 
          to="/favorites" 
          className="ml-auto mr-[92px] text-white hover:text-gray-300 transition-colors flex items-center gap-2"
        >
          <span className="text-[16px]">Избранное</span>
          {favCount > 0 && (
            <span className="bg-[#FF3D81] text-white text-[12px] font-medium px-2 py-1 rounded-full min-w-[20px] text-center">
              {favCount}
            </span>
          )}
        </Link> */}
            </div>
        </header>
    )
}
