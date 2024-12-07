/* eslint-disable @next/next/no-img-element */
import * as motion from 'framer-motion/client';
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui/button";

export const Presentation = () => {
  return (
    <section className="w-full flex justify-between">
      <motion.div className="flex flex-col gap-8"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        }}
      >
        <h1
          className="text-8xl font-semibold font-degular text-presentation-title pt-28 max-2xl:text-7xl max-[1190px]:text-6xl max-lg:text-7xl max-md:text-center max-sm:text-6xl"
        >
          Dimensi
          <Image src="/avatar-1.png" alt="" width={30} height={30} className="inline-block relative bottom-1 md:hidden"/>
          <span className="hidden md:inline-block">o</span>
          n is
          <br />
          <div className="flex items-center gap-6 max-md:gap-0 max-md:block">
            <Image src="/avatar-2.png" alt="" width={36} height={36} className="inline-block relative bottom-2 md:hidden"/>
            new <img src="/avatars.png" alt="" className="mt-4 max-md:hidden"/>
          </div>
          standard
          <Image src="/avatar-3.png" alt="" width={36} height={36} className="inline-block relative bottom-2 md:hidden"/>
          <span className="hidden md:inline-block">o</span>
        </h1>
        <p className="text-lg text-description font-inter max-w-[25rem] max-lg:max-w-[36rem] max-md:text-center">
          Flex Code connects you with top-tier Brazilian software engineers
        </p>
        <div className="flex gap-8 items-center max-md:justify-center">
          <Button className="font-semibold flex items-center gap-1">
            Get Started
            <MoveRight size={18}/>
          </Button>
          <p className="underline text-title max-md:hidden">Nossas vantagens</p>
        </div>

        <div className='flex gap-16 items-center mt-6  max-[1280px]:gap-4'>
          <p className='font-degular w-40'>
            Trusted by the world&#39;s biggest brands
          </p>

          <div className="flex items-center gap-6">
            <Image src="/logo/afterpay-logo.png" alt="" width={100} height={100}/>
            <Image src="/logo/basecamp-logo.png" alt="" width={100} height={100}/>
            <Image src="/logo/maze-logo.png" alt="" width={100} height={100}/>
          </div>
        </div>
      </motion.div>
      <img src="/presentation-image.png" alt=""
      className="pt-14 absolute right-0 -z-10 max-[1350px]:scale-90 max-[1350px]:-right-8 max-[1190px]:scale-[.8] max-[1190px]:-right-[4.3rem] max-[1190px]:top-20 max-lg:hidden"/>
    </section>
  )
}
