import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  children: ReactNode;
}

export function Button({ 
  className, 
  children, 
  variant = 'default', 
  size = 'default', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        // Variantes de tamanho
        {
          "text-sm px-4 py-2": size === 'default',
          "text-xs px-3 py-1": size === 'sm',
          "text-base px-6 py-3": size === 'lg',
        },
        // Variantes de estilo
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === 'default',
          "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50": variant === 'outline',
          "bg-transparent text-gray-700 hover:bg-gray-100 shadow-none": variant === 'ghost',
          "bg-green-500 text-white hover:bg-green-600": variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 