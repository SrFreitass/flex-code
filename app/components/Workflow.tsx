import { TimelineSection } from './TimelineSection'

export const Workflow = () => {
  return(
    <section className="mt-32 flex justify-between">
      <h2 className="font-onest text-[3.37rem] text-workflow-blue w-2/3">
        How We Work: Our Studio's Proven Process for Building Outstanding Websites
      </h2>
      <div>
        <TimelineSection/>
      </div>
    </section>
  )
}
