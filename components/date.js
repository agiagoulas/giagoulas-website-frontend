import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return (
        <div className="mb-1 text-sm">
            {(dateString != null) ?
                <time className="text-gray-800" dateTime={dateString}>
                    {format(date, 'dd.MM.yyyy')}
                </time>
                :
                <p className="text-gray-500">-</p>
            }
        </div>
    );
}
