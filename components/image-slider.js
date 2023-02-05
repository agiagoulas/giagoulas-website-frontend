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
            navigation={false}
            modules={[Autoplay, Pagination, Navigation, Keyboard]}
            className={styles.swiperContainer}
        >
            {galleries.map(({ _id, images }) => (
                <SwiperSlide key={images[0]}>
                    <Link href={`/images/${_id}`}>
                        <img src={images[0]["url"]} alt={images[0]["url"]} key={images[0]} className="h-[80vh] container object-cover" />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
