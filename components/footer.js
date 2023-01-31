import Link from 'next/link';

function FooterLink({ link, name }) {
    return (
        <Link href={link} className="self-center block py-2 pl-3 pr-4 text-gray-800 md:hover:text-gray-500 md:p-0">{name}</Link>
    );
}

export default function Footer() {
    return (
        <footer>
            <hr />
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="w-auto block">
                    <ul className="flex flex-col py-4 mt-4 rounded-l md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <FooterLink link="/imprint" name="Imprint" />
                        <FooterLink link="/privacy-policy" name="Privacy Policy" />
                    </ul>
                </div>
            </div>
        </footer>
    );
}
