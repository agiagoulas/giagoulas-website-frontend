import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";
import styles from "./image-slider.module.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderImage({ src, link }) {
    return (
        <Link href={link}>
            <img src={src} alt={src} className="max-h-[80vh] object-cover object-center w-full" />
        </Link>
    );
}

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
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, Keyboard]}
            className={styles.swiperContainer}
        >
            {galleries.map(({ _id, images }) => (
                <SwiperSlide><SliderImage src={images[0]["url"]} link={`/images/${_id}`} /></SwiperSlide>
            ))}
        </Swiper>
    );
}
