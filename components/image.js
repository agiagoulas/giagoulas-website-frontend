import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function GalleryImage({ src, metadata, onClick }) {
    return (
        <>
            {/* <Image
                priority
                src={src}
                width={400}
                alt=""
            /> */}
            <img src={src} width='100%' onClick={onClick} alt={src}></img>
            {/* <p>{metadata}</p> */}
        </>
    );
}
