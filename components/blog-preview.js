import Link from 'next/link';
import Date from './date';

export default function BlogPreview({ id, title, date, text }) {
    return (
        <Link href={`/images/${id}`}>
            <div className="text-center border h-[40vh]">
                <div className="flex justify-center items-center flex-col h-1/5">
                    <h2 className="font-semibold">{title}</h2>
                    <Date dateString={date}/>
                    <p>{text}</p>
                </div>
                <div className="h-4/5 w-full"></div>
            </div>
        </Link>
    );
}
