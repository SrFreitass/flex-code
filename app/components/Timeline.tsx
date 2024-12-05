import React from 'react';
import { TimelineItem } from './TimelineItem';

const timelineItems = [
  {
    title: 'Strategic Planning',
    description: 'Define goals, target audience, and essential functionalities.',
  },
  {
    title: 'Design Creation',
    description: 'Craft the visual interface and user experience.',
  },
  {
    title: 'Front-End Development',
    description: 'Convert the design into functional user-facing code.',
  },
  {
    title: 'Testing and Debugging',
    description: 'Identify and fix bugs to ensure performance and usability.',
  },
  {
    title: 'Launch and Maintenance',
    description: 'Deploy the site and monitor for updates and improvements.',
  },
];

interface TimelineProps {
  progress: number;
}

export function Timeline({ progress }: TimelineProps) {
  const getIsActive = (index: number) => {
    const zoneSize = 95 / timelineItems.length;
    const itemThreshold = (index * zoneSize) + 5;
    return progress >= itemThreshold;
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          description={item.description}
          isActive={getIsActive(index)}
          isLast={index === timelineItems.length - 1}
        />
      ))}
    </div>
  );
}
