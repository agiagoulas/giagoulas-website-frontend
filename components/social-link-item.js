import Link from 'next/link';
import Image from 'next/image';
import styles from "./social-link-item.module.css"

export default function SocialLinkItem({ url, name, icon }) {
    return (
        <div className={styles.hovered}>
            <Link href={url} target="_blank" className="border-2 w-3/4 h-10 flex justify-center mx-auto mb-2 rounded-md items-center border-gray-300 text-black hover:bg-gray-800 hover:border-gray-800 hover:text-gray-100">
                <div className="w-4 h-4 mr-1 relative">
                    <Image src={icon} fill alt={name} />
                </div>
                <p>{name}</p>
            </Link>
        </div>
    );
}
