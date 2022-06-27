import Link from 'next/link';
import Date from './date';

import styles from './home.module.css';
import Head from "next/head";
import Navbar from "./navbar";

export default function Home({ allPostsData }) {
    const siteTitle = 'Home - ericturner.dev';
    const maxPosts = 10;

    return (
        <>
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
            <header></header>
            <Navbar />
            <section className="flex flex-col items-center py-6 bg-blue-200 md:py-10">
                <h1 className="text-2xl font-semibold md:text-3xl">Hi, I&apos;m Eric</h1>
                <h2 className="text-xl font-semibold md:text-2xl"> Welcome to my site</h2>
            </section>
            <section className="px-6 mt-4">
                <h2 className="text-xl font-semibold">Blog Posts</h2>
                <ul>
                    {allPostsData.slice(0, maxPosts).map(({slug, title, subtitle, date, excerpt}) => (
                        <li className="mt-8" key={slug}>
                            <h3 className="text-lg font-semibold">
                                <Link href={`/posts/${slug}`}>
                                    <a>{title}</a>
                                </Link>
                            </h3>
                            <div className="metadata font-light text-gray-800">
                                <h4>{subtitle}</h4>
                                <p>Published <Date dateString={date} /> </p>
                            </div>
                            <p className="mt-4">{excerpt}</p>
                            <Link href={`/posts/${slug}`}>
                                <a className="block mt-4 font-semibold">Read more</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}