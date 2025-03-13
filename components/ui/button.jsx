import React from 'react';

export function Button({ className, children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        props.variant === 'outline'
          ? 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50'
          : 'bg-blue-500 text-white hover:bg-blue-600'
      } ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
} 