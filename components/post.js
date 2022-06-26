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
                <article>
                    <h1>{frontmatter.title}</h1>
                    <p>
                        Published on <Date dateString={frontmatter.date}/>
                    </p>
                    {/* Pass components commonly used in MDX files, so you don't have to explicitly import them. */}
                    <Component components={{
                        Date,
                        pre: SyntaxHighlighter,
                    }} />
                </article>
            </main>
            <div>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </>
    );
}