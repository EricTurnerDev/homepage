import Link from 'next/link';
import Date from './date';

import styles from './home.module.css';
import Head from "next/head";
import Navbar from "./navbar";

export default function Home({ allPostsData }) {
    const siteTitle = 'Home - ericturner.dev';

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
            <h1 className="text-3xl font-bold">Hi, I&apos;m Eric. Welcome to my site</h1>
            <section>
                <h2>Recent posts</h2>
                <ul>
                    {allPostsData.map(({slug, date, title}) => (
                        <li key={slug}>
                            <Link href={`/posts/${slug}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            <Date dateString={date}/>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}