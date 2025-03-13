import React from 'react';

export function Card({ className, ...props }) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className || ''}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={`p-4 border-b border-gray-200 ${className || ''}`} {...props} />;
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className || ''}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={`text-sm text-muted-foreground ${className || ''}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, ...props }) {
  return <div className={`p-4 ${className || ''}`} {...props} />;
}

export function CardFooter({ className, ...props }) {
  return <div className={`p-4 border-t border-gray-200 ${className || ''}`} {...props} />;
} 