import styles from './home.module.css';
import Head from "next/head";
import Navbar from "./navbar";
import Posts from './posts';
import Link from 'next/link';
import classNames from 'classnames';

export default function Home({ allPostsData, className}) {
    const siteTitle = 'Home - ericturner.dev';
    const maxPosts = 10;

    return (
        <div className={classNames('home', className)}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="description"
                    content="Eric Turner's website"
                />
                <meta name="og:title" content={siteTitle}/>
            </Head>

            <Navbar />

            <section className="hero flex flex-col items-center py-6 bg-blue-200 md:py-10">
                <h1 className="text-2xl font-semibold md:text-3xl">Hi, I&apos;m Eric</h1>
                <h2 className="text-xl font-semibold md:text-2xl"> Welcome to my site</h2>
            </section>

            <section className="blog-posts mt-4 px-6 md:px-10 md:mt-8">
                <h2 className="text-xl font-semibold">Blog Posts</h2>
                <Posts className="mt-4" postsData={allPostsData.slice(0, maxPosts)} />
                <Link href="/blog"><a className="block font-semibold mt-8">Read all blog posts</a></Link>
            </section>

            <footer className="mb-10">
            </footer>
        </div>
    );
}