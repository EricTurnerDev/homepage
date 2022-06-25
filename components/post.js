import { getMDXComponent } from 'mdx-bundler/client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import Date from './date';
import Layout from './layout';
import Config from '../lib/config';

import utilStyles from '../styles/utils.module.css';
import styles from './post.module.css';
import SyntaxHighlighter from "./syntaxHighlighter";

export default function Post({frontmatter, code}) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <Layout>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <header className={styles.header}>
                <Link href="/">
                    <a>
                        <Image
                            priority
                            src={Config.profileImage.path}
                            width={Config.profileImage.width * 0.4}
                            height={Config.profileImage.height * 0.4}
                            alt={`${Config.user.firstName} ${Config.user.surname}`}
                        />
                    </a>
                </Link>
            </header>
            <main>
                <article>
                    <h1 className={utilStyles.headingLg}>{frontmatter.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={frontmatter.date}/>
                    </div>
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
        </Layout>
    );
}