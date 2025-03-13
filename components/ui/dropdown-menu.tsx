"use client"

import * as React from "react"

interface DropdownMenuProps {
  children: React.ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  return <div className="relative">{children}</div>
}

interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function DropdownMenuTrigger({ children, asChild, className, ...props }: DropdownMenuTriggerProps) {
  if (asChild) {
    return React.cloneElement(React.Children.only(children as React.ReactElement), {
      ...props,
    })
  }
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
}

export function DropdownMenuContent({ 
  children, 
  className, 
  align = 'center',
  ...props 
}: DropdownMenuContentProps) {
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  
  React.useEffect(() => {
    setOpen(true)
    
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])
  
  if (!open) return null
  
  return (
    <div
      ref={ref}
      className={`absolute z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-lg ${
        align === 'start' ? 'left-0' : align === 'end' ? 'right-0' : 'left-1/2 -translate-x-1/2'
      } ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface DropdownMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenuItem({ children, className, ...props }: DropdownMenuItemProps) {
  return (
    <button
      className={`relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function DropdownMenuLabel({ children, className, ...props }: DropdownMenuLabelProps) {
  return (
    <div
      className={`px-2 py-1.5 text-xs font-semibold text-gray-500 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

interface DropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <div
      className={`-mx-1 my-1 h-px bg-gray-200 ${className || ''}`}
      {...props}
    />
  )
} 