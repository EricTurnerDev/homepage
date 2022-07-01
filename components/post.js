import {getMDXComponent} from 'mdx-bundler/client';
import {useMemo} from 'react';
import Date from './date';
import {DiscussionEmbed} from "disqus-react";
import Config from "../lib/config";

import styles from './post.module.css';
import SyntaxHighlighter from "./syntaxHighlighter";
import classNames from "classnames";
import Back from "./back";
import Layout from './layout';

export default function Post({slug, frontmatter, code, className}) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <Layout siteTitle={frontmatter.title} className={classNames('post', className)}>
            <main>
                <article className="mt-4 px-6 md:mt-8 md:px-10">
                    <h1>{frontmatter.title}</h1>
                    <div className="metadata mt-2">
                        <p>{frontmatter.author}</p>
                        <p><Date dateString={frontmatter.date}/></p>
                    </div>
                    <div className={`${styles.blogContent} mt-4`}>
                        {/* Pass components commonly used in MDX files, so you don't have to explicitly import them. */}
                        <Component components={{
                            Date,
                            pre: SyntaxHighlighter,
                        }}/>
                    </div>
                </article>
            </main>

            <Back href="/" label="home"/>

            <DiscussionEmbed
                className='mt-4 px-6 md:mt-8 md:px-10'
                shortname={Config.disqus.shortname}
                config={
                    {
                        url: `${Config.url}/posts/${slug}`,
                        identifier: slug,
                        title: frontmatter.title,
                        language: 'en_US'
                    }
                }
            />

            <footer className="mb-10">
            </footer>
        </Layout>
    );
}