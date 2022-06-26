import { getMDXComponent } from 'mdx-bundler/client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import Date from './date';
import PageLayout from './pageLayout';

import utilStyles from '../styles/utils.module.css';
import styles from './post.module.css';
import SyntaxHighlighter from "./syntaxHighlighter";

export default function Post({frontmatter, code}) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <PageLayout>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <main>
                <article>
                    <h1 className={utilStyles.headingLg}>{frontmatter.title}</h1>
                    <p className={utilStyles.lightText}>
                        Published on <Date dateString={frontmatter.date}/>
                    </p>
                    {/* Pass components commonly used in MDX files, so you don't have to explicitly import them. */}
                    <Component components={{
                        Date,
                        pre: SyntaxHighlighter,
                    }} />
                </article>
            </main>
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </PageLayout>
    );
}