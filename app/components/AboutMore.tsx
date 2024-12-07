"use client";

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export const AboutMore = () => {
  return (
    <section className="pb-16 border-b border-header-border">
      <div className="flex justify-between gap-4 max-lg:flex-col">
        <h2 className="text-5xl font-degular font-medium w-1/2 max-xl:text-5xl max-lg:w-full max-lg:text-center max-[786px]:text-4xl">Provide the best service with out of the box ideas</h2>
        <p className="w-1/2 max-lg:w-full max-lg:text-center">
          we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
        </p>
      </div>
      {/* <Image
        src="/about-more.png"
        alt=""
        width={1220}
        height={470}
        className="mt-[4.5rem] w-full max-lg:mt-6 max-lg:min-h-64"
      /> */}
    <Swiper
      modules={[Scrollbar]} 
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='mt-[4.5rem] w-full max-h-[35rem] rounded-xl'
    >
      {
        new Array(3).fill(0).map((_, i) => (
          <SwiperSlide key={i} className='w-full max-h-[35rem]'>
            <Image src={`/slide-${i+1}.png`} alt="" className='object-cover w-full max-h-[35rem]' width={1000} height={1000} unoptimized/>
          </SwiperSlide>
        ))
  }
    </Swiper>
    </section>
  )
}
