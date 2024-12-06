import { FC } from 'react';
import { ReactSVG } from 'react-svg';

interface TimelineItemProps {
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
  isLast?: boolean;
}

export const TimelineItem: FC<TimelineItemProps> = ({ title, description, icon, isActive, isLast = false }) => {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`p-2 border-2 border-blue-500 transition-colors rounded-full ${isActive ? 'bg-blue-500' : ''}`}>
          <ReactSVG
            src={icon}
            width={20}
            height={20}
            className={`${isActive ? 'to-white' : ''} transition-colors`}
          />
        </div>
        {/* <Circle 
          className={`w-8 h-8 z-10 transition-colors duration-300 ${
            isActive ? 'text-blue-500 fill-blue-500' : 'text-gray-300'
          }`} 
        /> */}
        {!isLast && (
          <div className={`w-0.5 h-24 transition-colors duration-300 relative lg:hidden border-r-2 border-dotted ${
            isActive ? ' border-blue-500' : 'border-gray-200'
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