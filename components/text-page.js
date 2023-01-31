import Date from "./date";

export default function TextPage({ children, title, date }) {
    return (
        <>
            <div className="text-center mx-auto w-2/3 mb-4">
                <h1 className="text-2xl font-semibold mb-2">{title}</h1>
                {date && (
                    <Date dateString={date} />
                )}
                {children}
            </div>
        </>
    );
}
