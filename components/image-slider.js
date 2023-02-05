import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import styles from "./image-slider.module.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function ImageSlider({ galleries }) {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            height={50}
            keyboard={{
                enabled: true,
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, Keyboard]}
            className={styles.swiperContainer}
        >
            {galleries.map(({ _id, title, images }) => (
                <SwiperSlide key={`${images[0]["key"]}-SwiperSlide`}>
                    <Link href={`/images/${_id}`} key={`${images[0]["key"]}-Link`}>
                        <div className="relative" key={`${images[0]["key"]}-div1`}>
                            <img src={images[0]["url"]} alt={images[0]["url"]["key"]} key={`${images[0]["key"]}-img`} className="h-[80vh] container object-cover" />
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:left-20 sm:-translate-x-0 text-white items-center" key={`${images[0]["key"]}-div2`}>
                                <h2 className="font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl" key={`${images[0]["key"]}-h2`}>{title.toUpperCase()}</h2>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
