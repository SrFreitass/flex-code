import Image from "next/image"

const clientsLogo = [
  "/logo/adobe-logo.svg",
  "/logo/pinterest-logo.svg",
  "/logo/motorola-logo.svg",
  "/logo/motorola-logo.svg",
]

export const Clients = () => {
  return (
    <section id="clients" className="my-20 border-b border-header-border flex items-center justify-center gap-14 font-degular py-20 max-lg:flex-col max-lg:items-start max-lg:mt-8">
      <h2 className="font-semibold text-3xl w-1/4 text-[#687580] max-lg:w-full">
        Trusted by the world&#39;s biggest brands
      </h2>
      <div className="flex items-center justify-start flex-wrap gap-10 w-80 max-lg:w-full">
        {
          clientsLogo.map((logo, i) => (
            <Image
              key={i}
              alt="Company Logo"
              src={logo}
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
