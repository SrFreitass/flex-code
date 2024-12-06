import { TimelineItem } from './TimelineItem';

const timelineItems = [
  {
    icon: '/icons/workflow-1.svg',
    title: 'Strategic Planning',
    description: 'Define goals, target audience, and essential functionalities.',
  },
  {
    icon: '/icons/workflow-2.svg',
    title: 'Design Creation',
    description: 'Craft the visual interface and user experience.',
  },
  {
    icon: '/icons/workflow-3.svg',
    title: 'Front-End Development',
    description: 'Convert the design into functional user-facing code.',
  },
];

interface TimelineProps {
  progress: number;
}

export function Timeline({ progress }: TimelineProps) {
  const getIsActive = (index: number) => {
    const zoneSize = 90 / timelineItems.length;
    const itemThreshold = (index * zoneSize) + 10;
    return progress >= itemThreshold;
  };

  return (
    <div className="mx-auto px-4 flex gap-8 max-lg:mx-0 max-lg:mt-6 max-lg:flex-col max-lg:gap-0">
      {timelineItems.map((item, index) => (
        <TimelineItem
          icon={item.icon}
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
