import { Link } from 'react-router-dom';
import { Logo } from "@/shared/ui/logo";


export default function Footer() {
  return (
    <footer className="bg-[#080423] w-full">
      <div className="flex flex-row max-w-[1440px] h-[198px] items-center pl-[92px]">
        <div>
          <Logo />
        </div>

        <div className="flex flex-row gap-[30px] ml-auto mr-[92px]">
          <Link to={'/'} className="text-[#B3B3B3] text-[16px]">
            Главная
          </Link>
          <Link to={'/popular/movie'} className="text-[#B3B3B3] text-[16px]">
            Популярные фильмы
          </Link>
          <Link to={'/popular/series'} className="text-[#B3B3B3] text-[16px]">
            Популярные сериалы
          </Link>
        </div>
      </div>
    </footer>
  )
}
