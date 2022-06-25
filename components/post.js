import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Date from './date';
import Layout from './layout';

import utilStyles from '../styles/utils.module.css';
import styles from './post.module.css';

const name = 'Eric Turner';
const imgWidth = 400;
const imgHeight = 425;

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <header className={styles.header}>
                <Link href="/">
                    <a>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            width={imgWidth * 0.4}
                            height={imgHeight * 0.4}
                            alt={name}
                        />
                    </a>
                </Link>
            </header>
            <main>
                <article>
                    <h1 className={utilStyles.headingLg}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date}/>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
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