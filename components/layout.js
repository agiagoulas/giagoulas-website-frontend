import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation';

export const siteTitle = 'GIAGOULAS PHOTOGRAPHY';

export default function Layout({ children, currentPage, title }) {
  return (
    <div className="w-screen">
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
      <main className="container mx-auto">{children}
        {currentPage != "home" && (
          <div>
            <Link href="/">← Back to Start</Link>
          </div>
        )}
      </main>
    </div>
  );
}