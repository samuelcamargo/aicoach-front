import React from 'react';

export function Progress({ value, max = 100, className, ...props }) {
  return (
    <div className={`w-full overflow-hidden rounded-full bg-gray-200 ${className || ''}`}>
      <div
        className="h-2 rounded-full bg-blue-500"
        style={{ width: `${(value / max) * 100}%` }}
        {...props}
      />
    </div>
  );
} 