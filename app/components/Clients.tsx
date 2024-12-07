import Image from "next/image"

export const Clients = () => {
  return (
    <section id="clients" className="mt-20 flex items-center justify-center gap-14 font-degular py-20">
      <h2 className="font-semibold text-3xl w-1/4 text-[#687580]">
        Trusted by the world&#39;s biggest brands
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-10 w-80">
        {
          new Array(4).fill(0).map((_, i) => (
            <Image
              key={i}
              alt="Company Logo"
              src={"/logo/adobe-logo.svg"}
              width={128}
              height={128}
              className="transition-all grayscale-[80] hover:grayscale-0"
            />
          ))
        }
      </div>
    </section>
  )
}
