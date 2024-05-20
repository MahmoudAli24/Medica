"use client"
import doctorImage
    from "@/public/cropped-portrait-senior-man-glasses-teacher-professor-posing-isolated-gray-background.svg";
import SliderFreeMode from "@/components/sharedComponents/sliderFreeMode/SliderFreeMode";
import {SwiperSlide} from "swiper/react";
import DocCard from "@/components/sharedComponents/DocCard";

export default function CourseMayLikeSlider() {
    return (
        <>
            <SliderFreeMode>
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
