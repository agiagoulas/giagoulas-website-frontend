import Date from "./date";

export default function TextPage({ children, title, content, date }) {
    return (
        <>
            <div className="text-center">
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold mb-1">{title}</h1>
                    {date && (
                        <Date dateString={date} />
                    )}
                    {content && (
                        <div className="mx-auto w-2/3 gallery-div" dangerouslySetInnerHTML={{ __html: content }} />
                    )}
                </div>
                {children}
            </div>
        </>
    );
}
