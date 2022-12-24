import Head from 'next/head';
import Navigation from './navigation';
import Footer from './footer';

export const siteTitle = 'GIAGOULAS PHOTOGRAPHY';

export default function Layout({ children, currentPage, title }) {
  return (
    <div className="w-screen ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Photography from Alexander Giagoulas"
        />
        <meta name="og:title" content={siteTitle} />
        {title ? (
          <title>{siteTitle} - {title}</title>
        ) : (
          <title>{siteTitle}</title>
        )}
      </Head>
      <header>
        <Navigation currentPage={currentPage}></Navigation>
      </header>
      <main className="container mx-auto mt-4 mb-4">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
