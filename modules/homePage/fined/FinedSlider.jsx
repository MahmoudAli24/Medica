"use client"
import FindCard from "@/modules/homePage/fined/FindCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination ,Autoplay ,Navigation} from 'swiper/modules';
import doctorImage from "@/public/cropped-portrait-senior-man-glasses-teacher-professor-posing-isolated-gray-background.svg";
import {FaArrowLeftLong, FaArrowRightLong} from "react-icons/fa6";
import classes from "./FinedSlider.module.css"
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const FinedSlider=()=>{
    return(
        <Swiper
            effect={'coverflow'}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            pagination={{ clickable: true, el: '.swiper-paginationPage', type: 'bullets' }}
            navigation={{
                nextEl: '.swiper-next', prevEl: '.swiper-prev'
            }}
            coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 50,
                modifier: 2,
                slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="mySwiper p-4 w-full h-full"
        >
            {Array.from({ length: 6 }, (_, index) => (
                <SwiperSlide key={index} className={"!w-full sm:!w-1/2"}>
                    <FindCard image={doctorImage}/>
                </SwiperSlide>
            ))}

            <div className="absolute -bottom-[20px] left-0 w-100 z-10 flex items-center px-10 mb-3 w-full">
                <div
                    className={`swiper-pagination flex gap-2 swiper-paginationPage ${classes["swiper-paginationPage"]}`}>
                </div>
                <span className="text-[--main-color] flex items-center justify-end gap-10 w-full">
                    <div
                        className={`swiper-prev ${classes["swiper-prev"]} rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}><FaArrowLeftLong
                        size={25}/></div>
                    <div
                        className={`swiper-next ${classes["swiper-next"]} rounded-full !w-[40px] h-[40px] flex items-center justify-center cursor-pointer`}><FaArrowRightLong
                        size={25}/></div>
                </span>
            </div>
        </Swiper>
    )
}

export default FinedSlider;