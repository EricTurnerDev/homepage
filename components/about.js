import Head from 'next/head';
import Navbar from "./navbar";
import classNames from "classnames";
import Link from "next/link";

export default function About({ allPostsData, className }) {
    const siteTitle = 'About - ericturner.dev';

    return (
        <div className={classNames(className)}>
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

            <section className="mt-4 px-6 md:mt-8 md:px-10">
                <p>About Placeholder</p>
            </section>

            <Link href="/">
                <a className="block font-semibold mt-6 px-6 md:mt-10 md:px-10">← Back to home</a>
            </Link>

            <footer className="mb-10">
            </footer>
        </div>
    )
}