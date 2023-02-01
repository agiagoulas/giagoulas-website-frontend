import Image from 'next/image';
import Layout from '../components/layout';
import TextPage from '../components/text-page';

import profilePicture from '/public/alexander-giagoulas.jpg'


export default function About() {
    return (
        <Layout currentPage="About" title="About">
            <TextPage title="About">
                <div className="mx-auto w-1/2 sm:w-1/3 md:w-1/4 mb-3">
                    <Image className="shadow-md rounded-full max-w-full h-auto align-middle border-none" src={profilePicture} priority
                        alt="Profile Picture" />
                </div>
                <p>Hi, I'm Alex and this is my page about photography.</p>
            </TextPage>
        </Layout>
    );
}
