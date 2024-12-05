import { Button } from "@/components/ui/button"
import CodeEditor from "@/components/ui/codeEditor"
import { Input } from "@/components/ui/input"

export const Contact = () => {
  return (
    <section className="mt-16 text-white bg-header-blue py-14">
      <div className="max-w-[1440px] m-auto px-20 flex gap-8">
        <div className="flex flex-col gap-8 w-[57%]">
          <h2 className="font-segoe-ui font-semibold text-[2.5rem]">Ready to get Started?</h2>
          <p className="font-inter">We're here to help. Set up a time to see how  can take <br/>
          your APIs to the next level.</p>
          <CodeEditor/>
        </div>
        <form className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-semibold font-segoe-ui">Learn more about</h2>
          <Input label="First name*"/>
          <Input label="Phone"/>
          <Input label="Work email*"/>
          <Button className="bg-white !text-presentation-title !font-inter font-semibold">Contact Sales</Button>
        </form>
      </div>
    </section>
  )
}
