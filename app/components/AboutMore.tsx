import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export const AboutMore = ( ) => {
    return (
        <section className="mt-40 border-b border-header-border pb-[5.5rem]">
            <div className="flex flex-col gap-4">
                <h2 className="font-segoe-ui font-semibold text-title text-3xl">Speed up API development through team<br/>
                collaboration</h2>
                <p className="font-inter text-title w-2/3">Prototype, document, test, and demo all your APIs in one place. Get early feedback by having
                conversations in the context of any API—private, public, or partner—not across scattered across tools.</p>
                <div className="flex gap-12">
                    <Image
                        src="https://s3-alpha-sig.figma.com/img/7226/4b00/ddef4e76c2e35ffb5578f9df98fe77e3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UHmzFQWzHIGcGs7QhojvG6Ja-6ChumVhTTYRy2L8BqwaXwFm6T2ww4fSKqYSStChFsyXLdC-Ip3yNsqOHsyw5WAqSem2-kliyILGKtEdixAGItBkEtY7imrEPcyir7BE3EKr1Tnf2-2HUZf-ux5~XhS0SM5etdsK2OUpJBsoy8yFUfXPA-vO97ig~ZM4314H6KL4~glmlPErDPHkH49xW64CgVNaRohjeP9FXwacwyTZibJQrtkGaa0D4XWoxl6KXctIC4U66x06CRN4D0k98CSSbytjszA-kBS3gaBTcc~GBgpLiAAAGykLsgJNE1ODQyNTdjtZFWK3R8jW2SqDUQ__"
                        alt="Benefits"
                        width={1440}
                        height={400}
                        className="rounded-xl w-2/3 max-h-[25rem]"
                    />
                    <div className="font-onest text-title w-1/3">
                        <Accordion type="multiple">
                            <AccordionItem value="1">
                                <AccordionTrigger className="text-2xl font-medium">Execute, test, and interact</AccordionTrigger>
                                <AccordionContent>
                                    Open and extensible by design, collections in
                                    Postman expedite self-serve API consumption
                                    across the org, so devs can start testing APIs
                                    and building workflows.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="2">
                                <AccordionTrigger className="text-2xl font-medium">Reduce duplication of work for your teams</AccordionTrigger>
                                <AccordionContent>
                                    Open and extensible by design, collections in
                                    Postman expedite self-serve API consumption
                                    across the org, so devs can start testing APIs
                                    and building workflows.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="3">
                                <AccordionTrigger className="text-2xl font-medium">Faster time to first API call</AccordionTrigger>
                                <AccordionContent>
                                    Open and extensible by design, collections in
                                    Postman expedite self-serve API consumption
                                    across the org, so devs can start testing APIs
                                    and building workflows.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
