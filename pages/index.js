import Layout from '../components/layout';
import ImageSlider from '../components/image-slider';
import { getGalleries } from '../utils/galleries';

export async function getStaticProps() {
  const galleries = await getGalleries()
  return {
      props: {
          galleries
      },
  };
}

export default function Home({ galleries }) {
  return (
    <Layout currentPage="Home">
      <ImageSlider galleries={galleries}/>
    </Layout>
  );
}
