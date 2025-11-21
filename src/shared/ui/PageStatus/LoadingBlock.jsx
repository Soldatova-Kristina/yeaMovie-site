export function LoadingBlock({ text = "Загрузка..." }) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF3D81] border-t-transparent"></div>
        <p className="text-[#7a7a7a] text-[18px]">{text}</p>
      </div>
    </div>
  );
}