import Layout from '../components/layout';
import TextPage from '../components/text-page';

export default function Custom404() {
    return (
        <Layout currentPage="404" title="404">
            <TextPage title="404">
                <p>This page could not be found.</p>
            </TextPage>
        </Layout>
    );
}
