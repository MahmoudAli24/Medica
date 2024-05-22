"use client"
import { Swiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode ,Autoplay } from 'swiper/modules';
import {cn} from "@/lib/utils";

const SliderFreeMode = ({children ,breakpoints ,className})=>{
    return(
        <>
            <Swiper
                slidesPerView={1}
                breakpoints={breakpoints}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode ,Autoplay]}
                className={cn("mySwiper", className)}
            >
                {children}
            </Swiper>
        </>
    )
}

export default SliderFreeMode;