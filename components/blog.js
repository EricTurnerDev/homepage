import Posts from './posts';
import classNames from "classnames";
import Back from "./back";
import Layout from './layout';

export default function Blog({ postsData, className }) {
    const siteTitle = 'Blog - ericturner.dev';

    return (
        <Layout siteTitle={siteTitle} className={classNames('blog', className)}>
            <section className="flex flex-col items-center">
                <div className="max-w-6xl px-5 mt-5">
                <Posts postsData={postsData} />
                </div>
            </section>
        </Layout>
    )
}