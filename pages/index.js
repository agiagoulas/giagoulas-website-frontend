import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import GalleryPreview from '../components/gallery-preview';
import { getSortedGalleriesData } from '../lib/galleries';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allGalleries = getSortedGalleriesData();
  return {
    props: {
      allPostsData,
      allGalleries
    },
  };
}

export default function Home({ allPostsData, allGalleries }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Galleries</h2>
        <ul className={utilStyles.list}>
          {allGalleries.map(({ id, title, images }) => (
            <li className={utilStyles.listItem} key={id}>
               <Link href={`/galleries/${id}`}>{title}</Link>
               <GalleryPreview images={images} />
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}