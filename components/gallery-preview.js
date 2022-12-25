import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPreview({ id, title, images, summary }) {
    return (
        <Link href={`/images/${id}`}>
            <div className="text-center h-[40vh] shadow-md border border-transparent rounded overflow-hidden">
                <div className="h-4/5 w-full relative">
                    <Image src={images[0]} fill alt={images[0]} sizes="100vh" priority={false} className="object-cover object-center"/>
                </div>
                <div className="flex justify-center items-center flex-col h-1/5">
                    <h2 className="font-semibold">{title}</h2>
                    <p>{summary}</p>
                </div>
            </div>
        </Link>
    );
}
