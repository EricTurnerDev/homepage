import Posts from './posts';
import Link from 'next/link';
import classNames from 'classnames';
import Layout from './layout';

export default function Home({ allPostsData, className}) {
    const siteTitle = 'Home - ericturner.dev';
    const maxPosts = 10;

    return (
        <Layout siteTitle={siteTitle} className={classNames('home', className)}>
            <section className="hero flex flex-col items-center py-6 bg-blue-200 dark:bg-slate-700 md:py-10">
                <h1>Hi, I&apos;m Eric</h1>
                <h2>Welcome to my site</h2>
            </section>

            <section className="blog-posts mt-4 px-6 md:px-10 md:mt-8">
                <h2>Blog Posts</h2>
                <Posts className="mt-5 pl-3" postsData={allPostsData.slice(0, maxPosts)} />
                <Link href="/blog"><a className="block font-semibold mt-8">Read all blog posts</a></Link>
            </section>

            <footer className="mb-10">
            </footer>
        </Layout>
    );
}