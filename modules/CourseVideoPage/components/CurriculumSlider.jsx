"use client"
import dynamic from 'next/dynamic'

const SliderFreeMode = dynamic(() => import('@/components/sharedComponents/sliderFreeMode/SliderFreeMode'));
import {SwiperSlide} from "swiper/react";
import image from "@/public/Curriculum.png"
const VideoCard = dynamic(() => import('@/components/sharedComponents/VideoCard'));

const CurriculumSlider = ()=>{
    const breakpoints = {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 2.5,
        },
    }
    return(
        <>
            <SliderFreeMode breakpoints={breakpoints}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <VideoCard image={image} title={"Mahmoud Ali Saber"} />
                    </SwiperSlide>
                ))}
            </SliderFreeMode>
        </>
    )
}

export default CurriculumSlider