import Posts from './posts';
import Link from 'next/link';
import classNames from 'classnames';
import Layout from './layout';
import Image from "next/image";

export default function Home({postsData, className}) {
    const siteTitle = 'Home - ericturner.dev';

    return (
        <Layout siteTitle={siteTitle} className={classNames('home', className)}>
            <section className="hero flex flex-col items-center bg-blue-200 dark:bg-slate-700">
                <div className="flex flex-row items-center py-5 md:py-10">
                    <Image
                        className="rounded-lg"
                        src="/images/profile.jpg"
                        width={384/4}
                        height={466/4}
                    />
                    <div className="flex flex-col ml-5">
                        <h1>Hi, I&apos;m Eric</h1>
                        <h2>Welcome to my site</h2>
                    </div>
                </div>
            </section>

            <section className="blog-posts flex flex-col items-center">
                <div className="max-w-6xl px-5 mt-5">
                    <h2>Blog Posts</h2>
                    <Posts className="mt-5" postsData={postsData}/>
                    <Link href="/blog"><a className="block font-semibold mt-10">Read all blog posts</a></Link>
                </div>
            </section>

            <footer className="mb-10">
            </footer>
        </Layout>
    );
}