import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return (
        <div className="mb-1 text-sm text-gray-800">
            <time dateTime={dateString}>
                {format(date, 'LLLL d, yyyy')}
            </time>
        </div>
    );
}
