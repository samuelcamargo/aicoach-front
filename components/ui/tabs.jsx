"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export function Tabs({ defaultValue, value, onValueChange, className, children, ...props }) {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue)
  
  const handleValueChange = (newValue) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <div className={`space-y-4 ${className || ''}`} {...props}>
      {React.Children.map(children, child => {
        if (!child) return null
        
        if (child.type.name === "TabsList" || child.type.name === "TabsContent") {
          return React.cloneElement(child, {
            selectedValue,
            onSelect: handleValueChange
          })
        }
        
        return child
      })}
    </div>
  )
}

export function TabsList({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ isSelected, onSelect, className, children, ...props }) {
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isSelected 
          ? "bg-white text-gray-900 shadow-sm" 
          : "text-gray-500 hover:text-gray-900"
      } ${className || ''}`}
      onClick={onSelect}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ selectedValue, className, children, ...props }) {
  if (props.value !== selectedValue) return null
  
  return (
    <div
      role="tabpanel"
      className={`mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
} 