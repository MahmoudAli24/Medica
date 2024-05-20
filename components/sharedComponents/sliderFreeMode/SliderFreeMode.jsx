"use client"
import { Swiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode ,Autoplay } from 'swiper/modules';

const SliderFreeMode = ({children})=>{
    return(
        <>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2.5,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode ,Autoplay]}
                className="mySwiper"
            >
                {children}
            </Swiper>
        </>
    )
}

export default SliderFreeMode;