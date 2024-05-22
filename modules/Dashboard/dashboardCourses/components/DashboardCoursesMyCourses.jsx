"use client"
import dynamic from 'next/dynamic'
import {SwiperSlide} from "swiper/react";
const SliderFreeMode = dynamic(() => import('@/components/sharedComponents/sliderFreeMode/SliderFreeMode'));
import {TypographyH3} from "@/components/typography/TypographyH3";
import Link from "next/link";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import CourseCard from "@/components/sharedComponents/CoursesCard";
import doctor from "@/public/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.png";

const DashboardCoursesMyCourses = () => {
    const breakpoints = {
        640: {
            slidesPerView: 1,
        }, 768: {
            slidesPerView: 1.5,
        }, 1024: {
            slidesPerView: 1.5,
        },
    }
    const coursesData = [
        {
            id: 1,
            title: "Course Title 1",
            lecturesCount: 12,
            time: "12 Hr",
            isCertificate: true,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Id aliquet lectus proin nibh nisl.",
            docName: "Mahmoud",
            docTitle: "Professor of Medicine",
            courseRate: 3,
            image: doctor,
            price:700,
            lastUpdate:"Last updated: 2023-04-05 15:39:18"
        },]
    return (<section>
        <div className={"flex items-center justify-between my-3"}>
            <TypographyH3 className={"capitalize font-normal"}>Favorite courses</TypographyH3>
            <Link href={"/courses"} className={"text-[--main-color] flex items-center gap-2"}><span>Explore all courses</span><span><MdOutlineKeyboardDoubleArrowRight
                size={20}/></span></Link>
        </div>
        <div>
            <SliderFreeMode breakpoints={breakpoints}>
                {Array.from({length: 5}).map((_, index) => (<SwiperSlide key={index}>
                    <CourseCard item={coursesData[0]}/>
                </SwiperSlide>))}
            </SliderFreeMode>
        </div>
    </section>)
}

export default DashboardCoursesMyCourses;