import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllGalleriesIds, getGalleryData } from '../../lib/galleries';
import GalleryImage from '../../components/image';
import SimpleGallery from '../../components/gallery';

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
            <article>
                <h1>{galleryData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: galleryData.contentHtml }} />
            </article>
            <SimpleGallery images={galleryData.images} />
        </Layout>
    );
}
