"use client"

import React, { useState, useRef, useEffect } from 'react';

interface PopoverProps {
  children: React.ReactNode;
}

export function Popover({ children }: PopoverProps) {
  return (
    <div className="relative inline-block">
      {children}
    </div>
  );
}

interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function PopoverTrigger({ children, asChild, ...props }: PopoverTriggerProps) {
  if (asChild) {
    return React.cloneElement(React.Children.only(children as React.ReactElement), {
      ...props,
    });
  }
  
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
}

export function PopoverContent({ 
  children, 
  className, 
  align = 'center',
  ...props 
}: PopoverContentProps) {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setVisible(true);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  if (!visible) return null;
  
  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0',
  };
  
  return (
    <div
      ref={contentRef}
      className={`absolute z-50 w-72 min-w-max mt-2 overflow-hidden rounded-md bg-white p-4 shadow-md border border-gray-200 ${alignmentClasses[align]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
} 