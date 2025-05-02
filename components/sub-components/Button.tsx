import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'green' | 'white' | 'black' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  green: 'bg-gradient-to-t from-green-900 to-green-950 rounded-2xl border-4 border-white/30 group relative overflow-hidden',
  white: 'bg-gradient-to-b from-white to-white/20 rounded-2xl border-4 border-white/90 group relative overflow-hidden',
  black: 'bg-gradient-to-t from-gray-800 to-black rounded-2xl border-4 border-white/50 group relative overflow-hidden',
  orange: 'bg-gradient-to-t from-orange-600 to-yellow-500 rounded-2xl border-4 border-white/30 group relative overflow-hidden'
};

const textVariants = {
  green: 'bg-gradient-to-b from-green-100 to-white bg-clip-text text-transparent',
  white: 'bg-gradient-to-b from-green-900 font-bold to-green-950 bg-clip-text text-transparent',
  black: 'bg-gradient-to-b from-gray-100 to-white bg-clip-text text-transparent',
  orange: 'bg-gradient-to-b from-yellow-100 to-white bg-clip-text text-transparent'
};

const sizes = {
  sm: 'py-1 w-[160px] text-sm',
  md: 'py-1 md:py-2 w-[200px] text-base text-xl',
  lg: 'py-2 w-[220px] text-xl'
};

const buttonContent = (children: React.ReactNode, variant: 'green' | 'white' | 'black' | 'orange') => (
  <>
    <span className={cn("relative z-10 font-medium select-text", textVariants[variant])}>
      {children}
    </span>
    <div className={cn(
      "absolute inset-0 transform scale-x-0",
      variant === 'green' && "bg-gradient-to-b from-green-700 to-green-900",
      variant === 'white' && "bg-gradient-to-b from-green-800 to-green-950",
      variant === 'black' && "bg-gradient-to-b from-gray-700 to-gray-900",
      variant === 'orange' && "bg-gradient-to-b from-orange-500 to-yellow-600"
    )} />
  </>
);

export default function Button({ 
  children, 
  variant = 'green', 
  size = 'md',
  href,
  className,
  ...props 
}: ButtonProps) {
  const buttonClasses = cn(
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent(children, variant)}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {buttonContent(children, variant)}
    </button>
  );
} 