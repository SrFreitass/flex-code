"use client";

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useRef } from 'react';
import { Timeline } from './Timeline';

export const Workflow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(sectionRef);

  return(
    <section className="mt-32 min-h-[175vh] relative" ref={sectionRef}>
      <div className="sticky top-20 flex justify-between max-lg:flex-col max-lg:items-start max-lg:top-8">
        <h2 className="font-onest text-[3.37rem] text-workflow-blue w-2/3 max-xl:text-5xl max-lg:w-full max-lg:text-center" style={{ lineHeight: 1.5 }}>
          How We Work: Our Studio&#39;s Proven Process for Building Outstanding Websites
        </h2>
        <Timeline progress={progress} />
      </div>
    </section>
  )
}
