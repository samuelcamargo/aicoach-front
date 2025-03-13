"use client"

import React, { useState } from 'react';

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

interface CalendarProps {
  className?: string;
  selected?: Date;
  onSelect?: (date: Date) => void;
}

export function Calendar({ 
  className = '',
  selected, 
  onSelect,
  ...props 
}: CalendarProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>) {
  const [viewDate, setViewDate] = useState<Date>(selected || new Date());
  
  const handlePrevMonth = () => {
    setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };
  
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const lastDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();
  
  const calendarGrid = [];
  let dayCounter = 1;
  
  for (let week = 0; week < 6; week++) {
    const daysRow = [];
    
    for (let weekday = 0; weekday < 7; weekday++) {
      if ((week === 0 && weekday < startingDayOfWeek) || dayCounter > daysInMonth) {
        daysRow.push(null);
      } else {
        daysRow.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), dayCounter++));
      }
    }
    
    calendarGrid.push(daysRow);
    if (dayCounter > daysInMonth && week < 5) break;
  }
  
  const isSelected = (date: Date | null): boolean => {
    if (!date || !selected) return false;
    return date.toDateString() === selected.toDateString();
  };
  
  const isToday = (date: Date | null): boolean => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  return (
    <div className={`p-3 ${className || ''}`} {...props}>
      <div className="flex items-center justify-between mb-4">
        <button 
          type="button" 
          onClick={handlePrevMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &lt;
        </button>
        <div>
          {months[viewDate.getMonth()]} {viewDate.getFullYear()}
        </div>
        <button 
          type="button" 
          onClick={handleNextMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {calendarGrid.map((daysRow, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {daysRow.map((day, weekdayIndex) => (
              <button
                key={weekdayIndex}
                type="button"
                disabled={!day}
                onClick={() => onSelect && day && onSelect(day)}
                className={`
                  h-9 w-9 rounded-md text-center text-sm p-0 
                  ${!day ? 'invisible' : ''}
                  ${isSelected(day) ? 'bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-gray-100'}
                  ${isToday(day) && !isSelected(day) ? 'border border-blue-600' : ''}
                `}
              >
                {day?.getDate()}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
} 