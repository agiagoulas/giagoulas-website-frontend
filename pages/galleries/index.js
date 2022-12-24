import Link from 'next/link';
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
            <ul>
                {allGalleries.map(({ id, title, images }) => (
                    <li key={id}>
                        <Link href={`/galleries/${id}`}>{title}</Link>
                        <GalleryPreview images={images} />
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
