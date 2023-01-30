import Layout from '../components/layout';
import TextPage from '../components/text-page';


function LinkItem({ url, name, icon }) {
    return (
        <a href={url} target="_blank" className="border-2 w-3/4 h-10 md:w-1/2 flex justify-center mx-auto mb-2 rounded-md items-center border-gray-300 text-black hover:bg-gray-800 hover:border-gray-800 hover:text-gray-100">
            <img src={icon} className="w-4 h-4 mr-1" alt={name} />
            <p>{name}</p>
        </a>
    );
}

export default function Links() {
    return (
        <Layout currentPage="Links" title="Links">
            <TextPage title="Links">
                <h3 className="font-semibold text-xl mb-2">Alexander Giagoulas</h3>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Social</h4>
                    <LinkItem url="https://twitter.com/AGiagoulas" name="Twitter" icon="/icons/twitter.svg" />
                    <LinkItem url="mailto:alexander@giagoulas.com" name="Mail" icon="/icons/mail.svg" />
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Photography</h4>
                    <LinkItem url="https://www.instagram.com/giagoulasphoto" name="Instagram" icon="/icons/instagram.svg" />
                    <LinkItem url="https://giagoulas.com" name="Website" icon="icons/website.svg" />
                    <LinkItem url="https://vero.co/giagoulas" name="Vero" icon="/icons/links.svg" />
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Business</h4>
                    <LinkItem url="https://www.linkedin.com/in/alexander-giagoulas" name="LinkedIn" icon="/icons/linkedin.svg" />
                    <LinkItem url="https://www.xing.com/profile/AlexanderPhilipp_Giagoulas" name="Xing" icon="/icons/xing.svg" />
                    <LinkItem url="https://github.com/agiagoulas" name="Github" icon="/icons/github.svg" />
                </div>
            </TextPage>
        </Layout>
    );
}
