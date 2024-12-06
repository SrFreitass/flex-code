import Image from "next/image";
import { useEffect, useState } from "react";

export const Carousel = () => {
    const slides = [
        "/slide-1.png"
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
        <div className="mt-6 flex flex-col items-center justify-start w-1/2">
            <Image src={slides[currentSlide]} alt="" width={759} height={878} className="h-full rounded-xl object-cover max-h-[42rem]" />
            <div className="flex flex-col gap-4 items-center relative bottom-56">
                <h2 className="text-[2.5rem] text-white text-center font-semibold font-degular w-2/3">Empowering Innovation, Shaping the Future</h2>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`w-16 h-[2px] rounded-xl transition-colors ${currentSlide === i ? 'bg-blue-500' : 'bg-white'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}