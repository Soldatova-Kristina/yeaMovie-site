import { Link, useNavigate } from "react-router-dom";

export function ArrowLink({ 
  to, 
  children, 
  direction = "right", 
  className,
  back = false,
 }) {
  
  const navigate = useNavigate();
  const isRight = direction === "right";
  const handleClick = () => {
    if (back) {
      navigate(-1);
    }
  };
  
  return (
    <Link 
      to={back? "#" : to}
      onClick={handleClick}
      className={`text-[#0f0a33] text-[18px] font-medium hover:underline flex items-center gap-2 ${className}`}
    >
      {!isRight && (
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path
            d="M6 1L1 6L6 11"
            stroke="#0f0a33"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {children}
      {isRight && (
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path
            d="M1 1L6 6L1 11"
            stroke="#0f0a33"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}