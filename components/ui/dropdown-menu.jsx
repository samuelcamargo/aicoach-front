"use client"

import * as React from "react"

export function DropdownMenu({ children }) {
  return <div className="relative">{children}</div>
}

export function DropdownMenuTrigger({ children, asChild, className, ...props }) {
  if (asChild) {
    return React.cloneElement(React.Children.only(children), {
      ...props,
    })
  }
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export function DropdownMenuContent({ 
  children, 
  className, 
  align = 'center',
  ...props 
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  React.useEffect(() => {
    setIsOpen(true)
    
    const handleOutsideClick = (e) => {
      // Close when clicking outside
      if (!e.target.closest('[data-dropdown-content]')) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])
  
  if (!isOpen) return null
  
  const alignClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  }
  
  return (
    <div 
      data-dropdown-content
      className={`absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 ${alignClasses[align]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function DropdownMenuItem({ children, className, ...props }) {
  return (
    <button
      className={`relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function DropdownMenuLabel({ children, className, ...props }) {
  return (
    <div 
      className={`px-2 py-1.5 text-sm font-semibold ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function DropdownMenuSeparator({ className, ...props }) {
  return (
    <div 
      className={`-mx-1 my-1 h-px bg-gray-200 ${className || ''}`}
      {...props}
    />
  )
} 