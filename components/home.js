import Link from 'next/link';
import Date from './date';
import PageLayout from './pageLayout';

import utilStyles from '../styles/utils.module.css';
import styles from './home.module.css';

export default function Home({ allPostsData }) {
    return (
        <PageLayout>
            <main>
                <h1 className={utilStyles.headingLg}>Hi, I&apos;m Eric. Welcome to my site</h1>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingMd}>Check out my recent posts...</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({slug, date, title}) => (
                            <li className={utilStyles.listItem} key={slug}>
                                <Link href={`/posts/${slug}`}>
                                    <a>{title}</a>
                                </Link>
                                <br/>
                                <small className={utilStyles.lightText}>
                                    <Date dateString={date}/>
                                </small>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </PageLayout>
    );
}