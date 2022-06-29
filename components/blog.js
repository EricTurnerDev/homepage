import Posts from './posts';
import classNames from "classnames";
import Back from "./back";
import Layout from './layout';

export default function Blog({ allPostsData, className }) {
    const siteTitle = 'Blog - ericturner.dev';

    return (
        <Layout siteTitle={siteTitle} className={classNames('blog', className)}>
            <section className="mt-4 px-6 md:mt-8 md:px-10">
                <Posts postsData={allPostsData} />
            </section>

            <Back href="/" label="Home" />

            <footer className="mb-10">
            </footer>
        </Layout>
    )
}