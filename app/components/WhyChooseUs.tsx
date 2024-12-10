import { Benefit } from "./Benefit"

const benefits = [
  {
    icon: "/icons/spearkless-icon.svg",
    title: "Expert Engineers.",
    description: "Access to a pool of highly skilled Brazilian software engineers.",
  },
  {
    icon: "/icons/message-icon.svg",
    title: "Cost-Effective",
    description: "High-quality development at competitive rates, optimizing your budget.",
  },
  {
    icon: "/icons/branch-icon.svg",
    title: "100% English Proficiency",
    description: "Seamless communication with developers fluent in English."
  },
  {
    icon: "/icons/terminal-icon.svg",
    title: "Global Collaboration",
    description: "Seamless integration with your existing teams and workflows.",
  },
  {
    icon: "/icons/tasks-icon.svg",
    title: "Fast Turnaround",
    description: "Quick project initiation and efficient development processes.",
  }, 
  {
    icon: "/icons/box-icon.svg",
    title: "Quality Code",
    description: "High-quality, maintainable code that meets industry standards.",
  }
]

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="mt-20 border-b border-header-border pb-14">
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="font-degular font-semibold text-5xl text-presentation-title text-center max-xl:text-5xl max-lg:w-full max-lg:text-center max-[786px]:text-4xl">Why Choose Flex Code</h2>
        <p className="font-inter text-center text-description">Flex Code connects you with top-tier Brazilian software engineers to supercharge your development needs.</p>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-10 justify-center max-lg:grid-cols-why-choose max-sm:grid-cols-why-choose-sm">
        {
          benefits.map((benefit, i) => (
            <Benefit key={i} {...benefit} titleBorder={i === 1 || i === 4 || i === 0 || i === 3}/>
          ))
        }
      </div>
    </section>
  )
}
