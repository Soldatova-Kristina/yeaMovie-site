export function LoadingBlock({ text = "Загрузка..." }) {
 return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
        <p className="text-gray-400">Загрузка страницы...</p>
      </div>
    </div>
  );
}