import Image from "next/image"

export const AboutMore = () => {
  return (
    <section className="pb-20 border-b border-header-border">
      <div className="flex justify-between gap-4 max-lg:flex-col">
        <h2 className="text-5xl font-degular font-medium w-1/2 max-xl:text-5xl max-lg:w-full max-lg:text-center max-[786px]:text-4xl">Provide the best service with out of the box ideas</h2>
        <p className="w-1/2 max-lg:w-full max-lg:text-center">
          we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
        </p>
      </div>
      <Image
        src="/about-more.png"
        alt=""
        width={1220}
        height={470}
        className="mt-[4.5rem] w-full max-lg:mt-6 max-lg:min-h-64"
      />
    </section>
  )
}
