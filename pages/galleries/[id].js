import Layout from '../../components/layout';
import Head from 'next/head';
import { getAllGalleriesIds, getGalleryData } from '../../lib/galleries';
import utilStyles from '../../styles/utils.module.css';
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
        <Layout>
            <Head>
                <title>{galleryData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{galleryData.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: galleryData.contentHtml }} />
            </article>
            <SimpleGallery images={galleryData.images} />
        </Layout>
    );
}
