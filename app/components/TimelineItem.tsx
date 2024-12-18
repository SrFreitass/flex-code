import { FC } from 'react';
import { ReactSVG } from 'react-svg';

interface TimelineItemProps {
  title: string;
  description: string;
  icon: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({ title, description, icon }) => {
  return (
    <div className="relative flex gap-4 group">
      <div className="flex flex-col items-center">
        <div className={`p-2 border-2 border-blue-500 transition-colors rounded-full group-hover:bg-blue-500`}>
          <ReactSVG
            src={icon}
            width={20}
            height={20}
            className={`
              group-hover:to-white-svg
              transition-colors`
            }
          />
        </div>
        {/* <Circle
          className={`w-8 h-8 z-10 transition-colors duration-300 ${
            isActive ? 'text-blue-500 fill-blue-500' : 'text-gray-300'
          }`}
        /> */}
      </div>
      <div className="pb-8">
        <h3 className={`font-medium font-degular text-xl transition-colors duration-300 group-hover:text-blue-500`}>
          {title}
        </h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
