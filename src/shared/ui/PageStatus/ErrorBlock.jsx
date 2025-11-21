export function ErrorBlock({ 
  title = "Произошла ошибка", 
  message = "Что-то пошло не так. Попробуйте позже." 
}) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <p className="text-[#FF3D81] text-[24px] font-medium">
          {title}
        </p>

        <p className="text-[#7a7a7a] text-[18px] text-center max-w-[600px]">
          {message}
        </p>
      </div>
    </div>
  );
}