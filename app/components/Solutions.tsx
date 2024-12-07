import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const Solutions = ( ) => {
    return (
        <section id="solutions" className="mt-40 border-b border-header-border pb-[5.5rem] flex flex-row justify-between">
            <div className="w-[40%]">
              <h2 className="text-5xl font-degular font-semibold">Simplify Your Requests with Flex Code</h2>
              <p>Let us handle your projects with speed and precision. Our team is dedicated to turning your needs into effective solutions, delivering results that exceed expectations.</p>
            </div>
            <div className="font-degular text-title w-[55%] max-lg:w-full">
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
