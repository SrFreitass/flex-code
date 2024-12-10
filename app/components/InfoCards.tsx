import Image from "next/image"

export const InfoCards = () => {
  return (
    <div className="flex flex-col gap-8 mt-24 max-lg:hidden">
      <div className="flex justify-evenly gap-8">
        <div className="bg-info-card p-6 rounded-[20px] w-64">
          <h2 className="text-6xl font-degular">230+</h2>
          <p className="text-description font-inter">
          some big companies that we work with, and trust us very much
          </p>
          <div className="mt-10 w-full h-2 bg-[#d9d9d9]">
            <span className="block w-2/3 h-full bg-primary"></span>
          </div>
        </div>

        <Image src="/info-card-img.png" alt="" width={250} height={250} unoptimized/>
      </div>

        <div className="bg-info-card p-8 rounded-[20px] ">
          <p className="font-degular">Have your website ready</p>
          <h2 className="font-degular text-[2rem] max-w-96">
            Drive more traffic and product sales
          </h2>
      </div>
    </div>
  )
}
