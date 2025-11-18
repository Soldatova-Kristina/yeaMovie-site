import { SearchInput } from "../../../features/SearchMovie/ui/SearchInput";
import { Logo } from "@/shared/ui/logo";

export default function Header() {
    return (
        <header className="bg-[#080423] w-full">
            <div className="flex max-w-[1440px] h-[80px] justify-center items-center px-4 pl-[92px]">
                <div>
                   <Logo />
                </div>
                <div className="ml-[124px] mr-[590px] relative">
                    <SearchInput />
                </div>
            </div>
        </header>
    )
}
