import {getMDXComponent} from 'mdx-bundler/client';
import {useMemo} from 'react';
import Date from './date';
import {DiscussionEmbed} from "disqus-react";
import Config from "../lib/config";

import styles from './post.module.css';
import SyntaxHighlighter from "./syntaxHighlighter";
import classNames from "classnames";
import Layout from './layout';
import Category from "./category";
import Icon from "./icon";

export default function Post({slug, frontmatter, code, className}) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <Layout siteTitle={frontmatter.title} className={classNames('post', className)}>
            <section className="flex flex-col items-center">
                <article className="flex flex-col items-center max-w-6xl p-5 md:p-10 dark:bg-slate-700">
                    <h1 className="pt-0">{frontmatter.title}</h1>
                    <div className="metadata flex flex-row mt-2">
                        <p className="mx-2"><Icon name="calendar"/> <Date dateString={frontmatter.date}/></p>
                        <p className="mx-2"><Icon name="user"/> {frontmatter.author}</p>
                    </div>
                    {frontmatter.categories &&
                        <p>Posted in <span className="pl-2">{frontmatter.categories.map(category => (
                            <Category key={category}>{category}</Category>))}</span></p>}
                    <div className={`${styles.blogContent} mt-4`}>
                        {/* Pass components commonly used in MDX files, so you don't have to explicitly import them. */}
                        <Component components={{
                            Date,
                            pre: SyntaxHighlighter,
                        }}/>
                    </div>
                </article>
            </section>

            <section className="max-w-6xl mx-auto">
                <DiscussionEmbed
                    className='mt-4 px-6 md:mt-8 md:px-10'
                    shortname={Config.disqus.shortname}
                    config={
                        {
                            url: `${Config.url}/blog/${slug}`,
                            identifier: slug,
                            title: frontmatter.title,
                            language: 'en_US'
                        }
                    }
                />
            </section>

        </Layout>
    );
}