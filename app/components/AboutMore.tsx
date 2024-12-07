import Image from "next/image"

export const AboutMore = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-5xl font-degular font-medium w-1/2">Provide the best service with out of the box ideas</h2>
        <p className="w-1/2">
          we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
        </p>
      </div>
      <Image
        src="/about-more.png"
        alt=""
        width={1220}
        height={470}
        className="mt-[4.5rem] w-full"
      />
    </section>
  )
}
