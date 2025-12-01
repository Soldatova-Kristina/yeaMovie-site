export function StillsHeader({ onShowAll }) {
  return (
    <>
      <div className="flex justify-center mb-[30px]">
        <h2 className="text-[#ffffff] text-[24px] font-medium bg-[#0f0a33] rounded-[50px] px-[40px] py-[12px]">
          Кадры из фильма
        </h2>
      </div>

      <div className="flex justify-end mb-[20px]">
        <button
          onClick={onShowAll}
          className="text-[#0f0a33] text-[18px] font-medium hover:underline flex items-center gap-2"
        >
          Смотреть всё
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
            <path
              d="M1 1L6 6L1 11"
              stroke="#0f0a33"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}