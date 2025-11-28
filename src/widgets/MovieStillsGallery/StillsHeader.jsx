import { ArrowLink } from "@/shared/ui/ArrowLink";

export function StillsHeader({ movieId, showAll }) {
  return (
    <>
      <div className="flex justify-center mb-[30px]">
        <h2 className="text-[#ffffff] text-[24px] font-medium bg-[#0f0a33] rounded-[50px] px-[40px] py-[12px]">
          Кадры из фильма
        </h2>
      </div>

      {!showAll && (
        <div className="flex justify-end mb-[20px]">
          <ArrowLink to={`/movie/${movieId}/stills`} direction="right">
            Смотреть всё
          </ArrowLink>
        </div>
      )}
    </>
  );
}