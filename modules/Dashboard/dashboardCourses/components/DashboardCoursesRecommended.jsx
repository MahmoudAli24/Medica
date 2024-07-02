"use client"
import dynamic from 'next/dynamic'
import {SwiperSlide} from "swiper/react";
const SliderFreeMode = dynamic(() => import('@/components/sharedComponents/sliderFreeMode/SliderFreeMode'));
import {TypographyH3} from "@/components/typography/TypographyH3";
import DocCard from "@/components/sharedComponents/DocCard";
import doctorImage from "@/public/cropped-portrait-senior-man-glasses-teacher-professor-posing-isolated-gray-background.svg";
import Link from "next/link";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";

const DashboardCoursesRecommended = ({dict}) => {
    const breakpoints = {
        640: {
            slidesPerView: 2,
        }, 768: {
            slidesPerView: 2,
        }, 1024: {
            slidesPerView: 3,
        },
    }
    return (<section>
        <div className={"flex items-center justify-between my-3"}>
            <TypographyH3 className={"capitalize font-normal"}>{dict.dashboardCoursesRecommended.title}</TypographyH3>
            <Link href={"/courses"} className={"text-[--main-color] flex items-center gap-2"}><span>{dict.dashboardCoursesRecommended.exploreAllCourses}</span><span><MdOutlineKeyboardDoubleArrowRight
                size={20}/></span></Link>
        </div>
        <div>
            <SliderFreeMode breakpoints={breakpoints}>
                {Array.from({length: 5}).map((_, index) => (<SwiperSlide key={index}>
                    <DocCard
                        name="Doctor Name"
                        image={doctorImage}
                        title="Doctor Mahmoud Ali Saber"
                        rate={4.5}
                        docTitle="Doc Title"
                    />
                </SwiperSlide>))}
            </SliderFreeMode>
        </div>
    </section>)
}

export default DashboardCoursesRecommended;
