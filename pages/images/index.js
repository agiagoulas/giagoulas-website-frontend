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
                {galleries.map(({ _id, title, updated_on, cover_image }) => (
                   <GalleryPreview cover_image={cover_image} id={_id} title={title} updatedOn={updated_on} key={_id} />
                ))}
            </div>
        </Layout>
    );
}
