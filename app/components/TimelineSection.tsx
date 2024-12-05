"use client";

import { useRef } from 'react';
import { Timeline } from './Timeline';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <div
      ref={sectionRef}
      className="min-h-[200vh] relative"
    >
      <div className="sticky top-1">
        <Timeline progress={progress} />
      </div>
    </div>
  );
}
