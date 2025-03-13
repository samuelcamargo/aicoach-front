"use client"

import React, { useState } from 'react';

const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export function Calendar({ 
  className,
  selected, 
  onSelect,
  ...props 
}) {
  const [viewDate, setViewDate] = useState(selected || new Date());
  
  const handlePrevMonth = () => {
    setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setViewDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };
  
  const startOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const endOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();
  
  const currentDate = new Date();
  
  // Create calendar days
  const days = [];
  // Add empty cells for days before the start of the month
  for (let i = 0; i < startDay; i++) {
    days.push({ day: null, date: null });
  }
  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ 
      day: i, 
      date: new Date(viewDate.getFullYear(), viewDate.getMonth(), i)
    });
  }
  
  const isSelected = (date) => {
    if (!date || !selected) return false;
    return date.toDateString() === selected.toDateString();
  };
  
  const isToday = (date) => {
    if (!date) return false;
    return date.toDateString() === currentDate.toDateString();
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
        {days.map((day, index) => (
          <button
            key={index}
            type="button"
            disabled={!day.date}
            onClick={() => onSelect && day.date && onSelect(day.date)}
            className={`
              h-9 w-9 rounded-md text-center text-sm p-0 
              ${!day.date ? 'invisible' : ''}
              ${isSelected(day.date) ? 'bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-gray-100'}
              ${isToday(day.date) && !isSelected(day.date) ? 'border border-blue-600' : ''}
            `}
          >
            {day.day}
          </button>
        ))}
      </div>
    </div>
  );
} 