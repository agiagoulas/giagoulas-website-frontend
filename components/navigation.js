import Link from 'next/link';
import { siteTitle } from '../components/layout';

function NavigationItem({ currentPage, link, name }) {
    return (
        <>
            <div className="mt-1">
                <Link href={link} className="self-center block py-2 pl-3 pr-4 text-gray-900 md:hover:text-gray-600 md:p-0">{name}</Link>
                {(currentPage == name) ? (
                    <hr className="my-1 mx-auto h-0.5 bg-gray-600 rounded border-0" />
                ) : (
                    <hr className="invisible my-1 mx-auto h-0.5 bg-gray-600 rounded border-0" />
                )}
            </div>
        </>
    );
}

function SocialMediaLink({ url, icon, name }) {
    return (
        <a href={url} target="_blank">
            <img src={icon} className="w-4 h-4" alt={name} />
        </a>
    );
}

export default function Navigation({ currentPage }) {
    return (
        <>
        <nav className="px-2 bg-white">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <span className="self-center text-xl font-semibold whitespace-nowrap ml-2">{siteTitle}</span>
                <div className="w-auto block">
                    <ul className="flex flex-col p-4 mt-4 rounded-l md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li><NavigationItem currentPage={currentPage} link="/" name="Home" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/galleries" name="Images" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/blog" name="Blog" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/about" name="About" /></li>
                    </ul>
                </div>
                <div className="w-auto block"></div>
                <ul className="flex flex-col p-4 mt-4 rounded-l md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li><SocialMediaLink url="https://www.instagram.com/giagoulasphoto/" icon="/images/instagram.svg" name="Instagram" /></li>
                    <li><SocialMediaLink url="https://www.linkedin.com/in/alexander-giagoulas/" icon="/images/linkedin.svg" name="LinkedIn" /></li>
                    <li><SocialMediaLink url="mailto:alexander@giagoulas.com" icon="/images/mail.svg" name="Mail" /></li>
                    <li><SocialMediaLink url="https://www.links.giagoulas.com" icon="/images/links.svg" name="Links" /></li>
                </ul>
            </div>
        </nav>
        <hr></hr>
        </>
    );
}
