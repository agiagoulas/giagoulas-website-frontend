import Layout from '../../components/layout';
import GalleryPreview from '../../components/gallery-preview';
import { getGalleries } from '../../utils/galleries';

export async function getStaticProps() {
    const galleries = await getGalleries()
    return {
        props: {
            galleries
        },
    };
}

export default function Galleries({ galleries }) {
    return (
        <Layout currentPage="Images" title="Images">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {galleries.map(({ _id, title, images }) => (
                    <GalleryPreview images={images} id={_id} title={title} summary="Hello" key={_id} />
                ))}
            </div>
        </Layout>
    );
}
