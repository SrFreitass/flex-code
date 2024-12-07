import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export const Solutions = ( ) => {
    return (
        <section id="solutions" className="mt-40 border-b border-header-border pb-[5.5rem] flex flex-row justify-between max-lg:flex-col">
            <div className="w-[40%] flex flex-col gap-8 max-lg:w-full">
              <h2 className="text-5xl font-degular font-semibold max-xl:text-5xl max-lg:w-full max-lg:text-center max-[786px]:text-4xl">Simplify Your Requests with Flex Code</h2>
              <p>Let us handle your projects with speed and precision. Our team is dedicated to turning your needs into effective solutions, delivering results that exceed expectations.</p>
              <Button className="border-title border bg-transparent w-44 rounded-[50px] !text-title max-lg:hidden">
                More questions
              </Button>
            </div>
            <div className="font-degular text-title w-[55%] max-lg:w-full max-lg:mt-6">
                <Accordion type="multiple">
                    <AccordionItem value="1">
                        <AccordionTrigger className="text-2xl font-medium border-t">Tailored Service</AccordionTrigger>
                        <AccordionContent>
                            Open and extensible by design, collections in
                            Postman expedite self-serve API consumption
                            across the org, so devs can start testing APIs
                            and building workflows.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="2">
                        <AccordionTrigger className="text-2xl font-medium">Speed That Makes a Difference</AccordionTrigger>
                        <AccordionContent>
                            Open and extensible by design, collections in
                            Postman expedite self-serve API consumption
                            across the org, so devs can start testing APIs
                            and building workflows.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="3">
                        <AccordionTrigger className="text-2xl font-medium">Reliability You Can Trust</AccordionTrigger>
                        <AccordionContent>
                            Open and extensible by design, collections in
                            Postman expedite self-serve API consumption
                            across the org, so devs can start testing APIs
                            and building workflows.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
