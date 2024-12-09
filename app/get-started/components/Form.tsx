import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

                <div className="font-inter w-full">
                    <label className="block text-sm font-medium text-foreground">Project Size</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select project size" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Small Project (1-5 devs)</SelectItem>
                            <SelectItem value="2">Medium Project (6-10 devs)</SelectItem>
                            <SelectItem value="3">Large Project (10+ devs)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button className="flex items-center gap-2">
                    Get Started
                    <MoveRight size={18}/>
                </Button>
            </div>
        </form>
    )
}
