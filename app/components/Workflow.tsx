"use client";

import { Timeline } from './Timeline';

export const Workflow = () => {
  return(
    <section className="my-32 relative">
      <div className="sticky top-20 flex flex-col gap-16 justify-between max-lg:flex-col max-lg:items-start max-lg:top-8">
        <h2 className="font-degular text-[3.4rem] text-center w-full text-title max-xl:text-5xl max-lg:w-full max-lg:text-center max-[786px]:text-4xl" style={{ lineHeight: 1.5 }}>
          How We Build Outstanding Websites
        </h2>
        <Timeline />
      </div>
    </section>
  )
}
