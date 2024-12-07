import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MoveRight } from "lucide-react"
import Image from "next/image"

export const Form = () => {
    return(
        <form className="flex flex-col gap-14 w-1/2 max-lg:w-full">
            <div className="flex flex-col max-lg:items-center">
                <Image src="/logo/flex-code-max.png" alt="Logo" width={349} height={87}/>
                <p className="text-title">Thank you for choosing Flex Code! We’d like to ask a few questions to gain a deeper understanding of your software development requirements.</p>
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
                <Input label="Your name" required />
                <Input label="Your work email" type="email" required/>
                <Textarea label="How can we help?" required/>
                <Button className="flex items-center gap-2">
                    Get Started
                    <MoveRight size={18}/>
                </Button>
            </div>
        </form>
    )
}
