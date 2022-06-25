import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Date from './date';
import Layout from './layout';
import Config from '../lib/config';

import utilStyles from '../styles/utils.module.css';
import styles from './post.module.css';

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