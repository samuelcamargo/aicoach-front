import React from 'react';
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === 'outline' 
          ? 'border border-gray-200 text-gray-700'
          : variant === 'secondary'
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800',
        className
      )}
      {...props}
    />
  );
} 