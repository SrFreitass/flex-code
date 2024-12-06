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
  {
    icon: '/icons/workflow-4.svg',
    title: 'Testing and Debugging',
    description: 'Identify and fix bugs to ensure performance and usability.',
  },
  {
    icon: '/icons/workflow-5.svg',
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
    <div className="max-w-2xl mx-auto px-4 max-lg:mx-0 max-lg:mt-6">
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
