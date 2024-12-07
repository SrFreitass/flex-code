import { Button } from "@/components/ui/button"
import CodeEditor from "@/components/ui/codeEditor"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MoveRight } from "lucide-react"

export const Contact = () => {
  return (
    <section id="support"  className="mt-16 text-white bg-header-blue py-14">
      <div className="max-w-[1440px] m-auto px-20 flex max-[1200px]:flex-col max-sm:px-4 gap-8 max-[450px]:h-[25rem] min-[1200px]:!bg-none" style={{ background: 'url(/footer-bg.png)' }}>
        <div className="flex flex-col gap-8 w-[57%] max-[1200px]:w-full max-[450px]:text-center">
          <h2 className="font-degular font-semibold text-[2.5rem]">Ready to get Started?</h2>
          <p className="font-inter">We&#39;re here to help. Set up a time to see how  can take
          your APIs to the next level.</p>
          <div className="max-[1200px]:hidden">
            <CodeEditor/>
          </div>
          <Button className="font-semibold items-center justify-center w-48 hidden border border-white m-auto gap-1 max-[450px]:flex">
            Get Started
            <MoveRight size={18}/>
          </Button>
        </div>
        <form className="w-full flex flex-col gap-4 max-[450px]:hidden">
          <h2 className="text-2xl font-semibold font-degular">Learn more about</h2>
          <Input label="First name*"/>
          <Input label="Phone"/>
          <Input label="Work email*"/>
          <Textarea label="Project Size"/>
          <Button className="bg-white !text-presentation-title !font-inter font-semibold">Contact Sales</Button>
        </form>
      </div>
    </section>
  )
}
