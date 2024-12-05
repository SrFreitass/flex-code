import Image from "next/image"

export const Companies = () => {
  return (
    <section className="mt-20 flex flex-col gap-14 font-onest">
      <h2 className="font-semibold text-3xl w-3/5">Trusted by over 500,000 companies, 35 million
      developers, and 98% of the Fortune 500</h2>
      <div className="flex items-center justify-center flex-wrap gap-6">
        {
          new Array(24).fill(0).map((_, i) => (
            <Image
              key={i}
              alt="Company Logo"
              src={"/logo/Link-3.svg"}
              width={80}
              height={80}
            />
          ))
        }
      </div>
    </section>
  )
}
