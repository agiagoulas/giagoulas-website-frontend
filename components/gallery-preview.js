import Link from 'next/link';
import Image from 'next/image';
import Date from './date'

export default function GalleryPreview({ id, title, images, updatedOn }) {
    return (
        <Link href={`/images/${id}`} className="hover:opacity-80">
            <div className="text-center h-80 shadow-md border border-transparent rounded overflow-hidden">
                <div className="h-4/5 w-full relative">
                    <Image src={images[0]["url"]} fill alt={images[0]["url"]} sizes="100vh" priority={false} className="object-cover object-center" />
                </div>
                <div className="flex justify-center items-center flex-col h-1/5">
                    <h2 className="font-semibold">{title}</h2>
                    <Date dateString={updatedOn} />
                </div>
            </div>
        </Link>
    );
}
