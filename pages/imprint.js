import Layout from '../components/layout';
import TextPage from '../components/text-page';

export default function Imprint() {
    return (
        <Layout currentPage="Imprint" title="Imprint">
            <TextPage title="Imprint">
                <div className="mx-auto w-2/3">
                    <div className="mb-5">
                        <h3 className="font-semibold">Angaben gemäß § 5 TMG</h3>
                        <p>
                            Alexander Giagoulas<br />
                            Meluner Str. 4<br />
                            70569 Stuttgart<br />
                            E-Mail-Adresse: alexander.giagoulas@outlook.com
                        </p>
                    </div>
                    <div className="mb-5">
                        <h3 className="font-semibold">Inhaltlich Verantwortlicher</h3>
                        <p>
                            Alexander Giagoulas<br />
                            Meluner Str. 4<br />
                            70569 Stuttgart<br />
                        </p>
                    </div>
                    <h3 className="font-semibold">Copyright 2023 | Alexander Giagoulas</h3>
                </div>
            </TextPage>
        </Layout>
    );
}
