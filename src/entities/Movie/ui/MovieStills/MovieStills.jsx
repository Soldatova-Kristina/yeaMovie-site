export function MovieStills({ src, alt, onClick }) {
  return (
    <div 
      className="w-full h-[420px] rounded-[10px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
