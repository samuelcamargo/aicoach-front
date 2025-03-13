import React from 'react';
import Image from 'next/image';

export function Avatar({ size = 'md', className = '', ...props }) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div 
      className={`relative flex shrink-0 overflow-hidden rounded-full ${sizeClasses[size] || sizeClasses.md} ${className}`} 
      {...props} 
    />
  );
}

export function AvatarImage({ src, alt = '' }) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={100} 
      height={100} 
      style={{ 
        objectFit: 'cover',
        width: '100%',
        height: '100%'
      }} 
    />
  );
}

export function AvatarFallback({ className = '', children, ...props }) {
  return (
    <div 
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 