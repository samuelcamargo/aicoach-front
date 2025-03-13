import React from 'react';
import Image from 'next/image';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
  className?: string;
}

export function Avatar({ size = 'md', className = '', ...props }: AvatarProps) {
  const sizeClasses: Record<AvatarSize, string> = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div 
      className={`relative flex shrink-0 overflow-hidden rounded-full ${sizeClasses[size]} ${className}`} 
      {...props} 
    />
  );
}

interface AvatarImageProps {
  src: string;
  alt?: string;
}

export function AvatarImage({ src, alt = '' }: AvatarImageProps) {
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

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function AvatarFallback({ className = '', children, ...props }: AvatarFallbackProps) {
  return (
    <div 
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 