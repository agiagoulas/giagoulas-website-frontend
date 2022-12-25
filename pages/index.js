import Layout from '../components/layout';
import ImageSlider from '../components/image-slider';
import { getSortedGalleriesData } from "../lib/galleries";

export async function getStaticProps() {
  const allGalleries = getSortedGalleriesData();
  return {
    props: {
      allGalleries
    },
  };
}

export default function Home({ allGalleries }) {
  return (
    <Layout currentPage="Home">
      <ImageSlider galleries={allGalleries}/>
    </Layout>
  );
}
