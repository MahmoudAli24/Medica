"use client"
import dynamic from 'next/dynamic'
import doctorImage
    from "@/public/cropped-portrait-senior-man-glasses-teacher-professor-posing-isolated-gray-background.svg";
const SliderFreeMode = dynamic(() => import('@/components/sharedComponents/sliderFreeMode/SliderFreeMode'));
import {SwiperSlide} from "swiper/react";
import DocCard from "@/components/sharedComponents/DocCard";

export default function CourseMayLikeSlider() {
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
    return (
        <>
            <SliderFreeMode breakpoints={breakpoints}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <DocCard
                            name="Doctor Name"
                            image={doctorImage}
                            title="Doctor Mahmoud Ali Saber"
                            rate={4.5}
                            docTitle="Doc Title"
                        />
                    </SwiperSlide>
                ))}
            </SliderFreeMode>
        </>
    );
}
