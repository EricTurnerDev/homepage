import { getMDXComponent } from 'mdx-bundler/client';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo } from 'react';
import Date from './date';

import styles from './post.module.css';
import SyntaxHighlighter from "./syntaxHighlighter";
import Navbar from "./navbar";

export default function Post({frontmatter, code}) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="description"
                    content="Eric Turner's website"
                />
                <meta name="og:title" content={frontmatter.title}/>
            </Head>
            <header></header>
            <Navbar />
            <main>
                <article className="mt-6 px-6 md:px-10">
                    <h1 className="text-2xl font-semibold">{frontmatter.title}</h1>
                    <div className="metadata mt-2">
                        <p>{frontmatter.author}</p>
                        <p><Date dateString={frontmatter.date}/></p>
                    </div>
                    <div className={`${styles.blogContent} mt-4`}>
                        {/* Pass components commonly used in MDX files, so you don't have to explicitly import them. */}
                        <Component components={{
                            Date,
                            pre: SyntaxHighlighter,
                        }} />
                    </div>
                </article>
            </main>
            <Link href="/">
                <a className="block font-semibold mt-6 px-6 md:mt-10 md:px-10">← Back to home</a>
            </Link>
        </>
    );
}