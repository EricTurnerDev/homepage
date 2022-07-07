import classNames from 'classnames';
import {DiscussionEmbed} from 'disqus-react';
import {getMDXComponent} from 'mdx-bundler/client';
import {useMemo} from 'react';
import CategoryLink from '../categoryLink';
import Config from '../../lib/config';
import Date from '../date';
import FadeIn from '../fadeIn';
import Icon from '../icon';
import Layout from '../layout';
import styles from './post.module.css';
import SyntaxHighlighter from '../syntaxHighlighter';
import {FrontMatterProps} from "../posts";

interface PostPageProps {
    slug: string;
    frontmatter: FrontMatterProps;
    code: string;
    className?: string;
}

export default function Post({slug, frontmatter, code, className}: PostPageProps) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <Layout siteTitle={frontmatter.title} className={classNames('post', className)}>
            <section className="flex flex-col items-center">
                <article className="flex flex-col max-w-6xl p-5 md:p-10 dark:bg-slate-700">
                    <FadeIn className="flex flex-col items-center">
                        <h1 className="pt-0 text-center">{frontmatter.title}</h1>
                        <div className="metadata flex flex-row mt-2">
                            <p className="mx-2"><Icon name="calendar"/> <Date date={frontmatter.date}/></p>
                            <p className="mx-2"><Icon name="user"/> {frontmatter.author}</p>
                        </div>
                        {frontmatter.categories &&
                            <p>Posted in <span className="pl-2">{frontmatter.categories.map(category => (
                                <CategoryLink key={category}>{category}</CategoryLink>))}</span></p>}
                    </FadeIn>
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
                <div className='mt-4 px-6 md:mt-8 md:px-10'>
                    <DiscussionEmbed
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
                </div>
            </section>

        </Layout>
    );
}