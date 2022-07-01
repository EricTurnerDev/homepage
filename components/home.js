import Posts from './posts';
import Link from 'next/link';
import classNames from 'classnames';
import Layout from './layout';
import Image from "next/image";

export default function Home({allPostsData, className}) {
    const siteTitle = 'Home - ericturner.dev';
    const maxPosts = 10;

    return (
        <Layout siteTitle={siteTitle} className={classNames('home', className)}>
            <section className="hero flex flex-col items-center p-5 bg-blue-200 dark:bg-slate-700 md:py-10">
                <div className="flex flex-row items-center">
                    <Image
                        className="rounded-lg"
                        src="/images/profile.jpg"
                        width={384/4}
                        height={466/4}
                    />
                    <div className="flex flex-col items-start ml-5">
                        <h1>Hi, I&apos;m Eric</h1>
                        <h2>Welcome to my site</h2>
                    </div>
                </div>
            </section>

            <section className="blog-posts mt-4 px-6 md:px-10 md:mt-8">
                <h2>Blog Posts</h2>
                <Posts className="mt-5" postsData={allPostsData.slice(0, maxPosts)}/>
                <Link href="/blog"><a className="block font-semibold mt-8">Read all blog posts</a></Link>
            </section>

            <footer className="mb-10">
            </footer>
        </Layout>
    );
}