import Posts from '../posts';
import classNames from "classnames";
import Layout from '../layout';
import CategoryLink from '../categoryLink';

import {PostProps} from "../posts";
import {Categories} from "../category";

interface BlogPageProps {
    postsData: PostProps[];
    categories: Categories[];
    className?: string;
}

export default function Blog({postsData, categories, className}: BlogPageProps) {
    const siteTitle: string = 'Blog - ericturner.dev';

    return (
        <Layout siteTitle={siteTitle} className={classNames('blog', className)}>
            <section className="flex flex-col items-center">
                <div className="flex flex-row flex-wrap max-w-6xl px-5 mt-5">
                        {categories && categories.map(category => <CategoryLink key={category}>{category}</CategoryLink>)}
                </div>
            </section>

            <section className="flex flex-col items-center">
                <div className="max-w-6xl px-5">
                    <Posts className="mt-5" postsData={postsData}/>
                </div>
            </section>
        </Layout>
    )
}