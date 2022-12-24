import Link from 'next/link';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';

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
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/blog/${id}`}>{title}</Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
