import Layout from '../../components/layout';
import { getAllGalleriesIds, getGalleryData } from '../../lib/galleries';
import SimpleGallery from '../../components/gallery';
import TextPage from '../../components/text-page';

export async function getStaticProps({ params }) {
    const galleryData = await getGalleryData(params.id);
    return {
        props: {
            galleryData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllGalleriesIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Gallery({ galleryData }) {
    return (
        <Layout currentPage="Images" title={galleryData.title}>
            <TextPage title={galleryData.title} content={galleryData.contentHtml}>
                <SimpleGallery images={galleryData.images} />
            </TextPage>
        </Layout>
    );
}
