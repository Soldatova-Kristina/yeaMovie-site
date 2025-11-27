import { MoviePoster } from "@/entities/Movie/ui/MoviePoster";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/shared/lib/utils";

export function HeroBanner({ movie, className }) {
  const navigate = useNavigate();

  if (!movie) return null;

  const { id, title, description, poster } = movie;

  const handleWatch = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <section 
      className={cn(
        "w-full max-w-[1320px] h-[548px] bg-[#080423] rounded-[10px] flex items-end relative overflow-hidden",
        className
      )}
    >
 
      <div className="relative z-10 pb-[40px] pl-[30px] max-w-[448px]">
        <h3 className="text-white font-montserrat text-[30px] font-bold leading-[37px] mb-[98px]">
          УЖЕ В КИНО
        </h3>

        <h2 className="text-white font-acrom text-[60px] font-medium leading-[72px] mb-[20px]">
          {title}
        </h2>

        {description && (
          <p className="text-white font-acrom text-[16px] font-normal leading-[22px] mb-[46px] line-clamp-3">
            {description}
          </p>
        )}

        <Button
          variant="primary"
          onClick={handleWatch}
          className="w-[190px] h-[42px]"
        >
          Смотреть
        </Button>
      </div>

      <div className="absolute right-[34px] bottom-[34px]">
        <MoviePoster
          src={poster}
          alt={title}
          variant="bannerPoster"
          className="border border-black/10"
        />
      </div>
    </section>
  );
}