"use client"

import React, { useState, useRef, useEffect } from 'react';

export function Popover({ children }) {
  return (
    <div className="relative inline-block">
      {children}
    </div>
  );
}

export function PopoverTrigger({ children, asChild, ...props }) {
  if (asChild) {
    return React.cloneElement(React.Children.only(children), {
      ...props,
    });
  }
  
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export function PopoverContent({ 
  children, 
  className, 
  align = 'center',
  ...props 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    setIsOpen(true);
    
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  if (!isOpen) return null;
  
  const alignClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  };
  
  return (
    <div
      ref={ref}
      className={`absolute z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 ${alignClasses[align]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
} 