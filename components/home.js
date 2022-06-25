import Image from 'next/image';
import Link from 'next/link';
import Date from './date';
import Layout from './layout';
import Config from '../lib/config';

import utilStyles from '../styles/utils.module.css';
import styles from './home.module.css';

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <header className={styles.header}>
                <Image
                    priority
                    src={Config.profileImage.path}
                    width={Config.profileImage.width * 0.7}
                    height={Config.profileImage.height * 0.7}
                    alt={`${Config.user.firstName} ${Config.user.surname}`}
                />
                <h1 className={utilStyles.headingLg}>Hi, I&apos;m {Config.user.firstName}. Welcome to my site.</h1>
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