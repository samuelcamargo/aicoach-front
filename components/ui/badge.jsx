import React from 'react';

export function Badge({ variant = 'default', className, ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        variant === 'outline'
          ? 'border border-gray-200 text-gray-700'
          : 'bg-blue-100 text-blue-800'
      } ${className || ''}`}
      {...props}
    />
  );
} 