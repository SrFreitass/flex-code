import Image from "next/image"

export const Clients = () => {
  return (
    <div className='flex gap-16 items-center mt-6  max-[1320px]:gap-4 max-[1190px]:flex-col max-[1190px]:items-start max-md:items-center'>
      <p className='font-degular w-40 max-[1120px]:w-full max-md:text-center'>
        Trusted by the world&#39;s biggest brands
      </p>

      <div className="flex items-center gap-6 max-lg:flex-wrap max-lg:justify-center">
        <Image src="/logo/afterpay-logo.png" alt="" width={100} height={100}/>
        <Image src="/logo/basecamp-logo.png" alt="" width={100} height={100}/>
        <Image src="/logo/maze-logo.png" alt="" width={100} height={100}/>
      </div>


    </div>
  )
}
