import Head from 'next/head';
import Navbar from "./navbar";
import Posts from './posts';
import Link from "next/link";
import classNames from "classnames";
import Back from "./back";

export default function Blog({ allPostsData, className }) {
    const siteTitle = 'Blog - ericturner.dev';

    return (
        <div className={classNames('blog', className)}>
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
                <Posts postsData={allPostsData} />
            </section>

            <Back href="/" label="Home" />

            <footer className="mb-10">
            </footer>
        </div>
    )
}