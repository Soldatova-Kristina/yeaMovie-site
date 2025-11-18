import { cn } from '@/shared/lib/utils'

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}) => {
  const baseStyles = 'rounded-full font-medium transition-all duration-200'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-white',
    secondary: 'bg-transparent border-2 border-white/20 hover:border-white/40 text-white',
    outlined: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}