import { Button } from "@/components/ui/button"

export const Contact = () => {
  return (
    <section id="support"  className="mt-16 text-white bg-header-blue py-14">
      <div className="max-w-[1440px] px-20 flex flex-col gap-10 font-degular max-[850px]:px-6">
        <div className="w-[30rem] flex flex-col gap-10 max-sm:w-full">
          <h2 className="text-3xl  max-[450px]:text-2xl">
            Want to accelerate software
            development at your company?
            <br/>
            See how we can help.
          </h2>
          <Button className="bg-[#13926A] max-w-36">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  )
}
