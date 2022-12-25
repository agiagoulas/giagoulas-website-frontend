import Layout from '../../components/layout';
import GalleryPreview from '../../components/gallery-preview';
import { getSortedGalleriesData } from '../../lib/galleries';

export async function getStaticProps() {
    const allGalleries = getSortedGalleriesData();
    return {
        props: {
            allGalleries
        },
    };
}

export default function Galleries({ allGalleries }) {
    return (
        <Layout currentPage="Images" title="Images">
            <div className="grid grid-cols-3 gap-4">
                {allGalleries.map(({ id, title, images, summary }) => (
                    <GalleryPreview images={images} id={id} title={title} summary={summary} key={id} />
                ))}
            </div>
        </Layout>
    );
}
