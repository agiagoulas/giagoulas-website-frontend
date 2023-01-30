import Layout from '../components/layout';
import TextPage from '../components/text-page';
import SocialLinkItem from '../components/social-link-item';

export default function Links() {
    return (
        <Layout currentPage="Links" title="Links">
            <TextPage title="Links">
                <h3 className="font-semibold text-xl mb-2">Alexander Giagoulas</h3>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Social</h4>
                    <SocialLinkItem url="https://twitter.com/AGiagoulas" name="Twitter" icon="/icons/twitter.svg" />
                    <SocialLinkItem url="mailto:alexander@giagoulas.com" name="Mail" icon="/icons/mail.svg" />
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Photography</h4>
                    <SocialLinkItem url="https://www.instagram.com/giagoulasphoto" name="Instagram" icon="/icons/instagram.svg" />
                    <SocialLinkItem url="https://giagoulas.com" name="Website" icon="icons/website.svg" />
                    <SocialLinkItem url="https://vero.co/giagoulas" name="Vero" icon="/icons/links.svg" />
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Business</h4>
                    <SocialLinkItem url="https://www.linkedin.com/in/alexander-giagoulas" name="LinkedIn" icon="/icons/linkedin.svg" />
                    <SocialLinkItem url="https://www.xing.com/profile/AlexanderPhilipp_Giagoulas" name="Xing" icon="/icons/xing.svg" />
                    <SocialLinkItem url="https://github.com/agiagoulas" name="Github" icon="/icons/github.svg" />
                </div>
            </TextPage>
        </Layout>
    );
}
