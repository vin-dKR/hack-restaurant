import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'green' | 'white' | 'black' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const baseStyles = {
  button: 'rounded-2xl border-4 group relative overflow-hidden',
  text: 'relative z-10 font-medium select-text',
  hover: 'absolute inset-0 transform scale-x-0'
};

const variants = {
  green: {
    button: 'bg-gradient-to-t from-green-900 to-green-950 border-white/30',
    text: 'bg-gradient-to-b from-green-100 to-white bg-clip-text text-transparent',
    hover: 'bg-gradient-to-b from-green-700 to-green-900'
  },
  white: {
    button: 'bg-gradient-to-b from-white to-white/20 border-white/90',
    text: 'bg-gradient-to-b from-green-900 font-bold to-green-950 bg-clip-text text-transparent',
    hover: 'bg-gradient-to-b from-green-800 to-green-950'
  },
  black: {
    button: 'bg-gradient-to-t from-gray-800 to-black border-white/50',
    text: 'bg-gradient-to-b from-gray-100 to-white bg-clip-text text-transparent',
    hover: 'bg-gradient-to-b from-gray-700 to-gray-900'
  },
  orange: {
    button: 'bg-gradient-to-t from-orange-600 to-yellow-500 border-white/30',
    text: 'bg-gradient-to-b from-yellow-100 to-white bg-clip-text text-transparent',
    hover: 'bg-gradient-to-b from-orange-500 to-yellow-600'
  }
};

const sizes = {
  sm: 'py-1 w-[160px] text-sm',
  md: 'py-1 md:py-2 w-[200px] text-base text-xl',
  lg: 'py-2 w-[220px] text-xl'
};

const ButtonContent = ({ children, variant }: { children: React.ReactNode; variant: keyof typeof variants }) => (
  <>
    <span className={cn(baseStyles.text, variants[variant].text)}>
      {children}
    </span>
    <div className={cn(baseStyles.hover, variants[variant].hover)} />
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
    baseStyles.button,
    variants[variant].button,
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <ButtonContent variant={variant}>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      <ButtonContent variant={variant}>{children}</ButtonContent>
    </button>
  );
} 