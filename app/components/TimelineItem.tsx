import React from 'react';
import { Circle } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  description: string;
  isActive: boolean;
  isLast?: boolean;
}

export function TimelineItem({ title, description, isActive, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <Circle 
          className={`w-8 h-8 z-10 transition-colors duration-300 ${
            isActive ? 'text-blue-500 fill-blue-500' : 'text-gray-300'
          }`} 
        />
        {!isLast && (
          <div className={`w-0.5 h-full transition-colors duration-300 ${
            isActive ? 'bg-blue-500' : 'bg-gray-200'
          }`} />
        )}
      </div>
      <div className="pb-8">
        <h3 className={`font-medium transition-colors duration-300 ${
          isActive ? 'text-blue-500' : 'text-gray-700'
        }`}>
          {title}
        </h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}