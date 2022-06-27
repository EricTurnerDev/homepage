import Head from 'next/head';
import Navbar from "./navbar";

export default function Blog({ allPostsData }) {
    const siteTitle = 'Blog - ericturner.dev';

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
            <Navbar />
            <p>Blog Placeholder</p>
        </>
    )
}