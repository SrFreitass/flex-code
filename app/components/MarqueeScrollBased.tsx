import { VelocityScroll } from "@/components/ui/scroll-based-velocity"

export const MarqueeScrollBased = () => {
  return (
    <div className="transition-colors text-[#C2C7CC] hover:text-presentation-title">
      <VelocityScroll text="Let's Work Togheder" className="text-[4rem] font-degular"/>
    </div>
  )
}
