"use client"
import Image from "next/image";
import Link from "next/link";
import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import {TypographyLead} from "@/components/typography/TypographyLead";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import doctor from "@/public/successful-old-businessman-suit-glasses-looking-confident.png"
import {CiPlay1} from "react-icons/ci";
import {IoArrowForwardOutline} from "react-icons/io5";


const HomeSlider = () => {
    return (<section className="bg-gradient-to-b from-[#23317C] to-[#12193E] md:h-dvh">
        <div className="pt-[130px] container w-full h-full">
            <Swiper modules={[Navigation, Autoplay]} centeredSlides={true} autoplay={{
                delay: 4000, disableOnInteraction: false,
            }} className="w-full h-full" loop={true}>
                {Array.from({length: 5}).map((_, index) => (<SwiperSlide key={index} className={"w-full h-full"}>
                    <div className={"grid grid-cols-1 md:grid-cols-3 gap-2 items-center h-full"}>
                        <div className={"col-span-2"}>
                            <div>
                                <TypographyH2 className={"text-white pb-[5px] leading-none"}><span
                                    className={"text-[--secondary-color]"}>Explore</span> Your Skills With
                                    Thousands Of Hands‑On <span
                                        className={"text-[--secondary-light]"}>Classes.</span></TypographyH2>
                                <TypographyLead className={"font-bold"}>
                                    Comprehensive training, exams, certificates. Find your dream job.
                                </TypographyLead>
                            </div>
                            <div className={"mt-8 flex gap-6 flex-col md:items-center md:flex-row"}>
                                <Link href={"/"}
                                      className="flex items-center gap-2 text-[18px] w-fit rounded-sm px-5 py-3 bg-white font-bold text-[--main-color] md:text-xl">
                                    <span>Start Learning Today</span>
                                    <span
                                        className={"inline-flex items-center justify-center w-[35px] h-[35px] border-2 border-black rounded-full"}>
                                       <IoArrowForwardOutline size={20}/>
                                    </span>
                                </Link>
                                <Link href={"/"} className={"flex items-center gap-2"}>
                                    <span
                                        className={"inline-flex items-center justify-center w-[40px] h-[40px] text-white border-2 border-white rounded-full"}><CiPlay1
                                        size={20}/>
                                    </span>
                                    <span className={"text-white/70"}>
                                        Learn More . . .
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className={"flex justify-center md:justify-end"}>
                            <Image src={doctor} alt={"doctor"} priority={true} className={"object-contain w-[400px]"}/>
                        </div>
                    </div>
                </SwiperSlide>))}
            </Swiper>
        </div>
    </section>)
}

export default HomeSlider