import { Benefit } from "./Benefit"

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="mt-20 border-b border-header-border pb-14">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="font-degular font-semibold text-5xl text-presentation-title text-center">Why Choose Flex Code</h2>
        <p className="font-inter text-center text-description">Flex Code connects you with top-tier Brazilian software engineers to supercharge your development needs.</p>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-10 justify-center max-lg:grid-cols-why-choose max-sm:grid-cols-why-choose-sm">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Benefit titleBorder={_ === 1 || _ === 4} key={i} title="Expert Engineers." description="Access to a pool of highly skilled Brazilian software engineers." icon="/icons/spearkless-icon.svg"/>
        ))}
      </div>
    </section>
  )
}
