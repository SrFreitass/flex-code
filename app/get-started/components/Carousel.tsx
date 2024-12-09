import Image from "next/image";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = () => {
    const slides = [
        "/slide-1.png",
        "/slide-2.png",
        "/slide-3.png",
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            setCurrentSlide(0);
            return;
        }

        setCurrentSlide(currentSlide + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    })

    return (
        <div className="mt-6 flex flex-col items-center justify-start w-1/2  max-lg:hidden">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                className="w-full h-full rounded-xl"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i} className={`flex items-center justify-center`}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-xl" />
                        <h2 className="absolute text-white bottom-10 font-degular text-4xl text-center px-16 max-[1250px]:px-8 flex justify-center">
                        Empowering Innovation, Shaping the Future
                        </h2>
                        <Image src={slide} alt="" width={759} height={878} className="h-full rounded-xl object-cover max-h-[42rem]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
