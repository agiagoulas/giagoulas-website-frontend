import Layout from '../components/layout';
import TextPage from '../components/text-page';


function LinkItem({ url, name }) {
    return (
        <li>
            <a href={url} target="_blank" className="text-blue-700">{name}</a>
        </li>
    );
}

export default function Links() {
    return (
        <Layout currentPage="Links" title="Links">
            <TextPage title="Links">
                <h4 className="font-semibold">Social</h4>
                <ul>
                    <LinkItem url="https://twitter.com/AGiagoulas" name="Twitter" />
                    <LinkItem url="mailto:alexander@giagoulas.com" name="Mail" />
                </ul>
                <h4 className="font-semibold">Photography</h4>
                <ul>
                    <LinkItem url="https://www.instagram.com/giagoulasphoto" name="Instagram" />
                    <LinkItem url="https://giagoulas.com" name="Website" />
                    <LinkItem url="https://vero.co/giagoulas" name="Vero" />
                </ul>
                <h4 className="font-semibold">Business</h4>
                <ul>
                    <LinkItem url="https://www.linkedin.com/in/alexander-giagoulas" name="LinkedIn" />
                    <LinkItem url="https://www.linkedin.com/in/alexander-giagoulas" name="Xing" />
                    <LinkItem url="https://github.com/agiagoulas" name="Github" />
                </ul>
            </TextPage>
        </Layout>
    );
}
