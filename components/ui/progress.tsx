import React from 'react';
import { cn } from "../../lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  className?: string;
}

export function Progress({ value, max = 100, className, ...props }: ProgressProps) {
  return (
    <div className={cn("w-full overflow-hidden rounded-full bg-gray-200", className)}>
      <div
        className="h-2 rounded-full bg-blue-500"
        style={{ width: `${(value / max) * 100}%` }}
        {...props}
      />
    </div>
  );
} 