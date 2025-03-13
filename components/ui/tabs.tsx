"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

// Criando um contexto para compartilhar o estado entre componentes
type TabsContextValue = {
  selectedValue: string;
  onSelectTab: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
}

interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue'> {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, value, onValueChange, className, children, ...props }: TabsProps) {
  const [selectedValue, setSelectedValue] = React.useState<string>(value || defaultValue);
  
  // Atualizar o estado interno quando a prop value mudar
  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);
  
  const handleTabSelect = React.useCallback((tabValue: string) => {
    if (value === undefined) {
      setSelectedValue(tabValue);
    }
    onValueChange?.(tabValue);
  }, [value, onValueChange]);
  
  const contextValue = React.useMemo(() => ({
    selectedValue,
    onSelectTab: handleTabSelect
  }), [selectedValue, handleTabSelect]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("space-y-4", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export function TabsList({ className, children, ...props }: TabsListProps) {
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

interface TabsTriggerProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const { selectedValue, onSelectTab } = useTabsContext();
  const isSelected = selectedValue === value;
  
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSelected ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900",
        className
      )}
      onClick={() => onSelectTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

interface TabsContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value'> {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const { selectedValue } = useTabsContext();
  
  if (value !== selectedValue) {
    return null;
  }
  
  return (
    <div
      role="tabpanel"
      className={cn(
        "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 