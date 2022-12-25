import Link from 'next/link';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';
import BlogPreview from '../../components/blog-preview';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        },
    };
}

export default function Blog({ allPostsData }) {
    return (
        <Layout currentPage="Blog" title="Blog">
            <div className="grid grid-cols-3 gap-4">
                {allPostsData.map(({ id, date, title }) => (
                    <BlogPreview  id={id} title={title} date={date}/>
                ))}
            </div>
        </Layout>
    );
}
