import { MoveRight } from "lucide-react"
import { Button } from "./ui/button"

export const Presentation = () => {
  return (
    <section className="w-full flex justify-between">
      <div className="flex flex-col gap-8">
        <h1 className="text-8xl font-semibold text-presentation-title pt-28">
          Dimension is
          <br />
          <div className="flex items-center gap-6">
            new <img src="/avatars.png" alt="" className="mt-4"/>
          </div>
          standard
        </h1>
        <p className="text-lg text-[#6B6B6B]">
          Flex Code connects you with top-tier Brazilian software engineers
        </p>
        <div className="flex gap-8 items-center">
          <Button className="font-semibold flex items-center gap-1">
            Get Started
            <MoveRight size={18}/>
          </Button>
          <p className="underline text-[#212121]">Nossas vantagens</p>
        </div>
      </div>
      <img src="/presentation-image.png" alt="" className="pt-14 absolute right-1"/>
    </section>
  )
}