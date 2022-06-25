import Image from 'next/image';
import Link from 'next/link';
import Layout from './layout';
import Date from './date';

import utilStyles from '../styles/utils.module.css';
import styles from './home.module.css';

const name = 'Eric Turner';
const imgWidth = 400;
const imgHeight = 425;

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <header className={styles.header}>
                <Image
                    priority
                    src="/images/profile.jpg"
                    width={imgWidth * 0.7}
                    height={imgHeight * 0.7}
                    alt={name}
                />
                <h1 className={utilStyles.headingLg}>Hi, I&apos;m Eric. Welcome to my site.</h1>
            </header>
            <main>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Recent posts...</h2>
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
        </Layout>
    );
}