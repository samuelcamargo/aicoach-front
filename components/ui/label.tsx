import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  htmlFor?: string;
  children: React.ReactNode;
}

export function Label({ className, htmlFor, children, ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ''}`}
      {...props}
    >
      {children}
    </label>
  );
} 