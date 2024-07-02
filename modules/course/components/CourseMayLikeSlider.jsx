"use client";
import dynamic from 'next/dynamic';
import doctorImage from "@/public/cropped-portrait-senior-man-glasses-teacher-professor-posing-isolated-gray-background.svg";
const SliderFreeMode = dynamic(() => import('@/components/sharedComponents/sliderFreeMode/SliderFreeMode'));
import { SwiperSlide } from "swiper/react";
import DocCard from "@/components/sharedComponents/DocCard";

export default function CourseMayLikeSlider({ dict }) {
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
                            name={dict.courseMayLike.doctors[index].name}
                            image={doctorImage}
                            title={dict.courseMayLike.doctors[index].title}
                            rate={dict.courseMayLike.doctors[index].rate}
                            docTitle={dict.courseMayLike.doctors[index].docTitle}
                        />
                    </SwiperSlide>
                ))}
            </SliderFreeMode>
        </>
    );
}
