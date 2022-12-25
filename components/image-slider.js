import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./image-slider.module.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderImage({ src }) {
    return (
        <img src={src} alt={src} className="max-h-[80vh] object-cover object-center w-full" />
    );
}

export default function ImageSlider() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            height={50}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className={styles.swiperContainer}
        >
            <SwiperSlide><SliderImage src="/galleries/frankfurt-gallery/L1004604.jpg" /></SwiperSlide>
            <SwiperSlide><SliderImage src="/galleries/frankfurt-gallery/L1004631.jpg" /></SwiperSlide>
            <SwiperSlide><SliderImage src="/galleries/frankfurt-gallery/L1004620.jpg" /></SwiperSlide>
            <SwiperSlide><SliderImage src="/galleries/frankfurt-gallery/L1004633.jpg" /></SwiperSlide>
            <SwiperSlide><SliderImage src="/galleries/frankfurt-gallery/L1004639.jpg" /></SwiperSlide>
            <SwiperSlide><SliderImage src="/galleries/frankfurt-gallery/L1004614.jpg" /></SwiperSlide>
        </Swiper>
    );
}
