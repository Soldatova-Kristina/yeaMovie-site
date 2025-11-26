import { Link } from "react-router-dom";
import { Logo } from "@/shared/ui/logo";

export default function Footer() {
  const navLinks = [
    { path: "/popular/movie", label: "Популярные фильмы" },
    { path: "/popular/series", label: "Популярные сериалы" },
    { path: "/favorites", label: "Избранное" },
  ];

  return (
    <footer className="bg-[#080423] w-full">
      <div className="flex flex-row max-w-[1440px] h-[198px] items-center pl-[92px]">
        <div>
          <Logo />
        </div>

        <div className="flex flex-row gap-[30px] ml-auto mr-[92px]">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-[#B3B3B3] text-[16px]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
