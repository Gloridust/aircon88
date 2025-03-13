import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = ''
}: ButtonProps) {
  // 基本樣式
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-colors shadow-md";
  
  // 尺寸樣式
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  // 變體樣式
  const variantStyles = {
    // 藍色背景，白色字體
    primary: "bg-primary hover:bg-secondary text-white border border-transparent",
    // 白色背景，藍色字體
    secondary: "bg-white hover:bg-gray-100 text-primary border border-primary",
  };
  
  // 組合所有樣式
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  return (
    <Link href={href} className={buttonStyles}>
      {children}
    </Link>
  );
} 