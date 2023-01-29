import Link from 'next/link';

function NavigationItem({ currentPage, link, name }) {
    return (
        <>
            <div className="self-center block">
                <hr className="h-0.5 invisible" />
                <Link href={link} className="text-gray-800 hover:text-gray-500 font-semibold">{name}</Link>
                {(currentPage == name) ? (
                    <hr className="h-0.5 border-t-2 rounded border-gray-500" />
                ) : (
                    <hr className="invisible h-0.5" />
                )}
            </div>

        </>
    );
}

function SocialMediaLink({ url, icon, name, newTab }) {
    return (
        <>
            {newTab ? (
                <a href={url} target="_blank">
                    <img src={icon} className="w-4 h-4" alt={name} />
                </a>
            ) : (
                <a href={url}>
                    <img src={icon} className="w-4 h-4" alt={name} />
                </a>
            )}
        </>
    );
}

export default function Navigation({ currentPage }) {
    return (
        <>
            <nav className="container mx-auto flex flex-row py-6">
                <div className="basis-3/4 md:basis-1/4 flex justify-start my-auto">
                    <Link href="/">
                        <p className="text-xl font-semibold">GIAGOULAS PHOTOGRAPHY</p>
                    </Link>
                </div>
                <div className="basis-1/4 flex justify-end md:hidden">
                    <button type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <img src="/icons/menu.svg" className="w-6 h-6" alt="menu icon" />
                    </button>
                </div>
                <div className="hidden md:flex basis-1/2 justify-center items-center">
                    <ul className="flex flex-row md:space-x-6">
                        <li><NavigationItem currentPage={currentPage} link="/" name="Home" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/images" name="Images" /></li>
                        <li><NavigationItem currentPage={currentPage} link="/about" name="About" /></li>
                    </ul>
                </div>
                <div className="hidden md:flex basis-1/4 justify-end items-center">
                    <ul className="flex flex-row md:space-x-6">
                        <li><SocialMediaLink url="https://www.instagram.com/giagoulasphoto/" icon="/icons/instagram.svg" name="Instagram" newTab={true} /></li>
                        <li><SocialMediaLink url="https://www.linkedin.com/in/alexander-giagoulas/" icon="/icons/linkedin.svg" name="LinkedIn" newTab={true} /></li>
                        <li><SocialMediaLink url="mailto:alexander@giagoulas.com" icon="/icons/mail.svg" name="Mail" newTab={true} /></li>
                        <li><SocialMediaLink url="/links" icon="/icons/links.svg" name="Links" /></li>
                    </ul>
                </div>
            </nav>
            <hr />
        </>
    );
}
