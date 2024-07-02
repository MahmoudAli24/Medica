"use client"
import dynamic from 'next/dynamic'
import {SwiperSlide} from "swiper/react";
const SliderFreeMode = dynamic(() => import('@/components/sharedComponents/sliderFreeMode/SliderFreeMode') , {loading:()=> <DashboardCoursesLoading/>});
import {TypographyH3} from "@/components/typography/TypographyH3";
import Link from "next/link";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import CourseCard from "@/components/sharedComponents/CoursesCard";
import doctor from "@/public/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.png";
import DashboardCoursesLoading from "@/modules/Dashboard/dashboardCourses/components/DashboardCoursesLoading";

const DashboardCoursesMyCourses = ({dict}) => {
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
            title: dict.dashboardCoursesMyCourses.courseTitle1,
            lecturesCount: 12,
            time: "12 Hr",
            isCertificate: true,
            description: dict.dashboardCoursesMyCourses.courseDescription1,
            docName: "Mahmoud",
            docTitle: dict.dashboardCoursesMyCourses.docTitle1,
            courseRate: 3,
            image: doctor,
            price: 700,
            lastUpdate: "Last updated: 2023-04-05 15:39:18"
        },]
    return (<section>
        <div className={"flex items-center justify-between my-3"}>
            <TypographyH3 className={"capitalize font-normal"}>{dict.dashboardCoursesMyCourses.title}</TypographyH3>
            <Link href={"/courses"} className={"text-[--main-color] flex items-center gap-2"}><span>{dict.dashboardCoursesMyCourses.exploreAllCourses}</span><span><MdOutlineKeyboardDoubleArrowRight
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
